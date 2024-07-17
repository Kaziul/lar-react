import { useEffect, useState } from "react";
import http from "../http";
import { useNavigate, useParams } from "react-router-dom";

export default function View(props) {
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
    return (
        <div>
            <h1>View</h1>
            <div className="row">
                <div className="col-sm-6 justify-content-center">
                   <h4>Mame</h4>
                   <p>{inputs.name}</p>
                   <h4>Email</h4>
                   <p>{inputs.email}</p>
                </div>
            </div>
        </div>
    );
}