chrome.tabs.getSelected(null, function (tab) {
    document.getElementById("output").innerText = '"' + tab.title + ' - ' + tab.url + '"';
    document.getElementById("title_only").innerText = tab.title;
    // select all...
});

