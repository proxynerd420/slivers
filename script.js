document.addEventListener('DOMContentLoaded', function () {

    // Variable, um den Status des Easter Eggs zu speichern
    let easterEggActivated = false;

    // Funktion zur Änderung des Mana-Symbols
    function changeManaSymbol() {
        const manaSymbols = [
            "img/black mana.png",
            "img/blue mana.png",
            "img/green mana.png",
            "img/white mana.png",
            "img/red mana.png"
            // Füge hier weitere Pfadangaben zu deinen Mana-Symbolen hinzu
        ];

        const manaSymbolElement = document.getElementById("manaSymbol");
        const randomIndex = Math.floor(Math.random() * manaSymbols.length);
        const newManaSymbol = manaSymbols[randomIndex];
        // Füge diese Zeilen in die Funktion changeManaSymbol ein
        const faviconElement = document.getElementById("favicon");
        const newFavicon = `img/${newManaSymbol.split('/').pop()}`; // Ersetzt den Pfad des Favicon

        // Aktualisiere das Favicon
        faviconElement.href = newFavicon;


        // Füge eine CSS-Klasse hinzu, um den Übergang zu aktivieren
        manaSymbolElement.classList.add("fade-out");

        // Warte 1 Sekunde, um den Übergang zu ermöglichen
        setTimeout(() => {
            // Aktualisiere das Symbol nach dem Übergang
            manaSymbolElement.innerHTML = `<img src="${newManaSymbol}" alt="Mana Symbol">`;

            // Entferne die CSS-Klasse, um den Übergang zu beenden
            manaSymbolElement.classList.remove("fade-out");
        }, 1000);
    }

    // Rufe die Funktion beim Laden der Seite auf
    changeManaSymbol();

    // Aktualisiere alle 10 Sekunden
    setInterval(changeManaSymbol, 10000);

    // Funktion zum Abspielen des Soundeffekts
function playSound(soundFile) {
    if (easterEggActivated) {
    var audio = new Audio(soundFile); // Passe den Pfad zur Sounddatei an
    audio.play();
    console.log(`Sound abgespielt: ${soundFile}`);
    }
}

// Füge die Funktionen dem Hover-Ereignis hinzu
document.getElementById('galli').addEventListener('mouseenter', function () {
    playSound('mp3/galli.mp3');
    // Füge hier weitere Aktionen hinzu, falls benötigt
});

document.getElementById('sumpf1').addEventListener('mouseenter', function () {
    playSound('mp3/sumpf.mp3');
    // Füge hier weitere Aktionen hinzu, falls benötigt
});

document.getElementById('sumpf3').addEventListener('mouseenter', function () {
    playSound('mp3/sumpf.mp3');
    // Füge hier weitere Aktionen hinzu, falls benötigt
});

document.getElementById('sumpf2').addEventListener('mouseenter', function () {
    playSound('mp3/sumpf.mp3');
    // Füge hier weitere Aktionen hinzu, falls benötigt
});

document.getElementById('sumpf4').addEventListener('mouseenter', function () {
    playSound('mp3/sumpf.mp3');
    // Füge hier weitere Aktionen hinzu, falls benötigt
});

document.getElementById('sumpf5').addEventListener('mouseenter', function () {
    playSound('mp3/sumpf.mp3');
    // Füge hier weitere Aktionen hinzu, falls benötigt
});

document.getElementById('sumpf6').addEventListener('mouseenter', function () {
    playSound('mp3/sumpf.mp3');
    // Füge hier weitere Aktionen hinzu, falls benötigt
});

document.getElementById('sumpf7').addEventListener('mouseenter', function () {
    playSound('mp3/sumpf.mp3');
    // Füge hier weitere Aktionen hinzu, falls benötigt
});

document.getElementById('nazgul').addEventListener('mouseenter', function () {
    playSound('mp3/nazgul.mp3');
    // Füge hier weitere Aktionen hinzu, falls benötigt
});

document.getElementById('sheo').addEventListener('mouseenter', function () {
    playSound('mp3/sheo.mp3');
    // Füge hier weitere Aktionen hinzu, falls benötigt
});

        // KonamiCode Easteregg
    const konamiCode = ['ArrowUp', 'ArrowUp', 'ArrowDown', 'ArrowDown', 'ArrowLeft', 'ArrowRight', 'ArrowLeft', 'ArrowRight', 'b', 'a'];
    let konamiCodePosition = 0;

    document.addEventListener('keydown', function (event) {
        if (event.key === konamiCode[konamiCodePosition]) {
            konamiCodePosition++;
            if (konamiCodePosition === konamiCode.length) {
                activateEasterEgg();
                konamiCodePosition = 0;
            }
        } else {
            konamiCodePosition = 0;
        }
    });

    function activateEasterEgg() {
        easterEggActivated = true;

        // Benutzerdefinierte Benachrichtigung
        const notification = document.createElement('div');
        notification.innerText = 'Easter Egg aktiviert! 🎉';
        notification.className = 'easter-egg-notification';
        document.body.appendChild(notification);
        console.log('Easter Egg Benachrichtigung hinzugefügt');

        // Audio-Element abspielen
        const fanfareAudio = new Audio('mp3/fanfare.mp3');
        fanfareAudio.play();
        console.log('Fanfare abgespielt');

        // Rainbow Foil-Effekt aktivieren
        activateRainbowFoilEffect();

        // Timeout, um die Benachrichtigung nach einigen Sekunden zu entfernen (kann angepasst werden)
        setTimeout(function () {
            document.body.removeChild(notification);
        }, 5000);

        // Füge hier weitere Aktionen für dein Easter Egg hinzu
    }

    function activateRainbowFoilEffect() {
        // Füge die CSS-Regel für die rainbowFoil-Animation hinzu
        const style = document.createElement('style');
        style.textContent = `
            @keyframes rainbowFoil {
                0% {
                    filter: hue-rotate(0deg);
                }
                100% {
                    filter: hue-rotate(360deg);
                }
            }
        `;
        document.head.appendChild(style);

        // Füge die rainbowFoil-Klasse zu den entsprechenden Elementen hinzu
        const foilElements = document.querySelectorAll('.foil-effect');
        foilElements.forEach(element => {
            element.classList.add('rainbowFoil');
        });
    }
});
