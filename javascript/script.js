
function answers(element) {
    let options = element.parentNode.querySelectorAll('li');
    options.forEach(option => {
        option.style.backgroundColor = 'rgb(177, 232, 240)';
        option.style.color = 'black';
        option.querySelector('span').style.backgroundColor = 'rgb(122, 230, 247)';
    });
    if (element.classList.contains("answer")) {
        element.style.backgroundColor = "green";
        element.style.color = "white";
        element.querySelector('span').style.backgroundColor = "green";
    } else {
        element.style.backgroundColor = "red";
        element.style.color = "white";
        element.querySelector('span').style.backgroundColor = "red";
    }
}
