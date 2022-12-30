import menu from '../data/menu.js';

export default () => {
   //return menu.map(({name, src}) => `<li><a href="${src}">${name}</a></li>`).join('');
   return menu.reduce((acc, {name, src}) => acc + `<li><a href="${src}">${name}</a></li>`,'');   
}