About:

This website filters the top news stories from the New York Times API. The goal was to pull the article caption and image and URL link and put the first 12 articles onto the web page using ajax in JS. 


Tools and methods used
-HTML
-CSS / SASS
-Javascript
-jquery
-gulp
-heapbox plugin


General overview:
HTML:
-The HTML content structure was relatively simple to format for this project. 
-correctly adding HTML classes from running the javascript file and editing the style was a new concept  

CSS/SASS
-learning how to optimize the organization and styling using SASS
-using SASS to use media query was very useful for incorporating them into the classes rather than in a separate section for tablet and desktop view
-similar tools were used from previous projects such as obtaining fonts from font squirrel, flexbox, and CSS properties.
-learned how to combine JS and SASS media queries to have different styling before the selector is used and after it was used. 


JS
-used Ajax to fetch the data from NYT
-learned how to access the objects in the array and pull only the data we need like the caption, image, and url link.
-learned how to use the splice function to create an array for the 12 stories and running that array into the each() loop
-a very useful technique was adding classes when using the selector in order to make the page run more smooth and responsive (Header would shift to the top and allow more space to display articles)
-a loading gif was added once the selector was used and was removed at the end of the script 
-

Gulp
-setting up the gulp file was a difficult learning curve for me but once it was sorted out, it was very useful throughout the entire project. 
-browser sync and autoprefixer are some of the very useful functions that were used in the compiler.
-gulp helped compile the .scss file into a properly minified and compiled .css file 

Stretch Goals:
-heapbox was used to style the selector. Impletmenting it was a little tricky but fixing some syntax made it work out
-using some CSS3 transitions to show and hid the abstract was easy using SASS to format the nested classes for the hover function. 
-the text was translated down and overflow hidden was used so that it not visible until on hover, it would translate back up from the bottom of the box.

