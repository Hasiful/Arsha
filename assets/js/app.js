const mobile_nav = document.getElementById('mobile_nav');
console.log(mobile_nav)
let header = document.getElementById("header");
function toggleNav(toggleMenu){
    toggleMenu.addEventListener('click',()=>{
        header.classList.toggle('active')
    })
}

toggleNav(mobile_nav)