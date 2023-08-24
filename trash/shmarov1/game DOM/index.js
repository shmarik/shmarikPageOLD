//! кнопка начать игру
const $start = document.querySelector('#start')

//! Поле для игры
const $game = document.querySelector('#game')

//! Элементы таймеров для игры
const $timeHeader = document.querySelector('#time-header')
const $time = document.querySelector('#time')

//! элемент input (где указываем время игры)
const $gameTimeInput = document.querySelector('#game-time')

//!Элементы результата
const $resultHeader = document.querySelector('#result-header')
const $result = document.querySelector ('#result')

//? Переменные состояния игры

let score = 0 
let isGameStarted = false

//? обработчики событий
$start.addEventListener('click', startGame)
$game.addEventListener('click', handleBoxClick)

// ! Функции для показа и скрытия html элементов
function hideElement($el) {
    $el.classList.add('hide')
}
function showElement($el) {
    $el.classList.remove('hide')
}

function startGame () {
    isGameStarted = true
    score = 0
    
    $time.textContent = +$gameTimeInput.value
    hideElement($resultHeader)
    showElement($timeHeader)

    hideElement($start)

    $game.style.backgroundColor = '#fff'

    let interval = setInterval(
        function() {
            let time = parseFloat($time.textContent)
            
            if (time <= 0) {
                clearInterval(interval)

                isGameStarted = false
                hideElement($timeHeader)
                showElement($start)
                showElement($resultHeader)
                $game.innerHTML = ''
                $result.textContent = +score
                $game.style.backgroundColor = '#ccc'

            } else {
                $time.textContent = (time - 0.1).toFixed(1)
            }
        }, 100 )
        renderBox()
}

function handleBoxClick(event){
    if (!isGameStarted) { return }

    if (event.target.dataset.box) {
        score = score + 1
        renderBox()
    
    }
}

function getRandomInt(min, max) {
    return Math.floor(Math.random() * (max - min)) + min
}

function renderBox (){
    $game.innerHTML = ''
    let box = document.createElement('DIV')
    let boxSize = getRandomInt(20,150)
    let gameSize = $game.getBoundingClientRect()
    let maxTop = gameSize.height - boxSize
    let maxLeft = gameSize.width - boxSize

    box.style.height = boxSize + 'px'
    box.style.width = boxSize + 'px'

    box.style.position = 'absolute'

    box.style.backgroundColor = '#ff0000'

    box.style.left = getRandomInt(0,maxLeft) + 'px'
    box.style.top = getRandomInt(0,maxTop) + 'px'

    box.style.cursor = 'pointer'

    box.setAttribute('data-box', 'true')

    $game.insertAdjacentElement('afterbegin', box)
}


function getColor(){
    let colors = ['#B22222', 'FF00FF','FF0000','0000FF','DAA520']
    return colors[getRandomInt(0, colors.length)]
}