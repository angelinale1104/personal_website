ADDED 
- HW4:
  + (3rd party script) Google Analytics: I want to include this 3rd party JS script for tracking purposes. Since my webpage is a personal portfolio, Google Analytics will help me keep track of the views my page gets. It also collects the data from my site and makes reports accordingly for me to see, which is helpful to know how well my page is performing.
  + (3rd part script) Animation On Scroll Library: 
    + I want to include this library in order to help me with the visual presentation and the animation effect of my page. Upon scrolling further down the page, each section will appear one by one for aesthetic effect. Note: The animation will be disabled on mobile devices!
    + Source: https://github.com/michalsnik/aos
  + (3rd party script) The submit button on the contact form has now been added a linked script that can send the submitted info to a Google Sheet. 
    + I included this script in order to help me manage the contact info that the users put in on my web page. This will help me keep track of who has contacted me and wanted to connect with me!
    + Source: https://github.com/jamiewilson/form-to-google-sheets#7-adding-additional-form-data
  + Include links that lead to my previous workplace as well as my current college (UCSD) under the caption of the images so that the users can learn more about my workplace and undergraduate educational institution.
- HW5:
  + Added methodtest.html with ID, Article-Name, Article-Body. 
  + Added the "View Blog" & "HTTP" buttons on the navbar of the public portfolio page
    + When click on "View Blog" button, the CRUD page with no edit/add/delete buttons will be displayed.
    + In this page, there is also a "Go Back to Homepage" button that will redirect the users back to the portfolio site.
  + Added the Sign In button with the Firebase Authentication Tool
    + This button will show the separate login form that the user has to filled in before being able to make the changes to the blog posts.
  + Added a separate login form with the Email and Password input field as well as the "Login" and "Go Back" buttons.
    + With the correct email and password, the user will be able to login to the CRUD page in order to add, edit and delete posts!
    + If the user clicks on "Go Back", they will be redirected to the CRUD page that do not have the add/edit/delete buttons.
  + Added the info to tell if the user is logged in or not!
  + Added the required fields for each blog post
    + Post title
    + Post date
    + Post author
    + Post content


CHANGED 
- HW4:
  + The HTML structure of the contact form has been changed so that it would work with the new added script. 
  + Upon the submit button is clicked, all previous inputs on the form will be cleared and an alert will pop up to let user know if their info has been successfully submitted or not!
  + Optimize the image size by changing the image formats to AVIF with a PNG/ JPG fallback.
  + Change the size of the footer's width so that there is no overflow in the responsive design. Note: The responsive design should work for almost all dimensions on the Chrome Dev Tool now.
- HW5:
  + Changed the format of the JSON text response to pretty-print them in a table format.
  + Improve the responsive design so they look and fit better on mobile devices.
  + Continue optimizing the image size by changing the image formats to AVIF with a PNG/ JPG fallback.
  + Add a label for an input field to optimize accessibility.
  + Make the caption of the images to be more descriptive to optimize accessibility.
  + Change the styling of the CRUD page so that it fits with the aesthetic of the portfolio page.
  + Change the styling for the login form
  
FIX
  + Fix the bug where the page is blank and we have to add a new post!

