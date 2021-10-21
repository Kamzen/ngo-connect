import { useEffect, useState } from "react";
import {db} from '../firebase-config'
import {collection, addDoc, getDoc, doc,getDocs} from 'firebase/firestore'

const UpdateEvent = (match) => {

    const eventsCollectionRef = collection(db,"events");

    const [eventName,setEventName] = useState("");
    const [location,setLocation] = useState("");
    const [contact,setContact] = useState(0);
    const [date,setDate] = useState("");

    const [event,setEvent] = useState([]);

    useEffect(()=>{

        // console.log(match.params.id);

        const getEvent = async () => {

            // const eventDoc = doc(db,"events",match.params.id);
            // const eventFatched = await getDocs(eventDoc)
            // .then(resp=>{
            //     console.log(resp);
            // }).catch(error=>{
            //     alert(error.message);            });
            // // setUsers(eventFatched.docs.map((doc) =>({ ...doc.data(), id: doc.id})));
            

        }

        getEvent();

    },[]);

    const update = async (e)=>{

        e.preventDefault();

        const updateDoc = doc(db,"events",match.params.id);
        const updateFields = {
            event_name:eventName,
            location : location,
            contact : contact,
            date : date
        };
        await updateDoc(updateDoc,updateFields);


    }

    return ( 
        <div className="form">

            <p className="Form-Heading">Update</p>
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
                <button  className="Register-Btn">Update Event</button>
            </form>

        </div>
     );
}
 
export default UpdateEvent;