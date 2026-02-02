import { useState } from "react";

const CreatorForm = ({ initialData = {}, onSubmit, submitText = "Submit" }) => {
  const [formData, setFormData] = useState({
    name: initialData.name || "",
    url: initialData.url || "",
    description: initialData.description || "",
    imageURL: initialData.imageURL || "",
  });

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    onSubmit(formData);
  };

  return (
    <form onSubmit={handleSubmit} className="max-w-sm mx-auto p-4">
      <div className="mb-4">
        <label className="block mb-2">Name</label>
        <input
          type="text"
          name="name"
          value={formData.name}
          onChange={handleChange}
          required
          className="w-full border p-2 rounded bg-white text-stone-500"
        />
      </div>

      <div className="mb-4">
        <label className="block mb-2">URL</label>
        <input
          type="url"
          name="url"
          value={formData.url}
          onChange={handleChange}
          required
          className="w-full border p-2 rounded bg-white text-stone-500 "
        />
      </div>

      <div className="mb-4">
        <label className="block mb-2">Description</label>
        <textarea
          name="description"
          value={formData.description}
          onChange={handleChange}
          className="w-full border p-2 rounded bg-white text-stone-500"
        />
      </div>

      <div className="mb-4">
        <label className="block mb-2">Image URL</label>
        <input
          type="url"
          name="imageURL"
          value={formData.imageURL}
          onChange={handleChange}
          className="w-full border p-2 rounded bg-white text-stone-500"
        />
      </div>

      <button
        type="submit"
        className="bg-blue-500 text-white px-6 py-2 rounded"
      >
        {submitText}
      </button>
    </form>
  );
};

export default CreatorForm;
