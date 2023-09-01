if (document.readyState !== 'loading') {
    main();
} 
else {
    document.addEventListener('DOMContentLoaded', function () {
        main();
    });
}

function selectInput() {
    document.getElementById('language').focus();
}

function formatInput(inputString) {

    
    let randomCharacters = ['f', 'th', 'ch'];
    let startRandomCharacters = ['Th', 'Ch'];
    let capsRandomCharacters = ['F', 'TH', 'CH'];
    let replaceCharacters = [].concat(randomCharacters, startRandomCharacters, capsRandomCharacters);

    const tempChar1 = '[[1]]';
    const tempChar2 = '[[2]]';
    const tempChar3 = '[[3]]';
    const newChar = 'ph';
    const startNewChar = 'Ph';
    const capsNewChar = 'PH';

    for (let i = 0; i < replaceCharacters.length; i++) {

        let current = replaceCharacters[i];
        let temp = 'placeholder'; 

        if (randomCharacters.includes(current)) {
            temp = tempChar1;
        }
        if (startRandomCharacters.includes(current)) {
            temp = tempChar2;
        }
        if (capsRandomCharacters.includes(current)) {
            temp = tempChar3;
        }

        inputString = inputString.replaceAll(current, temp);
    }

    let totalWords = inputString.split(' ');
    for (i = 0; i < totalWords.length; i++) {
        current = totalWords[i];
        if (current.includes(newChar)) {
            totalWords[i] = current.replaceAll(newChar, randomCharacters[Math.floor(Math.random() * randomCharacters.length)]);
        }
        if (current.includes(startNewChar)) {
            totalWords[i] = current.replaceAll(startNewChar, startRandomCharacters[Math.floor(Math.random() * startRandomCharacters.length)]);
        }
        if (current.includes(capsNewChar)) {
            totalWords[i] = current.replaceAll(capsNewChar, capsRandomCharacters[Math.floor(Math.random() * capsRandomCharacters.length)]);
        }
    }

    totalWords = totalWords.join(' ');
    totalWords = totalWords.replaceAll(tempChar1, newChar);
    totalWords = totalWords.replaceAll(tempChar2, startNewChar);
    totalWords = totalWords.replaceAll(tempChar3, capsNewChar);

    sendToClipboard(totalWords);

}

function main() {

    selectInput();

    document.getElementById('format').addEventListener('click', () => {
        formatInput(document.getElementById('language').value);
    });
}

function sendToClipboard(Text) {

    if (!navigator.clipboard) {
        alert('Clipboard navigator method is not available.');
        return;
    }

    if (Text == '') {
        alert('No data to send to clipboard.');
        return;
    }

    navigator.clipboard.writeText(Text).then(function() {
        alert('Copied.');
    }, function(e) {
        alert('Error');
    });
}