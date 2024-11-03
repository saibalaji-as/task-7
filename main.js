const playGround = document.getElementById('play-ground');
const btn = document.getElementById('btn');
let imgList = [
    'assets/smiley-1.png',
    'assets/smiley-2.png',
    'assets/smiley-3.png',
    'assets/smiley-4.png',
    'assets/smiley-5.png',
    'assets/smiley-6.png',
    'assets/smiley-7.png',
    'assets/smiley-1.png',
    'assets/smiley-2.png',
    'assets/smiley-3.png',
    'assets/smiley-4.png',
    'assets/smiley-5.png',
    'assets/smiley-6.png',
    'assets/smiley-7.png',
];

let firstCard, secondCard;
let hasFlippedCard = false;
let matchedPairs = 0;

function constructDefaultDatas() {

    const desc = document.getElementById('desc');
    desc.style.display = 'none';
    playGround.style.display = 'flex';
    btn.textContent = 'Reset';
    playGround.innerHTML = '';
    imgList = shuffleArray(imgList);

    for (let i = 0; i < 14; i++) {
        const card = document.createElement('div');
        card.classList.add('card');
        card.id = i;
        card.style.cursor = 'pointer';
        card.style.backgroundImage = `url(assets/star.png)`;
        card.dataset.name = imgList[i];
        card.addEventListener('click', function onCardClick() {

            if (!hasFlippedCard) {
                firstCard = card;
                hasFlippedCard = true;
            } else {
                secondCard = card;
            }
            card.style.backgroundImage = `url(${imgList[i]})`;
            
            if (firstCard && secondCard) {
                setTimeout(() => {
                    if (firstCard.dataset.name === secondCard.dataset.name) {
                        firstCard.backgroundColor = 'green';
                        secondCard.backgroundColor = 'green';
                        matchedPairs++;
                        if (matchedPairs === imgList.length / 2) {
                            alert('Congratulations you won!');
                            window.location.reload();
                        }
                    } else {
                        firstCard.style.backgroundImage = `url(assets/star.png)`;
                        secondCard.style.backgroundImage = `url(assets/star.png)`;
                    }
                    firstCard = undefined;
                    secondCard = undefined;
                    hasFlippedCard = false;
                }, 500);
            }
        })
        playGround.appendChild(card);
    }
}

function shuffleArray(array) {
    for (let i = array.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [array[i], array[j]] = [array[j], array[i]];
    }
    return array;
}