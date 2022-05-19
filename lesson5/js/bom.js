const inputs = document.querySelector('#favchap');
const button = document.querySelector('#adchap');
const list = document.querySelector('.list');

button.addEventListener('click', () =>{
    if (inputs.value.length >= 6) {
        const listItem = document.createElement('li');
        const listText = document.createElement('span');
        const listBtn = document.createElement('button');
        const chap = inputs.value;
        inputs.value= '';
        
        listItem.appendChild(listText);
        listText.textContent = chap

        listItem.appendChild(listBtn)
        listBtn.textContent = '❌';
        list.appendChild(listItem);

        listBtn.addEventListener('click', () => {
            list.removeChild(listItem);
        
        });
        inputs.focus();
        
    }
});