chrome.storage.onChanged.addListener((changes, area) => {
    if (area === 'sync' && changes.filterKeyword) {
      chrome.tabs.query({ active: true, currentWindow: true }, (tabs) => {
        chrome.tabs.sendMessage(tabs[0].id, { filterKeyword: changes.filterKeyword.newValue });
      });
    }
  });
  