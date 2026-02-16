import axios from 'axios';

const API_URL = import.meta.env.VITE_API_URL + "/courses";


export const getCourses = async () => {
    const response = await axios.get(API_URL);
    return response.data;
}

export const addCourse = async (course) => {
    const response = await axios.post(API_URL, course);
    return response.data.id ? response.data : {...course, id: Date.now()};
}

export const updateCourse = async (id, updateData) => {
    const response = await axios.put(`${API_URL}/${id}`, updateData);
    return response.data.id ? response.data : {...updateData, id};
}
export const deleteCourse = async (id) => {
    await axios.delete(`${API_URL}/${id}`);
}