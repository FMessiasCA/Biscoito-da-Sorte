const fortuneCookieClosed = document.querySelector('img');
const fortuneCookieCardOpened = document.querySelector('#opened');
const fortuneCookieCardClosed = document.querySelector('#closed');

const buttonNewCookie = fortuneCookieCardOpened.querySelector('button');
const phrase = document.querySelector('#phrase');

fortuneCookieClosed.addEventListener('click', () => {
    fortuneCookieCardClosed.style.display = 'none';
    fortuneCookieCardOpened.style.display = 'block';
    newPhrase()
});

buttonNewCookie.addEventListener('click', (event) => {
    fortuneCookieCardClosed.style.display = 'block';
    fortuneCookieCardOpened.style.display = 'none';
});

/* Random Phrases functions */

let phrasesList = [
    "Acredite em si mesmo e tudo será possível.",
    "Cada dificuldade é uma oportunidade disfarçada.",
    "O sucesso é a soma de pequenos esforços repetidos diariamente.",
    "Nunca é tarde para ser o que você poderia ter sido.",
    "O único lugar onde o sucesso vem antes do trabalho é no dicionário.",
    "Transforme seus sonhos em metas e suas metas em conquistas.",
    "A persistência é o caminho do êxito.",
    "Se você pode sonhar, você pode realizar.",
    "Grandes coisas nunca vêm da zona de conforto.",
    "A melhor maneira de prever o futuro é criá-lo.",
    "A vida é 10% o que acontece com você e 90% como você reage a isso.",
    "A jornada de mil milhas começa com um único passo.",
    "O fracasso é apenas uma oportunidade para recomeçar com mais inteligência.",
    "Você é mais forte do que imagina.",
    "Não espere por oportunidades, crie-as.",
    "Acredite que você pode e você já está no meio do caminho.",
    "Tudo o que um sonho precisa para ser realizado é alguém que acredite que ele possa ser realizado.",
    "Não importa quão devagar você vá, desde que não pare.",
    "A coragem não é a ausência do medo, é a persistência apesar do medo.",
    "A vida é feita de escolhas, e suas escolhas fazem você.",
    "A única maneira de fazer um excelente trabalho é amar o que você faz.",
    "O sucesso não é o fim, o fracasso não é fatal: é a coragem de continuar que conta.",
    "Acredite em milagres, mas não dependa deles.",
    "Você é capaz de mais do que imagina.",
    "A ação é a chave fundamental para todo sucesso.",
    "Você não precisa ser grande para começar, mas precisa começar para ser grande.",
    "A vida é sobre superar desafios, não sobre evitar problemas.",
    "A força não vem da capacidade física. Vem de uma vontade indomável.",
    "A felicidade não é algo pronto. Ela vem de suas próprias ações.",
    "A determinação de hoje é o sucesso de amanhã."
];

function newPhrase () {
    let randomPhrase = Math.round(Math.random() * 30);
    phrase.innerText = phrasesList[randomPhrase];
}