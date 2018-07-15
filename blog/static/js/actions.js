function get_hostname(url) {
    var m = url.match(/^http:\/\/[^/]+/);
    return m ? m[0] : null;
};

var currentUrl = get_hostname(document.URL) + '/blog/all/' ;

function getData (Url) {
    alert('in get data')
    $.getJSON(Url, function (data) {

        $('#blog-content').empty();

        for (var i in data.results) {
            var newArticle = $("#content").clone();
            //filling HTML from data
            newArticle.attr("style", "");
            newArticle.find("#article-image").attr("src", data.results[i].image.slice(currentUrl.length-1));
            newArticle.find("#article-image").attr("alt", 'data.results[i].header');
            newArticle.find("#header-text").text(data.results[i].header);
            newArticle.find("#article-short").text(data.results[i].text);
            newArticle.find("#publishied-date").text(data.results[i].publish_date);
            newArticle.find("#article-button").attr("href", get_hostname(document.URL) + '/blog/id/' + data.results[i].id );
            newArticle.find("#article-button").attr("target","_blank");
            $('#blog-content').append(newArticle);
        };

        if ((data.next != null) || (data.previous != null)){
            $(".nav-section").attr("style", "");
        }

        $("#article-button-prev").click(function(){
            if (data.previous != null) {
                alert("prev!");
                getData (data.previous)
            }
        });

        $("#article-button-next").click(function(){
            if (data.next != null) {
                alert("next!");
                getData (data.next)
            }
        });
    });
};


// function buttonNext(window.dataNext) {
//     $('#blog-content').empty();
//     getData(dataNext);
// };
//
// function buttonPrev(dataPrevious) {
//     $('#blog-content').empty();
//     getData(dataPrevious);
// };