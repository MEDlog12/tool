// Example: Handle video download
document.addEventListener('DOMContentLoaded', () => {
    const videoLinks = document.querySelectorAll('ul li a');

    videoLinks.forEach(link => {
        link.addEventListener('click', (event) => {
            event.preventDefault();
            const videoName = link.textContent;
            downloadVideo(videoName);
        });
    });

    function downloadVideo(videoName) {
        // Replace this with actual video download logic
        // For example, you can simulate a download by displaying a message
        alert(`Downloading "${videoName}"...`);
    }
});