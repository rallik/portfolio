import renderProjectItems from './ProjectMainPage.js';

export default function addProjectsFilter(projects){
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
