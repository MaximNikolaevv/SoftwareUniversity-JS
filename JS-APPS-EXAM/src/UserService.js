import { api } from "../src/Request.js";
const Base_URL = "http://localhost:3030/";


const endPoints = {
    addShowRecord: "data/shows",
    DashBoard: "data/shows?sortBy=_createdOn%20desc",
    ShowDetails: `data/shows`,
    EditShowRecord: `data/shows`,
    SearchPage: `data/shows?where=title%20LIKE%20%22%22`
}

const UserService = {
    AddShowRecord: async (data) => {
        return await api.post(Base_URL + endPoints.addShowRecord, data);
    },
    DashBoard: async () => {
        return await api.get(Base_URL + endPoints.DashBoard);
    },
    ShowDetails: async (id) => {
        return await api.get(Base_URL + endPoints.ShowDetails + `/${id}`);
    },
    EditShowRecord: async (id, data) => {
        return await api.put(Base_URL + endPoints.EditShowRecord + `/${id}`, data);
    },
    DelShowRecord: async (id) => {
        return await api.del(Base_URL + endPoints.ShowDetails + `/${id}`);
    },
    SearchPage: async () => {
        return await api.get(Base_URL + endPoints.SearchPage);
    }
};

export default UserService;