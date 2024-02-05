// import "./styles.css";

// document.getElementById("app").innerHTML = `
// <h1>Hello Vanilla!</h1>
// <div>
//   We use the same configuration as Parcel to bundle this sandbox, you can find more
//   info about Parcel 
//   <a href="https://parceljs.org" target="_blank" rel="noopener noreferrer">here</a>.
// </div>`;

const makelist = (text) => {
    // make li tag
    const li = document.createElement("li");
    
    // make div tag
    const div = document.createElement("div");
    div.className = "list-row";

    // make p tag
    const p = document.createElement("p");
    p.className = "todo-item";
    p.innerText = text

    const completeButton = document.createElement("button");
    completeButton.innerText = "done";
    
    const removeButton = document.createElement("button");
    removeButton.innerText = "remove";

    div.appendChild(p);
    div.appendChild(completeButton);
    div.appendChild(removeButton);

    li.appendChild(div);

    const ul = document.getElementById("incomplete-list");
    ul.appendChild(li);

    console.log(li);
}

const onclickAdd = () => {
    const inputText = document.getElementById("add-text").value;
    document.getElementById("add-text").value = "";
    // alert(inputText);
    makelist(inputText);
}

document.getElementById("add-button").addEventListener("click", onclickAdd);