# Restaurant Application
w/ Authentication

## Instructions
To try-out the live version click this link:
[Restaurant App](https://radenar.github.io/restaurant-app-front/)

The back-end can be found at the following link:
[Back-end](https://raden-restaurant-app.herokuapp.com/)

To run locally, run the following in terminal from the project directory:
```sh
grunt serve
```
To deploy, run the following in terminal from the project directory:
```sh
grunt deploy
```

## Planning and Development process
1.    Wireframes and User Stories were made first
2. Back end was made before the rest of this, see the link below to go to that repository
3. Files for authentication (event.js, api.js and ui.js) were made.
4. Forms for authentication were made and connected to the code for authentication in the files mentioned above.
5. Show and hide functionality was then made for authentication.
6. Files for restaurant events were then created (event.js, api.js and ui.js)
7. Functionality for restaurants were then added to the files.
8. Handlebars file was made to display the restaurants.
9. Restaurant creation and update forms were then created.
10. Some initial styling was done.
11. Restaurant updating was changed into inline updates.
12. Restaurant adding was changed into a modal.
13. Validation was done for integer and boolean feilds for adding.
14. Updating was validated through key stroke allowance for the content editable field.
15. Reservation relationship was added to back-end (see details in back-end repository).
16. Reservation files were added (event.js, api.js and ui.js)
17. Reservation form was added as a modal to html
18. Handlebars file was made to display the reservations.
19. Added styling and an image to the application as a whole.

CHANGE THE FOLLOWING!!!!!!!!!!!!!!!!!!!
## Problem solving strategy
* What is the error?
* What function is causing the error? If unsure, start from the index.html and move down the chain (app.js, events.js, api.js, ui.js)
* What is that function returning?
* What is the function being passed?
* If the problem is what it is being passed work back to the function before, if it is returning correctly more the other way down the chain.
* If unsure of the above process, look through old issues and google relevant keywords.
* If there is still an issue, open an issue on the issue que.

## Built With

* [jQuery](https://jquery.com/) - DOM Manipulation
* [AJAX](https://api.jquery.com/category/ajax/) - AJAX used for API calls
* [Javascript](https://developer.mozilla.org/en-US/docs/Web/JavaScript) - Language for site functionality
* [Bootstrap](https://getbootstrap.com/) - Used for more advanced styling
* [CSS3](http://www.css3.info/) - Used in conjunction with bootstrap for styling
* [HTML5](https://developer.mozilla.org/en-US/docs/Web/Guide/HTML/HTML5) - Used for general structure of webpage

Back-end:
* [Ruby](https://www.ruby-lang.org/en/)
* [Ruby on Rails](https://rubyonrails.org/)
* [Postgres](https://www.postgresql.org/)

## WireFrames
![alt text](https://i.imgur.com/NeS7VJM.png "Wireframes")

## User Stories
* As a user, I want to be able to sign in.
* As a user, I want to be able to sign up.
* As a user, I want to be able to sign out.
* As a user, I want to be able to change my password.

* As a user, I want to be able to add a restaurant.
* As a user, I want to be able to update information about a restaurant.
* As a user, I want to be able to delete a restaurant.
* As a user, I want to be able to see all the restaurants.

* As a user, I want to be able to add a reservation.
* As a user, I want to be able to see all reservations.
* As a user, I want to be able to delete a reservation.

## Unsolved Problems (that will be fixed in the future iterations)
* Updating list on creating a new restaurant


## Possible future additions
* Ability to edit reservations
* Ability to get one specific restaurant (possibly using search by name functionality)

## Links to Repositories
[Front-end](https://github.com/RadenAR/restaurant-app-front)

[Back-end](https://github.com/RadenAR/restaurant-app-back)

## Author
* Raden
