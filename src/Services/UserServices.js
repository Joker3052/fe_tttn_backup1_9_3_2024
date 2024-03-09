import axios from './axios-customize'
const apikey = 'tttn';
const FetchAllStore =()=>
{
   return  axios.get(`/${apikey}/user/store`);
}
const FetchAllUser =()=>
{
   return  axios.get(`/${apikey}/user`);
}
const PostLogin =(email,password)=>
{
   return  axios.post(`/${apikey}/user/login`,{email,password});
}
 const AuthAccount  =()=> {
   return axios.get(`/${apikey}/auth`, {
      headers: {
        Authorization: `Bearer YOUR_JWT_TOKEN`,
      },
    });
 };
 const FetchUserByID =(id)=>
{
   return axios.get(`/${apikey}/user/${id}`, { });
}

////////////////////
// const FetchAllUser =()=>
// {
//    return  axios.get("/user/all");
// }
const PostRegister =(email,password,username,phone,address)=>
{
   return  axios.post("/user/register",{email,password,username,phone,address});
}


export{FetchAllStore,FetchAllUser,PostLogin,FetchUserByID,PostRegister,AuthAccount};