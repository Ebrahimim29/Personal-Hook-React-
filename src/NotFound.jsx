import { Link } from "react-router-dom";

const NotFound = () => {
    return(
        <div className="min-h-screen bg-linear-60 from-lime-500 to-indigo-600 flex items-center justify-center px-4">
            <div className="max-w-lg w-full text-center">
                <div className="mb-8">
                    <h1 className="text-9xl font-bold text-indigo-700">404</h1>
                    <div className="h-1.5 w-24 bg-red-400 mx-auto my-5 rounded-full"></div>
                </div>

                <h2 className="text-3xl font-bold text-gray-700 mb-3">صفحه مورد نظر یافت نشد!</h2>
                <p className="text-gray-600 mb-8">متاسفانه صفحه ای که به دنبال آن هستید وجود ندارد یا حذف شده است</p>

                <div className="relative mb-10">
                    <div className="absolute inset-0 flex items-center">
                        <div className="w-full border-t border-gray-500"></div>
                    </div>
                    <div className="relative flex justify-center">
                        <span className="bg-linear-to-br from-lime-950 to-red-800 px-4 text-sm text-gray-500">یا</span>
                    </div>
                </div>

                <div className="flex flex-col sm:flex-row gap-4 justify-center">
                    <Link to="/" className="px-6 py-3 bg-indigo-600 text-white font-medium rounded-lg shadow-md hover:bg-amber-300
                    transition-colors duration-300 !no-underline">
                        بازگشت به خانه
                    </Link>

                    <Link to="/users" className="px-6 py-3 bg-indigo-700 text-white font-medium rounded-lg shadow-md hover:bg-amber-400
                    transition-colors duration-300 border border-amber-300" >
                        مشاهده کاربران
                    </Link>
                </div>
            </div>
        </div>
    )
};

// part356(404) 4:00

export default NotFound;