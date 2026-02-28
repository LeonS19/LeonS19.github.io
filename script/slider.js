function createSlider(containerId, items) {
    const container = document.getElementById(containerId);
    if (!container) return;

    let current = 0;

    const parent = container.parentElement;

    container.classList.add('slider');

    container.classList.add('slider');

    const prevBtn = document.createElement('button');
    prevBtn.classList.add('slider-btn', 'slider-btn-prev');
    prevBtn.innerHTML = '&#8249;';

    const wrapper = document.createElement('div');
    wrapper.classList.add('slider-track-wrapper');

    const track = document.createElement('div');
    track.classList.add('slider-track');

items.forEach((item, idx) => {
    if (typeof item === 'string'){
        const img = document.createElement('img');
        img.src = item;
        img.classList.add('slider-img');
        track.appendChild(img);
    }else if (item.type === 'video'){
        const ytDiv = document.createElement('div');
        ytDiv.classList.add('slider-img');
        ytDiv.style.minWidth = '100%';
        ytDiv.style.width = '100%';
        ytDiv.style.height = '50vh';
        // Eindeutige ID für den Player
        const playerId = `${containerId}-youtube-${idx}`;
        ytDiv.id = playerId;
        track.appendChild(ytDiv);

        // Player-Konfiguration merken
        if (!window.pendingYouTubePlayers) window.pendingYouTubePlayers = [];
        // Extrahiere Video-ID aus src
        const match = item.src.match(/embed\/([a-zA-Z0-9_-]+)/);
        if (match) {
            window.pendingYouTubePlayers.push({
                playerId,
                videoId: match[1]
            });
        }
    }
});

    const nextBtn = document.createElement('button');
    nextBtn.classList.add('slider-btn', 'slider-btn-next');
    nextBtn.innerHTML = '&#8250;';

    const dots = document.createElement('div');
    dots.classList.add('slider-dots');

    const dotElements = items.map((_, index) => {
        const dot = document.createElement('span');
        dot.classList.add('slider-dot');
        if (index === 0) dot.classList.add('active');
        dot.addEventListener('click', () => {
            current = index;
            updateSlider();
        });
        dots.appendChild(dot);
        return dot;
    });

    wrapper.appendChild(track);
    wrapper.appendChild(dots); // Dots in den Wrapper!

    container.appendChild(prevBtn);
    container.appendChild(wrapper); // Wrapper enthält Track & Dots
    container.appendChild(nextBtn);


    function updateSlider() {
        track.style.transform = `translateX(-${current * 100}%)`;
        dotElements.forEach((dot, index) => {
            dot.classList.toggle('active', index === current);
        });
    }

    prevBtn.addEventListener('click', () => {
        current = current > 0 ? current - 1 : items.length - 1;
        updateSlider();
    });

    nextBtn.addEventListener('click', () => {
        current = current < items.length - 1 ? current + 1 : 0;
        updateSlider();
    });
}