import React, { useState } from "react";

const DynamicForm = ({ schema, onSubmit }) => {
  const [formData, setFormData] = useState({});

  const handleChange = (e) => {
    const { name, type, value, files } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: type === "file" ? files[0] : value, // Store file object for file input
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    onSubmit(formData);
  };

  return (
    <form
      onSubmit={handleSubmit}
      className="space-y-4 p-4 bg-white rounded-2xl shadow-lg"
    >
      <h2 className="text-xl font-bold">{schema.title}</h2>
      {schema.fields.map((field) => (
        <div key={field.name} className="flex flex-col">
          <label className="mb-1">{field.label}</label>
          {field.type === "select" ? (
            <select
              name={field.name}
              onChange={handleChange}
              className="p-2 rounded-lg border"
              required={field.required}
            >
              <option value="">Select...</option>
              {field.options?.map((option) => (
                <option key={option} value={option}>
                  {option}
                </option>
              ))}
            </select>
          ) : field.type === "textarea" ? (
            <textarea
              name={field.name}
              onChange={handleChange}
              className="p-2 rounded-lg border h-32 resize-none"
              required={field.required}
              placeholder="Enter your text here..."
            />
          ) : (
            <input
              type={field.type}
              name={field.name}
              onChange={handleChange}
              className="p-2 rounded-lg border"
              required={field.required}
              accept={field.type === "file" ? field.accept || "*" : undefined} // Support file type restrictions
            />
          )}
        </div>
      ))}
      <button
        type="submit"
        className="w-full p-2 bg-blue-600 text-white rounded-xl hover:bg-blue-700 transition"
      >
        {schema.submitText}
      </button>
    </form>
  );
};

export default DynamicForm;
