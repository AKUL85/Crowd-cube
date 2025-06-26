

const AddCampaign = () => {
  



  const handleSubmit = (e) => {
    e.preventDefault();
    const formData=e.target;
    const title=formData.title.value ;
    const description=formData.description.value
    const goal=formData.goal.value ;
    const image=formData.image.value ;
    const category=formData.category.value;
    console.log(title,description,goal,image,category)
   
  
  };

  return (
    <div className="max-w-3xl mx-auto mt-8 p-6 bg-white rounded shadow">
      <h2 className="text-2xl font-semibold text-blue-600 mb-6">Add New Campaign</h2>
      <form onSubmit={handleSubmit} className="space-y-4">

        <div>
          <label className="block text-sm font-medium text-gray-700">Title</label>
          <input
            type="text"
            name="title"
          
            className="mt-1 block text-gray-500 w-full border border-gray-300 rounded px-3 py-2"
            required
          />
        </div>

        <div>
          <label className="block text-sm font-medium text-gray-700">Description</label>
          <textarea
            name="description"
           
            className="mt-1 block text-gray-500 w-full border border-gray-300 rounded px-3 py-2"
            rows="4"
            required
          ></textarea>
        </div>

        <div>
          <label className="block text-sm font-medium text-gray-700">Goal Amount (BDT)</label>
          <input
            type="number"
            name="goal"
     
            className="mt-1 block text-gray-500 w-full border border-gray-300 rounded px-3 py-2"
            required
          />
        </div>

        <div>
          <label className="block text-sm font-medium text-gray-700">Image URL</label>
          <input
            type="text"
            name="image"
        
            className="mt-1 block text-gray-500 w-full border border-gray-300 rounded px-3 py-2"
            required
          />
        </div>

        <div>
          <label className="block text-sm font-medium text-gray-700">Category</label>
          <select
            name="category"
          
            className="mt-1 block text-gray-500 w-full border border-gray-300 rounded px-3 py-2"
            required
          >
            <option value="">Select a category</option>
            <option value="health">Health</option>
            <option value="education">Education</option>
            <option value="disaster">Disaster Relief</option>
            <option value="orphanage">Orphanage</option>
            <option value="other">Other</option>
          </select>
        </div>

        <button
          type="submit"
          className="bg-blue-600 text-white px-6 py-2 rounded hover:bg-blue-700 transition"
        >
          Submit Campaign
        </button>
      </form>
    </div>
  );
};

export default AddCampaign;
