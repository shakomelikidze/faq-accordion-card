const question = document.querySelectorAll('.question-box')

question.forEach(element => {
    const button = element.querySelector('.question')
    const rotateArrow = element.querySelector('.arrow-button')
    button.addEventListener('click', () => {
        button.nextElementSibling.classList.toggle('answer-styles')
        rotateArrow.classList.toggle('rotate')
    })
});




