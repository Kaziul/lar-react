import { useState } from "react";
import AuthUser from "../AuthUser";
import { useNavigate } from "react-router-dom";

export default function Register() {
    const navigate = useNavigate();
    const { http, setToken } = AuthUser();
    const [name, setName] = useState();
    const [email, setEmail] = useState();
    const [password, setPassword] = useState();
    const submitForm = () => {
        http.post('/register', {
            name: name,
            email: email
            , password: password
        }).then(res => {
            navigate('/login');
        })
    }
    return (
        <div>
            <div className="row">
                <div className="col-sm-3 ">
                </div>
                <div className="col-sm-6 justify-content-center">
                    <h1 className="text-center mb-4">Login</h1>

                    <div className="card p-4">
                        <label>Name</label>
                        <input onChange={e => setName(e.target.value)} name="name" type="text" className="form-control" />
                        <label>Email</label>
                        <input onChange={e => setEmail(e.target.value)} name="email" type="email" className="form-control" />
                        <label>Password</label>
                        <input onChange={e => setPassword(e.target.value)} name="password" type="password" className="form-control" />
                        <button onClick={submitForm} type="button" className="btn btn-info mt-2">Register</button>
                    </div>
                </div>
            </div>
        </div>
    );
}