import { api } from "../src/Request.js";
const Base_URL = "http://localhost:3030/";

const endPoints = {

    login: "users/login",
    register: "users/register",
    logout: "users/logout"

}

async function LogIn(data) {
    return await api.post(Base_URL + endPoints.login, data);
}

async function Register(data) {
    return await api.post(Base_URL + endPoints.register, data);
}

async function logout() {
    return await api.get(Base_URL + endPoints.logout);
}

export const DataService = {
    LogIn,
    Register,
    logout
}

