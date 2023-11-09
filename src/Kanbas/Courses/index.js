import { Navigate, Route, Routes, useParams } from "react-router-dom";
import JsonPre from "src/Labs/a3/JsonPre";
import { useState, useEffect } from "react";
import axios from "axios";
import db from "src/Kanbas/Database";
import CourseNavigation from "src/Kanbas/Courses/CourseNavigation";
import Modules from "./Modules";
import Assignments from "./Assignments";
import AssignmentEditor from "./Assignments/AssignmentEditor";
import Home from "./Home";
import Grades from "./Grades";
import Breadcrumb from "./Breadcrumb"
import Settings from "./Settings";
import "./index.css"
function Courses() {
    const { courseId } = useParams();
    const [course, setCourse] = useState({});
    const URL = "http://localhost:4000/api/courses";
    const findCourseById = async (courseId) => {
        const response = await axios.get(
            `${URL}/${courseId}`
        );
        setCourse(response.data);
    };
    useEffect(() => {
        findCourseById(courseId);
    }, [courseId]);

    return (
        <div>
            <Breadcrumb />
            <hr className="horizontal-rule" />
            <CourseNavigation />

            <div>

                <div
                    className="overflow-y-scroll position-fixed bottom-0 end-0"
                    style={{
                        left: "320px",
                        top: "50px",
                    }}
                >
                    <Routes>
                        <Route path="/" element={<Navigate to="Home" />} />
                        <Route path="Home" element={<Home />} />
                        <Route path="Modules" element={<Modules />} />
                        <Route path="Assignments" element={<Assignments />} />
                        <Route path="Assignments/:assignmentId"
                            element={<AssignmentEditor />} />

                        <Route path="Grades" element={<Grades />} />
                        <Route path="Settings/*" element={<Settings />} />
                    </Routes>
                </div>
            </div>
        </div>
    )
}

export default Courses; 