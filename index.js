
const initializeMenu = () => {
    const nav = document.querySelector('nav');
    const ul = document.createElement('ul');

    for (let item of ['Home', 'Contact me', 'Blogs', 'About Me', 'Site details']) {
        const li = document.createElement('li');
        li.innerText = item;

        ul.appendChild(li);
    }

    nav.appendChild(ul);
};

document.addEventListener{ 'DOMContentLoaded', () => initializeMenu() };

    // <title id="blogs">Blog Navigation</title>
    // var blogNav = document.getElementById("blogs").innerHTML;
    // var blogNav = document.getElementById("blogs").innerHTML.nodeValue;

    // let blogs = ['b1', 'b2', 'b3', 'b4', 'b5', 'b6', 'b7', 'b8']
    // console.log(blogs.length)

    // let first = blogs[0]
    // let last = blogs[blogs.lenght - 1]

    // "index.html">Home Page</a></li>
    // <li><a href="blogs.html">Blogs</a></li>
    // <li><a href="characterBlog.html">About Me</a></li>
    // <li><a href="siteDetails.html">Site details</a></li>
    // <li><a href="notes.html">Notes</a></li>
    // <li><a href="contactMe.html">Contact Me</a></li>





