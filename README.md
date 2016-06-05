# Website Performance Optimization portfolio project

#Part 1 : Optimize PageSpeed Insight score for index.html

##What I did:
I forked Cameron's repo, copied it to my local folder and edited from there. I created dist and src folders to separate and distinguish the original from the edited files. I used Grunt for basic tasks, the python localhost for testing the site locally as well as ngrok to test online and got the PageSpeed from Google's PageSpeed Insights.

##Editions:
1.) changed the src for the img pizzeria.jpg to have a srcset using grunt responsive-images in index.html.
2.) optimized the src and srcset of pizzeria.jpg and profilepic.jpg in the img and images folders using imagemin.
3.) inlined all css above-the-fold properties in index.html.
4.) placed media attributes on css link elements and async attributes on js link elements in index.html.
5.) deferred the minified style.css in index.html.
6.) placed the Google analytics and defer scripts at the end of the body in index.html.

##Grunt:
The plugins used for this project were: imagemin, cssmin, responsive-images and minify-html. I used responsive-images first for the pizzeria.jpg in index.html. Then, I optimized them along with profilepic.jpg using imagemin. I minified the style.css, print.css and bootstrap-superhero.css files using cssmin. And lastly, I minified index.html using minify-html. As you can see, I did not use the plugins all at the same time, but one at a time.

##ngrok:
I downloaded a copy of ngrok which I placed in the local copy of the mobile portfolio folder for easy access. I would open ngrok in the dist folder so that it would show the dist folder version of the portfolio. I would open PageSpeed Insights on Chrome and test the given ngrok address everytime I edit the files until the PageSpeed score > 90 on both mobile and desktop.

***********

#Part 2: Optimize Frames per Second in pizza.html
I opened ngrok in the views folder to access pizza.html. I then opened the address ngrok gives on Chrome and accessed the Developer Tools to check fps rate. I edited the html, css and mostly, main.js until fps > 60.

##Editions:
1.) changed style.left query to style.webkitTransform/translate  in the function updatePositions() to stop FSL
2.) lowered the number of background pizzas to be printed from 200 to 20 in the addEventListener method in main.js
3.) added requestAnimationFrame to the function updatePositions
4.) place will-change: transform on classes mover, randomPizzaContainer and id movingPizzas1 in views/style.css
5.) refactored the function changePizzaSizes(size)
6.) replaced querySelectorAll method with getElementsByClassName,  items.length with the var itemslength and randomPs.length with var randomPslength to avoid FSL
7.) created webworker pizzaworker to help RandomPizza make pizzas from worker.js, out of main.js

##Grunt:
The plugin used for this project is responsive-images only. I used it for the pizzeria.jpg in pizza.html to give me a set of higher resolution pizzeria good enough for covering a whole width of the pizza page.

##Bugs:
1.) background pizzas won't move
2.) webworker doesn't work
