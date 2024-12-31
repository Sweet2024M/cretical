let search = document.querySelector('.search-box');
document.querySelector('#Search-icon').onclick = () => {
    search.classList.toggle('active');
    menu.classList.remove('active');

}

let menu = document.querySelector('.navbar');
document.querySelector('#menu-icon').onclick = () => {
    menu.classList.toggle('active');
    search.classList.remove('active');

}

// Hide Menu And Search Box On scroll
window.onscroll=()=>{
    menu.classList.remove('active');
    search.classList.remove('active');
}
 
// Header
let header = document.querySelector('header');
window.addEventListener('scroll',()=>{
    header.classList.toggle('shadow', window.scrollY > 0)
});


  
  // =====================all cart JS====
  
  // Ensure the document is loaded before running the script
  if (document.readyState == "loading") {
      document.addEventListener("DOMContentLoaded", ready);
  } else {
      ready();
  }
  
  // Define the ready function
  function ready() {
      // Get all remove buttons
      let removeCartButtons = document.getElementsByClassName("cart-remove");
      for (let i = 0; i < removeCartButtons.length; i++) {
          let button = removeCartButtons[i];
          button.addEventListener("click", removeCartItem);
      }
      // Quntity change 
      let quntityInputs = document.getElementsByClassName("cart-quantity");
      for (let i = 0; i < quntityInputs.length; i++) {
        let input = quntityInputs[i];
        input.addEventListener("change", quntityChanged);
    }

  }
  

  // Function to remove the cart item
  function removeCartItem(event) {
      let buttonClicked = event.target;
      buttonClicked.parentElement.remove(); // Removes the cart box
  }

  //function quntity changed
  function quntityChanged(event){
    let input = event.target;
    if(isNaN(input.value)|| input.value<=0){
        input.value=1;
    }
    updatetotal();

  }


  //Update total

  function updatetotal() {
    // Get the cart content container
    var cartContent = document.getElementsByClassName("cart-content")[0];

    // Get all cart boxes
    var cartBoxes = cartContent.getElementsByClassName("cart-box");

    var total = 0;

    // Loop through each cart box to calculate the total
    for (var i = 0; i < cartBoxes.length; i++) {
        var cartBox = cartBoxes[i];

        // Get the price element and quantity element
        var priceElement = cartBox.getElementsByClassName("cart-price")[0];
        var quantityElement = cartBox.getElementsByClassName("cart-quantity")[0];

        // Parse the price and quantity values
        var price = parseFloat(priceElement.innerText.replace("$", ""));
        var quantity = parseInt(quantityElement.value);

        // Add to the total
        total += price * quantity;
    }

    // Round the total to two decimal places
    total = Math.round(total * 100) / 100;

    // Update the total price in the cart
    document.getElementsByClassName("total-price")[0].innerText = "$" + total;
}




function addProductToCart(title,price,productImg){
    let cartShopBox = document.createElement("div");
    cartShopBox.classList.add("cart-box");
    let creatItems = document.getElementsByClassName("cart-content")[0];
    let creatItemsNames = creatItems.getElementsByClassName("cart-product-title");
    for (let i = 0 ; i < creatItemsNames.length; i++){
        if(creatItemsNames[i].innerText==title){
            alert("You have alreafy added this item to cart");
            return;
        }
    }

    let cartBoxContent = `
    
    
    `;
}






// =================================================== LOGIN BOX
// const signInBtnLink = document.querySelector('.signInBtn-link');
// const signUpBtnLink = document.querySelector('.signUpBtn-link');
// const wrapper = document.querySelector('.wrapper');
// signUpBtnLink.addEventListener('click', () => {
//     wrapper.classList.toggle('active');
// });
// signInBtnLink.addEventListener('click', () => {
//     wrapper.classList.toggle('active');
// });
