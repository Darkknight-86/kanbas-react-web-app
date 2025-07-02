import { Link } from 'react-router-dom';

export default function Dashboard() {
  return (
    <div id="wd-dashboard">
      <h1 id="wd-dashboard-title">Dashboard</h1> <hr />
      <h2 id="wd-dashboard-published">Published Courses (7)</h2> <hr />
      <div id="wd-dashboard-courses">
        <div className="wd-dashboard-course">
          <Link
            to="/Kambaz/Courses/1234/Home"
            className="wd-dashboard-course-link"
          >
            <img
              src="/images/react.jpg"
              width={200}
              alt="React Course"
            />
            <div>
              <h5>CS1234 React JS</h5>
              <p className="wd-dashboard-course-title">Full Stack software developer</p>
              <button>Go</button>
            </div>
          </Link>
        </div>
        <div className="wd-dashboard-course">
          <Link
            to="/Kambaz/Courses/2345/Home"
            className="wd-dashboard-course-link"
          >
            <img
              src="/images/node.jpg"
              width={200}
              alt="Node Course"
            />
            <div>
              <h5>CS2345 Node.js</h5>
              <p className="wd-dashboard-course-title">Backend development with JavaScript</p>
              <button>Go</button>
            </div>
          </Link>
        </div>
        <div className="wd-dashboard-course">
          <Link
            to="/Kambaz/Courses/3456/Home"
            className="wd-dashboard-course-link"
          >
            <img
              src="/images/python.jpg"
              width={200}
              alt="Python Course"
            />
            <div>
              <h5>CS3456 Python Programming</h5>
              <p className="wd-dashboard-course-title">Introduction to Python and data science</p>
              <button>Go</button>
            </div>
          </Link>
        </div>
        <div className="wd-dashboard-course">
          <Link
            to="/Kambaz/Courses/4567/Home"
            className="wd-dashboard-course-link"
          >
            <img
              src="/images/java.jpg"
              width={200}
              alt="Java Course"
            />
            <div>
              <h5>CS4567 Java Development</h5>
              <p className="wd-dashboard-course-title">Object-oriented programming with Java</p>
              <button>Go</button>
            </div>
          </Link>
        </div>
        <div className="wd-dashboard-course">
          <Link
            to="/Kambaz/Courses/5678/Home"
            className="wd-dashboard-course-link"
          >
            <img
              src="/images/database.jpg"
              width={200}
              alt="Database Course"
            />
            <div>
              <h5>CS5678 Database Systems</h5>
              <p className="wd-dashboard-course-title">SQL, NoSQL, and database design</p>
              <button>Go</button>
            </div>
          </Link>
        </div>
        <div className="wd-dashboard-course">
          <Link
            to="/Kambaz/Courses/6789/Home"
            className="wd-dashboard-course-link"
          >
            <img
              src="/images/mobile.jpg"
              width={200}
              alt="Mobile Development Course"
            />
            <div>
              <h5>CS6789 Mobile Development</h5>
              <p className="wd-dashboard-course-title">iOS and Android app development</p>
              <button>Go</button>
            </div>
          </Link>
        </div>
        <div className="wd-dashboard-course">
          <Link
            to="/Kambaz/Courses/7890/Home"
            className="wd-dashboard-course-link"
          >
            <img
              src="/images/ai.jpg"
              width={200}
              alt="AI Course"
            />
            <div>
              <h5>CS7890 Artificial Intelligence</h5>
              <p className="wd-dashboard-course-title">Machine learning and AI fundamentals</p>
              <button>Go</button>
            </div>
          </Link>
        </div>
      </div>
    </div>
  );
}
