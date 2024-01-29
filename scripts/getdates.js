
let year = new Date().getFullYear();

let copyright = `© ${year}`;


let lastModified = `Last modified: ${document.lastModified}`;


document.querySelector("footer > p:first-of-type").innerHTML = copyright;
document.querySelector("#lastModified").innerHTML = lastModified;
