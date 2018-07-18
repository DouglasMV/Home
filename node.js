let nodejs = [
  {
      name: "Node JS",
      link: "https://nodejs.org/en/docs/"
  },
  {
      name: "Express",
      link: "http://expressjs.com/"
  },
  {
      name: "Mongoose",
      link: "http://mongoosejs.com/docs/guide.html"
  },
  {
      name: "Helmet",
      link: "https://github.com/helmetjs/helmet"
  },
  {
      name: "BCrypt",
      link: "https://www.npmjs.com/package/bcrypt"
  },
  {
      name: "Passport JS",
      link: "http://www.passportjs.org/"
  },
  {
      name: "Pug JS",
      link: "https://pugjs.org/api/getting-started.html"
  },
  {
      name: "Node Sec Road Map",
      link: "https://nodesecroadmap.fyi/"
  },
  {
      name: "Rising Stack",
      link: "https://blog.risingstack.com/"
  },
  {
      name: "Node Swat",
      link: "https://blog.nodeswat.com/"
  },
  {
      name: "Gergely Nemeth",
      link: "https://nemethgergely.com/"
  }
];

nodejs.sort((a, b) => a.name > b.name);

let uln = document.getElementById("nodejs");

nodejs.forEach((item) => {
  let el = document.createElement('li');
  let a = document.createElement('a');
  a.target = "_blank";
  a.href = item.link;
  let text = document.createTextNode(item.name);
  a.appendChild(text);
  el.appendChild(a);
  uln.appendChild(el);
});