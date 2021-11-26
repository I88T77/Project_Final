import axios from 'axios';

const cart = async userId => {

    const { data } = await axios.get(`http://localhost:4000/allcart/${userId}`);
    return data;

}
const addcart = async (userId, productId, quantity, option) => await axios.post('http://localhost:4000/insertcart', { userId, productId, quantity, option });
const removecart = async (userId, productId) => await axios.delete('http://localhost:4000/cart/delete', { userId, productId });
export default { cart, addcart, removecart }