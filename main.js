const open = document.querySelector('#checkbox')


open.addEventListener('click', (event) =>{
    if(event.target.checked == true){
        document.querySelector('.header').classList.toggle('isActive')
        document.querySelector('.header-content .logo').classList.toggle('isActive')
        document.querySelector('.header-content .open').classList.toggle('isActive')
        document.querySelector('.menuppal').classList.toggle('isActive')
        event.preventDefault()
    }
})

const element = document.querySelector('#nav-tab')

element.addEventListener('click', (event) =>{
    let activeTabs = document.querySelectorAll('.active')

    //desactivate existing active tab and panel
    activeTabs.forEach(function(tab){
        tab.className = tab.className.replace('active', '')
        
    })

    //activate new tab and panel
    event.target.parentElement.className += ' active'
    document.getElementById(event.target.href.split('#')[1]).className += ' active'
})

const answers = document.querySelector('#check')
const answers2 = document.querySelector('#check2')
const answers3 = document.querySelector('#check3')
const answers4 = document.querySelector('#check4')

answers.addEventListener('click', (event) =>{
    if(event.target.checked == true){
        document.querySelector('.answer').classList.toggle('active')
        document.querySelector('.arrow').classList.toggle('active')
        event.preventDefault()
    }
})
answers2.addEventListener('click', event =>{
    if(event.target.checked == true){
        document.querySelector('.question-2 .answer').classList.toggle('active')
        document.querySelector('.question-2 .arrow').classList.toggle('active')
        event.preventDefault()
    }
})

answers3.addEventListener('click', event =>{
    if(event.target.checked == true){
        document.querySelector('.question-3 .answer').classList.toggle('active')
        document.querySelector('.question-3 .arrow').classList.toggle('active')
        event.preventDefault()
    }
})

answers4.addEventListener('click', event =>{
    if(event.target.checked == true){
        document.querySelector('.question-4 .answer').classList.toggle('active')
        document.querySelector('.question-4 .arrow').classList.toggle('active')
        event.preventDefault()
    }
})
