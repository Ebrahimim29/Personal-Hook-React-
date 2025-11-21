// import { useEffect, useState } from "react"
import { useGetData } from "./fetchData"

const Users = () => {
    const {data, loading, error} = useGetData("https://jsonplaceholder.typicode.com/users");

    // const [data, setData] = useState(null);
    // const [loading, setLoading] = useState(true);
    // const [error, setError] = useState(null);

    // useEffect(() => {
    //     const fetchUsers = async () => {
    //         setLoading(true);
    //         try {
    //             const res = await fetch("https://jsonplaceholder.typicode.com/users");
    //             if(!res.ok) throw new Error("خطا در دریافت اطلاعات");
    //             const data = await res.json();
    //             setData(data);
    //             setLoading(false);
    //         } catch (err) {
    //             setError(err.message);
    //             setLoading(false);
    //         }
    //     };

    //     fetchUsers();
    // }, []);

    if (loading) return <div className="flex justify-center items-center min-h-[200px]">
        <span className="text-blue-400 text-lg font-medium">در حال دریافت اطلاعات ....</span>
    </div>

    if (error) return <div className="bg-red-400 text-red-300 p-4 rounded-lg text-center">{error} خطا :</div>

    return (
        <div className="max-w-3xl mx-auto p-6">
            <h2 className="text-2xl font-bold text-gray-600 mb-6 text-center">لیست کاربران</h2>
            <ul className="bg-white rounded-xl shadow-md divide-y divide-amber-300">
            {data.map((user) => (
                <li key={user.id} className="p-4 hover:bg-blue-200 transition-colors duration-200">
                    <div className="flex flex-col sm:flex-row sm:items-center justify-between">
                        <div className="flex items-center space-x-3 space-x-reverse">
                            <div className="w-10 h-10 rounded-full bg-linear-to-r from-red-300 to-emerald-500 flex items-center justify-center
                            text-white font-bold">
                                {user.name.charAt(0)}
                            </div>
                            <div className="font-medium text-gray-600">{user.name}</div>
                        </div>
                        <div className="mt-2 sm:mt-0">
                            <a href={`mailto:${user.email}`} className="text-blue-600 hover:text-blue-800 hover:underline text-sm flex items-center">
                                <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                                </svg>
                                {user.email}
                            </a>
                        </div>
                    </div>                    
                </li>
            ))}
            </ul>
        </div>
    );
}

export default Users;