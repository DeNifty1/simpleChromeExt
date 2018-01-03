chrome.tabs.getSelected(null, function(tab) {

    document.getElementById("theUrl").innerHTML = tab.url;

    chrome.tabs.executeScript(null, {
        code: 'results = document.body.outerHTML;'  //if using file use file: 'filename.js'
    }, (results) => {
        // console.log(results[0]);
        var hrefCount = (results[0].match(/href/g) || []).length;
        var srcCount = (results[0].match(/src/g) || []).length;
        document.getElementById("info").innerHTML = 'Links: ' + hrefCount + ' ("href" occurrences)<br>Images: ' + srcCount + ' ("src" occurrences)';
        // document.getElementById("info").innerHTML = results[0];
    });

});
