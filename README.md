# StudBud
## This is the StudBud project for Assessment 3 Web Prototype.
### This web application contains six web pages: the initial home page(index.html in HTML, styles.scss in styles, scripts.js in scripts), sign up page, login page, the main home page, calendar page, music and timer page. Each of these pages contains some curial functionalities of this web application. 

#### Iteration & Self-reflection:

Based on the tutor's feedback, the mock-up I did in A2 was more like only focusing on the mobile app design. However, seeing as mobile devices and desktops are making up half-half of web traffic, we must account for both of them. Thus at the beginning of the A3, I had my responsive designs fully figured out. To make the functions perfectly match the responsive devices, I had also adjusted some of the designs; for example,  instead of creating different buttons at the bottom to be the navigation to each page, I have made a unified navigation bar at the top and a sidebar the right. Then go through several rounds of useability testing to understand users' needs deeply. During the think-aloud process, I noticed that users would typically ignore the right sidebar, and some of the users complained that the right sidebar felt a bit wired when it popped up from the right. Thus, I changed the sidebar to the left. In addition, to enhance the concentration of the sidebar, I have implanted the icons corresponding to the text from the Fonts Awesome website(Font Awesome 5, 2017). (For all the formal apa6th references, please see the reference list below). 

The main feedback that I have gathered from users is the user interface of the mock-up was pretty but somehow confusing. During the interview, one of the participants provided a piece of precious advice; he said: " Less visual business might make it easy to pick the way through it. I find all those borders and shades in the following interface distracting, and I bet overall, it slows people down when interacting with it." The feedback gathered from SUS testing also reflected similar problems. During the second round of interviews, one of the participants conveyed that she usually feels pretty stressed out when she opens such a detailed study/planning application, especially after studying; a simple but useful one would be her choice. Thus I decided to change to a minimalist design.

Thus, I simplified the design by removing all the complicated and detailed designs and irrelevant or rarely needed contents. Instead, make everything straightforward, and keep UI's content and visual design focused on the essentials to meet users' needs. For example,

On the Home page, based on users' feedback, I know that the "add task button" is hard to notice, and the design of those blocks of study sessions is a bit distracting and a bit difficult to understand, indicating what would be next. So, therefore, I removed those blocks and put one single text input box on the page so users could straightly type in their tasks, and the priority rating would appear with the task that they typed in, which is available for users to choose. Also, instead of using time blocks (based on the users' feedback, the time blocks would be less efficient, as users have to keep scrolling down the screen until they find out the right time block if the due time was late in the day.) So, I set out the "due date" and "time" as a form of <input type=" date">, so users could manually choose any date and time by selecting the input value. Give users much more control and freedom.

Also, make the competition status more evident by adding a small circle in front of each task; if the user completes the task, they could simply press the circle, and the whole task would be marked out. With the "more" icon, users could edit and delete the tasks. In the last round of usability testing, users suggested that the task list was not obvious enough, so I changed the background colour from white to a gradient #1C6BA4 to match the central theme; in contrast, the task list would be more focused. Based on the participants' feedback in the last interview, I added one more clear all button if users finish all the tasks and would like to clear all of them at once. The home page code was inspired and taught by the knowledge we learned in the class and some online coding tutorials. For example, the Easytutorials for the navigation bar(Easytutorials, 2022) and Coding Nepal for the task list(CodingNepal, 2022) from the Youtube channel. Here is how the previous mock-up compared to the web application. 

![home](https://user-images.githubusercontent.com/75123393/171645171-8dcb24ba-b288-472a-a5f8-471cab143716.png)

The design of the music page iterated a lot based on several rounds of usability testing. Most of the participants felt confused about where could they find out the song list to choose different songs in the mock-up. And also, the like button would be useless, as there is no container for the liked songs. Therefore, I made a song list hidden by a small "below" button. However, most users still ignored the button while I tested it out in the think-aloud process. Thus I changed the overall structure of the player; instead of using the single music player interface, I combined the current playing song and the song list together on one page, so users could switch between their favourite songs at will without disturbing their attention to studies(As they don't have to navigate to another page) which improved the flexibility and efficiency of use. The code of this page was initially inspired by the online coding tutorial called Coding Artist(Coding Artist, 2022); however, the code I learned could not work for my design goal; thus, I changed all of them based on some research and help from my tutors. All the music and pictures used here for music are retrieved from the NCS(NoCopyrightSounds) website(https://ncs.io/).  

![timer](https://user-images.githubusercontent.com/75123393/171650017-65dfffcb-cc92-4033-96e4-310bb8786d5e.png)

The mock-up of the timer page also has too many details that would be distracting. Therefore, based on the tutor and users' feedback, to make the page clean and more straightforward, I made the timer look like a tomato by adjusting the CSS, so it could be more exciting and fit the theme Pomodoro timer to remain consistent. Also, instead of having three buttons to represent the "play", "pause", and "reset",  I set the play and pause function on the same button, whether "start" or "stop", which makes the page cleaner and consistent. Also, I added one set button at the bottom of the timer, and if users press the button, they can reset it any time they want by adjusting the numbers straightly. Finally, in the end, I added the back button on all the pages to allow users to remain in control of the system and avoid getting stuck and feeling frustrated. 

![music](https://user-images.githubusercontent.com/75123393/171645371-ffa60595-932f-4277-a8ee-e531d1f26382.png)







### References:
Coding Artist. (2022, May 10). Custom Music Player Javascript | Step By Step Javascript Project. Retrieved June 1, 2022, from www.youtube.com website: https://www.youtube.com/watch?v=-mw_XRTPftk&t=1707s

CodingNepal. (2022, February 21). Create A Todo List App in HTML CSS & JavaScript | Todo App in JavaScript. Retrieved from www.youtube.com website: https://www.youtube.com/watch?v=2QIMUBilooc

DarkCode. (2019, January 11). 4 Awesome icons hover effect using only HTML & CSS. Retrieved June 1, 2022, from www.youtube.com website: https://www.youtube.com/watch?v=mrTwZmdfRVE

Easytutorials. (2022, January 17). How To Make Responsive Social Network Website Design Using HTML And CSS | Part 3. Retrieved June 2, 2022, from www.youtube.com website: https://www.youtube.com/watch?v=wIvbG3GFje8

Estudar | Ícone Gratis. (n.d.). Retrieved June 2, 2022, from Freepik website: https://br.freepik.com/icones-gratis/estudar_14853175.htm

Font Awesome 5. (2017). Font Awesome 5. Retrieved from Fontawesome.com website: https://fontawesome.com/

Google Voice Assistant Icon, HD Png Download(1394x1394) - PinPng. (n.d.). Retrieved from Pinpng.com website: https://www.pinpng.com/picture/hoiwTi_google-voice-assistant-icon-hd-png-download/

html - Space between link and icon, fontawesome. (n.d.). Retrieved June 1, 2022, from Stack Overflow website: https://stackoverflow.com/questions/27969485/space-between-link-and-icon-fontawesome

Isaiah, A. (2020, August 2). How to build a Pomodoro Timer App with JavaScript. Retrieved June 2, 2022, from Freshman — Articles and Tutorials on Software Development website: https://freshman.tech/pomodoro-timer/

K, S. (2021, December 22). Build a Pomodoro Timer using HTML, CSS, and JavaScript. Retrieved June 2, 2022, from Medium website: https://javascript.plainenglish.io/build-a-pomodoro-timer-using-html-css-and-javascript-7a7a8410052c

Need You Now (feat. Danica) by VENEMY + Danica on NCS. (n.d.). Retrieved June 2, 2022, from ncs.io website: https://ncs.io/NeedYouNow

On & On (feat. Daniel Levi) by Cartoon + Daniel Levi on NCS. (n.d.). Retrieved June 2, 2022, from ncs.io website: https://ncs.io/onandon

Throne by Neoni + Rival on NCS. (n.d.). Retrieved June 2, 2022, from ncs.io website: https://ncs.io/Throne

Where We Started (feat. Jex) by Lost Sky + Jex on NCS. (n.d.). Retrieved June 2, 2022, from ncs.io website: https://ncs.io/WhereWeStarted