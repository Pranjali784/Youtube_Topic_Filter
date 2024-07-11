document.addEventListener('DOMContentLoaded', () => {
  document.getElementById('applyFilter').addEventListener('click', () => {
    const filterInput = document.getElementById('filterInput').value;
    chrome.storage.sync.set({ filterKeyword: filterInput }, () => {
      console.log('Filter keyword saved:', filterInput);
      chrome.tabs.query({ active: true, currentWindow: true }, (tabs) => {
        chrome.tabs.sendMessage(tabs[0].id, { filterKeyword: filterInput });
      });
    });
  });
});
