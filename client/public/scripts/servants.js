const renderServants = async () => {
    const response = await fetch('/servants');
    const data = await response.json();

    const mainContent = document.getElementById('main-content');

    if (data && data.length > 0) {
        data.forEach(servant => {
            const card = document.createElement('div');
            card.classList.add('card');

            const topContainer = document.createElement('div');
            topContainer.classList.add('top-container');
            topContainer.style.backgroundImage = `url(${servant.image})`;

            const bottomContainer = document.createElement('div');
            bottomContainer.classList.add('bottom-container');

            const trueName = document.createElement('h3');
            trueName.textContent = servant.trueName;
            bottomContainer.appendChild(trueName);

            const description = document.createElement('p');
            description.textContent = servant.description;
            bottomContainer.appendChild(description);

            const link = document.createElement('a');
            link.textContent = 'View Details';
            link.setAttribute('role', 'button');
            link.href = `/servants/${servant.id}`;
            bottomContainer.appendChild(link);

            card.appendChild(topContainer);
            card.appendChild(bottomContainer);
            mainContent.appendChild(card);
        });
    } else {
        const message = document.createElement('h2');
        message.textContent = 'No Servants Available';
        mainContent.appendChild(message);
    }
};

const requestedUrl = window.location.href.split('/').pop();

if (requestedUrl) {
    window.location.href = '../404.html';
} else {
    document.addEventListener('DOMContentLoaded', renderServants);
}
