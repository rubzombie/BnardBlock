/**
 * ...
 * @author rubzombie
 */

(function(app, aRx) {
  function isSpam(target) {
    var bSpam = false;
    for (var index = 0, length = aRx.length; !bSpam && index < length; index++) {
      (bSpam = aRx[index].test(target)) && console && console.log({"spam":target});
    }
    return bSpam;
  }
  if (!(/myfreecams\.com$/i.test(document.location.hostname) && window.hasOwnProperty("FormatChat"))) {
    window.alert("*myfreecams.com ONLY chat filter bookmark applet");
  } else if (window["FormatChat"]["fn"] && window["FormatChat"] !== window["FormatChat"]["fn"]) {
    window["FormatChat"] = window["FormatChat"]["fn"];
    window.alert(app + " de-activated.");
  } else {
    var fn = window["FormatChat"]["fn"] || window["FormatChat"];
    window["FormatChat"] = function () {
      if (!arguments[0] || isSpam(arguments[0])) {
        return "";
      }
      return window["FormatChat"]["fn"].apply(this, arguments);
    };
    window["FormatChat"]["fn"] = fn;
    window.alert(app + " activated.");
  }
})("B'nardBlock", [/\([^()]*\b(be*\b|b.rn([a@]rd|ie)?|gu[a@]rdi[a@]n)[^()]*\)/i]);
