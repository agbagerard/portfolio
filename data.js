const projectsData = [
	{
		id: 'image-search',
		title: 'Image Search Engine',
		tagline:
			'A web application built with HTML, CSS, and JavaScript that leverages the Unsplash API to search for images.',
		overview:
			'The Image Search Engine was developed to provide users with a simple and efficient way to discover and explore a vast library of high-quality images powered by the Unsplash API. The goal was to create an intuitive interface that allows users to input keywords and instantly view relevant images.',
		technologies: ['HTML', 'CSS', 'JavaScript', 'Unsplash API'],
		challenges: [
			"Understanding and implementing the Unsplash API's authentication and request structure.",
			'Handling the asynchronous nature of API calls and updating the UI correctly.',
		],
		solutions: [
			'Carefully reading the API documentation and experimenting with different endpoints.',
			'Using JavaScript Promises and the `fetch` API to manage asynchronous operations.',
		],
		features: [
			'Keyword-based image search.',
			'Display of relevant images in a responsive grid layout.',
			'Basic error handling for API requests.',
		],
		liveDemo: '#', // Replace with your live demo URL
		githubRepo: '#', // Replace with your GitHub repository URL
		images: [
			'placeholder-project-image-1.jpg',
			'placeholder-project-image-2.jpg',
		], // Paths to your image files
	},
	{
		id: 'barber-shop',
		title: 'Barber Shop Website',
		tagline: 'A responsive website for a modern barber shop.',
		overview:
			'A website designed and developed for a local barber shop to showcase their services, team, and provide contact information. The focus was on creating a clean, modern, and user-friendly experience across all devices.',
		technologies: ['HTML', 'CSS', 'JavaScript', 'Responsive Design'],
		challenges: [
			'Ensuring a consistent and appealing layout across various screen sizes.',
			'Implementing smooth navigation and user interactions.',
		],
		solutions: [
			'Utilizing CSS media queries and a flexible layout to achieve responsiveness.',
			'Using JavaScript for interactive elements like image sliders or contact form validation.',
		],
		features: [
			'Homepage with key information and calls to action.',
			'Services page detailing the offerings.',
			'Team page showcasing the barbers.',
			'Contact page with location and booking information.',
		],
		liveDemo: '#', // Replace with your live demo URL
		githubRepo: '#', // Replace with your GitHub repository URL
		images: [
			'placeholder-project-image-3.jpg',
			'placeholder-project-image-4.jpg',
		], // Paths to your image files
	},
	{
		id: 'calculator',
		title: 'Calculator',
		tagline: 'A functional calculator built with core web technologies.',
		overview:
			'A simple yet functional calculator application built using HTML for structure, CSS for styling, and JavaScript for handling the logic of arithmetic operations.',
		technologies: ['HTML', 'CSS', 'JavaScript'],
		challenges: [
			'Implementing the correct order of operations.',
			'Handling user input and preventing errors.',
		],
		solutions: [
			'Using JavaScript functions to perform calculations based on operator precedence.',
			'Implementing input validation to handle invalid user entries.',
		],
		features: [
			'Basic arithmetic operations (addition, subtraction, multiplication, division).',
			'Clear button to reset the display.',
			'Display of the current operation and result.',
		],
		liveDemo: '#', // Replace with your live demo URL
		githubRepo: '#', // Replace with your GitHub repository URL
		images: [
			'placeholder-project-image-5.jpg',
			'placeholder-project-image-6.jpg',
		], // Paths to your image files
	},
	{
		id: 'digital-clock',
		title: 'Digital Clock',
		tagline: 'A simple and elegant digital clock display.',
		overview:
			'A web-based digital clock that displays the current time, updating in real-time using JavaScript.',
		technologies: ['HTML', 'CSS', 'JavaScript'],
		challenges: [
			'Updating the time display every second.',
			'Ensuring the display format is correct.',
		],
		solutions: [
			'Using the `setInterval()` function in JavaScript to update the time.',
			'Formatting the hours, minutes, and seconds to ensure a consistent two-digit display.',
		],
		features: [
			'Real-time display of the current time (hours, minutes, seconds).',
			'Clean and minimal design.',
		],
		liveDemo: '#', // Replace with your live demo URL
		githubRepo: '#', // Replace with your GitHub repository URL
		images: [
			'placeholder-project-image-7.jpg',
			'placeholder-project-image-8.jpg',
		], // Paths to your image files
	},
];
