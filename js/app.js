let navbarcontent = document.querySelectorAll('section');
let menu = document.getElementById('navbar__list');

// Building navigation bar
function navbarMenu() {
    navbarcontent.forEach((item) => {
        Name = item.getAttribute('data-nav');
        link = item.getAttribute('id');
        let li = document.createElement("li");
        li.innerHTML = `<a class='menu__link' href='#${link}'>${Name}</a>`;
        menu.appendChild(li);
    })
}

// function to show us is it section in viewPort

function ActiveSection(elem) {
    let sectionVP = elem.getBoundingClientRect();
    return (
        sectionVP.top <= 5 &&
        sectionVP.bottom >= 50
    );
}
//adding and remove class based on condition
function SectionInView() {
    for (section of navbarcontent) {
        //if section is in ViewPort add active class,if it's not remove it
        if (ActiveSection(section)) {
            if (!section.classList.contains('your-active-class')) {
                section.classList.add('your-active-class');
            }
        } else {
            section.classList.remove('your-active-class');
        }


    }
}
// function to smooth scroll section into View
function Smooth() {
    //for each anchor in under menu__link class adding Event listener by creating a loop
    document.querySelectorAll('.menu__link').forEach((anchor) => {
        //once Event happens,function is being called. Prevent default settings and scroll IntoView clicked link with adding behavior "smooth".
        anchor.addEventListener('click', function(f) {
            f.preventDefault();
            document.querySelector(anchor.getAttribute('href')).scrollIntoView({
                behavior: "smooth",
            });
        });
    });
}
navbarMenu();
Smooth();
document.addEventListener('scroll', SectionInView);