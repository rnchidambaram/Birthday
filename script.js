// ================================
// Birthday Website - Nandhini ❤️
// ================================


// Get sections
const opening = document.getElementById("opening");
const birthday = document.getElementById("birthday");
const message = document.getElementById("message");
const photos = document.getElementById("photos");
const final = document.getElementById("final");


// Get buttons
const openBtn = document.getElementById("openBtn");
const continueBtn = document.getElementById("continueBtn");
const photosBtn = document.getElementById("photosBtn");
const finalBtn = document.getElementById("finalBtn");


// Music
const music = document.getElementById("birthdayMusic");


// ================================
// Screen Change Function
// ================================

function showScreen(screenToShow) {

    const screens = [
        opening,
        birthday,
        message,
        photos,
        final
    ];

    screens.forEach(screen => {
        screen.classList.add("hidden");
    });

    screenToShow.classList.remove("hidden");

}


// ================================
// Floating Hearts
// ================================

function createHeart() {

    const heart = document.createElement("div");

    heart.classList.add("floating-heart");

    const hearts = ["❤️", "💕", "💖", "💗", "💓"];

    heart.innerHTML =
        hearts[Math.floor(Math.random() * hearts.length)];

    heart.style.left =
        Math.random() * 100 + "%";

    heart.style.fontSize =
        (15 + Math.random() * 25) + "px";

    heart.style.animationDuration =
        (5 + Math.random() * 4) + "s";

    document.body.appendChild(heart);

    setTimeout(() => {
        heart.remove();
    }, 9000);

}


// Create hearts continuously

setInterval(createHeart, 700);


// ================================
// Open Surprise
// ================================

openBtn.addEventListener("click", () => {

    showScreen(birthday);

    // Start music after user interaction
    music.play().catch(() => {
        console.log("Music requires user interaction.");
    });

});


// ================================
// Birthday → Message
// ================================

continueBtn.addEventListener("click", () => {

    showScreen(message);

    startTyping();

});


// ================================
// Romantic Birthday Message
// ================================

const birthdayText = `
Dear Nandhini ❤️

Today is a very special day because it is the day
someone truly wonderful came into this world.

I hope this birthday brings you endless happiness,
beautiful moments, and a smile that never fades.

May every dream you have slowly turn into reality,
and may every new chapter of your life be filled
with love, peace, success and happiness.

You deserve all the beautiful things life has to offer.

Keep smiling, keep shining and always stay the
wonderful person you are.

Once again...

Happy Birthday, Nandhini! 🎂❤️

May your special day be as beautiful and
wonderful as you are. 💕
`;


// ================================
// Typing Effect
// ================================

let typingStarted = false;

function startTyping() {

    if (typingStarted) {
        return;
    }

    typingStarted = true;

    const textElement =
        document.getElementById("typingText");

    let index = 0;

    function typeCharacter() {

        if (index < birthdayText.length) {

            textElement.textContent +=
                birthdayText.charAt(index);

            index++;

            setTimeout(typeCharacter, 30);

        }

    }

    typeCharacter();

}


// ================================
// Message → Photos
// ================================

photosBtn.addEventListener("click", () => {

    showScreen(photos);

});


// ================================
// Photos → Final Surprise
// ================================

finalBtn.addEventListener("click", () => {

    showScreen(final);

    createConfetti();

});


// ================================
// Confetti
// ================================

function createConfetti() {

    const symbols = [
        "🎉",
        "🎊",
        "❤️",
        "💕",
        "✨",
        "💖",
        "🎈"
    ];

    for (let i = 0; i < 40; i++) {

        const confetti =
            document.createElement("div");

        confetti.innerHTML =
            symbols[
                Math.floor(
                    Math.random() * symbols.length
                )
            ];

        confetti.style.position = "fixed";

        confetti.style.left =
            Math.random() * 100 + "vw";

        confetti.style.top = "-50px";

        confetti.style.fontSize =
            (20 + Math.random() * 25) + "px";

        confetti.style.zIndex = "9999";

        confetti.style.pointerEvents = "none";

        document.body.appendChild(confetti);


        const duration =
            2000 + Math.random() * 3000;


        confetti.animate(
            [
                {
                    transform: "translateY(0) rotate(0deg)",
                    opacity: 1
                },
                {
                    transform:
                        `translateY(110vh) rotate(720deg)`,
                    opacity: 0
                }
            ],
            {
                duration: duration,
                easing: "ease-out"
            }
        );


        setTimeout(() => {
            confetti.remove();
        }, duration);

    }

}


// ================================
// Prevent accidental right click
// ================================

// Uncomment the next section if you want
// to disable right-click on the website.

/*
document.addEventListener("contextmenu", function(event) {
    event.preventDefault();
});
*/


// ================================
// Console message
// ================================

console.log(
    "🎂 Happy Birthday Nandhini! ❤️"
);