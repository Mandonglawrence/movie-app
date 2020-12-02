# STARE MOVIE APP

Stare Movie App is a simple web application that allows users to view, comment and give ratings to movies.
It is a RESTful API built with Postgresql Database and Node.js for the backend, and React.js for the frontend. It features Json Web Token implementation for the authentication.

## Instructions

1. BACKEND
   1.1) Implement RESTful API to manage films
   Films have the fields:
   - Name
   - Description
   - Realease Date
   - Rating
   - Ticket Price
   - Country
   - Genre
   - Photo
     1.2) The rating is on scale from 1 to 5 and 1 film has several genres.
2. FRONTEND
   2.1) create frontend page /films/ to show all films through API.
   2.2) add redirect from / to /films/
   2.3) implement frontend page /films/film-slug-name to show specific film. URL should have film's slug.
   2.4) implement frontend page /films/create with form to create new film.
   2.5) add registration and authentication
   2.6) add possibility to post comments for each films. Fields "Name" and "Comment" are required.
   2.7) only registered users can post comments

## App data model

![UML](https://github.com/Access-Fullstack/stare/blob/develop/staremovieapp_EERDiagram.png)

## Setup

It's recommended you run everything locally in the same environment you work in
every day.

> first you clone the project from the repository .
> After you've made sure you have the correct versions installed, you
> should be able to just run a few commands to get set up:

```
git clone git@github.com:Access-Fullstack/stare.git
cd into folder
```

run the following commands:

```
 yarn
yarn start
```

```
yarn test
```

## Running the app

> yarn start gets the app up and running

# Contributors

## Backend

1. Andrew Urom
   - Created migrations for the database
   - Worked Registration and Email verification
   - Worked on creating the endpoints
   - Resolved conflit issues
2. Anthony Iwuji
   - Worked on Login and reset Password
   - Set up the working environment
   - Worked Add comment route
   - Resolved conflicts
3. Lawrence Mandong
   - Worked on film CRUD operation
   - comment
   - rating
   - fix bugs

## Frontend

1. Omololu Omolade
   - Worked on the Login Page and wrote test for the login page
   - Worked on the Create new films, Change and Reset page
   - Resolved conflict issues and fix bugs
2. Odira Eze
   - Worked on the Sign up page
   - Styled the modal for the creating new films page
   - Resolved conflict issues and fix bugs
3. Victor Nwike
   - Worked on the Landing page for all films
   - Worked on the Single Page for a film
   - Resolved conflicts and fix bugs
