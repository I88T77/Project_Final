import axios from 'axios';

const products = async () => {

    const { data } = await axios.get('http://localhost:4000/mongoose1/allproduct');

    console.log('in AXIOS ', data)
    return data;

}
const addproduct = async data=> await axios.post('http://localhost:4000/mongoose1/insertproduct',data);

const modifyproduct = async data=> await axios.put(`http://localhost:4000/mongoose1/updateproduct/${data._id}`,data);

const removeproduct = async data=> await axios.delete(`http://localhost:4000/mongoose1/deleteproduct/${data._id}`)
export default { products,addproduct,modifyproduct,removeproduct};
