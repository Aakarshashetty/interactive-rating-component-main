const ratingCard = document.querySelector(".rating-card");
const span = document.querySelectorAll("span");
const thankYou = document.querySelector(".thank-you");
const p = document.querySelector(".thank-you p");
const submit = document.querySelector(".submit");
thankYou.style.display = "none";

span.forEach(list=>{
    list.addEventListener("click",()=>{
        let user_rate = list.innerHTML;
        p.innerText = `You selected ${user_rate} out of 5`;  
    });
});
submit.addEventListener("click",()=>{
    ratingCard.style.display = "none";
    thankYou.style.display = "block";
});
