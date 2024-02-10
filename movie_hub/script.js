const modeToggle = document.getElementById('modeToggle');
const form = document.getElementById('loginForm');

// Dark mode toggle
modeToggle.addEventListener('click', () => {
  document.body.classList.toggle('dark');
});

// Form validation and submission (Replace with your API call)
form.addEventListener('submit', (event) => {
  event.preventDefault();

  const email = document.getElementById('email').value;
  const password = document.getElementById('password').value;

  // Replace with your validation logic and error handling
  if (!email.trim() || !password.trim()) {
    alert('Please fill in all fields.');
    return;
  }

  // Simulate API call (replace with your actual call)
  axios.post('/api/login', { email, password })
    .then(() => {
      // Login successful,
    })
    .catch((error)