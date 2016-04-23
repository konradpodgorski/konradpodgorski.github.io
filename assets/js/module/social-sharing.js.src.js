define([], function() {



    // twitter
    (function(){
        var twitterWidgets = document.createElement('script');
        twitterWidgets.type = 'text/javascript';
        twitterWidgets.async = true;
        twitterWidgets.src = '//platform.twitter.com/widgets.js';
        document.getElementsByTagName('head')[0].appendChild(twitterWidgets);
    })();

    // google plus
    (function() {
        var script = document.createElement('script'); script.type = 'text/javascript'; script.async = true;
        script.src = 'https://apis.google.com/js/plusone.js';
        var s = document.getElementsByTagName('script')[0]; s.parentNode.insertBefore(script, s);
    })();

    (function(d, s, id) {
        var js, fjs = d.getElementsByTagName(s)[0];
        if (d.getElementById(id)) {return;}
        js = d.createElement(s); js.id = id; js.async = true;
        js.src = "//connect.facebook.net/en_US/all.js#appId=212934732101925&xfbml=1";
        fjs.parentNode.insertBefore(js, fjs);
    }(document, 'script', 'facebook-jssdk'));
})
