import data from './data/data.js';
import headerHtml from './templates/headerHtml.js';
import menuHtml from './templates/menuHtml.js';
import footerHtml from './templates/footerHtml.js';
import postsHtml from './templates/postsHtml.js';
import rescentPostsHtml from './templates/rescentPostsHtml.js';

const posts = document.getElementById('posts') || false;
const rescentPosts = document.getElementById('rescent-posts') || false;


(() => {
    document.querySelector('header').innerHTML = headerHtml();
    document.querySelector('footer').innerHTML = footerHtml();
    document.getElementById('header-menu').innerHTML = menuHtml();
    
    if (posts) {
        posts.innerHTML = postsHtml(6);
        viewMore();
    }
    
    if (rescentPosts) {
        rescentPosts.innerHTML = rescentPostsHtml(3);
    }
    
    hamburgerMenu();

})();

function viewMore() {
    document.querySelector('.view-more').addEventListener('click', (e) => {
        if (e.target.classList.contains('show-less')) {
            posts.innerHTML = postsHtml(6, false);
            viewMore();
            return;
        };
        posts.innerHTML = postsHtml(6, true);
        viewMore();
    });
}

function hamburgerMenu() {
    const hamburger =  document.querySelector('.hamburger'); 
    hamburger.addEventListener('click', () => {
        hamburger.classList.toggle('show');
    })
}