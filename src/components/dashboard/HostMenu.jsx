import { FaClipboardList, FaHome } from "react-icons/fa";
import MenuItem from "./MenuItem";
import { MdOutlineManageHistory } from "react-icons/md";


const HostMenu = () => {
    return (
         <>
             <MenuItem
                icon={FaHome }
                label='Add Room'
                address='/dashboard/add-room'
              />
                   <MenuItem
                icon={FaClipboardList }
                label='My Listing'
                address='/dashboard/my-listing'
              />
                <MenuItem
        icon={MdOutlineManageHistory}
        label='Manage Bookings'
        address='manage-bookings'
      />
         </>
    );
};

export default HostMenu;