import { Link, useLocation } from "react-router-dom";
import { BiUserCircle } from "react-icons/bi";
import { RiDashboard3Fill } from "react-icons/ri";
import { FaBook, FaInbox, FaHistory, FaCameraRetro, FaShareSquare, FaQuestionCircle } from "react-icons/fa";
import { BsFillCalendar2WeekFill } from "react-icons/bs";

import "./index.css"
function KanbasNavigation() {
  const links = ["Account", "Dashboard", "Courses", "Calendar", "Inbox", "History", "Studio", "Commons", "Help"];
  const icons = {
    Account: <BiUserCircle className="wd-icon wd-user-icon" />,
    Dashboard: <RiDashboard3Fill className="wd-icon"/>,
    Courses: <FaBook className="wd-icon"/>,
    Calendar: <BsFillCalendar2WeekFill className="wd-icon" />,
    Inbox: <FaInbox className="wd-icon" />,
    History: <FaHistory className="wd-icon" />,
    Studio: <FaCameraRetro className="wd-icon" />,
    Commons: <FaShareSquare className="wd-icon" />,
    Help: <FaQuestionCircle className="wd-icon" />
}

  const { pathname } = useLocation(); 
  return (
    <div className="list-group wd-kanbas-navigation" style={{ width: 150 }}>
      {links.map((link, index) => (
        <Link
          key={index}
          to={`/Kanbas/${link}`} 
          className={`list-group-item ${pathname.includes(link) && "active"}`}>
            
            {icons[link]}<br />
          {link}
        </Link>
      ))}
    </div>
  );
}
export default KanbasNavigation;