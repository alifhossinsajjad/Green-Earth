const categoryContainer = document.getElementById("categoryContainer");

const plantsContainer = document.getElementById("plantsContainer");

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
        <li onclick='clickCategory(${cat.id})' id="${cat.id}" class="hover:bg-[#1b8b48] hover:text-white cursor-pointer p-3 rounded-xl ">${cat.category_name}</li>
        `;
  });
  categoryContainer.addEventListener("click", (e) => {
    
    const allli = document.querySelectorAll("li");
    allli.forEach((li) => {
      li.classList.remove("bg-[#1b8b48]","text-white");
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

const loadPlantsByCategory = (id) => {
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

const showPlantsByCategory = (plant) => {
  console.log(plant);
  plantsContainer.innerHTML = " ";
  plant.forEach((plants) => {
    plantsContainer.innerHTML += `
    
    <div class="card bg-base-100 shadow-sm ">
     <figure class = "lg:h-80 h-60  " >
     <div><img class= "rounded-xl py-5" src = "${plants.image}"</div>
    </figure>
  <div class="card-body">
    <h2 class="card-title">${plants.category}</h2>
    <p>${plants.description}</p>
    <div class="card-actions justify-end">
      <button class = "w-full bg-[#15803D] text-center text-white p-3 rounded-xl">Add to card</Button>
    </div>
  </div>
</div>
    
    `;
  });
};

loadPlantsByCategory();
loadCategory();
