**30-01-2020 UPDATE** : 30-01-2020 - 9pm / UPDATE : 70% of the web integration is complete and responsive.
Lastest build preview can be found here : https://quizzical-neumann-f11535.netlify.com/

**26-01-2020 UPDATE** : I couldn't finish this test on time because i spent too much time setting up tools ( storybook, webpack config, path problems, render differences between storybook and final build,etc. ), learning about Atomic Design and BEM css method.

I failed but the most important is that I learned a lot from this experience. I am going to take my time and keep working on this test.

I really enjoyed the Atomic Design idea, now i do think that storybook is a must have and last but not least working with SASS is actually still a relevant choice in 2020.


**Methods and Tools**

After our first talk, I decided to challenge myself and build this web page using  **Atomic Design Methodology** for the first time.
To do that I had to choose a modern web framework and a set of tools/technologies that would make my journey easier.

I choose to go with Gatsby, it's a React based framework that allow you to build static web pages using React components.
Static webpages mean better browser compatibility, especially for browsers like opera mini that come with limited JavaScript capabilities.

To style our components I am using SASS for cross platform compatibility, normalize.css and BEM methodology.

To improve code consistency I am using EsLint and Prettier.

Finally all the UI components are going to be build in an isolated environment using Storybook.

**Commands**

To run storybook: "npm run storybook"
To run Gatsby in dev mode: "gatsby develop"
To start building process: "gatsby build"