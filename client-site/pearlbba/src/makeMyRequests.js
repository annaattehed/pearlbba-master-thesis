import axios from "axios";

//Making api request from this file to prevent writing the same code over and over

export const makeRequest = axios.create({
    baseURL: process.env.REACT_APP_API_URL,
    headers: {
        Authorization: "bearer " + process.env.REACT_APP_API_TOKEN,
    },
});