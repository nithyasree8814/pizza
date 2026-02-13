document.getElementById("myForm").addEventListener("submit", function(e){

    e.preventDefault();

    clearErrors();

    let orderId = document.getElementById("orderId").value.trim();
    let size = document.getElementById("size").value;
    let qty = Number(document.getElementById("qty").value);
    let phone = document.getElementById("phone").value.trim();
    let address = document.getElementById("address").value.trim();

    let valid = true;

    // Order ID
    if(!/^P\d{4}$/.test(orderId)){
        showError("orderId","Format: P0001");
        valid = false;
    }

    // Size
    if(size === ""){
        showError("size","Select size");
        valid = false;
    }

    // Quantity
    if(qty < 1 || qty > 10){
        showError("qty","1 to 10 only");
        valid = false;
    }

    // Phone
    if(!/^\d{10}$/.test(phone)){
        showError("phone","10 digits only");
        valid = false;
    }

    // Address
    if(address.length < 10){
        showError("address","Minimum 10 chars");
        valid = false;
    }

    // Success
    if(valid){

        let price = {
            S:99,
            M:199,
            L:299
        };

        let total = price[size] * qty;

        alert(
            "Order Placed!\n\n" +
            "ID: " + orderId +
            "\nTotal: ₹" + total
        );

        document.getElementById("myForm").reset();
    }

});

/* Clear errors */
function clearErrors(){

    document.querySelectorAll(".error").forEach(e=>{
        e.textContent="";
    });

    document.querySelectorAll("input,select,textarea").forEach(e=>{
        e.classList.remove("error");
    });

}

/* Show error */
function showError(id,msg){

    let field = document.getElementById(id);

    field.classList.add("error");

    field.nextElementSibling.textContent = msg;
}
