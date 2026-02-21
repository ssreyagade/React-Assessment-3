import React, { Component } from "react";

class CourseDetails extends Component {
  render() {
    const path = window.location.pathname;
    const id = parseInt(path.split("/")[2]);

    const course = this.props.courses.find((c) => c.id === id);

    if (!course) return <h3>Course Not Found</h3>;

    return (
      <div className="course-details">
        <h3>{course.name}</h3>
        <p>Duration: {course.duration}</p>
        <p>Price: ₹{course.price}</p>
        <p>
          <i className="bi bi-info-circle me-1"></i> Description:{" "}
          {course.description}
        </p>

        <button onClick={() => alert("Enrollment Successful!")}>Enroll</button>
      </div>
    );
  }
}

export default CourseDetails;
