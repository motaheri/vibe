var GB_ROOT_DIR = "http://www.sputtr.com/greybox/";
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
    if (searchvar=='google')
    {
        var submitto = 'http://www.google.com/cse?cx=partner-pub-1127224857128572%3A9kmyq6y9ixv&ie=UTF-8&q=' + encodeURI(ds.value);
        var name = 'Google Search Results'
    }
    else if (searchvar=='yahoo')
    {
        var submitto = 'http://search.yahoo.com/search?p=' + encodeURI(ds.value);
        var name = 'Yahoo Search Results'
    }
    else if (searchvar=='live')
    {
        var submitto = 'http://search.live.com/results.aspx?q=' + encodeURI(ds.value);
        var name = 'Live Search Results'
    }
    else if (searchvar=='aol')
    {
        var submitto = 'http://search.aol.com/aol/search?query=' + encodeURI(ds.value);
        var name = 'AOL Search Results'
    }
    else if (searchvar=='ask')
    {
        var submitto = 'http://www.ask.com/web?q=' + encodeURI(ds.value);
        var name = 'Ask Search Results'
    }
    else if (searchvar=='snap')
    {
        var submitto = 'http://www.snap.com/search.php#' + encodeURI(ds.value);
        var name = 'Snap Search Results'
    }
    else if (searchvar=='altavista')
    {
        var submitto = 'http://www.altavista.com/web/results?q=' + encodeURI(ds.value);
        var name = 'Altavista Search Results'
    }
    else if (searchvar=='dogpile')
    {
        var submitto = 'http://www.dogpile.com/info.dogpl/search/web/' + encodeURI(ds.value);
        var name = 'Dogpile Search Results'
    }
    else if (searchvar=='goodsearch')
    {
        var submitto = 'http://www.goodsearch.com/Search.aspx?Keywords=' + encodeURI(ds.value);
        var name = 'Goodsearch Search Results'
    }
    else if (searchvar=='lycos')
    {
        var submitto = 'http://search.lycos.com/?query=' + encodeURI(ds.value);
        var name = 'Lycos Search Results'
    }
    else if (searchvar=='clusty')
    {
        var submitto = 'http://clusty.com/search?query=' + encodeURI(ds.value);
        var name = 'Clusty Search Results'
    }
    else if (searchvar=='quintura')
    {
        var submitto = 'http://www.quintura.com/?request=' + encodeURI(ds.value);
        var name = 'Quintura Search Results'
    }
    else if (searchvar=='alltheweb')
    {
        var submitto = 'http://www.alltheweb.com/search?cat=web&cs=iso88591&q=' + encodeURI(ds.value);
        var name = 'AllTheWeb Search Results'
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
    else if (searchvar=='aolimages')
    {
        var submitto = 'http://search.aol.com/aol/image?q=' + encodeURI(ds.value);
        var name = 'AOL Images Search Results'
    }
    else if (searchvar=='askimages')
    {
        var submitto = 'http://www.ask.com/pictures?q=' + encodeURI(ds.value);
        var name = 'Ask Images Search Results'
    }
    else if (searchvar=='deviantart')
    {
        var submitto = 'http://search.deviantart.com/?section=browse&q=' + encodeURI(ds.value);
        var name = 'Deviantart Search Results'
    }
    else if (searchvar=='zooomr')
    {
        var submitto = 'http://www.zooomr.com/search/photos/?q=' + encodeURI(ds.value);
        var name = 'Zooomr Search Results'
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
    else if (searchvar=='aolvideos')
    {
        var submitto = 'http://video.aol.com/video-search/query/' + encodeURI(ds.value);
        var name = 'AOL Videos Search Results'
    }
    else if (searchvar=='askvideos')
    {
        var submitto = 'http://www.ask.com/video?q=' + encodeURI(ds.value);
        var name = 'Ask Videos Search Results'
    }
    else if (searchvar=='dailymotion')
    {
        var submitto = 'http://www.dailymotion.com/relevance/search/' + encodeURI(ds.value);
        var name = 'Dailymotion Search Results'
    }
    else if (searchvar=='metacafe')
    {
        var submitto = 'http://www.metacafe.com/tags/' + encodeURI(ds.value);
        var name = 'Metacafe Search Results'
    }
    else if (searchvar=='blinkx')
    {
        var submitto = 'http://www.blinkx.com/videos/' + encodeURI(ds.value);
        var name = 'Blinkx Search Results'
    }
    else if (searchvar=='liveleak')
    {
        var submitto = 'http://www.liveleak.com/browse?q=' + encodeURI(ds.value);
        var name = 'Liveleak Search Results'
    }
    else if (searchvar=='veoh')
    {
        var submitto = 'http://www.veoh.com/search.html?numResults=20&search=' + encodeURI(ds.value);
        var name = 'Veoh Search Results'
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
    else if (searchvar=='songza')
    {
        var submitto = 'http://songza.com/?query=' + encodeURI(ds.value);
        var name = 'Songza Search Results'
    }
    else if (searchvar=='playlist')
    {
        var submitto = 'http://www.playlist.com/searchbeta/tracks#' + encodeURI(ds.value);
        var name = 'Playlist Search Results'
    }
    else if (searchvar=='googlemaps')
    {
        var submitto = 'http://maps.google.com/maps?z=13&q=' + encodeURI(ds.value);
        var name = 'Google Maps Search Results'
    }
    else if (searchvar=='yahoomaps')
    {
        var submitto = 'http://maps.yahoo.com/#mvt=m&q1=' + encodeURI(ds.value);
        var name = 'Yahoo Maps Search Results'
    }
    else if (searchvar=='multimap')
    {
        var submitto = 'http://www.multimap.com/maps/?qs=' + encodeURI(ds.value);
        var name = 'MultiMap Search Results'
    }
    else if (searchvar=='digg')
    {
        var submitto = 'http://digg.com/search?s=' + encodeURI(ds.value);
        var name = 'Digg Search Results'
    }
    else if (searchvar=='delicious')
    {
        var submitto = 'http://delicious.com/search?p=' + encodeURI(ds.value);
        var name = 'Delicious Search Results'
    }
    else if (searchvar=='reddit')
    {
        var submitto = 'http://www.reddit.com/search?q=' + encodeURI(ds.value);
        var name = 'Reddit Search Results'
    }
    else if (searchvar=='stumbleupon')
    {
        var submitto = 'http://www.stumbleupon.com/search?q=' + encodeURI(ds.value);
        var name = 'StumbleUpon Search Results'
    }
    else if (searchvar=='diigo')
    {
        var submitto = 'http://www.diigo.com/search?what=' + encodeURI(ds.value);
        var name = 'Diigo Search Results'
    }
    else if (searchvar=='blinklist')
    {
        var submitto = 'http://www.blinklist.com/tag/' + encodeURI(ds.value);
        var name = 'Blinklist Search Results'
    }
    else if (searchvar=='googleblogs')
    {
        var submitto = 'http://blogsearch.google.com/blogsearch?q=' + encodeURI(ds.value);
        var name = 'Google Blogs Search Results'
    }
    else if (searchvar=='twitter')
    {
        var submitto = 'http://search.twitter.com/search?q=' + encodeURI(ds.value);
        var name = 'Twitter Search Results'
    }
    else if (searchvar=='facebook')
    {
        var submitto = 'http://www.facebook.com/srch.php?nm=' + encodeURI(ds.value);
        var name = 'Facebook Search Results'
    }
    else if (searchvar=='myspace')
    {
        var submitto = 'http://searchservice.myspace.com/index.cfm?fuseaction=sitesearch.results&type=People&qry=' + encodeURI(ds.value);
        var name = 'MySpace Search Results'
    }
    else if (searchvar=='linkedin')
    {
        var submitto = 'http://www.linkedin.com/search?search=&sortCriteria=4&keywords=' + encodeURI(ds.value);
        var name = 'Linkedin Search Results'
    }
    else if (searchvar=='friendster')
    {
        var submitto = 'http://www.friendster.com/search/user?query=' + encodeURI(ds.value);
        var name = 'Friendster Search Results'
    }
    else if (searchvar=='bebo')
    {
        var submitto = 'http://bebo.com/Search.jsp?SearchType=People&SearchTerm=' + encodeURI(ds.value);
        var name = 'Bebo Search Results'
    }
    else if (searchvar=='hi5')
    {
        var submitto = 'http://hi5.com/friend/processHeaderNameSearch.do?searchText=' + encodeURI(ds.value);
        var name = 'Hi5 Search Results'
    }
    else if (searchvar=='ning')
    {
        var submitto = 'http://www.ning.com/search/networks?q=' + encodeURI(ds.value);
        var name = 'Ning Search Results'
    }
    else if (searchvar=='wink')
    {
        var submitto = 'http://wink.com/people/?aps=0&pf=&searchSubmit=Search+People&q=' + encodeURI(ds.value);
        var name = 'Wink Search Results'
    }
    else if (searchvar=='wikipedia')
    {
        var submitto = 'http://en.wikipedia.org/w/index.php?search=' + encodeURI(ds.value);
        var name = 'Wikipedia Search Results'
    }
    else if (searchvar=='dictionary')
    {
        var submitto = 'http://dictionary.reference.com/dic?q=' + encodeURI(ds.value);
        var name = 'Dictionary Search Results'
    }
    else if (searchvar=='yahooanswers')
    {
        var submitto = 'http://answers.yahoo.com/search/search_result?p=' + encodeURI(ds.value);
        var name = 'Yahoo Answers Search Results'
    }
    else if (searchvar=='askqanda')
    {
        var submitto = 'http://www.ask.com/ans?q=' + encodeURI(ds.value);
        var name = 'Ask Q&A Search Results'
    }
    else if (searchvar=='answers')
    {
        var submitto = 'http://www.answers.com/' + encodeURI(ds.value);
        var name = 'Answers Search Results'
    }
    else if (searchvar=='mahalo')
    {
        var submitto = 'http://mahalo.com/Special:Search?search=' + encodeURI(ds.value);
        var name = 'Mahalo Search Results'
    }
    else if (searchvar=='ciafactbook')
    {
        var submitto = 'https://www.cia.gov/search?NS-search-page=results&NS-collection=Factbook&NS-query=' + encodeURI(ds.value);
        var name = 'CIA Fact Book Search Results'
    }
    else if (searchvar=='merriamwebster')
    {
        var submitto = 'http://www.merriam-webster.com/dictionary/' + encodeURI(ds.value);
        var name = 'Merriam-Webster Search Results'
    }
    else if (searchvar=='amazon')
    {
        var submitto = 'http://www.amazon.com/gp/associates/link-types/searchbox.html?tag=sputmultseare-20&creative=374001&campaign=211041&adid=17QFGDTJ4PHMTH05K5DD&mode=blended&Submit=Go&keyword=' + encodeURI(ds.value);
        var name = 'Amazon Search Results'
    }
    else if (searchvar=='ebay')
    {
        var submitto = 'http://search.ebay.com/search/search.dll?from=R40&satitle=' + encodeURI(ds.value);
        var name = 'EBay Search Results'
    }
    else if (searchvar=='pricegrabber')
    {
        var submitto = 'http://www.pricegrabber.com/search.php?form_keyword=' + encodeURI(ds.value);
        var name = 'Pricegrabber Search Results'
    }
    else if (searchvar=='nextag')
    {
        var submitto = 'http://www.nextag.com/serv/main/buyer/OutPDir.jsp?search=' + encodeURI(ds.value);
        var name = 'Nextag Search Results'
    }
    else if (searchvar=='overstock')
    {
        var submitto = 'http://www.overstock.com/search?keywords=' + encodeURI(ds.value);
        var name = 'Overstock Search Results'
    }
    else if (searchvar=='walmart')
    {
        var submitto = 'http://www.walmart.com/search/search-ng.do?search_query=' + encodeURI(ds.value);
        var name = 'Walmart Search Results'
    }
    else if (searchvar=='googlenews')
    {
        var submitto = 'http://news.google.com/news?q=' + encodeURI(ds.value);
        var name = 'Google News Search Results'
    }
    else if (searchvar=='yahoonews')
    {
        var submitto = 'http://news.search.yahoo.com/news/search?p=' + encodeURI(ds.value);
        var name = 'Yahoo News Search Results'
    }
    else if (searchvar=='cnn')
    {
        var submitto = 'http://search.cnn.com/search.jsp?type=news&sortBy=date&query=' + encodeURI(ds.value);
        var name = 'CNN Search Results'
    }
    else if (searchvar=='nytimes')
    {
        var submitto = 'http://query.nytimes.com/search/sitesearch?srchst=cse&query=' + encodeURI(ds.value);
        var name = 'NY Times Search Results'
    }
    else if (searchvar=='bbc')
    {
        var submitto = 'http://search.bbc.co.uk/search?tab=ns&order=date&scope=all&q=' + encodeURI(ds.value);
        var name = 'BBC Search Results'
    }
    else if (searchvar=='googlefinance')
    {
        var submitto = 'http://www.google.com/finance?q=' + encodeURI(ds.value);
        var name = 'Google Finance Search Results'
    }
    else if (searchvar=='yahoofinance')
    {
        var submitto = 'http://finance.yahoo.com/q?s=' + encodeURI(ds.value);
        var name = 'Yahoo Finance Search Results'
    }
    else if (searchvar=='cnbcquotes')
    {
        var submitto = 'http://data.cnbc.com/quotes/' + encodeURI(ds.value);
        var name = 'CNBC Quotes Search Results'
    }
    else if (searchvar=='wallstreetjournal')
    {
        var submitto = 'http://online.wsj.com/public/search/page/3_0466.html?mod=DNH_S&KEYWORDS=' + encodeURI(ds.value);
        var name = 'Wallstreet Journal Search Results'
    }
    else if (searchvar=='motleyfool')
    {
        var submitto = 'http://www.fool.com/search/index.aspx?go=1&site=USMF&source=ifltnvsnq0000001&filter=p&q=' + encodeURI(ds.value);
        var name = 'Motley Fool Search Results'
    }
    else if (searchvar=='stockcharts')
    {
        var submitto = 'http://stockcharts.com/h-sc/ui?s=' + encodeURI(ds.value);
        var name = 'Stockcharts Search Results'
    }
    else if (searchvar=='googledirectories')
    {
        var submitto = 'http://www.google.com/search?cat=gwd%2FTop&q=' + encodeURI(ds.value);
        var name = 'Google Directories Search Results'
    }
    else if (searchvar=='yahoodirectories')
    {
        var submitto = 'http://search.yahoo.com/search/dir?p=' + encodeURI(ds.value);
        var name = 'Yahoo Directories Search Results'
    }
    else if (searchvar=='imdb')
    {
        var submitto = 'http://www.imdb.com/find?s=all&q=' + encodeURI(ds.value);
        var name = 'IMDb Search Results'
    }
    else if (searchvar=='googlebooks')
    {
        var submitto = 'http://www.google.com/books?q=' + encodeURI(ds.value);
        var name = 'Google Books Search Results'
    }
    else if (searchvar=='amazonbooks')
    {
        var submitto = 'http://www.amazon.com/gp/associates/link-types/searchbox.html?tag=sputmultseare-20&creative=374001&campaign=211041&adid=17QFGDTJ4PHMTH05K5DD&mode=stripbooks&Submit=Go&keyword=' + encodeURI(ds.value);
        var name = 'Amazon Books Search Results'
    }
    else if (searchvar=='worldcat')
    {
        var submitto = 'http://www.worldcat.org/search?qt=worldcat_org_all&q=' + encodeURI(ds.value);
        var name = 'WorldCat Search Results'
    }
    else if (searchvar=='librarything')
    {
        var submitto = 'http://www.librarything.com/search_works.php?q=' + encodeURI(ds.value);
        var name = 'LibraryThing Search Results'
    }
    else if (searchvar=='monster')
    {
        var submitto = 'http://jobsearch.monster.com/Search.aspx?brd=1&cy=us&lid=316&re=130&q=' + encodeURI(ds.value);
        var name = 'Monster Search Results'
    }
    else if (searchvar=='indeed')
    {
        var submitto = 'http://www.indeed.com/jobs?l=&q=' + encodeURI(ds.value);
        var name = 'Indeed Search Results'
    }
    else if (searchvar=='simplyhired')
    {
        var submitto = 'http://www.simplyhired.com/a/jobs/list/q-' + encodeURI(ds.value);
        var name = 'SimplyHired Search Results'
    }
    else if (searchvar=='btjunkie')
    {
        var submitto = 'http://btjunkie.org/search?q=' + encodeURI(ds.value);
        var name = 'BTJunkie Search Results'
    }
    else if (searchvar=='mininova')
    {
        var submitto = 'http://www.mininova.org/search/?search=' + encodeURI(ds.value);
        var name = 'Mininova Search Results'
    }
    else if (searchvar=='thepiratebay')
    {
        var submitto = 'http://thepiratebay.org/search/' + encodeURI(ds.value);
        var name = 'The Pirate Bay Search Results'
    }
    else if (searchvar=='isohunt')
    {
        var submitto = 'http://isohunt.com/torrents/?ihq=' + encodeURI(ds.value);
        var name = 'isoHunt Search Results'
    }
    else if (searchvar=='torrentz')
    {
        var submitto = 'http://www.torrentz.com/search?q=' + encodeURI(ds.value);
        var name = 'Torrentz Search Results'
    }
    else if (searchvar=='gmail')
    {
        var submitto = 'http://mail.google.com/?' + encodeURI(ds.value);
        var name = 'Gmail Search Results'
    }
    else if (searchvar=='yahoomail')
    {
        var submitto = 'http://mail.yahoo.com/?' + encodeURI(ds.value);
        var name = 'Yahoo Mail Search Results'
    }
    else if (searchvar=='livemail')
    {
        var submitto = 'http://mail.live.com/?' + encodeURI(ds.value);
        var name = 'Live Mail Search Results'
    }
    else if (searchvar=='googleca')
    {
        var submitto = 'http://www.google.com/cse?cx=partner-pub-002133980112850404304:ur_uifg4esk&ie=UTF-8&q=' + encodeURI(ds.value);
        var name = 'Google CA Search Results'
    }
    else if (searchvar=='googleuk')
    {
        var submitto = 'http://www.google.com/cse?cx=002133980112850404304:j9asvjt-lmq&ie=UTF-8&q=' + encodeURI(ds.value);
        var name = 'Google UK Search Results'
    }
    else if (searchvar=='googlees')
    {
        var submitto = 'http://www.google.com/cse?cx=002133980112850404304:7elfosuywq4&ie=UTF-8&q=' + encodeURI(ds.value);
        var name = 'Google ES Search Results'
    }
    else if (searchvar=='googlede')
    {
        var submitto = 'http://www.google.com/cse?cx=002133980112850404304:kalsh9imwlg&ie=UTF-8&q=' + encodeURI(ds.value);
        var name = 'Google DE Search Results'
    }
    else if (searchvar=='googlefr')
    {
        var submitto = 'http://www.google.com/cse?cx=002133980112850404304:pmoprrgz1pg&ie=UTF-8&q=' + encodeURI(ds.value);
        var name = 'Google FR Search Results'
    }
    else if (searchvar=='googleit')
    {
        var submitto = 'http://www.google.com/cse?cx=002133980112850404304:q6hxfiqvvd4&ie=UTF-8&q=' + encodeURI(ds.value);
        var name = 'Google IT Search Results'
    }
    else if (searchvar=='1001')
    {
        var submitto = 'http://hypem.com/search/' + encodeURI(ds.value);
        var name = 'hypem Search Results'
    }
    else if (searchvar=='1002')
    {
        var submitto = 'http://www.downloads.nl/results/mp3/1/' + encodeURI(ds.value);
        var name = 'downloads.nl Search Results'
    }
    else if (searchvar=='1003')
    {
        var submitto = 'http://www.downloads.nl/results/mp3/1/' + encodeURI(ds.value);
        var name = 'downloads.nl Search Results'
    }
    else if (searchvar=='1004')
    {
        var submitto = 'http://mp3realm.org/search?q=' + encodeURI(ds.value);
        var name = 'mp3realm Search Results'
    }
    else if (searchvar=='1005')
    {
        var submitto = 'http://sadsteve.com/search.py?q=' + encodeURI(ds.value);
        var name = 'sad steve Search Results'
    }
    else if (searchvar=='1006')
    {
        var submitto = 'http://www.playlist.com/searchbeta/tracks#' + encodeURI(ds.value);
        var name = 'playlist.com Search Results'
    }
    else if (searchvar=='1007')
    {
        var submitto = 'http://tagoo.ru/en/search.php?for=audio&search=' + encodeURI(ds.value);
        var name = 'Tagoo (good) Search Results'
    }
    else if (searchvar=='1008')
    {
        var submitto = 'http://beemp3.com/index.php?Submit2=Search&st=all&q=' + encodeURI(ds.value);
        var name = 'beemp3 (not so bad either) Search Results'
    }
    else if (searchvar=='1009')
    {
        var submitto = 'http://cowbell.fm/search?commit=search&q=' + encodeURI(ds.value);
        var name = 'cowbell.fm Search Results'
    }
    else if (searchvar=='1010')
    {
        var submitto = 'http://filefab.com/index.php?psearch=' + encodeURI(ds.value);
        var name = 'filefab Search Results'
    }
    else if (searchvar=='1011')
    {
        var submitto = 'http://www.radioblogclub.com/search/0/' + encodeURI(ds.value);
        var name = 'radioblogclub Search Results'
    }
    else if (searchvar=='1012')
    {
        var submitto = 'http://tagoo.ru/en/search.php?for=audio&search=' + encodeURI(ds.value);
        var name = 'Tagoo (very good) Search Results'
    }
    else if (searchvar=='1013')
    {
        var submitto = 'http://sadsteve.com/search.py?q=' + encodeURI(ds.value);
        var name = 'sadsteve (also good) Search Results'
    }
    else if (searchvar=='1014')
    {
        var submitto = 'http://filefab.com/index.php?psearch=' + encodeURI(ds.value);
        var name = 'Filefab (album DL) Search Results'
    }
    else if (searchvar=='1015')
    {
        var submitto = 'http://radioblogclub.com/search/0/' + encodeURI(ds.value);
        var name = 'radio.blog.club (stream) Search Results'
    }
    else if (searchvar=='1016')
    {
        var submitto = 'http://cowbell.fm/search?commit=search&q=' + encodeURI(ds.value);
        var name = 'cowbell.fm (blogs) Search Results'
    }
    else if (searchvar=='1017')
    {
        var submitto = 'http://beemp3.com/index.php?Submit2=Search&st=all&q=' + encodeURI(ds.value);
        var name = 'beemp3 (not so bad) Search Results'
    }
    else if (searchvar=='1018')
    {
        var submitto = 'http://www.playlist.com/searchbeta/tracks#' + encodeURI(ds.value);
        var name = 'playlist (stream) Search Results'
    }
    else if (searchvar=='1019')
    {
        var submitto = 'http://hypem.com/search/' + encodeURI(ds.value);
        var name = 'hypem (blogs) Search Results'
    }
    else if (searchvar=='1020')
    {
        var submitto = 'http://downloaduniverse.net/list/' + encodeURI(ds.value);
        var name = 'downloaduniverse (albums) Search Results'
    }
    else if (searchvar=='1021')
    {
        var submitto = 'http://downloaduniverse.net/list/' + encodeURI(ds.value);
        var name = 'downloaduniverse (albums DL) Search Results'
    }
    else if (searchvar=='1022')
    {
        var submitto = 'http://feelingtea.com/' + encodeURI(ds.value);
        var name = 'feeling tea (get video) Search Results'
    }
    else if (searchvar=='1023')
    {
        var submitto = 'http://media-convert.com/' + encodeURI(ds.value);
        var name = 'MediaConvert (covert formats) Search Results'
    }
    else if (searchvar=='1024')
    {
        var submitto = 'http://media-convert.com/' + encodeURI(ds.value);
        var name = 'MConvert (covert formats) Search Results'
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
    else if (searchvar=='1034')
    {
        var submitto = 'http://video2mp3.net/' + encodeURI(ds.value);
        var name = 'video2mp3 (youtube to mp3 convert) Search Results'
    }
    else if (searchvar=='1035')
    {
        var submitto = 'http://vixy.net/' + encodeURI(ds.value);
        var name = 'vixy (youtube to other video formats convert) Search Results'
    }
    else if (searchvar=='1036')
    {
        var submitto = 'http://feelingtea.com/' + encodeURI(ds.value);
        var name = 'feelingtea (download .flv video file) Search Results'
    }
    else if (searchvar=='1037')
    {
        var submitto = 'http://www.listentoyoutube.com/index.php' + encodeURI(ds.value);
        var name = ' ListenToYouTube (youtube to mp3 convert) Search Results'
    }
    else if (searchvar=='1038')
    {
        var submitto = 'http://video2mp3.net/' + encodeURI(ds.value);
        var name = 'youtube -> mp3 Search Results'
    }
    else if (searchvar=='1039')
    {
        var submitto = 'http://video2mp3.net/' + encodeURI(ds.value);
        var name = 'youtube -> mp3 (high quality) Search Results'
    }
    else if (searchvar=='1040')
    {
        var submitto = 'http://vixy.net/' + encodeURI(ds.value);
        var name = 'youtube -> cool video format Search Results'
    }
    else if (searchvar=='1041')
    {
        var submitto = 'http://listentoyoutube.com/' + encodeURI(ds.value);
        var name = 'youtube -> mp3 Search Results'
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
