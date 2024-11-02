const navLinkEl = document.querySelectorAll(".navlink");

const body = document.body;
let lastScroll = 0;

navLinkEl.forEach(navLinkEl =>{
    navLinkEl.addEventListener('click', () => {
        document.querySelector('.active')?.classList.remove('active');
        navLinkEl.classList.add('active');
    });
});


window.addEventListener('scroll', () => {
    const currentScroll = console.log(window.pageYOffset);

    if(currentScroll <= 0){
        body.classList.remove('scroll-up')    
    }

    if(currentScroll > lastScroll && !body.classList.contains('scroll-down')){
        body.classList.remove('scroll-up');
        body.classList.add('scroll-down')
    }

    lastScroll = currentScroll;
    
})

// console.log(!"Helllo");
// console.log(+false);

