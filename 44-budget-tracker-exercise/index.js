const productsContainer = document.querySelector("#products");

theProducts = JSON.stringify(products);
// console.log(theProducts);

const productsParsed = JSON.parse(theProducts);
// console.log(productsParsed);

for (let index = 0; index < productsParsed.length; index++) {
  const element = productsParsed[index];
  // now render the HTML
  // <div>
  //     <img src="https://i5.walmartimages.com/asr/f1728857-3120-4a4e-b474-d66f8ad1bc77_1.7e41f79bcada186bbbc136d1094be906.jpeg?odnWidth=450&amp;odnHeight=450&amp;odnBg=ffffff" />
  //     <h3>Hand sanitiser</h3>
  //     <p>£12.99</p>
  //     <select>
  //         <option>0</option>
  //         <option>1</option>
  //         <option>2</option>
  //     </select>
  // </div>
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
  //   console.log(max);

  for (let index = 0; index < max + 1; index++) {
    let option = document.createElement("option");

    option.value = index;
    option.innerText = index;
    // console.log(index);
    productSelect.appendChild(option);
  }

  productsContainer.appendChild(productDiv);
}

// const updateRemainingBudget = () => {
//   let selectElements = document.querySelectorAll("select");
//   let cart = document.querySelector("#cart");
//   let selectedSelects = [];
//   let budget = 0;
//   let total = 0;

//   selectElements.forEach((element) => {
//     element.addEventListener("change", (event) => {
//       event.preventDefault();
//       let remainingBudget = document.querySelector("#remaining span");
//       let remainingBudgetValue = Number(
//         remainingBudget.innerText.slice(1)
//       ).toFixed(2);
//       console.log(remainingBudgetValue);

//       // Here I tried to recalculate the budget based on the current totals for the whole
//       // product table, whenever a new selection was made. But I couldn't work out how to do it
//       // My code kind of works, if you don't reselect a pre-existing product...
//       // If you give me a chance to pass I can work on it at lunch time, I just couldn't figure out the last 3 tests...
//       // thanks

//       //   if (remainingBudgetValue < 50) {
//       //     budget = remainingBudgetValue;
//       //   } else {
//       //     budget = Number(50);
//       //   }
//       //   selectElements.forEach((element) => {
//       //     let price = Number(
//       //       element.parentNode.querySelector("p").innerText.slice(1)
//       //     ).toFixed(2);

//       //     let quantity = Number(element.value).toFixed(2);
//       //     console.log(quantity);
//       //     total = price * quantity;
//       //     total = Number(total);
//       //     total = total.toFixed(2);
//       //     console.log(total);

//       //     // remainingBudget.innerText = ``;
//       //     console.log(`my current product table total = ${total}`);
//       //     // update remaining Budget
//       //     budgetRemaining = Number(budget - total).toFixed(2);
//       //     if (budgetRemaining < budget) {
//       //       remainingBudget.innerText = `£${budgetRemaining}`;
//       //     } else {
//       //       // overbudget!
//       //       element.value = 0;
//       //       // remainingBudget.innerText = `£${newBudgetValue}`;

//       //       // show error message for 3 seconds
//       //       let errorDiv = document.createElement("div");
//       //       errorDiv.classList.add("error");
//       //       errorDiv.innerText = "Not enough money left for that!";

//       //       cart.appendChild(errorDiv);

//       //       setTimeout(function () {
//       //         cart.removeChild(errorDiv);
//       //       }, 3000);
//       //     }
//       //   });

//       //   selectedSelects.push(selectedSelect);

//       let budget = remainingBudget.innerText.slice(1);
//       // make it a Number
//       budget = Number(budget);
//       // make it 2 dp
//       budget = budget.toFixed(2);
//       //   console.log(element.value);
//       let productPrice = element.parentNode.querySelector("p").innerText;
//       // remove £ from productPrice:
//       productPrice = productPrice.slice(1);

//       // make productPrice a number
//       productPrice = Number(productPrice);
//       productPrice = productPrice.toFixed(2);

//       // multiple value by quantity
//       value = Number(element.value) * productPrice;
//       console.log(value);

//       // update remainingBudget
//       let newBudgetValue = budget - value;
//       newBudgetValue = Number(newBudgetValue);
//       newBudgetValue = newBudgetValue.toFixed(2);
//       console.log(newBudgetValue);

//       if (newBudgetValue > 0) {
//         //   update remaining budget
//         remainingBudget.innerText = `£${newBudgetValue}`;
//       } else {
//         //   error, new budget value < 0

//         // don't update the new value, return what it was...

//         // clear selected input value
//         element.value = 0;
//         // remainingBudget.innerText = `£${newBudgetValue}`;

//         // show error message for 3 seconds
//         let errorDiv = document.createElement("div");
//         errorDiv.classList.add("error");
//         errorDiv.innerText = "Not enough money left for that!";

//         cart.appendChild(errorDiv);

//         setTimeout(function () {
//           cart.removeChild(errorDiv);
//         }, 3000);
//       }
//     });
//   });
// };

// updateRemainingBudget();

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

      // console.log(productQuantities);

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
    // console.log(product);

    totalProduct = product["quantity"] * product["price"];
    // console.log(totalProduct);

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
  }
};

const numberTwoDP = (number) => {
  number = Number(number).toFixed(2);
  return number;
};
