import {checkURL} from './nameChecker';

function handleSubmit(event) {
    event.preventDefault()

    let formText = document.getElementById('name').value
    const check = checkURL(formText)
    if (check == false) {
        alert('Invalid value')
        return;
    } else {

        console.log("::: Form Submitted :::")
        fetch('http://localhost:8081/check', {
            method: 'post',
            credentials: 'same-origin',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({ url: formText })
        })
            .then(res => res.json())
            .then(function (res) {
                document.getElementById('results').innerHTML =
                    `<div>text:${res.text}</div>
                    <div>score_tag: ${res.score_tag}</div>
                    <div>agreement: ${res.agreement}</div>
                    <div>subjectivity: ${res.subjectivity}</div>
                    <div>confidence: ${res.confidence}</div>
                    <div>irony: ${res.irony}</div>`
            })
    }
}

export { handleSubmit }
