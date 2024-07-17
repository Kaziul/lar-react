import { useState, useEffect } from "react";
import http from "../http";
import { Link, useNavigate } from "react-router-dom";
import AuthUser from "../AuthUser";
export default function User() {
    const {user} = AuthUser();
    const navigate = useNavigate();
    const [users, setUser] = useState([]);
    useEffect(() => {
        fetchAllUsers();
    }, []);
    const fetchAllUsers = () => {
        http.get("/users").then(res => {
            setUser(res.data);
        })
    }
    const deleteUser = (id) => {
        http.delete("/users/" + id).then(res => {
            fetchAllUsers();
        })
    }
    if (user == null) {
        navigate('/login');
    }
    return (
        <div>
            <h1>Users listing ...</h1>
            <table className="table table-striped">
                <thead>
                    <tr>
                        <th>ID</th>
                        <th>Name</th>
                        <th>Email</th>
                        <th>Actions</th>
                    </tr>
                </thead>
                <tbody>
                    {users.map((u, index) => (
                        <tr key={index}>
                            <td>{index + 1}</td>
                            <td>{u?.name}</td>
                            <td>{u?.email}</td>
                            <td>
                                <Link className="btn btn-info btn-sm mr-2" to={{ pathname: "/edit/" + u.id }}>
                                    Edit
                                </Link>
                                <Link className="btn btn-primary btn-sm mr-2" to={{ pathname: "/view/" + u.id }}>
                                    View
                                </Link>
                                <button type="button" className="btn btn-danger btn-sm " onClick={() => { deleteUser(u.id) }}>
                                    Delete
                                </button>
                            </td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </div>
    );
}