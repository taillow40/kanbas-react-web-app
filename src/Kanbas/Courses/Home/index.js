import ModuleList from "src/Kanbas/Courses/Modules/ModuleList";
import { AiOutlinePlus, AiFillCheckCircle } from "react-icons/ai";
import { FaEllipsisV } from "react-icons/fa";
import "./index.css";
import React from 'react';
import { IoIosCloudUpload, IoIosPlay } from 'react-icons/io';
import { FaCloudDownloadAlt } from 'react-icons/fa';
import { AiFillHome, AiOutlineLineChart, AiOutlineBell } from 'react-icons/ai';
import {BsFillMegaphoneFill} from 'react-icons/bs';

function Home() {
  const statusButtons =[ 
    "Import Existing Content",
  "Import From Commons",
  "Choose Home Page",
  "View Course Stream",
  "New Announcement",
  "New Analytics",
  "View Course Notifications"];
  const statusIcons = [
    <IoIosCloudUpload />,
    <FaCloudDownloadAlt />,
    <AiFillHome />,
    <IoIosPlay />,
    <BsFillMegaphoneFill />,
    <AiOutlineLineChart />,
    <AiOutlineBell />,
  ]
  return (
    <div className='wd-home-grid'>
      <div className="wd-home-modules">
        <button className="btn btn-danger float-end mx-1"><AiOutlinePlus/>Module</button>
          <div className="dropdown float-end mx-1">
            <button className="btn btn-secondary dropdown-toggle" type="button" id="dropdownMenuButton" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
              <AiFillCheckCircle/>
              Publish All
            </button>
            <div className="dropdown-menu" aria-labelledby="dropdownMenuButton">
              <a className="dropdown-item" href="#">Action</a>
              <a className="dropdown-item" href="#">Another action</a>
              <a className="dropdown-item" href="#">Something else here</a>
            </div>
          </div>
        <button className="btn btn-secondary float-end mx-1">View Progress</button>
        <button className="btn btn-secondary float-end mx-1">Collapse All</button>
        <br></br>
        <br></br>
        <ModuleList />
      </div>
      
      <div className="d-none d-lg-block wd-course-status">
        <h1>Course Status</h1>
        <ul className="wd-no-bullets">
        {statusButtons.map((buttonText, index) => (
                <li className="wd-course-status-list"key={index}><a href="#" className='btn btn-secondary'>{statusIcons[index]}{buttonText}</a></li>
            ))}
        </ul>
        <h2>Coming Up</h2>
        <hr></hr>
        <a href="#">View Calendar</a>
        <ul>
          <li><a href="#">Lecture CS4550.12631.202410 Sep 7 at 11:45am</a></li>
          <li><a href="#">Lecture CS4550.12631.202410 Sep 11 at 11:45am</a></li>
          <li><a href="#">CS5610 06 SP23 Lecture Sep 11 at 6pm</a></li>
        </ul>
      </div>
    </div>
  );
}
export default Home;

