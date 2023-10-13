import CourseDetails from "./CourseDetails"
import SettingsNavigation from "./SettingsNavigation";
import Navigation from "./Navigation";
import { Navigate, Route, Routes, useParams } from "react-router-dom";
function Settings() {
    return (
        <div>
            <SettingsNavigation />
            <hr />
            <Routes>
                <Route path="/" element={<Navigate to="CourseDetails" />} />
                <Route path="CourseDetails" element={<CourseDetails/>} />
                <Route path="Navigation" element={<Navigation />} />
            </Routes>
        </div>
    )
}

export default Settings;