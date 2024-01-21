const img = document.querySelector('img');
const question = document.querySelector('input');
const answer = document.querySelector('.answer');
const error = document.querySelector('.error')


const answersArray = ['Tak!', 'Nie!', 'Nie wiem ;/.', 'Lepiej, abyś nie wiedział XD.'];

const showAnswer = () => {
    const number = Math.floor(Math.random() * 4);

    answer.innerHTML = `<span>Odpowiedź:</span> ${answersArray[number]}`
}

const checkQuestion = () => {
    if (question.value.slice(-1) === '?' && question.value !== "") {
        showAnswer();
        error.textContent = "";
    } else if (question.value.slice(-1) !== '?' && question.value !== "") {
        error.textContent = 'Wpisz pytanie ze znakiem zapytania - "?" - na końcu.';
        answer.textContent = "";
    } else {
        error.textContent = 'Zadaj pytanie!';
        answer.textContent = "";
    }
    img.classList.remove('shake-animation');
}

const shakeImg = () => {
    img.classList.add('shake-animation');
    setTimeout(() => {
        checkQuestion()
    }, 1000);
}

img.addEventListener('click', shakeImg)