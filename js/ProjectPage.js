import renderNavbar from './Navbar.js';
import renderFooter from './ExtraMaterials.js'

export default function renderProjectPage(project, keys) {
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