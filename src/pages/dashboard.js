import { useEffect, useState } from "react";
import AuthUser from "../AuthUser";

export default function Dashboard() {
    const { http } = AuthUser();
    const [userdetail, setUserdetail] = useState();
    useEffect(() => {
        fetchUserDetail();
    }, []);
    const fetchUserDetail = () => {
        http.get('/me').then(res => {
            setUserdetail(res.data);
        })
    }
    if (userdetail) {
        return (
            <div>
                <h1>Dashboard</h1>
                <h4>Welcome {userdetail.name}</h4>
                <h4>Email: {userdetail.email}</h4>
            </div>
        )
    } else {
        return (
            <div>
                <h1>Dashboard</h1>
                <h4>Loading...</h4>
            </div>
        )
    }
}