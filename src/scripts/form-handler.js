const toggleForm = () => {
  const container = document.querySelector('.container');
  if (container) {
    container.classList.toggle('active');
  }
};

const signupLinks = document.querySelectorAll('.signup a');
signupLinks.forEach(link => {
  link.addEventListener('click', toggleForm);
});