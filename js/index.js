const container = document.querySelector('.rating');
const items = container.querySelectorAll('rating-item');
container.onclick = e => {
    const elClass = e.target.classList;
    if (!elClass.contain('active')) {
        items.forEach(
            item => item.classList.remove('active')
        );
        console.log(e.target.getAttribute("data-rate"));
        elClass.add('active');
    }
};