function changePassword(input) {

    let text = input.shift();

    for (let index = 0; index < input.length; index++) {
        let currentElement = input[index].split(' ');
        let command = currentElement[0];

        if (command === 'Done') {
            break;
        }

        switch (command) {
            case 'Change':
                let oldChar = currentElement[1];
                let newChar = currentElement[2];

                while (text.includes(oldChar)) {
                    text = text.replace(oldChar, newChar);
                }
                console.log(text);
                break;

            case 'Includes':
                let checkString = currentElement[1];

                if (text.includes(checkString)) {
                    console.log('True');
                }
                else {
                    console.log('False');
                }
                break;

            case 'End':
                let endElement = currentElement[1];

                if (text.endsWith(endElement)) {
                    console.log('True');
                }
                else {
                    console.log('False');
                }
                break;

            case 'Uppercase':
                text = text.toUpperCase();
                console.log(text);
                break;

            case 'FindIndex':
                let needChar = currentElement[1];

                for (let i = 0; i < text.length; i++) {
                    let currentChar = text[i];

                    if (currentChar === needChar) {
                        console.log(i);
                        break;
                    }
                }
                break;

            case 'Cut':
                let stratCutElement = currentElement[1];
                let endCutElement = currentElement[2];
                let resultCut = Array.from(text).splice(stratCutElement, endCutElement);

                console.log(resultCut.join(''));
                break;
        }
    }
}
changePassword(
    [
        "//Th1s 1s my str1ng!//",
        "Change 1 i",
        "Includes string",
        "End my",
        "Uppercase",
        "FindIndex I",
        "Cut 5 5",
        "Done"
    ]
)