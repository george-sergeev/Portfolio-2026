const switchButtons = document.querySelectorAll('.content-switcher__button')

const sections = {
	projects: document.querySelector('.projects'),
	about: document.querySelector('.about-me'),
	education: document.querySelector('.education'),
	hard: document.querySelector('.hard-skills'),
	soft: document.querySelector('.soft-skills'),
}

function hideAll() {
	Object.values(sections).forEach(sec => sec.classList.add('hidden'))
}

function showProjects() {
	hideAll()
	sections.projects.classList.remove('hidden')
}

function showAbout() {
	hideAll()
	sections.about.classList.remove('hidden')
	sections.education.classList.remove('hidden')
	sections.hard.classList.remove('hidden')
	sections.soft.classList.remove('hidden')
}

switchButtons.forEach((btn, index) => {
	btn.addEventListener('click', () => {
		switchButtons.forEach(b =>
			b.classList.remove('content-switcher__button--active')
		)
		btn.classList.add('content-switcher__button--active')

		if (index === 0) showProjects()
		else showAbout()
	})
	console.log(sections)
})
