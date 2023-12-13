/**
 * @license MIT
 * @author codewithsadee <olimjon.coder@gmail.com>
 * @copyright O.Olimjon 2023
 */

'use strict';
import { fetchData } from "./api.js";
import { numberToKilo } from "./module.js";



const addEventOnElements = function ($elements, eventType, callback) {
    for (const $item of $elements) {
        $item.addEventListener(eventType, callback);
    }
}

// const $header = document.querySelector("[data-header]");

// window.addEventListener("scroll", function () {
//     $header.classList[window.scrollY > 50 ? "add" : "remove"]("active");
// })


// search toggle 

// const $searchToggler = document.querySelector("[data-search-toggler")
// const $searchField = document.querySelector("[data-search-field")

// let isExpanded = false;

// $searchToggler.addEventListener("click", function () {
//     $header.classList.toggle("search-active")
//     isExpanded = isExpanded ? false : true;
//     this.setAttribute("aria-expanded", isExpanded);
//     $searchField.focus()
// })


// Tab navigation

const $tabBtns = document.querySelectorAll("[data-tab-btn]")
const $tabPanels = document.querySelectorAll("[data-tab-panel]")

let [$lastActiveTabBtn] = $tabBtns
let [$lastActiveTabPanel] = $tabPanels

addEventOnElements($tabBtns, "click", function () {
    $lastActiveTabBtn.setAttribute("aria-selected", "false");
    $lastActiveTabPanel.setAttribute("hidden", "");

    this.setAttribute("aria-selected", "true");
    const $currentTabPanel = document.querySelector(`#${this.getAttribute("aria-controls")}`);
    $currentTabPanel.removeAttribute("hidden")

    $lastActiveTabBtn = this
    $lastActiveTabPanel = $currentTabPanel
})


// keyboard accessibility for tab buttons

addEventOnElements($tabBtns, "keydown", function (e) {
    const $nextElement = this.$nextElementSibling;
    const $previousElement = this.$previousElementSibling

    if (e.key === "ArrowRight" && $nextElement) {
        this.setAttribute("tabindex", "-1")
        $nextElement.setAttribute("tabindex", "0");
        $nextElement.focus();
    } else if (e.key === "ArrowLeft" && $previousElement) {
        this.setAttribute("tabindex", "-1")
        $previousElement.setAttribute("tabindex", "0");
        $previousElement.focus();
    }
})


const $searchSubmit = document.querySelector("[data-search-submit]")

let apiUrl = "https://api.github.com/users/olimjon1606"
let repoUrl, followerUrl, followingUrl = ""

// const searchUser = function () {
//     if (!$searchField.value) return;
//     apiUrl = `https://api.github.com/users/${$searchField.value}`

//     updateProfile(apiUrl)
// }

// $searchSubmit.addEventListener("click", searchUser);
// $searchField.addEventListener("keydown", e => {
//     if (e.key === "Enter") searchUser();
// });

// Profile

const $profileCard = document.querySelector("[data-profile-card]");
const $repoPanel = document.querySelector("[data-repo-panel]");
const $error = document.querySelector("[data-error]");

window.updateProfile = function (profileUrl) {
    $error.style.display = "none";
    document.body.style.overflowY = "visible";

    $profileCard.innerHTML = ``;

    $tabBtns[0].click()
    $repoPanel.innerHTML = `
        <div class="card repo-skeleton">
            <div class="card-body">
                <div class="skeleton title-skeleton"></div>
                <div class="skeleton text-skeleton text-1"></div>
                <div class="skeleton text-skeleton text-2"></div>
            </div>

            <div class="card-footer">
                <div class="skeleton text-skeleton"></div>
                <div class="skeleton text-skeleton"></div>
                <div class="skeleton text-skeleton"></div>
            </div>
            
            <div class="card-footer">
                <div class="skeleton text-skeleton"></div>
                <div class="skeleton text-skeleton"></div>
                <div class="skeleton text-skeleton"></div>
            </div>
        </div>
    `.repeat(6);

    fetchData(profileUrl, data => {
        const {
            type,
            avatar_url,
            name,
            login: username,
            bio,
            html_url: githubPage,
            location,
            company,
            blog: website,
            twitter_username,
            public_repos,
            followers,
            following,
            followers_url,
            following_url,
            repos_url
        } = data

        repoUrl = repos_url;
        followerUrl = followers_url;
        // followingUrl = following_url.replace("{/other_user}", "");

        $profileCard.innerHTML = 
            
       
        ``;

        updateRepository();

    }, () => {
        $error.style.display = "grid";
        document.body.style.overflowY = "hidden";

        $error.innerHTML = ``
    });
}
updateProfile(apiUrl)


// Repository

let forkedRepos = []
const updateRepository = function () {
    fetchData(`${repoUrl}?sort=created&per_page=40`, function (data) {
        $repoPanel.innerHTML = `<h2 class="sr-only">Repositories</h2>`;
        forkedRepos = data.filter(item => item.fork);
        console.log(forkedRepos)

        const repositories = data.filter(i => !i.fork);
        if (repositories.length) {
            for (const repo of repositories) {
                const {
                    name,
                    html_url,
                    description,
                    private: isPrivate,
                    language,
                    stargazers_count: stars_count,
                    forks_count
                } = repo;
                const $repoCard = document.createElement("article");
                $repoCard.classList.add("card", "repo-card");

                $repoCard.innerHTML = `<div class="card-body">
                                            <a href="${html_url}" target="_blank" class="card-title">
                                                <h3 class="title-3">
                                                    ${name}
                                                </h3>
                                            </a>
                                            ${description ?
                        `<p class="card-text">
                                                    ${description}
                                                </p>`: ""}
                                            <span class="badge">${isPrivate ? "Private" : "Public"}</span>
                                        </div>

                                        <div class="card-footer">
                                        ${language ? `<div class="meta-item">
                                                        <span class="material-symbols-rounded" aria-hidden="true">code_blocks</span>
                                                        <span class="span">${language}</span>
                                                    </div>`: ""}
                                            

                                            <div class="meta-item">
                                                <span class="material-symbols-rounded" aria-hidden="true">star_rate</span>
                                                <span class="span">${numberToKilo(stars_count)}</span>
                                            </div>

                                            <div class="meta-item">
                                                <span class="material-symbols-rounded" aria-hidden="true">family_history</span>
                                                <span class="span">${numberToKilo(forks_count)}</span>
                                            </div>
                                        </div>`;

                $repoPanel.appendChild($repoCard);
            }
        } else {
            $repoPanel.innerHTML = `<div class="error-content">
                                        <p class="title-1">Oops! :(</p>
                                        <p class="text">Doesn't have any public Repositories yet.</p>
                                    </div>`;
        }
    });
}

const $forkedPanel = document.querySelector("[data-fork-panel");
const $forkTabBtn = document.querySelector("[data-forked-tab-btn]");
const updateForkRepo = function () {
    $forkedPanel.innerHTML = `<h2 class="sr-only">Forked repositories</h2>`;
    if (forkedRepos.length) {
        for (const repo of forkedRepos) {
            const {
                name,
                html_url,
                description,
                private: isPrivate,
                language,
                stargazers_count: stars_count,
                forks_count
            } = repo;
            const $forkCard = document.createElement("article");
            $forkCard.classList.add("card", "repo-card");

            $forkCard.innerHTML = `<div class="card-body">
                                        <a href="${html_url}" target="_blank" class="card-title">
                                            <h3 class="title-3">
                                                ${name}
                                            </h3>
                                        </a>
                                        ${description ?
                    `<p class="card-text">
                                                ${description}
                                            </p>`: ""}
                                        <span class="badge">${isPrivate ? "Private" : "Public"}</span>
                                    </div>

                                    <div class="card-footer">
                                    ${language ? `<div class="meta-item">
                                                    <span class="material-symbols-rounded" aria-hidden="true">code_blocks</span>
                                                    <span class="span">${language}</span>
                                                </div>`: ""}
                                        

                                        <div class="meta-item">
                                            <span class="material-symbols-rounded" aria-hidden="true">star_rate</span>
                                            <span class="span">${numberToKilo(stars_count)}</span>
                                        </div>

                                        <div class="meta-item">
                                            <span class="material-symbols-rounded" aria-hidden="true">family_history</span>
                                            <span class="span">${numberToKilo(forks_count)}</span>
                                        </div>
                                    </div>`;

            $forkedPanel.appendChild($forkCard);
        }
    } else {
        $forkedPanel.innerHTML = `<div class="error-content">
                                    <p class="title-1">Oops! :(</p>
                                    <p class="text">Doesn't have any forked repositories yet.</p>
                                </div>`;
    }
}

$forkTabBtn.addEventListener("click", updateForkRepo);

// Followers

//Following 
