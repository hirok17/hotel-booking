import { useState } from "react";
import useRole from "../../hooks/useRole";
import HostModal from "../modal/HostModal";
import MenuItem from "./MenuItem";
import { BsFingerprint } from "react-icons/bs";
import { GrUserAdmin } from 'react-icons/gr'
import { becomeHost } from "../../api/auth";
import useAuth from "../../hooks/useAuth";
import toast from "react-hot-toast";
const GuestMenu = () => {
  const [role] =useRole();
  const {user}=useAuth();
  const [isOpen, setIsOpen] =useState(false);
  const modalHandler= async()=>{
    try{
      const data =await becomeHost(user?.email);
      console.log(data);
      if(data.modifiedCount > 0){
        toast.success('Success!, Please wait for admin confirmation');
      }else{
        toast.success('Please wait for approve');
      }
    }catch(err){
      toast.error(err.message)
    }finally{
      setIsOpen(false);
    }
  }
    return (
       <>
         <MenuItem
                icon={BsFingerprint }
                label='My Booking'
                address='/dashboard/my-booking'
              />
                  {role === 'guest' && (
        <div className='flex items-center px-4 py-2 mt-5  transition-colors duration-300 transform text-gray-600  hover:bg-gray-300   hover:text-gray-700 cursor-pointer'>
          <GrUserAdmin className='w-5 h-5' />

          <span onClick={()=>setIsOpen(true)} className='mx-4 font-medium'>Become A Host</span>
        </div>
        
      )}
      <HostModal isOpen={isOpen} modalHandler={modalHandler} setIsOpen={setIsOpen}></HostModal>
      </>
    );
};

export default GuestMenu;