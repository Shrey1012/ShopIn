import axios from "axios";

const BASE_URL = "https://shopin-ecommerce.herokuapp.com/api/";
let TOKEN;
if (localStorage.getItem(("persist:root").user!=null)) {
   TOKEN = JSON.parse(JSON.parse(localStorage.getItem("persist:root")).user)
  .currentUser.accessToken;
} else{
  TOKEN = "";
}

export const publicRequest = axios.create({
  baseURL: BASE_URL,
});

export const userRequest = axios.create({
  baseURL: BASE_URL,
  header: { token: `Bearer ${TOKEN}` },
});
