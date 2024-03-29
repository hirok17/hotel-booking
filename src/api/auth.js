import axiosSecure from "."

export const saveUser=async user=>{
    const currentUser={
        email:user.email,
        role:'guest',
        status:'Verified'
    }
    const {data}=await axiosSecure.put(`/users/${user?.email}`, currentUser);

    return data;
}

export const getToken=async email=>{
    const {data}=await axiosSecure.post(`/jwt`, email);
    console.log("token:", data);

    return data;
}

export const clearToken=async ()=>{
    const {data}=await axiosSecure.get('/logout');

    return data;
}
 export const getRoll= async(email)=> {
    const {data}=await axiosSecure(`/users/${email}`);

    return data;
}
 