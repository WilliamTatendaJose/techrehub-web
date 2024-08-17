using Azure.Storage.Blobs;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using Microsoft.Azure.Functions.Worker;
using Microsoft.Extensions.Logging;
using Newtonsoft.Json;
using SendGrid;
using SendGrid.Helpers.Mail;
using System.Net.Mail;
using System.Text.RegularExpressions;

namespace techrehub_functions
{
    public class Function1
    {
        private readonly ILogger<Function1> _logger;

        public Function1(ILogger<Function1> logger)
        {
            _logger = logger;
        }

        [Function("Function1")]
        public async Task<IActionResult> RunAsync([HttpTrigger(AuthorizationLevel.Anonymous, "get", "post")] HttpRequest req)
        {
            _logger.LogInformation("C# HTTP trigger function processed a request.");
            string requestBody = await new StreamReader(req.Body).ReadToEndAsync();
            dynamic data = JsonConvert.DeserializeObject(requestBody);

            // Extract form data
            string name = data?.name;
            string email = data?.email;
            string phone = data?.phone;
            string description= data?.description;
            string deviceType = data?.deviceType;
            string imageBase64 = data?.image;

            if (string.IsNullOrEmpty(name) || string.IsNullOrEmpty(phone) || string.IsNullOrEmpty(description))
            {
                return new BadRequestObjectResult("Please provide all required fields.");
            }
            await UploadImageToBlobStorage(email, imageBase64);

            // Send email using SendGrid
            await SendEmailWithSendGrid(name, email, phone, deviceType);

            return new OkObjectResult("Welcome to Azure Functions!");
        }

        private static async Task UploadImageToBlobStorage(string email, string imageBase64)
        {
            string connectionString = Environment.GetEnvironmentVariable("AzureWebJobsStorage");
            string containerName = "device-images";
            string blobName = $"device-image-{SanitizeEmailForBlobName(email)}.jpg";

            byte[] imageBytes = Convert.FromBase64String(imageBase64);

            var blobClient = new BlobClient(connectionString, containerName, blobName);
            await blobClient.UploadAsync(new MemoryStream(imageBytes), true);
        }
        private static string SanitizeEmailForBlobName(string email)
        {
            // Remove any characters that are not allowed in blob names
            return Regex.Replace(email, @"[^a-zA-Z0-9-.]", "-").ToLower();
        }

        private static async Task SendEmailWithSendGrid(string name, string email, string phone, string deviceType)
        {
            var apiKey = Environment.GetEnvironmentVariable("SendGridApiKey");
            var client = new SendGridClient(apiKey);
            var from = new EmailAddress(Environment.GetEnvironmentVariable("FromEmail"), "Device Repair Service");
            var subject = "New Device Repair Request";
            var to = new EmailAddress(Environment.GetEnvironmentVariable("ToEmail"));
            var plainTextContent = $"Name: {name}\nEmail: {email}\nPhone: {phone}\nDevice Type: {deviceType}";
            var htmlContent = $"<strong>Name:</strong> {name}<br><strong>Email:</strong> {email}<br><strong>Phone:</strong> {phone}<br><strong>Device Type:</strong> {deviceType}";
            var msg = MailHelper.CreateSingleEmail(from, to, subject, plainTextContent, htmlContent);
            var response = await client.SendEmailAsync(msg);

            if (response.StatusCode != System.Net.HttpStatusCode.Accepted)
            {
                throw new Exception($"Failed to send email. Status code: {response.StatusCode}");
            }
        }
    }
}
