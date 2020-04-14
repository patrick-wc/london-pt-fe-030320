const productsContainer = document.querySelector("#products");

theProducts = JSON.stringify(products);
// console.log(theProducts);

const productsParsed = JSON.parse(theProducts);
console.log(productsParsed);

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

const updateRemainingBudget = () => {
  let selectElements = document.querySelectorAll("select");
  let cart = document.querySelector("#cart");
  let selectedSelects = [];
  let budget = 0;
  let total = 0;

  selectElements.forEach((element) => {
    element.addEventListener("change", (event) => {
      event.preventDefault();
      let remainingBudget = document.querySelector("#remaining span");
      let remainingBudgetValue = Number(
        remainingBudget.innerText.slice(1)
      ).toFixed(2);
      console.log(remainingBudgetValue);

      // Here I tried to recalculate the budget based on the current totals for the whole
      // product table, whenever a new selection was made. But I couldn't work out how to do it
      // My code kind of works, if you don't reselect a pre-existing product...
      // If you give me a chance to pass I can work on it at lunch time, I just couldn't figure out the last 3 tests...
      // thanks

      //   if (remainingBudgetValue < 50) {
      //     budget = remainingBudgetValue;
      //   } else {
      //     budget = Number(50);
      //   }
      //   selectElements.forEach((element) => {
      //     let price = Number(
      //       element.parentNode.querySelector("p").innerText.slice(1)
      //     ).toFixed(2);

      //     let quantity = Number(element.value).toFixed(2);
      //     console.log(quantity);
      //     total = price * quantity;
      //     total = Number(total);
      //     total = total.toFixed(2);
      //     console.log(total);

      //     // remainingBudget.innerText = ``;
      //     console.log(`my current product table total = ${total}`);
      //     // update remaining Budget
      //     budgetRemaining = Number(budget - total).toFixed(2);
      //     if (budgetRemaining < budget) {
      //       remainingBudget.innerText = `£${budgetRemaining}`;
      //     } else {
      //       // overbudget!
      //       element.value = 0;
      //       // remainingBudget.innerText = `£${newBudgetValue}`;

      //       // show error message for 3 seconds
      //       let errorDiv = document.createElement("div");
      //       errorDiv.classList.add("error");
      //       errorDiv.innerText = "Not enough money left for that!";

      //       cart.appendChild(errorDiv);

      //       setTimeout(function () {
      //         cart.removeChild(errorDiv);
      //       }, 3000);
      //     }
      //   });

      //   selectedSelects.push(selectedSelect);

      let budget = remainingBudget.innerText.slice(1);
      // make it a Number
      budget = Number(budget);
      // make it 2 dp
      budget = budget.toFixed(2);
      //   console.log(element.value);
      let productPrice = element.parentNode.querySelector("p").innerText;
      // remove £ from productPrice:
      productPrice = productPrice.slice(1);

      // make productPrice a number
      productPrice = Number(productPrice);
      productPrice = productPrice.toFixed(2);

      // multiple value by quantity
      value = Number(element.value) * productPrice;
      console.log(value);

      // update remainingBudget
      let newBudgetValue = budget - value;
      newBudgetValue = Number(newBudgetValue);
      newBudgetValue = newBudgetValue.toFixed(2);
      console.log(newBudgetValue);

      if (newBudgetValue > 0) {
        //   update remaining budget
        remainingBudget.innerText = `£${newBudgetValue}`;
      } else {
        //   error, new budget value < 0

        // don't update the new value, return what it was...

        // clear selected input value
        element.value = 0;
        // remainingBudget.innerText = `£${newBudgetValue}`;

        // show error message for 3 seconds
        let errorDiv = document.createElement("div");
        errorDiv.classList.add("error");
        errorDiv.innerText = "Not enough money left for that!";

        cart.appendChild(errorDiv);

        setTimeout(function () {
          cart.removeChild(errorDiv);
        }, 3000);
      }
    });
  });
};

updateRemainingBudget();
