/* eslint-disable no-unused-vars */
import { useState } from "react";
import Button from "../../components/Button/Button";
import Calender from "./Calender";
import { formatDistance } from "date-fns";
import BookingModal from "../../components/modal/BookingModal";
import useAuth from "../../hooks/useAuth";

const RoomReserv = ({room}) => {
    const [isOpen, setIsOpen] = useState(false);
    const {user}=useAuth();

    const closeModal=()=>{
        setIsOpen(false);
    }
    const [value, setValue] = useState({
            startDate: new Date(room?.from),
            endDate: new Date(room?.to),
            key: 'selection',
          })
    const totalDays = parseInt(
            formatDistance(new Date(room?.to), new Date(room?.from)).split(' ')[0]
          );
          const totalPrice = (totalDays * room?.price).toFixed(2);

      const [bookingInfo, setBookingInfo] =useState({
            guest:{
                name:user?.displayName,
                email:user?.email,
                image:user?.photoURL
            },
            host:room?.host?.email,
            location:room?.location,
            price:totalPrice,
            to:value.endDate,
            from:value.startDate,
            title:room?.title,
            roomId:room?._id,
            image:room?.image
        
      })    
 
    return ( 
        <div className="rounded-xl border-[1px] border-red-400 bg-white">
            <div>
                <p className="p-4"><span className="text-lg font-semibold">$ {room?.price}</span> night</p>
            </div>
                <hr />
            <div className="flex justify-center">
                <Calender value={value}></Calender>
            </div>
            <hr />
            <div className="p-4">
               <Button disabled={room.host.email === user.email || room.booked} onClick={()=>setIsOpen(true)} label={room.booked? 'Booked':'Reserve'}></Button>
            </div>
            <hr />
            <div className="flex justify-between p-4 text-lg font-semibold">
                <h3>Totall:</h3>
                <p>${totalPrice}</p>
            </div>
            <BookingModal isOpen={isOpen} bookingInfo={bookingInfo} closeModal={closeModal}></BookingModal>
        </div>
    );
};

export default RoomReserv;