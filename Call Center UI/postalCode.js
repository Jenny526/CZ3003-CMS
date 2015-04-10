$(document).ready(function () {
    var postalCode = [
        "A# .NET",
        "A#",
        "A-0 System",
        "A+",
        "A++",
        "ABAP",
        "ABC",
        "ABC ALGOL",
        "ABLE",
        "ABSET",
        "ABSYS",
        "Abundance",
        "ACC",
        "Accent",
        "Ace DASL",
        "ACT-III",
        "Action!",
        "ActionScript",
        "Ada",
        "Adenine",
        "Agda",
        "Agilent VEE",
        "Agora",
        "AIMMS",
        "Alef",
        "ALF",
        "ALGOL 58",
        "ALGOL 60",
        "ALGOL 68",
        "Alice",
        "Alma",
        "AmbientTalk",
        "Amiga E",
        "AMOS",
        "AMPL",
        "APL",
        "AppleScript",
        "Arc",
        "ARexx",
        "Argus",
        "AspectJ",
        "Assembly language",
        "ATS",
        "Ateji PX",
        'AutoHotkey',
        'Autocoder',
        'AutoIt',
        'AutoLISP / Visual LISP',
        'Averest',
        'AWK',
        'Axum',
        'B',
        'Babbage',
        'BAIL',
        'Bash',
        'BASIC',
        'bc',
        'BCPL',
        'BeanShell',
        'Batch',
        'Bertrand',
        'BETA',
        'Bigwig',
        'Bistro',
        'BitC',
        'BLISS',
        'Blue',
        'Bon',
        'Boo',
        'Boomerang',
        'Bourne shell',
        'BREW',
        'BPEL',
        'BUGSYS',
        'BuildProfessional'];
    $('#postalCode').autocomplete({
        source: postalCode,
		select: function(event, ui) {
            var url = ui.item.id;
            /*if(url != '#') {
                location.href = '/blog/' + url;
            }*/
        },
 
        html: true, // optional (jquery.ui.autocomplete.html.js required)
 
      // optional (if other layers overlap autocomplete list)
        open: function(event, ui) {
            $(".ui-autocomplete").css("z-index", 1000);
        }
    });
});