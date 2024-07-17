import { useEffect, useState } from "react";
import http from "../http";
import { useNavigate, useParams } from "react-router-dom";

export default function Edit(props) {
    const navigate = useNavigate();
    const [inputs,setInputs] = useState({});
    const {id} = useParams();
    useEffect(()=>{
        fetchUser();
    },[]);
    const fetchUser =()=>{
        http.get('users/'+id +'/edit').then((res)=>{
         setInputs({
            name:res.data.name,
            email:res.data.email,
         })   
        })
    }
    const handleChange = (event) =>{
        const name= event.target.name;
        const value = event.target.value;
        setInputs(values =>({...values,[name]:value}))
    }

    const submitForm =()=>{
        console.log(inputs);
       http.put('/users/'+id,inputs).then(res=>{
        navigate('/');
       })
    }
    return (
        <div>
            <h1>Edit</h1>
            <div className="row">
                <div className="col-sm-6 justify-content-center">
                    <label>Name</label>
                    <input type="text" value={inputs.name || ''} onChange={handleChange} name="name" className="form-control" />
                    <label>Email</label>
                    <input type="email" value={inputs.email || ''} onChange={handleChange} name="email" className="form-control" />
                    <button type="button" onClick={submitForm} className="btn btn-info mt-2">Update</button>
                </div>
            </div>
        </div>
    );
}