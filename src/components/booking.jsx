import { useState } from 'react';
import { Upload } from 'lucide-react';

const RepairSection = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    deviceType: '',
    description: '',
  });
  const [image, setImage] = useState(null);
  const [errors, setErrors] = useState({});

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prevData => ({
      ...prevData,
      [name]: value
    }));
  };

  const handleImageUpload = (e) => {
    const file = e.target.files[0];
    if (file && file.type.substr(0, 5) === "image") {
      setImage(file);
    } else {
      setImage(null);
      alert('Please select an image file');
    }
  };

  const validateForm = () => {
    let newErrors = {};
    if (!formData.name.trim()) newErrors.name = "Name is required";
    if (!formData.email.trim()) newErrors.email = "Email is required";
    else if (!/\S+@\S+\.\S+/.test(formData.email)) newErrors.email = "Email is invalid";
    if (!formData.phone.trim()) newErrors.phone = "Phone number is required";
    if (!formData.deviceType.trim()) newErrors.deviceType = "Device type is required";
    if (!formData.description.trim()) newErrors.description = "Description is required";
    return newErrors;
  };

  const handleSubmit = async (e) =>{
    e.preventDefault();
    const newErrors = validateForm();
    if (Object.keys(newErrors).length === 0) {
      try {
        const response = await fetch('${process.env.REACT_APP_AZURE_FUNCTION_URL}',
        { method:'POST',
          headers:{
            'Content-Type':'application/json'
          },
          body: JSON.stringify(formData),
        });
        if(response.ok){
      
          alert('Request submitted successfully!');

        }else{
        
          alert('Error submitting request, please try again later');
        }
        
        
      } catch (error) {
        console.error('Error',error);
        alert('Error submitting request, please try again later');
        
      }
      
      
    } else {
      setErrors(newErrors);
    }
  };

  return (
    <section id="repair-section" className="py-12 bg-gray-50">
      <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-3xl font-extrabold text-gray-900 text-center mb-8">Book a Repair</h2>
        <form onSubmit={handleSubmit} className="grid grid-cols-1 gap-y-6">
          <div>
            <label htmlFor="name" className="block text-sm font-medium text-gray-700">Name</label>
            <input
              type="text"
              name="name"
              id="name"
              value={formData.name}
              onChange={handleChange}
              className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm py-2 px-3 focus:outline-none focus:ring-blue-500 focus:border-blue-500"
            />
            {errors.name && <p className="mt-2 text-sm text-red-600">{errors.name}</p>}
          </div>
          <div>
            <label htmlFor="email" className="block text-sm font-medium text-gray-700">Email</label>
            <input
              type="email"
              name="email"
              id="email"
              value={formData.email}
              onChange={handleChange}
              className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm py-2 px-3 focus:outline-none focus:ring-blue-500 focus:border-blue-500"
            />
            {errors.email && <p className="mt-2 text-sm text-red-600">{errors.email}</p>}
          </div>
          <div>
            <label htmlFor="phone" className="block text-sm font-medium text-gray-700">Phone Number</label>
            <input
              type="tel"
              name="phone"
              id="phone"
              value={formData.phone}
              onChange={handleChange}
              className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm py-2 px-3 focus:outline-none focus:ring-blue-500 focus:border-blue-500"
            />
            {errors.phone && <p className="mt-2 text-sm text-red-600">{errors.phone}</p>}
          </div>
          <div>
            <label htmlFor="deviceType" className="block text-sm font-medium text-gray-700">Device Type</label>
            <select
              name="deviceType"
              id="deviceType"
              value={formData.deviceType}
              onChange={handleChange}
              className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm py-2 px-3 focus:outline-none focus:ring-blue-500 focus:border-blue-500"
            >
              <option value="">Select a device type</option>
              <option value="smartphone">Smartphone</option>
              <option value="tablet">Tablet</option>
              <option value="laptop">Laptop</option>
              <option value="desktop">Desktop</option>
              <option value="other">Other</option>
            </select>
            {errors.deviceType && <p className="mt-2 text-sm text-red-600">{errors.deviceType}</p>}
          </div>
          <div>
            <label htmlFor="description" className="block text-sm font-medium text-gray-700">Fault Description</label>
            <textarea
              name="description"
              id="description"
              rows="4"
              value={formData.description}
              onChange={handleChange}
              className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm py-2 px-3 focus:outline-none focus:ring-blue-500 focus:border-blue-500"
            ></textarea>
            {errors.description && <p className="mt-2 text-sm text-red-600">{errors.description}</p>}
          </div>
          <div>
            <label className="block text-sm font-medium text-gray-700">Device Image</label>
            <div className="mt-1 flex justify-center px-6 pt-5 pb-6 border-2 border-gray-300 border-dashed rounded-md">
              <div className="space-y-1 text-center">
                <Upload className="mx-auto h-12 w-12 text-gray-400" />
                <div className="flex text-sm text-gray-600">
                  <label htmlFor="file-upload" className="relative cursor-pointer bg-white rounded-md font-medium text-blue-600 hover:text-blue-500 focus-within:outline-none focus-within:ring-2 focus-within:ring-offset-2 focus-within:ring-blue-500">
                    <span>Upload a file</span>
                    <input id="file-upload" name="file-upload" type="file" className="sr-only" onChange={handleImageUpload} accept="image/*" />
                  </label>
                  <p className="pl-1">or drag and drop</p>
                </div>
                <p className="text-xs text-gray-500">PNG, JPG, GIF up to 10MB</p>
              </div>
            </div>
            {image && <p className="mt-2 text-sm text-green-600">Image uploaded: {image.name}</p>}
          </div>
          <div>
            <button
              type="submit"
              className="w-full flex justify-center py-2 px-4 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-blue-600 hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500"
            >
              Submit Repair Request
            </button>
          </div>
        </form>
      </div>
    </section>
  );
};

export default RepairSection;
