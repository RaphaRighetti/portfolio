const tabelaCores = document.getElementById('color-palette');
const arrayCores = document.getElementsByClassName('color');
const pixelBoard = document.getElementById('pixel-board');
const pixels = document.getElementsByClassName('pixel');
const buttonClear = document.getElementById('clear-board');
const boardSizeInput = document.getElementById('board-size');
const vqvButton = document.getElementById('generate-board');
const randomColor = document.getElementById('randomColor');

function selectColor(e) {
  for (let i = 0; i < arrayCores.length; i += 1) {
    if (arrayCores[i] !== e.target) {
      arrayCores[i].classList.remove('selected');
    } else if (arrayCores[i] === e.target) {
      e.target.classList.add('selected');
    }
  }
}

function selectColorCondition(e) {
  if (e.target !== tabelaCores) {
    selectColor(e);
  }
}

tabelaCores.addEventListener('click', selectColorCondition);

function pintar(e) {
  if (e.target !== pixelBoard) {
    const selecionado = document.querySelector('.selected');
    e.target.className = `pixel ${selecionado.classList[1]}`;
    e.target.style.backgroundColor = selecionado.style.backgroundColor;
  }
}

pixelBoard.addEventListener('click', pintar);

function clearBoard() {
  for (let i = 0; i < pixels.length; i += 1) {
    pixels[i].className = 'pixel';
    pixels[i].style.backgroundColor = '';
  }
}

buttonClear.addEventListener('click', clearBoard);

function criaPixeis() {
  pixelBoard.innerHTML = '';
  const numWidth = Number(boardSizeInput.value) * 40 + Number(boardSizeInput.value) * 2;
  pixelBoard.style.width = `${numWidth}px`;
  const repeticoes = Number(boardSizeInput.value) * Number(boardSizeInput.value);
  for (let i = 0; i < repeticoes; i += 1) {
    const newPixel = document.createElement('div');
    newPixel.className = 'pixel';
    pixelBoard.appendChild(newPixel);
  }
}

function limitBoard() {
  if (Number(boardSizeInput.value) < 5) {
    boardSizeInput.value = 5;
  } else if (Number(boardSizeInput.value) > 50) {
    boardSizeInput.value = 50;
  }
}

function quantidadePixels() {
  if ((Number(boardSizeInput.value) <= 0)
  || Number.isInteger(Number(boardSizeInput.value)) === false) {
    window.alert('Board inválido!');
    boardSizeInput.value = '';
  } else {
    limitBoard();
    criaPixeis();
    boardSizeInput.value = '';
  }
}

vqvButton.addEventListener('click', quantidadePixels);

function generateColor() {
  const letters = '0123456789ABCDEF';
  let color = '#';
  for (let i = 0; i < 6; i += 1) {
    color += letters[Math.floor(Math.random() * 16)];
  }
  return color;
}

randomColor.style.backgroundColor = generateColor();
