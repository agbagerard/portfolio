import projectsData from './data.js'; // Assuming data.js is in the same directory

const hamburger = document.querySelector('.hamburger');
const navMenu = document.querySelector('nav ul');

if (hamburger && navMenu) {
	hamburger.addEventListener('click', () => {
		hamburger.classList.toggle('open');
		navMenu.classList.toggle('active');
	});
}

const projectsGrid = document.getElementById('projectsGrid');

if (projectsGrid) {
	projectsData.forEach((project) => {
		const projectCard = document.createElement('div');
		projectCard.classList.add('project-card');

		const image = document.createElement('img');
		image.src = project.images[0] || 'placeholder-image.jpg'; // Use the first image or a placeholder
		image.alt = project.title + ' Project';

		const title = document.createElement('h3');
		title.textContent = project.title;

		const tagline = document.createElement('p');
		tagline.textContent = project.tagline;

		const link = document.createElement('a');
		link.href = `project.html?id=${project.id}`;
		link.textContent = 'View Project';

		projectCard.appendChild(image);
		projectCard.appendChild(title);
		projectCard.appendChild(tagline);
		projectCard.appendChild(link);

		projectsGrid.appendChild(projectCard);
	});
}
