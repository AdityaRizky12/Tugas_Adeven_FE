import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate, useParams } from "react-router-dom";
import { editCourse } from "../features/CoursesReducer";
import { toast } from "react-toastify";

const EditCourse = () => {
  const { id } = useParams();
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const { data } = useSelector((state) => state.courses);

const course = data.find((c) => c.id.toString() === id);


  const [form, setForm] = useState({
    title: "",
    description: "",
    image: "",
    avatar: "",
    tutorjob: "",
    price: "",
    name: "",
  });

  useEffect(() => {
    if (course) setForm(course);
  }, [course]);

  const handleChange = (e) => {
    setForm({
      ...form,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = async (e) => {
  e.preventDefault();

  try {
    await dispatch(editCourse({ id, updateData: form })).unwrap();
    toast.success("Course berhasil diupdate ✨");
    navigate("/");
  } catch {
    toast.error("Gagal update");
  }
};


  if (!course) return <p>Loading...</p>;

  return (
    <div className="container mx-auto p-6 max-w-xl">
      <h1 className="text-2xl font-bold mb-6">Edit Course</h1>

      <form onSubmit={handleSubmit} className="space-y-4">
        <input name="title" value={form.title} onChange={handleChange} className="w-full border p-2 rounded" />
        <textarea name="description" value={form.description} onChange={handleChange} className="w-full border p-2 rounded" />
        <input name="image" value={form.image} onChange={handleChange} className="w-full border p-2 rounded" />
        <input name="avatar" value={form.avatar} onChange={handleChange} className="w-full border p-2 rounded" />
        <input name="name" value={form.name} onChange={handleChange} className="w-full border p-2 rounded" />
        <input name="tutorjob" value={form.tutorjob} onChange={handleChange} className="w-full border p-2 rounded" />
        <input name="price" value={form.price} onChange={handleChange} className="w-full border p-2 rounded" />

        <button className="bg-green-600 text-white px-4 py-2 rounded w-full">
          Update Course
        </button>
      </form>
    </div>
  );
};

export default EditCourse;
