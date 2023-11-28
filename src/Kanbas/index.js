import KanbasNavigation from "./KanbasNavigation";
import { React, useState, useEffect } from "react";
import db from "src/Kanbas/Database"
import { Routes, Route, Navigate } from "react-router"
import Courses from "./Courses";
import Account from "./Account";
import Account2 from "./Users/account";
import Signin from "./Users/signin";
import Signup from "./Users/signup";
import UserTable from "./Users/table";
import AccountEdit from "./Account/Edit";
import Dashboard from "./Dashboard";
import store from "./store";
import axios from "axios";
import { Provider } from "react-redux";
function Kanbas() {
  const [courses, setCourses] = useState([]);
  const API_BASE = process.env.REACT_APP_API_BASE;
  const URL = `${API_BASE}/api/courses`;

  const findAllCourses = async () => {
    const response = await axios.get(URL);
    setCourses(response.data);

  };
  useEffect(() => {
    findAllCourses();
  }, []);





  const [course, setCourse] = useState({
    name: "New Course", number: "New Number",
    startDate: "2023-09-10", endDate: "2023-12-15",
  });


  const addNewCourse = async () => {
    const response = await axios.post(URL, course);
    setCourses([
      response.data,
      ...courses,
    ]);
  };

  const deleteCourse = async (course) => {
    const response = await axios.delete(
      `${URL}/${course._id}`
    );
    setCourses(courses.filter(
      (c) => c._id !== course._id));
  };


  const updateCourse = async (course) => {
    const response = await axios.put(
      `${URL}/${course._id}`,
      course
    );
    setCourses(
      courses.map((c) => {
        if (c._id === course._id) {
          return response.data;
        }
        return c;
      })
    );
    setCourse({ name: "" });
  };



  return (
    <Provider store={store}>
      <div className="d-flex">
        <KanbasNavigation />
        <div>
          <Routes>
            <Route path="/" element={<Navigate to="Dashboard" />} />
            <Route path="Signin" element={<Signin />} />
            <Route path="Signup" element={<Signup  />} />
            <Route path="Account" element={<Account />}></Route>
            <Route path="Account2" element={<Account2 />}></Route>
            <Route path="Account2/:id" element={<Account2 />} />
            <Route path="admin/Users" element={<UserTable />}></Route>
            <Route path="Account/Edit" element={<AccountEdit />}></Route>
            <Route path="Dashboard" element={<Dashboard
              courses={courses}
              course={course}
              setCourse={setCourse}
              addNewCourse={addNewCourse}
              deleteCourse={deleteCourse}
              updateCourse={updateCourse} />
            }></Route>
            <Route path="Courses/:courseId/*" element={<Courses
              courses={courses} />}></Route>
            <Route path="Calendar" element={<h1>Calendar</h1>}></Route>

          </Routes>
        </div>
      </div>
    </Provider>
  );
}
export default Kanbas;