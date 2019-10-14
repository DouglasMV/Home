let icons = [
  {
    name: 'Yahoo',
    link: 'https://br.yahoo.com/?p=us',
    color: '#6001d2',
    src: '1.png'
  },
  {
    name: 'Youtube',
    link: 'https://www.youtube.com/',
    color: '#ff0000',
    src: '2.png'
  },
  {
    name: 'Whatsapp',
    link: 'https://web.whatsapp.com/',
    color: '#0dc143',
    src: '3.png'
  },
  {
    name: 'FCC',
    link: 'https://guide.freecodecamp.org/',
    color: '#006400',
    src: '4.png'
  },
  {
    name: 'VS Code',
    link:
      'https://www.ingresso.com/santa-barbara-do-oeste/home/cinemas/multiplex-santa-barbara-do-oeste#!#data=20171211',
    color: '#444444',
    src: '5.png'
  },
  {
    name: 'IMDb',
    link: 'http://www.imdb.com/',
    color: '#c19d21',
    src: '6.png'
  },
  {
    name: 'Fatec',
    link: 'http://www.fatec.edu.br/',
    color: '#395561',
    src: '7.png'
  },
  {
    name: 'JS Tutorial',
    link: 'https://javascript.info/',
    color: '#c8333a',
    src: '8.png'
  },
  {
    name: 'Codecademy',
    link: 'https://www.codecademy.com/',
    color: '#284054',
    src: '9.png'
  },
  {
    name: 'Udemy',
    link: 'https://www.udemy.com/',
    color: '#ed5353',
    src: '10.png'
  },
  {
    name: 'Github',
    link: 'https://github.com/',
    color: '#000000',
    src: '11.png'
  },
  {
    name: 'W3 Schools',
    link: 'https://www.w3schools.com/',
    color: '#87b515',
    src: '12.png'
  },
  {
    name: 'Explosm',
    link: 'http://explosm.net/',
    color: '#2f264d',
    src: '13.png'
  },
  {
    name: 'Tutorials Point',
    link: 'https://www.tutorialspoint.com/tutorialslibrary.htm',
    color: '#34a360',
    src: '14.png'
  },
  {
    name: 'Google Drive',
    link: 'https://drive.google.com/drive/my-drive',
    color: '#d0d0d0',
    src: '15.png'
  },
  {
    name: 'MDN',
    link: 'https://developer.mozilla.org/en-US/',
    color: '#81d1f1',
    src: '16.png'
  }
];

let main_div = document.getElementById('icons-main');

icons.forEach(item => {
  let el = document.createElement('div');
  let a = document.createElement('a');
  let circle = document.createElement('div');
  let img = document.createElement('img');

  el.className = 'grid-item';
  a.target = '_blank';
  a.href = item.link;
  circle.className = 'circle';
  circle.style.backgroundColor = item.color;
  img.src = './imgs/' + item.src;
  img.alt = item.name;
  img.title = item.name;

  circle.append(img);
  a.append(circle);
  el.append(a);
  main_div.append(el);
});
