import axios from 'axios';

const loginuser = async data=> await axios.get(`http://localhost:4000/mongoose1/getsingleuser/${data.username}`);

const adduser = async ( data ) =>  await axios.post(`http://localhost:4000/mongoose1/insertuser`,data);


export default {loginuser,adduser};