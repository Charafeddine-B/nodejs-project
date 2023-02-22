/* eslint-disable import/no-anonymous-default-export */
import axios from 'axios'
export default async function axiosTest() {
    const response = await axios.get("http://localhost:5570/m/Movies")
    return response.data
}