// ==UserScript==
// @name Fotka.com AutoLikeer
// @author XerXes
// @include https://fotka.com/profil*
// @include https://*.fotka.com/profil*
// @include http://fotka.com/profil*
// @include http://*.fotka.com/profil*
// @version 1
// ==/UserScript==


$(function(){
setTimeout(function(){
    if(window.location.href != 'http://fotka.com/profil/TheKapitan') {
        if($('.yesno-decision-label').html() == 'Dałeś  już TAK' || $('.yesno-decision-label').html() == 'Daliście sobie TAK') {
        $('#yesno-next-profile-button-holder').trigger('click');
        } else {
            $('#yesno-answer-yes').trigger('click');
        }
    }
},15000);
});


