let allInputs = Array.from(document.querySelectorAll('input'));
let headerSpan = document.querySelector('.header span');

let arrKey; 
let mainText; 

function start() {
    arrKey = ["", "", "", "", "", "", "", "", ""];
    mainText = 'x';
    headerSpan.innerHTML = mainText;

    allInputs.forEach((input, index) => {
        input.value = '';
        input.disabled = false;

        input.onclick = () => {
            if (input.value === "") {
                input.value = mainText;
                arrKey[index] = mainText;
                mainText = mainText === 'x' ? 'o' : 'x';
                headerSpan.innerHTML = mainText;
                // console.log(arrKey);
                equal(arrKey);
            }
        };
    });
}

function resetInputs() {
    start(); 
    console.log("replay game");
}

function equal(arrKey) {
    const winPatterns = [
        [0, 1, 2], [3, 4, 5], [6, 7, 8], 
        [0, 3, 6], [1, 4, 7], [2, 5, 8], 
        [0, 4, 8], [2, 4, 6] 
    ];

    for (let pattern of winPatterns) {
        let [a, b, c] = pattern;
        
        if (arrKey[a] !== "" && arrKey[a] === arrKey[b] && arrKey[b] === arrKey[c]) {
            let winner = arrKey[a]; 
            // console.log(`the winner is ${winner}`);
            alert(`the winner is ${winner}`);

            allInputs.forEach(input => input.disabled = true);

            return; 
        }
    }
}

start();

document.querySelector('.reset').onclick = resetInputs;
