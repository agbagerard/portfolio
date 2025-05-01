import projectsData from './data.js'; // Assuming data.js is in the same directory

const projectDetailsContainer = document.getElementById('projectDetails');

function getProjectIdFromUrl() {
	const urlParams = new URLSearchParams(window.location.search);
	return urlParams.get('id');
}

const projectId = getProjectIdFromUrl();
const currentProject = projectsData.find((project) => project.id === projectId);

if (projectDetailsContainer && currentProject) {
	document.title = `${currentProject.title} - Denakpo Agba`; // Update page title

	const header = document.createElement('section');
	header.classList.add('project-header');
	header.innerHTML = `
    <h1>${currentProject.title}</h1>
    <p class="project-tagline">${currentProject.tagline}</p>
    <div class="project-links">
      <a href="${currentProject.liveDemo}" target="_blank">Live Demo</a>
      <a href="${currentProject.githubRepo}" target="_blank">GitHub Repository</a>
    </div>
  `;
	projectDetailsContainer.appendChild(header);

	const overviewSection = document.createElement('section');
	overviewSection.classList.add('project-overview');
	overviewSection.innerHTML = `
    <h2>Project Overview</h2>
    <p>${currentProject.overview}</p>
  `;
	projectDetailsContainer.appendChild(overviewSection);

	const technologiesSection = document.createElement('section');
	technologiesSection.classList.add('technologies-used');
	let technologiesList = '<ul>';
	currentProject.technologies.forEach((tech) => {
		technologiesList += `<li>${tech}</li>`;
	});
	technologiesList += '</ul>';
	technologiesSection.innerHTML = `
    <h2>Technologies Used</h2>
    ${technologiesList}
  `;
	projectDetailsContainer.appendChild(technologiesSection);

	if (currentProject.challenges && currentProject.challenges.length > 0) {
		const challengesSection = document.createElement('section');
		challengesSection.classList.add('challenges-and-solutions');
		let challengesList = '<ul>';
		currentProject.challenges.forEach((challenge, index) => {
			challengesList += `<li>${challenge} - ${
				currentProject.solutions[index] || 'Solution not documented.'
			}</li>`;
		});
		challengesList += '</ul>';
		challengesSection.innerHTML = `
      <h2>Challenges and Solutions</h2>
      ${challengesList}
    `;
		projectDetailsContainer.appendChild(challengesSection);
	}

	if (currentProject.features && currentProject.features.length > 0) {
		const featuresSection = document.createElement('section');
		featuresSection.classList.add('key-features');
		let featuresList = '<ul>';
		currentProject.features.forEach((feature) => {
			featuresList += `<li>${feature}</li>`;
		});
		featuresList += '</ul>';
		featuresSection.innerHTML = `
      <h2>Key Features</h2>
      ${featuresList}
    `;
		projectDetailsContainer.appendChild(featuresSection);
	}

	if (currentProject.images && currentProject.images.length > 0) {
		const visualsSection = document.createElement('section');
		visualsSection.classList.add('project-visuals');
		let imageGallery = '<div class="image-gallery">';
		currentProject.images.forEach((image) => {
			imageGallery += `<img src="${image}" alt="${currentProject.title} Screenshot">`;
		});
		imageGallery += '</div>';
		visualsSection.innerHTML = `
      <h2>Project Visuals</h2>
      ${imageGallery}
    `;
		projectDetailsContainer.appendChild(visualsSection);
	}
} else if (projectDetailsContainer) {
	projectDetailsContainer.innerHTML = '<p>Project not found.</p>';
}
