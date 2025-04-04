document.getElementById('feedbackForm').addEventListener('submit', function(e) {
  e.preventDefault();
  const name = document.getElementById('name').value;
  const message = document.getElementById('message').value;
  
  document.getElementById('feedbackResponse').textContent = `Thank you, ${name}! We appreciate your feedback.`;

  // Clear the form
  this.reset();
});
