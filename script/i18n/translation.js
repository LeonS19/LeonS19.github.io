const translations = {
    de: {
        projectOverview: "Projektübersicht",
        footertext: "Für Kontaktanfragen nutzen Sie bitte die im Lebenslauf angegebenen Kontaktdaten.",
        pageHome: "Home",
        pageProjects: "Projekte",
        pageAbout: "Über Mich",
        pageContact: "Kontakt",
        
        milefizHeader: "MI'lefiz Meeplemania",
        milefizSemesterInfo: "5. Semester – Softwaretechnik-Projekt",
        milefizInfo: "Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet. Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet. Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet.",
        
        doenerHeader: "Dönerverleih",
        doenerSemesterInfo: "4. Semester – Webbasierte Anwendung",
        doenerInfo: "Lorem Ipsum",

        melodyEscapeHeader: "MelodyEscape",
        melodyEscapeSemesterInfo: "3. Semester – Entwicklung Interaktiver Anwendungen",
        melodyEscapeInfo: "",

        lernwolkeHeader: "Lernwolke",
        lernwolkeSemesterInfo: "5. Semester – Mensch-Computer-Interaktion",
        lernwolkeInfo: "",

        HKHeader: "Hollow Knight Animation",
        HKSemesterInfo: "4. Semester – Motion Design",
        HKInfo: "",

        basicallHeader: "Basicall",
        basicallSemesterInfo: "2. Semester – Interaction Design",
        basicallInfo: "1. Im Vollbild anschauen 2. beim hover über produkt kann nicht gescrollt werden also sicher stellen, dass man beim scrollen nicht über ein image hovert 3. kleine Verlinkung auf Smartphone view",

        mp3PlayerHeader: "MP3 Player",
        mp3PlayerSemesterInfo: "3. Semester – Entwicklung Interaktiver Anwendung",
        mp3PlayerInfo: "",

        bookletHeader: "Booklet",
        bookletSemesterInfo: "1. Semester – Grundlagen Mediendesign",
        bookletInfo: "",

        aekiHeader: "Schöner Wohnen – Raumplaner",
        aekiSemesterInfo: "4. Semester – Softwaretechnik",
        aekiInfo:"",
        
        calumetHeader: "Calumet Shop Seite",
        calumetSemesterInfo: "2. Semester – Interaction Design",
        calumetInfo: "1. Im Vollbild anschauen 2. beim hover über produkt kann nicht gescrollt werden also sicher stellen, dass man beim scrollen nicht über ein image hovert 3. kleine Verlinkung auf Smartphone view",
    },
    en: {
        projectOverview: "Project Overview",
        footertext: "For contact inquiries, please use the contact details provided in the resume.",
        pageHome: "Home",
        pageProjects: "Projects",
        pageAbout: "About",
        pageContact: "Contact",
        
        milefizHeader: "MI'lefiz Meeplemania",
        milefizSemesterInfo: "5th Semester – Software Engineering Project",
        milefizInfo: "Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet. Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet. Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet.",
        
        doenerHeader: "Kebab Rental",
        doenerSemesterInfo: "4th Semester – Web-Based Application",
        doenerInfo: "Lorem Ipsum",

        melodyEscapeHeader: "MelodyEscape",
        melodyEscapeSemesterInfo: "3rd Semester – Interactive Application Development",
        melodyEscapeInfo: "",

        lernwolkeHeader: "Lernwolke",
        lernwolkeSemesterInfo: "5th Semester – Human-Computer-Interaction",
        lernwolkeInfo: "",

        HKHeader: "Hollow Knight Animation",
        HKSemesterInfo: "4th Semester – Motion Design",
        HKInfo: "",

        basicallHeader: "Basicall",
        basicallSemesterInfo: "2nd Semester – Interaction Design",
        basicallInfo: "1. Im Vollbild anschauen 2. beim hover über produkt kann nicht gescrollt werden also sicher stellen, dass man beim scrollen nicht über ein image hovert 3. kleine Verlinkung auf Smartphone view",

        mp3PlayerHeader: "MP3 Player",
        mp3PlayerSemesterInfo: "3rd Semester – Interactive Application Development",
        mp3PlayerInfo: "",

        bookletHeader: "Booklet",
        bookletSemesterInfo: "1st Semester – Media Design Fundamentals",
        bookletInfo: "",

        aekiHeader: "Schöner Wohnen – Room Planner",
        aekiSemesterInfo: "4th Semester – Software Engineering",
        aekiInfo:"",
        
        calumetHeader: "Calumet Shop Website",
        calumetSemesterInfo: "2nd Semester – Interaction Design",
        calumetInfo: "1. Im Vollbild anschauen 2. beim hover über produkt kann nicht gescrollt werden also sicher stellen, dass man beim scrollen nicht über ein image hovert 3. kleine Verlinkung auf Smartphone view",


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

