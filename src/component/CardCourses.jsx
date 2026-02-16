import React, { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import { fetchCourses, removeCourse } from "../features/CoursesReducer";
import {toast} from "react-toastify";

const CardCourses = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const { data, loading, error } = useSelector((state) => state.courses);

  useEffect(() => {
    dispatch(fetchCourses());
  }, [dispatch]);

const handleDelete = async (id) => {
  const confirmDelete = confirm("Yakin hapus?");
  if (!confirmDelete) return;

  try {
    await dispatch(removeCourse(id)).unwrap();
    toast.success("Course berhasil dihapus 🔥");
  } catch (error) {
    toast.error("Gagal hapus course");
  }
};

  if (loading) return <p>Loading courses...</p>;
  if (error) return <p>Error: {error}</p>;

  return (
    <div className="container mx-auto p-6">
      {/* HEADER */}
      <div className="flex justify-between items-center mb-8">
        <h1 className="text-2xl font-bold">Courses</h1>

        <button
          onClick={() => navigate("/add-course")}
          className="flex items-center gap-2 bg-blue-600 hover:bg-blue-700 text-white px-5 py-2.5 rounded-lg shadow"
        >
          ＋ Add Course
        </button>
      </div>

      {/* LIST */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {data.map((course) => (
          <div
            key={course.id}
            className="bg-white rounded-xl shadow hover:shadow-lg transition overflow-hidden"
          >
            <img src={course.image} className="h-48 w-full object-cover" />

            <div className="p-4">
              <h2 className="font-bold text-lg">{course.title}</h2>
              <p className="text-gray-600 text-sm">{course.description}</p>

              <div className="flex items-center gap-3 mt-4">
                <img src={course.avatar} className="w-10 h-10 rounded-full" />
                <div>
                  <p className="text-sm font-semibold">{course.name}</p>
                  <p className="text-xs text-gray-500">{course.tutorjob}</p>
                </div>
              </div>

              {/* ACTION */}
              <div className="mt-4 flex justify-between items-center">
                <p className="font-bold text-blue-600"> Rp {course.price}</p>

                <div className="flex gap-2">
                  <button
                    onClick={() => navigate(`/edit/${course.id}`)}
                    className="bg-gray-200 px-3 py-1 rounded text-sm"
                  >
                    Edit
                  </button>

                  <button
                    onClick={() => handleDelete(course.id)}
                    className="bg-red-500 hover:bg-red-600 text-white px-3 py-1 rounded text-sm"
                  >
                    Delete
                  </button>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default CardCourses;
