function get_hostname(url) {
    var m = url.match(/^http:\/\/[^/]+/);
    return m ? m[0] : null;
};


var currentUrl = get_hostname(document.URL) + '/blog/all/' ;
//
// $("#content").clone().appendTo("#blog-content");
// $("#content").clone().appendTo("#blog-content");onClick="window.location.href='http://ya.ru'"

function getData (currentUrl) {
    $.getJSON(currentUrl, function (data) {
        // alert(currentUrl);
        for (var i in data.results) {
            var newArticle = $("#content").clone();
            newArticle.attr("style", "");
            newArticle.find("#article-image").attr("src", data.results[i].image.slice(currentUrl.length-1));
            newArticle.find("#header-text").text(data.results[i].header);
            newArticle.find("#article-short").text(data.results[i].text);
            newArticle.find("#publishied-date").text(data.results[i].publish_date);
            // alert(get_hostname(document.URL) + '/blog/id/' + data.results[i].id)
            newArticle.find("#article-button").attr("href", get_hostname(document.URL) + '/blog/id/' + data.results[i].id +'/');
            newArticle.find("#article-button").attr("target","_blank");
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