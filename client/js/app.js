import { createHeader } from "./baseUrl.js";
import { handleRequest } from "./handleRequest.js";

const deleteItem = async (id) => {
  const cnfrm = confirm("Are you sure you want to delete item?");
  if (cnfrm) {
    const deleteRequest = await handleRequest(
      fetch(
        `http://127.0.0.1:3002/api/v1/customers/${id}`,
        createHeader("delete")
      )
    );
    alert(deleteRequest.message);
  }
  updateUI();
};
const setUpButton = () => {
  document.querySelectorAll(".del-item").forEach((btn) => {
    btn.onclick = () => deleteItem(btn.value);
  });
};
const token =
  "d22ad59359ebab667e4c047375d866d315624d394213856f6694e9215688d0b1";

const updateUI = async () => {
  const UI = document.querySelector("#items");
  const customers = await handleRequest(
    fetch("http://127.0.0.1:3002/api/v1/customers", createHeader("get"))
  );
  let Htmlelement = "";
  if ([...customers].length > 0) {
    customers.forEach((item) => {
      const { names, email, phone, customer_id } = item;
      Htmlelement += `
        <div class='item-row'>
          <div class='name'>${names}</div>
          <div class='name ${email}'>${email}</div>
          <div class='name ${phone}'>${phone}</div>
          <div><button class='del-item' value='${customer_id}' onclick='deleteItem(${customer_id})'>Delete</button></div>
        </div>`;
    });
    UI.innerHTML = Htmlelement;
    setUpButton();
  }
};
updateUI();
