import axiosSecure from "."


export const getAllrooms=async ()=>{
    const {data}=await axiosSecure('/rooms');
    return data;
}
// host roomas
export const getHostroom=async (email)=>{
    const {data}= await axiosSecure(`/rooms/${email}`);
    return data;
}
export const getRoomInfo=async (id)=>{
    const {data}=await axiosSecure(`/room/${id}`);
    return data;
}

export const saveRoom=async (roomData)=>{
    const {data}=await axiosSecure.post(`/rooms`, roomData);
    return data;
}

// delete room

export const deleteRoom=async (id)=>{
    const {data}=await axiosSecure.delete(`/room/${id}`);
    return data;
}