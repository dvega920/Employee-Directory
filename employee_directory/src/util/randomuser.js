import axios from "axios";


export default function getRandomUsers(data) {

    const URL = "https://randomuser.me/api/?results=50&nat=us";
    return axios.get(URL);
};
