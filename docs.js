let docs = [
  {
      name: "VS Code",
      link: "https://code.visualstudio.com/docs/"
  },
  {
      name: "W3 Schools",
      link: "https://www.w3schools.com/"
  },
  {
      name: "JS Microsoft",
      link: "https://msdn.microsoft.com/pt-br/library/yek4tbz0(v=vs.94).aspx"
  },
  {
      name: "JQuery",
      link: "https://jquery.com/"
  },
  {
      name: "SASS",
      link: "http://sass-lang.com/"
  },
  {
      name: "SASS Cheat Sheet",
      link: "https://sass-cheatsheet.brunoscopelliti.com/"
  },
  {
      name: "Bootstrap",
      link: "http://getbootstrap.com/"
  },
  {
      name: "Materialize CSS",
      link: "https://materializecss.com/"
  },
  {
      name: "MDN",
      link: "https://developer.mozilla.org/pt-BR/"
  },
  {
      name: "FCC Guides",
      link: "https://guide.freecodecamp.org/"
  },
  {
      name: "Material Design",
      link: "https://material.io/design/introduction/#"
  },
  {
      name: "Tutorials Point",
      link: "https://www.tutorialspoint.com/tutorialslibrary.htm"
  },
  {
      name: "Exploring JS: Books",
      link: "http://exploringjs.com/"
  },
  {
      name: "JS Crockford Articles",
      link: "http://crockford.com/javascript/"
  }
];

docs.sort((a, b) => a.name > b.name);


let ul = document.getElementById("docs");

docs.forEach((item) => {
  let el = document.createElement('li');
  let a = document.createElement('a');
  a.target = "_blank";
  a.href = item.link;
  let text = document.createTextNode(item.name);
  a.appendChild(text);
  el.appendChild(a);
  ul.appendChild(el);
});