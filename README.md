**04-02-2020 UPDATE** : First Release is out
What can be improve : 
  - fix IE 11 font import issues (font needs to be stored in the static folder and renamed)
  - import a polyfil for IE 11 to be able to display picture tag correctly
  - add title and meta to improve SEO
  - add style/animaton on button & link depending on the event
  - rework CSS class names to be fully compliant with BEM syntax
  - split font.scss into two files (one with variables and the other one with font import)
  - install storybook knobs addon to easily edit components props on the fly
  - split index.jsx in to a template and page file

**30-01-2020 UPDATE** : 30-01-2020 - 9pm / UPDATE : 70% of the web integration is complete and responsive.
Lastest build preview can be found here : https://quizzical-neumann-f11535.netlify.com/

**Methods and Tools**

After our first talk, I decided to challenge myself and build this web page using  **Atomic Design Methodology** for the first time.
To do that I had to choose a modern web framework and a set of tools/technologies that would make my journey easier.

I choose to go with Gatsby, it's a React based framework that allow you to build static web pages using React components.
Static webpages mean better browser compatibility, especially for browsers like opera mini that come with limited JavaScript capabilities. Javscript code is transpiled to ES5 syntax (Babel) to be compliant with older browser and bundled (webpack).

To style our components I am using SASS for cross platform compatibility, normalize.css and BEM methodology.

To improve code consistency I am using EsLint and Prettier. Camel case syntax for Javascript and BEM syntax for CSS.

Finally all the UI components are going to be build in an isolated environment using Storybook.

**Commands**

To run storybook: "npm run storybook"
To run Gatsby in dev mode: "gatsby develop"
To start building process: "gatsby build"