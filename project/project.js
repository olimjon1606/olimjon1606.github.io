const projects = [
    {
        id: 1,
        label: "Featured Project",
        title: ["GitFinder", "https://gitfinderr.netlify.app/",],
        details: "Git Finder is a user-friendly web application for GitHub enthusiasts. With a simple username search, you can access valuable information about any GitHub user. Explore their repositories, followers, and followings effortlessly. Git Finder leverages the GitHub API, ensuring you get the latest updates.",
        list: ["JavaScript", "Node.js", "GitHub API", "CSS", "HTML"],
        img: "./project/images/git-finder.png",
        links: ["https://github.com/olimjon1606/GitHub-App", "https://gitfinderr.netlify.app/"],

    },
    {
        id: 2,
        label: "Featured Project",
        title: ["CodeBox_", "https://code-box-01.netlify.app/",],
        details: "The Code Box Study Center Website is a dynamic and user-friendly web application designed to provide students and educators with a comprehensive platform for learning, collaboration, and resource sharing",
        list: ["JavaScript", "SCSS", "CSS", "HTML"],
        img: "./project/images/image-code-box.png",
        links: ["https://github.com/olimjon1606/code-box", "https://code-box-01.netlify.app/"],

    },
    {
        id: 3,
        label: "Featured Project",
        title: ["Shopper", "https://app.netlify.com/sites/shopper-ecom/",],
        details: "Welcome to Shopper, your premier destination for an unparalleled online shopping experience. Dive into a world where convenience meets style, and discover a curated selection of products that cater to your every need.",
        list: ["React.js", "Next.js", "CSS", "HTML"],
        img: "./project/images/shopper.png",
        links: ["https://github.com/olimjon1606/ecommerce", "https://app.netlify.com/sites/shopper-ecom/"],

    }

]

const archive = [
    {
        id: 1,
        links: ["https://github.com/olimjon1606/tic-tac-toe", "https://tic-tac-toe-g4me.netlify.app/"],
        title: ["https://tic-tac-toe-g4me.netlify.app/", "CodeBox_",],
        details: "A sleek React Tic-Tac-Toe game for two players. Enjoy a classic gaming experience with a modern twist!",
        list: ["JavaScript", "React", "CSS", "HTML"],
    },
    {
        id: 2,
        links: ["https://github.com/olimjon1606/list-of-best-movies", "https://the-list-of-best-movies.netlify.app/"],
        title: ["https://the-list-of-best-movies.netlify.app/", "Movies",],
        details: "Whether you're a seasoned film buff, a casual moviegoer, or just looking for an excellent movie night pick, our web app is here to guide you. Immerse yourself in a universe of movie information, from ratings and reviews to production dates and much more.",
        list: ["JavaScript", "PHP", "SCSS", "CSS", "HTML"],
    },
    {
        id: 3,
        links: ["https://github.com/olimjon1606/online-coffee-shopp", "https://online-coffee-shop.netlify.app/"],
        title: ["https://online-coffee-shop.netlify.app/", "Coffee Shop",],
        details: "Designed for coffee connoisseurs, casual sippers, and café owners alike, this web application offers an immersive coffee experience that brings the aroma and ambiance of your favorite coffee shop right to your screen.",
        list: ["JavaScript", "CSS", "HTML"]
    },
    {
        id: 4,
        links: ["https://github.com/olimjon1606/dice_game", "https://playdice-game.netlify.app/"],
        title: ["https://playdice-game.netlify.app/", "PlayDice",],
        details: "The Dice Game is a browser-based application that allows users to play a virtual dice game. It's designed to be simple and intuitive, providing an enjoyable gaming experience for players of all ages.",
        list: ["JavaScript", "WordPress", "CSS", "HTML"],

    },
    {
        id: 5,
        links: ["https://github.com/olimjon1606/drum_kit", "https://my-drum-play.netlify.app"],
        title: ["https://my-drum-play.netlify.app", "PlayDrum",],
        details: "The Drum Game Web Application is a browser-based application designed to bring the joy of drumming to users of all skill levels.",
        list: ["JavaScript", "WordPress", "CSS", "HTML"],

    },
    {
        id: 6,
        links: ["https://github.com/olimjon1606/weather", "https://weather-forecasting-website.netlify.app"],
        title: ["https://weather-forecasting-website.netlify.app", "Weather",],
        details: "It provides a wide range of weather data and features to help users stay informed and make decisions related to travel, outdoor activities, and daily planning",
        list: ["JavaScript", "OpenWeather_API"],

    },
    {
        id: 7,
        links: ["https://github.com/olimjon1606/laruki", "https://laruki-my-website.netlify.app"],
        title: ["https://laruki-my-website.netlify.app", "Laruki",],
        details: "Laruki is an online platform that offers a comprehensive suite of tools and features for software developers, teams, and organizations.",
        list: ["JavaScript", "CSS", "HTML"],

    },
    {
        id: 8,
        links: ["https://github.com/olimjon1606/bella_food-store", "https://bellaa-my-website.netlify.app"],
        title: ["https://bellaa-my-website.netlify.app", "Bella",],
        details: "Bella Web Food Store is an online destination that offers a delightful and convenient food shopping experience.",
        list: ["JavaScript", "SCSS", "CSS", "HTML"],

    }
    // {
    //     id: 7,
    //     links: ["https://olimjonorifjonov.com/", "https://acme-website-mic.netlify.app"],
    //     title: ["https://acme-website-mic.netlify.app", "breakfast",],
    //     details: "I'm baby woke mlkshk wolf bitters live-edge blue bottle, hammock freegan copper mug whatever cold-pressed",
    //     list: ["home", "hello", "bye", "asdsa", "dasds"],

    // },
    // {
    //     id: 8,
    //     links: ["https://olimjonorifjonov.com/", "https://olimjonorifjonov.com/"],
    //     title: ["https://olimjonorifjonov.com/", "breakfast",],
    //     details: "I'm baby woke mlkshk wolf bitters live-edge blue bottle, hammock freegan copper mug whatever cold-pressed",
    //     list: ["home", "hello", "bye", "asdsa", "dasds"],

    // },
    // {
    //     id: 9,
    //     links: ["https://olimjonorifjonov.com/", "https://olimjonorifjonov.com/"],
    //     title: ["https://olimjonorifjonov.com/", "breakfast",],
    //     details: "I'm baby woke mlkshk wolf bitters live-edge blue bottle, hammock freegan copper mug whatever cold-pressed",
    //     list: ["home", "hello", "bye", "asdsa", "dasds"],

    // },

]
// console.log(fetch("data.txt"))
const projectContainer = document.querySelector(".project-container")
const archiveContainer = document.querySelector(".box-container")
const projectMoreBtn = document.querySelector(".btn-pr-more")
window.addEventListener("DOMContentLoaded", function () {
    displayProjects(projects);
    let number = 6
    displayArchive(archive, number);
});
function displayArchive(data, number) {
    let displayAr = data.map(function (item) {
        let listItemArray = []
        for (i = 0; i < item.list.length; i++) {
            listItemArray.push(`<li>${item.list[i]}</li>`)
        }
        listItemArray = listItemArray.join("")
        // console.log(listItemArray)
        let projectContent = `<div class="card">
                                    <div class="icon-links">
                                        <i class="fa-regular fa-folder"></i>
                                        <ul class="icon-list">
                                            <li>
                                                <a href="${item.links[0]}" target="_blank">
                                                    <i class="fa-brands fa-github"></i>
                                                </a>
                                            </li>
                                            <li>
                                                <a href="${item.links[1]}" target="_blank">
                                                    <i class="fa-solid fa-arrow-up-right-from-square"></i>
                                                </a>
                                            </li>
                                        </ul>
                                    </div>
                                    <a href="${item.title[0]}">
                                        <h3 class="headline">
                                            ${item.title[1]}
                                        </h3>
                                    </a>
                                    <p class="description">${item.details}</p>
                                    <ul class="prog-names">
                                        ${listItemArray}
                                    </ul>
                                </div>`

        if (item.id <= number) {
            return projectContent;
        } else {
            return ''
        }
    })
    displayAr = displayAr.join("")
    archiveContainer.innerHTML = displayAr
}
function displayProjects(projects) {
    let displayPr = projects.map(function (item) {
        let listItemArray = []
        for (i = 0; i < item.list.length; i++) {
            listItemArray.push(`<li>${item.list[i]}</li>`)
        }
        listItemArray = listItemArray.join("")
        // console.log(listItemArray)
        let projectContent = `
        <div class="project-content">
            <div class="project-label">${item.label}</div>
            <h4 class="project-title">
                <a href="${item.title[1]}" target="_blank">${item.title[0]}</a>
            </h4>
            <div class="project-details">
                <div class="project-description"><p>${item.details}</p></div>
                <ul>
                    ${listItemArray}
                </ul>
                <ul>
                    <li>
                        <a href="${item.links[0]}" target="_blank">
                            <i class="fa-brands fa-github"></i>
                        </a>
                    </li>
                    <li>
                        <a href="${item.links[1]}" target="_blank">
                            <i class="fa-solid fa-arrow-up-right-from-square"></i>
                        </a>
                    </li>
                </ul>
            </div>
        </div>
        <div class="project-img">
            <a href="${item.links[1]}" target="_blank">
                <img src=${item.img} alt="project img" />
            </a>
        </div>
        `
        if (item.id % 2 == 0) {
            return `<div class="project even">
                        ${projectContent}
                    </div>`
        } else {
            return `<div class="project">
                        ${projectContent}
                    </div>`
        }
    })
    displayPr = displayPr.join("")
    projectContainer.innerHTML = displayPr
}

projectMoreBtn.addEventListener("click", () => {
    console.log(projectMoreBtn.classList[1])
    if (projectMoreBtn.classList[1] === "clicked") {
        displayArchive(archive, archive.length);
        projectMoreBtn.textContent = "Show less"
        projectMoreBtn.classList.remove("clicked")
    }
    else {
        let number = 6
        displayArchive(archive, number);
        projectMoreBtn.textContent = "Show more"
        projectMoreBtn.classList.add("clicked")

    }
})
