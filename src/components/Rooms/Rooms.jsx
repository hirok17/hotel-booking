import { useEffect } from "react";
import { useState } from "react";
import RoomCard from "./RoomCard";
 

 
const Rooms = () => {
    const [rooms, setRooms]=useState([]);

    useEffect(()=>{
        fetch('./rooms.json')
        .then(res=>res.json())
        .then(data=>setRooms(data));
    },[])
    return (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-5">
             {
                rooms?.map(room=><RoomCard key={room._id} room={room}></RoomCard>)
             }
        </div>
    );
};

export default Rooms;