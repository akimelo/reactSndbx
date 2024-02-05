// import "./styles.css";

// document.getElementById("app").innerHTML = `
// <h1>Hello Vanilla!</h1>
// <div>
//   We use the same configuration as Parcel to bundle this sandbox, you can find more
//   info about Parcel 
//   <a href="https://parceljs.org" target="_blank" rel="noopener noreferrer">here</a>.
// </div>`;

const reassignList = (reassignButton, div) => {
    const reassignTarget = reassignButton.closest("li");

    reassignButton.remove();

    const completeButton = document.createElement("button");
    completeButton.innerText = "done";
    completeButton.addEventListener("click", () => { completeList(completeButton, div); });

    const removeButton = document.createElement("button");
    removeButton.innerText = "remove";
    removeButton.addEventListener("click", () => { removeList(removeButton); });

    div.appendChild(completeButton);
    div.appendChild(removeButton);

    const moveList = document.getElementById("incomplete-list");

    document.getElementById("complete-list").removeChild(reassignTarget);
    moveList.appendChild(reassignTarget);

}

const completeList = (completeButton, div) => {
    const completeTarget = completeButton.closest("li");

    completeButton.nextElementSibling.remove();
    completeButton.remove();

    const reassignButton = document.createElement("button");
    reassignButton.innerText = "reassign";
    reassignButton.addEventListener("click", () => { reassignList(reassignButton, div); });

    div.appendChild(reassignButton);

    const moveList = document.getElementById("complete-list");
    // console.log(completeTarget);
    document.getElementById("incomplete-list").removeChild(completeTarget);
    moveList.appendChild(completeTarget);
}

const removeList = (removeButton) => {
    const removeTarget = removeButton.closest("li");
    // console.log(removeTarget);
    document.getElementById("incomplete-list").removeChild(removeTarget);
}

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
    completeButton.addEventListener("click", () => { completeList(completeButton, div); });
    
    const removeButton = document.createElement("button");
    removeButton.innerText = "remove";
    removeButton.addEventListener("click", () => { removeList(removeButton); });

    div.appendChild(p);
    div.appendChild(completeButton);
    div.appendChild(removeButton);

    li.appendChild(div);

    const ul = document.getElementById("incomplete-list");
    ul.appendChild(li);

    // console.log(li);
}

const onclickAdd = () => {
    const inputText = document.getElementById("add-text").value;
    document.getElementById("add-text").value = "";
    // alert(inputText);
    makelist(inputText);
}

document.getElementById("add-button").addEventListener("click", onclickAdd);