import renderNavbar from './Navbar.js';

export default function renderAboutPage(data){
    document.querySelector('.container').innerHTML = `
        ${renderNavbar('about', Object.keys(data))}
        ${renderAbout(data.about)}
    `;
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