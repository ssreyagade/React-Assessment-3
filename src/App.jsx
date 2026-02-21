import React, { Component } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar.jsx";
import CourseList from "./components/CourseList.jsx";
import CourseDetails from "./components/CourseDetails.jsx";
import Invalid from "./components/Invalid.jsx";

class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
      courses: [
        {
          id: 1,
          name: "HTML Basics",
          duration: "4 Weeks",
          price: 1999,
          description:
            "Learn the fundamentals of HTML5, structure web pages, and create semantic content.",
        },
        {
          id: 2,
          name: "CSS Mastery",
          duration: "6 Weeks",
          price: 2499,
          description:
            "Master CSS3, Flexbox, Grid, and responsive design for modern websites.",
        },
        {
          id: 3,
          name: "JavaScript Fundamentals",
          duration: "8 Weeks",
          price: 3499,
          description:
            "Understand JavaScript basics, DOM manipulation, and build interactive web apps.",
        },
      ],
    };
  }

  render() {
    return (
      <Router>
        <Navbar courses={this.state.courses} />

        <Routes>
          <Route
            path="/"
            element={<CourseList courses={this.state.courses} />}
          />

          <Route
            path="/course/:id"
            element={<CourseDetails courses={this.state.courses} />}
          />

          <Route path="*" element={<Invalid />} />
        </Routes>
      </Router>
    );
  }
}

export default App;
