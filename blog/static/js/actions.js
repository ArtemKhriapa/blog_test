function get_hostname(url) {
    var m = url.match(/^http:\/\/[^/]+/);
    return m ? m[0] : null;
};

var currentUrl = get_hostname(document.URL) + '/blog/all/' ;
//
// $("#content").clone().appendTo("#blog-content");
// $("#content").clone().appendTo("#blog-content");

function getData (currentUrl) {
    $.getJSON(currentUrl, function (data) {
        // alert(currentUrl);
        for (var i in data.results) {
            var newArticle = $("#content").clone()
            // alert(newArticle.html())
            newArticle.attr("style", "");
            newArticle.find("#header-text").text(data.results[i].header)
            newArticle.find("#article-short").text(data.results[i].text)
            newArticle.find("#publishied-date").text(data.results[i].publish_date)
            $('#blog-content').append(newArticle);
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