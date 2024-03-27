/* eslint-disable no-unused-vars */
import { Helmet } from "react-helmet-async";
import AddRoomForm from "../../components/Form/AddRoomForm";
import { useState } from "react";
import { imageUpload } from "../../api/utils";
import useAuth from "../../hooks/useAuth";
import { saveRoom } from "../../api/rooms";
import toast from "react-hot-toast";
import { useNavigate } from "react-router-dom";

const AddRoom = () => {
    const navigate=useNavigate();
    const {user}=useAuth();
    console.log(user);
    const[loading, setLoading]=useState(false);
    const [uploadButtonText, setUploadButtonText] = useState('Upload Image');
    const [dates, setDates] =useState({
        startDate:new Date(),
        endDate:new Date(),
        key:'selection'
    })
    const handleSubmit=async (e)=>{
        e.preventDefault();
        setLoading(true);
        const form = e.target
        const location = form.location.value;
        const category = form.category.value;
        const title = form.title.value
        const to = dates.endDate;
        const from = dates.startDate;
        const price = form.price.value;
        const guests = form.total_guest.value;
        const bathrooms = form.bathrooms.value;
        const description = form.description.value;
        const bedrooms = form.bedrooms.value;
        const image = form.image.files[0];
        const room_image=await imageUpload(image);
        const host = {
          name: user?.displayName,
          image: user?.photoURL,
          email: user?.email,
        }
       
        const roomData = {
            location,
            category,
            title,
            to,
            from,
            price,
            guests,
            bathrooms,
            bedrooms,
            host,
            description,
            image: room_image?.data?.display_url
          }
        try{
            setLoading(true);
            const data=await saveRoom(roomData);
            setUploadButtonText('uploaded');
            toast.success('Room add successfuly');
            navigate('/dashboard/my-listing');
            

        }catch (error) {
            console.log(error);
        }finally {
            setLoading(false);
        }
    }
    //date change
    const handelDates=(ranges)=>{
        setDates(ranges.selection);
    }
    const handleImageChange=(image)=>{
        setUploadButtonText(image.name);

    }
    return (
        <div>
             <Helmet>
                <title>Add Room | Dashboard</title>
             </Helmet>
             <AddRoomForm 
             handleSubmit={handleSubmit}
             handleDates={handelDates}
            dates={dates}
            handleImageChange={handleImageChange}
            loading={loading}
            uploadButtonText={uploadButtonText}
             >

             </AddRoomForm>
        </div>
    );
};

export default AddRoom;