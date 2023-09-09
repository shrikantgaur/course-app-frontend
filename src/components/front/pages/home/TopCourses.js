import React from "react";

function TopCourses() {
  // Sample course data
  const topCourses = [
    { id: 1, title: "Course 1", description: "Description of Course 1" },
    { id: 2, title: "Course 2", description: "Description of Course 2" },
    { id: 3, title: "Course 3", description: "Description of Course 3" },
    // Add more course objects as needed
  ];

  return (
    <div className="container mt-5">
      <h2>Top Courses</h2>
      <div className="row">
        {topCourses.map((course) => (
          <div key={course.id} className="col-md-4 mb-4">
            <div className="card">
              <img
                // src={`https://placeimg.com/300/200/tech?${course.id}`}
                src={`./images/home/course.jpg`}
                className="card-img-top"
                alt={`Course ${course.id}`}
              />
              <div className="card-body">
                <h5 className="card-title">{course.title}</h5>
                <p className="card-text">{course.description}</p>
                <a href="#" className="btn btn-primary">
                  Learn More
                </a>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default TopCourses;
