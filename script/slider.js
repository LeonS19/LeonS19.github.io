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

    items.forEach((item) => {
        if (typeof item === 'string'){
            const img = document.createElement('img');
            img.src = item;
            img.classList.add('slider-img');
            track.appendChild(img);
        }else if (item.type === 'video'){
            const videoWrapper = document.createElement('div');
            videoWrapper.classList.add('slider-img');
            videoWrapper.style.minWidth = '100%';
            videoWrapper.style.width = '100%';
            videoWrapper.style.height = '50vh';
            
            const iframe = document.createElement('iframe');
            iframe.src = item.src;
            iframe.style.width = '100%';
            iframe.style.height = '100%';
            iframe.style.border = 'none';
            iframe.setAttribute('allowfullscreen', "");
            iframe.setAttribute('allow', 'accelerometer; clipboard-write; clipboard-write; encrypted-media; encrypted-media; gyroscope')
            
            videoWrapper.appendChild(iframe);
            track.appendChild(videoWrapper);
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
    container.appendChild(prevBtn);
    container.appendChild(wrapper);
    container.appendChild(nextBtn);

    const sliderWrapper = document.createElement('div');
    sliderWrapper.classList.add('slider-wrapper');
    sliderWrapper.appendChild(container);
    sliderWrapper.appendChild(dots);

    parent.appendChild(sliderWrapper);


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