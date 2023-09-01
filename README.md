Instructions and Requirements
Project 01 – Build a Movie Application

Course Value: 60%

Instructions:

As part of a team (2-4 students), create a Movie App using React that meets the following specifications:
Contains the following pages (detailed page specifications further down)
Home Page
About Page
Individual Movie Page
My Favourites Page
The web application should be mobile responsive and work on devices with screen sizes between 320px and 1980px
Be well styled, with a usable user interface that follows basic design best practices:
Text content is readable
Elements are in alignment
Good spacing between elements
Application navigation that is present on all the application’s pages
Use The Movie DB API to get your movie data for use in this application
Details on how to setup an account and get your API key are shown further down
The application should use the browser’s local storage to store the users favourited movies which will be used on the “My Favourites” page
Build your project using the Create React App build script and upload it to your portfolio server and submit a link to your application on the Learning Hub
Detailed instructions on how to properly upload your application to your portfolio server will be provided during the course
Upload your raw development files to the Learning Hub.
Name your project folder using this format:
[student names…]-movie-app
For example: if your group was Larry, Curly and Moe, your folder name would be:
larry-curly-moe-movie-app
Add all team members as contributors in package.json
Do NOT upload the node_modules folder when submitting your assignment.  Failure to do so will result in a 2 mark penalty.

Detailed App Specifications

Note: These are minimum specifications. Feel free to add additional features

The Movie DB API

This project should use The Movie DB API
You will need to create a FREE account to obtain a FREE API Key
First you will need to create a FREE general account with The Movie DB API. Then…
…follow the instructions on how to get your API Key here (look under the section “How do I apply for an API key?”):
https://www.themoviedb.org/faq/api
When you apply for an API key, The Movie DB will ask for a few pieces of personal information (name, app name, app URL, phone number and address). If you do not feel comfortable giving your personal address and phone number, then feel free to use the BCIT Downtown Campus address and phone number
The entire application form must be filled in. Below is a list of boilerplate answers that you can give in order to get an API key.
Application Name: Movie App
Application URL: N/A – Internal application for educational use
Application Summary:
An internal application for educational non-profit use, used mainly for learning how to use an API with React
Address:
Use your home address or use BCIT’s DTC address:
555 Seymour Street, Vancouver, BC, V6B 3H6
Phone Number:
Use your personal phone number or BCIT’s main switch board:
604.434.5734
Email:
Use an email address that you have access to. You will receive your API key in an email
Once you submit your application you will be approved instantly and will be given an API key. You will need this key to make API requests.
Do not share your API key with the general public.
You can share it with your teammate (if you choose to work in a team)
 

Application Page Specifications

All Pages

The following should appear on all pages:
Application title and/or logo that is linkable back to the home page
Mobile friendly navigation that enables the user to go to any page in the application from any page in the application
Home Page

All the requirements from the “All Pages” requirements plus…
Form select element or other UI element (select box, radio buttons, links or just buttons…the UI is up to you) that allows a user to change the current movies displayed between the following options:
Popular
Top Rated
Now Playing
Upcoming (yet to be released)
On initial load of the application the page should display 12 of the most current popular movies (The Movie DB considers popular movies to be those that have the most ratings)
The user can switch this list by using the form select or other UI element to change these 12 movies to:
The 12 most highly rated movies currently out
The 12 most recently released movies (movies that are currently playing)
The next 12 movies that will be released soon (upcoming)
Each movie should display the following information:
The movie’s poster
If a poster is not available, then you should load a generic placeholder image
The movie’s title
The movie’s release date
The movie’s rating (review rating – example: 67%)
A short summary about the movie
A “More Info” button that the user can click on to get additional information on the individual movie page
Optionally the entire movie listing can be clickable to the individual movie page
About Page

All the requirements from the “All Pages” requirements plus…
A simple generic description about the application
Meet the TMDb attribution requirements on this page
The TMDb attribution requirements include showing the TMDb logo and the following message:
"This product uses the TMDb API but is not endorsed or certified by TMDb."
The TMDb logo should be less prominent then the application logo and the logo should be placed in a way that does not give the appearance that your application is endorsed by TMDb
Read about attribution requirements on the FAQ page (look under the “What are the attribution requirements?” section)
https://www.themoviedb.org/faq/api
Click the link below for TMDb logo images:
https://www.themoviedb.org/about/logos-attribution
Individual Movie Page

This page is accessed when a user clicks on the “More Info” link on an individual movie
All the requirements from the “All Pages” requirements plus…
The movie’s poster (or generic placeholder if no poster is available)
The movie’s title
The movie’s release date
The movie’s rating (review rating – example: 67%)
A short summary of the movie’s plot
A button or similar user interface element that allows the user to “favourite” or “heart” or “like” a movie or “unfavourite” or “unheart” or “unlike” a movie if a user has already favourited the movie
When a user favourites a movie, the application should store information about the movie in localstorage using the localstorage web api
When a user unfavourites a movie that movie should be removed from localstorage
 

My Favourites Page

All the requirements from the “All Pages” requirements plus…
If the user has NO favourited movies, then:
Display a message similar to:
“Sorry you have no favourited movies. Return to the home page to add a favourite movie”
If the user DOES HAVE favourited movies, then display all the favourited movies
The movies should be retrieved from localstorage
Each movie should display the following information
The movie’s poster (or generic placeholder if no poster is available)
The movie’s title
The movie’s release date
The movie’s rating (review rating – example: 67%)
A short summary of the movie’s plot
A “More Info” button that the user can click on to get additional information on the individual movie page
Optionally the entire movie listing can be clickable to the individual movie page
