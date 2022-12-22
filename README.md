#Contact Book.

Added to the Contact Book application the ability to register, login, and user
updates, and work with a private collection of contacts.

##Backend.

Used is a ready-made backend for this task. Check out the
[documentation](https://connections-api.herokuapp.com/docs/). It supports all
necessary operations on the contact collection, as well as registering, logging
in and user update with JWT. I used it instead of your backend created with the
service mockapi.io.

##Routing.

Added routing with the React Router library. The application is have several
pages:

/register - public route to register a new user with a form /login - public
login route of an existing user with a form /contacts - a private route for your
contact list

Added a navigation component Navigation with links to navigate routes.

##User menu.

Created a component UserMenu, that displays the user's email and a logout
button.
