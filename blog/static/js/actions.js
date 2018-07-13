function get_hostname(url) {
    var m = url.match(/^http:\/\/[^/]+/);
    return m ? m[0] : null;
};

var currentUrl = postUrl = get_hostname(document.URL) + '/blog/all/' ;



function getData (currentUrl) {
    alert(currentUrl);
    // alert(currentUrl)
    $.getJSON(currentUrl, function (data) {
        // alert(currentUrl);
        for (var i in data.results) {
            alert('data!')

            var txt = document.createTextNode('Some data from JSON : ' + data.results[i].text);
            // var objTo = document.getElementById('data-container');
            // alert(data.results[i].text + " --- " + data.results[i].user)
            var p = document.createElement('p');
            p.appendChild(txt);
            // objTo.appendChild(p);
        };
        nexPage = data.next;
        prevPage = data.previous;
    });
};

function buttonNext() {
    if (window.nexPage != null) {
        var address = window.nexPage
        $('#data-container').empty();
        getData(address);
    }
};

function buttonPrev() {
    if (window.prevPage != null) {
        var address = window.prevPage
        $('#data-container').empty();
        getData(address);
    }
};

function hideButtons(user){
    if (user){
        $('#login-form').css("display","none");
           // alert('user')
    } else {
        $('#logout-form').css("display", "none");
           // alert('not user')
    }
};