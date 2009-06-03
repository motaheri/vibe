var GB_ROOT_DIR = "http://github.com/motaheri/vibe/raw/master/graybox/";
function setButtonText(t)
{
    document.getElementById("searchButton").value=t;
}
function setSearchVar(q)
{
    searchvar = q;
}
function prepareSite()
{
    document.getElementById("searchBox").value="";
    document.getElementById("searchBox").focus();
    searchvar = "";
}
function focusOnBox()
{
    document.getElementById("searchBox").focus();
}
function getResults()
{
    var ds=document.searchForm.searchBox;
   
    if (searchvar=='lycos')
    {
        var submitto = 'http://search.lycos.com/?query=' + encodeURI(ds.value);
        var name = 'Lycos Search Results'
    }
    
    else if (searchvar=='googleimages')
    {
        var submitto = 'http://images.google.com/images?q=' + encodeURI(ds.value);
        var name = 'Google Images Search Results'
    }
    else if (searchvar=='flickr')
    {
        var submitto = 'http://www.flickr.com/search/?q=' + encodeURI(ds.value);
        var name = 'Flickr Search Results'
    }
    else if (searchvar=='yahooimages')
    {
        var submitto = 'http://images.search.yahoo.com/search/images?p=' + encodeURI(ds.value);
        var name = 'Yahoo Images Search Results'
    }
    else if (searchvar=='liveimages')
    {
        var submitto = 'http://search.live.com/images/results.aspx?q=' + encodeURI(ds.value);
        var name = 'Live Images Search Results'
    }
    else if (searchvar=='deviantart')
    {
        var submitto = 'http://search.deviantart.com/?section=browse&q=' + encodeURI(ds.value);
        var name = 'Deviantart Search Results'
    }
    else if (searchvar=='photobucket')
    {
        var submitto = 'http://photobucket.com/images/' + encodeURI(ds.value);
        var name = 'Photobucket Search Results'
    }
    else if (searchvar=='youtube')
    {
        var submitto = 'http://www.youtube.com/results?search_query=' + encodeURI(ds.value);
        var name = 'YouTube Search Results'
    }
    else if (searchvar=='googlevideos')
    {
        var submitto = 'http://video.google.co.uk/videosearch?q=' + encodeURI(ds.value);
        var name = 'Google Videos Search Results'
    }
    else if (searchvar=='yahoovideos')
    {
        var submitto = 'http://video.search.yahoo.com/search/video?p=' + encodeURI(ds.value);
        var name = 'Yahoo Videos Search Results'
    }
    else if (searchvar=='livevideos')
    {
        var submitto = 'http://search.live.com/video/results.aspx?q=' + encodeURI(ds.value);
        var name = 'Live Videos Search Results'
    }
    else if (searchvar=='liveleak')
    {
        var submitto = 'http://www.liveleak.com/browse?q=' + encodeURI(ds.value);
        var name = 'Liveleak Search Results'
    }
    else if (searchvar=='vimeo')
    {
        var submitto = 'http://www.vimeo.com/videos/search:' + encodeURI(ds.value);
        var name = 'Vimeo Search Results'
    }
    else if (searchvar=='lastfm')
    {
        var submitto = 'http://www.last.fm/search?q=' + encodeURI(ds.value);
        var name = 'LastFM Search Results'
    }
    else if (searchvar=='playlist')
    {
        var submitto = 'http://www.playlist.com/searchbeta/tracks#' + encodeURI(ds.value);
        var name = 'Playlist Search Results'
    }
    else if (searchvar=='1024')
    {
        var submitto = 'http://media-convert.com/' + encodeURI(ds.value);
        var name = 'MConvert (convert formats) Search Results'
    }
    else if (searchvar=='1025')
    {
        var submitto = 'http://downloads.nl/results/mp3/1/' + encodeURI(ds.value);
        var name = 'downloads.nl (best) Search Results'
    }
    else if (searchvar=='1026')
    {
        var submitto = 'http://tagoo.ru/en/search.php?for=audio&search=' + encodeURI(ds.value);
        var name = 'Tagoo (very good) Search Results'
    }
    else if (searchvar=='1027')
    {
        var submitto = 'http://sadsteve.com/search.py?q=' + encodeURI(ds.value);
        var name = 'SadSteve (also good) Search Results'
    }
    else if (searchvar=='1028')
    {
        var submitto = 'http://beemp3.com/index.php?Submit=Search&st=all&q=' + encodeURI(ds.value);
        var name = 'beeMP3 Search Results'
    }
	else if (searchvar=='1045')
    {
        var submitto = 'http://file2hd.com/';
        var name = 'file2hd Search Results'
    }
    else if (searchvar=='1029')
    {
        var submitto = 'http://hypem.com/search/' + encodeURI(ds.value);
        var name = 'hypem (blogs) Search Results'
    }
    else if (searchvar=='1030')
    {
        var submitto = 'http://cowbell.fm/search?commit=search&q=' + encodeURI(ds.value);
        var name = 'cowbell (blogs) Search Results'
    }
    else if (searchvar=='1031')
    {
        var submitto = 'http://radioblogclub.com/search/0/' + encodeURI(ds.value);
        var name = 'radio.blog.club (stream) Search Results'
    }
    else if (searchvar=='1032')
    {
        var submitto = 'http://playlist.com/searchbeta/tracks#' + encodeURI(ds.value);
        var name = 'playlist (stream) Search Results'
    }
    else if (searchvar=='1033')
    {
        var submitto = 'http://songtaste.com/search.php?type=&keyword=' + encodeURI(ds.value);
        var name = 'SongTaste (stream) Search Results'
    }
    else if (searchvar=='1036')
    {
        var submitto = 'http://feelingtea.com/';
        var name = 'feelingtea (download .flv video file) Search Results'
    }
    else if (searchvar=='1039')
    {
        var submitto = 'http://video2mp3.net/';
        var name = 'youtube -> mp3 (high quality) Search Results'
    }
    else if (searchvar=='1040')
    {
        var submitto = 'http://vixy.net/';
        var name = 'youtube -> cool video format Search Results'
    }
    else if (searchvar=='1041')
    {
        var submitto = 'http://listentoyoutube.com/';
        var name = 'youtube -> mp3 Search Results'
    } else {
		var submitto = 'http://downloads.nl/results/mp3/1/' + encodeURI(ds.value);
        var name = 'downloads.nl (best) Search Results'
		
	}
    if (windowTarget == "self")
    {
        document.location.href = submitto;
        return false;
    }
    else if (windowTarget == "new")
    {
        window.open(submitto);
        return false;
    }
    else if (windowTarget == "iframe")
    {
        GB_showPage(name, submitto);
        return false
    }
}
