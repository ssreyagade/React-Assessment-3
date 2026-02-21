import React, { Component } from "react";
import { NavLink } from "react-router-dom";

class CourseCard extends Component {
  render() {
    const { id, name, duration } = this.props.course;

    return (
      <div className="course-card">
        <h4>{name}</h4>
        <p>Duration: {duration}</p>
        <p className="card-text">
          <i className="bi bi-clock-fill me-1"></i> Duration: {duration}
        </p>

        <NavLink to={`/course/${id}`}>
          <button>View Details</button>
        </NavLink>
      </div>
    );
  }
}

export default CourseCard;
