let isModalOpen = false;
let contrastToggle = false;

function toggleContrast() {
    contrastToggle = !contrastToggle;
    if (contrastToggle) {

        document.body.classList += " dark-theme"
    }
    else {
        document.body.classList.remove("dark-theme")
    }
}

function contact(event) {
    event.preventDefault();
    const loading = document.querySelector('.modal__overlay--loading');
    const success = document.querySelector('.modal__overlay--success');
loading.classList += " modal__overlay--visible";
      
    
    
    emailjs
    .sendForm(
        'service_n631ig9',
        'template_q2u66dt',
        event.target,
        'LloBreoL9EHQZXW46'
    ).then(() => { 
        
        loading.classList.remove("modal__overlay--visible");
        success.classList += " modal__overlay--visible";
    }).catch(() => {
        loading.classList.remove("modal__overlay--visible");
        alert(
            "The email service is temporarily unavailable. Please contact me directly on email@email.com"
        );
    })

loading.classList += " modal__overlay--visible"

  setTimeout(() => {
    loading.classList.remove("modal__overlay--visible");
    success.classList += " modal__overlay--visible";
    console.log('it worked 1')
}, 1000);
    

}


function toggleModal() {
    if (isModalOpen) {
        isModalOpen = false;
        return document.body.classList.remove("modal--open")
    }
    isModalOpen = true;
    // toggle modal 
    document.body.classList += " modal--open"
    
}