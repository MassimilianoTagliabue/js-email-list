

const liElem = document.querySelectorAll("li");
const btn = document.querySelector("button")



const genera = () => {

    liElem.forEach((curItem) => {
    
    axios.get("https://flynn.boolean.careers/exercises/api/random/mail").then(response =>{

        console.log(curItem.innerHTML);
        console.log(response.data.response);
        
        
        curItem.innerHTML = response.data.response;
    })
   
 });

};

genera();
 
//genera nuove mail
btn.addEventListener("click", () => {

    genera();
});