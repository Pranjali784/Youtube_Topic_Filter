// Function to filter videos based on the keyword
function filterVideos(keyword) {
  const videoElements = document.querySelectorAll('ytd-rich-item-renderer');

  videoElements.forEach(video => {
    const titleElement = video.querySelector('#video-title');
    const title = titleElement.textContent.trim();

    if (!title.toLowerCase().includes(keyword.toLowerCase())) {
      video.style.display = 'none'; // Hide the parent element if video title doesn't match
    } else {
      video.style.display = 'block'; // Show if the video title matches
    }
  });
}

// Listen for messages from the background script
chrome.runtime.onMessage.addListener((message, sender, sendResponse) => {
  if (message.filterKeyword) {
    filterVideos(message.filterKeyword);
  }
});

// Initially filter videos based on stored filter keyword (on extension load or reload)
chrome.storage.sync.get('filterKeyword', (data) => {
  if (data.filterKeyword) {
    filterVideos(data.filterKeyword);
  }
});
