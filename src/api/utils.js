import axios from "axios";

export const imageUpload=async(image)=>{
    const formData=new FormData();
    formData.append('image', image);
   
      const { data }= await axios.post("https://api.imgbb.com/1/upload?key=5101669cc977a31f24c086211bdea412", formData);
 
      return data;
}