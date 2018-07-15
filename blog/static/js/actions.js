function getHostname(url) {
    var m = url.match(/^http:\/\/[^/]+/);
    return m ? m[0] : null;
};

var currentUrl = getHostname(document.URL) + '/blog/all/' ;

function getData (Url) {
    // get json from url
    $.getJSON(Url, function (data) {

        // clear blogplace from old data
        $('#blog-content').empty();

        // build new data from JSON
        for (var i in data.results) {
            var newArticle = $("#content").clone();
            //filling HTML from data
            newArticle.attr("style", "");
            newArticle.find("#article-image").attr("src", data.results[i].image.slice(currentUrl.length-1));
            newArticle.find("#article-image").attr("alt", 'data.results[i].header');
            newArticle.find("#header-text").text(data.results[i].header);
            newArticle.find("#article-short").text(data.results[i].text);
            newArticle.find("#publishied-date").text(data.results[i].publish_date);
            newArticle.find("#article-button").attr("href", getHostname(document.URL) + '/blog/id/' + data.results[i].id );
            newArticle.find("#article-button").attr("target","_blank");
            $('#blog-content').append(newArticle);
        };

        //jpen the buttons if next/prev page is avalable
        if ((data.next != null) || (data.previous != null)){
            $(".nav-section").attr("style", "");
        }

        // actions for buttons
        $("#article-button-prev").click(function(){
            if (data.previous != null) {
                getData (data.previous)
            }
        });

        $("#article-button-next").click(function(){
            if (data.next != null) {
                getData (data.next)
            }
        });
    });
};