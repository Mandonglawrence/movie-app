#STARE MOVIE APP
Stare Movie App is a simple web application for films. It covers RESTful API, DB, auth and form functionality using Node.js for the backend
and React.js for the front end.

1. BACKEND
   1.1) Implement RESTful API to manage films
   Films have the fields:
   --Name
   --Description
   --Realease Date
   --Rating
   --Ticket Price
   --Country
   --Genre
   --Photo
   1.2) The rating is on scale from 1 to 5 and 1 film has several genres.

2. FRONTEND
   2.1) create frontend page /films/ to show all films through API.
   2.2) add redirect from / to /films/
   2.3) implement frontend page /films/film-slug-name to show specific film. URL should have film's slug.
   2.4) implement frontend page /films/create with form to create new film.
   2.5) add registration and authentication
   2.6) add possibility to post comments for each films. Fields "Name" and "Comment" are required.
   2.7) only registered users can post comments
