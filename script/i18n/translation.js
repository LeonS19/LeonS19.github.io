const translations = {
    de: {
        projectOverview: `Projektübersicht`,
        footertext: `Für Kontaktanfragen nutzen Sie bitte die im Lebenslauf angegebenen Kontaktdaten.`,
        pageHome: `Home`,
        pageProjects: `Projekte`,

        heroTitle: `Hi, ich bin Leon`,
        heroSubtitle: `Medieninformatik Student im 5. Semester`,
        heroDescription: `Auf dieser Seite möchte ich eine Auswahl von Projekten aus meinem Studium vorstellen. Von Webentwicklung über UI/UX Design bis hin zu Motion Design.`,
        
        aboutMe: `Über Mich`,
        aboutText: `Ich studiere Medieninformatik an der Hochschule RheinMain in Wiesbaden und habe in meinem Studium bereits vielfältige Einblicke in technische und kreative Bereiche erhalten. \n\n\
        Die ersten drei Semester meines Studiums habe ich dual absolviert und dabei agile Methoden, sowie die Zusammenarbeit in größeren Teams kennengelernt.\
        Diese Kombination aus akademischem Wissen und praktischer Arbeit hilft mir, Herausforderungen strukturiert anzugehen und mich kontinuierlich weiterzuentwickeln.`,
            
        featuredProjects: `Ausgewählte Projekte`,
        learnMore: `Mehr erfahren →`,
        viewAllProjects: `Alle Projekte ansehen`,
        milefizShortDesc: `Ein interaktives Multiplayer Spiel in Anlehnung an das Brettspiel Malefiz.`,
        lernwolkeShortDesc: `Das interaktive Lern- und Pausensystem.`,
        hkShortDesc: `Atmosphärische Animation im Stil des Indie-Spiels Hollow Knight`,

        mobileVersionLink: `Zur mobilen Version →`,

        milefizHeader: `MI'lefiz Meeplemania`,
        milefizSemesterInfo: `5. Semester – Softwaretechnik-Projekt`,
        milefizInfo: `Bei MI'lefiz handelt es sich, um ein Multiplayer first-person echtzeit Browserspiel.\n\n\
        Die Besonderheit des Softwaretechnik-Projekt Moduls war es, dass man zum Ersten Mal in einer großen Gruppe von bis zu 10 Leuten gearbeitet hat.\
        Der Fokus des Moduls war es Scrum als agile Arbeitsmethode uns Studenten vorzustzellen, um einen Einblick zu bekommen, wie die meisten Unternehmen im echten Leben arbeiten und funktionieren.\n\n\
        Insgesamt gab es 5 Sprints über das Semester verteilt. In denen mehr oder weniger tägliche Dailies stattfanden. Sprintplannings vor jedem beginn eines neuen Sprints, Retrospektiven und Reviews am ende des Sprints.\
        Unser Professor in dem Modul Prof. Dr. Weitz fungierte dabei zusätzlich als Stakeholder des Projektes, der essentielle Anforderung definiert hatte.\n\n\
        Darunter gehörten:\n\
        1. Jeder Spieler besitzt 5 Spielfiguren\n\
        2. Ein integrierter Map-Editor\n\
        3. Import- und Export funktionen, um erstellte Maps laden bzw. im Editor bearbeiten zu können\n\
        4. Innerhalb des Spiels soll man strategisch Barrieren umplatzieren können\n\
        5. 2 Spieler können ein Minispiele auslösen\n\ `,
        
        doenerHeader: `Dönerverleih`,
        doenerSemesterInfo: `4. Semester – Webbasierte Anwendung`,
        doenerInfo: `Beim Dönerverleih handelt es sich, um ein Semesterprojekt in welchem wir erstmals in Berührung mit Spring Boot, Thymeleaf und Vue.js kamen.\n\n\
        Ziel der Veranstaltung war es ein Webbasiertes System zu bauen, mit welchem Benutzer  ihre Döner bearbeiten, ausleihen und wieder an den ursprünglichen Besitzer zurückgeben konnten.\
        Neben normalen Benutzern, gab es auch eine Admin Rolle, welche die Benutzer und Döner verwalten konnte.\n\n\
        Das Backend wurde mit Spring Boot und Thymeleaf, zur HTML generierung, entwickelt und das Frontend via Vue.js\
        Die Kommunikation zwischen Front- und Backend findet über REST-APIs statt. Für Build- und Projektmanagement wurde Gradle verwendet.`,

        melodyEscapeHeader: `MelodyEscape`,
        melodyEscapeSemesterInfo: `3. Semester – Entwicklung Interaktiver Anwendungen`,
        melodyEscapeInfo: `Entwicklung Interaktiver Anwendungen war das erste Mal im Studium, dass wir ein Programm mit GUI entwickelt haben. Das Projekt MelodyEscape wurde in einer Gruppe von drei Personen umgesetzt.\n\n\
        Ziel der Veranstaltung war es, die Entwicklung einer interaktiven JavaFX-Anwendung nach dem MVC-Prinzip praxisnah zu erlernen. Neben der technischen Umsetzung standen dabei auch die Planung,\
        das Design der Benutzeroberfläche sowie die strukturierte Zusammenarbeit im Team im Fokus. So konnten wir den gesamten Entwicklungsprozess – von der ersten Idee bis zur fertigen Anwendung – eigenständig\
        gestalten.\n\n\
        Es stand uns frei, welches Programm wir für die Endabgabe entwickeln wollten.\n\
        Unsere Gruppe entschied sich für ein point-and-Click-Escape-Room-Spiel, das von der Spielereihe \'Cube Escape\' inspiriert wurde.`,

        lernwolkeHeader: `Lernwolke`,
        lernwolkeSemesterInfo: `5. Semester – Mensch-Computer-Interaktion`,
        lernwolkeInfo: `Die Umsetzung des Mench-Computer-Interaktions (MCI) Projekts sollte als Non-WIMP Prototyp geschehen. Dabei sind wir im laufe der Semesterwochen mehrere Iterationsschritte durchgangen,\
        um am Ende eine gute Idee, mit einer relevanten Problemlösung zu haben. Zu erst haben wir uns in einer Gruppe von 4 Personen zusammengefunden und erstmal eine sogenannte \'Wie könnten wir...\'-Frage definiert. Also eine Frage, die ein Problem darstellt, welches gelöst werden soll.\n\n\
        Unserer Fragestellung klang in etwa so:\n\
        "Wie können wir mit frustrierenden Momenten beim Erwerb neuer Fähigkeiten so umgehen, dass negative Auswirkungen minimiert und die Produktivität maximiert werden?"\n\n\
        Nach einigen Wochen kamen wir dann zur Idee der Lernwolke als ein Spatial-User-Interface, das die Prinzipen der Pomodoro-Technik (25 Minuten konzentriertes Lernen, gefolgt von 5–10 Minuten Pause) aufgreift.
        `,

        hkHeader: `Hollow Knight Animation`,
        hkSemesterInfo: `4. Semester – Motion Design`,
        hkInfo: `Im Rahmen des Moduls Motion Design haben wir erstmals mit Adobe After Effects gearbeitet. Das Projekt wurde in einer Gruppe von drei Personen umgesetzt.\
        Die zentrale Aufgabe bestand darin, ein 1:30 bis 2:00 Minuten langes Video zu konzipieren und zu produzieren.\n\n\
        Sowohl der visuelle Stil als auch die inhaltliche Ausgestaltung waren vollkommen frei wählbar,\
        wodurch wir uns Kreativität ausleben lassen konnten.\
        Diese Freiheit führte auch dazu, dass jede Gruppe ein völlig individuelles Endergebnis erzielte.\n\n\
        Unsere Gruppe entschied sich für eine Animation rund um das Indie-Spiel Hollow Knight, wobei wir die vielfältigen Werkzeuge und Effekte von After Effects gezielt einsetzten, um die besondere Atmosphäre und Stimmung des Spiels einzufangen.
        `,

        basicallHeader: `basicall`,
        basicallTooltip: `Infos zum Prototypen:\n\n\
        1. Am besten im Vollbild anschauen.\n\n\
        2. Interesse an einer mobile Variante?\n\
        Unterhalb des Prototypens ist eine Verlinkung`,
        basicallSemesterInfo: `2. Semester – Interaction Design`,
        basicallInfo: `1. Im Vollbild anschauen 2. beim hover über produkt kann nicht gescrollt werden also sicher stellen, dass man beim scrollen nicht über ein image hovert 3. kleine Verlinkung auf Smartphone view`,

        mp3PlayerHeader: `MP3 Player`,
        mp3PlayerSemesterInfo: `3. Semester – Entwicklung Interaktiver Anwendung`,
        mp3PlayerInfo: ``,

        bookletHeader: `Booklet`,
        bookletSemesterInfo: `1. Semester – Grundlagen Mediendesign`,
        bookletInfo: ``,

        aekiHeader: `Schöner Wohnen – Raumplaner`,
        aekiSemesterInfo: `4. Semester – Softwaretechnik`,
        aekiInfo:``,
        
        calumetHeader: `Calumet Shop Seite`,
        calumetTooltip: `Infos zum Prototypen:\n\n\
        1. Am besten im Vollbild anschauen.\n\n\
        2. Beim hover über produkt kann nicht gescrollt werden also sicher stellen, dass man beim scrollen nicht über ein image hovert (Figma Limitation)\n\n\
        3. Interesse an einer mobile Variante?\n\
        Unterhalb des Prototypens ist eine Verlinkung`,
        calumetSemesterInfo: `2. Semester – Interaction Design`,
        calumetInfo: `1. Im Vollbild anschauen 2. beim hover über produkt kann nicht gescrollt werden also sicher stellen, dass man beim scrollen nicht über ein image hovert 3. kleine Verlinkung auf Smartphone view`,
        
    
    },
    en: {
        projectOverview: `Project Overview`,
        footertext: `For contact inquiries, please use the contact details provided in the resume.`,
        pageHome: `Home`,
        pageProjects: `Projects`,

        heroTitle: `Hi, I'm Leon`,
        heroSubtitle: `Media Informatics Student in 5th Semester`,
        heroDescription: `On this page, I would like to present a selection of projects from my studies. From web development to UI/UX design to motion design.`,
        
        aboutMe: `About Me`,
        aboutText: `I am studying media informatics at RheinMain University of Applied Sciences in Wiesbaden and have already gained a wide range of insights into technical and creative areas during my studies. \n\n\
        I completed the first three semesters of my studies as part of a dual program, where I learned about agile methods and working in larger teams.\
        This combination of academic knowledge and practical work helps me to approach challenges in a structured way and to continuously develop myself further.`,
    
        featuredProjects: `Featured Projects`,
        learnMore: `Learn More →`,
        viewAllProjects: `View All Projects`,
        milefizShortDesc: `An interactive multiplayer game inspired by the board game Malefiz.`,
        lernwolkeShortDesc: `The interactive learning and break system.`,
        hkShortDesc: `Atmospheric animation in the style of the indie game Hollow Knight`,

        mobileVersionLink: `To mobile version →`,

        milefizHeader: `MI'lefiz Meeplemania`,
        milefizSemesterInfo: `5th Semester – Software Engineering Project`,
        milefizInfo: `MI'lefiz is a multiplayer first-person real-time browser game.\n\n\
        The special aspect of the software-engineering-project module was that, for the first time, we worked in a large group of up to 10 people.\
        The focus of the module was to introduce us students to Scrum as an agile working method, giving us insight into how most companies operate in real life.\n\n\
        There were a total of 5 sprints throughout the semester, with more or less daily stand-ups, sprint plannings before each new sprint, retrospectives, and reviews at the end of each sprint.\
        Our professor, Prof. Dr. Weitz, also acted as the stakeholder for the project, defining essential requirements.\n\n\
        These included:\n\
        1. Each player has 5 game pieces\n\
        2. An integrated map editor\n\
        3. Import and export functions to load or edit created maps in the editor\n\
        4. The ability to strategically reposition barriers within the game\n\
        5. Two players can trigger a mini-game\n\
        `,
        
        doenerHeader: `Kebab Rental`,
        doenerSemesterInfo: `4th Semester – Web-Based Application`,
        doenerInfo: `Kebab Rental was a semester project in which we first came into contact with Spring Boot, Thymeleaf, and Vue.js.\n\n\
        The goal of the course was to build a web-based system that allowed users to manage, borrow, and return their kebabs to the original owner.\
        In addition to regular users, there was also an admin role that could manage both users and kebabs.\n\n\
        The backend was developed with Spring Boot and Thymeleaf for HTML generation, and the frontend with Vue.js.\
        Communication between front- and backend took place via REST APIs. Gradle was used for build and project management.`,

        melodyEscapeHeader: `MelodyEscape`,
        melodyEscapeSemesterInfo: `3rd Semester – Interactive Application Development`,
        melodyEscapeInfo: `Interactive Application Development was the first time during our studies that we developed a program with a GUI. The MelodyEscape project was implemented in a group of three people.\n\n\
        The goal of the course was to learn how to develop an interactive JavaFX application based on the MVC principle in a practical way. In addition to the technical implementation, the focus was also on planning,\
        user interface design, and structured teamwork. This allowed us to independently design the entire development process—from the initial idea to the finished application.\n\n\
        We were free to choose which program we wanted to develop for the final submission.
        Our group decided on a point-and-click escape room game inspired by the \'Cube Escape\' game series.`,

        lernwolkeHeader: `Lernwolke`,
        lernwolkeSemesterInfo: `5th Semester – Human-Computer-Interaction`,
        lernwolkeInfo: `The implementation of the Human-Computer Interaction (HCI) project was to be done as a non-WIMP prototype. Over the course of the semester,\
        we went through several iterations to ultimately develop a good idea with a relevant solution. First, we formed a group of four people and started by defining a so-called \'How might we...\'\
        question – which is, a question that describes a problem to be solved.\n\n\
        Our question was something like:\n\
        "How might we deal with frustrating moments when acquiring new skills in a way that minimizes negative effects and maximizes productivity?"\n\n\
        After a few weeks, we came up with the idea of the Lernwolke as a spatial user interface that incorporates the principles of the Pomodoro technique\
        (25 minutes of focused learning followed by a 5–10 minute break).`,

        hkHeader: `Hollow Knight Animation`,
        hkSemesterInfo: `4th Semester – Motion Design`,
        hkInfo: `As part of the Motion Design module, we worked with Adobe After Effects for the first time. The project was carried out in a group of three people.\
        The main task was to conceptualize and produce a video lasting between 1:30 and 2:00 minutes.\n\n\
        Both the visual style and the content design were completely up to us, allowing us to fully express our creativity. This freedom also meant that each group achieved a completely individual result.\n\n\
        Our group decided on an animation centered around the indie game Hollow Knight, making targeted use of the diverse tools and effects in After Effects to capture the unique atmosphere and mood of the game.
        `,

        basicallHeader: `basicall`,
        basicallTooltip: `Info about the prototype:\n\n\
        1. Best viewed in fullscreen.\n\n\
        2. Interested in a mobile version?\n\
        There is a link below the prototype.`,
        basicallSemesterInfo: `2nd Semester – Interaction Design`,
        basicallInfo: `1. Im Vollbild anschauen 2. beim hover über produkt kann nicht gescrollt werden also sicher stellen, dass man beim scrollen nicht über ein image hovert 3. kleine Verlinkung auf Smartphone view`,

        mp3PlayerHeader: `MP3 Player`,
        mp3PlayerSemesterInfo: `3rd Semester – Interactive Application Development`,
        mp3PlayerInfo: ``,

        bookletHeader: `Booklet`,
        bookletSemesterInfo: `1st Semester – Media Design Fundamentals`,
        bookletInfo: ``,

        aekiHeader: `Schöner Wohnen – Room Planner`,
        aekiSemesterInfo: `4th Semester – Software Engineering`,
        aekiInfo:``,
        
        calumetHeader: `Calumet Shop Site`,
        calumetTooltip: `Info about the prototype:\n\n\
        1. Best viewed in fullscreen.\n\n\
        2. When hovering over a product, scrolling is disabled—so make sure not to hover over an image while scrolling (Figma limitation)\n\n\
        3. Interested in a mobile version?\n\
        There is a link below the prototype.`,
        calumetSemesterInfo: `2nd Semester – Interaction Design`,
        calumetInfo: `1. Im Vollbild anschauen 2. beim hover über produkt kann nicht gescrollt werden also sicher stellen, dass man beim scrollen nicht über ein image hovert 3. kleine Verlinkung auf Smartphone view`,

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
        else if(href.includes('projects')){
            link.textContent = getTranslation('pageProjects', lang)
        }
    })
}

document.addEventListener('DOMContentLoaded', () => {
    const savedLang = localStorage.getItem('preferredLanguage') || 'de';
    setLanguage(savedLang);
})

