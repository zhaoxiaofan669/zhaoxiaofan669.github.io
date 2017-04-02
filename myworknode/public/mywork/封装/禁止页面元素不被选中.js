/**
 * Created by zxf111 on 2016/8/23.
 */
//禁止页面元素不被选中//***************************************************
if(document.all){
    document.onselectstart= function(){return false;}; //for ie
}else{
    document.onmousedown= function(){return false;};
    document.onmouseup= function(){return true;};
}
document.onselectstart = new Function('event.returnValue=false;');

//*************************************************************************