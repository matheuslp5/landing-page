
const items = [
    {
        image: '/magic-tree-animate.svg', 
        title: 'Grimoire of Souls returns!',
        description: 'Now available on your favorite Apple device.',
        link: '#' 
    }
    
]

const config = {
    autoplay: true,
        autoplaySpeed: 5000,
        speed: 500,
        cssEase: 'linear'
}


window.onload = () => {
    document.querySelector('#carousel').carousel(items, config)

}

