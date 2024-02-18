// import { formatDistance } from "date-fns";
import Button from "../../components/Button/Button";
import Calender from "./Calender";
// import { useState } from "react";


const RoomReserv = ({room}) => {
 
    // const [value, setValue] = useState({
    //         startDate: new Date(room?.from),
    //         endDate: new Date(room?.to),
    //         key: 'selection',
    // //       })
    // const totalDays = parseInt(
    //         formatDistance(new Date(room?.to), new Date(room?.from)).split(' ')[0]
    //       );
    //       const totalPrice = totalDays * room?.price;
 
    return ( 
        <div className="rounded-xl border-[1px] border-red-400 bg-white">
            <div>
                <p className="p-4"><span className="text-lg font-semibold">$ {room?.price}</span> night</p>
            </div>
                <hr />
            <div className="flex justify-center">
                <Calender></Calender>
            </div>
            <hr />
            <div className="p-4">
               <Button label={'Reserve'}></Button>
            </div>
            <hr />
            <div className="flex justify-between p-4 text-lg font-semibold">
                <h3>Totall:</h3>
                <p>$200</p>
            </div>
        </div>
    );
};

export default RoomReserv;