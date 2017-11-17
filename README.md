
## Buffypedia

Team members
Becky @rb50
Lex @devgrrrl
Tunde @tundeaji1232
Johanna @johanna-hub

[Project Link](https://mighty-bastion-60114.herokuapp.com/)

### Why?
Our task this week was to create an autocomplete website/widget that enables users to quickly find and select words from a list of suggestions, as they type.

### What?
We decided to create a website that would use a list of names of characters from the TV series of Buffy the Vampire Slayer and Angel.  This gave us over 500 name options and gave us the opportunity to have fun with styling.

Our stretch goal was to have a function that enabled the user to search for specific information related to that character through the Wikipedia/IMDB API.

### How?
We first spent a great deal of time planning the software architecture.  We initially thought about division of tasks between the front end and back end.  Then we went through the flow of how data would be passed from the point of keypress by the user, to the server, router, handler and then back to update the DOM.

Once we had finished planning we set up our file system, including our gitignore and npm dependencies.

We needed to create a JSON file for all the character names, which was then accessed by our search function, called within the handler for that specific endpoint.

We were able to use Tape and TDD to test our backend function that searched through the names array and returned matches.

Where possible, we made sure to break up our functions into modules and used module.exports.  We therefore had server, router and handler files as well as a search function file.

Finally, we uploaded the project to heroku.

### Lessons Learned

We initially started setting up our XMLHTTPRequest to the server for the list of matching names using the POST method, assuming that we would then run a GET method to receive the resulting array of matched back. We then realised that the best way to action this would instead to be to run one GET request which would return in it's response the list of matching names.

We initially started running the IMDB API from the back end before realising that this is not easily possible due to the XMLHTTPRequest method being part of the browser functionality and therefore not available on the back end. Therefore we will refactor the code so that the API requests run from the front end.

The datalist element within the HTML was the best element to use for the functionality we wanted, and automatically allows the user to select a name from the list. 
