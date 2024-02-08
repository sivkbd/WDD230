
let currentyear = new Date().getFullYear();

let copyright = `© ${currentyear}`;


document.querySelector("footer > p:first-of-type").innerHTML = copyright;

let lastModified = document.lastModified;

document.querySelector('footer > p:last-of-type').innerHTML = lastModified;