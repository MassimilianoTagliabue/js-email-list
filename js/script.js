

const liElem = document.querySelectorAll("li");



 liElem.forEach((curItem) => {
    
    axios.get("https://flynn.boolean.careers/exercises/api/random/mail").then(response =>{


        console.log(response.data.response);
        console.log(curItem.innerHTML);
        
        curItem.innerHTML = response.data.response;
    })
   
 });