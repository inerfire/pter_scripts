// ==UserScript==
// @name         Cloud Cone
// @namespace    hhttps://app.cloudcone.com/
// @version      0.0.8
// @description  For Black Friday
// @author       BbLaCk
// @match        https://app.cloudcone.com/blackfriday
// @require      https://cdn.staticfile.org/jquery/3.5.1/jquery.min.js
// @require      https://greasemonkey.github.io/gm4-polyfill/gm4-polyfill.js
// @icon         https://app.cloudcone.com/assets/img/favicon.png
// @grant        GM.xmlHttpRequest
// @grant        GM_xmlhttpRequest
// ==/UserScript==
var my_data=new FormData();
var mytoken = _token
my_data.append('os','272');
my_data.append('hostname','cc.yourname.xyz');
my_data.append('plan','34');
my_data.append('method','provision');
my_data.append('_token',mytoken);

function triger(){
    let my_url = $('#rotator > tr:nth-child(2) > td:nth-child(8) > a').attr("href")
    let plan  = /vps\/(\d+)/g.exec(my_url).pop();
    console.log(plan)
    return plan
}

(function() {
    'use strict';
    let my_url = $('#rotator > tr:nth-child(2) > td:nth-child(8) > a')
    console.log(my_url.attr("href"))
    console.log(my_url)
    $("h5:contains(The flashing plans are rare! very limited in stocks, catch em' all!)").after(
        "<a href=\"javascript:;\" id=\"buy\" style=\"color:green\">Buy</a>"
    );
    $('#buy').click(function () { let pl = triger();
        my_data.set('plan',pl);fetch('https://app.cloudcone.com/ajax/vps',{
                        method: 'POST',
                        body: my_data,
                    }) });
})();
