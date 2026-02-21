import React, { Component } from "react";
import CourseCard from "./CourseCard.jsx";

class CourseList extends Component {
  render() {
    return (
      <div className="container mt-5">
        {/* Bootstrap styled heading */}
        <h3 className="text-primary fw-bold text-center mb-4">
          Available Courses
        </h3>

        {/* Responsive grid for course cards */}
        <div className="row">
          {this.props.courses.map((course) => (
            <div key={course.id} className="col-md-4 col-sm-6 mb-4">
              <CourseCard course={course} />
            </div>
          ))}
        </div>
      </div>
    );
  }
}

export default CourseList;
