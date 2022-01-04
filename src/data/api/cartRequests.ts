import { clearCart } from './../../features/cart/cartSlice';
import axiosInstance from "./axiosInstance";
export interface ICartRequests {
    getAll: () => Promise<[]>,
    add: (data: any) => Promise<any>,
    clear: () => Promise<any>,
}

async function getAll() {
    try {
        const response = await axiosInstance.get("/cart");
        return response.data;
    }
    catch (e) {
        console.log(e);
    }
}

async function add(data) {
    try {
        const response = await axiosInstance.post("/cart", data);
        return response.data;
    }
    catch (e) {
        console.log(e);
    }
}

async function clear() {
    try {
        const response = await axiosInstance.patch("/cart");
        return response.data;
    }
    catch (e) {
        console.log(e);
    }
}

const CartRequests: ICartRequests = {
    getAll,
    add,
    clear
};

export default CartRequests;