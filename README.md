**Methods and Tools**

After our first talk, I decided to build this web page using  **Atomic Design Methodology**.
To do that I had to choose a modern web framework and a set of tools/technologies that would make my journey easier.

I decided to go with Gatsby, it's a React based framework that allow you to build static web pages using React components.
Static webpages mean better browser compatibility, especially for browsers like opera mini that come with limited JavaScript capabilities. Javscript code is transpiled to ES5 syntax (Babel) to be compliant with older browser and bundled (webpack).

To style our components I am using SASS for cross platform compatibility, normalize.css and BEM methodology.

To improve code consistency I am using EsLint and Prettier. Camel case syntax for Javascript and BEM syntax for CSS.

Finally all the UI components are going to be build in an isolated environment using Storybook.

**Commands**

  - To run storybook: "npm run storybook"
  - To run Gatsby in dev mode: "gatsby develop"
  - To start building process: "gatsby build"
  
**Preview**

Lastest build preview can be found here : https://quizzical-neumann-f11535.netlify.com/
