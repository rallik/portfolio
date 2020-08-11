import renderNewsItems from './NewsPage.js';

export default function addNewsSearch(news){
    let input = document.querySelector('input[type=search]');
    console.log(input);
    input.addEventListener('input', (event)=>{
        let filteredNews = news.filter(news=>news.event.toLowerCase().includes(event.target.value.toLowerCase()))
        console.log("news = ", news);
        document.querySelector(".news-list").innerHTML =
        renderNewsItems(filteredNews);
    })
}
