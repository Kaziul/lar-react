import { useState } from "react";
import http from "../http";
import { useNavigate } from "react-router-dom";
import AuthUser from "../AuthUser";

export default function Create() {
    const navigate = useNavigate();
    const [inputs, setInputs] = useState({});

    const { user } = AuthUser();
    console.log('user',user);
    if (user == null) {
        navigate('/login');
    }

    const handleChange = (event) => {
        const name = event.target.name;
        const value = event.target.value;
        setInputs(values => ({ ...values, [name]: value }))
    }

    const submitForm = () => {
        console.log(inputs);
        http.post('users', inputs).then(res => {
            navigate('/');
        })
    }
    return (

        <div>
            <h1>Create</h1>
            <div className="row">
                <div className="col-sm-6 justify-content-center">
                    <label>Name</label>
                    <input type="text" value={inputs.name || ''} onChange={handleChange} name="name" className="form-control" />
                    <label>Email</label>
                    <input type="email" value={inputs.email || ''} onChange={handleChange} name="email" className="form-control" />
                    <label>Password</label>
                    <input type="password" value={inputs.password || ''} onChange={handleChange} name="password" className="form-control" />
                    <button type="button" onClick={submitForm} className="btn btn-info mt-2">Save</button>
                </div>
            </div>
        </div>
    );
}