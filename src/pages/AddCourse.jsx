import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import { createCourse } from "../features/CoursesReducer";
import { toast } from "react-toastify";

const AddCourse = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const [form, setForm] = useState({
    title: "",
    description: "",
    image: "",
    avatar: "",
    tutorjob: "",
    price: "",
    name: "",
  });

  const handleChange = (e) => {
    setForm({
      ...form,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      await dispatch(createCourse(form)).unwrap();
      toast.success("Course berhasil ditambahkan 🔥");
      navigate("/");
    } catch (err) {
      toast.error("Gagal menambahkan course");
    }
  };

  return (
    <div className="container mx-auto p-6 max-w-xl">
      <h1 className="text-2xl font-bold mb-6">Add Course</h1>

      <form onSubmit={handleSubmit} className="space-y-4">
        <input
          name="title"
          placeholder="Title"
          onChange={handleChange}
          className="w-full border p-2 rounded"
        />

        <textarea
          name="description"
          placeholder="Description"
          onChange={handleChange}
          className="w-full border p-2 rounded"
        />

        <input
          name="image"
          placeholder="Image URL"
          onChange={handleChange}
          className="w-full border p-2 rounded"
        />

        <input
          name="avatar"
          placeholder="Avatar URL"
          onChange={handleChange}
          className="w-full border p-2 rounded"
        />

        <input
          name="name"
          placeholder="Tutor Name"
          onChange={handleChange}
          className="w-full border p-2 rounded"
        />

        <input
          name="tutorjob"
          placeholder="Tutor Job"
          onChange={handleChange}
          className="w-full border p-2 rounded"
        />

        <input
          name="price"
          placeholder="Price"
          onChange={handleChange}
          className="w-full border p-2 rounded"
        />

        <button className="bg-blue-600 text-white px-4 py-2 rounded w-full">
          Add Course
        </button>
      </form>
    </div>
  );
};

export default AddCourse;
