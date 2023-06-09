const cardData = [
    {
        heading: 'API Python Project',
        image: './img/API_App_Project.png',
        body: "I created a script to automatically take data from a crypto API using Python. Additionally, I did some data cleaning and created a few visualizations.",
        buttonAddress: 'https://github.com/courtenayboyle/API-Portfolio-Project.ipynb',
        buttonText: 'READ MORE'
    },
		{
			heading: 'Page Ranking App',
			image: './img/pagerank.gif',
			body: "This Python program crawls a web site and pulls a series of pages into the database, recording the links between pages. It is a set of programs that emulate some of the functions of a search engine. They store their data in a SQLITE3 database. ",
			buttonAddress: 'https://github.com/courtenayboyle/pageRank',
			buttonText: 'READ MORE'
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
        body: 'This is an application that I built using HTML and CSS. This was my first push into front end development!',
        buttonAddress: 'https://courtenayboyle.github.io/restaurantHtmlCssApp/',
        buttonText: 'Check it out!'
    },
		{
			heading: 'Chiropractic Website',
			image: './img/chiro_website.png',
			body: 'This project is the WHY  I became a Full Stack Engineer! I opened my chiropractic business in 2017 and built this website with help from Word Press. I absolutely fell in love with coding!',
			buttonAddress: 'https://promochiropractic.com',
			buttonText: 'READ MORE'
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
        body: 'In this project I used Python to scrape data from Amazon with the help of BeautifulSoup and pandas. Additionally, I set up an automatic timer to pull data and keep the data in excel files, as well as automatically emailing myself when certain criteria was met.',
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
        body: 'I did some data exploration looking at COVID data. I used SQL to look at the data and compare various aspects within multiple tables. In this project I used joins to combine different tables to be able to look closer at data.',
        buttonAddress: 'https://github.com/courtenayboyle/COVID-Data-Exploration',
        buttonText: 'READ MORE'
    }
]

const postContainer = document.querySelector('.card-container');

const postMethods = ()=>{
    cardData.map((postData)=>{
        if (postData.buttonAddress){
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

