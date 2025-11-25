const UserDetails = () => {
    return (
        <div className="bg-amber-400 rounded-lg shadow-md p-6 max-w-md mx-auto">
            <div className="flex items-center mb-6">
                <div className="w-20 h-20 bg-linear-to-r from-emerald-600 to-pink-500 rounded-full flex items-center
                justify-center overflow-hidden mr-4">
                    <span className="text-white text-3xl font-bold">MM</span>
                </div>
                <div>
                    <h2 className="text-2xl font-bold text-gray-800">محمد میرابراهیمی</h2>
                    <p className="text-gray-600">توسعه دهنده فرانت اند</p>
                </div>
            </div>
            <div className="border-t border-gray-500 pt-4">
                <h3 className="text-lg font-semibold text-gray-500 mb-3">اطلاعات شخصی</h3>
                <div className="grid grid-cols-1 gap-3">
                    <div className="flex items-center">
                        <span className="w-24 text-gray-600">نام:</span>
                        <span className="font-medium">محمد</span>
                    </div>
                    <div className="flex items-center">
                        <span className="w-24 text-gray-600">نام خانوادگی:</span>
                        <span className="font-medium">میرابراهیمی</span>                        
                    </div>
                    <div className="flex items-center">
                        <span className="w-24 text-gray-600">ایمیل:</span>
                        <span className="font-medium">Ebrahimim29@gmail.com</span>                        
                    </div>
                    <div className="flex items-center">
                        <span className="w-24 text-gray-600">تلفن:</span>
                        <span className="font-medium">09127218192</span>                        
                    </div>
                </div>
            </div>
            
        </div>
    )
};

export default UserDetails;