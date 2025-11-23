// import { useState } from "react";
import Users from "./Users";
import Posts from "./Posts";
import { Link, NavLink, Route, Routes } from "react-router";

const App = () => {

  // const [page , setPage] = useState("users");

  return(
    <div className="min-h-screen bg-linear-to-br from-blue-400 to-amber-500 p-6">
      <div className="max-w-4xl mx-auto bg-white/30 rounded shadow-md overflow-hidden">
        <div className="p-6">
          <h1 className="text-3xl font-bold text-center text-emerald-500 mb-6">React App</h1>

          <div className="flex justify-center mb-8 gap-4">
            <NavLink
            to="/users"
            className={({isActive}) => `p-2 rounded ${isActive 
            ? "bg-linear-to-r from-blue-300 to-red-400 text-gray"
            : "bg-linear-to-l from-pink-300 to-yellow-400 text-gray-700 hover:bg-gray-200"
            }`}
            >
            کاربران
            </NavLink>
            <NavLink
            to="/posts"
            style={({isActive}) => ({
              backgroundColor: isActive ? "bg-indigo-600" : "bg-gray-100",
              color: isActive ? "white" : "gray-700",
              padding: "0.5rem 1rem",
              borderRadius: "0.25rem"
            })}
            className={({isActive}) => `p-2 rounded ${isActive
              ? "bg-red text-white"
              : "bg-red-300 text-gray-700 hover:bg-gray-500"
            }`}
            >
              پست ها
            </NavLink>
          </div>

          <div className="bg-gray-200 rounded p-4">
            {/* {page === "users" && <Users/>}
            {page === "posts" && <Posts/>} */}

            {/* <BrowserRouter> */}
              <Routes>
                <Route path="/users" element={<Users/>}></Route>
                <Route path="/posts" element={<Posts/>}></Route>
              </Routes>
            {/* </BrowserRouter> */}
          </div>
        </div>
      </div>


    </div>
  )
}

export default App;