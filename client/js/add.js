import { createHeader } from "./baseUrl.js";

document.querySelector(".button-save").onclick = async (e) => {
  e.preventDefault();
  const names = document.querySelector("#names");
  const email = document.querySelector("#email");
  const phone = document.querySelector("#phone");
  const data = {
    names: names.value,
    email: email.value,
    phone: phone.value,
  };
  const httpRequest = await fetch(
    `http://127.0.0.1:3002/api/v1/customers`,
    createHeader("post", JSON.stringify(data))
  );
  console.log(httpRequest);
  alert("customer added");
  names.value = "";
  email.value = "";
  phone.value = "";
};
