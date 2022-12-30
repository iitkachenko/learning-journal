import data from '../data/data.js';

export default (quantity = 3) => {
    let html = '<h3 class="title">Rescent posts</h3>';    
    const sortedPosts = data.sort((a,b) => a.date - b.date); //it can be useful in real case
           
    for (let i = 0; i < (sortedPosts.length - quantity > 0 ? quantity : sortedPosts.length); i++) {
        const {img, date, title, body} = sortedPosts[i];
        html += `
         <div class="card">
                <img class="card-img" src="${img}">
                <span class="card-date">${date}</span>
                <h2 class="card-title">${title}</h2>
                <p class="card-text">${body}</p>
            </div>`;
    }
    
    return html;
}