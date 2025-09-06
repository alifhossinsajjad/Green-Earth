const categoryContainer = document.getElementById("categoryContainer")


const loadCategory = () => {
    fetch("https://openapi.programming-hero.com/api/categories")
    .then((res) => res.json())
    .then((data) => {
        console.log(data)
        const categories = data.categories
        showCategory(categories);
    }).catch((err) => {
        console.log(err)
    })
};


const showCategory = (categories) => {
    categories.forEach(cat => {
        categoryContainer.innerHTML += `
        <li id="${cat.id}" class="hover:bg-[#CFF0DC]  cursor-pointer">${cat.category_name}</li>
        `
    });
}


// categoryContainer.addEventListener("click", (e) => {
//     const allli = document.querySelectorAll("li")
//     allli.forEach((li) => {
//         li.classList.remove("hover:bg-[#CFF0DC]")
//     })
//     if(e.target.category_name === "li"){
//         e.target.classList.add("hover:bg-[#CFF0DC]");
//         lo
//     }
// })









loadCategory();