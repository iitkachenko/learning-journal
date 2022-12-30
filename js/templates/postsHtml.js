import data from '../data/data.js';

let addedCount = 1; 

export default (quantity = 6, added = false) => {
    let currentQuantity = quantity;
    let html = '';
    let btnHtml = `<button class="view-more">View More</button>`;

    addedCount = added ? addedCount + 1 : 1;
    
    if (quantity * addedCount < data.length) {
        currentQuantity *= addedCount;
    } else {
        btnHtml = `<button class="view-more show-less">Show Less</button>`;
        currentQuantity = data.length;        
    }                         
           
    for (let i = 0; i < currentQuantity; i++) {
        const {img, date, title, body} = data[i];
        html += `
         <div class="card">
                <img class="card-img" src="${img}">
                <span class="card-date">${date}</span>
                <h2 class="card-title">${title}</h2>
                <p class="card-text">${body}</p>
            </div>`;
    }
    
    return html + btnHtml;
}