import renderHomePage from './js/HomePage.js';
import renderAboutPage from './js/AboutPage.js';
import renderNewsPage from './js/NewsPage.js';
import renderBookshelfPage from './js/BookshelfPage.js'; 
import renderProjectMainPage from './js/ProjectMainPage.js';
import renderProjectPage from './js/ProjectPage.js';


fetch('Assets/data.json')
.then(response => {
  return response.json();
})
.then(data => {
  console.log(data);
  renderHomePage(data);
    const params = new URLSearchParams(window.location.search);
    console.log(params.get('page'), params.get('projectPage'));
    if (params.get('page') == 'index') {
        renderHomePage(data);
    } else if (params.get('page') == 'about') {
        console.log(params.get('page'));
        renderAboutPage(data);
    } else if (params.get('page') == 'news') {
        console.log(params.get('page'));   
        renderNewsPage(data.news, Object.keys(data));    
    } else if (params.get('page') == 'bookshelf') {
        console.log(params.get('page'));
        renderBookshelfPage(data.bookshelf, Object.keys(data));
    } else if (params.get('page') == 'projects' && params.get('projectPage') == null){
        console.log(params.get('page'));
        renderProjectMainPage(data.projects, Object.keys(data));
    } else {
        console.log("renderProjectPage");
        let id = params.get("projectPage");
        let project = data.projects.find(function (project) {
            return project.id === id;
        });
        console.log("project", project);
        console.log(params.get('page'));
        renderProjectPage(project, Object.keys(data));
    }
});