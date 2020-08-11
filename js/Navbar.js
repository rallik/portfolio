export default function renderNavbar(page, keys){
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

function renderNavItems(page, keys){
    return keys.map(d=>`
        <li>
            <a href="?page=${d}" class="fancy${addNavActiveLink(d, page)}"> ${d.charAt(0).toUpperCase() + d.substring(1)} </a>
        </li>
	`).join('');
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