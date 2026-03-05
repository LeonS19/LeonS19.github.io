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
        Insgesamt gab es 5 Sprints über das Semester verteilt, in denen mehr oder weniger tägliche Dailies stattfanden. Sprintplannings vor jedem Beginn eines neuen Sprints, Retrospektiven und Reviews am ende des Sprints.\
        Unser Professor in dem Modul, Prof. Dr. Weitz, fungierte dabei zusätzlich als Stakeholder des Projektes, der essentielle Anforderung definiert hatte.\n\n\
        Darunter gehörten:\n\
        1. Jeder Spieler besitzt 5 Spielfiguren\n\
        2. Ein integrierter Map-Editor\n\
        3. Import- und Export funktionen, um erstellte Maps laden bzw. im Editor bearbeiten zu können\n\
        4. Innerhalb des Spiels soll man strategisch Barrieren umplatzieren können\n\
        5. 2 Spieler können ein Minispiele auslösen\n\ `,
        milefizModalText:`<h3 class="modal-section-title">Technische Umsetzung</h3>\
        Für die Entwicklung kam folgender Tech-Stack zum Einsatz: Das Backend wurde mit Spring Boot entwickelt, während Vue.js für das Frontend und Three.js speziell für das 3D-Rendering im Browser verwendet wurde.\n\n\
        Als Projektmanagement-Tools nutzten wir Taiga für die Scrum-Organisation und Git für die Versionsverwaltung. Zur Qualitätssicherung integrierten wir Jenkins für CI/CD, SonarQube für Code-Qualitätsanalysen und PlantUML zur Diagrammerstellung.\n\n\
        Zu meinen Aufgaben im Projekt gehörten unter anderem:\n\
        • Die backendseitige Implementierung der Würfellogik und deren Integration mit dem Frontend\n\
        • Die vollständige Entwicklung des Einarmige-Bandit Minispiels (Backend und Frontend), aufbauend auf der bereits existierenden Minispiellogik\n\
        • Die Implementierung des Frontend-seitigen Errorhandlers zur Verbesserung der Fehlerbehandlung\n\n\
        <h3 class="modal-section-title">Herausforderungen</h3>\
        Besonders herausfordernd war die Implementierung der Echtzeit-Multiplayer-Synchronisation zwischen mehreren Spielern sowie meine erste praktische Arbeit mit Three.js für 3D-Rendering im Browser.\n\n\
        Die Koordination in einem 10-Personen-Team stellte ebenfalls neue Anforderungen an Kommunikation und Abstimmung.
        <h3 class="modal-section-title">Persönliche Learnings</h3>\
        Durch meine Erfahrung aus dem dualen Studium fiel mir der Einstieg in Scrum deutlich leichter als anderen Kommilitonen.\
        Die Arbeit in einem 10-köpfigen Team erforderte intensive Koordination und regelmäßigen Austausch, was meine Fähigkeit zur Zusammenarbeit in größeren Projekten deutlich gestärkt hat.\n\n\
        Besonders wertvoll waren die praktischen Erfahrungen mit der CI/CD-Pipeline über Jenkins und der kontinuierlichen Qualitätssicherung durch SonarQube.`,
                
        doenerHeader: `Dönerverleih`,
        doenerSemesterInfo: `4. Semester – Webbasierte Anwendung`,
        doenerInfo: `Beim Dönerverleih handelt es sich um ein Semesterprojekt, in welchem wir erstmals in Berührung mit Spring Boot, Thymeleaf und Vue.js kamen.\n\n\
        Ziel der Veranstaltung war es, ein webbasiertes System zu entwickeln, mit dem Benutzer ihre Döner bearbeiten, verleihen und wieder an den ursprünglichen Besitzer zurückgeben können.\
        Neben normalen Benutzern gab es auch eine Admin-Rolle zur Verwaltung von Benutzern und Dönern.\n\n\
        Das Backend wurde mit Spring Boot und Thymeleaf zur HTML-Generierung entwickelt, während das Frontend mit Vue.js realisiert wurde.\
        Die Kommunikation zwischen Front- und Backend erfolgte über REST-APIs. Als Datenbank kam eine H2-JDBC-Datenbank zum Einsatz, um Benutzerdaten, Döner-Informationen und deren Zutaten persistent zu speichern.\
        Für Build- und Projektmanagement wurde Gradle verwendet, Git diente zur Versionsverwaltung.`,
        doenerModalText:`<h3 class="modal-section-title">Projektumsetzung</h3>\
        Die Backend-Infrastruktur wurde mit Spring Boot realisiert und umfasste die komplette Verwaltungslogik für den Verleihprozess, einschließlich aller notwendigen API-Endpoints zur Datenverarbeitung.\n\n\
        Über eine REST-Schnittstelle konnten beide Systemteile miteinander kommunizieren. Frontend-Anfragen wurden strukturiert an das Backend weitergeleitet und entsprechend verarbeitet.\n\n\
        Auf der Client-Seite entstand mit Vue.js eine Benutzeroberfläche, die alle Verwaltungsfunktionen zugänglich macht. Eine Authentifizierungsschicht mit vordefinierten Zugangsdaten sicherte den Zugriff ab.\n\n\
        Die Datenmodellierung umfasste zentrale Strukturen wie Döner, deren Zutaten und Bestandsverwaltung oder Benutzer. Die Ausleihlogik ermöglicht den vollständigen Kreislauf – vom Ausleihen eines Döners bis zur Rückgabe an den rechtmäßigen Besitzer.\n\n\
        Gradle übernahm als Build-Tool die Projektkonfiguration und automatisierte den Serverstart. Die Verknüpfung beider Systemebenen erfolgte über klar definierte API-Routen und strukturierte Datenabrufe.\
        <h3 class="modal-section-title">Persönliche Learnings</h3>\
        Das Projekt ermöglichte mir erste Einblicke in die Full-Stack-Entwicklung mit Vue.js, Thymeleaf und Spring Boot.\
        Durch die praktische Arbeit an beiden Systemseiten konnte ich nachvollziehen, wie Frontend und Backend zusammenspielen.\n\n\
        Die Implementierung der REST-APIs half mir zu verstehen, wie Daten zwischen den verschiedenen Schichten einer Anwendung fließen.\n\
        Bei der Modellierung der Entitäten, von Dönern über Zutaten bis zu Beständen, lernte ich, Datenbeziehungen sinnvoll zu strukturieren.\n\n\
        Die Umsetzung der Login- und Benutzerverwaltungsfunktionen gab mir einen ersten Einblick in Authentifizierungsmechanismen.`,

        melodyEscapeHeader: `MelodyEscape`,
        melodyEscapeSemesterInfo: `3. Semester – Entwicklung Interaktiver Anwendungen`,
        melodyEscapeInfo: `In dem Modul Entwicklung Interaktiver Anwendungen (EIA) war das erste Mal im Studium, dass wir ein Programm mit GUI entwickelt haben. Das Projekt MelodyEscape wurde in einer Gruppe von drei Personen umgesetzt.\n\n\
        Ziel der Veranstaltung war es, die Entwicklung einer interaktiven JavaFX-Anwendung nach dem MVC-Prinzip praxisnah zu erlernen. Neben der technischen Umsetzung standen dabei auch die Planung,\
        das Design der Benutzeroberfläche sowie die strukturierte Zusammenarbeit im Team im Fokus. So konnten wir den gesamten Entwicklungsprozess – von der ersten Idee bis zur fertigen Anwendung – eigenständig\
        gestalten.\n\n\
        Es stand uns frei, welches Programm wir für die Endabgabe entwickeln wollten.\n\
        Unsere Gruppe entschied sich für ein point-and-Click-Escape-Room-Spiel, das von der Spielereihe \'Cube Escape\' inspiriert wurde.`,
        melodyEscapeModalText:`<h3 class="modal-section-title">Projektumsetzung</h3>\
        Die Entwicklung erfolgte vollständig mit JavaFX, wobei die Implementierung der verschiedenen Spielszenen und deren Übergänge im Vordergrund stand.\n\n\
        Das MVC-Muster bildete das strukturelle Grundgerüst. Die klare Aufteilung in Model, View und Controller half dabei, den Code übersichtlich und wartbar zu halten.\n\n\
        Meine Hauptaufgabe bestand in der Entwicklung des Handy-Features. Dazu gehörte die Implementierung der Interaktion, vom Klick auf das Icon, im Inventar, bis zum Erscheinen des Handys.\
        Das Mapping der einzelnen Tasten ermöglicht es, unterschiedliche Sounds abzuspielen. Spieler können Tastenfolgen eingeben, die nach der Bestätigung als Melodie abgespielt werden.\
        Bestimmte Tastenkombinationen lösen zudem spezielle Fähigkeiten aus.\n\n\
        Für die audiovisuelle Gestaltung suchte ich passende Sounds und Assets aus und bearbeitete diese in Premiere Pro, um sie präzise auf die Spielmechanik abzustimmen.
        <h3 class="modal-section-title">Persönliche Learnings</h3>\
        Das Projekt erweiterte meine JavaFX-Kenntnisse deutlich – besonders im Bereich interaktiver UI-Elemente.\n\n\
        Die Arbeit mit dem MVC-Muster vermittelte mir ein tieferes Verständnis für strukturierte Softwarearchitektur.\
        Die Implementierung der Event-Logik für das Handy-Feature schulte mein Gespür für komplexe Nutzerinteraktionen und deren technische Umsetzung.\n\n\
        Die Integration von Audio-Elementen zeigte mir, wie man funktionale und atmosphärische Komponenten miteinander verbindet.\
        Besonders wertvoll war die Erfahrung in der Teamarbeit. Von der Planung über die Aufgabenverteilung bis zur Integration aller Komponenten.`,

        lernwolkeHeader: `Lernwolke`,
        lernwolkeSemesterInfo: `5. Semester – Mensch-Computer-Interaktion`,
        lernwolkeInfo: `Die Umsetzung des Mench-Computer-Interaktions (MCI) Projekts sollte als Non-WIMP Prototyp geschehen. Das Projekt fand in einer Gruppe von 4 Personen statt. Im laufe der Semesterwochen sind wir mehrere Iterationsschritte durchgangen,\
        um am Ende eine gute Idee, mit einer relevanten Problemlösung zu haben. Zu erst wurde eine \'Wie könnten wir...\'-Frage definiert. Also eine Frage, die ein Problem darstellt, welches gelöst werden soll.\n\n\
        Diese Frage war für unser Projekt folgende:\n\
        "Wie können wir mit frustrierenden Momenten beim Erwerb neuer Fähigkeiten so umgehen, dass negative Auswirkungen minimiert und die Produktivität maximiert werden?"\n\n\
        Nach einigen Wochen entstand die Idee der Lernwolke, ein räumliches User-Interface, das die Prinzipien der Pomodoro-Technik (25 Minuten konzentriertes Lernen, gefolgt von 5–10 Minuten Pause) integriert.`,
        lernwolkeModalText:`<h3 class="modal-section-title">Projektumsetzung</h3>\
        Die technische Umsetzung erfolgte mit Unity in Kombination mit PolySpacial für die Apple Vision Pro 2.\
        Diese Kombination erwies sich als herausfordernd, da PolySpacial und das zugrunde liegende AR-Kit ausschließlich M-Chips unterstützen.\n\n\
        Das bedeutete in der Praxis, dass wir faktisch nur einen Laptop zur Verfügung hatten, auf dem der Prototyp während der Nutzung der VR-Brille flüssig lief.\
        Die Entwicklung konnte zwar parallel auf mehreren Geräten stattfinden, das Testen war jedoch auf dieses eine System beschränkt, was die Iteration deutlich verlangsamte.\n\n\
        Der finale Prototyp wurde nach der Wizard-of-Oz-Methode umgesetzt, bei der die Funktionalität im Hintergrund gesteuert wird.\
        Da der Fokus des Moduls auf dem Konzept und der Idee lag, nicht auf der vollständigen programmatischen Implementierung, war dieser Ansatz für uns am passensten.\n\n\
        Der Prototyp integriert die Pomodoro-Technik in ein räumliches Interface. Nutzer können Lernphasen starten, werden nach 25 Minuten an eine Pause erinnert und können während der Pausenzeit bewusst abschalten.\
        Die räumliche Darstellung sollte dabei helfen, Lernen und Erholung klarer voneinander zu trennen.\n\n\
        Meine Hauptaufgabe lag neben der Mitarbeit am Prototyp vor allem im Schnitt und der Synchronisation des Präsentationsvideos, das unser Konzept und die Funktionsweise veranschaulicht.
        <h3 class="modal-section-title">Persönliche Learnings</h3>\
        Das Projekt gab mir erste Einblicke in die Entwicklung räumlicher Interfaces und die Arbeit mit AR-Technologie.\n\n\
        Die technischen Einschränkungen, insbesondere die Abhängigkeit von spezifischer Hardware, zeigten mir, wie wichtig es ist, solche Faktoren frühzeitig in die Projektplanung einzubeziehen.\
        Die Arbeit mit Unity und PolySpacial erweiterte meinen technischen Horizont, auch wenn die Entwicklung teilweise mühsam war.\n\n\
        Durch den Videoschnitt konnte ich meine Fähigkeiten in der visuellen Aufbereitung und Präsentation komplexer Konzepte weiterentwickeln.\
        Besonders wertvoll war die Erfahrung, wie wichtig durchdachte User-Experience-Konzepte gerade bei neuen Interaktionsformen sind.`,

        hkHeader: `Hollow Knight Animation`,
        hkSemesterInfo: `4. Semester – Motion Design`,
        hkInfo: `Im Rahmen des Moduls Motion Design haben wir erstmals mit Adobe After Effects gearbeitet. Das Projekt wurde in einer Gruppe von drei Personen umgesetzt.\
        Die zentrale Aufgabe bestand darin, ein 1:30 bis 2:00 Minuten langes Video zu konzipieren und zu produzieren.\n\n\
        Sowohl der visuelle Stil als auch die inhaltliche Ausgestaltung waren vollkommen frei wählbar,\
        wodurch wir uns Kreativität ausleben lassen konnten.\
        Diese Freiheit führte auch dazu, dass jede Gruppe ein völlig individuelles Endergebnis erzielte.\n\n\
        Unsere Gruppe entschied sich für eine Animation rund um das Indie-Spiel 'Hollow Knight', wobei wir die vielfältigen Werkzeuge und Effekte von After Effects gezielt einsetzten, um die besondere Atmosphäre und Stimmung des Spiels einzufangen.
        `,
        hkModalText:`<h3 class="modal-section-title">Projektumsetzung</h3>\
        Zu Beginn entwickelten wir gemeinsam ein Storyboard, das die narrative Struktur und den visuellen Ablauf der Animation festlegte. \
        Im Anschluss teilten wir die einzelnen Szenen untereinander auf, sodass jedes Teammitglied eigenständig an seinen zugewiesenen Sequenzen arbeiten konnte.\n\n\
        In After Effects entstanden die individuellen Animationen, von Charakterbewegungen über Umgebungseffekte bis hin zu Kamerafahrten. \
        Die Werkzeuge und Effekte wurden dabei so eingesetzt, dass die düstere, melancholische Atmosphäre von Hollow Knight und speziell des Gebiets Greenpath spürbar wurde.\n\n\
        Meine Hauptaufgabe lag neben dem animieren im finalen Zusammenschnitt aller Animationen in Premiere Pro. Dabei fügte ich die einzelnen Szenen zu einem durchgängigen Video zusammen und arbeitete die Übergänge aus.\
        Für die Soundgestaltung recherchierte ich passende Effekte, teilweise direkt aus dem Spiel selbst, teilweise externe Sounds, die atmosphärisch zum Gesamtbild passten.
        <h3 class="modal-section-title">Persönliche Learnings</h3>\
        Das Projekt gab mir erste praktische Einblicke in Adobe After Effects und die Arbeit mit Motion Design.\n\n\
        Durch den Videoschnitt in Premiere Pro konnte ich meine Fähigkeiten in der Postproduktion weiterentwickeln, insbesondere im Timing und in der Audio-Integration.\
        Die Soundgestaltung zeigte mir, wie wichtig akustische Elemente für die Wirkung einer Animation sind.\n\n\
        Die Zusammenarbeit im Team erforderte klare Absprachen bezüglich visueller Konsistenz und technischer Formatvorgaben.\
        Besonders wertvoll war die Erfahrung, wie einzelne kreative Elemente zu einem geschlossenen Gesamtwerk zusammengeführt werden.`,

        basicallHeader: `basicall`,
        basicallTooltip: `Infos zum Prototypen:\n\n\
        1. Am besten im Vollbild anschauen.\n\n\
        2. Interesse an einer mobile Variante?\n\
        Unterhalb des Prototypens ist eine Verlinkung`,
        basicallSemesterInfo: `2. Semester – Interaction Design`,
        basicallInfo: `Die Aufgabe im Interaction Design Modul war die Entwicklung einer responsiven Website als Klickdummy-Prototyp für ein fiktives IT-StartUp.\
        Das Projekt wurde in einer Vierergruppe umgesetzt.\
        In vier Projektphasen haben wir ein Konzept erstellt, ein Corporate Design entwickelt und den Prototypen in Figma realisiert.\n\n\
        Diese Phasen bestanden aus:\n\
        1. Discover – Worum geht es?\n\
        2. Define – Nutzererlebnis planen\n\
        3. Design – Nutzererlebnis gestalten\n\
        4. Deliver – Umsetzung & produktion\n\n\
        Am Ende entstand das StartUp 'basicall', das sich auf moderne Dumbphones und spezielle Software zur Begrenzung der Handynutzung im Social-Media-Bereich spezialisiert. Ziel ist es, jungen Menschen zu helfen, ihre Social-Media-Sucht in den Griff zu bekommen.
       `,
        basicallModalText:`<h3 class="modal-section-title">Projektumsetzung</h3>\
        Die Konzeptphase begann mit einer umfassenden Recherche zu digitaler Abhängigkeit und dem Phänomen des bewussten Technik-Verzichts.\
        Wir analysierten bestehende Lösungsansätze und entwickelten daraus unsere eigene Vision für basicall.\n\n\
        Im Corporate Design definierten wir eine klare visuelle Identität – von der Farbpalette über Typografie bis hin zum Logo.\
        Die Gestaltung sollte Ruhe und Fokus vermitteln, als bewussten Gegenpol zur reizüberfluteten Social-Media-Welt.\n\n\
        Der Prototyp wurde vollständig in Figma umgesetzt und umfasst mehrere interaktive Seiten: eine Landing Page, Produktübersichten der Dumbphones, Erklärungen zur begleitenden Software sowie einen imformierenden-Bereich.\
        Durch die Verknüpfung aller Screens entstand ein durchklickbarer Prototyp, der das Nutzererlebnis authentisch erfahrbar macht.\n\n\
        Meine Schwerpunkte lagen in der visuellen Ausarbeitung einzelner Seiten sowie der Entwicklung konsistenter UI-Komponenten, die sich durch den gesamten Prototypen ziehen.
        <h3 class="modal-section-title">Persönliche Learnings</h3>\
        Das Projekt gab mir erste umfassende Einblicke in den UX/UI-Design-Prozess, beginnend mit der Nutzerforschung bis zur finalen Gestaltung.\n\n\
        Die Arbeit mit Figma half mir, strukturiertes Interface-Design und die Bedeutung wiederverwendbarer Komponenten zu verstehen.\n\n\
        Die iterative Arbeitsweise über mehrere Projektphasen zeigte mir, wie sich Konzepte durch kontinuierliches Feedback und Anpassungen weiterentwickeln.`,
                
        mp3PlayerHeader: `MP3 Player`,
        mp3PlayerSemesterInfo: `3. Semester – Entwicklung Interaktiver Anwendung`,
        mp3PlayerInfo: `Als einstiegs Projekt im EIA-Modul haben wir einen MP3 Player entwickelt, um die Grundlagen von JavaFX und die Arbeit mit grafischen Oberflächen zu erlernen.\
        Das Projekt half uns, die wichtigsten Komponenten wie Buttons, Listen und Events zu verstehen und direkt anzuwenden.\n\
        Durch die praktische Umsetzung konnten wir einen guten Einstieg in die GUI-Programmierung gewinnen. Um danach mit der Entwicklung des Hauptprojekts (MelodyEscape) anfangen zu können.`,

        bookletHeader: `Booklet`,
        bookletSemesterInfo: `1. Semester – Grundlagen Mediendesign`,
        bookletInfo: `Das Booklet aus dem ersten Semester beinhaltet eine Sammlung aller Aufgaben, die wir im Laufe des Semesters in diesem Modul umgesetzt haben.\
        Dabei lagen die Schwerpunkte auf der Vermittlung gestalterischer Grundkenntnisse, von Farbe, Typografie, bis hin zum fertigen Layout.\n\n\
        Ziel war es alle Praktikums-Aufgaben ansprechend in einem eigens gestalteten Booklet zu realisieren.\
        Dabei habe ich mich bei meinem Design an der Videospielreihe 'Dark Souls' inspierieren lassen und versucht den Look-and-Feel davon gut aufzugreifen. 
        `,
        bookletModalText:`<h3 class="modal-section-title">Projektumsetzung</h3>\
        Das Booklet entstand durch die Zusammenführung verschiedener Design-Übungen aus dem ersten Semester.\
        Wöchentlich bearbeiteten wir Arbeitsblätter zu unterschiedlichen Designthemen, von Farbstudien über typografische Experimente bis zu Layout-Aufgaben.\n\n\
        Die Herausforderung lag darin, diese heterogenen Arbeiten in einem kohärenten Gesamtwerk zu vereinen.\
        Die Dark Souls-Ästhetik bildete dabei das visuelle Leitmotiv: dunkle Farbpaletten, strukturierte Texturen und eine markante Typografie prägten das Erscheinungsbild.\n\n\
        Durch gezielte Anwendung von Gestaltungsgrundlagen wie Typografie, Layout und Komposition entstanden thematische Verbindungen zwischen den einzelnen Aufgaben.\
        Die Layout-Struktur wurde so konzipiert, dass jede Aufgabe ihren eigenen Raum erhält, während das übergeordnete Design-Konzept durchgängig erkennbar bleibt.
        <h3 class="modal-section-title">Persönliche Learnings</h3>\
        Das Projekt vermittelte mir grundlegende Designprinzipien und schulte meinen Blick für visuelle Konsistenz.\n\n\
        Die praktische Arbeit mit Typografie, Farbgestaltung und Layout half mir, mein Gespür für gestalterische Systematik zu erweitern.\
        Besonders wertvoll war die Erkenntnis, wie einzelne Elemente durch ein starkes konzeptionelles Fundament zu einem stimmigen Ganzen verbunden werden können.`,

        aekiHeader: `Schöner Wohnen – Raumplaner`,
        aekiSemesterInfo: `4. Semester – Softwaretechnik`,
        aekiInfo: `Im Softwaretechnik-Modul stand die systematische Entwicklung einer Software im Team im Vordergrund.\
        Das Projekt wurde in einer Gruppe von 4 Personen umgesetzt.\n\n\
        Ziel war es, den gesamten Softwareentwicklungsprozess zu durchlaufen – von der Anforderungserhebung über die Modellierung mit UML bis hin zur Implementierung einer nachhaltigen Software-Architektur.\
        Dabei lag der Fokus auf der Anwendung von Vorgehensmodellen, Architektur- und Entwurfsmustern sowie der Berücksichtigung nicht-funktionaler Anforderungen wie Wartbarkeit und Erweiterbarkeit.\n\n\
        Nach einführenden Übungseinheiten haben wir semesterbegleitend eine Anforderungsspezifikation erarbeitet, daraus eine passende Softwarearchitektur abgeleitet und diese als lauffähige Software implementiert.\
        Das vorgegebene Thema war ein Raumplaner unter dem Namen 'Schöner Wohnen', bei dem Stakeholder, wie Prof. Dr. Weitz oder eigens erstellte Personas, einbezogen und passende Softwarewerkzeuge zur Unterstützung des gesamten Entwicklungszyklus eingesetzt wurden.`,
        aekiModalText:`<h3 class="modal-section-title">Projektumsetzung</h3>\
        Zu Beginn haben wir eine detaillierte Anforderungsspezifikation erstellt, in der funktionale und nicht-funktionale Anforderungen definiert wurden.\
        Anschließend modellierten wir die Software-Architektur mit UML-Diagrammen, unteranderem Use-Case-Diagramme, Klassendiagramme und auch Sequenzdiagramme.\n\n\
        Die Implementierung erfolgte in Java.\
        Der Raumplaner ermöglicht es Nutzern, virtuelle Räume zu gestalten, Möbel zu platzieren und verschiedene Einrichtungsvarianten zu testen.\n\n\
        Zur Visualisierung der Architektur und Dokumentation setzten wir DrawIO, um UML-Diagramme zu erstellen.\
        Dies sicherte die Konsistenz zwischen Implementierung und Dokumentation.\n\n\
        Meine Aufgaben umfassten die Mitarbeit an der Anforderungsanalyse, die Modellierung von Klassenstrukturen sowie die Implementierung von Kernfunktionalitäten des Raumplaners.
        <h3 class="modal-section-title">Persönliche Learnings</h3>\
        Das Projekt gab mir tiefe Einblicke in den systematischen Softwareentwicklungsprozess und die Bedeutung sauberer Architektur.\n\n\
        Die Arbeit mit UML half mir, komplexe Systemzusammenhänge zu visualisieren und zu kommunizieren.\
        Besonders wertvoll war die Erkenntnis, wie wichtig die Trennung von Concerns und die Einhaltung von SOLID-Prinzipien für wartbare Software sind.`,

        calumetHeader: `Calumet Shop Seite`,
        calumetTooltip: `Infos zum Prototypen:\n\n\
        1. Am besten im Vollbild anschauen.\n\n\
        2. Beim hover über produkt kann nicht gescrollt werden also sicher stellen, dass man beim scrollen nicht über ein image hovert (Figma Limitation)\n\n\
        3. Interesse an einer mobile Variante?\n\
        Unterhalb des Prototypens ist eine Verlinkung`,
        calumetSemesterInfo: `2. Semester – Interaction Design`,
        calumetInfo: `Die Aufgabe bestand darin, eine Produkt-Verteilerseite zu gestalten, die einen Überblick über mindestens 9 Produkte bietet.\
        Dabei sollten sowohl eine Desktop-Version als auch eine Smartphone-Version entworfen werden.\n\n\
        Ich entschied mich für die Marke Calumet, einen Anbieter für Fotografie- und Videoequipment.\
        Die Seite enthält eine Hauptnavigation, eine kurze Einleitung sowie eine übersichtliche Produktpräsentation mit Bild, Name, technischen Details (bei hover über das produkt) und Preis.\n\n\
        Ähnlich wie beim MP3 Player handelte es sich hierbei um eine Zwischenabgabe im Interaction Design Modul – das finale Projekt war basicall.
        `,
        calumetModalText:`<h3 class="modal-section-title">Projektumsetzung</h3>\
        Die Gestaltung begann mit der Analyse der Markenidentität von Calumet.\
        Daraus entwickelte ich ein Layout-Konzept, das Übersichtlichkeit und schnelle Produktvergleichbarkeit in den Mittelpunkt stellt.\n\n\
        Das Grid-Layout ermöglicht eine strukturierte Präsentation der Produkte in Polaroid-Optik, wobei jedes Item konsistent aufgebaut ist: Produktbild im charakteristischen Polaroid-Format, Name, Preis und bei Hover zusätzliche technische Details.\
        Die Polaroid-Ästhetik verleiht der Seite dabei eine authentische, analoge Note.\n\n\
        Die Navigation wurde so konzipiert, dass Nutzer schnell zwischen Produktkategorien wechseln können.\
        Sowohl die Desktop- als auch die Smartphone-Version wurden in Figma als interaktive Prototypen umgesetzt.\
        Dabei lag der Fokus auf einer responsiven Gestaltung, die sich an unterschiedliche Bildschirmgrößen anpasst, ohne dass Informationen verloren gehen oder die Bedienbarkeit leidet.\n\n\
        <h3 class="modal-section-title">Persönliche Learnings</h3>\
        Das Projekt gab mir weitere praktische Erfahrungen im Entwerfen responsiver Layouts und der Arbeit mit Figma-Prototypen.\n\n\
        Die Implementierung der Hover-Interaktionen half mir zu verstehen, wie zusätzliche Informationen nutzerfreundlich eingeblendet werden können.`,
    
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
        milefizModalText:`<h3 class="modal-section-title">Technical Implementation</h3>\
        The following tech stack was used for development: The backend was built with Spring Boot, while Vue.js was used for the frontend and Three.js specifically for 3D rendering in the browser.\n\n\
        For project management tools, we used Taiga for Scrum organization and Git for version control. For quality assurance, we integrated Jenkins for CI/CD, SonarQube for code quality analysis, and PlantUML for diagram creation.\n\n\
        Among my tasks in the project were:\n\
        • The backend-side implementation of the dice logic and its integration with the frontend\n\
        • The complete development of the slot machine mini-game (backend and frontend), building upon the existing mini-game logic\n\
        • The implementation of the frontend-side error handler to improve error handling\n\n\
        <h3 class="modal-section-title">Challenges</h3>\
        Particularly challenging was implementing real-time multiplayer synchronization between multiple players, as well as my first practical work with Three.js for 3D rendering in the browser.\n\n\
        Coordinating a 10-person team also presented new requirements for communication and coordination.
        <h3 class="modal-section-title">Personal Learnings</h3>\
        Thanks to my experience from the dual study program, getting started with Scrum was much easier for me than for other fellow students.\
        Working in a 10-person team required intensive coordination and regular communication, which significantly strengthened my ability to collaborate on larger projects.\n\n\
        Particularly valuable were the practical experiences with the CI/CD pipeline via Jenkins and continuous quality assurance through SonarQube.`,
        doenerHeader: `Kebab Rental`,
        doenerSemesterInfo: `4th Semester – Web-Based Application`,
        doenerInfo: `Kebab Rental was a semester project in which we first came into contact with Spring Boot, Thymeleaf, and Vue.js.\n\n\
        The goal of the course was to build a web-based system that allowed users to manage, borrow, and return their kebabs to the original owner.\
        In addition to regular users, there was also an admin role that could manage both users and kebabs.\n\n\
        The backend was developed with Spring Boot and Thymeleaf for HTML generation, while the frontend was built with Vue.js.\
        Communication between front- and backend took place via REST APIs. An H2-JDBC database was used to persistently store user data, kebab information, and their ingredients.\
        Gradle was used for build and project management, and Git for version control.`,
        doenerModalText:`<h3 class="modal-section-title">Project Implementation</h3>\
        The backend infrastructure was built with Spring Boot and encompassed the complete management logic for the rental process, including all necessary API endpoints for data processing.\n\n\
        Both system parts could communicate with each other via a REST interface. Frontend requests were forwarded to the backend in a structured manner and processed accordingly.\n\n\
        On the client side, a user interface was created with Vue.js that makes all management functions accessible. An authentication layer with predefined credentials secured access.\n\n\
        The data modeling included central structures such as kebabs, their ingredients and inventory management, or users. The rental logic enables the complete cycle – from borrowing a kebab to returning it to the rightful owner.\n\n\
        Gradle served as the build tool for project configuration and automated server startup. The connection between both system levels was achieved through clearly defined API routes and structured data retrieval.
        <h3 class="modal-section-title">Personal Learnings</h3>\
        The project gave me first insights into full-stack development with Vue.js, Thymeleaf, and Spring Boot.\
        Through practical work on both system sides, I was able to understand how frontend and backend interact.\n\n\
        Implementing the REST APIs helped me understand how data flows between the different layers of an application.\n\
        When modeling the entities, from kebabs to ingredients to inventories, I learned to structure data relationships sensibly.\n\n\
        Implementing the login and user management functions gave me a first insight into authentication mechanisms.`,

        melodyEscapeHeader: `MelodyEscape`,
        melodyEscapeSemesterInfo: `3rd Semester – Interactive Application Development`,
        melodyEscapeInfo: `In the Interactive Applications Development module (IAD), it was the first time during our studies that we developed a program with a GUI. The MelodyEscape project was implemented in a group of three people.\n\n\
        The goal of the course was to learn how to develop an interactive JavaFX application based on the MVC principle in a practical way. In addition to the technical implementation, the focus was also on planning,\
        user interface design, and structured teamwork. This allowed us to independently design the entire development process—from the initial idea to the finished application.\n\n\
        We were free to choose which program we wanted to develop for the final submission.
        Our group decided on a point-and-click escape room game inspired by the \'Cube Escape\' game series.`,
        melodyEscapeModalText:`<h3 class="modal-section-title">Project Implementation</h3>\
        The development was done entirely with JavaFX, with the implementation of various game scenes and their transitions being the focus.\n\n\
        The MVC pattern formed the structural foundation. The clear separation into Model, View, and Controller helped keep the code clear and maintainable.\n\n\
        My main task was developing the phone feature. This included implementing the interaction, from clicking the icon in the inventory to the appearance of the phone.\
        The mapping of individual keys allows different sounds to be played. Players can enter key sequences that are played as a melody after confirmation.\
        Certain key combinations also trigger special abilities.\n\n\
        For the audiovisual design, I selected appropriate sounds and assets and edited them in Premiere Pro to precisely match the game mechanics.
        <h3 class="modal-section-title">Personal Learnings</h3>\
        The project significantly expanded my JavaFX knowledge – especially in the area of interactive UI elements.\n\n\
        Working with the MVC pattern gave me a deeper understanding of structured software architecture.\
        Implementing the event logic for the phone feature trained my sense for complex user interactions and their technical implementation.\n\n\
        The integration of audio elements showed me how to combine functional and atmospheric components.\
        Particularly valuable was the experience in teamwork. From planning to task distribution to the integration of all components.`,

        lernwolkeHeader: `Lernwolke`,
        lernwolkeSemesterInfo: `5th Semester – Human-Computer-Interaction`,
        lernwolkeInfo: `The implementation of the Human-Computer Interaction (HCI) project was to be done as a non-WIMP prototype. Over the course of the semester,\
        we went through several iterations to ultimately develop a good idea with a relevant solution. The project was realised in a group of four people. First, we started by defining a so-called \'How might we...\'\
        question – which is, a question that describes a problem to be solved.\n\n\
        For our project, this question was:\n\
        "How might we deal with frustrating moments when acquiring new skills in a way that minimizes negative effects and maximizes productivity?"\n\n\
        After a few weeks, the idea for Lernwolke emerged—a spatial user interface that incorporates the principles of the Pomodoro technique (25 minutes of focused learning followed by a 5–10 minute break).`,
        lernwolkeModalText:`<h3 class="modal-section-title">Project Implementation</h3>\
        The technical implementation was done with Unity in combination with PolySpacial for the Apple Vision Pro 2.\
        This combination proved challenging, as PolySpacial and the underlying AR-Kit exclusively support M-chips.\n\n\
        In practice, this meant that we effectively only had one laptop available on which the prototype ran smoothly while using the VR headset.\
        While development could take place in parallel on multiple devices, testing was limited to this one system, which significantly slowed down iteration.\n\n\
        The final prototype was implemented using the Wizard-of-Oz method, where functionality is controlled in the background.\
        Since the module's focus was on the concept and idea, not on complete programmatic implementation, this approach was most suitable for us.\n\n\
        The prototype integrates the Pomodoro technique into a spatial interface. Users can start learning phases, are reminded to take a break after 25 minutes, and can consciously disconnect during break times.\
        The spatial representation was intended to help separate learning and recovery more clearly from each other.\n\n\
        My main task, in addition to working on the prototype, was primarily cutting and synchronizing the presentation video that illustrates our concept and functionality.
        <h3 class="modal-section-title">Personal Learnings</h3>\
        The project gave me first insights into developing spatial interfaces and working with AR technology.\n\n\
        The technical limitations, especially the dependence on specific hardware, showed me how important it is to include such factors early in project planning.\
        Working with Unity and PolySpacial expanded my technical horizon, even though development was sometimes tedious.\n\n\
        Through video editing, I was able to develop my skills in visual preparation and presentation of complex concepts.\
        Particularly valuable was the experience of how important well-thought-out user experience concepts are, especially for new forms of interaction.`,

        hkHeader: `Hollow Knight Animation`,
        hkSemesterInfo: `4th Semester – Motion Design`,
        hkInfo: `As part of the Motion Design module, we worked with Adobe After Effects for the first time. The project was carried out in a group of three people.\
        The main task was to conceptualize and produce a video lasting between 1:30 and 2:00 minutes.\n\n\
        Both the visual style and the content design were completely up to us, allowing us to fully express our creativity. This freedom also meant that each group achieved a completely individual result.\n\n\
        Our group decided on an animation centered around the indie game 'Hollow Knight', making targeted use of the diverse tools and effects in After Effects to capture the unique atmosphere and mood of the game.
        `,
        hkModalText:`<h3 class="modal-section-title">Project Implementation</h3>\
        At the beginning, we jointly developed a storyboard that defined the narrative structure and visual flow of the animation. \
        We then divided the individual scenes among ourselves, so that each team member could work independently on their assigned sequences.\n\n\
        The individual animations were created in After Effects, from character movements to environmental effects and camera movements. \
        The tools and effects were used in such a way that the dark, melancholic atmosphere of Hollow Knight and especially the Greenpath area became tangible.\n\n\
        My main task, in addition to animating, was the final assembly of all animations in Premiere Pro. I combined the individual scenes into a continuous video and worked out the transitions.\
        For the sound design, I researched suitable effects, some directly from the game itself, some external sounds that fit atmospherically with the overall picture.
        <h3 class="modal-section-title">Personal Learnings</h3>\
        The project gave me first practical insights into Adobe After Effects and working with motion design.\n\n\
        Through video editing in Premiere Pro, I was able to develop my skills in post-production, especially in timing and audio integration.\
        The sound design showed me how important acoustic elements are for the impact of an animation.\n\n\
        Collaboration in the team required clear agreements regarding visual consistency and technical format specifications.\
        Particularly valuable was the experience of how individual creative elements are brought together into a cohesive overall work.`,

        basicallHeader: `basicall`,
        basicallTooltip: `Info about the prototype:\n\n\
        1. Best viewed in fullscreen.\n\n\
        2. Interested in a mobile version?\n\
        There is a link below the prototype.`,
        basicallSemesterInfo: `2nd Semester – Interaction Design`,
        basicallInfo: `The task in the Interaction Design module was to develop a responsive website as a clickable prototype for a fictitious IT start-up.\
        The project was carried out in a team of four.\
        Throughout four project phases, we created a concept, developed a corporate design, and realized the prototype in Figma.\n\n\
        These phases were:\n\
        1. Discover – What is it about?\n\
        2. Define – Plan the user experience\n\
        3. Design – Design the user experience\n\
        4. Deliver – Implementation & production\n\n\
        In the end, the start-up 'basicall' was created, specializing in modern dumbphones and special software to limit smartphone use in the social media sector. The goal is to help young people get a grip on their social media addiction.
        `,
        basicallModalText:`<h3 class="modal-section-title">Project Implementation</h3>\
        The concept phase began with comprehensive research on digital dependency and the phenomenon of conscious technology abstinence.\
        We analyzed existing solution approaches and developed our own vision for basicall from this.\n\n\
        In the corporate design, we defined a clear visual identity – from the color palette to typography to the logo.\
        The design was meant to convey calm and focus, as a conscious counterpoint to the overstimulated social media world.\n\n\
        The prototype was completely implemented in Figma and includes several interactive pages: a landing page, product overviews of the dumbphones, explanations of the accompanying software, and an informative area.\
        By linking all screens, a clickable prototype was created that makes the user experience authentically tangible.\n\n\
        My focus was on the visual elaboration of individual pages as well as the development of consistent UI components that run through the entire prototype.
        <h3 class="modal-section-title">Personal Learnings</h3>\
        The project gave me first comprehensive insights into the UX/UI design process, starting with user research to final design.\n\n\
        Working with Figma helped me understand structured interface design and the importance of reusable components.\n\n\
        The iterative working method over multiple project phases showed me how concepts develop through continuous feedback and adjustments.`,

        mp3PlayerHeader: `MP3 Player`,
        mp3PlayerSemesterInfo: `3rd Semester – Interactive Application Development`,
        mp3PlayerInfo: `As an introductory project in the IAD module, we developed an MP3 player to learn the basics of JavaFX and working with graphical user interfaces.\
        The project helped us understand and directly apply key components such as buttons, lists, and events.\n\
        Through hands-on implementation, we gained a solid foundation in GUI programming, which prepared us for developing the main project (MelodyEscape) afterwards.`,

        bookletHeader: `Booklet`,
        bookletSemesterInfo: `1st Semester – Media Design Fundamentals`,
        bookletInfo: `The booklet from the first semester contains a compilation of all tasks that we completed throughout the semester in this module.\
        The focus was on teaching fundamental design knowledge, from color and typography to the finished layout.\n\n\
        The goal was to present all practical assignments in an attractively designed booklet of our own creation.\
        For my design, I drew inspiration from the 'Dark Souls' video game series and tried to capture its look and feel.
        `,
        bookletModalText:`<h3 class="modal-section-title">Project Implementation</h3>\
        The booklet was created by combining various design exercises from the first semester.\
        We worked on worksheets on different design topics weekly, from color studies to typographic experiments to layout tasks.\n\n\
        The challenge was to unite these heterogeneous works into a coherent overall work.\
        The Dark Souls aesthetic formed the visual leitmotif: dark color palettes, structured textures, and striking typography shaped the appearance.\n\n\
        Through targeted application of design fundamentals such as typography, layout, and composition, thematic connections emerged between the individual tasks.\
        The layout structure was designed so that each task has its own space, while the overarching design concept remains consistently recognizable.
        <h3 class="modal-section-title">Personal Learnings</h3>\
        The project taught me fundamental design principles and trained my eye for visual consistency.\n\n\
        Practical work with typography, color design, and layout helped me expand my sense for design systematics.\
        Particularly valuable was the insight into how individual elements can be connected into a coherent whole through a strong conceptual foundation.`,

        aekiHeader: `Schöner Wohnen – Room Planner`,
        aekiSemesterInfo: `4th Semester – Software Engineering`,
        aekiInfo: `In the Software Engineering module, the focus was on the systematic development of software in a team.\
        The project was implemented in a group of 4 people.\n\n\
        The goal was to go through the entire software development process – from requirements gathering and UML modeling to implementing a sustainable software architecture.\
        The focus was on applying process models, architectural and design patterns, as well as considering non-functional requirements such as maintainability and extensibility.\n\n\
        After introductory exercises, we developed a requirements specification throughout the semester, derived an appropriate software architecture from it, and implemented it as functional software.\
        Our team developed a room planner called 'Schöner Wohnen', involving various stakeholders and using appropriate software tools to support the entire development cycle.`,
        aekiModalText:`<h3 class="modal-section-title">Project Implementation</h3>\
        At the beginning, we created a detailed requirements specification in which functional and non-functional requirements were defined.\
        We then modeled the software architecture with UML diagrams, including use case diagrams, class diagrams, and sequence diagrams.\n\n\
        The implementation was done in Java.\
        The room planner allows users to design virtual rooms, place furniture, and test different furnishing variants.\n\n\
        For visualization of the architecture and documentation, we used DrawIO to create UML diagrams.\
        This ensured consistency between implementation and documentation.\n\n\
        My tasks included working on the requirements analysis, modeling class structures, and implementing core functionalities of the room planner.
        <h3 class="modal-section-title">Personal Learnings</h3>\
        The project gave me deep insights into the systematic software development process and the importance of clean architecture.\n\n\
        Working with UML helped me visualize and communicate complex system contexts.\
        Particularly valuable was the insight into how important the separation of concerns and adherence to SOLID principles are for maintainable software.`,

        calumetHeader: `Calumet Shop Site`,
        calumetTooltip: `Info about the prototype:\n\n\
        1. Best viewed in fullscreen.\n\n\
        2. When hovering over a product, scrolling is disabled—so make sure not to hover over an image while scrolling (Figma limitation)\n\n\
        3. Interested in a mobile version?\n\
        There is a link below the prototype.`,
        calumetSemesterInfo: `2nd Semester – Interaction Design`,
        calumetInfo: `The task was to design a product overview page that provides information about at least 9 products.\
        Both a desktop version and a smartphone version were to be designed.\n\n\
        I chose the brand Calumet, a supplier of photography and video equipment.\
        The page includes a main navigation, a brief introduction, and a clear product presentation with image, name, technical details (on hover over the product), and price.\n\n\
        Similar to the MP3 Player, this was an intermediate submission in the Interaction Design module – the final project was basicall.
        `,
        calumetModalText:`<h3 class="modal-section-title">Project Implementation</h3>\
        The design began with analyzing Calumet's brand identity.\
        From this, I developed a layout concept that focuses on clarity and quick product comparability.\n\n\
        The grid layout enables structured presentation of products in Polaroid style, with each item consistently structured: product image in the characteristic Polaroid format, name, price, and additional technical details on hover.\
        The Polaroid aesthetic gives the page an authentic, analog note.\n\n\
        The navigation was designed so that users can quickly switch between product categories.\
        Both the desktop and smartphone versions were implemented as interactive prototypes in Figma.\
        The focus was on responsive design that adapts to different screen sizes without losing information or affecting usability.\n\n\
        <h3 class="modal-section-title">Personal Learnings</h3>\
        The project gave me further practical experience in designing responsive layouts and working with Figma prototypes.\n\n\
        Implementing the hover interactions helped me understand how additional information can be displayed in a user-friendly way.`,

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
        const text = getTranslation(key, lang);
        
        if (text) {
            const htmlText = text.replace(/\n/g, '<br>');
            element.innerHTML = htmlText;
        }
    });

    const pageNameElement = document.querySelector('[data-i18n-page]');
    if(pageNameElement){
        const pageKey = pageNameElement.getAttribute('data-i18n-page');
        pageNameElement.textContent = getTranslation(pageKey, lang);
    }

    updateNavbarTranslations(lang);

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

