import React from "react";
import { useParams } from "react-router-dom";
import db from "src/Kanbas/Database";
import "./index.css";
import { FaEllipsisV } from "react-icons/fa";
import { AiFillCheckCircle } from "react-icons/ai";

function ModuleList() {
  const { courseId } = useParams();
  const modules = db.modules;
  return (
    <ul className="list-group wd-assignment-table">
      {
       modules
         .filter((module) => module.course === courseId)
         .map((module, index) => (
           <li key={index} className="list-group-item">
             <h4>{module.name}</h4>
             <FaEllipsisV className="wd-assignment-ellipsis float-end"/>
              <AiFillCheckCircle className="wd-assignment-check float-end"/>
            
             
           </li>
      ))
      }
    </ul>
  );
}
export default ModuleList;