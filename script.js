function initTabNav(){
    const tabMenu = document.querySelectorAll('.js-tabmenu li');
    const tabContent = document.querySelectorAll('.js-tabcontent section');
    tabContent[0].classList.add('ativo');
    


    if(tabContent.length && tabContent.length){
        function activeTab(index){
            tabContent.forEach(section => {
                section.classList.remove('ativo')
            });
            tabContent[index].classList.add('ativo');
        }

        tabMenu.forEach((itemMenu, index) =>{
        itemMenu.addEventListener('click', () => {
        activeTab(index)});
        })
    }
}

initTabNav();

function activeAccordion(){
 const accordion = document.querySelectorAll('.js-accordion dt');
 const activeClass = 'ativo';


 accordion[0].classList.add(activeClass);
 accordion[0].nextElementSibling.classList.add(activeClass);
 

 function adicionarAtivo(){
    this.nextElementSibling.classList.toggle(activeClass);
    this.classList.toggle(activeClass);
 }

 accordion.forEach((item) => {
    item.addEventListener('click', adicionarAtivo)
 })
}

activeAccordion();


function initScrollSuave(){
    const linksInternos = document.querySelectorAll('.js-menu a[href^="#"]')

    function scrollToSection(event){
        event.preventDefault();
        const href = this.getAttribute('href');
        const section = document.querySelector(href);

        section.scrollIntoView({
            behavior: 'smooth',
            block: 'start',
        });
    }

    linksInternos.forEach((link) => {
        link.addEventListener('click', scrollToSection)
    });
}

initScrollSuave();

