function userScroll(){
    const navbar  = document.querySelector('.navbar');

    window.addEventListener('scroll',()=>{

        if(window.scrollY > 49)
        {

            navbar.classList.add('bg-dark');
            navbar.classList.add('navbar-sticky');
        }
    else
    {

        navbar.classList.remove('bg-dark');
        navbar.classList.remove('navbar-sticky');
    }

    })
}

window.addEventListener('DOMContentLoaded',userScroll);


