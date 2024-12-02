
console.log("test")
//This will reveal the "How many would you like to order" section of 
//the order page when a checkbox is clicked
const checkboxes = document.querySelectorAll('input[type="checkbox"]')

checkboxes.forEach(checkbox => {
    checkbox.addEventListener('click', (event) => {
    if (checkbox.checked) {
        console.log("Checkbox is checked");
        checkbox.parentNode.querySelector('input[type="number"]').style.visibility = "visible";
        } else {
        console.log("unchecked");
        checkbox.parentNode.querySelector('input[type="number"]').style.visibility = "hidden";
        }
    });
  });