export const profile = {
	fullName: 'Nusaibah Binte Rawnak',
	title: 'Cognitive Science Student',
	institute: 'McGill University',
	author_name: 'Nusaibah Binte Rawnak', // Author name to be highlighted in the papers section
	research_areas: [
		// { title: 'Physics', description: 'Brief description of the research interest', field: 'physics' },
	],
}

// Set equal to an empty string to hide the icon that you don't want to display
export const social = {
	email: 'nusaibah.rawnak@mail.mcgill.ca',
	linkedin: 'https://www.linkedin.com/in/nusaibahbinterawnak/',
	x: '',
	github: 'https://github.com/Nusaibah-Rawnak',
	gitlab: '',
	scholar: '',
	inspire: '',
	arxiv: '',
	resume: '/Nusaibah_Resume.pdf',
}

export const template = {
	website_url: 'https://nusaibah-rawnak.github.io', // Astro needs to know your site’s deployed URL to generate a sitemap. It must start with http:// or https://
	menu_left: false,
	transitions: true,
	lightTheme: 'pastel', // Select one of the Daisy UI Themes or create your own
	darkTheme: 'dracula', // Select one of the Daisy UI Themes or create your own
	excerptLength: 200,
	postPerPage: 5,
    base: '' // Repository name starting with /
}

export const seo = {
	default_title: 'Nusaibah Binte Rawnak',
	default_description: 'Nusaibah Portfolio',
	default_image: '/images/astro-academia.png',
}
