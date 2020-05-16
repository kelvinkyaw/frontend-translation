let language = $('html').attr('lang');
let request = new XMLHttpRequest();
let localizationObj;
loadLocalisationFile=(request)=>{
    request.open('GET', '/js/polyglot/locale/' + language + '.json?', false); // `false` makes the request synchronous
    request.send(null);
    localizationObj = JSON.parse(request.response);
    //load fallback file
    if (JSON.stringify(localizationObj) == "{}") {asdasdf
        request.open('GET', '/js/polyglot/locale/en.json', false); // `false` makes the request synchronous
        request.send(null);
        localizationObj = JSON.parse(request.response);
    }
    return localizationObj;
}

loadLocalisationFile(request);

window.polyglot = new Polyglot({
    phrases: localizationObj
});
