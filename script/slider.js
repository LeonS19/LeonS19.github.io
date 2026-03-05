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
    } else if (item.type === 'video'){
        // YouTube Thumbnail statt direktem Player
        const match = item.src.match(/embed\/([a-zA-Z0-9_-]+)/);
        if (match) {
            const videoId = match[1];
            const thumbnailDiv = document.createElement('div');
            thumbnailDiv.classList.add('slider-img', 'youtube-lite');
            thumbnailDiv.setAttribute('data-video-id', videoId);
            thumbnailDiv.style.minWidth = '100%';
            thumbnailDiv.style.width = '100%';
            thumbnailDiv.style.height = '50vh';
            thumbnailDiv.style.position = 'relative';
            thumbnailDiv.style.cursor = 'pointer';
            
            const thumbnail = document.createElement('img');
            thumbnail.src = `https://img.youtube.com/vi/${videoId}/maxresdefault.jpg`;
            thumbnail.style.width = '100%';
            thumbnail.style.height = '100%';
            thumbnail.style.objectFit = 'cover';
            
            const playBtn = document.createElement('div');
            playBtn.classList.add('play-button');
            
            thumbnailDiv.appendChild(thumbnail);
            thumbnailDiv.appendChild(playBtn);
            track.appendChild(thumbnailDiv);
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
    container.querySelectorAll('.youtube-lite').forEach(lite => {
        lite.addEventListener('click', function() {
            const videoId = this.getAttribute('data-video-id');
            const container = this;
            
            function initPlayer() {
                if (!window.ytApiReady) {
                    setTimeout(initPlayer, 100);
                    return;
                }
                
                const playerId = `yt-slider-${videoId}-${Date.now()}`;
                container.innerHTML = `<div id="${playerId}"></div>`;
                
                new YT.Player(playerId, {
                    videoId: videoId,
                    width: '100%',
                    height: '100%',
                    playerVars: {
                        autoplay: 1,
                        controls: 1,
                        modestbranding: 1,
                        rel: 0,
                    },
                    events: {
                        'onReady': function(event) {
                            event.target.setVolume(10);
                        }
                    }
                });
                
                container.style.cursor = 'default';
            }
            
            initPlayer();
        });
    });
}