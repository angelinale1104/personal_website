Name: Angelina Le

PID: A16128941

Firebase URL: https://cse134-hw5-353d9.web.app/

Notes: 
- Part 1 - HTTP with JavaScript: https://cse134-hw5-353d9.web.app/methodtest.html
- Part 2 - Emergent Features: 
  + ADDED:
    + Added the "HTTP" & "View Blog" buttons on the navbar of the public portfolio page, which leads to Part 1 and Part 3 of HW5, respectively.
    + Added the info to tell if the user is logged in or not!
    + Added the required fields for each blog post
      + Post title
      + Post date
      + Post author
      + Post content
  + CHANGED:
    + Changed the format of the JSON text response to pretty-print them in a table format.
    + Improve the responsive design so they look and fit better on mobile devices.
    + Continue optimizing the image size by changing the image formats to AVIF with a PNG/ JPG fallback.
    + Add a label for an input field to optimize accessibility.
    + Make the caption of the images to be more descriptive to optimize accessibility.
    + Change the styling of the CRUD page so that it fits with the aesthetic of the portfolio page.
    + Change the styling for the login form
  + Lighthouse before:
    + Performance: 72
    + Accessibility: 88
    + Best Practices: 85
    + SEO: 86
  + Lighthouse after:
    + Performance: 93
    + Accessibility: 97
    + Best Practices: 92
    + SEO: 92
- Part 3 - CRUD Application
  + On the homepage of the portfolio site, there will be a "View Blog" button on the navbar.
  + When a user clicks that, they will be redirected to a page that only displays the blogs with no edit/add/delete buttons (https://cse134-hw5-353d9.web.app/crud.html)
  + In this page, there is a "Go Back to Homepage" button which will redirect the user to the portfolio page. Also, there is a "Sign In" button.
  + When the user clicks that, a separate login form will show up that requires them to enter valid email and password. 
    + If they enter the correct combination and click "Login", they will be redirect to the CRUD page where they can add/edit/delete posts (https://cse134-hw5-353d9.web.app/editcrud.html)
    + If they enter the wrong combination, an alert will pop up and they will be prompted to enter the combination again.
    + If they click on "Go Back", then they will be redirect to the blog display page (https://cse134-hw5-353d9.web.app/crud.html)
  + The list of blog posts should be repopulated with some entries for the graders to play around with. If the graders delete all exisiting posts, the screen should show: "There are no posts to display. Please add new blog posts!"
  + The user should be able to know if they are logged in or not.
    + If they are not logged in, the top right corner will show: "You are not logged in".
    + Otherwise, the top right corner will show: "You are logged in as: {email}"

Submitted files:
+ Part 1:
  + methodtest.html
  + styledmethod.css
+ Part 2:
  + changelog.md
+ Part 3:
  + Display page:
    + crud.html
    + crud.js
    + crud.css
  + Login form:
    + loginform.html
    + loginform.css
  + CRUD page:
    + editcrud.html
    + editcrud.js
    + editcrud.css
+ link.md
+ README.md
