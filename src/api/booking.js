import axiosSecure from "."

export const createPaymentIntent = async price=>{
    const {data} =await axiosSecure.post('/crete-payment-intent', price)
    return data;
}

export const saveBookingInfo = async paymentInfo=>{
    const {data} =await axiosSecure.post('/bookings', paymentInfo)
    return data;
}

export const updateRoomStatus = async (id, status)=>{
    const {data} =await axiosSecure.patch(`/rooms/status/${id}`, {status});
    return data;
}

export const getBooking = async(email)=>{
    const {data} =await axiosSecure(`/bookings?email=${email}`);
    return data;
}

export const hostBooking = async(email)=>{
    const {data} =await axiosSecure(`/bookings/host?email=${email}`);
    return data;
}