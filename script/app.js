const ratingCard = document.querySelector(".rating-card");
const li = document.querySelectorAll("li");
const thankYou = document.querySelector(".thank-you");
const p = document.querySelector(".thank-you p");
const submit = document.querySelector(".submit");
thankYou.style.display = "none";
let rate= 0;
li.forEach(list=>{
    list.addEventListener("click",()=>{
        let user_rate = list.innerHTML;
        p.innerText = `You selected ${user_rate} out of 5`;  
    });
});
submit.addEventListener("click",()=>{
    ratingCard.style.display = "none";
    thankYou.style.display = "block";
});
