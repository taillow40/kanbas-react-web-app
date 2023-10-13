import KanbasNavigation from "./KanbasNavigation";
import {Routes, Route, Navigate} from "react-router"
import Courses from "./Courses";
import Account from "./Account";
import Dashboard from "./Dashboard";
function Kanbas() {
    return(
      <div className="d-flex">
       <KanbasNavigation />
       <div>
        <Routes>
          <Route path="/" element={<Navigate to="Dashboard" />} />
          <Route path="Account" element = {<Account />}></Route>
          <Route path="Dashboard" element = {<Dashboard />}></Route>
          <Route path="Courses/:courseId/*" element = {<Courses />}></Route>
          <Route path="Calendar" element = {<h1>Calendar</h1>}></Route>

        </Routes>
       </div>
       </div>
    );
 }
 export default Kanbas;