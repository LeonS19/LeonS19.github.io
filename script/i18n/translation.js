const translations = {
    de: {
        projectOverview: "Projektübersicht",
        footertext: "Für Kontaktanfragen nutzen Sie bitte die im Lebenslauf angegebenen Kontaktdaten.",
        pageHome: "Home",
        pageProjects: "Projekte",
        pageAbout: "Über Mich",
        pageContact: "Kontakt",
        milefizInfo: "Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet. Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet. Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet.",
        doenerHeader: "Dönerverleih",
        doenerInfo: "Lorem Ipsum",

        aekiHeader: "Aeki Raumplaner",
        aekiInfo:"",
        calumetHeader: "Calumet Shop Seite",
        calumetInfo: "",
    },
    en: {
        projectOverview: "Project Overview",
        footertext: "For contact inquiries, please use the contact details provided in the resume.",
        pageHome: "Home",
        pageProjects: "Projects",
        pageAbout: "About",
        pageContact: "Contact",
        milefizInfo: "Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet. Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet. Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet.",
        doenerHeader: "Kebab Rental",
        doenerInfo: "Lorem Ipsum",

        aekiHeader:"Aeki spacial Planner",
        aekiInfo:"",
        calumetHeader: "Calumet Shop Site",
        calumetInfo: "",

    }
};

function getCurrentLanguage() {
    return localStorage.getItem('preferredLanguage') || 'de';
}

function getTranslation(key, lang = 'de') {
    return translations[lang]?.[key];
}

function setLanguage(lang){
    localStorage.setItem('preferredLanguage', lang);
    document.querySelectorAll('[data-i18n]').forEach(element => {
        const key = element.getAttribute('data-i18n');
        element.textContent = getTranslation(key,lang);
    });

    const pageNameElement = document.querySelector('[data-i18n-page]');
    if(pageNameElement){
        const pageKey = pageNameElement.getAttribute('data-i18n-page');
        pageNameElement.textContent = getTranslation(pageKey, lang);
    }

    updateNavbarTranslations(lang);

    //Active State für Language Buttons
    document.querySelectorAll('.lang-btn').forEach(btn =>{
        btn.classList.remove('active');
        if(btn.textContent.toLowerCase() === lang){
            btn.classList.add('active');
        }
    })
}


function updateNavbarTranslations(lang){
    const navLinks = document.querySelectorAll('.navbar a');
    navLinks.forEach(link => {
        const href = link.getAttribute('href');
        if(href.includes('index')){
            link.textContent = getTranslation('pageHome', lang)
        }
        else if(href.includes('projekte')){
            link.textContent = getTranslation('pageProjects', lang)
        }
        else if(href.includes('ueber-mich')){
            link.textContent = getTranslation('pageAbout', lang)
        }
        else if(href.includes('kontakt')){
            link.textContent = getTranslation('pageContact', lang)
        }
    })
}

document.addEventListener('DOMContentLoaded', () => {
    const savedLang = localStorage.getItem('preferredLanguage') || 'de';
    setLanguage(savedLang);
})

