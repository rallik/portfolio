import renderNavbar from './Navbar.js';   

export default function renderHomePage(data) {
    document.querySelector('.container').innerHTML = `
        ${renderNavbar('index', Object.keys(data))}
        ${renderHome(data.about)}
    `;
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
    </section>`
}