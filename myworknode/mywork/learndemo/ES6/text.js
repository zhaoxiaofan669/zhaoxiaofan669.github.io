/**
 * Created by zxf111 on 2017/3/28.
 */


/*demo1*/
//var  a = 1;
//let  b = 2;
//
//console.log("a:"+a);
//console.log("b:"+b);

/*demo2*/

//var a = 1;
//function foo(){
//    var a = 2;
//    console.log(a);
//}
//
//
//
////ES6
// if(1){
//     let b = 2;
//     console.log(b);
// }


/*demo3*/

//var a = 1;
//function foo(){
//    if(false){
//        var a = 1;
//    }
//    console.log(a);
//}



//const命令
//let user = {name:'王华',age:10};
//const LOVE_YOU = user;
//console.log("user",user);
//user.age = 12;
//console.log("user",user);


//变量的结构赋值

//var a = 1,b = 2,c = 3;

//var [a,...c] = [1,2,3];
//console.log("a:"+a);
//console.log("c:"+c);

//变量的结构赋值demo2

var arr = [1,2,3];

//ES6=============================================
var [a,b,c = 'default',d = 'default'] = arr;
console.log("a:"+a);
console.log("b:"+b);
console.log("c:"+c);
console.log("d:"+d);

//ES6=============================================

//ES5===========================================
//var a = arr[0];
//var b = arr[1];
//var c = arr[2];
//    if(arr[3])
//        var d = arr[3];
//    else
//        var d = 'default';
//
//console.log("a:"+a);
//console.log("b:"+b);
//console.log("c:"+c);
//console.log("d:"+d);
//ES5===========================================