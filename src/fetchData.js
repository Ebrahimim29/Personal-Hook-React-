import { useEffect, useState } from "react";

export const useGetData = (url) => {
    const [data, setData] = useState(null);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);

    useEffect(() => {
        const fetchPosts = async () => {
            setLoading(true);
            try {
                const res = await fetch(url);
                if(!res.ok) throw new Error("خطا در دریافت اطلاعات");
                const data = await res.json();
                // برای posts فقط 12 مورد اول را نمایش می‌دهیم
                setData(url.includes('posts') ? data.slice(0,12) : data);
                setLoading(false);
            }catch (err) {
                setError(err.message);
                setLoading(false);
            }
        };

        fetchPosts();

    }, [url]);

    return {data, loading, error};
}