const categoryContainer = document.getElementById("categoryContainer");

const plantsContainer = document.getElementById("plantsContainer");

const manageaSpinner = (status) => {
  if (status === true) {
    document.getElementById("spinner").classList.remove("hidden");
    document.getElementById("plantsContainer").classList.add("hidden");
  } else {
    document.getElementById("plantsContainer").classList.remove("hidden");
    document.getElementById("spinner").classList.add("hidden");
  }
};

const loadCategory = () => {
  fetch("https://openapi.programming-hero.com/api/categories")
    .then((res) => res.json())
    .then((data) => {
      console.log(data.categories);
      const categories = data.categories;
      showCategory(categories);
    })
    .catch((err) => {
      console.log(err);
    });
};

const showCategory = (categories) => {
  categories.forEach((cat) => {
    categoryContainer.innerHTML += `
        <li onclick='clickCategory(${cat.id})' id="${cat.id}" class="hover:bg-[#1b8b48] mb-4 hover:text-white cursor-pointer p-2 gap-4 space-y-3 rounded-xl ">${cat.category_name}</li>
        `;
  });
  categoryContainer.addEventListener("click", (e) => {
    const allli = document.querySelectorAll("li");
    allli.forEach((li) => {
      li.classList.remove("bg-[#1b8b48]", "text-white");
    });
    if (e.target.localName === "li") {
      e.target.classList.add("bg-[#1b8b48]", "text-white");
      loadPlantsByCategory(e.target.id);
    }
  });
};

const clickCategory = (id) => {
  console.log("ok", id);
  const load = loadPlantsByCategory(id);
  console.log("paichi", load);
};

const loadPlantsDetails = async (id) => {
  const url = `
  https://openapi.programming-hero.com/api/plant/${id}
  `;
  console.log(url);

  const res = await fetch(url);
  const details = await res.json();
  plantsDisplayDetails(details.plants);
};

const plantsDisplayDetails = (plants) => {
  console.log(plants);

  const detailsBox = document.getElementById("details-container");
  detailsBox.innerHTML = `
  
  <div class="card ">
     <div>
     <div>
     <h1 class="text-2xl font-bold mb-3">${plants.name}</h1>
     </div>
     
     <img class = "h-96 w-full rounded-xl " src = "${plants.image}">
     </div>

  <div class="card-body text-lg ">
    <h2 class="text-xl font-medium">Category : <span class="text-gray-500" >${plants.category}</span></h2>
    <h2><span class="text-xl font-medium">Price : </span><i class="fa-solid fa-bangladeshi-taka-sign "></i> ${plants.price}</h2>
    <p><span class="text-xl font-medium">Description : </span> ${plants.description}</p>
  </div>
     </div>
    
  `;

  document.getElementById("myModal").showModal();
};

const loadPlantsByCategory = (id) => {
  manageaSpinner(true);
  console.log(id);
  const url = id
    ? `https://openapi.programming-hero.com/api/category/${id}`
    : `https://openapi.programming-hero.com/api/plants`;
  fetch(url)
    .then((res) => res.json())
    .then((data) => {
      const plant = data.plants;
      showPlantsByCategory(plant);
    })
    .catch((err) => {
      console.log(err);
    });
};

const addtocart = (price, name) => {
  const rightCartContainer = document.getElementById("rightCartContainer");

  const rightBox = document.createElement("div");

  rightBox.classList.add("cart-item");
  rightBox.innerHTML = `
    <div class="flex justify-between items-center bg-[#CFF0DC] p-2 my-3 rounded-xl">
      <div class="mt-4 ">
        <p class="text-xl text-gray-500 font-medium">${name}</p>
        <p class="item-price lg:text-xl text-lg font-medium"><i class="fa-solid fa-bangladeshi-taka-sign"></i>${price}</p></div>
      <div>
        <i class="close-btn cursor-pointer fa-solid text-red-600 fa-xmark"></i>
       </div>
    </div>
  `;

  rightCartContainer.append(rightBox);

  const total = document.getElementById("total");
  total.innerText = parseInt(total.innerText) + parseInt(price);

  const closeBtn = rightBox.querySelector(".close-btn");
  closeBtn.addEventListener("click", () => {
    const itemPrice = parseInt(rightBox.querySelector(".item-price").innerText);
    total.innerText = parseInt(total.innerText) - itemPrice;
    rightBox.remove();
  });
};

const showPlantsByCategory = (plant) => {
  console.log(plant);
  plantsContainer.innerHTML = " ";
  plant.forEach((plants) => {
    plantsContainer.innerHTML += `
    <div class="card bg-base-100 shadow-sm p-5">
     <figure class = "lg:h-60 md:h-50 h-60 rounded-xl" >
       <div><img class="" src="${plants.image}" /></div>
     </figure>
     <div class="card-body">
       <h2 onclick="loadPlantsDetails('${plants.id}')" class="card-title cursor-pointer text-xl font-medium">${plants.category}</h2>
       <p class="text-gray-500">${plants.description}</p>
       <div class="flex items-center w-full">
         <h1 class="flex justify-start text-lg text-[#15803D] bg-[#CFF0DC] p-3 rounded-full"> Frute Tree</h1>
         <p class="flex justify-end text-lg font-medium items-center"> <i class="fa-solid fa-bangladeshi-taka-sign"></i> <span id='plant-price'>${plants.price}</span></p>
       </div>
       <div class="card-actions justify-end">
         <button onclick="addtocart('${plants.price}', '${plants.name}', '${plants.image}')" class="w-full bg-[#15803D] text-center text-white p-3 rounded-xl crt-btn hover:bg-[#CFF0DC] hover:text-gray-700 cursor-pointer">Add to cart</button>
       </div>
     </div>
    </div>
    `;
  });

  manageaSpinner(false);
};

loadPlantsByCategory();
loadCategory();
