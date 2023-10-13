import { Link } from "react-router-dom";
import db from "src/Kanbas/Database"
import JsonPre from "src/Labs/a3/JsonPre";
import "./index.css";
function Dashboard() {
    const courses = db.courses;
    return (
        <div class="wd-dashboard-content">
          <h1>Dashboard</h1>
          <hr />
          <h2>Published Courses ({courses.length})</h2>
          <div className="wd-dashboard-grid row row-cols-1 row-cols-md-3 g-4">
            {courses.map((course) => (
              <Link key={course._id} to={`/Kanbas/Courses/${course._id}`} className="col">
                
                <div class="card h-100">
                  <img src="/images/MercyWings.jpg" class="card-img-top" alt="..." />
                  <h5 class="card-title">{course.name}</h5>
                  <p class="card-text">This is a short card</p>
                </div>
              </Link>
            ))}
          </div>
        </div>
      );
    
}

export default Dashboard; 