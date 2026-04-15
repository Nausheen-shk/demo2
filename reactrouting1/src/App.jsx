import { BrowserRouter, Routes, Route, useNavigate } from "react-router-dom";
import { useState } from "react";

// 🔹 Home Component
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

// 🔹 Profile Component (Form)
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

      <input
        type="text"
        name="name"
        placeholder="Enter Name"
        value={data.name}
        onChange={handleChange}
      />

      <br /><br />

      <input
        type="email"
        name="email"
        placeholder="Enter Email"
        value={data.email}
        onChange={handleChange}
      />

      <br /><br />

      <input
        type="text"
        name="course"
        placeholder="Enter Course"
        value={data.course}
        onChange={handleChange}
      />

      <br /><br />

      <button onClick={handleSubmit}>Submit</button>
    </div>
  );
}

// 🔹 About Component
function About() {
  return (
    <div>
      <h1>About Page</h1>
      <h3>Java Courses</h3>
      <p>Core Java, Advanced Java, Spring Boot</p>
    </div>
  );
}

// 🔹 Courses Component
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

// 🔹 User Component (Display Data Safely)
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
      <p><b>Name:</b> {data.name}</p>
      <p><b>Email:</b> {data.email}</p>
      <p><b>Course:</b> {data.course}</p>
    </div>
  );
}

// 🔹 Main App
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
