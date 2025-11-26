const addBtn = document.querySelector(".addButton")
const insertList = document.querySelector(".insertList")
const overLay = document.querySelector(".overLay")
const closeList_btn = document.querySelector(".closeList-btn")
const addList_btn = document.querySelector(".addList-btn")
const titleOfList = document.getElementById("listTitle")
const descriptionOfList = document.getElementById("descriptionBox")
const todoCard = document.querySelector(".todoCard")
const todo = document.querySelector(".todo");
//const removeList = document.querySelector(".removeList")

addBtn.addEventListener("click", function () {
    insertList.style.display = "flex"
    overLay.style.display = "block"
    
})

closeList_btn.addEventListener("click", function () {
    insertList.style.display = "none"
    overLay.style.display = "none"
    
})

addList_btn.addEventListener("click", function () {
    insertList.style.display = "none"
    overLay.style.display = "none"
    
    const title = titleOfList.value.trim()
    const description = descriptionOfList.value.trim()


    if (title === "" || description === "") {
        alert("Enter all fields!")
        return
    }

    const card = document.createElement("div")
    card.classList.add("todoCard")
    card.innerHTML = `
    <h2 class="titleStyle">${title}</h2>
    <h6 class="descriptionStyle">${description}</h6>
    <button class="removeList">Remove</button>
  `;

  todo.appendChild(card);
  
  const removeBtn = card.querySelector(".removeList");

  removeBtn.addEventListener("click", function()
{
    card.remove()
})

insertList.style.display = "none";
    overLay.style.display = "none";
    titleOfList.value = "";
    descriptionOfList.value = "";

})

