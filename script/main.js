if ('scrollRestoration' in history) {
    history.scrollRestoration = 'manual';
}
window.scrollTo(0, 0);

const headerPromise = fetch('components/header.html')
    .then(res => res.text())
    .then(data => {
    document.getElementById('header-placeholder').innerHTML = data;

    const currentPage = window.location.pathname.split("/").pop();

    let pageKey = "pageHome";
    if(currentPage.includes('projekte')) pageKey = 'pageProjects';
    else if(currentPage.includes('ueber-mich')) pageKey = 'pageAbout';
    else if(currentPage.includes('kontakt')) pageKey = 'pageContact';
    
    const element = document.getElementById('current-page');
    if(element) {
        element.setAttribute('data-i18n-page', pageKey);
        const lang = getCurrentLanguage();
        element.textContent = getTranslation(pageKey, lang);
    }

    //Nav-Link Highlight
    const navLinks = document.querySelectorAll(".navbar a");
    navLinks.forEach(link =>{
        const linkPage = link.getAttribute('href');
        if(linkPage === currentPage || (currentPage === '' && linkPage === 'index.html')){
            link.classList.add('active');
        }

    });

    updateNavbarTranslations(getCurrentLanguage());

    const currentLang = getCurrentLanguage();
    document.querySelectorAll('.lang-btn').forEach(btn => {
        btn.classList.remove('active');
        if(btn.textContent.toLowerCase() === currentLang){
            btn.classList.add('active');
        }
    });

});

const footerPromise = fetch('components/footer.html')
    .then(res => res.text())
    .then(data => {
    document.getElementById('footer-placeholder').innerHTML = data;
});

const backToTopPromise = fetch('components/backToTopButton.html')
    .then(res => res.text())
    .then(data =>{
        document.getElementById('back-to-top-placeholder').innerHTML = data;
    });

Promise.all([headerPromise, footerPromise, backToTopPromise]).then(() => {
    setLanguage(getCurrentLanguage());
    requestAnimationFrame(() => {
        updateConnectors();
        requestAnimationFrame(() => {
            updateConnectors();
        });
    });
    updateBackToTopButton();

    const backToTopButton = document.getElementById('back-to-top');

    if(backToTopButton) {
        backToTopButton.addEventListener('click', () => {
            window.scrollTo({
                top: 0,
                behavior: 'smooth'
            });
        });
    }
});



function updateConnectors() {
    document.querySelectorAll('.whiteDiv').forEach((whiteDiv) => {
        const svg = whiteDiv.querySelector('svg');
        if (!svg) return;

        const path = svg.querySelector('path');
        const prevColorDiv = whiteDiv.previousElementSibling;
        let nextColorDiv = whiteDiv.nextElementSibling;

        if (!prevColorDiv || !nextColorDiv) return;

        // Unterer Circle des vorherigen Divs
        const circleTop = prevColorDiv.querySelector('.circle-left-bottom, .circle-right-bottom');
        // Oberer Circle des nächsten Divs
        const circleBottom = nextColorDiv.querySelector('.circle-left-top, .circle-right-top');

        if (!circleTop || !circleBottom) return;

        const whiteDivRect = whiteDiv.getBoundingClientRect();
        const topRect = circleTop.getBoundingClientRect();
        const bottomRect = circleBottom.getBoundingClientRect();

        const x1 = topRect.left + topRect.width / 2 - whiteDivRect.left;
        const y1 = topRect.top + topRect.height / 2 - whiteDivRect.top;
        const x2 = bottomRect.left + bottomRect.width / 2 - whiteDivRect.left;
        const y2 = bottomRect.top + bottomRect.height / 2 - whiteDivRect.top;

        svg.setAttribute('width', whiteDivRect.width);
        svg.setAttribute('height', whiteDivRect.height);
        svg.style.position = 'absolute';
        svg.style.top = '0';
        svg.style.left = '0';
        svg.style.overflow = 'visible';

        path.setAttribute('d', `M ${x1} ${y1} C ${x1} ${(y1 + y2) / 2}, ${x2} ${(y1 + y2) / 2}, ${x2} ${y2}`);
    });
}

function updateBackToTopButton(){
    const btn = document.getElementById('back-to-top');
    if(btn) {
        const scrollY = window.scrollY || document.documentElement.scrollTop || document.body.scrollTop;
        if(scrollY > 400) {
            btn.classList.add('visible');
        } else {
            btn.classList.remove('visible');
        }
    }
}

window.addEventListener('resize', updateConnectors);
window.addEventListener('load', () => {
    requestAnimationFrame(() => {
        updateConnectors();
        requestAnimationFrame(updateConnectors);
    });
});
window.addEventListener('scroll', updateBackToTopButton);

document.addEventListener('DOMContentLoaded', () => {
    // Warte bis DOM komplett geladen ist
    setTimeout(() => {
        updateConnectors();
    }, 100);
});