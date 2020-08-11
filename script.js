fetch('data.json').then(resp=>resp.json()).then
.then(data=>{
    console.log(data);
})

function renderPage(data) {
    document.querySelector(".container").innerHTML = renderProjects(data.projects);
}

function renderProjects(projects){
    return projects.map(d=>'
        <div class="row">
            <div class="col">
                <div class="title><a href="?project=${d.id}"> ${d.title}  </a></div>"
                </div>
            </div>

            <div class="col">
                <img class=
                </div>
            </div>
        </div>
    
    ')
}