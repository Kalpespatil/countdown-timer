// Initialize empty arrays to store timers and their running state
let timers = [];
let isRunning = [];

// Add an event listener to the "Add Another Timer" button
document.getElementById('addTimerButton').addEventListener('click', function() {
    // Get the timer input container
    let timerInputs = document.getElementById('timerInputs');
    
    // Create a new timer input section
    let newTimerInput = document.createElement('div');
    newTimerInput.classList.add('timer-input');
    newTimerInput.innerHTML = `
        <input type="datetime-local" placeholder="Select Date and Time">
        <button class="startButton">Start Timer</button>
    `;
    
    // Add the new timer input section to the container
    timerInputs.appendChild(newTimerInput);
});

// Add an event listener to handle clicks on the "Start Timer" buttons
document.getElementById('timerInputs').addEventListener('click', function(event) {
    // Check if the clicked element is a "Start Timer" button
    if (event.target.classList.contains('startButton')) {
        // Get the selected date and time
        let timerInput = event.target.previousElementSibling.value;
        
        // If no date and time is selected, exit the function
        if (!timerInput) return;

        // Calculate the target time and current time
        let targetTime = new Date(timerInput).getTime();
        let currentTime = new Date().getTime();

        // If the target time is in the past, show an alert and exit
        if (targetTime <= currentTime) {
            alert("Please select a future date and time.");
            return;
        }

        // Determine the index for this timer and initialize it
        let timerIndex = timers.length;
        timers.push(null);
        isRunning.push(true);
        
        // Start the timer with the duration and index
        startTimer(targetTime - currentTime, timerIndex);
    }
});

// Function to start and manage a countdown timer
function startTimer(duration, timerIndex) {
    // Get the container for displaying timers
    let timerDisplays = document.getElementById('timerDisplays');
    
    // Create a new display section for the timer
    let timerDisplay = document.createElement('div');
    timerDisplay.classList.add('timer-display');
    timerDisplay.innerHTML = `
        <div class="time-section">
            <div id="days-${timerIndex}" class="time-value">00</div>
            <div class="time-label">Days</div>
        </div>
        <div class="time-section">
            <div id="hours-${timerIndex}" class="time-value">00</div>
            <div class="time-label">Hours</div>
        </div>
        <div class="time-section">
            <div id="minutes-${timerIndex}" class="time-value">00</div>
            <div class="time-label">Minutes</div>
        </div>
        <div class="time-section">
            <div id="seconds-${timerIndex}" class="time-value">00</div>
            <div class="time-label">Seconds</div>
        </div>
    `;
    
    // Add the timer display to the container
    timerDisplays.appendChild(timerDisplay);

    // Set up the interval for updating the timer every second
    timers[timerIndex] = setInterval(function() {
        // Calculate the days, hours, minutes, and seconds left
        let days = Math.floor(duration / (1000 * 60 * 60 * 24));
        let hours = Math.floor((duration % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
        let minutes = Math.floor((duration % (1000 * 60 * 60)) / (1000 * 60));
        let seconds = Math.floor((duration % (1000 * 60)) / 1000);

        // Update the timer display
        document.getElementById(`days-${timerIndex}`).textContent = `${days < 10 ? '0' : ''}${days}`;
        document.getElementById(`hours-${timerIndex}`).textContent = `${hours < 10 ? '0' : ''}${hours}`;
        document.getElementById(`minutes-${timerIndex}`).textContent = `${minutes < 10 ? '0' : ''}${minutes}`;
        document.getElementById(`seconds-${timerIndex}`).textContent = `${seconds < 10 ? '0' : ''}${seconds}`;

        // If the duration is over, stop the timer and show an alert
        if (duration <= 0) {
            clearInterval(timers[timerIndex]);
            isRunning[timerIndex] = false;
            document.getElementById(`days-${timerIndex}`).textContent = '00';
            document.getElementById(`hours-${timerIndex}`).textContent = '00';
            document.getElementById(`minutes-${timerIndex}`).textContent = '00';
            document.getElementById(`seconds-${timerIndex}`).textContent = '00';
            alert("Time's up!");
        } else {
            // Decrease the duration by 1 second
            duration -= 1000;
        }
    }, 1000);
}
