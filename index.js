let login_containers = document.querySelector(".login_container");
let login_btn = document.querySelector(".login");
let cross = document.querySelector(".cross");
let changed_login = document.querySelector(".changed_login")

login_btn.addEventListener("click",function(){
        login_containers.style.transform = "scale(1)";
})

cross.addEventListener("click",function(){
    login_containers.style.transform = "scale(0)";
})
changed_login.addEventListener("click",function(event){
    event.preventDefault();
    login_btn.innerHTML = "<h2>Sign Out</h2>";
    login_containers.style.transform = "scale(0)";

})
// login_btn.addEventListener('click', () => {
//     login_containers.classList.add('active');
// });
// closeBtn.addEventListener('click', () => {
//         login_containers.classList.remove('active');
//     });