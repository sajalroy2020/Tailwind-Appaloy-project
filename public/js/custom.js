const setup = () => {
    return {
        isNavOpen: false,

        billPlan: 'monthly',

        plans: [
        {
            name: 'Easy',
            discretion: 'All the basics for businesses that are just getting started.',
            price: {
            monthly: 29,
            annually: 29 * 12 - 199,
            },
            features: ['One project', 'Your dashboard'],
        },
        {
            name: 'Basic',
            discretion: 'Better for growing businesses that want more customers.',
            price: {
            monthly: 59,
            annually: 59 * 12 - 100,
            },
            features: ['Two projects', 'Your dashboard', 'Components included', 'Advanced charts'],
        },
        {
            name: 'Custom',
            discretion: 'Advanced features for pros who need more customization.',
            price: {
            monthly: 139,
            annually: 139 * 12 - 100,
            },
            features: ['Unlimited projects', 'Your dashboard', '+300 Components', 'Chat support'],
        },
        ],
    }
}


// Faq js

let faq = document.getElementsByClassName("faq-page");
let i;
for (i = 0; i < faq.length; i++) {
    faq[i].addEventListener("click", function () {
        let body = this.nextElementSibling;
        body.classList.toggle("hidden")
    });
}

// nav dropdown
let dropdown = document.getElementById("dropdown");
dropdown.addEventListener("click", function(){
    dropdown.nextElementSibling.classList.toggle("hidden")
}); 

// tab code

function showDiv(event,divIndex) {
    let tabClick = document.getElementsByClassName("tabShow");
    tabLinkClick(event)
    for (let i = 0; i < tabClick.length; i++) {
        if(i ==divIndex){
            tabClick[i].classList.remove('hidden')
        }else{
            tabClick[i].classList.add('hidden')
        }
    }
}
        



function tabLinkClick(event){
    let tablinks = document.querySelectorAll(".tablinks");
    tablinks.forEach(function(value){
        value.classList.remove('bg-color-right')
        value.classList.remove('text-white')
        value.classList.add('hover:text-white')
    })
    event.target.classList.add('bg-color-right')
    event.target.classList.add('text-white')
    event.target.classList.remove('hover:text-white')
}
