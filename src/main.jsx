import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import {BrowserRouter, Routes, Route} from "react-router-dom"
import MainLayout from './MainLayout/MainLayout.jsx'
import AddCourse from './pages/AddCourse.jsx'
import EditCourse from './pages/EditCourse.jsx'
import { configureStore } from '@reduxjs/toolkit'
import { Provider } from 'react-redux'
import CoursesReducer from"./features/CoursesReducer"

const store = configureStore({
  reducer: {
    courses: CoursesReducer
  },
})
createRoot(document.getElementById('root')).render(
  <StrictMode>
    <Provider store={store}>
      <BrowserRouter>
        <Routes>
          {/* layout */}
          <Route element={<MainLayout />}>
            <Route path="/" element={<App />} />
            <Route path="/add-course" element={<AddCourse />} />
            <Route path="edit/:id" element={<EditCourse />} />
        </Route>
      </Routes>
    </BrowserRouter>
  </Provider>
  </StrictMode>,
)
