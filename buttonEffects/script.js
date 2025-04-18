const textBlock = document.createElement('div');

textBlock.id = 'mainContainer';

textBlock.style.margin = '0 auto';
textBlock.style.width = '60%';
textBlock.style.display = 'flex';
textBlock.style.flexDirection = 'column';
textBlock.style.justifyContent = 'space-between';
textBlock.style.alignItems = 'center';

textBlock.style.backgroundColor = '#d9ed92';
textBlock.style.color = '#168aad';
textBlock.style.border  = '2px solid #168aad';
textBlock.style.borderRadius = '10px';


const title = document.createElement('h1');

title.style.fontSize = '20px';
title.style.fontWeight = 'semibold';

title.textContent = 'Тестировщик ПО. Домашняя работа №9';

const text = document.createElement('textarea');

text.style.marginBottom = '20px';
text.style.width = '30%';
text.style.fontSize = '15px';
text.style.backgroundColor = '#b5e48c';
text.style.color = '#168aad';

text.textContent = 'Добрый день! Нажмите кнопку и поменяйте цвет картинки))';
text.disabled = 'true';

const button = document.createElement('button');

button.style.marginBottom = '20px';
button.style.width = '20%';
button.style.height = '30px';
button.style.backgroundColor = '#168aad';
button.style.color = '#d9ed92';

button.textContent = 'Нажать';

button.addEventListener('click', () => {
    
    let mainContainer = document.getElementById('mainContainer');
    if (mainContainer.style.backgroundColor == 'rgb(217, 237, 146)') {
        mainContainer.style.backgroundColor = '#c77dff';
        mainContainer.style.color = '#7b2cbf';
        mainContainer.style.border = '2px solid #240046';
        text.style.backgroundColor = '#e0aaff';
        text.style.color = '#240046';
        button.style.backgroundColor = '#240046';
        button.style.color = '#c77dff';
    }
    else {
        textBlock.style.backgroundColor = '#d9ed92';
        textBlock.style.color = '#168aad';
        textBlock.style.border  = '2px solid #168aad';

        text.style.backgroundColor = '#b5e48c';
        text.style.color = '#168aad';
        button.style.backgroundColor = '#168aad';
        button.style.color = '#d9ed92';
    }
});


textBlock.appendChild(title);
textBlock.appendChild(text);
textBlock.appendChild(button);

document.body.appendChild(textBlock);