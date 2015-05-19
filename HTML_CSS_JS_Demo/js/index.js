/*
    description: javascript for index page
    author: snail
    date: 2015/05/18
*/
var Index = {
    //init all the url of navigate
    pages: function () {
        var pages = [];

        //html
        pages.push("pages/html/overview.html");//tag of html
        pages.push("pages/html/block.html");//block and inline block of html

        //css
        pages.push("pages/css/overview.html");
        pages.push("pages/css/classselector.html"); 
        pages.push("pages/css/idselector.html");
        pages.push("pages/css/deriveselector.html");
        pages.push("pages/css/propertyselector.html");
        pages.push("pages/css/padding.html");
        pages.push("pages/css/margin.html");
        pages.push("pages/css/pointinframe.html");
        pages.push("pages/demo/step01.html");
        pages.push("");
        pages.push("");
        pages.push("");
        pages.push("pages/js/overview.html");
        pages.push("pages/js/pop.html");
        pages.push("js/common/pop/demo.html");
        return pages;
    }(),

    //init the click event of navigate li element
    navigateInit: function () {
        $(".course-list li").each(function (i) {
            $(this).click(function () {
                $("#main-content").attr("src",Index.pages[i]);
            });
        });
    },
    test: function () {
        alert(11);
    }
};