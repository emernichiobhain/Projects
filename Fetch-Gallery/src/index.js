import styles from './style.css'

const allPictures = document.querySelectorAll('.letter');

document.querySelector('.wrapper').addEventListener('click', () => {
  for (let i = 0; i < allPictures.length; i++) {
    const oldUrl = allPictures[i].getAttribute('src');
    const newUrl = oldUrl.replace('1130879', '2411320');
    allPictures[i].setAttribute('src', newUrl);
  }
});


// const letterOne = document.querySelector('#letter-one');
// letterOne.addEventListener('click', (e) => {

//   document.getElementById('topleft').setAttribute('src', 'https://source.unsplash.com/collection/2411320/100x100');
//   document.getElementById('topbar').setAttribute('src', 'https://source.unsplash.com/collection/2411320/150x100');
//   document.getElementById('leftbar').setAttribute('src', 'https://source.unsplash.com/collection/2411320/100x300');
//   document.getElementById('middlebar').setAttribute('src', 'https://source.unsplash.com/collection/2411320/150x99');
// });

// const letterTwo = document.querySelector('#letter-two');
// letterTwo.addEventListener('click', (e) => {
//   document.getElementById('letter-two-a').setAttribute('src', 'https://source.unsplash.com/collection/2411320/200x200');
// });

// const letterThree = document.querySelector('#letter-three');
// letterThree.addEventListener('click', (e) => {
//   document.getElementById('letter-three-bar').setAttribute('src', 'https://source.unsplash.com/collection/2411320/100x400');
//   document.getElementById('letter-three-halfcircle').setAttribute('src', 'https://source.unsplash.com/collection/2411320/200x201');
// });

// const letterFour = document.querySelector('.letter-four');
// letterFour.addEventListener('click', (e) => {
//   document.getElementById('four-topbar').setAttribute('src', 'https://source.unsplash.com/collection/2411320/250x100');
//   document.getElementById('four-leftbar').setAttribute('src', 'https://source.unsplash.com/collection/2411320/101x300');
//   document.getElementById('four-middlebar').setAttribute('src', 'https://source.unsplash.com/collection/2411320/150x98');
// });

// const letterFive = document.querySelector('.letter-five');
// letterFive.addEventListener('click', (e) => {
//   document.getElementById('five-top').setAttribute('src', 'https://source.unsplash.com/collection/2411320/100x101');
//   document.getElementById('five-bottom').setAttribute('src', 'https://source.unsplash.com/collection/2411320/100x200');
// });

// const letterSix = document.querySelector('.letter-six');
// letterSix.addEventListener('click', (e) => {
//   document.getElementById('letter-six-left').setAttribute('src', 'https://source.unsplash.com/collection/2411320/110x200');
//   document.getElementById('letter-six-right').setAttribute('src', 'https://source.unsplash.com/collection/2411320/111x200');
// });

// const letterSeven = document.querySelector('.letter-seven');
// letterSeven.addEventListener('click', (e) => {
//   document.getElementById('seven-topleft').setAttribute('src', 'https://source.unsplash.com/collection/2411320/100x99');
//   document.getElementById('seven-topright').setAttribute('src', 'https://source.unsplash.com/collection/2411320/101x100');
//   document.getElementById('seven-botleft').setAttribute('src', 'https://source.unsplash.com/collection/2411320/101x99');
// });