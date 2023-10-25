import { Link } from "react-router-dom";
import { React, useState } from "react";
import db from "src/Kanbas/Database"
import JsonPre from "src/Labs/a3/JsonPre";
import "./index.css";
function Dashboard({ courses, course, setCourse, addNewCourse,
  deleteCourse, updateCourse }
) {



  return (
    <div className="wd-dashboard-content">
      <h1>Dashboard</h1>
      <h5>Course</h5>
      <input value={course.name} className="form-control"
        onChange={(e) => setCourse({ ...course, name: e.target.value })} />
      <input value={course.number} className="form-control"
        onChange={(e) => setCourse({ ...course, number: e.target.value })} />
      <input value={course.startDate} className="form-control" type="date"
        onChange={(e) => setCourse({ ...course, startDate: e.target.value })} />
      <input value={course.endDate} className="form-control" type="date"
        onChange={(e) => setCourse({ ...course, endDate: e.target.value })} />


      <button onClick={addNewCourse} >
        Add
      </button>

      <button onClick={updateCourse} >
        Update
      </button>

      <hr />
      <h2>Published Courses ({courses.length})</h2>
      <div className="wd-dashboard-grid row row-cols-1 row-cols-md-3 g-4">
        {courses.map((course) => (
          <Link key={course._id} to={`/Kanbas/Courses/${course._id}`} className="col">

            <div className="card h-100">
              <img src="/images/MercyWings.jpg" className="card-img-top" alt="..." />
              <h5 className="card-title">{course.name}</h5>
              <p className="card-text">This is a short card</p>


            </div>
            <button
              onClick={(event) => {
                event.preventDefault();
                deleteCourse(course._id);
              }}>
              Delete
            </button>
            <button
              onClick={(event) => {
                event.preventDefault();
                setCourse(course);
              }}>
              Edit
            </button>

          </Link>
        ))}
      </div>
    </div>
  );

}

export default Dashboard; 