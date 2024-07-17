import { useState } from "react";
import AuthUser from "../AuthUser";

export default function Login() {
    const { http ,setToken} = AuthUser();
    const [email, setEmail] = useState();
    const [password, setPassword] = useState();
    const submitForm = () => {
        http.post('/login', {
            email: email
            , password: password
        }).then(res => {
            setToken(res.data.user, res.data.access_token);
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
                        <label>Email</label>
                        <input onChange={e => setEmail(e.target.value)} name="email" type="email" className="form-control" />
                        <label>Password</label>
                        <input onChange={e => setPassword(e.target.value)} name="password" type="password" className="form-control" />
                        <button onClick={submitForm} type="button" className="btn btn-info mt-2">Login</button>
                    </div>
                </div>
            </div>
        </div>
    );
}