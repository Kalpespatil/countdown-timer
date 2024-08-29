Countdown Timer :

Overview :
This project provides a web-based countdown timer. Users can set one or multiple countdowns to a specific date and time. The application displays the remaining time in days, hours, minutes, and seconds. It also includes basic styling and functionality to enhance the user experience.

Features :
1.Multiple Timers: Users can add and manage multiple countdowns on the same page.
2.Real-Time Countdown: Displays remaining time in days, hours, minutes, and seconds.
3.Alerts: Notifies users if the selected date is not in the future and when the timer ends.
4.Responsive Design: The interface is designed to be responsive and user-friendly.

Files :
1.index.html: Contains the HTML structure of the countdown timer application.
2.count.css: Contains the CSS styles for the countdown timer.
3.count.js: Contains the JavaScript code for the countdown timer functionality.

Setup :
1.Clone the Repository -
https://github.com/kalpeshpatil809/countdown-timer.git

2.Navigate to the Project Directory -
cd countdown-timer 

3.Open index.html -
Open the index.html file in your web browser to view the countdown timer application.

Usage :

1.Add a Timer -
A. Click on the "Add Another Timer" button to add a new timer input section.
B. For each timer, select a future date and time using the datetime-local input field.
C. Click the "Start Timer" button to begin the countdown.

2.View Timers -

A. The countdown timers will be displayed below the input section.
B. Each timer will show the remaining days, hours, minutes, and seconds.

3.Manage Timers -
A. You can add as many timers as needed.
B. Once a timer reaches zero, an alert will notify you, and the timer will display "00:00:00:00".

Code Explanation :

1.HTML (index.html)
The HTML file sets up the structure of the countdown timer application, including input fields for setting the timer and areas for displaying countdowns.

2.CSS (count.css)
The CSS file styles the application, including layout, colors, and button appearances. It ensures the interface is visually appealing and responsive.

3.JavaScript (count.js)
The JavaScript file implements the timer functionality:

A. Event Handling: Adds new timer sections and starts timers based on user input.
B. Timer Logic: Calculates and updates the remaining time in real-time.
C. Alerts: Notifies users if a selected date is in the past or when the countdown reaches zero
