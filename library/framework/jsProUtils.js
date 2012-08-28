var jsPro = {
   
   runningThread: 0,
   
   /*
    * run the framework thread. 
    */
   run: function(){     
        Methods.log("jsProUtils", "strating framework...");
        this.runningThread = setInterval("jsPro.readUrl()", 1000);        
   },
   
   /*
    * stop the framework thread. 
    */
   stop: function(){
        Methods.log("jsProUtils", "stoping framework...");
        clearInterval(this.runningThread);        
   },
   
   /*
    * check the url and call the module > action depending on url 
    */
   readUrl: function(){
        var url = window.location.href.split("#");
        if(url.length > 1)
            Methods.log("redirect", url[1]);
        else
            Methods.log("redirect", "/");
   },
      
   /*
    * method to load css and js defined in config/config.js 
    */
   loadIncludes: function(){
        var _self=this, includes = JSPRO_CONFIG.includes;
        $.each(includes, function(key, list){            
            $(list).each(function(ind, path){
                if(key == "js")
                    loadScript(path);
                else    
                    _self.loadCss(path);
            });
        });
   },
   
   /*
    * load css file
    */
   loadCss: function(url){
       var head = document.getElementsByTagName('head')[0];
       var link = document.createElement('link');
       link.type = 'text/css';
       link.rel = "stylesheet";
       link.href = url;
       head.appendChild(link);
    }
};


/**
 * run the framework
 */
jsPro.run();
jsPro.loadIncludes();