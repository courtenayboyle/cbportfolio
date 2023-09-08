const cardData = [
	{
		heading: 'Full Stack e-commerce App',
		image: './img/coffee_shop_thumbnail.png',
		body: "A modern full stack e-commerce web application featuring a front end utilizing HTML, CSS, Javascript and Bootstrap. The front end was designed to function similarly to a Single Page Application, creating a friendly and fluid user experience. The backend utilized Node and Express, and Stripe was integrated for payment processing. This application could rapidly and with minor effort be turned into a reliable and repeatable templated application for multiple businesses.",
		buttonAddress: 'https://coffee-shop-xwct.onrender.com',
		buttonText: 'VISIT SITE'
	},
	{
		heading: 'Weather App',
		image: './img/weather_app.png',
		body: "A user inputs any city in the world and the app will return the city's current temperature, wind speed and humidity percentage.",
		buttonAddress: 'https://courtenayboyle.github.io/weather_app/',
		buttonText: 'VISIT SITE'
	},
	{
		heading: 'Page Ranking App',
		image: './img/pagerank.gif',
		body: "This Python program crawls a web site and pulls a series of pages into the database, recording the links between pages. It is a set of programs that emulate some of the functions of a search engine. They store their data in a SQLITE3 database. ",
		buttonAddress: 'https://github.com/courtenayboyle/pageRank',
		buttonText: 'READ MORE'
	},
	{
		heading: 'Palindrome Checker',
		image: './img/palindrome_checker.png',
		body: "Javascript app that checks if a word or number is a palindrome. Created a UI with HTML and CSS.",
		buttonAddress: 'https://courtenayboyle.github.io/palindrome_checker/',
		buttonText: 'VISIT SITE'
	},
	{
		heading: 'Python API App',
		image: './img/API_App_Project.png',
		body: "This is a Python script to automatically take data from a crypto API. Additionally, I did some data cleaning and created a few visualizations.",
		buttonAddress: 'https://github.com/courtenayboyle/API-Portfolio-Project.ipynb',
		buttonText: 'READ MORE'
	},
	{
		heading: 'Time Calculator',
		image: './img/time_calculator.png',
		body: 'This is a Python App that takes in parameters to include a start time, a duration time, and an optional starting day of the week. I then designed a UI to take user input to calculate a return time and day.',
		buttonAddress: 'https://time-calculator-kjoj.onrender.com',
		buttonText: 'VISIT SITE'
	},
	{
		heading: 'Arithmetic Formatter',
		image: './img/arithmetic_form_pic.png',
		body: 'Created an app in Python that receives a list of strings that are arithmetic problems and returns the problems arranged vertically and side-by-side.',
		buttonAddress: 'https://github.com/courtenayboyle/arithmeticFormatter',
		buttonText: 'Read More'
	},
	{
		heading: 'Shape Calculator',
		image: './img/shape_calculator.png',
		body: 'Used object oriented programming in Python to create a Rectangle class and a Square class. The Square class is a subclass of Rectangle that inherits methods and attributes.',
		buttonAddress: 'https://github.com/courtenayboyle/polygon_area_calculator',
		buttonText: 'Read More'
	},
		{
		heading: 'Phone Number Validator',
		image: './img/telephone_validator.png',
		body: 'This is a Javascript app that verifies if a phone number is valid given different formats. A UI was then created to take user input of a phone number and check if valid.',
		buttonAddress: 'https://courtenayboyle.github.io/telephone_validator/',
		buttonText: 'VISIT SITE'
	},
	{
		heading: 'Probability Calculator',
		image: './img/probability_calc.png',
		body: 'This is a Python program to determine the approximate probability of drawing certain balls randomly from a hat.',
		buttonAddress: 'https://github.com/courtenayboyle/probability_calculator',
		buttonText: 'Read More'
	},
	{
		heading: 'Air BnB Visualizations',
		image: './img/airBnbVis.png',
		body: 'Using data from Air Bnb, I created multiple visualizations using Tableau.',
		buttonAddress: 'https://public.tableau.com/app/profile/courtenay.boyle6979/viz/AirBnBFullProject_16834704930030/Dashboard1?publish=yes',
		buttonText: 'Read More'
	},
	{
		heading: 'Restaurant App',
		image: './img/restaurant_app.png',
		body: 'Web application using HTML and CSS. This was my first push into front end development!',
		buttonAddress: 'https://courtenayboyle.github.io/restaurantHtmlCssApp/',
		buttonText: 'Visit Site'
	},
	{
		heading: 'Chiropractic App',
		image: './img/chiro_website.png',
		body: 'This app is the WHY  I became a Full Stack Engineer! I opened my chiropractic business in 2017 and built this website with help from Word Press. I absolutely fell in love with coding!',
		buttonAddress: 'https://promochiropractic.com',
		buttonText: 'Visit Site'
	},
	{
		heading: 'Excel Visualizations',
		image: './img/Excel_Visualizations.png',
		body: 'I created multiple visualizations looking at bike sales related to different data sets. I created the visualizations in Excel.',
		buttonAddress: 'https://github.com/courtenayboyle/Bike-Sales-Visualizations-in-Excel',
		buttonText: 'READ MORE'
	},
	{
		heading: 'Data Visualizations',
		image: './img/Survey_Visualizations.png',
		body: 'I created multiple visualizations in Power BI based on a survey from Data Professionals.',
		buttonAddress: 'https://github.com/courtenayboyle/Data-Professional-Survey-Visualization',
		buttonText: 'READ MORE'
	},
	{
		heading: 'Amazon Web Scraping App',
		image: './img/amazonWebScraping.png',
		body: 'Python app used to scrape data from Amazon with the help of BeautifulSoup and pandas. Additionally, it contains an automatic timer that pulls data and stores it in excel files. Lastly, the app was set up to automatically email myself when certain criteria was met.',
		buttonAddress: 'https://github.com/courtenayboyle/Amazon-Web-Scraping',
		buttonText: 'READ MORE'
	},
	{
		heading: 'Data Cleaning Using SQL',
		image: './img/dataCleaning.png',
		body: 'In this project I did lots of data cleaning using SQL. I used tables that contained data regarding housing in Nashville, TN.',
		buttonAddress: 'https://github.com/courtenayboyle/Data-Cleaning-in-SQL',
		buttonText: 'READ MORE'
	},
	{
		heading: 'COVID Data Exploration',
		image: './img/dataExploration.png',
		body: 'This app uses SQL to do data exploration of COVID datasets. Joins were used to combine different tables to better visualize the data.',
		buttonAddress: 'https://github.com/courtenayboyle/COVID-Data-Exploration',
		buttonText: 'READ MORE'
	}
]

const postContainer = document.querySelector('.card-container');

const postMethods = () => {
	cardData.map((postData) => {
		if (postData.buttonAddress) {
			const postElement = document.createElement('div');
			postElement.classList.add('card');
			postElement.innerHTML = `
            <h3 class="card-heading">${postData.heading}</h3>
            <img src="${postData.image}" alt="Project Image" />
            <p class="card-body">${postData.body}</p>
            <div class="container_button">
            <a href=${postData.buttonAddress}>${postData.buttonText}</a>
            </div>
            `
			postContainer.appendChild(postElement)
		} else {
			const postElement = document.createElement('div');
			postElement.classList.add('card');
			postElement.innerHTML = `
        <h3 class="card-heading">${postData.heading}</h3>
        <img src="${postData.image}" alt="Project Image" />
        <p class="card-body">${postData.body}</p>
        `
			postContainer.appendChild(postElement)

		}
	})
}
postMethods()