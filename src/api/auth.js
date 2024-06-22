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
    const {data}=await axiosSecure.post(`/jwt`, {email});
    console.log("token:", data);

    return data;
}

export const clearToken=async ()=>{
    const {data}=await axiosSecure.get('/logout');

    return data;
}
 export const getRoll= async(email)=> {
    const {data}=await axiosSecure(`/user/${email}`);
    return data.role;
}
// get all users

export const getAllusers= async()=> {
    const {data}=await axiosSecure('/users');
    return data;
}

//user role update

export const updateRoll=async({email, role})=>{
    const currentUser={
        email,
        role,          
        status:'Verified'
    }
    const {data}=await axiosSecure.put(`/users/update/${email}`, currentUser);

    return data;
}

//become a host
export const becomeHost =async(email)=>{
    const currentUser={
        email,
        status:'Requested',
    }
    const {data}=await axiosSecure.put(`/users/${email}`, currentUser);
    return data;
}

//get admin stat
export const getAdminstat = async()=>{
    const {data} =await axiosSecure('/admin-stat');
    return data;
}