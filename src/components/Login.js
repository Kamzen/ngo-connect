import { useEffect, useState } from 'react';
import {useHistory} from 'react-router-dom'

import {db} from '../firebase-config'
import {collection, getDocs} from 'firebase/firestore'
import {getAuth, signInWithEmailAndPassword} from 'firebase/auth'



const Form = () => {

    const history  = useHistory();
    const [email,setEmail] = useState("");
    const [password,setPassword] = useState("");



    const login = (e)=>{

        e.preventDefault()
        const auth = getAuth()
        signInWithEmailAndPassword(auth,email,password)
        .then(userCredentials=>{

            

        })
        .catch(error=>{

            alert(error.message);

        });
        

    }

    return ( 
        <div className="form">
            <p className="Form-Heading">Sign In</p>
            <hr/>

            <form className="Form-Body">

                
                <input onChange={(e)=>{setEmail(e.target.value)}} type="email" placeholder="Email..."/>
                <br/>
               
                <input onChange={(e)=>{setPassword(e.target.value)}} type="password" placeholder="Password..."/>
                <br/>
                <button className="btn" onClick={login} >Sign In</button><br/>

                <label>New User</label>
                <button onClick={()=>{
                    history.push('/register')
                }} className="Register-Btn">Register</button>

            </form>

        </div>
     );
}
 
export default Form;