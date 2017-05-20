$(document).ready(function() {
    $('#left-button').on('click', changeSlidesLeft);
    $('#right-button').on('click', changeSlidesRight);
    
    // change on left button click
    function changeSlidesLeft () {
        var indexer = 0;
        var animateInterval;
        function animate(){
            if(indexer == 0){
                $("#dolphins-image").fadeOut(1000);
                $("#turtle-image").fadeOut(1000);
            }
            else if(indexer == 1){
                $("#turtle-image").fadeIn(1000);
                $("#shark-image").fadeOut(1000);
            }
            else if(indexer == 2){
                $("#shark-image").fadeOut(1000);
                $("#dolphins-image").fadeIn(1000);
            }
            if(indexer == 2) {
                indexer = 0;
            } else {
                indexer++;  
            }
        }
        animateInterval = setInterval(animate, 1000);
        animate();

    }

    //change on right button click
    function changeSlidesRight () {
        var indexer = 0;
        var animateInterval;
        function animate(){
            if(indexer == 0){
                $("#dolphins-image").fadeOut(1000);
                $("#shark-image").fadeIn(1000);
            }
            else if(indexer == 1){
                $("#shark-image").fadeOut(1000);
                $("#turtle-image").fadeIn(1000);
            }
            else if(indexer == 2){
                $("#turtle-image").fadeOut(1000);
                $("#dolphins-image").fadeIn(1000);
            }
            if(indexer == 2) {
                indexer = 0;
            } else {
                indexer++;  
            }
        }
        animateInterval = setInterval(animate, 1000);
        animate();
    }

    //Default function, change the slides after 5 sec
	var indexer = 0;
	var animateInterval;
	function animate(){
        if(indexer == 0){
            $("#dolphins-image").fadeOut(5000);
            $("#shark-image").fadeIn(5000);
        }
        else if(indexer == 1){
            $("#shark-image").fadeOut(5000);
            $("#turtle-image").fadeIn(5000);
        }
        else if(indexer == 2){
            $("#turtle-image").fadeOut(5000);
            $("#dolphins-image").fadeIn(5000);
        }
        if(indexer == 2) {
        	indexer = 0;
        } else {
        	indexer++;	
        }
    }
    animateInterval = setInterval(animate, 5000);
    animate();
})