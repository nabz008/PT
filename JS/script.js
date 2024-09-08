
let burger = document.querySelector('.burger-menu')
let nav = document.querySelector('.main-nav')
burger.addEventListener('click', function(){
  burger.classList.toggle('active')
  nav.classList.toggle('active')
})

const form = document.getElementById('contact-form');

form.addEventListener('submit', (e) => {
  e.preventDefault();

  const name = document.getElementById('name').value;
  const email = document.getElementById('email').value;
  const message = document.getElementById('message').value;

  if (name === '' || email === '' || message === '') {
    alert('Please fill in all the fields.');
    return;
  }

  fetch('/contact.php', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json'
    },
    body: JSON.stringify({
      name,
      email,
      message
    })
  })
  .then((response) => response.json())
  .then((data) => {
    if (data.success) {
      alert('Thank you for contacting us! We will get back to you soon.');
    } else {
      alert('Error sending message. Please try again.');
    }
  })
  .catch((error) => {
    console.error('Error:', error);
  });
});