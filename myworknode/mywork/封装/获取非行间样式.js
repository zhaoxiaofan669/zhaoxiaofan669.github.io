/**
 * Created by zxf111 on 2016/8/22.
 */
//获取非行间样式
function getStyle(obj,name)
{

    //iE
    if(obj.currentStyle)
    {
        return  parseInt(obj.currentStyle[name]);
    }
    else
    {
        //FF
        return parseInt(getComputedStyle(obj,null)[name]);

    }
}