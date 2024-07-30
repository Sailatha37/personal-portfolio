// Smooth scrolling for navigation links
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function(e) {
        e.preventDefault();
        document.querySelector(this.getAttribute('href')).scrollIntoView({
            behavior: 'smooth'
        });
    });
});

// Form validation for a contact form (if you decide to add one)
function validateForm() {
    const name = document.getElementById('name').value;
    const email = document.getElementById('email').value;
    const message = document.getElementById('message').value;
    const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

    if (name === '' || email === '' || message === '') {
        alert('All fields are required.');
        return false;
    }

    if (!emailPattern.test(email)) {
        alert('Please enter a valid email address.');
        return false;
    }

    return true;
}

// Example function to dynamically update content (e.g., adding new projects)
function addProject() {
    const projectList = document.getElementById('projects');
    const newProject = document.createElement('li');
    newProject.innerHTML = `
        <strong>New Project Title</strong>
        <p>Project description goes here.</p>
    `;
    projectList.appendChild(newProject);
}

// Add an event listener to a button for adding new projects (if you decide to add one)
document.getElementById('addProjectBtn').addEventListener('click', addProject);
