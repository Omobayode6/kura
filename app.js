const toggleButton = document.getElementsByClassName('toggle-button')[0];
const navbarLinks = document.getElementsByClassName('links')[0]
const contact = document.getElementsByClassName('hearder-btn')[0]
const faqToggleButtons = document.querySelectorAll('.faq-toggle');

console.log(navbarLinks)
toggleButton.addEventListener('click', () =>{
  navbarLinks.classList.toggle('active');
  contact.classList.toggle('active');
})


faqToggleButtons.forEach(button => {
  button.addEventListener('click', () => {
    const answer = button.parentElement.nextElementSibling;
    button.classList.toggle('active');
    answer.classList.toggle('active');
  });
});
