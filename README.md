# Risk Assessment App
###### In this application the risk of out-of-home-placement will be calculated



## Install
```bash
npm install
```



## Concept



## Learning process

#### Day 1 Polymer 10 October 2018
Polymer is a framework by google, which indicates that is probably kept up-to-date. That's why I thought it would be a good framework to work with. In total there are three different versions published by Polymer. I've decided to work with Polymer 3.0, the newest version until now.

The documentation is kept up-to-date by Polymer and it can be found for every version. However troubleshooting is troublesome, because there aren't many people who have worked with Polymer. Even on Stackoverflow there is not a lot to go on, however there are some topics related to Polymer.

Together with three other classmates we are building the risk assessment application with Polymer. The documentation was a bit though to go through, but that is probably because it's a new framework I had to learn.

The first day I've looked up tutorials, so I can get started. Eventually we found a boilerplate to set up Polymer. From there I did a lot of research to understand the code and searched for all the different possibilities within the framework.

#### Day 2 Polymer 11 October 2018
Today I've looked further into the documentation. Followed another beginners tutorial which made it a lot clearer for me. I have learned how to create properties and how to pass them through components. For me it was also important to structure my code in maps. So we have a map with all the pages and a map with the components, which will be included in the pages.

In Polymer they use inline CSS in a HTML template. Which can be accessed through:

```js
static get template {
    return html `
    <style include="shared-styles">
    </style>

    <h1>Hello World</h1>

    `
  }
```
I find this very confusing and honestly bad practice when coding. It also make the readability of your code a lot more difficult. It is possible to include a standard style file, in which i've done most of my styling. But when writing CSS in a component it overwrites the included style file. This makes styling per component easier, but in the long run this can be very annoying.

#### Day 3 Polymer 12 October 2018
Today i'm working on my HTML forms. To put everything in different components and including it in the pages. I've also worked on my concept because in the end the end the concept is also what counts. Because it is probably not possible to make a whole application work in this time span. In the end I didn't get very far with my forms, because I was thinking more about component structure. However with polymer mounting components with different properties is not an easy task and would take up a lot of time.

#### Day 4 Polymer 15 October 2018
Another day of working on my HTML forms. And trying to tackle the styles...
I've also worked on my concept again because of the presentations in the morning, which gave me very useful insights into the problem. However their wishes aren't possible to realize before Friday, but can definitely be included in my sketches.

#### Day 5 Polymer 16 October 2018
CSS is an absolute nightmare in Polymer. Because I've used a boilerplate it is not possible to style all elements, by just calling them by their classname or id. This is because of the shadowRoot. which is included on several HTML elements. By using `--` before an element it is possible to access those, but you have to go through every layer before you get to your specific element. And you have to use it in that specific component/page. Together with a classmate we've worked on pushing our HTML form values into to the local storage. This took up a lot of time and for me mostly to understand the code, but in the end it worked!

#### Day 6 Polymer 17 October 2018
Today we've found out it is not possible to use states in Polymer... And actually defeats the whole purpose of using a framework. Definitely not something you want to find out on one of the last day's we get to work on this project. In earlier version of Polymer this was possible, but now we've decided to write everything to LocalStorage in window. Together with a classmate we've implemented the risk assessment formula in the app. I've found this the most difficult part of the whole process, but in the end we made it. Thanks to Maikel van Veen we have a working risk assessment calculator.

#### Day 7 Polymer 18 October 2018
Today was mostly making sure the Risk Assessment worked on every component and updated real time. On the way I ran into a lot of different errors, but in the end I resolved all of them. In the morning I've mostly tried to explain the calculator to other classmates, so I could make sure I understand the code better than I did before. Around midday I have spent time into my documentation. 


## Future adaptations
