// Wait for the DOM to be fully loaded before running the script
document.addEventListener('DOMContentLoaded', () => {
 
    // Find the element where the time will be displayed
    const timeElement = document.querySelector('[data-testid="test-user-time"]');
 
    // Function to update the time
    function updateTime() {
        if (timeElement) {
            // Get the current time in milliseconds and set it as the element's text content
            timeElement.textContent = Date.now();
        }
    }
 
    // Update the time immediately when the page loads
    updateTime();
 
    // Set an interval to update the time every second (1000 milliseconds)
    setInterval(updateTime, 1000);
 
});