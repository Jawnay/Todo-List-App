import axios from "axios";

const instance = axios.create({
    baseURL: "https://mern-todolist-app-6lne.onrender.com/",
})

export default instance


