import axiosSecure from "."

export const saveUser=async user=>{
    const currentUser={
        email:user.email,
        role:'admin',
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
