 window.Modernizr=
function toggle1(id) {

        var state = document.getElementById(id).style.display;

           if (state == 'block') {

                document.getElementById(id).style.display = 'none';

            } else {

                document.getElementById(id).style.display = 'block';

            }

        }

function toggle(id) {

        var state = document.getElementById(id).style.display;

           if (state == 'block') {

                document.getElementById(id).style.display = 'none';

            } else {

                document.getElementById(id).style.display = 'block';

            }

        }
		
function calc1(form) {
E = form.el.value;
I = form.i.value;
L = form.l.value;
m = form.m.value;
e = form.e.value;
w = form.w.value;

form.k.value = (48*form.el.value*form.i.value)/Math.pow(form.l.value,3);
form.koverm.value = form.k.value/form.m.value;
form.sqrtkoverm.value = Math.sqrt(form.koverm.value);
form.xresponse.value = (form.e.value*Math.pow(form.w.value,2))/(Math.pow(form.sqrtkoverm.value,2)-Math.pow(form.w.value,2));

}

function MM_CheckFlashVersion(reqVerStr,msg){
  with(navigator){
    var isIE  = (appVersion.indexOf("MSIE") != -1 && userAgent.indexOf("Opera") == -1);
    var isWin = (appVersion.toLowerCase().indexOf("win") != -1);
    if (!isIE || !isWin){  
      var flashVer = -1;
      if (plugins && plugins.length > 0){
        var desc = plugins["Shockwave Flash"] ? plugins["Shockwave Flash"].description : "";
        desc = plugins["Shockwave Flash 2.0"] ? plugins["Shockwave Flash 2.0"].description : desc;
        if (desc == "") flashVer = -1;
        else{
          var descArr = desc.split(" ");
          var tempArrMajor = descArr[2].split(".");
          var verMajor = tempArrMajor[0];
          var tempArrMinor = (descArr[3] != "") ? descArr[3].split("r") : descArr[4].split("r");
          var verMinor = (tempArrMinor[1] > 0) ? tempArrMinor[1] : 0;
          flashVer =  parseFloat(verMajor + "." + verMinor);
        }
      }
      // WebTV has Flash Player 4 or lower -- too low for video
      else if (userAgent.toLowerCase().indexOf("webtv") != -1) flashVer = 4.0;

      var verArr = reqVerStr.split(",");
      var reqVer = parseFloat(verArr[0] + "." + verArr[2]);
  
      if (flashVer < reqVer){
        if (confirm(msg))
          window.location = "http://www.adobe.com/shockwave/download/download.cgi?P1_Prod_Version=ShockwaveFlash";
      }
    }
  } 
}


AC_FL_RunContent( 'codebase','http://download.macromedia.com/pub/shockwave/cabs/flash/swflash.cab#version=7,0,0,0','width','572','height','551','id','FLVPlayer','src','FLVPlayer_Progressive','flashvars','&MM_ComponentVersion=1&skinName=Halo_Skin_2&streamName=Videos/introductiontutorial&autoPlay=false&autoRewind=true','quality','high','scale','noscale','name','FLVPlayer','salign','lt','pluginspage','http://www.adobe.com/shockwave/download/download.cgi?P1_Prod_Version=ShockwaveFlash','movie','FLVPlayer_Progressive' ); //end AC code

AC_FL_RunContent1( 'codebase','http://download.macromedia.com/pub/shockwave/cabs/flash/swflash.cab#version=7,0,0,0','width','572','height','551','id','FLVPlayer2','src','FLVPlayer_Progressive1','flashvars','&MM_ComponentVersion=1&skinName=Halo_Skin_2&streamName=Videos/rotorvibration&autoPlay=false&autoRewind=false','quality','high','scale','noscale','name','FLVPlayer2','salign','lt','pluginspage','http://www.adobe.com/shockwave/download/download.cgi?P1_Prod_Version=ShockwaveFlash','movie','FLVPlayer_Progressive1' ); //end AC code