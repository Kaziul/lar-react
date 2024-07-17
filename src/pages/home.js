import { useState, useEffect } from "react";
import http from "../http";
import { Link } from "react-router-dom";
export default function Home() {
    const [user, setUser] = useState([]);
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
                    {user.map((u, index) => (
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