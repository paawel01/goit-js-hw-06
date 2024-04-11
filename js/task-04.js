const decrementButton = document.querySelector('[data-action="decrement"]');
  const incrementButton = document.querySelector('[data-action="increment"]');
  const valueSpan = document.getElementById('value');

let counterValue = 0;
function updateCounter() {
    valueSpan.textContent = counterValue;
}
decrementButton.addEventListener('click', () => {
    counterValue--;
    updateCounter();
});
incrementButton.addEventListener('click', () => {
    counterValue++;
    updateCounter();
});

updateCounter();



