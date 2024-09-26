const input = document.querySelector('#favchap');
const button = document.querySelector('button');
const list = document.querySelector('#list');
const li = document.createElement('li')
const deleteButton = document.createElement('button')



button.addEventListener('click', function () {
    let inputValue = input.value.trim();

    if (inputValue === '') {
        alert('Input cannot be blank!');
        input.focus();
        return;
    }


    const li = document.createElement('li');
    li.textContent = inputValue;


    const deleteButton = document.createElement('button');
    deleteButton.textContent = '❌';
    li.append(deleteButton);

    list.append(li);


    deleteButton.addEventListener('click', function () {
        list.removeChild(li);
        input.focus();
    });


    input.value = '';
    input.focus();
});


