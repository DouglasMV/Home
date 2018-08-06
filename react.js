let react = [
            
  {
      name: "React JS",
      link: "https://reactjs.org/docs/hello-world.html"
  },
  {
      name: "React Native",
      link: "https://facebook.github.io/react-native/docs/getting-started.html"
  },
  {
      name: "GraphQL",
      link: "https://graphql.org/learn/"
  },
  {
      name: "Redux",
      link: "https://redux.js.org/"
  },
  {
      name: "Enzyme",
      link: "http://airbnb.io/enzyme/"
  },
  {
      name: "Jest",
      link: "https://jestjs.io/docs/en/tutorial-react.html#content"
  },
  {
      name: "Next JS",
      link: "https://nextjs.org/"
  },
  {
      name: "Parcel JS",
      link: "https://parceljs.org/getting_started.html"
  },
  {
      name: "Create-React-App",
      link: "https://github.com/facebook/create-react-app"
  },
  {
      name: "Babel",
      link: "https://babeljs.io/"
  },
  {
      name: "ESLint",
      link: "https://eslint.org/"
  },
  {
      name: "React Doc-Gen",
      link: "https://github.com/reactjs/react-docgen"
  },
  {
      name: "Story Book",
      link: "https://storybook.js.org/"
  },
  {
      name: "React Refetch",
      link: "https://github.com/heroku/react-refetch"
  },
  {
      name: "Gatsby JS",
      link: "https://www.gatsbyjs.org/"
  },
  {
      name: "Webpack",
      link: "https://webpack.js.org/"
  }
];

react.sort((a, b) => a.name > b.name);


let ulr = document.getElementById("react");

react.forEach((item) => {
  let el = document.createElement('li');
  let a = document.createElement('a');
  a.target = "_blank";
  a.href = item.link;
  let text = document.createTextNode(item.name);
  a.appendChild(text);
  el.appendChild(a);
  ulr.appendChild(el);
});