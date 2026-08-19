document.addEventListener("DOMContentLoaded", function () {

    // ========================================
    // Get Elements
    // ========================================

    const opening = document.getElementById("opening");
    const birthday = document.getElementById("birthday");
    const message = document.getElementById("message");
    const final = document.getElementById("final");

    const openBtn = document.getElementById("openBtn");
    const continueBtn = document.getElementById("continueBtn");
    const finalBtn = document.getElementById("finalBtn");

    const music = document.getElementById("birthdayMusic");


    // ========================================
    // Check Elements
    // ========================================

    console.log("Birthday website JavaScript loaded.");

    console.log("Open button:", openBtn);
    console.log("Continue button:", continueBtn);
    console.log("Final button:", finalBtn);
    console.log("Music:", music);


    // ========================================
    // Change Screen
    // ========================================

    function showScreen(screen) {

        opening.classList.add("hidden");
        birthday.classList.add("hidden");
        message.classList.add("hidden");
        final.classList.add("hidden");

        screen.classList.remove("hidden");

    }


    // ========================================
    // Open Your Surprise
    // ========================================

    openBtn.addEventListener("click", function () {

        console.log("Open Your Surprise clicked!");

        showScreen(birthday);


        // Start music
        if (music) {

            music.play()
                .then(function () {

                    console.log("Music started successfully.");

                })
                .catch(function (error) {

                    console.log(
                        "Music could not start:",
                        error
                    );

                });

        }

    });


    // ========================================
    // Birthday → Message
    // ========================================

    continueBtn.addEventListener("click", function () {

        console.log("Birthday message button clicked!");

        showScreen(message);

        startTyping();

    });


    // ========================================
    // Birthday Message
    // ========================================

    const birthdayText = `❤️Dear Nandhini ❤️

Some people make life beautiful just by being in it. ❤️
You are one of those people for me.
On your special day, I just want you to know how deeply special you are to my heart.
May your smile always stay bright, your dreams come true, and your heart always be filled with happiness.

💕Happy Birthday, Nandhini! 💕 🎂❤️

💕May your special day be as beautiful and wonderful as you are. 💕`;


    // ========================================
    // Typing Effect
    // ========================================

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

                setTimeout(
                    typeCharacter,
                    30
                );

            }

        }


        typeCharacter();

    }


    // ========================================
    // Message → Final
    // ========================================

    finalBtn.addEventListener("click", function () {

        console.log("Final button clicked!");

        showScreen(final);

        createConfetti();

    });


    // ========================================
    // Floating Hearts
    // ========================================

    function createHeart() {

        const heart =
            document.createElement("div");

        heart.className =
            "floating-heart";

        const hearts = [
            "❤️",
            "💕",
            "💖",
            "💗",
            "💓",
            "✨"
        ];

        heart.textContent =
            hearts[
                Math.floor(
                    Math.random() * hearts.length
                )
            ];

        heart.style.left =
            Math.random() * 100 + "vw";

        heart.style.fontSize =
            (15 + Math.random() * 25) + "px";

        heart.style.animationDuration =
            (5 + Math.random() * 5) + "s";

        document.body.appendChild(heart);

        setTimeout(function () {

            heart.remove();

        }, 10000);

    }


    setInterval(createHeart, 800);


    // ========================================
    // Confetti
    // ========================================

    function createConfetti() {

        const symbols = [
            "❤️",
            "💕",
            "💖",
            "✨",
            "🎉",
            "🎊",
            "🎈"
        ];


        for (let i = 0; i < 50; i++) {

            const item =
                document.createElement("div");

            item.textContent =
                symbols[
                    Math.floor(
                        Math.random() *
                        symbols.length
                    )
                ];

            item.style.position =
                "fixed";

            item.style.left =
                Math.random() * 100 + "vw";

            item.style.top =
                "-50px";

            item.style.fontSize =
                (18 + Math.random() * 25) + "px";

            item.style.zIndex =
                "9999";

            item.style.pointerEvents =
                "none";


            const duration =
                2000 +
                Math.random() * 3000;


            item.animate(
                [
                    {
                        transform:
                            "translateY(0) rotate(0deg)",

                        opacity: 1
                    },

                    {
                        transform:
                            "translateY(110vh) rotate(720deg)",

                        opacity: 0
                    }
                ],
                {
                    duration: duration,
                    easing: "ease-out"
                }
            );


            document.body.appendChild(item);


            setTimeout(function () {

                item.remove();

            }, duration);

        }

    }

});