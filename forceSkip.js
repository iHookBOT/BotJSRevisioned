(function) {

/*window.onerror = function() {
        var room = JSON.parse(localStorage.getItem('basicBotRoom'));
        window.location = 'https://plug.dj' + room.name;
    };*/
    
API.on(API.ADVANCE, callback);

function callback () {

	var a = API.getMedia().cid;
	setTimeout(function() {
	    var b = API.getMedia().cid;
	    if (a === b) {
	        API.sendChat("Track stuck, force skipping!");
	        API.moderateForceSkip();
	    }
	}, (API.getMedia().duration * 1000) + 5000);

}

API.chatLog("Now running Force Skip. Refresh page to disable");

/* Basically, this will only force skip if the track is definately stuck
   It uses the duration of the track + 5 seconds to ensure the track has
   finished playing and does need a skip to get it changed.              */
   
