const renderServant = async () => {
    const requestedID = parseInt(window.location.href.split('/').pop());
    const response = await fetch('/servants');
    const data = await response.json();

    const servantContent = document.getElementById('servant-content');
    let servant = data.find(servant => servant.id === requestedID);

    if (servant) {
        document.getElementById('image').src = servant.image;
        document.getElementById('trueName').textContent = servant.trueName;
        document.getElementById('masterName').textContent = 'Master: ' + servant.masterName;
        document.getElementById('class').textContent = 'Class: ' + servant.class;
        document.getElementById('height').textContent = 'Height: ' + servant.height;
        document.getElementById('weight').textContent = 'Weight: ' + servant.weight;
        document.getElementById('alignment').textContent = 'Alignment: ' + servant.alignment;
        document.getElementById('strength').textContent = servant.strength;
        document.getElementById('endurance').textContent = servant.endurance;
        document.getElementById('agility').textContent = servant.agility;
        document.getElementById('mana').textContent = servant.mana;
        document.getElementById('luck').textContent = servant.luck;
        document.getElementById('np').textContent = servant.np;
        document.getElementById('description').textContent = servant.description;
        document.title = `Seihai Sensou - ${servant.trueName}`;
    } else {
        const message = document.createElement('h2');
        message.textContent = 'No Servants Available 😞';
        servantContent.appendChild(message);
    }
};

document.addEventListener('DOMContentLoaded', renderServant);