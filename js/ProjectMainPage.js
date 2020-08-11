import renderNavbar from './Navbar.js';
import renderFooter, {renderTags, renderIndexMaterials} from './ExtraMaterials.js';
// import addProjectsFilter from './ProjectFilter.js';

export default function renderProjectMainPage (projects, keys) {
    document.querySelector('.container').innerHTML = `
        ${renderNavbar('projectMain', keys)}
        ${renderProjects(projects)}
        ${renderFooter()}
    `;
    addProjectsFilter(projects);
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