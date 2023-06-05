import axios from "axios"


const URI = "http://localhost:4000"

export const loginRequest = (credentials:object)=> axios.post(`${URI}/users/login`, credentials)