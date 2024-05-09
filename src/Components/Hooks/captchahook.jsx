// export function Captcha()
// {
//      var a = Math.random() * 10;
//      console.log(Math.random());
//      var b = Math.random() * 10;
//      var c = Math.random() * 10;
//      var d = Math.random() * 10;
//      var e = Math.random() * 10;
//      var f = Math.random() * 10;
//      var code = `${Math.round(a)} ${Math.round(b)} ${Math.round(c)} ${Math.round(d)} ${Math.round(e)} ${Math.round(f)}`;
//      return code;
// }

// changecase.hook.js;


export function ChangeCase(str)

{
    var str="we3lcome"
    var firstChar = str.charAt(0);
    var restChars = str.substring(1);
    var sentence = firstChar.toUpperCase() + restChars.toLowerCase();
    return sentence;
}
