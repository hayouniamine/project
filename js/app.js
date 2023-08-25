let openShopping = document.querySelector('.shopping');
let closeShopping = document.querySelector('.closeshopping');
let list = document.querySelector('.list');
let listCard = document.querySelector('.listCard');
let body = document.querySelector('body');
let total = document.querySelector('.total');
let quantity = document.querySelector('.quantity');

openShopping.addEventListener('click',()=>{
    body.classList.remove('active');
})
let products=[
    {
        id: 1,
        name:'FinalMouse starlight-12',
        image:'../assets/namoussa2',
        price:740
    },
    {
        id:2,
        name:'FinalMouse GOLD',
        image:'../assets/namoussa',
        price:785
    },
    {
        id:3,
        name:'FinalMouse starlight pro',
        image:'../assets/Pakistan',
        price:364
    },
    {
        id:4,
        name:'Razer Viper V2Pro',
        image:'../assets/mousenew',
        price:138
    },
    {
        id:5,
        name:'Logitech PROX Slight',
        image:'../assets/mid',
        price:150
    },
];
let listCards=[];
function initApp(){
    products.forEach((value,key)=>{
        let newDiv = document.createElement('div');
        newDiv.innerHTML='
        <img src ="image/${value.image}"/>
        <div class="title">${value.name}</div>
        <div class="price">${value.price.toLocaleString()}</div>
        ';
        list.appendChild(newDiv);
    })
}