function checkAnswers() {
    let correct = {
        q1: "C",
        q2: "C",
        q3: "B",
        q4: "C",
        q5: "C",
        q6: "C",
        q7: "B",
        q8: "B",
        q9: "C",
        q10: "C"
    };

    let score = 0;

    for (let q in correct) {
        let answer = document.querySelector(`input[name="${q}"]:checked`);
        if (answer && answer.value === correct[q]) {
            score++;
        }
    }

    let percentage = (score / 10) * 100;
    let resultText = `Skor Anda: ${score} / 10 (${percentage}%)<br>`;

    if (percentage >= 70) {
        resultText += "<span style='color:green;'>🎉 Selamat! Anda lulus.</span>";
    } else {
        resultText += "<span style='color:red;'>❗ Coba lagi ya!</span>";
    }

    document.getElementById("result").innerHTML = resultText;
}

const elements = document.querySelectorAll('.reveal, .reveal-left, .reveal-right, .reveal-scale');

function revealOnScroll() {
    elements.forEach(el => {
        const top = el.getBoundingClientRect().top;
        const trigger = window.innerHeight - 100;
        if (top < trigger) {
            el.classList.add('active');
        }
    });
}

window.addEventListener('scroll', revealOnScroll);
revealOnScroll();