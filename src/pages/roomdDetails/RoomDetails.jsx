import { useParams } from "react-router-dom";
import Container from "../../components/Shared/Container";
import { useEffect, useState } from "react";
import Loader from "../../components/Shared/Loader";
import { Helmet } from "react-helmet-async";

const RoomDetails = () => {
    const {id} =useParams();
    const [room, setRoom] = useState({});
    const [loading, setLoading] =useState(false);

    useEffect(() => {
        setLoading(true);
        fetch('/rooms.json')
            .then(res => res.json())
            .then(data => {
                const roomData=data.find(item=>item._id === id);
                setRoom(roomData);
                setLoading(false);
            });
    }, [id])
    if(loading){
        return <Loader></Loader>
    }
    return (
        <Container>
            <Helmet>
                <title>{room?.title}</title>
            </Helmet>
            <h1>{room?.title}</h1>
        </Container>
    );
};

export default RoomDetails;