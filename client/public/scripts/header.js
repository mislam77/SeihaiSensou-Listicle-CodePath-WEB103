document.addEventListener("DOMContentLoaded", function() {
    const header = document.createElement('header');
    header.classList.add('header');

    const video = document.createElement('video');
    video.src = '/media/video.mp4';
    video.autoplay = true;
    video.loop = true;
    video.muted = true;
    video.classList.add('header-video');

    const overlay = document.createElement('div');
    overlay.classList.add('header-overlay');

    const title = document.createElement('h1');
    title.textContent = 'Seihai Sensou!';
    title.classList.add('header-title');

    const subtitle = document.createElement('p');
    subtitle.textContent = 'Learn about the Legendary Servants of the 5th Holy Grail War in Fuyuki!';
    subtitle.classList.add('header-subtitle');

    const button = document.createElement('a');
    button.textContent = 'All Servants';
    button.href = '/';
    button.classList.add('header-button');

    header.appendChild(video);
    header.appendChild(overlay);
    header.appendChild(title);
    header.appendChild(subtitle);
    header.appendChild(button);

    document.body.prepend(header);
});