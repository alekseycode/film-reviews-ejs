# COMPLETED TASKS
- created index.js
- installed npm, express, mongoose, morgan, ejs, dotenv
- created /routes folder & viewRouter.js
- created /views folder & index.ejs
- rendered index.ejs file via viewRouter.js
- created /database folder & mongodb.js
- created .env file
- linked mongodb database in mongodb.js
- created JSON objects for films
- created /models folder & allFilms.json file, filmModel.js file
- created /controllers folder & /api, /view folders
- created filmController.js file in /controllers/api
- made a getAllFilms() function in filmController.js
- created a /api folder in /routes
- created filmRouter.js file in /routes/api
- imported getAllFilms() function in filmRouter.js 
- created a URL route for getAllFilms() in filmRouter.js
- required filmRouter.js in index.js
- set url route to use filmRouter.js in index.js
- successfully read (GET) data using postman **MILESTONE**
- created allFilms.ejs in /views
- created viewController.js in /controllers
- created renderAllFilms() function in viewController.js
- required renderAllFilms() in viewRouter.js
- set up a get request to render allFilms.js in viewRouter.js
- write a forEach in allFilms.ejs to render all the films
- set up a view to render ALL the films on the client **MILESTONE**
- made a createFilm() function in filmController.js
- imported function and set up URL route in filmRouter.js
- added app.use(express.json()) in index.js to read client-side json
- added ability to create a film via postman **MILESTONE**
- made a getOneFilm() function in filmController.js
- imported getOneFilm() & set up URL route in filmRouter.js
- created oneFilm.ejs file in /views
- wrote in ejs properties to render the film data in oneFilm.ejs
- made a renderOneFilm() function in viewController.js
- imported renderOneFilm() & created URL route in viewRouter.js
- set up view to render ONE film on the client **MILESTONE**
- added links to every title to link to its own page
- made a updateOneFilm() function in filmController.js
- imported updateOneFilm() & created a URL route in filmRouter.js
- added ability to update a film via postman **MILESTONE**
- created a deleteFilm() function in filmController.js
- imported deleteFilm() in filmRouter.js
- added ability to delete a film (full CRUD) via postman **MILESTONE**
- created a createFilm.ejs file in /views
- created a form in createFilm.ejs to accept client inputs
- made renderCreateFilmForm() function in viewController.ejs
- imported renderCreateFilmForm() and created a route in viewRouter.ejs
- updated createFilm() function to accept client inputs and redirect to new film page
- added ability to create a film via client **MILESTONE**
- added working navbar in index.ejs
- created updateFilm.ejs file in /views
- made renderUpdateFilmForm() function in viewController.js
- imported renderUpdateFilmForm() and made a URL route in viewRouter.js 
- installed and required method-override
- created form in updateFilm.ejs to update data
- updated updateFilm() function in filmController.js to accept user inputs & redirect to oneFilm file
- added ability to update a film via client **MILESTONE**
- added update button to oneFilm.ejs file
- updated deleFilm() function in filmController.js to redirect to /allFilms
- added form for delete method in oneFilm.ejs
- added ability to delete a film via client **MILESTONE**
- created /public folder 
- created /stylesheets, /js, /images inside /public
- added app.use(express.static(path.join(__dirname, "public"))); to index.js to serve static files
- moved js files from other project into /js folder
- moved css from other project to /stylesheets
- updated links for styles and js in index.ejs
- moved images from other project to /images folder
- added working home page from other film website **MILESTONE**
- updated index.ejs to have a 'Films' link to allFilms.ejs

# IN-PROGRESS TASKS


# TO DO 
- styled allFilms.ejs page to have good looking films
- styled createFilm.ejs page
- styled updateFilm.ejs page
- created a collection to store reviews
- added ability to create a review for a film **MILESTONE**
