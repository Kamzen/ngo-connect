import { useState } from "react";
import { useHistory } from "react-router";
import {db} from '../firebase-config'
import {collection, addDoc} from 'firebase/firestore'

const Register = () => {

    const history = useHistory();

    const usersCollectionRef = collection(db,"users");

    const [username,setUsername] = useState("");
    const [name,setName] = useState("");
    const [surname,setSurname] = useState("");
    const [password,setPasword] = useState("");

    const register = async (e) => {

        e.preventDefault();

        await addDoc(usersCollectionRef,{
            username : username,
            name : name,
            surname : surname,
            password : password,
            type : "affilate"
        }).then((resp)=>{

            window.location.href = "/login";

        });

    }

    return ( 
        <div className="form">

            <p className="Form-Heading">Register</p>
            <hr/>

            <form className="Form-Body">

                
                <input onChange={(e)=>{setUsername(e.target.value)}} type="text" name="Username" placeholder="Username..."/>
                <br/>
               
                <input onChange={(e)=>{setName(e.target.value)}} type="text" name="Name" placeholder="Name..."/>
                <br/>

                <input onChange={(e)=>{setSurname(e.target.value)}} type="text" name="Surname" placeholder="Surname"/>
                <br/>

                <input onChange={(e)=>{setPasword(e.target.value)}} type="password" name="Password" placeholder="Password"/>
                <br/>

                <button onClick={register} className="btn">Register</button><br/>

                <label>Already A User</label>
                <button className="Register-Btn">Sign In</button>

            </form>

        </div>
     );
}
 
export default Register;