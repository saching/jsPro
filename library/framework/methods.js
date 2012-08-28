var Methods = {
    
    logHistory: [],
    
    /*
    * method to log messages in console 
    */
   log: function(tag, message){
        this.logHistory=this.logHistory||[];
        this.logHistory.push([tag, message]);
        
        if(!JSPRO_CONFIG.log)
            return;
        
        if(typeof console!="undefined"&&typeof console.log=="function"){
            if(typeof message==="string"){
                console.log(tag +":"+message)
            }else{
                console.log(tag +":"+Array.prototype.slice.call(message))
            }
        }else{ 
            if(!Function.prototype.bind&&typeof console!=="undefined"&&typeof console.log==="object"){
                Function.prototype.call.call(console.log,console,Array.prototype.slice.call(arguments))
            }else{
                if(!document.getElementById("firebug-lite")){
                    var a=document.createElement("script");a.type="text/javascript";a.id="firebug-lite";a.src="https://getfirebug.com/firebug-lite.js";document.getElementsByTagName("HEAD")[0].appendChild(a);setTimeout(function(){log(Array.prototype.slice.call(arguments))},2e3)
                }else{
                    setTimeout(function(){log(Array.prototype.slice.call(arguments))},500)
                }
            }
        }
    }    
}