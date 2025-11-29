// import { useState } from "react";
import Users from "./Users";
import Posts from "./Posts";
import { Link, Navigate, NavLink, Route, Routes, useNavigate } from "react-router-dom";
import AddUser from "./AddUser";
import UserDetails from "./UserDetails";
import NotFound from "./NotFound";

const App = () => {
  // const [page , setPage] = useState("users");

  // const gotoPostsPage = true;

  const navigate = useNavigate()

  const handleSomeAction = () => {
    //Do something.......
    navigate("/users")
  }

  return (
    <div className="min-h-screen bg-linear-to-br from-blue-400 to-amber-500 p-6">
      {/* {gotoPostsPage ? (<Navigate to={"posts"}/>) : null} */}
      <div className="max-w-4xl mx-auto bg-white/30 rounded shadow-md overflow-hidden">
        <header className="sticky top-0 left-0 right-0 bg-white shadow-md p-4">
          <div className="flex flex-col justify-center items-center gap-4">
            <h1 className="text-3xl font-bold text-center text-emerald-500 mb-4">
              React App
            </h1>
            <div className="flex justify-center mb-2 gap-4">
              <NavLink
                to="/users"
                className={({ isActive }) =>
                  `p-2 rounded ${
                    isActive
                      ? "bg-linear-to-r from-blue-300 to-red-400 text-white"
                      : "bg-linear-to-l from-pink-300 to-yellow-400 text-gray-700 hover:bg-gray-200"
                  }`
                }
              >
                کاربران
              </NavLink>
              <NavLink
                to="/posts"
                className={({ isActive }) =>
                  `p-2 rounded ${
                    isActive
                      ? "bg-blue-600 text-white"
                      : "bg-blue-300 text-gray-700 hover:bg-gray-500"
                  }`
                }
              >
                پست ها
              </NavLink>
            </div>
          </div>
        </header>

        <div className="p-6 mt-20">
          <h1 className="text-center">به اپلیکیشن من خوش آمدید</h1>
          <button onClick={handleSomeAction} className="bg-indigo-500 hover:bg-indigo-800 text-white py-2 px-4 mx-80 my-3 rounded">
            انجام عملیات و ریدایرکت
          </button>
          {/* {page === "users" && <Users/>}
            {page === "posts" && <Posts/>} */}
          {/* <BrowserRouter> */}
          <Routes>
            <Route path="/users" element={<Users />}>
              <Route path="add-user" element={<AddUser />}></Route>
              <Route
                path="user-details/:userId"
                element={<UserDetails />}
              ></Route>
              {/* <Route path=":userId" element={<UserDetails/>}></Route> */}
            </Route>
            <Route path="/posts" element={<Posts />}></Route>
            <Route path="*" element={<NotFound/>}></Route>
          </Routes>
          {/* </BrowserRouter> */}          
        </div>
      </div>
    </div>
  );
};
export default App;
