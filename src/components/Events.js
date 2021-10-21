import { useEffect, useState } from "react";
import {db} from '../firebase-config'
import {collection, deleteDoc, doc,getDocs} from 'firebase/firestore'


const Home = () => {

    const eventsCollectionRef = collection(db,"events");
    const [events,setEvents] = useState([]);

    useEffect(()=>{

        const getEvents = async ()=>{

            const fetchedEvents= await getDocs(eventsCollectionRef);
            setEvents(fetchedEvents.docs.map((doc) =>({ ...doc.data(), id: doc.id})));
           
        }

        getEvents();

    },[]);

    const update = (id) => {

        window.location.href = "/update/" + id;

    }

    const del = async (id) => {

        const eventDoc = doc(db,"events",id);
        await deleteDoc(eventDoc)
        .then(resp=>{
            alert("Deleted Successfully , Please Refresh The Page");
        }).catch(error=>{
            alert(error.message);
        });

    }

    const add = () =>{

        window.location.href = "add-event";

    }

    return ( 
        <div>
            {events.map(event=>{
                return (
                    <div className="event">

                        <h1>Event Name: {event.event_name}</h1>
                        <p>Lcation : {event.location}</p>
                        <p>Contact : {event.contact}</p>
                        <p>Date : {event.date}</p>

                        <div className="btns">
                            <button onClick={()=>update(event.id)}>Update</button>
                            <button onClick={()=>del(event.id)}>Delete</button>
                        </div>

                     </div>
                )
            })}
            <div className="add">
            <button onClick={add}>Add Event</button>
            </div>
        </div>
     );
}
 
export default Home;