import { useState } from "react";
import {db} from '../firebase-config'
import {collection, addDoc} from 'firebase/firestore'

const AddEvent = () => {

    const eventsCollectionRef = collection(db,"events");

    const [eventName,setEventName] = useState("");
    const [location,setLocation] = useState("");
    const [contact,setContact] = useState("");
    const [date,setDate] = useState("");

    const add = async (e)=>{

        e.preventDefault();

        await addDoc(eventsCollectionRef,{
            event_name:eventName,
            location : location,
            contact : contact,
            date : date
        }).then(()=>{
            alert("Event Added Successfully");
        }).catch(error=>{
            console.log(error.message);
        });


    }

    return ( 
        <div className="form">

            <p className="Form-Heading">Add Event</p>
            <hr/>

            <form className="Form-Body">

                
                <input onChange={(e)=>setEventName(e.target.value)} type="text" placeholder="Event Name..."/>
                <br/>
               
                <input onChange={(e)=>setLocation(e.target.value)} type="text" placeholder="Location..."/>
                <br/>

                <input onChange={(e)=>setContact(e.target.value)} type="number" placeholder="Contact..."/>
                <br/>

                <input onChange={(e)=>setDate(e.target.value)} type="text" placeholder="Date..."/>
                <br/>
                <button onClick={add} className="Register-Btn">Add Event</button>
            </form>

        </div>
     );
}
 
export default AddEvent;