import { BrowserRouter, Routes, Route, useNavigate } from "react-router-dom";
import { useState } from "react";

// Home
function Home() {
  const navigate = useNavigate();
  return (
    <div>
      <h1>Home Page</h1>
      <button onClick={() => navigate("/profile")}>
        Get Started
      </button>
    </div>
  );
}

// Profile
function Profile() {
  const navigate = useNavigate();

  const [data, setData] = useState({
    name: "",
    email: "",
    course: ""
  });

  const handleChange = (e) => {
    setData({
      ...data,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = () => {
    localStorage.setItem("user", JSON.stringify(data));
    navigate("/courses");
  };

  return (
    <div>
      <h2>Registration Form</h2>

      <input name="name" placeholder="Name" value={data.name} onChange={handleChange} />
      <br /><br />

      <input name="email" placeholder="Email" value={data.email} onChange={handleChange} />
      <br /><br />

      <input name="course" placeholder="Course" value={data.course} onChange={handleChange} />
      <br /><br />

      <button onClick={handleSubmit}>Submit</button>
    </div>
  );
}

// About
function About() {
  return (
    <div>
      <h1>About Page</h1>
      <p>Java Courses: Core Java, Spring Boot</p>
    </div>
  );
}

// Courses
function Courses() {
  const navigate = useNavigate();
  return (
    <div>
      <h1>Courses Page</h1>
      <button onClick={() => navigate("/user")}>
        Submit Registration
      </button>
    </div>
  );
}

// User
function User() {
  let data;

  try {
    data = JSON.parse(localStorage.getItem("user")) || {};
  } catch {
    data = {};
  }

  return (
    <div>
      <h1>User Details</h1>
      <p>Name: {data.name}</p>
      <p>Email: {data.email}</p>
      <p>Course: {data.course}</p>
    </div>
  );
}

// App
export default function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/profile" element={<Profile />} />
        <Route path="/about" element={<About />} />
        <Route path="/courses" element={<Courses />} />
        <Route path="/user" element={<User />} />
      </Routes>
    </BrowserRouter>
  );
}