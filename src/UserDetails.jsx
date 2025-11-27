import { useEffect, useState } from "react";
import { Link, useLocation, useParams } from "react-router";

const UserDetails = () => {
    // const params = useParams()
    // console.log(params.userId);
     
    const {userId} = useParams()
    const [user, setUser] = useState(null);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);

    const location = useLocation();
    
    const {user : selectedUser} = location.state
    console.log(selectedUser);
    
    

    useEffect(() => {
        setLoading(true);
        fetch(`https://jsonplaceholder.typicode.com/users/${userId}`)
        .then((res) => {
            if (!res.ok) throw new Error("خطا در دریافت اطلاعات کاربر");
            return res.json();
        })
        .then((data) => {
            setUser(data);
            setLoading(false);
        })
        .catch((err) => {
            setError(err.message);
            setLoading(false);
        });
    }, [userId]);

    if (loading) return (
        <div className="flex justify-center items-center min-h-[300px">
            <span className="text-blue-600 text-lg font-medium">
                در حال دریافت اطلاعات کاربر...
            </span>
        </div>
    );

    if (error) return (
        <div className="bg-red-500 text-shadow-emerald-400 p-4 rounded-lg text-center">
            {error}  خطا : 
            <Link to="/users" className="block mt-4 text-blue-600 hover:underline">
                بازگشت به لیست کاربران
            </Link>
        </div>
    );

    if (!user) return null;

    const initials = user.name
        .split(' ')
        .map(part => part[0])
        .join('')
        .toUpperCase();

    

    return (
        <div className="fixed w-full h-screen left-0 top-0 z-20 bg-black/50 flex justify-center items-center">
            <div className="bg-amber-400 rounded-lg shadow-md p-6 max-w-md mx-auto mb-4">
                <div className="flex items-center mb-6">
                    <div className="w-20 h-20 bg-linear-to-r from-emerald-600 to-pink-500 rounded-full flex items-center
                justify-center overflow-hidden mr-4">
                        <span className="text-white text-3xl font-bold">{initials}</span>
                    </div>
                    <div>
                        <h2 className="text-2xl font-bold text-gray-800">{user.name}</h2>
                        <p className="text-gray-600">{user.company.name}</p>
                    </div>
                </div>
                <div className="border-t border-gray-500 pt-4">
                    <h3 className="text-lg font-semibold text-gray-500 mb-3">اطلاعات شخصی</h3>
                    <div className="grid grid-cols-1 gap-3">
                        <div className="flex items-center">
                            <span className="w-24 text-gray-600">نام کاربری:</span>
                            <span className="font-medium">{user.username}</span>
                        </div>
                        <div className="flex items-center">
                            <span className="w-24 text-gray-600">ایمیل:</span>
                            <span className="font-medium">{user.email}</span>
                        </div>
                        <div className="flex items-center">
                            <span className="w-24 text-gray-600">تلفن:</span>
                            <span className="font-medium">{user.phone}</span>
                        </div>
                        <div className="flex items-center">
                            <span className="w-24 text-gray-600">وب سایت:</span>
                            <span className="font-medium">{user.website}</span>
                        </div>
                    </div>
                </div>
                <div className="border-t border-gray-200 mt-4 pt-4">
                    <h3 className="text-lg font-semibold text-gray-700 mb-3">آدرس</h3>
                    <div className="grid grid-cols-1 gap-3">
                        <div className="flex items-center">
                            <span className="w-24 text-gray-600">خیابان:</span>
                            <span className="font-medium">{user.address.street}</span>
                        </div>
                        <div className="flex items-center">
                            <span className="w-24 text-gray-600">شهر:</span>
                            <span className="font-medium">{user.address.city}</span>
                        </div>
                    </div>
                </div>
                <div className="border-t border-gray-300 mt-4 pt-4">
                    <h3 className="text-lg font-semibold text-gray-700 mb-3">مهارت ها</h3>
                    <div className="flex flex-wrap gap-2">
                        <span className="bg-indigo-400 text-indigo-900 px-3 py-1 rounded-full text-sm">React</span>
                        <span className="bg-indigo-400 text-indigo-900 px-3 py-1 rounded-full text-sm">JavaScript</span>
                        <span className="bg-indigo-400 text-indigo-900 px-3 py-1 rounded-full text-sm">HTML</span>
                        <span className="bg-indigo-400 text-indigo-900 px-3 py-1 rounded-full text-sm">CSS</span>
                        <span className="bg-indigo-400 text-indigo-900 px-3 py-1 rounded-full text-sm">Tailwind</span>
                    </div>
                </div>
                <div className="flex justify-end px-2 mt-10">
                    <Link to={"/users"} className="bg-gray-500 text-white rounded py-1 px-2">
                        بازگشت
                    </Link>
                </div>
            </div>
        </div>
    )
};

export default UserDetails;