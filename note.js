const projects = [
    {
        id: 1,
        label: "buttermilk pancakes",
        title: ["breakfast", "https://olimjonorifjonov.com/",],
        details: "I'm baby woke mlkshk wolf bitters live-edge blue bottle, hammock freegan copper mug whatever cold-pressed",
        list: ["home", "hello", "bye", "asdsa", "dasds"],
        img: "./images/image-code-box.png",
        links: ["https://github.com/olimjon1606/", "insta"],

    },
    {
        id: 2,
        label: " pancakes",
        title: ["breakfast", "https://olimjonorifjonov.com/",],
        details: "I'm baby woke mlkshk wolf bitters live-edge blue bottle, hammock freegan copper mug whatever cold-pressed",
        list: ["home", "hello", "bye"],
        img: "./images/image-code-box.png",
        links: ["git", "insta"],

    },
    {
        id: 3,
        label: " pancakes",
        title: ["breakfast", "https://olimjonorifjonov.com/",],
        details: "I'm baby woke mlkshk wolf bitters live-edge blue bottle, hammock freegan copper mug whatever cold-pressed",
        list: ["home", "hello", "bye"],
        img: "./images/image-coffee.png",
        links: ["git", "insta"],

    },
    {
        id: 4,
        label: " pancakes",
        title: ["breakfast", "https://olimjonorifjonov.com/",],
        details: "I'm baby baby woke mlkshk wolf bitters live-edge blue bottle woke mlkshk wolf bitters live-edge blue bottle, hammock freegan copper mug whatever cold-pressed",
        list: ["home", "hello", "bye"],
        img: "./images/image-code-box.png",
        links: ["git", "insta"],

    },

]

const archive = [
    {
        id: 1,
        links: ["https://olimjonorifjonov.com/", "https://olimjonorifjonov.com/"],
        title: ["https://olimjonorifjonov.com/", "breakfast",],
        details: "I'm baby woke mlkshk wolf bitters live-edge blue bottle, hammock freegan copper mug whatever cold-pressed",
        list: ["home", "hello", "bye", "asdsa", "dasds"],

    },
    {
        id: 2,
        links: ["https://olimjonorifjonov.com/", "https://olimjonorifjonov.com/"],
        title: ["https://olimjonorifjonov.com/", "breakfast",],
        details: "I'm baby woke mlkshk wolf bitters live-edge blue bottle, hammock freegan copper mug whatever cold-pressed",
        list: ["home", "hello", "bye", "asdsa", "dasds"],

    },
    {
        id: 3,
        links: ["https://olimjonorifjonov.com/", "https://olimjonorifjonov.com/"],
        title: ["https://olimjonorifjonov.com/", "breakfast",],
        details: "I'm baby woke mlkshk wolf bitters live-edge blue bottle, hammock freegan copper mug whatever cold-pressed",
        list: ["home", "hello", "bye", "asdsa", "dasds"],

    },
    {
        id: 4,
        links: ["https://olimjonorifjonov.com/", "https://olimjonorifjonov.com/"],
        title: ["https://olimjonorifjonov.com/", "breakfast",],
        details: "I'm baby woke mlkshk wolf bitters live-edge blue bottle, hammock freegan copper mug whatever cold-pressed",
        list: ["home", "hello", "bye", "asdsa", "dasds"],

    },
    {
        id: 5,
        links: ["https://olimjonorifjonov.com/", "https://olimjonorifjonov.com/"],
        title: ["https://olimjonorifjonov.com/", "breakfast",],
        details: "I'm baby woke mlkshk wolf bitters live-edge blue bottle, hammock freegan copper mug whatever cold-pressed",
        list: ["home", "hello", "bye", "asdsa", "dasds"],

    },
    {
        id: 6,
        links: ["https://olimjonorifjonov.com/", "https://olimjonorifjonov.com/"],
        title: ["https://olimjonorifjonov.com/", "breakfast",],
        details: "I'm baby woke mlkshk wolf bitters live-edge blue bottle, hammock freegan copper mug whatever cold-pressed",
        list: ["home", "hello", "bye", "asdsa", "dasds"],

    },
    {
        id: 7,
        links: ["https://olimjonorifjonov.com/", "https://olimjonorifjonov.com/"],
        title: ["https://olimjonorifjonov.com/", "breakfast",],
        details: "I'm baby woke mlkshk wolf bitters live-edge blue bottle, hammock freegan copper mug whatever cold-pressed",
        list: ["home", "hello", "bye", "asdsa", "dasds"],

    },
    {
        id: 8,
        links: ["https://olimjonorifjonov.com/", "https://olimjonorifjonov.com/"],
        title: ["https://olimjonorifjonov.com/", "breakfast",],
        details: "I'm baby woke mlkshk wolf bitters live-edge blue bottle, hammock freegan copper mug whatever cold-pressed",
        list: ["home", "hello", "bye", "asdsa", "dasds"],

    },
    {
        id: 9,
        links: ["https://olimjonorifjonov.com/", "https://olimjonorifjonov.com/"],
        title: ["https://olimjonorifjonov.com/", "breakfast",],
        details: "I'm baby woke mlkshk wolf bitters live-edge blue bottle, hammock freegan copper mug whatever cold-pressed",
        list: ["home", "hello", "bye", "asdsa", "dasds"],

    },

]
console.log(fetch("data.txt"))
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
            <a href="https://github.com/" target="_blank">
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
    else{
        let number = 6
        displayArchive(archive, number);
        projectMoreBtn.textContent = "Show more"
        projectMoreBtn.classList.add("clicked")

    }
})
