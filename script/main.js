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
    if(currentPage.includes('projects')) pageKey = 'pageProjects';
    
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

const modals = [
  'modal-milefiz.html',
  'modal-doener.html',
  'modal-melodyEscape.html',
  'modal-lernwolke.html',
  'modal-hk.html',
  
];

modals.forEach(filename => {
  fetch(`components/modal/${filename}`)
    .then(res => res.text())
    .then(data => {
      document.body.insertAdjacentHTML('beforeend', data);
      setLanguage(getCurrentLanguage());
    });
});

document.addEventListener('DOMContentLoaded', function() {
  document.querySelectorAll('.open-modal[data-modal]').forEach(openBtn => {
    openBtn.addEventListener('click', function(e) {
      e.preventDefault();
      const modalId = openBtn.getAttribute('data-modal');
      const modal = document.getElementById(modalId);
      if (modal) {
        modal.style.display = 'flex';
        document.body.style.overflow = 'hidden';
        // Schließen-Button im Modal
        const closeBtn = modal.querySelector('.close-modal');
        if (closeBtn) {
          closeBtn.onclick = function() {
            modal.style.display = 'none';
            document.body.style.overflow = '';
          };
        }
        // Klick auf Overlay schließt Modal
        modal.onclick = function(event) {
          if (event.target === modal) {
            modal.style.display = 'none';
            document.body.style.overflow = '';
          }
        };
      }
    });
  });
});

let ytApiReady = false;
let domReady = false;

function tryInitYouTubePlayers() {
  if (ytApiReady && domReady) {
    const videoConfigs = [
      { id: 'lernwolke-player', videoId: 'PyrLu2bvX1I' },
      { id: 'melody-player', videoId: '4SwvMUJdi4g' },
      { id: 'hollowknight-player', videoId: 'x7nPo_s8MS4' },
      { id: 'mp3Player-player', videoId: 'HJYH0AhHVS0' },
    ];
    videoConfigs.forEach(cfg => {
      const el = document.getElementById(cfg.id);
      if (el) {
        new YT.Player(cfg.id, {
            videoId: cfg.videoId,
            playerVars: {
                controls: 1,    // Standard-YouTube-Controls anzeigen
                modestbranding: 1,
                rel: 0,            // Keine verwandten Videos am Ende
            },
            events: {
                'onReady': function(event) {
                event.target.setVolume(10);
                }
            }
        });
      }
    });
  }
}

// YouTube API laden
if (!window.YT) {
  var tag = document.createElement('script');
  tag.src = "https://www.youtube.com/iframe_api";
  document.head.appendChild(tag);
}

window.onYouTubeIframeAPIReady = function() {
  ytApiReady = true;
  tryInitYouTubePlayers();

  if (window.pendingYouTubePlayers && window.pendingYouTubePlayers.length > 0) {
    window.pendingYouTubePlayers.forEach(cfg => {
      window[cfg.playerId] = new YT.Player(cfg.playerId, {
        videoId: cfg.videoId,
        events: {
          'onReady': function(event) {
            event.target.setVolume(10);
          }
        }
      });
    });
    window.pendingYouTubePlayers = [];
  }
};
document.addEventListener('DOMContentLoaded', function() {
  domReady = true;
  tryInitYouTubePlayers();
});