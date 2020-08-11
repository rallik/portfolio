export default function renderFooter(){
    return `
    <div class="row center">
        <footer>Copyright © Reuben Allik</footer>
    </div>
    `  
}

export function renderTags(tags) {  
    return tags.map(d=>`
    <span class="tag ${d.split(" ").join("").toLowerCase()}">${d}</span>
	`).join('');
}

export function renderIndexMaterials(materials) {
    if (materials == null) {
        return " ";
    } else {
        return materials.map(d=>`
        <a class="fancy far fa-newspaper" href="${d.path}" target="_blank"> ${d.label}</a>
	    `).join('');
    }
}