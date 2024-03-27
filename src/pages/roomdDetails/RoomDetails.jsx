
import Container from "../../components/Shared/Container";
import { Helmet } from "react-helmet-async";
import RoomInfo from "./RoomInfo";
import RoomReserv from "./RoomReserv";
import { useLoaderData } from "react-router-dom";



const RoomDetails = () => {
 const room=useLoaderData();
    return (
        <Container>
            <Helmet>
                <title>{room?.title}</title>
            </Helmet>
            <section className="max-w-screen-lg mx-auto">
                <div>
                    <h1 className="text-2xl font-bold">{room?.title}</h1>
                    <p className="text-base">{room?.location}</p>
                    <div className="w-full sm:h-[60vh] overflow-hidden rounded-xl mt-7">
                        <img className="object-cover w-full" src={room?.image} alt="" />
                    </div>
                </div>
                <div className="grid grid-cols-1 md:grid-cols-7 gap-5  mt-8">
                    <div className="md:col-span-4">
                        <RoomInfo room={room}></RoomInfo>
                    </div>

                    <div className="md:col-span-3 order-first md:order-last">
                        <RoomReserv room={room}></RoomReserv>
                    </div>
                </div>
            </section>

        </Container>
    );
};

export default RoomDetails;