// Function called while clicking add button
function addItem() {

    // Getting box and ul by selecting id;
    let item = document.getElementById("box");
    let list_item = document.getElementById("list_item");
    let alertMes = document.getElementById("alertMes");

    if (item.value != "") {
        hideAlert();
        // Creating element and adding value to it
        let make_li = document.createElement("li");
        make_li.appendChild(document.createTextNode(item.value));

        // Adding li to ul
        list_item.appendChild(make_li);

        // Reset the value of box
        item.value = ""

        // Delete a li item on click
        make_li.onmousedown = function () {
            this.parentNode.removeChild(this);
        }
        overLi();
    }
    else {
        alertMes.style.visibility = 'visible';
        alertMes.innerHTML = `    
        <div class="alert alert-danger " role="alert">
        <div class="row justify-content-between align-items-center">
            <div class="col-12">
                Değer girmediniz!
            <button type="button" onclick="hideAlert()" class="btn-close" data-bs-dismiss="alert"
                aria-label="Close">
            </button>
            </div>
            
        </div>
    </div>`;
    }
}
function hideAlert() {
    let alertMes = document.getElementById("alertMes");
    alertMes.style.visibility = 'hidden';
}