// import { useState } from "react";
import Users from "./Users";
import Posts from "./Posts";
import { BrowserRouter, Route, Routes } from "react-router";

const App = () => {

  // const [page , setPage] = useState("users");

  return(
    <div className="min-h-screen bg-linear-to-br from-blue-400 to-amber-500 p-6">
      <div className="max-w-4xl mx-auto bg-white/30 rounded shadow-md overflow-hidden">
        <div className="p-6">
          <h1 className="text-3xl font-bold text-center text-emerald-500 mb-6">React App</h1>

          <div className="flex justify-center mb-8 gap-4">
            <button
            // onClick={() => setPage("users")}
            className={`px-6 py-3 rounded font-medium transition-all duration-200`}
              // ${page === "users" 
              //   ? "bg-amber-500 text-white shadow-md"
              //   : "bg-gray-500 text-gray-700 hover:bg-gray-200"
              // }`}
            >
              کاربران
            </button>
            <button
            // onClick={() => setPage("posts")}
            className={`px-6 py-3 rounded font-medium transition-all duration-200`}
              // ${page === "posts"
              //   ? "bg-emerald-700 text-white shadow-md"
              //   : "bg-gray-500 text-gray-700 hover:bg-gray-200"
              // }`}
            >
              پست ها
            </button>
          </div>

          <div className="bg-gray-200 rounded p-4">
            {/* {page === "users" && <Users/>}
            {page === "posts" && <Posts/>} */}

            <BrowserRouter>
              <Routes>
                <Route path="/users" element={<Users/>}></Route>
                <Route path="/posts" element={<Posts/>}></Route>
              </Routes>
            </BrowserRouter>
          </div>
        </div>
      </div>


    </div>
  )
}

export default App;