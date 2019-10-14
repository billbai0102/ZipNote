# <center> ZipNotes </center>

Our MHacks project for 2019 is a web app used to help students better utilize their notes in class. The theme is 'social good' and we thought finding a way to make a better learning environment would fit this theme. As well, we implemented the Twilio API to allow students with limited internet, such as those in third world countries, to access the notes by SMS or VoIP.

Our goals are:

> -   use machine learning to compress all students notes and make one master notes document
> -   translate in as many languages as possible
> -   allow note sheets to be sent 'offline' (via text)

Tech stack:

> -   Python 3 + Flask framework
> -   Firebase backend
> -   REST API calls with Postman
> -   HTML, CSS, JS frontend
> -   Twilio SMS API for notes access in third world countries where internet is limited.


## Inspiration
When looking at how we can improve education while also connecting students from different communities, the realization came to us how many countries across the world see education as more of a privilege than as a necessity. Many students all across the world have little to no access to educational resources, while some just need a boost with the resources they already have. We hoped to help these people out with ZipNote.

## What it does
ZipNote is a WebApp that allows students from all across the world speaking different languages to contribute and to learn from notes for particular courses. Our algorithms combine the notes of many users to create one "Super Note" for all people to study, containing all important information and some key points that some may have missed. Not only does this provide an excellent study resource for students in high schools and universities, but it also helps out those who may not have easy access to this data in less fortunate areas. To be able to help those in remote or poor areas as well, our service works fully offline by allowing the user to request notes for ANY course in ANY language by just having a cellular connection.

## How we built it
The core of our program runs on a Flask Web App, with various Python Scripts in order to analyze and combine notes, translate all notes into and from different languages at runtime, Twilio in order to allow for SMS requests, communication to and from Firebase, as well as various JavaScript programs for the functionality of the website.

## Challenges we ran into
The main challenges we had were linking all the aspects of our back-end to the front-end with Flask in a systematic and organized manner. Having our whole web app rely on the functionality of the Python scripts added for difficulty with front end development and design until everything was routed properly.

## Accomplishments that we're proud of
The way our app flows mimics that of various real systems in the sense that we did not hard code the functionality whatsoever and is very scalable given additional content.

## What we learned
We learned the difficulties and tricks to working with Web Apps when it comes to connecting front end to back end.

## What's next for ZipNote
Our goals are to become a large scale platform and eventually apply more complex Machine Learning Algorithms to create better notes custom tailored for each user and their study habbits.

## Built With
> -   ajax
> -   css3
> -   firebase
> -   flask
> -   google-cloud
> -   html5
> -   javascript
> -   python
> -   twilio
> -   blood-sweat-and-tears
