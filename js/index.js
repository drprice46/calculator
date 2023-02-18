//обращение кнопок с js в html
const inputANode = document.querySelector('.js-input-a');
const inputBNode = document.querySelector('.js-input-b');
const selectNode = document.querySelector('.js-input-select-operation');
const btnResult = document.querySelector('.js-btn-result');
const outputNode = document.querySelector('.js-output');

btnResult.addEventListener('click', function() {
    const a = Number(inputANode.value);
    const b = Number(inputBNode.value);
    const operation = selectNode.value;

    const result = calculator({
        a,
        b,
        operation
    });
    outputNode.innerHTML = result;
});