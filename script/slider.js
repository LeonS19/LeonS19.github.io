function createSlider(containerId, images) {
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

    images.forEach((src) => {
        const img = document.createElement('img');
        img.src = src;
        img.classList.add('slider-img');
        track.appendChild(img);
    });

    const nextBtn = document.createElement('button');
    nextBtn.classList.add('slider-btn', 'slider-btn-next');
    nextBtn.innerHTML = '&#8250;';

    const dots = document.createElement('div');
    dots.classList.add('slider-dots');

    const dotElements = images.map((_, index) => {
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
        current = current > 0 ? current - 1 : images.length - 1;
        updateSlider();
    });

    nextBtn.addEventListener('click', () => {
        current = current < images.length - 1 ? current + 1 : 0;
        updateSlider();
    });
}