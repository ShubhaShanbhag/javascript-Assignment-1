  //To see menu items
  const menu = document.querySelector("#cafe-menu");
  const message = document.querySelector(".message");
   
  menu.addEventListener("mouseover", menuOpen);
  menu.addEventListener("mouseout", menuOut);
   
  function menuOpen() {

     message.classList.add('menu-item');
      message.innerHTML = foodMenu();
  
      function foodMenu(){
        let val = '';
        const food = ["Cake", "Chocolate", "Cookies", "Milkshake", "Doughnut", "Coffee"];

      for (let i = 0; i < food.length; i++) {
      val += food[i] + "<br>";
      }
      return val;
    }
 }

 function menuOut (){
  message.classList.remove('menu-item');
  message.innerHTML = '';
  
 }
   
 //contact form
const myForm = document.querySelector("#my-form");
const nameInput =document.querySelector('#Name');
const emailInput =document.querySelector('#Email1');
const passwordInput = document.querySelector('#password1')
const msg =document.querySelector('.msg');
const userList =document.querySelector('#users');

myForm.addEventListener('submit', onSubmit);

   function onSubmit(e) {
     e.preventDefault();
  
  if(nameInput.value === '' || emailInput.value === '' || pssswordInput.value === '' ){

    msg.classList.add('error');
    msg.innerHTML = 'Please enter all fields';

      setTimeout(() => msg.remove(),3000);
  }else{
    
    const li = document.createElement('li');
    li.appendChild(document.createTextNode(`${nameInput.value}
     : ${emailInput.value} : ${passwordInput.value}`));

     userList.appendChild(li);

     //clear fields
     nameInput = '';
     emailInput = '';
  }
}

