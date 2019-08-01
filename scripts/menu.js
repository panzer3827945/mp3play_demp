$(document).ready(function(){
	$('.sidebarBtn').click(function(){
		$('#playlist').toggleClass('active');
		$('.sidebarBtn').toggleClass('toggle');

	})
})
   function isBrowser(){
        var agent=navigator.userAgent.toLowerCase()
        console.log(agent) 
           
            if(agent.indexOf('edge')>0 ||agent.indexOf('trident')>0 ){
               alert("請用goole瀏覽器或者firefox瀏覽器謝謝^0^");
              var opened = window.open('about:blank', '_self');
                     opened.opener = null;
                        opened.close();



            }
             else if(agent.indexOf('chrome')>0 || agent.indexOf('firefox')>0 ){
                console.log("chrome浏览器"); console.log("firefox浏览器");
            }
           
       }
    isBrowser();
//$(document).ready(function(){ });




$(document).keydown(function (event) {
      
        if (event.keyCode ==32) { //空白件號碼32

	 if (audio.paused && audio.currentTime > 0 && !audio.ended) {
         
         obtn.src="icon/Stop.png"
          
     } else {
        
          
         obtn.src="icon/Play.png" 
       
     }
                
            }
        });




