# Website Performance Optimization portfolio project

#Part 1 : Optimize PageSpeed Insight score for `index.html`

##What I did:
I forked Cameron's repo, copied it to my local folder and edited from there. I created _dist_ and _src_ folders to separate and distinguish the original from the edited files. I used _Grunt_ for basic tasks, the _Python_ localhost for testing the site locally as well as _ngrok_ to test online and got the PageSpeed from Google's PageSpeed Insights.

##Editions:
1. changed the _src_ for the `img pizzeria.jpg` to have a _srcset_ using grunt _responsive-images_ in `index.html`.
2. optimized the _src_ and _srcset_ of `pizzeria.jpg` and `profilepic.jpg` in the _img_ and _images_ folders using _imagemin_.
3. inlined all css above-the-fold properties in `index.html`.
4. placed `(media)` attributes on css link elements and `(async)` attributes on js link elements in `index.html`.
5. deferred the minified `style.css` in `index.html`.
6. placed the Google analytics and defer `(scripts)` at the end of the body in `index.html`.

##Grunt:
The plugins used for this project were: _imagemin_, _cssmin_, _responsive-images_ and _minify-html_. I used _responsive-images_ first for the `pizzeria.jpg` in `index.html`. Then, I optimized them along with `profilepic.jpg` using _imagemin_. I minified the `style.css`, `print.css` and `bootstrap-superhero.css` files using _cssmin_. And lastly, I minified `index.html` using _minify-html_. As you can see, I did not use the plugins all at the same time, but one at a time.

##ngrok:
I downloaded a copy of _ngrok_ which I placed in the local copy of the mobile portfolio folder for easy access. I would open _ngrok_ in the _dist_ folder so that it would show the _dist_ folder version of the portfolio. I would open **PageSpeed Insights** on **Chrome** and test the given _ngrok_ address everytime I edit the files until the PageSpeed score > 90 on both mobile and desktop.

***********

#Part 2: Optimize Frames per Second in `pizza.html`
I opened _ngrok_ in the _views_ folder to access `pizza.html`. I then opened the address _ngrok_ gives on **Chrome** and accessed the **Developer Tools** to check fps rate. I edited the `pizza.html`, `style.css` and mostly, `main.js` until fps > 60.

##Editions:
1. changed _style.left_ query to _style.webkitTransform/translate_ in the function _updatePositions()_ to stop FSL in `main.js`
2. lowered the number of background pizzas to be printed from 200 to 40 in the _addEventListener_ method in `main.js`
3. added _requestAnimationFrame_ to the function _updatePositions()_ in `main.js`
4. place _will-change: transform_ on classes _mover_, _randomPizzaContainer_ and id _movingPizzas1_ in `views/style.css`
5. refactored the function _changePizzaSizes(size)_
6. replaced _querySelectorAll_ method with _getElementsByClassName_,  _items.length_ with the _var_ _itemslength_ and _randomPs.length_ with _var_ _randomPslength_ to avoid FSL in `main.js`
7. created webworker _pizzaworker_ to help _RandomPizza_ make pizzas from `worker.js`, in `main.js`

##Grunt:
The plugin used for this project is _responsive-images_ only. I used it for the `pizzeria.jpg` in `pizza.html` to give me a set of higher resolution pizzeria pictures good enough for covering a whole width of the pizza page.

##Bug:
1. webworker _pizzaworker_ doesn't work

************

##Revisions of above set:

1. Replaced _querySelector_ methods to _getElementById_ in `main.js`
2. Corrected _var_ _randomPs_ typo in `main.js`
3. Transferred _var_ _pizzasDiv_ from inside to outside the _for_ loop in `main.js`
4. Saved and transferred _document.body.scrollTop/1250_ outside the _for_ loop in `main.js`
5. Transferred _var_ _phase_ initialization outside the _for_ loop in `main.js`
6. Corrected _items[i].style.transform_ _=_ _'translateX('+100*phase+'px)';_ in `main.js`
7. Made number of moving pizzas adjustable by computing the number of rows and columns, and the number of pizzas needed to fit it in `main.js`
8. Transferred _var_ _elem_ from inside to outside the _for_ loop in `main.js`
9. Replaced _elem.basicLeft_ with _elem.style.left_ for _transform/translateX_ property in `main.js`
10. Saved and transferred call for _document.getElementById("movingPizzas1")_ to outside the _for_ loop in `main.js`
11. Initialize _var_ _elem_ outside the _for_ loop in `main.js`
12. Removed _will-change:transform_ in `style.css`

##How to work the program:

###Part 1
1. Open **Command Prompt**
2. CD to local folder `C:\Users\\...\...\frontend-nanodegree-mobile-portfolio\dist`
3. Type in command _python -m SimpleHTTPServer 8080_
4. Open _ngrok_ file to open _ngrok_ window
5. Type in _ngrok_ window _ngrok http 8080_
6. Copy the link given in the _ngrok_ window and paste on an open **Chrome** browser
7. The localhost will open on the **Google Chrome** browser. You can check here how your webpage looks online.
8. Open **PageSpeed Insights** in another browser.
9. Type in the given _ngrok_ link on the form window and press start.
10. This will give you a _PageSpeed Insights Analysis_ of the link you typed in.

###Part 2
1. Open **Command Prompt**
2. CD to local folder `C:\Users\\...\...\frontend-nanodegree-mobile-portfolio\dist\views`
3. Type in command _python -m SimpleHTTPServer 8080_
4. Open _ngrok_ file to open _ngrok_ window
5. Type in _ngrok_ window _ngrok http 8080_
6. Copy the link given in the _ngrok_ window and paste on an open **Chrome** browser with _/pizza_. If a directory of files display instead, click on the file `pizza.html`
7. The localhost will open on the **Google Chrome** browser. You can check here how your webpage looks online.
8. Open **Chrome Developer Tools**.
9. Press the _Timeline_ button to be able to do frame rate measurements

TODO:
1. Webworker works now but still have to study it some more
