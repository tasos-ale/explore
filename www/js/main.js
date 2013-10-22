function ClearLocalStorage(){
    localStorage.clear();
    alert("Local Storage is cleared!");
}

document.addEventListener("online", onOnline, false);
document.addEventListener("offline", onOffline, false);

function onOffline() {
        if(!(localStorage.ftc)){
            $.mobile.changePage("#offline");
        }
    }

function onOnline() {
        if(!(localStorage.ftc)){
        window.setTimeout(function() {
            $.mobile.loading( 'show' );
            window.location.reload();
            $.mobile.changePage("#home");
        }, 1500);
        localStorage.ftc=true;
        }
    }   

function onLoad() {
        document.addEventListener("deviceready", onDeviceReady, false);
    }

function onDeviceReady() {
	// Now safe to use the Cordova API
	document.addEventListener("backbutton", onBackKeyDown, false);
	function onBackKeyDown() {
    		navigator.app.exitApp();
		}
        return false;

}

function onSuccess(data, status){
    data = $.trim(data);
    if(data=="Invalid password for username."||data=="Username does not exist.")
        $("#notification").append(data); 
    else{
        $.mobile.changePage('#online-exercises');
        $("#online-exercises-content").empty();
        $("#online-exercises-content").append(data);
        $("#eng").show();
        $("#ger").hide();
        
    }
}
  
function onError(data, status)
    {
        // handle an error
    }        
  
function clicksubmit(){
        $("#submit").click(function(){

            var formData = $("#callAjaxForm").serialize();

            $.ajax({
                type: "POST",
                url: "http://www.myexplore.gr/tasos_scripts/login/login2.php",
                cache: false,
                data: formData,
                success: onSuccess,
                error: onError
            });

            return false;
        });
    }


function clicksubmiten(){
    $("#submit").click(function(){

        var formData = $("#callAjaxForm").serialize();

        $.ajax({
            type: "POST",
            url: "http://www.myexplore.gr/tasos_scripts/login/login2en.php",
            cache: false,
            data: formData,
            success: onSuccess,
            error: onError
        });

        return false;
    });
}


$(document).ready(function(){
    if(localStorage.language=="el"){
        clicksubmit();
    }
    else if(localStorage.language=="en"){
        clicksubmiten();  
    }

    var checkbox = $('#checkbox-agree'),
    userField = $('#username'),
    passField = $('#password');
    if (localStorage.username==undefined ||localStorage.username=="undefined" ) {
         userField.val("");
         passField.val("");
    }
    else {
        userField.val(localStorage.username);
        checkbox.prop('checked', true);

    }
    $("#submit").click(function() {
        if (checkbox.prop('checked')) {
            localStorage.username = userField.val();
            localStorage.password = passField.val();
        }
        else {
            localStorage.username=undefined;
            localStorage.password=undefined;
        }
    });
});

$( document ).on( 'pagechange',function(event){ 
    $("#eng-ex").click();
    $("#eng-ex").click(function(){
        $("#ger").hide();
        $("#eng").show();
    });
    $("#ger-ex").click(function(){
        $("#eng").hide();
        $("#ger").show();
    });
});

$( document ).on( "pageinit", function() {

    $( '#home' ).on( "swiperight", function( event ) { 
        $("#menu1").panel("open");
            event.preventDefault();
            return false;
    } );

    $( '#home' ).on( "swipeleft", function( event ) { 
        $("#menu1").panel("close");
            event.preventDefault();
            return false;
    } );

    $( '#profile' ).on( "swiperight", function( event ) { 
        $("#menu2").panel("open");
            event.preventDefault();
            return false;
    } );

    $( '#profile' ).on( "swipeleft", function( event ) { 
        $("#menu2").panel("close");
            event.preventDefault();
            return false;
    } );

    $( '#languages' ).on( "swiperight", function( event ) { 
        $("#menu3").panel("open");
            event.preventDefault();
            return false;
    } );

    $( '#languages' ).on( "swipeleft", function( event ) { 
        $("#menu3").panel("close");
            event.preventDefault();
            return false;
    } );

    $( '#premises' ).on( "swiperight", function( event ) { 
        $("#menu4").panel("open");
            event.preventDefault();
            return false;
    } );

    $( '#premises' ).on( "swipeleft", function( event ) { 
        $("#menu4").panel("close");
            event.preventDefault();
            return false;
    } );

    $( '#training' ).on( "swiperight", function( event ) { 
        $("#menu5").panel("open");
            event.preventDefault();
            return false;
    } );

    $( '#training' ).on( "swipeleft", function( event ) { 
        $("#menu5").panel("close");
            event.preventDefault();
            return false;
    } );

    $( '#online-exercises' ).on( "swiperight", function( event ) { 
        $("#menu6").panel("open");
            event.preventDefault();
            return false;
    } );

    $( '#online-exercises' ).on( "swipeleft", function( event ) { 
        $("#menu6").panel("close");
            event.preventDefault();
            return false;
    } );

    $( '#settings' ).on( "swiperight", function( event ) { 
        $("#menu7").panel("open");
            event.preventDefault();
            return false;
    } );

    $( '#settings' ).on( "swipeleft", function( event ) { 
        $("#menu7").panel("close");
            event.preventDefault();
            return false;
    } );

    $( '#page-home' ).on( "swiperight", function( event ) { 
        $("#menu").panel("open");
            event.preventDefault();
            return false;
    } );

    $( '#page-home' ).on( "swipeleft", function( event ) { 
        $("#menu").panel("close");
            event.preventDefault();
            return false;
    } );

});

