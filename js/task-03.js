const images = [
  {
    url: 'https://images.pexels.com/photos/140134/pexels-photo-140134.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260',
    alt: 'White and Black Long Fur Cat',
  },
  {
    url: 'https://images.pexels.com/photos/213399/pexels-photo-213399.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260',
    alt: 'Orange and White Koi Fish Near Yellow Koi Fish',
  },
  {
    url: 'https://images.pexels.com/photos/219943/pexels-photo-219943.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260',
    alt: 'Group of Horses Running',
  },
];
let ulEl = document.querySelector('.gallery');

let newEl = images.map(el => {
  let li = document.createElement('li');
  let img = document.createElement('img');
  img.src = el.url;
  img.alt = el.alt;
  img.width = 300;
  img.height = 300;
  li.appendChild(img);
  console.log(el);
  return li;
})

ulEl.append(...newEl)