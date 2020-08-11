import renderNavbar from './Navbar.js';
// import addNewsSearch from './NewsSearch.js';

export default function renderNewsPage(news, keys){
    document.querySelector('.container').innerHTML = `
        ${renderNavbar('news', keys)}
        ${renderNews(news)}
    `;
    addNewsSearch(news);
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
