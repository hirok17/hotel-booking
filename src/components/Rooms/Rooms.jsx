/* eslint-disable no-unused-vars */
import { useEffect } from "react";
import { useState } from "react";
import RoomCard from "./RoomCard";
import { useSearchParams } from "react-router-dom";
import Heading from "../Shared/Heading";
import Loader from "../Shared/Loader";



const Rooms = () => {
    const [rooms, setRooms] = useState([]);
    const [loading, setLoading] =useState(false);
    const [params, setParams] = useSearchParams();
    const category = params.get('category');

    useEffect(() => {
        setLoading(true);
        fetch('/rooms.json')
            .then(res => res.json())
            .then(data => {
                if (category) {
                    const filtered = data.filter(room => room.category === category);
                    setRooms(filtered);
                } else {
                    setRooms(data);
                }
                setLoading(false);
            });
    }, [category])
    if(loading){
        return <Loader></Loader>
    }
    return (
        <section>
            {
                rooms && rooms.length > 0 ? <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-5">
                    {
                        rooms?.map(room => <RoomCard key={room._id} room={room}></RoomCard>)
                    }
                </div>
                    :
                    <div className="flex items-center justify-center min-h-[calc(100vh-300px)]">
                        <Heading
                            center={true}
                            title="No Rooms Available In This Category!"
                            subtitle="Please Select Other Categories."
                        ></Heading>
                    </div>

            }
        </section>
    );
};

export default Rooms;