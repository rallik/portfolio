fetch('Assets/data.json')
.then(response => {
  return response.json();
})
.then(data => {
  console.log(data);
  renderHomePage(data);
    const params = new URLSearchParams(window.location.search);
    console.log(params.get('page'), params.get('projectPage'));
    if (params.get('page') == 'index') {
        renderHomePage(data);
    } else if (params.get('page') == 'about') {
        console.log(params.get('page'));
        renderAboutPage(data);
    } else if (params.get('page') == 'news') {
        console.log(params.get('page'));   
        renderNewsPage(data.news, Object.keys(data));    
    } else if (params.get('page') == 'bookshelf') {
        console.log(params.get('page'));
        renderBookshelfPage(data.bookshelf, Object.keys(data));
    } else if (params.get('page') == 'projects' && params.get('projectPage') == null){
        console.log(params.get('page'));
        renderProjectMainPage(data.projects, Object.keys(data));
    } else {
        console.log("renderProjectPage");
        let id = params.get("projectPage");
        let project = data.projects.find(function (project) {
            return project.id === id;
        });
        console.log("project", project);
        console.log(params.get('page'));
        renderProjectPage(project, Object.keys(data));
    }
});

function renderHomePage(data) {
    document.querySelector('.container').innerHTML = `
        ${renderNavbar('index', Object.keys(data))}
        ${renderHome(data.about)}
    `;
}

function renderAboutPage(data){
    document.querySelector('.container').innerHTML = `
        ${renderNavbar('about', Object.keys(data))}
        ${renderAbout(data.about)}
    `;
}

function renderNewsPage(news, keys){
    document.querySelector('.container').innerHTML = `
        ${renderNavbar('news', keys)}
        ${renderNews(news)}
    `;
    addNewsSearch(news);
}

function renderBookshelfPage(bookshelf, keys) {
    document.querySelector('.container').innerHTML = `
        ${renderNavbar('bookshelf', keys)}
        ${renderBookshelf(bookshelf)}

    `;
}

function renderProjectMainPage (projects, keys) {
    document.querySelector('.container').innerHTML = `
        ${renderNavbar('projectMain', keys)}
        ${renderProjects(projects)}
        ${renderFooter()}
    `;
    addProjectsFilter(projects);
}

function renderProjectPage(project, keys) {
    document.querySelector(".container").innerHTML = `
    ${renderNavbar('project', keys)}
        <section id="${project.id}">
            <h1 class="title">${project.title}</h1>
            <div class="col-8">
                ${renderDetailsDescription(project.detailsDescription)}
            </div>
            <div>
                ${renderDetailsImages(project.detailsImages)}
            </div>

        </section>
    </div>
    ${renderFooter()}
    `;  
}  


function renderDetailsDescription(description){
    return description.map(d=>`
        <p>
            ${d.text}
        </p>
	`).join('');
}

function renderDetailsImages(images){
    return images.map(d=>
        `<div>
            <img class="${d.orientation}" src="${d.image}">
            <div class="picture-caption">
                ${d.caption}
                <div class="light">
                    ${d.subCaption}
                </div>
            </div>
        </div>
    `).join('');
}



function renderNavbar(page, keys){
    console.log(keys)
    return `
        <nav>
            <div class="row">
                <div class="col-5 lateCenter">
                    <a href="?page=index" class="name notFancy" >REUBEN ALLIK</a>
                </div>
                <div class="col-6">
                    <div id="ipadDesktopNav">
                        <ul>
                            ${renderNavItems(page, keys)}
                        </ul>
                    </div>
                </div>
            </div>
        </nav>
    `
}


{/* <div id="mobileNav" href="javascript:void(0); onclick="${navOpenClosed()}">
                        <div class="mobileNavHead">
                            Menu
                        </div>
                        <ul>
                            ${renderNavItems(page, keys)}
                        </ul>
                    </div> */}

function renderNavItems(page, keys){
    return keys.map(d=>`
        <li>
            <a href="?page=${d}" class="fancy${addNavActiveLink(d, page)}"> ${d.charAt(0).toUpperCase() + d.substring(1)} </a>
        </li>
	`).join('');
}

function renderHome(about){
    return `
    <section id="index">
        <div class="row">
            <div class="col-4 homepageBlurb">
                ${about.homepageBlurb}
                <div class="indexIcons">
                    <a class ="fab fa-linkedin notFancy" href="${about.linkedInLink}" target="_blank"></a> | 
                    <a class ="fab fa-github-square notFancy" href="${about.gitHubLink}" target="_blank"></a> |
                    <a href="${about.currentResume}" class="fancy" target="_blank">Resume</a>
                </div>
            </div>
            <div class="col-7 right">
                <img class="homepageImage" src="${about.homepageImage}"/>
            </div>
        </div>
    </section>
    `
}

function renderAbout(about){
    return `
    <section id="about">
        <div class="row lateCenter">
            <div class="col-5">
                <img class="profilepic" src="${about.profilePhoto}"/>
                <div class="aboutTitle">
                    <strong>${about.title}</strong><br>
                    ${about.email}<br>
                    ${about.currentAddress}<br>
                </div>
                <div class="aboutIcons">
                        <a class ="fab fa-linkedin notFancy" href="${about.linkedInLink}" target="_blank"></a> | 
                        <a class ="fab fa-github-square notFancy" href="${about.gitHubLink}" target="_blank"></a> |
                        <a href="${about.currentResume}" class="fancy" target="_blank">Resume</a>
                </div>
            </div>
          
            <div class="col-7">
                <p>
                    ${about.description.p1}
                </p>
                <p> 
                    ${about.description.p2}
                </p>
                <p>
                    ${about.description.p3}
                </p>
            </div>
        </div>
        </section>`
}


function renderNews(news){
    return `
    <section id="news">
        <div class="search">
            <input type="search" name='news' placeholder="Search News...">
        </div>
        <div class="news-list">
            ${renderNewsItems(news)}
        </div>
    </section>`;
}

function renderNewsItems(news) {
    return news.slice(0,5).map(d=>`
    <div class="row">
        <div class="col-8">
            <strong>${d.date}</strong>
        </div>
        <div class="col-4">
            ${d.event}
        </div>
    </div><br>
	`).join('');
}

function renderBookshelf(bookshelf){
    return `
    <section id="bookshelf">
        <div class="row">
            ${renderBook(bookshelf)}
        </div>
    </section>
    `
}


function renderBook (bookshelf) {
    return bookshelf.map(d=>`
        <div class="col-8">
            <img class="bookcover" src="${d.coverPhoto}">
        </div>
        <div class="booktitle col-8">
            <em>${d.bookTitle}</em> by ${d.bookAuthor}
        </div>
    `).join('');
}

function renderProjects(projects){
    return `
    <section id="projects">
        <div class="row">
            <div class="filter col-12">
                <label class="radio">
                    <input class="radioButton" type="radio" name="filter" value="all" checked>
                    All
                </label>
                <label class="radio">
                    <input class="radioButton" type="radio" name="filter" value="photography">
                    Photography
                </label>
                <label class="radio">
                    <input class="radioButton" type="radio" name="filter" value="designthinking">
                    Design Thinking
                </label>
                <label class="radio">
                    <input class="radioButton" type="radio" name="filter" value="travel">
                    Travel
                </label>
            </div>
        </div>  
        <div class="projects-list">
            ${renderProjectItems(projects)}
        </div>
    </section>`;
}

function renderProjectItems(projects){
	return projects.map(d=>`
    <div class="row">
        <div class="col-5">
            <img class="${d.indexImage.orientation}" src="${d.indexImage.image}"/>
        </div>
        <div class="col-7">
            <div class="project-title">
                <a class="fancy" href="?projectPage=${d.id}"> ${d.title} </a>
            </div>
            <div class="title-shift">
                <div>
                    ${d.indexDescription}
                </div>
                <div>
                    ${renderTags(d.tags)}
                </div>
            </div>

            <div>
                ${renderIndexMaterials(d.indexMaterials)} 
            </div>
        </div>
    </div>
	`).join('');
}

function renderTags(tags) {  
    return tags.map(d=>`
    <span class="tag ${d.split(" ").join("").toLowerCase()}">${d}</span>
	`).join('');
}

function renderIndexMaterials(materials) {
    if (materials == null) {
        return " ";
    } else {
        return materials.map(d=>`
        <a class="fancy far fa-newspaper" href="${d.path}" target="_blank"> ${d.label}</a>
	    `).join('');
    }
}

function renderFooter(){
    return `
    <div class="row center">
        <footer>Copyright © Reuben Allik</footer>
    </div>
    `  
}

function addNavActiveLink(linkInLoop, currentPage){
    console.log(linkInLoop, currentPage);
    if (linkInLoop === currentPage) {
        return ` active`
    } else if (linkInLoop === "projects" && (currentPage === "projectMain" || currentPage === "project")) {
        return ` active`
    } else {
        return ``
    }
}

function addNewsSearch(news){
    let input = document.querySelector('input[type=search]');
    console.log(input);
    input.addEventListener('input', (event)=>{
        let filteredNews = news.filter(news=>news.event.toLowerCase().includes(event.target.value.toLowerCase()))
        console.log("news = ", news);
        document.querySelector(".news-list").innerHTML =
        renderNewsItems(filteredNews);
    })
}

function addProjectsFilter(projects){
    let buttons = document.querySelectorAll('.filter input[name="filter"]');
    console.log(document.querySelector("projects"))
    console.log('buttons = ',buttons)
    buttons.forEach(cond=>cond.addEventListener('change', function(event){
        let filteredProjects = [];
        projects.forEach(proj=>{
            proj.tags.forEach(tags=>{
                if (event.target.value === 'all') {
                    filteredProjects.push(proj)
                } else if (tags.split(" ").join("").toLowerCase() === event.target.value){
                    filteredProjects.push(proj)
                }
            })
        })
        document.querySelector(".projects-list").innerHTML =
        renderProjectItems(filteredProjects);
    }))
}
