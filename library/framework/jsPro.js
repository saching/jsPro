/**
 * method to load script at runtime
 */
function loadScript(url, callback)
{
   var head = document.getElementsByTagName('head')[0];
   var script = document.createElement('script');
   script.type = 'text/javascript';
   script.src = url;
   script.onreadystatechange = callback;
   script.onload = callback;
   head.appendChild(script);
}

/**
 * list of required file paths
 */
var frameworkFiles = ["../config/config.js", "../library/framework/jquery.min.js", "../library/framework/methods.js", "../library/framework/jsProUtils.js"];


/**
 * load the framework files.
 */
for(var i = 0; i < frameworkFiles.length; i++){
    loadScript(frameworkFiles[i]);
}