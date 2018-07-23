function getHostname(url) {
    var m = url.match(/^http:\/\/[^/]+/);
    return m ? m[0] : null;
};

var currentUrl = getHostname(document.URL) + '/blog/all/' ;
// console.log(getHostname(document.URL))
function getData (Url) {

    // get json from url
    $.getJSON(Url, function (data) {

        // clear blogplace from old data
        $('#blog-content').empty();

        // build new data from JSON
        for (var i in data.results) {

            // alert('click')
            var newArticle = $("#content").clone();
            //filling HTML from data
            newArticle.attr("style", "");
            newArticle.find("#article-image").attr("src", data.results[i].image);
            newArticle.find("#article-image").attr("alt", 'data.results[i].header');
            newArticle.find("#header-text").text(data.results[i].header);
            newArticle.find("#article-short").text(data.results[i].text);
            newArticle.find("#publishied-date").text(data.results[i].publish_date);
            newArticle.find("#article-button").attr("src", getHostname(document.URL) + '/blog/id/' + data.results[i].id )
            // newArticle.find("#hidetext").text(id);
            // newArticle.find("#article-button").click(function() {
            //     getArticle()
            // });


            // attr("ocClick", gerArticle(getHostname(document.URL) + '/blog/id/' + data.results[i].id ));
            // newArticle.find("#article-button").attr("target","_blank");
            $('#blog-content').append(newArticle);
        };

        //jpen the buttons if next/prev page is avalable
        if ((data.next != null) || (data.previous != null)){
            $(".nav-section").attr("style", "");
        }

        // actions for buttons
        $("#article-button-prev").click(
            function(){
                // alert("prev")
                if (data.previous != null) {
                    getData (data.previous)
                }
        });

        $("#article-button-next").click(
            function(){
            if (data.next != null) {
                getData (data.next)
            }
        });

        getArticle ()
    });
};

function getArticle (){

    $(".article-button").click(
        function (e) {
            $.getJSON($(this).attr("src"), function (data) {
                $("#content-large").find("#header-text").text(data.header);
                $("#content-large").find("#article").text(data.text);
                $("#content-large").find("#publishied-date").text(data.publish_date);
                // alert(data.image.slice(currentUrl.length))
                $("#content-large").find(".article-image").attr("src", data.image);
                $(".blog-button").click(
                    function(){
                        $("#blog-content").attr("style", "");
                        $("#content-large").attr("style", "display: none");
                        // $(".nav-section").attr("style", "");
                    }
                );
            // $(".nav-section").attr("style", "display: none");
            $("#blog-content").attr("style", "display: none");
            $("#content-large").attr("style", "");
            });
    });
};


