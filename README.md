# (A8) Implementing HTTP Servers and RESTful APIs with Node.js

## A8.1 Introduction

During the 90s, the World Wide Web adoption grew exponentially. Various commercial ventures explored a plethora of use cases that revolutionized how companies interacted with their customers and with other companies. The figure on the right illustrates several integration points between businesses, sometimes referred as business to business or **B2B**. Interactions between businesses and their customers
is often referred to as business to consumer or **B2C**. Companies have largely automated interactions with their customers by implementing online storefronts where customers can browse through products, order
them, review them, and even return them. Interacting with users demands creating visually pleasing user interfaces that grab their attention, entice them to buy products with marketing ads, and establish a long term relation with their customers through incentives such as discounts and loyalty programs.

Thus far we've been focusing on implementing ***user interfaces*** which, as the name suggests, focus on the aspects of an application that interact with users through visually pleasing representations of some data set. The data rendered by these user interfaces has been, up to this point, hard coded JSON files, e.g., tuits.json, profile.json. We learned how to create user interfaces that render and manipulate the data, and then update the screen to reflect the changes. Unfortunately the updates were not permanent, that is, if the browser window was refreshed, all the changes were lost and the state of the application was reset. In general JavaScript applications running on clients such as browsers, game consoles, or TV boxes, have limited options on how to retrieve and store data permanently. The next couple of chapter tackle the challenges of retrieving, storing, updating, and deleting data permanently on remote servers and databases from React.js applications.

## A8.2 Installing and configuring an HTTP Web server

The Tuiter React Web application built so far is the **client** in a client/server architecture. Users interact with client applications that implement user interfaces relying on servers to store data and execute complex logic that would be impractical on the client. Clients and servers interact through a sequence of **requests** and **responses**. Clients send requests to servers, servers execute some logic, fulfill the request, and then respond back to the client with results. This section discusses implementing HTTP servers using Node.js.

### A8.2.1 Introduction to Node.js

JavaScript is generally associated with as a programming language designed to execute in browsers, but Node.js has rescued it from its browser confines. Node.js is a JavaScript runtime that can interpret and execute applications written in JavaScript outside browsers, such as executing JavaScript from a desktop console or terminal. This is important because JavaScript applications written for the desktop can compensate many of the limitations of JavaScript applications written for the browser. For instance JavaScript running on a browser doesn't have access to the filesystem, databases, and have restricted network access. On the other hand, JavaScript running on a desktop has unfettered access to the filesystem, databases, and full network access. Conversely desktop JavaScript applications don't generally have a user interface, and have limited user interaction whereas browser JavaScript applications can interact with users with rich sophisticated interfaces.

### 8.2.2 Installing Node.js

**Node.js** is a JavaScript runtime that can execute JavaScript on a desktop, allowing JavaScript programs to breakout from the confines and limitations of a browser. Node.js should already have been installed in your computer as you worked through the demonstrations and exercises in previous chapters, implementing the
React.js Web application. Nevertheless it's useful to review and confirm you have a working Node.js installation so using your computer terminal or console application, type the following to check the version of Node installed in your machine.

***$ node -v***

***v19.7.0***

### 8.2.3 Creating a Node.js project

Another tool installed along with Node.js is **npm** or **Node Package Manager**. We've been using npm to run React applications in previous assignments. The npm command can be used to accomplish many more tasks, but like the name suggests, its main purpose is to install packages or executable code that npm can download and
install in the local computer. Another important purpose of npm is to create brand new Node.js projects. To create a Node.js project create a directory with the name of the desired project an then change into that directory as shown below. Choose a directory name that does not contain any spaces, is all lowercase, and uses dashes between words.

***$ mkdir tuiter-node-server-app***

***$ cd tuiter-node-server-app***

Once in the directory, use ***npm init*** to create a new Node.js project as shown below. This will kickoff an interactive session asking details about the project such as the name of the project and the author. The following is a sample interaction with sample answers. Each question provides a default answer which can be
accepted or skipped by just pressing enter. It is fine to initially keep all the default values since they can be configured at a later time -- not hugely important.

***$ npm init***

package name: (tuiter-node-server-app)

version: (1.0.0)

description: Node.js HTTP Web server for the Tuiter application

entry point: (index.js)

test command:

git repository: https://github.com/jannunzi/tuiter-node-server-app

keywords: Node, REST, Server, HTTP

author: Jose Annunziato

license: (ISC)


The configuration will be written into a new file called "package.json" in the JSON format and it's distinctive of Node.js projects, like pom.xml files might be distinctive for Java projects.


### A8.2.4 Creating a simple Hello World Node.js server application

### A8.2.5 Creating an HTTP Web server

**Express** is one of the most popular Node.js libraries simplifying creating HTTP servers. We'll use express to implement HTTP servers that can respond to HTTP
requests from any HTTP client, but our React.js client in particular. From the root directory of the Node.js project, install the express library from the terminal as shown below.

***$ npm install express***

A new entry should appear in package.json in the dependencies property. It is important these dependencies are listed in package.json so that they can be re-installed by other colleagues or when deploying to remote servers and cloud platforms such as **AWS**, **Heroku**, or **Render.js**. New libraries are installed in a new folder called node_modules. More Node.js packages can be found at npmjs.com.

### A8.2.6 Configuring Nodemon

Now instead of using the node command to start the server, use nodemon as follows:

***$ nodemon app.js***

### A8.2.7 Configuring Node.js to use ES6

#### ES6 Modules: A Beginner’s Guide
#### https://robertmarshall.dev/blog/es6-modules-a-beginners-guide/

##### What are ES6 modules?

ES6 modules are JavaScript modules that are used to import and export functions, objects, or primitive values from one file to another.

Modules are the piece or chunk of a JavaScript code written in a file. JavaScript modules help us to modularize the code simply by partitioning the entire code into modules that can be imported from anywhere. Modules make it easy to maintain the code, debug the code, and reuse the piece of code.

##### What is the different between Common JS and ES6 Modules?

Common JS and ES6 modules are very similar in their syntax. However they work in very different ways. Common JS is the original and default module system of Node.js. It uses require and module.exports 

##### What are the benefits of ES6 modules?

ES6 uses import and export. This means you only load the modules that you need, and the importing of the modules is asynchronous. ES6 Modules are generally more efficient with large scale applications due to the way that import modules. 

## A8.3 Creating HTTP controllers

In the context of HTTP servers and Web APIs, controllers are functions, classes, or modules whose only role is to handle HTTP requests and participate in a client/server architecture.

### A8.3.1 Requesting data from a Web server with a browser

Controllers are responsible for defining HTTP endpoints that client applications, such as React and mobile applications, can invoke through HTTP requests, cause some function execution on the server, and respond with a result. Creating a controller per type of data is a common strategy to break up the source code. 

## A8.4 Interacting with a Web server using Postman

So far we've interacted with the Web server by just typing URLs into a browser and viewing the servers response in the browser's window. Unfortunately this takes us only so far since we can only generate **GET** requests from a browser's URL field. To generate other types of HTTP requests such as **POST**, **PUT**, and **DELETE**, we're going to need either JavaScript or tools such as ***Postman***, a popular networking test tool well worth learning about.


### 8.4.1 Installing and running Postman

Postman is a tool for creating, scripting and testing HTTP requests. To install postman, head over to their Website at postman.com and download the latest version of the tool. Run the installer and follow the instructions accepting all the default configurations. Once installed, run postman to start using the
tool. To practice, reimplement the earlier queries using Postman.


### 8.4.2 Requesting data from a Web server using Postman

Postman collections help organize related sets of HTTP requests into groups. Create a collection to contain all the requests we're going to practice with in this section. On the far left top of the main window, select Collections and click the plus sign to create a new collection named cs-4550, cs-5610, web-dev, or something memorable. Click the star next to the new collection to favorite it and have it listed near the top of the collections list so you can find it later. While the collection is selected, click the three horizontal dots and select Add request and name the new request find all users in the window that appears on the right. Under the name of the request, make sure the HTTP method is the default GET. In the field Enter request URL, type the URL
used earlier to retrieve all the users, e.g., http://localhost:4000/api/users, press the blue Send button on the right and confirm that the same array of users appears below in the Response window.


### 8.4.3 Posting data to a Web server using Postman

In prior exercises we sent data to the server by encoding it as part of the path or query parameters which is limited and unsafe since browsers impose a limit in the length of the URL and it is sent to the server in plain text, visible to any prying eyes between the client and the server. Alternatively data can be sent to the server embedded in the body of the HTTP request where it can be encrypted for safe transmission. The function createUser below can read data posted to the server, embedded in the HTTP request body, and interpret it as a new user and store it in the users array.

Out of the box express does not know how to extract data from an HTTP body. Express defines a JSON middleware to parse data from the body. All requests will first go through this middleware parsing the HTTP body into a JSON object added to the request object in a new body property that later HTTP handlers can access.

### 8.4.4 Deleting data from a Web server using Postman

### 8.4.5 Updating data in a Web server with Postman

We're done with create, read, and delete. We just have one more to go: update. For each of the operations created so far we used the following HTTP methods:

● **POST** to create data

● **GET** to retrieve (or read) data

● **DELETE** to remove data

It is common to use HTTP **PUT** for updating data. To update the collection of users we'll recreate a brand new array of users merging the old user with the new version of the user. We'll iterate through the original array of users and when we find the user that needs to be updated we'll merge the old version overriding the fields passed in the HTTP BODY as implemented in updateUser below.

## A8.5 Implementing Tuiter RESTful Web service APIs

The URLs, operations, and formats used in the previous section collectively follow a popular convention called **Representational State Transfer** or **REST**. The conventions are summarized as follow.

● Use ***plural nouns*** to refer to resources, e.g., users, tuits, todos, orders, products

● Use ***POST*** to create new instances of those resources

● Use ***GET*** to read/retrieve existing instances of those resources

● Use ***PUT*** to update existing instances of resources

● Use ***DELETE*** to remove/delete existing instances of resources

● Encode the ID of the resource following the name of the resource to refer to a specific resource instance

The collection of HTTP handlers that create, read, update, and delete instances of a particular resource, that collectively implement a Web API that follow the REST conventions are referred to as ***RESTful Web service APIs***.


## A8.6 Integrating React applications with RESTful Web service APIs

Now that we have a ***middle tier***, let's take a look at how to integrate our React application with the RESTful Web service APIs implemented so far. Locally the server application runs on ***localhost:4000*** and the React application runs on ***localhost:3000*** and integrating these two applications consists of exchanging HTTP messages. Browsers enforce security policies that don't allow JavaScript downloaded from one domain to communicate with other domains. Servers can be configured to allow sharing resources across domains. Let's install the cors library to configure servers to allow interoperability from scripts in other domains.

**$ npm install cors**

**CORS** stands for ***Cross Origin Resource Sharing*** and establishes the rules by which resources can be shared across domains (origins). Configure CORS in app.js by importing it and using it as the first middleware.


**Axios** 是一个基于promise 网络请求库，作用于 node.js 和浏览器中。 它是isomorphic 的(即同一套代码可以运行在浏览器和node.js中)。 在服务端它使用原生node.js http 模块, 而在客户端(浏览端) 则使用XMLHttpRequests。

In the React application install **axios**, a library to programmatically send and receive HTTP requests..

**$ npm install axios**

In the Node.js server application, we implemented all the tuits related endpoints in one file: tuits-controller.js. We'll follow a similar strategy on the React.js client application implementing all tuits related HTTP communication in tuits-service.js under a new services folder. Declare the four common CRUD operations and implement them in the following sections. The functions are all implemented as asynchronous functions that will not block the browser's sole JavaScript thread. Instead they will rely on the browser's multithreaded capabilities to send HTTP requests asynchronous and notify our functions when responses eventually resolve. We'll implement each service function in the sections that follow.


### A8.6.1 Requesting data from a RESTful Web Server API from React

Let's first implement ***findTuits***, the easiest of the services that retrieves all the tuits from the server. The ***findTuits*** function sends an HTTP GET request to ***TUITS_API*** using the ***axios.get()*** function. The request is asynchronous as evidenced by the ***async*** and ***await*** keywords and the response will be set when the request resolves from the server. The data in the response is the tuits array sent back from ***findTuits*** in ***tuits-controller.js*** and it's embedded in the response's ***data*** property.

In previous assignments, reducers were used to keep track of the tuits, initialized from JSON files imported from within the reducers, but now we want to use data from the server instead. Previous implementations used reducer functions to update the state of the tuits array by adding new tuits to the state, deleting tuits, and modifying tuits in a redux store. Now we need to replace this implementation with the HTTP services we implemented in the Node.js server in the previous section. The reducers we've already implemented that create, delete, and update tuits, are all synchronous, manipulating data local to the React.js application, but we need to instead interact asynchronously with an HTTP server, while still maintaining a state with Redux. The Redux createAsyncThunk function can wrap an asynchronous HTTP function so that it can interact with a Redux reducer to store data from a remote server into a local redux store. In tuits-thunks.js, create the findTuitsThunk function that wraps the findTuits HTTP service function as shown below. We'll implement
thunks for each service function in later sections.


## A8.7 Deploying **RESTful** Web service APIs on a public remote server

## A8.8 Conclusion

In this chapter we learned how to create HTTP servers using the Node.js JavaScript framework. We implemented RESTful services with the Express library and practiced sending, retrieving, modifying, and updating data using HTTP requests and responses. We then learned how to integrate React.js Web applications to HTTP servers implementing a client server architecture. In the next chapter we will add database support to the HTTP server so we can store data permanently.


## A8.9 Deliverables
As a deliverable, make sure you complete all the exercises in this chapter. For both the React and Node repositories, all your work should be done in a branch called a8. When done, add, commit and push both branches to their respective GitHub repositories. Deploy the new branches to Netlify and Render.js (or Heroku) and confirm they integrate. Submit links to both your GitHub repositories as well as the Netlify and remote Node URLs where the branches deployed. Here's an example on the steps:

Create a branch called a8

***git checkout -b a8***

***\# do all your work*** 


Once you've completed all your work, add, commit and push your work to the remote repositories. Add, commit and push the new branch

***git add .***

***git commit -am "a8 REST spr23"***

***git push***