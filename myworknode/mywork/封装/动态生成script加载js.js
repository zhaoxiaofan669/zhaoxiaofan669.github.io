/**
 * Created by window on 2017/3/4 0004.
 */

//Javascript文件的动态下载
//此函数接受两个参数：Javascript文件的Url和一个当Javascript接收完成时触发的
//回调函数。属性检查用于决定监视哪种事件。最后一步src属性，并将javascript文件添加到head。


function loadScript(url, callback){
    var script = document.createElement ("script") ;
    script.type = "text/javascript";

    if (script.readyState){ //IE
        script.onreadystatechange = function(){
            if (script.readyState == "loaded" || script.readyState == "complete"){
                script.onreadystatechange = null;
                callback();
            }
        };
    }
    else { //Others
        script.onload = function(){ callback();
        };
    }
    script.src = url;
    document.getElementsByTagName("head")[0].appendChild(script);
}

loadScript("file1.js", function(){ //调用
    alert("File is loaded!");
});