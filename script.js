function successMessage(){
    document.getElementById('hide-forma' ).style = "display:none";
    document.getElementById('contact-title' ).style = "display:none";
 document.getElementById('success-message').innerHTML = "You successfully contacted me, I will replay you by an email";
}


var likecount = 0;
document.getElementById("likeNumer").innerHTML = likecount + ' likes';

function likeincrement(){
    likecount = likecount + 1 ;
    document.getElementById('likeNumer').innerHTML = likecount + ' people liked';
}



    var likecounti = 0;
    document.getElementById("likeNumber").innerHTML = likecounti + 'likes';

    function likeincrementi(){
        likecounti = likecounti + 1 ;
        document.getElementById('likeNumber').innerHTML = likecounti + ' people liked';
    }

    
    var likecountet = 0;
    document.getElementById("likeNumri").innerHTML = likecountet + 'likes';

    function likeincrementet(){
        likecountet = likecountet + 1 ;
        document.getElementById('likeNumri').innerHTML = likecountet + ' people liked';
    }

    