let docs = [
  {
    name: 'Modern JS',
    link: 'https://javascript.info/'
  },
  {
    name: 'VS Code',
    link: 'https://code.visualstudio.com/docs/'
  },
  {
    name: 'W3 Schools',
    link: 'https://www.w3schools.com/'
  },
  {
    name: 'JS Microsoft',
    link: 'https://msdn.microsoft.com/pt-br/library/yek4tbz0(v=vs.94).aspx'
  },
  {
    name: 'JQuery',
    link: 'https://jquery.com/'
  },
  {
    name: 'SASS',
    link: 'http://sass-lang.com/'
  },
  {
    name: 'Can I Use',
    link: 'https://caniuse.com/'
  },
  {
    name: 'Bootstrap',
    link: 'http://getbootstrap.com/'
  },
  {
    name: 'Materialize CSS',
    link: 'https://materializecss.com/'
  },
  {
    name: 'MDN',
    link: 'https://developer.mozilla.org/pt-BR/'
  },
  {
    name: 'FCC Guides',
    link: 'https://guide.freecodecamp.org/'
  },
  {
    name: 'Material Design',
    link: 'https://material.io/design/introduction/#'
  },
  {
    name: 'Tutorials Point',
    link: 'https://www.tutorialspoint.com/tutorialslibrary.htm'
  },
  {
    name: 'JS Crockford',
    link: 'http://crockford.com/javascript/'
  },
  {
    name: 'Built With',
    link: 'https://builtwith.com/'
  },
  {
    name: 'Heroku',
    link: 'https://devcenter.heroku.com/'
  },
  {
    name: 'React JS',
    link: 'https://reactjs.org/docs/hello-world.html'
  },
  {
    name: 'React Native',
    link: 'https://facebook.github.io/react-native/docs/getting-started.html'
  },
  {
    name: 'GraphQL',
    link: 'https://graphql.org/learn/'
  },
  {
    name: 'Redux',
    link: 'https://redux.js.org/'
  },
  {
    name: 'Enzyme',
    link: 'http://airbnb.io/enzyme/'
  },
  {
    name: 'Jest',
    link: 'https://jestjs.io/docs/en/tutorial-react.html#content'
  },
  {
    name: 'Next JS',
    link: 'https://nextjs.org/'
  },
  {
    name: 'Parcel JS',
    link: 'https://parceljs.org/getting_started.html'
  },
  {
    name: 'Create-React-App',
    link: 'https://github.com/facebook/create-react-app'
  },
  {
    name: 'Babel',
    link: 'https://babeljs.io/'
  },
  {
    name: 'ESLint',
    link: 'https://eslint.org/'
  },
  {
    name: 'React Doc-Gen',
    link: 'https://github.com/reactjs/react-docgen'
  },
  {
    name: 'Story Book',
    link: 'https://storybook.js.org/'
  },
  {
    name: 'React Refetch',
    link: 'https://github.com/heroku/react-refetch'
  },
  {
    name: 'Gatsby JS',
    link: 'https://www.gatsbyjs.org/'
  },
  {
    name: 'Webpack',
    link: 'https://webpack.js.org/'
  },
  {
    name: 'Node JS',
    link: 'https://nodejs.org/en/docs/'
  },
  {
    name: 'Express',
    link: 'http://expressjs.com/'
  },
  {
    name: 'Mongoose',
    link: 'http://mongoosejs.com/docs/guide.html'
  },
  {
    name: 'Helmet',
    link: 'https://github.com/helmetjs/helmet'
  },
  {
    name: 'BCrypt',
    link: 'https://www.npmjs.com/package/bcrypt'
  },
  {
    name: 'Passport JS',
    link: 'http://www.passportjs.org/'
  },
  {
    name: 'Pug JS',
    link: 'https://pugjs.org/api/getting-started.html'
  },
  {
    name: 'Node Sec Road Map',
    link: 'https://nodesecroadmap.fyi/'
  },
  {
    name: 'Rising Stack',
    link: 'https://blog.risingstack.com/'
  },
  {
    name: 'Node Swat',
    link: 'https://blog.nodeswat.com/'
  },
  {
    name: 'Gergely Nemeth',
    link: 'https://nemethgergely.com/'
  },
  {
    name: 'Best Patices',
    link: 'https://github.com/i0natan/nodebestpractices'
  },
  {
    name: '',
    link: 'https://webassembly.org/'
  },
  {
    name: '',
    link: 'https://www.rust-lang.org/'
  },
  {
    name: '',
    link: 'https://github.com/AssemblyScript/assemblyscript'
  },
  {
    name: '',
    link: 'https://css-tricks.com/'
  },
  {
    name: '',
    link: 'https://webdevchecklist.com/'
  },
  {
    name: '',
    link: 'https://www.scrumalliance.org/'
  },
  {
    name: '',
    link: 'https://redbooth.com/'
  }
]

docs.sort((a, b) => (a.name.toLowerCase() > b.name.toLowerCase() ? 1 : -1))

let ul = document.getElementById('docs')

docs.forEach(item => {
  let el = document.createElement('li')
  let a = document.createElement('a')
  a.setAttribute('target', '_blank')
  a.setAttribute('href', item.link)
  a.textContent = item.name
  el.append(a)
  ul.append(el)
})
