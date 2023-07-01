function addItem() {
    const inputText = document.getElementById("box");
    const ul = document.querySelector("ul");
    const alertMes = document.getElementById("alertMes");
    if (inputText.value != "") {
        hideAlert();
        const li = document.createElement("li");
        li.textContent = inputText.value;
        ul.append(li);
        inputText.value = "";
        ul.addEventListener('click', e => {
            e.target.remove();
        })

    }
    else {
        alertMes.style.display = 'inline';
    }
}
function hideAlert() {
    let alertMes = document.getElementById("alertMes");
    alertMes.style.display = "none"
}