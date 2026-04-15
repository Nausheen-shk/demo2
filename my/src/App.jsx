import { BrowserRouter, Route, Routes, useLocation, useNavigate, useSearchParams, Link } from "react-router-dom";
import Welcome from "./Welcome";
//import Demo from "./Demo";

// function Home() {
//   return (
//     <>
//       <h1>Home Component</h1>
//     </>
//   );
// }

// function User() {

//   let location = useLocation();
//   let [search, setSearch] = useSearchParams();
//   let navigate = useNavigate();

//   let user = { u_id: 1, name: "nausheen" };

//   return (
//     <>
//       <h1>User Component</h1>

//       <p>User ID from URL: {search.get("id")}</p>

//       <button onClick={() => navigate('/demo', { state: { user: user } })}>
//         Go to Demo
//       </button>
//     </>
//   );
// }

// function Demo() {
//   let location = useLocation();

//   let obj = location.state?.user;

//   return (
//     <>
//       <h1>Demo Component</h1>
//       <p>{JSON.stringify(obj)}</p>
//     </>
//   );
// }

// function Navbar() {
//   return (
//     <>
//       <nav>
//         <ul>
//           <li><Link to="/">Home</Link></li>
//           <li><Link to="/user?id=100">User</Link></li>
//         </ul>
//       </nav>
//     </>
//   );
// }

export default function App() {
  return (
    <>
      {/* <BrowserRouter>
        <Navbar />

        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/user" element={<User />} />
          <Route path="/demo" element={<Demo />} />
        </Routes>
      </BrowserRouter> */}
      <Welcome/>
    </>
  );
}