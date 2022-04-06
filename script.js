var displayBlock = document.querySelector('.display-block')
var actionEnter = document.querySelector('.action-enter')
var keyPara = document.querySelector('.bottom-content.key')
var locationPara = document.querySelector('.bottom-content.location')
var whichPara = document.querySelector('.bottom-content.which')
var codePara = document.querySelector('.bottom-content.code')


document.addEventListener('keydown', function(e){
    displayBlock.classList.remove('hide');
    actionEnter.classList.add('hide');
    keyPara.innerText = e.key;
    locationPara.innerText = e.location;
    whichPara.innerText = e.which;
    codePara.innerText = e.code;
})