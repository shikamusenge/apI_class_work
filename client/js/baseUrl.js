// import axios from "axios";
// // const URL = "https://iap-mis-be.onrender.com/api/spvf";
// const URL = "http://localhost:3002/api/v1";
const key = "f47279308dfb52430b61e150";
// export const server = axios.create({
//   baseURL: URL,
//   headers: {
//     Authorization: key,
//   },
// });

export const createHeader = (method, body) => {
  return {
    headers: {
      Authorization: `Bearer ${key}`,
      "Content-Type": "Application/json",
    },
    method: method,
    body: body,
  };
};
