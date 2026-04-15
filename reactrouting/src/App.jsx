import { BrowserRouter, Route, Routes, useNavigate } from "react-router-dom";
import Navbar from "./Navbar";
import { Button } from "bootstrap";
import User from "./User";
import Student from "./Student";
import Demo from "./Demo";

function Home() {
  let navigate=useNavigate();

  return (
    <>
      <h1>Home Component...</h1>
      <button onClick={()=>navigate('/user')}>User</button>
    </>
  );
}

function About() {
  return (
    <>
      <h1>About Component...</h1>
    </>
  );
}



export default function App() {
  return (
    <>
      <BrowserRouter>
        <div>
          <Navbar />
        </div>

        <div>
          <Routes>
            <Route path="/home" element={<Home />} />
            <Route path="/about" element={<About />} />
             <Route path="/user" element={<User />} />
             <Route path="/student/:id" element={<Student/>}/>
             <Route path="/demo" element={<Demo />} />
             <Route path="*" element={<h1>page note found</h1>}/>
          </Routes>
        </div>
      </BrowserRouter>
    </>
  );
}