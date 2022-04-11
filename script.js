const featured = document.querySelector('.featured__speakers')

const speakers = [
	{
		name: "Prophet Shepherd Bushiri",
		job: "Founding president of the Enlightened Christian Gathering International Church",
		about: "Known for performing miracles, also known as Major 1. He is a spiritual leader, businessman, motivational speaker, and an author. ",
		urlLink: "./img/pastor1.jpeg"
	},
	{
		name: "Pastor Sandra Riley",
		job: `President and CEO of "Just for U Ministries".`,
		about: "Conference speaker, Talk Show host, seminar presenter, women and young adult workshop presenter is one of the nation’s highly sought after conference speakers.",
		urlLink: "./img/pastor2.jpg"
	},
	{
		name: "Dr. David Oyedepo",
		job: "Presiding Bishop of the Faith Tabernacle",
		about: "Christian author, businessman, architect and the founder of the Living Faith Church Worldwide, and presiding Bishop of the Faith Tabernacle.",
		urlLink: "./img/pastor3.jpg"
	},
	{
		name: "Bishop David O. Abioye",
		job: "First Vice President of the Living Faith Church Worldwide.",
		about: "First Vice President of the Living Faith Church Worldwide, an Associate Bishop, and Presiding Bishop of Winners Chapel Goshen, Abuja.",
		urlLink: "./img/pastor4.jpg"
	},
	{
		name: "Christian Oyakhilome",
		job: "Founder and president of LoveWorld Inc.",
		about: `The first pastor to pioneer a Christian-based television network from Africa to the rest of the world. He also held the largest single night event held in Nigeria in 2006.`,
		urlLink: "./img/pastor5.jpeg"
	},
	{
		name: "Pope Francis",
		job: "The head of the Catholic Church and sovereign of the Vatican City State since 2013",
		about: "The first pope from the Americas, and the first pope from outside Europe since Gregory III, a Syrian who reigned in the 8th century.",
		urlLink: "./img/pastor6.jpg"
	}
]

speakers.forEach((speaker)=> {
	featured.innerHTML +=
	`<div class="featured__speaker">
		<img src="./img/bg.png" alt="Photo of ${speaker.name}" class="featured__speaker--bg"/>
		<img src="${speaker.urlLink}" alt="Photo of ${speaker.name}" class="featured__speaker--img"/>
		<div class="featured__speaker--details">
			<h3 class="featured__speaker--heading">${speaker.name}</h3>
			<span class="featured__speaker--span">${speaker.job}</span>
			<p class="featured__speaker--about">${speaker.about}</p>
		</div>
	</div>`
})

