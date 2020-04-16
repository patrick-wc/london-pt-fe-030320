const productsContainer = document.querySelector("#products");

theProducts = JSON.stringify(products);
const productsParsed = JSON.parse(theProducts);

for (let index = 0; index < productsParsed.length; index++) {
  const element = productsParsed[index];
  let productDiv = document.createElement("div");

  let productImg = document.createElement("img");
  productImg.src = productsParsed[index].img;
  productDiv.appendChild(productImg);

  let productH3 = document.createElement("h3");
  productH3.innerText = `${productsParsed[index].name}`;
  productDiv.appendChild(productH3);

  let productPrice = document.createElement("p");
  productPrice.innerText = `£${productsParsed[index].price}`;
  productDiv.appendChild(productPrice);

  let productSelect = document.createElement("select");
  productSelect.classList.add(productsParsed[index].id);
  productDiv.appendChild(productSelect);

  // update select options
  let max = productsParsed[index].max_quantity;

  for (let index = 0; index < max + 1; index++) {
    let option = document.createElement("option");

    option.value = index;
    option.innerText = index;
    productSelect.appendChild(option);
  }

  productsContainer.appendChild(productDiv);
}

let productQuantities = [];

const selectChangeUpdateQuantities = () => {
  // event listeners on each select, to update quantities
  let selectElements = document.querySelectorAll("select");

  selectElements.forEach((element) => {
    element.addEventListener("change", (event) => {
      // setup quantity, price and product ID variables
      let quantity = numberTwoDP(element.value);
      let price = numberTwoDP(
        element.parentNode.querySelector("p").innerText.slice(1)
      );
      let productId = element.classList.value;

      // create new product Object
      let productObject = {};

      // push into Object
      productObject.id = productId;
      productObject.quantity = quantity;
      productObject.price = price;

      // check to see if index (productId) already exists in productQuantities
      const index = productQuantities.findIndex(
        (element) => element.id === productObject.id
      );

      // update productQuantities array with user selection:
      if (index === -1) {
        // create new product object
        productQuantities.push(productObject);
      } else {
        // update existing product object
        productQuantities[index] = productObject;
      }

      // update total
      totalSpent = calculateTotal(productQuantities);

      // update Budget
      // setRemainingBudget(totalSpent);

      let budgetOK = setRemainingBudget(totalSpent);

      if (budgetOK === false) {
        // clear selected input
        element.value = 0;
      }
    });
  });
};

selectChangeUpdateQuantities();

const calculateTotal = (products) => {
  let totalSpent = Number(0);
  let totalProduct;

  for (const product of products) {
    totalProduct = product["quantity"] * product["price"];

    totalSpent += totalProduct;
    console.log(totalSpent);
  }

  return totalSpent;
};

const setRemainingBudget = (totalSpent) => {
  const theBudget = Number(50).toFixed(2);
  let budgetEl = document.querySelector("#remaining span");
  let budget = Number(budgetEl.innerText.slice(1)).toFixed(2);
  console.log(`budget: ${budget}`);

  let remainingBudget = Number(theBudget - totalSpent).toFixed(2);

  if (remainingBudget < 0) {
    // clear that selected input

    // show error message for 3 seconds
    let errorDiv = document.createElement("div");
    errorDiv.classList.add("error");
    errorDiv.innerText = "Not enough money left for that!";

    cart.appendChild(errorDiv);

    setTimeout(function () {
      cart.removeChild(errorDiv);
    }, 3000);

    return false;
  } else {
    // update budget
    budgetEl.innerText = `£${remainingBudget}`;
    return true;
  }
};

const numberTwoDP = (number) => {
  number = Number(number).toFixed(2);
  return number;
};
