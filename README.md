# Multiplication Game
Having worked as a teacher for many years, I feel that knowing times table is a really important basis for learning more challenging maths. This game allows children (or an adult who wants to improve their times tables skills) to practice specific times tables and also to challenge themselves against the clock on random times tables. Times tables need to be committed to long-term memory and the only way to do this is through repetition. This game allows for that repetition and gives scores and challenges in order to motivate the user.

## UX
This game is aimed at children who can use the website to improve their times tables skills. Of course, adults can use it as well. Many times tables websites are flash games which do help to motivate the child but have the issues of: 
- Little control over which times table to practice.
- Use of flash is not available very easily on iPads.
- Levels are not differentiated.
- Games websites often have heavy advertising which a child can inadvertantly click on. 


This website could be used:
- By a child at home wanting to do some extra times tables practice.
- By a teacher teaching a whole class with the game on the interactive whiteboard. For example, if they are working, as a class, on their 2x table, they could have little game to see which team can score the most points.
- By a child in an IT suite or on a tablet with the teacher overseeing.

User stories:
- As a teacher, I want a quick and easy way to practice times tables with my class.
- As a teacher, I want differentiated levels of challenge.
- As a teacher and user I want the ability to control what times table the class/ I practice.
- As a user, I want to see a score as I get correct answers so that I can compete with my peers.
- As a user I want to learn from my mistakes.
- As a user, I want to navigate easily through the website.

### Wireframes:

- [Game on computer](/assets/wireframes/computer.jpg)
- [Game on mobile](/assets/wireframes/mobile.jpg)

## Features
The initial page on load up presents the user with a title and allows the user to select a times table to try. This can be any number so they could opt for the 16454 times table! They will only be asked questions up to x12 though. Underneath are the challenges of three differentiated levels. The user needs to scroll down on larger screens. A teaser encouraging the user to scroll down helps with this.

After selecting a number, the screen changes to the activity screen with a score, timer, question area, input answer area and a start button. When the user starts, the timer counts down from 10 and a times table question appears on screen. The cursor automatically focuses on the answer input area and the user can enter their answer. The start button changes to an answer button and the user can click on this to answer or click enter. 
If a correct answer is given, the remaining amount of time is added to the score. For example, if it takes 2 seconds to answer correctly, there are 8 seconds left so 8 is added to the score. If an incorrect answer is given, then no score is given and the correct answer is shown. If the timer runs out, the score is reset. So it is better to try and get it wrong than to not try at all!
The user must select next to get the next question, leaving them in control of their practice. At the bottom of the page is a back button to take the user back to the initial screen.

### Challenges
There are three levels of challenge- gold, diamond and platinum. For these, the user is given 2 minutes and the timer keeps going and the questions keep being asked automatically. The questions are random times table questions from any of the 12x tables. 
For the gold challenge, the user must get 24 questions correct in 2 minutes in order to achieve gold standard, 36 for diamond and 48 for platinum. This time, the score only adds on one for a correct answer. The answer button and start button are shown here as the user may want to start again during the challenge.

### Existing Features
**Times Table Input:** The user can choose their own times table to practice, allowing for different ability levels.
**Challenges:** The user can test themselves against the clock to see if they can overcome the challenges. This adds a layer of motivation.
**Score:** A score is given and goes up with every correct answer- again, giving motivation.
**Feedback:** The user gets instant feedback on whether they are correct or incorrect with a tick or a cross. If they are incorrect, the correct answer is given to help the user to learn.
**Back button:** This allows the user to navigate back to the initial page to choose a different times table or challenge.
**Authentication Check** If a number is not entered into the input box when choosing a times table, then an alert message comes up. 

### Features Left to Implement
**Recording score:** The user's score can be saved in the browser so that there is a record of their progress/ highest score. This can be presented to them at the top of the screen. 
**Leaderboard:** With back end in place, user's scores could be collated into a database and a page could be created to present the top scores. This motivates users further. A wireframe for this can be seen [here](/assets/wireframes/leaderboard.jpg) 

## Technologies Used
- This project uses html, css and javascript.
- This project uses [jQuery](jquery.com) to make it easier to manipulate the DOM.
- This project uses [Bootstrap 4](bootstrapcdn.com) to support with structuring the website responsively
- This project uses [Font Awesome](fontawesome.com) in order to get icons
- This project uses [Google Fonts](fonts.google.com) for more interesting fonts

## Testing
### Debugging
Most debugging was done by commenting out pieces of code to isolate issues and by console logging variables. 
Can the user click the question button to get the question and answer button to get the answer?
- I assigned specific functions to each button after issues with some functions running other functions.

Can the user be challenged further by adding a timer?
- I addressed the issue of the timer counting down exponentially quicker if the time was reset. This was because the countdown was not reset when a new question was asked for by the user only when an answer was given.

Does the game look as it should on different devices?
- Had issues with game being too big on larger screens so you could not see all the elements of the game. I used media queries to fix this. Also, I moved around the different elements on the game to make them more accessible.

Can the user find a more difficult challenge?
- Changed from user clicking on a times table question from 1-12 to allowing user to choose whatever times table they wanted. Added gold, diamond and platinum challenges with different rules.

Does the game reset when the user starts again?
- I added a reset function separately and ensured that everything reset when the game was restarted.

Can the user use enter for speed?
- Clicking on answer each time slowed the user down so added the option of clicking enter as well. Also made sure that the focus stayed in the answer box as clikcing on the box each time was tedious.


### Manuel Testing

Initial Page

Input
- Try to enter letters.
    - You can't.
- Try to press go without entering a number.
    - Alert message.
- Enter a number and press go.
    - Works.
- Enter a large number and press go.
    - Works.

Activity
- Press start.
    - Works.
- Enter a correct answer.
    - Works.
- Enter an incorrect answer.
    - Works.
- Enter no answer.
    - Same as incorrect answer.
- Allow the time to run out.
    - Works.
- Click 'start again' and try the above again.
    - Works.
- Click the back button and go forwards and backwards a few times.
    - Works.

Challenges
- Hover over each link.
    - Words drop down.
- Click on each challenge link.
    - Works.
- Click on the back button.
    - Works.
- Try to click on answer button or in answer box before question appears.
    - Disabled so can't.
- Press start.
    - Works.
- Enter a correct answer.
    - Works.
- Enter an incorrect answer.
    - Works.
- Enter no answer.
    - Works.
- Enter answer using both answer button and enter key.
    - Works.
- Allow the time to run out.
    - Works.
- Press start before time has run out.
    - Time restarts.
- Win the game.
    - Works.

### Bugs
- On testing, the buttons sometimes shrunk when going back to a page. There is not an obvious reason why this is happening.

### User Testing
- A group of teachers and teaching assistants (who are also parents) were asked to test this website. The main feedback was that the answer button was on the right and they felt that it was more intuitive on the left. I changed this for the challenges and on the practice, took the buttons out altogether when not needed. 

### Validator Testing

- Used [jshint](https://jshint.com/) to test javascript. It threw up issues with compatibility on older browsers, a few missing semi-colons (fixed) and an unused variable (deleted). 
    - Cyclomatic complexity: median 1, highest 6.
- Used [W3C css validator](https://jigsaw.w3.org/css-validator/) for checking css. No issues detected. 

    <a href="http://jigsaw.w3.org/css-validator/check/referer">
        <img style="border:0;width:88px;height:31px"
            src="http://jigsaw.w3.org/css-validator/images/vcss"
            alt="Valid CSS!" />
    </a>

- Used [W3C html validator](https://validator.w3.org/) for checking html. Warning that type is not needed for javascript link. No harm in it being there, though. Had disabled = true rather than just disabled.

- Speed was tested using [Pingdom](https://tools.pingdom.com/). <br>

Results for index.html:
![](/assets/images/speed.png)  
Results for gold.html:
![](/assets/images/speed2.png)  

### Responsiveness

![](/assets/images/responsive2.jpg) 
![](/assets/images/responsive3.png) 

## Deployment

The site was deployed using GitHub Pages. I did this by:

- Going to Settings
- Scrolling down to the GitHub Pages section
- Choosing master branch as the source

If you would like to clone the repository locally, you can do it like this:

- On GitHub, navigate to the main page of the repository.
- Under the repository name, click Clone or download.
- To clone the repository using HTTPS, under "Clone with HTTPS", click the folder icon. To clone the repository using an SSH key, including a certificate issued by your organization's SSH certificate authority, click Use SSH, then click the folder icon.
- Open Git Bash.
- Change the current working directory to the location where you want the cloned directory.
- Type git clone, and then paste the URL you copied earlier.
- Press Enter to create your local clone.

(taken from GitHub help)

Website: [https://mphil17.github.io/Milestone-Project-2-Maths-Game/index.html](https://mphil17.github.io/Milestone-Project-2-Maths-Game/index.html)

## Credits

Thank you to [Felipe Souza Alarcon](https://github.com/felipe-alarcon) for his help as my mentor. 
I used the [w3schools](https://www.w3schools.com/) website to help with code syntax.
[Tutorial Republic](https://www.tutorialrepublic.com/) helped me with arrays.

### Media

I used [Unsplash](unsplash.com) for the background image (thank you to Luke Chesser). The gold, platinum and diamond background photos were also from this site (thank you to Daniele Levis Pelusi, Sharon McCutcheon and Kalineri).