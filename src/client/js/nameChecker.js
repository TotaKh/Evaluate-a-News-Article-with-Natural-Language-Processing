function checkURL(inputText) {
    console.log("::: Running checkForName :::", inputText);

     // check what text was put into the form field
    let formText = document.getElementById('name').value
    if (formText == ''){
        return false;
    }
}

export { checkURL }
