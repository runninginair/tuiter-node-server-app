# (A8) Implementing HTTP Servers and RESTful APIs with Node.js

## A8.1 Introduction

During the 90s, the World Wide Web adoption grew exponentially. Various commercial ventures explored a plethora of use cases that revolutionized how companies interacted with their customers and with
other companies. 

The figure on the right illustrates several integration points between businesses, sometimes referred as business to business or B2B. Interactions between businesses and their customers
is often referred to as business to consumer or B2C. Companies have largely automated interactions with their customers by implementing online storefronts where customers can browse through products, order
them, review them, and even return them. Interacting with users demands creating visually pleasing user interfaces that grab their attention, entice them to buy products with marketing ads, and establish a long term relation with their customers through incentives such as discounts and loyalty programs.



## A8.2 Installing and configuring an HTTP Web server

### A8.2.1 Introduction to Node.js

JavaScript is generally associated with as a programming language designed to execute in browsers, but Node.js has rescued it from its browser confines. Node.js is a JavaScript runtime that can interpret and execute applications written in JavaScript outside browsers, such as executing JavaScript from a desktop console or terminal. This is important because JavaScript applications written for the desktop can compensate many of the limitations of JavaScript applications written for the browser. For instance JavaScript running on a browser doesn't have access to the filesystem, databases, and have restricted network access. On the other hand, JavaScript running on a desktop has unfettered access to the filesystem, databases, and full network access. Conversely desktop JavaScript applications don't generally have a user interface, and have limited user interaction whereas browser JavaScript applications can interact with users with rich sophisticated interfaces.

## A8.3 Creating HTTP controllers

## A8.4 Interacting with a Web server using Postman

## A8.5 Implementing Tuiter RESTful Web service APIs

## A8.6 Integrating React applications with RESTful Web service APIs

## A8.7 Deploying **RESTful** Web service APIs on a public remote server

## A8.8 Conclusion

In this chapter we learned how to create HTTP servers using the Node.js JavaScript framework. We implemented RESTful services with the Express library and practiced sending, retrieving, modifying, and
updating data using HTTP requests and responses. We then learned how to integrate React.js Web applications to HTTP servers implementing a client server architecture. In the next chapter we will add database support to the HTTP server so we can store data permanently.


## A8.9 Deliverables
As a deliverable, make sure you complete all the exercises in this chapter. For both the React and Node repositories, all your work should be done in a branch called a8. When done, add, commit and push both branches to their respective GitHub repositories. Deploy the new branches to Netlify and Render.js (or Heroku) and confirm they integrate. Submit links to both your GitHub repositories as well as the Netlify and remote Node URLs where the branches deployed. Here's an example on the steps:

Create a branch called a8

*git checkout -b a8*

*\# do all your work*


Once you've completed all your work, add, commit and push your work to the remote repositories. Add, commit and push the new branch

*git add .*

*git commit -am "a8 REST spr23"*

*git push*