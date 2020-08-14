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

### Features Left to Implement
**Recording score:** The user's score can be saved in the browser so that there is a record of their progress/ highest score. This can be presented to them at the top of the screen. 
**Leaderboard:** With back end in place, user's scores could be collated into a database and a page could be created to present the top scores. This motivates users further. A wireframe for this can be seen [here](/assets/wireframes/leaderboard.jpg) 

## Technologies Used
- This project uses html, css and javascript.
- This project uses [jQuery](jquery.com) to make it easier to manipulate the DOM.
- This project uses [Bootstrap 4](bootstrapcdn.com) to support with structuring the website responsively
- This project uses [Font Awesome](fontawesome.com) in order to get icons
- This project uses [Google Fonts](fonts.google.com) for more interesting fonts





<p>
    <a href="http://jigsaw.w3.org/css-validator/check/referer">
        <img style="border:0;width:88px;height:31px"
            src="http://jigsaw.w3.org/css-validator/images/vcss"
            alt="Valid CSS!" />
    </a>
</p>
     
