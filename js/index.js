let skills = document.querySelectorAll(".action-button");
let navbarButton = document.querySelector('.navbar-button')

skills.forEach((skill) => {
  skill.addEventListener("click", displayElement);
});

function displayElement(e) {
  let skillList = e.target.parentElement.nextSibling.nextSibling;
  skillList.style.display = skillList.style.display === "" ? "block" : "";
}

navbarButton.addEventListener('click',displayMenu)

function displayMenu() {
    let menu = document.querySelector('.navbar-list')
    menu.style.display = menu.style.display === "" ? "block" : "";
}


