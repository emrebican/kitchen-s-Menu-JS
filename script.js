const menu = [
    // -------------------- FRANCE ---------------------- //
    {
        id: 1,
        title: 'Steak Frites',
        country: 'France',
        category: 'Main Course',
        img: 'http://img.taste.com.au/Ww6aTRDw/taste/2016/11/15-french-meals-you-have-to-try-image-1-67790-1.jpg',
        description: 'Voila, this simple, yet impressive recipe is inspired by French bistro cuisine.',
        price: '42€'
    },
    {
        id: 2,
        title: 'Chicken Confit',
        country: 'France',
        category: 'Main Course',
        img: 'http://img.taste.com.au/GoVw_Vly/taste/2016/11/15-french-meals-you-have-to-try-image-2-67791-1.jpg',
        description: 'In this classic confit, the chicken is salted and seasoned with herbs, then slowly cooked in olive oil to make it rich and tender.',
        price: '45€'
    },
    {
        id: 3,
        title: 'French Onion Soup',
        country: 'France',
        category: 'Soup',
        img: 'http://img.taste.com.au/K9-ik40-/taste/2016/11/15-french-meals-you-have-to-try-image-3-67793-1.jpg',
        description: 'See out the winter with this fragrant French onion soup. Don’t forget the cheesy croutons.',
        price: '36€'
    },
    {
        id: 4,
        title: 'Bouillabaisse',
        country: 'France',
        category: 'Soup',
        img: 'http://img.taste.com.au/cTP1rF6D/taste/2016/11/15-french-meals-you-have-to-try-image-4-67795-1.jpg',
        description: 'This traditional French fish soup is infused with saffron, orange, thyme and chilli.',
        price: '38€'
    },
    {
        id: 5,
        title: 'Salmon en Papillote',
        country: 'France',
        category: 'Main Course',
        img: 'http://img.taste.com.au/MGUIm_FL/taste/2016/11/15-french-meals-you-have-to-try-image-5-67798-1.jpg',
        description: 'This clever technique of wrapping fish in paper before cooking ensures that all the moisture and flavours are locked in.',
        price: '42€'
    },
    {
        id: 6,
        title: 'Quiche Lorraine',
        country: 'France',
        category: 'Main Course',
        img: 'http://img.taste.com.au/ttOdQiaW/taste/2016/11/15-french-meals-you-have-to-try-image-6-67801-1.jpg',
        description: 'This quiche Lorraine is one of the most popular recipes on taste.com.au. Originally quiche Lorraine was an open custard pie with smoked bacon.',
        price: '52€'
    },
    {
        id: 7,
        title: 'Lamb Shank Navarin',
        country: 'France',
        category: 'Main Course',
        img: 'http://img.taste.com.au/CgPQ0fgr/taste/2016/11/15-french-meals-you-have-to-try-image-10-67806-1.jpg',
        description: 'Navarin is a French lamb ragout (or stew). The lamb is cooked low and slow until it melts in the mouth.',
        price: '65€'
    },
    {
        id: 8,
        title: 'Hazelnut Dacquoise',
        country: 'France',
        category: 'Dessert',
        img: 'http://img.taste.com.au/C7Z8VCIQ/taste/2016/11/15-french-meals-you-have-to-try-image-11-67810-1.jpg',
        description: 'With layers of nutty meringue and rich whipped filling, the classic French cake dacquoise – pronounced dah-kwahz- is so impressive.',
        price: '22€'
    },
    {
        id: 9,
        title: 'Tarte Tatin',
        country: 'France',
        category: 'Dessert',
        img: 'http://img.taste.com.au/ghwpjKi8/taste/2016/11/15-french-meals-you-have-to-try-image-13-67814-1.jpg',
        description: 'Was this creation the result of a mistake in the kitchen or did the Tatin sisters plan on baking their apple tart upside down?',
        price: '25€'
    },
    {
        id: 10,
        title: 'Paris-Brest',
        country: 'France',
        category: 'Dessert',
        img: 'http://img.taste.com.au/6oJ9iosF/taste/2016/11/15-french-meals-you-have-to-try-image-15-67816-1.jpg',
        description: 'Cousin to the croquembouche, this custard-frilled choux pastry ring is like a giant chocolate eclair.',
        price: '28€'
    },
    // -------------------- SPAIN ---------------------- //
    {
        id: 11,
        title: 'Gazpacho',
        country: 'Spain',
        category: 'Main Course',
        img: 'https://images.immediate.co.uk/production/volatile/sites/30/2020/08/salmorejo-0aacf51.jpg?quality=90&webp=true&fit=700,350',
        description: 'The reddest, ripest tomatoes, olive oil, garlic, bread, peppers and cucumber are blended until silky smooth, then chilled and poured into bowls or glasses.',
        price: '32€'
    },
    {
        id: 12,
        title: 'Paella',
        country: 'Spain',
        category: 'Main Course',
        img: 'https://images.immediate.co.uk/production/volatile/sites/30/2020/08/paella-main-28979d0.jpg?quality=90&webp=true&fit=700,350',
        description: 'In the Valencia region, they claim you can eat a different rice dish every day of the year, but let’s stick with the most traditional version for now.',
        price: '35€'
    },
    {
        id: 13,
        title: 'Tortilla Española',
        country: 'Spain',
        category: 'Main Course',
        img: 'https://images.immediate.co.uk/production/volatile/sites/30/2020/08/tortilla-6ff8c86.jpg?quality=90&webp=true&fit=700,350',
        description: 'Eggs, potatoes, onions… that’s it – and some purists even consider that adding onion is a gastronomic crime of the highest order. The Spanish omelette is so much more than the sum of its parts.',
        price: '32€'
    },
    {
        id: 14,
        title: 'Gambas al Ajillo',
        country: 'Spain',
        category: 'Main Course',
        img: 'https://images.immediate.co.uk/production/volatile/sites/30/2020/08/gambas-1419c7f.jpg?quality=90&webp=true&fit=700,350',
        description: 'You walk into a tapas bar, the barman is handing a customer an earthenware dish of sizzling prawns, the tantalising aroma hits your nostrils and you just have to order some too.',
        price: '36€'
    },
    {
        id: 15,
        title: 'Patatas Bravas',
        country: 'Spain',
        category: 'Main Course',
        img: 'https://images.immediate.co.uk/production/volatile/sites/30/2020/08/potatoe_bravas_20923-f9d2238.jpg?quality=90&webp=true&fit=700,350',
        description: 'Perhaps the most ubiquitous of tapas, patatas bravas vary quite a bit around the country, but all versions involve chunks of fried potato.',
        price: '42€'
    },
    {
        id: 16,
        title: 'Pisto',
        country: 'Spain',
        category: 'Main Course',
        img: 'https://images.immediate.co.uk/production/volatile/sites/30/2020/08/pisto-b89a070.jpg?quality=90&webp=true&fit=700,350',
        description: 'The Spanish version of ratatouille turns up all over the country in different guises, but is most typical in the towns and villages across the plains of La Mancha, south of Madrid.',
        price: '45€'
    },
    {
        id: 17,
        title: 'Caldo Gallego',
        country: 'Spain',
        category: 'Soup',
        img: 'https://cdn.tasteatlas.com//images/dishes/0702ad5a5bae470982b7ee347f1e75ef.jpg?w=905&h=510',
        description: 'This traditional Galician dish is hearty, inexpensive, and nourishing. Although the ingredients vary from one household.',
        price: '36€'
    },
    {
        id: 18,
        title: 'Sopa de Almendras',
        country: 'Spain',
        category: 'Soup',
        img: 'https://cdn.tasteatlas.com//images/dishes/01a7dfeed35e4322b31deeefa57ee9bb.jpg?w=905&h=510',
        description: 'The combination is mixed with the remaining stock and brought to a boil. After simmering for a short while, the soup is garnished with toasted almonds, chopped mint, or croutons.',
        price: '45€'
    },
    {
        id: 19,
        title: 'Flan',
        country: 'Spain',
        category: 'Dessert',
        img: 'https://www.thespruceeats.com/thmb/AS15eyL0vneQ0zvzvqljKaMGkro=/566x0/filters:no_upscale():max_bytes(150000):strip_icc():format(webp)/classic-vanilla-flan-recipe-3083004-hero-01-c35413e8d6934b109ba654bb6fad85dd.jpg',
        description: "This classic Spanish flan is made with a velvety vanilla egg custard, topped with a sweet and sticky caramel sauce. It’s one of the most popular desserts for a reason.",
        price: '23€'
    },
    {
        id: 20,
        title: 'Crema Catalana',
        country: 'Spain',
        category: 'Dessert',
        img: 'https://www.thespruceeats.com/thmb/-IhuwrW9M0Jb1ExD-nGIfqRVCn4=/566x0/filters:no_upscale():max_bytes(150000):strip_icc():format(webp)/200346176-001-57bbe96f3df78c87638ffaba.jpg',
        description: 'Crema Catalana or Catalan cream is the Spanish version of the creamy and delicate crème brulée of French fame. Once you taste the burnt sugar crust and delicate creamy custard underneath, you may eat the batch all by yourself.',
        price: '26€'
    },

    // -------------------- ITALY ---------------------- //
    {
        id: 21,
        title: 'Pizza',
        country: 'Italy',
        category: 'Main Course',
        img: 'https://italian-riviera.com/wp-content/uploads/2019/12/pizza-1400x700.jpg',
        description: 'Pizza was born in Naples, the city that claims its paternity and where tomato sauce is certainly added to the thin layer of dough.',
        price: '35€'
    },
    {
        id: 22,
        title: 'Spaghetti Carbonara',
        country: 'Italy',
        category: 'Main Course',
        img: 'https://italian-riviera.com/wp-content/uploads/2019/12/carbonara.png',
        description: 'It was born casually with bacon, powdered egg yolk, milk cream and cheese, all foods with which the allies who liberated Italy were equipped, and for the imagination of a young cook from Bologna.',
        price: '32€'
    },
    {
        id: 23,
        title: 'Polenta',
        country: 'Italy',
        category: 'Main Course',
        img: 'https://italian-riviera.com/wp-content/uploads/2019/12/polenta-768x512.gif',
        description: 'A poor preparation and therefore flexible and ready to accept the pairing with meats or fish, with cheeses or vegetables, and in some cases also to become a dessert.',
        price: '37€'
    },
    {
        id: 24,
        title: 'Fiorentina',
        country: 'Italy',
        category: 'Main Course',
        img: 'https://italian-riviera.com/wp-content/uploads/2019/12/fiorentina-768x512.jpg',
        description: 'The real Florentine is obtained from specimens of Chianina breed. The meat should be matured for about twenty days and when cut it looks like a classic Tbone steak.',
        price: '48€'
    },
    {
        id: 25,
        title: 'Cioppino',
        country: 'Italy',
        category: 'Soup',
        img: 'https://imagesvc.meredithcorp.io/v3/mm/image?url=https%3A%2F%2Fstatic.onecms.io%2Fwp-content%2Fuploads%2Fsites%2F19%2F2015%2F05%2F20%2Fslow-cooker-cioppino-ck.jpg',
        description: "Simmering the base of this rich stew in the slow cooker allows for ultimate flavor concentration. When you're almost ready to serve, add raw fish to poach quickly.",
        price: '38€'
    },
    {
        id: 26,
        title: 'Prosciutto',
        country: 'Italy',
        category: 'Soup',
        img: 'https://imagesvc.meredithcorp.io/v3/mm/image?url=https%3A%2F%2Fstatic.onecms.io%2Fwp-content%2Fuploads%2Fsites%2F24%2F2019%2F10%2F2426601_qfsso_0251_0_0_0_0-2000.jpg',
        description: "Ready in just 20 minutes, this easy soup makes a delicious weeknight supper that's practically made for fall. Any flavor tortelloni will work well in this dish.",
        price: '32€'
    },
    {
        id: 27,
        title: 'Chickpea',
        country: 'Italy',
        category: 'Soup',
        img: 'https://imagesvc.meredithcorp.io/v3/mm/image?url=https%3A%2F%2Fstatic.onecms.io%2Fwp-content%2Fuploads%2Fsites%2F19%2F2016%2F09%2F08%2F2447005_chili_01-2000.jpg',
        description: "Spicy Italian pork sausage gives this soup a kick, but you can also substitute sweet Italian sausage..",
        price: '36€'
    },
    {
        id: 28,
        title: 'Pasta Fagioli',
        country: 'Italy',
        category: 'Soup',
        img: 'https://imagesvc.meredithcorp.io/v3/mm/image?url=https%3A%2F%2Fstatic.onecms.io%2Fwp-content%2Fuploads%2Fsites%2F19%2F2005%2F09%2F19%2Fpasta-fagioli-soup.jpg',
        description: "Sausage, kidney beans, and vegetables make this 30-minute soup a filling dinner in a bowl.",
        price: '32€'
    },
    {
        id: 29,
        title: 'Tramisu',
        country: 'Italy',
        category: 'Dessert',
        img: 'https://italian-riviera.com/wp-content/uploads/2019/12/tiramisu%CC%80-768x432.jpg',
        description: "Never has a dessert conquered the whole world with the speed of the very Italian Tiramisu.",
        price: '27€'
    },
    {
        id: 30,
        title: 'Panna Cotta',
        country: 'Italy',
        category: 'Dessert',
        img: 'https://imagesvc.meredithcorp.io/v3/mm/image?url=https%3A%2F%2Fstatic.onecms.io%2Fwp-content%2Fuploads%2Fsites%2F9%2F2016%2F10%2Fgoat-milk-and-corn-panna-cotta-with-blackberries-XL-RECIPE0817.jpg',
        description: "This delicately sweet and tangy panna cotta from Top Chef winner Brooke Williamson is the perfect way to showcase plump summer fruits.",
        price: '32€'
    },

];

let mainMenu = document.querySelector('.menu');
let buttons = document.querySelector('.buttons');


//Create buttons
let btn1 = document.createElement('button');
btn1.innerHTML = "All"
btn1.classList.add('btn', 'btn-dark', 'me-2');
btn1.setAttribute('id', 'All');
buttons.appendChild(btn1);

let btn2 = document.createElement('button');
btn2.innerHTML = "France"
btn2.classList.add('btn', 'btn-dark', 'me-2');
btn2.setAttribute('id', 'France');
buttons.appendChild(btn2);

let btn3 = document.createElement('button');
btn3.innerHTML = "Spain"
btn3.classList.add('btn', 'btn-dark', 'me-2');
btn3.setAttribute('id', 'Spain');
buttons.appendChild(btn3);

let btn4 = document.createElement('button');
btn4.innerHTML = "Italy"
btn4.classList.add('btn', 'btn-dark', 'me-2');
btn4.setAttribute('id', 'Italy');
buttons.appendChild(btn4);

let btn5 = document.createElement('button');
btn5.innerHTML = "Soup"
btn5.classList.add('btn', 'btn-dark', 'me-2');
btn5.setAttribute('id', 'Soup');
buttons.appendChild(btn5);

let btn6 = document.createElement('button');
btn6.innerHTML = "Dessert"
btn6.classList.add('btn', 'btn-dark');
btn6.setAttribute('id', 'Dessert');
buttons.appendChild(btn6);

//Select button ids
let idAll = document.getElementById('All');
let idFrance = document.getElementById('France');
let idSpain = document.getElementById('Spain');
let idItaly = document.getElementById('Italy');
let idSoup = document.getElementById('Soup');
let idDessert = document.getElementById('Dessert');

//EventListeners
let all = idAll.addEventListener('click', eventAll);
let france = idFrance.addEventListener('click', eventFrance);
let spain = idSpain.addEventListener('click', eventSpain);
let italy = idItaly.addEventListener('click', eventItaly);
let soup = idSoup.addEventListener('click', eventSoup);
let dessert = idDessert.addEventListener('click', eventDessert);

//ALL
function eventAll() {
    let element = " ";
    menu.map((item) => {
        element += createObject(item);
    });
    mainMenu.innerHTML = element;
}


//SOUP
function eventSoup() {
    let element = "";
    menu.map(item => {
        if(item.category === 'Soup') {
            element += createObject(item);
        }
    });
    mainMenu.innerHTML = element;
};
//DESSERT
function eventDessert() {
    let element = "";
    menu.map(item => {
        if(item.category === 'Dessert') {
            element += createObject(item);
        }
    });
    mainMenu.innerHTML = element;
};

//FRANCE
function eventFrance() {
    let element = "";
    menu.map(item => {
        if(item.country === 'France') {
            element += createObject(item);
        }
    });
    mainMenu.innerHTML = element;
};
//SPAIN
function eventSpain() {
    let element = "";
    menu.map(item => {
        if(item.country === 'Spain') {
            element += createObject(item);
        }
    });
    mainMenu.innerHTML = element;
};
//ITALY
function eventItaly() {
    let element = "";
    menu.map(item => {
        if(item.country === 'Italy') {
            element += createObject(item);
        }
    });
    mainMenu.innerHTML = element;
};


createObject = (meal) => {
    let newOne = 
    `
    <div class="col-sm-12 col-md-12 col-lg-5 shadow mt-4 ms-auto me-auto rounded" id="section">
        <div class="row mt-2 align-items-center text-dark p-3">

            <div class="col-sm-12">
                <h4 id="meal-title" class=" border-bottom border-4 border-dark text-center p-2 mb-3">${meal.title}</h4>
            </div>

            <div class="col-sm-6">
                <img src="${meal.img}" class="img-fluid rounded" alt="" >
            </div>
            
            <div class="col-sm-6">
                <p>${meal.description}</p>
                <h5 id="price" class="text-danger text-end">${meal.price}</h5>
            </div>

        </div>
    </div>
    
    `
    return newOne;
}
eventAll();


let darkMode = localStorage.getItem('darkMode');
const darkModeToggle = document.querySelector('#dark-mode-toggle');
let MODE = document.querySelector('#container');

MODE.classList.add('lightmode');

// let ModeButtons = document.querySelector('.btn');

//check if dark mode is enabled
//if it's enabled, turn it off
//if it's disabled, turn it on

const enableDarkMode = () => {


    //1.add the class darkmode to body
    // document.body.classList.add('darkmode');
    //2. update darkMode in the localStorage
    localStorage.setItem('darkMode', 'enabled');

    darkModeToggle.classList.add('light-mode-toggle');
    MODE.classList.add('darkmode');
    MODE.classList.remove('lightmode');

    btn1.classList.add('btn-light');
    btn2.classList.add('btn-light');
    btn3.classList.add('btn-light');
    btn4.classList.add('btn-light');
    btn5.classList.add('btn-light');
    btn6.classList.add('btn-light');
    
    btn1.classList.remove('btn-dark');
    btn2.classList.remove('btn-dark');
    btn3.classList.remove('btn-dark');
    btn4.classList.remove('btn-dark');
    btn5.classList.remove('btn-dark');
    btn6.classList.remove('btn-dark');
}
const disableDarkMode = () => {
    //1.add the class darkmode to body
    // document.body.classList.remove('darkmode');
    MODE.classList.add('lightmode');
    MODE.classList.remove('darkmode');

    //2. update darkMode in the localStorage
    localStorage.setItem('darkMode', null);
    darkModeToggle.classList.remove('light-mode-toggle');

    btn1.classList.add('btn-dark');
    btn2.classList.add('btn-dark');
    btn3.classList.add('btn-dark');
    btn4.classList.add('btn-dark');
    btn5.classList.add('btn-dark');
    btn6.classList.add('btn-dark');

    btn1.classList.remove('btn-light');
    btn2.classList.remove('btn-light');
    btn3.classList.remove('btn-light');
    btn4.classList.remove('btn-light');
    btn5.classList.remove('btn-light');
    btn6.classList.remove('btn-light');
    
}

//refresh
if(darkMode === 'enabled') {
    enableDarkMode();
}

darkModeToggle.addEventListener('click', () => {
    darkMode = localStorage.getItem('darkMode');
    if (darkMode !== 'enabled') {
        enableDarkMode();
        console.log(darkMode)
    } else {
        disableDarkMode();
        console.log(darkMode)
    }
})
