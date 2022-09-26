const inputEl = document.querySelector("#input");
const addEl = document.querySelector("#add");
const ulEl = document.querySelector("#ul");
const delEl = document.querySelector(".fa-circle-xmark");

addEl.addEventListener("click", () => {
  if (!inputEl.value) {
    alert("Please enter text");
  } else {
    const obj = {
      text: inputEl.value,
    };
  }

  addElement();
  inputEl.value = "";
});

inputEl.addEventListener("keydown", (e) => {
  if (e.code === "Enter") {
    addEl.click();
  }
});


ulEl.addEventListener("click",(e)=> {
  if(e.target.classList.contains("fa-circle-xmark")){
    e.target.parentElement.remove()
  }
})

const addElement = () => {
  
  const li = document.createElement("li");
  ulEl.appendChild(li);

  const p = document.createElement("p");
  p.innerText = inputEl.value;
  li.appendChild(p);

  const i = document.createElement("i");
  i.setAttribute("class","fa-regular fa-circle-xmark");
  li.appendChild(i);
  console.log(p.innerText)
  console.log(inputEl.value);
};
