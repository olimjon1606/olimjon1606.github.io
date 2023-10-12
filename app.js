const toggle = document.getElementById('box');
toggle.onclick = function(){
    toggle.classList.toggle('active');
}

 const currentYear = new Date().getFullYear();
 // Find the HTML element to display the year
const yearElement = document.getElementById('current-year');
// Update the element's content with the current year
yearElement.textContent = currentYear;
