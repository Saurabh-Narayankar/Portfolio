const hero = document.getElementById('hero');
let activeIndex = 0;

Array.from(document.getElementsByClassName('section-navigation'))
    .forEach((item, index) => {
        item.onmouseover = () => {
            hero.dataset.activeIndex = index
        }
    })


const slides = document.getElementsByTagName("article");
    
const handleLeftClick = () => {
    const nextIndex = activeIndex - 1 >= 0 ? activeIndex - 1 : slides.length - 1;

    const currentSlide = document.querySelector(`[data-index="${activeIndex}"]`),
            nextSlide = document.querySelector(`[data-index="${nextIndex}"]`);
            
    currentSlide.dataset.status = "after";

    nextSlide.dataset.status = "becoming-active-from-before";

    setTimeout(() => {
        nextSlide.dataset.status = "active";
        activeIndex = nextIndex;
    });
}
    
const handleRightClick = () => {
    const nextIndex = activeIndex + 1 <= slides.length - 1 ? activeIndex + 1 : 0;

    const currentSlide = document.querySelector(`[data-index="${activeIndex}"]`),
        nextSlide = document.querySelector(`[data-index="${nextIndex}"]`);

    currentSlide.dataset.status = "before";

    nextSlide.dataset.status = "becoming-active-from-after";

    setTimeout(() => {
        nextSlide.dataset.status = "active";
        activeIndex = nextIndex;
    });
}


const sendEmail = () => {
    let params = {
        Name: document.getElementById('name').value,
        Email: document.getElementById('email').value,
        Subject: document.getElementById('subject').value,
        Message: document.getElementById('message').value
    }

    const serviceID = 'service_jkbt04j'
    const templateID = 'template_e2qwn7p'

emailjs.send(serviceID, templateID, params).then(
    res => {
        document.getElementById('name').value = '';
        document.getElementById('email').value = '';
        document.getElementById('subject').value = '';
        document.getElementById('message').value = '';
        alert('message sent successfully')
    }).catch(err => console.alert('something went wrong'))
}
