var el = new Array(); 
var en = new Array();
        
el['Page 1'] = "Σελίδα 1";
en['Σελίδα 1'] = "Page 1";

el['Page 2'] = "Σελίδα 2";
en['Σελίδα 2'] = "Page 2";

el['Home'] = "Αρχική";
en['Αρχική'] = "Home";

el['Profile'] = "Προφίλ";
en['Προφίλ'] = "Profile";

el['Languages'] = "Γλώσσες";
en['Γλώσσες'] = "Languages";

el['Premises'] = "Εγκαταστάσεις";
en['Εγκαταστάσεις'] = "Premises";

el['Training'] = "Εκπαίδευση";
en['Εκπαίδευση'] = "Training";

el['Contact us'] = "Επικοινωνία";
en['Επικοινωνία'] = "Contact us";

el['Settings'] = "Ρυθμίσεις";
en['Ρυθμίσεις'] = "Settings";

el['Refresh'] = "Ανανέωση";
en['Ανανέωση'] = "Refresh";

el['Close App'] = "Κλείσιμο";
en['Κλείσιμο'] = "Close App";

el['English'] = "Αγγλικά";
en['Αγγλικά'] = "English";

el['German'] = "Γερμανικά";
en['Γερμανικά'] = "German";

el['Study Tips'] = "Συμβουλές Μελέτης";
en['Συμβουλές Μελέτης'] = "Study Tips";

el['Online Exercises'] = "Online Ασκήσεις";
en['Online Ασκήσεις'] = "Online Exercises";

el['In order to use our online exercises section, you need to have an account and log in.'] = "Για να χρησιμοποιήσετε το online τμήμα ασκήσεων, θα πρέπει να έχετε ένα λογαριασμό και να συνδεθείτε.";
en['Για να χρησιμοποιήσετε το online τμήμα ασκήσεων, θα πρέπει να έχετε ένα λογαριασμό και να συνδεθείτε.'] = "In order to use our online exercises section, you need to have an account and log in.";

el['User Name'] = "Όνομα Χρήστη";
en['Όνομα Χρήστη'] = "User Name";

el['User Password'] = "Κωδικός Χρήστη";
en['Κωδικός Χρήστη'] = "User Password";

el['Remember Me'] = "Να με θυμάσαι";
en['Να με θυμάσαι'] = "Remember Me";

el['Tap on the map to see route and driving directions to this location.'] = "Πατήστε στο χάρτη για να δείτε τη διαδρομή και της οδηγίες μετάβασης με όχημα σε αυτή την τοποθεσία.";
en['Πατήστε στο χάρτη για να δείτε τη διαδρομή και της οδηγίες μετάβασης με όχημα σε αυτή την τοποθεσία.'] = "Tap on the map to see route and driving directions to this location.";

el['Zilou 10,  Larissa 413 35'] = "Ζήλου 10,  Λάρισα 413 35";
en['Ζήλου 10,  Λάρισα 413 35'] = "Zilou 10,  Larissa 413 35";

el['You need to have an active internet connection, in order to use this app for the first time.'] = "Πρέπει να έχετε μια ενεργή σύνδεση στο Internet, για να χρησιμοποιήσετε αυτό το app για πρώτη φορά.";
en['Πρέπει να έχετε μια ενεργή σύνδεση στο Internet, για να χρησιμοποιήσετε αυτό το app για πρώτη φορά.'] = "You need to have an active internet connection, in order to use this app for the first time.";

function toEl(){
    
    $(".en").each(function() {
        x=$(this).text();
        $(this).empty();
        $(this).append(el[x]);
        $(this).toggleClass('en el');

    });
}
function toEnglish(){
    $(".el").each(function() {
        x=$(this).text();
        $(this).html(en[x]);
        $(this).toggleClass('el en');


    });
}

function getHome() {
    if(localStorage.home==undefined){
        $.get('http://www.myexplore.gr/tasos_scripts/Home.php', function(data) {
            localStorage.home = data; 
        });
    }
   return localStorage.home;   
}
function getHome_en() {
    if(localStorage.home==undefined){
        $.get('http://www.myexplore.gr/tasos_scripts/Home_en.php', function(data) {
            localStorage.homeen = data; 
        });
    }
   return localStorage.homeen;   
}


function getProfile() {
    if(localStorage.profile==undefined){
        $.get('http://www.myexplore.gr/tasos_scripts/Profile.php', function(data) {
            localStorage.profile = data; 
        });
    }
   return localStorage.profile;   
}
function getProfile_en() {
    if(localStorage.profileen==undefined){
        $.get('http://www.myexplore.gr/tasos_scripts/Profile_en.php', function(data) { 
            localStorage.profileen = data; 
        });
    }
   return localStorage.profileen;   
}


function getEnglish() {
    if(localStorage.english==undefined){
        $.get('http://www.myexplore.gr/tasos_scripts/English.php', function(data) {
            localStorage.english = data; 
        });
    }
   return localStorage.english;   
}
function getEnglish_en() {
    if(localStorage.englishen==undefined){
        $.get('http://www.myexplore.gr/tasos_scripts/English_en.php', function(data) {
            localStorage.englishen = data; 
        });
    }
   return localStorage.englishen;   
}


function getGerman() {
    if(localStorage.german==undefined){
        $.get('http://www.myexplore.gr/tasos_scripts/German.php', function(data) {
            localStorage.german = data; 
        });
    }
   return localStorage.german;   
}
function getGerman_en() {
    if(localStorage.germanen==undefined){
        $.get('http://www.myexplore.gr/tasos_scripts/German_en.php', function(data) {
            localStorage.germanen = data; 
        });
    }
   return localStorage.germanen;   
}


function getPremises() {
    if(localStorage.premises==undefined){
        $.get('http://www.myexplore.gr/tasos_scripts/Premises.php', function(data) {
            localStorage.premises = data; 
        });
    }
   return localStorage.premises;   
}
function getPremises_en() {
    if(localStorage.premisesen==undefined){
        $.get('http://www.myexplore.gr/tasos_scripts/Premises_en.php', function(data) {
            localStorage.premisesen = data; 
        });
    }
   return localStorage.premisesen;   
}


function getStudyTips() {
    if(localStorage.studytips==undefined){
        $.get('http://www.myexplore.gr/tasos_scripts/Study_Tips.php', function(data) {
            localStorage.studytips = data; 
        });
    }
   return localStorage.studytips;   
}
function getStudyTips_en() {
    if(localStorage.studytipsen==undefined){
        $.get('http://www.myexplore.gr/tasos_scripts/Study_Tips_en.php', function(data) {
            localStorage.studytipsen = data; 
        });
    }
   return localStorage.studytipsen;   
}


home = getHome();
homeen = getHome_en();

profile = getProfile();
profileen = getProfile_en();

english = getEnglish();
englishen = getEnglish_en();

german = getGerman();
germanen = getGerman_en();

premises = getPremises();
premisesen = getPremises_en();

studytips = getStudyTips();
studytipsen = getStudyTips_en();



$(document).ready(function(){

    $("input[name='radio-language']").click(function(){
        
        if($(this).val()=="el"){
            $("input[value='en']").removeAttr('checked');
            $("input[value='el']").attr( 'checked', true );
            localStorage.language="el";
            window.location.reload();
        }
        else if($(this).val()=="en"){
            $("input[value='el']").removeAttr('checked');
            $("input[value='en']").attr( 'checked', true );
            localStorage.language="en";
            window.location.reload();
        }
    });

    $("input[name='radio-language-offline']").click(function(){
        
        if($(this).val()=="el"){
            $("input[value='en']").removeAttr('checked');
            $("input[value='el']").attr( 'checked', true );
            localStorage.language="el";
            window.location.reload();
        }
        else if($(this).val()=="en"){
            $("input[value='el']").removeAttr('checked');
            $("input[value='en']").attr( 'checked', true );
            localStorage.language="en";
            window.location.reload();
        }
    });
    if(localStorage.language==undefined){
        $("input[value='el']").attr( 'checked', true );
        toEl();
        localStorage.language="el";
        $("#home-content").html(home);
        $("#profile-content").html(profile);
        $("#english-content").append(english);
        $("#german-content").append(german);
        $("#premises-content").html(premises);
        $("#study-tips-content").append(studytips);
    }
    else if(localStorage.language=="en"){
        $("input[value='en']").attr( 'checked', true );
        toEnglish();
        $("#home-content").html(homeen);
        $("#profile-content").html(profileen);
        $("#english-content").append(englishen);
        $("#german-content").append(germanen);
        $("#premises-content").html(premisesen);
        $("#study-tips-content").append(studytipsen);
    }
    else if(localStorage.language=="el"){
        $("input[value='el']").attr( 'checked', true );
        toEl();
        $("#home-content").html(home);
        $("#profile-content").html(profile);
        $("#english-content").append(english);
        $("#german-content").append(german);
        $("#premises-content").html(premises);
        $("#study-tips-content").append(studytips);
        $("#submit").val('Σύνδεση');
    }

});

