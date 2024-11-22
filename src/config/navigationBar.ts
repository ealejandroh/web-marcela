// Navigation Bar
// ------------
// Description: The navigation bar data for the website.
export interface Logo {
	src: string
	alt: string
	text: string
}

export interface NavSubItem {
	name: string
	link: string
}

export interface NavItem {
	name: string
	link: string
	submenu?: NavSubItem[]
}

export interface NavAction {
	name: string
	link: string
	style: string
	size: string
}

export interface NavData {
	logo: Logo
	navItems: NavItem[]
	navActions: NavAction[]
}

export const navigationBarData: NavData = {
	logo: {
		src: '/logo.png',
		alt: 'The tailwind astro theme',
		text: 'Marcela'
	},
	navItems: [
		{ name: 'Inicio', link: '/' },
		{ name: 'Precio', link: '/pricing' },
	],
	navActions: [{ name: 'Separa una ahora', link: '/contact', style: 'primary', size: 'lg' }]
}
