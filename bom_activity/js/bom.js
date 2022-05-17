const inputs = document.querySelector('#favchap');
const button = document.querySelector('#adchap');
const list = document.querySelector('.list');

button.addEventListener('click', () =>{
    if (inputs.value !='') {
        const listItem = document.createElement('li');
        const listText = document.createElement('span');
        const listBtn = document.createElement('button');
        const chap = inputs.value;
        inputs.value= '';
        
        listItem.appendChild(listText);
        listText.textContent = chap

        listItem.appendChild(listBtn)
        listBtn.textContent = 'Delete';
        list.appendChild(listItem);

        listBtn.addEventListener('click', () => {
            list.removeChild(listItem);
        
        });
        inputs.focus();
        
    }
});