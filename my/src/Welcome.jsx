import { BrowserRouter, Routes, Route, Link, Outlet } from "react-router-dom";

function Profile() {
  return <h1>Profile Component</h1>;
}

function Courses() {
  return <h1>Courses Component</h1>;
}

function Home() {
  return (
    <>
      <h1>Home Component</h1>

      <nav>
        <Link to="/courses">Courses</Link> |{" "}
        <Link to="/profile">Profile</Link>
      </nav>

      <Outlet />
    </>
  );
}

export default function Welcome() {
  return (
    <>
    
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />}>
          <Route path="courses" element={<Courses />} />
          <Route path="profile" element={<Profile />} />
        </Route>
      </Routes>
    </BrowserRouter>
    </>
  );
}