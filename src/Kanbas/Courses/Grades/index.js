import db from "src/Kanbas/Database";
import { useParams } from "react-router-dom";
import { AiFillFilter } from "react-icons/ai";
import { FaFileImport } from "react-icons/fa";
import { FaFileExport } from "react-icons/fa";
import { BsFillGearFill } from "react-icons/bs";
import "./index.css";
function Grades() {
  const { courseId } = useParams();
  const assignments = db.assignments.filter((assignment) => assignment.course === courseId);
  const enrollments = db.enrollments.filter((enrollment) => enrollment.course === courseId);
  return (
    <div className="wd-grades-screen">
      <h1>Grades</h1>
      <div className="row">
        <div className="col d-flex justify-content-end">

          <button className=" btn btn-secondary mx-1"><FaFileImport />Import</button>
          <button className=" btn btn-secondary mx-1"><FaFileExport/>Export</button>
            
          <button className="btn btn-secondary mx-1"><BsFillGearFill /></button>


        </div>
      </div>


      <div className="wd-search-bars">
        <div className="row">
          <div className="col">
            <h4>Student Names</h4>
          </div>
          <div className="col">
            <h3>Assignment Names</h3>
          </div>
        </div>
        <div className="row">
          <div className="col">
            <input className="form-control w-50" placeholder="Search Students"></input>
          </div>
          <div className="col">
            <input className="form-control w-50" placeholder="Search Assignments"></input>
          </div>
        </div>


        <div className="row">
          <div className="col">
            <button className="btn btn-secondary"><AiFillFilter/>Apply Filters</button>
          </div>
        </div>
      </div>

      <div className="table-responsive">
        <table className="table table-striped">
          <thead>
            <th>Student Name</th>
            {assignments.map((assignment) => (<th>{assignment.title}</th>))}
          </thead>


          <tbody>
            {enrollments.map((enrollment) => {
              const user = db.users.find((user) => user._id === enrollment.user);
              return (
                <tr>
                   <td>{user.firstName} {user.lastName}</td>
                   {assignments.map((assignment) => {
                     const grade = db.grades.find(
                       (grade) => grade.student === enrollment.user && grade.assignment === assignment._id);
                       return (<td>{grade?.grade || ""}</td>);})}
                </tr>);
            })}
          </tbody></table>
      </div></div>);
}
export default Grades;

