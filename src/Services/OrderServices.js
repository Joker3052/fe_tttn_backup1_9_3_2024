import axios from './axios-customize'
const apikey = 'tttn';
const CountOrderItemByID =(id)=>
{
   return axios.get(`/${apikey}/orderItem/get/count?users=${id}`, { });
}
const CountOrderEachItemByID =(id)=>
{
   return axios.get(`/${apikey}/orderItem/get/count?products=${id}`, { });
}
const GetOrderItemByID =(id)=>
{
   return axios.get(`/${apikey}/orderItem?users=${id}`, { });
}
const AddOrderItem =(user,product)=>
{
   return axios.post(`/${apikey}/orderItem`,{user,product});
}
const DeleteOrderItemByID =(id)=>
{
   return axios.delete(`/${apikey}/orderItem/${id}`, { });
}
const DeleteAllOrderItem =(id)=>
{
   return axios.get(`/${apikey}/orderItem/delAll/${id}`, { });
}
const DescOrderItemByID =(id)=>
{
   return axios.put(`/${apikey}/orderItem/desc/${id}`, { });
}
const AscOrderItemByID =(id)=>
{
   return axios.put(`/${apikey}/orderItem/asc/${id}`, { });
}

////////////////////////////////////////////

export{CountOrderItemByID,AddOrderItem,GetOrderItemByID,CountOrderEachItemByID,DeleteOrderItemByID,DeleteAllOrderItem,DescOrderItemByID
   ,AscOrderItemByID};