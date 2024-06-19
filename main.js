const fortuneCookieClosed = document.querySelector('img');
const fortuneCookieCardOpened = document.querySelector('#opened');
const fortuneCookieCardClosed = document.querySelector('#closed');
const paragraph = document.querySelector('#opened p');

const buttonNewCookie = fortuneCookieCardOpened.querySelector('button');

let randomPhrase = 

fortuneCookieClosed.addEventListener('click', () => {
    fortuneCookieCardClosed.style.display = 'none';
    fortuneCookieCardOpened.style.display = 'block';
    
});

buttonNewCookie.addEventListener('click', (event) => {
    fortuneCookieCardClosed.style.display = 'block';
    fortuneCookieCardOpened.style.display = 'none';
})