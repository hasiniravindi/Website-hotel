jQuery(document).ready(function(){
    var scripts = document.getElementsByTagName("script");
    var jsFolder = "";
    for (var i= 0; i< scripts.length; i++)
    {
        if( scripts[i].src && scripts[i].src.match(/initslider-1\.js/i))
            jsFolder = scripts[i].src.substr(0, scripts[i].src.lastIndexOf("/") + 1);
    }
    jQuery("#amazingslider-1").amazingslider({
        sliderid:1,
        jsfolder:jsFolder,
        width:1200,
        height:450,
        skinsfoldername:"",
        loadimageondemand:false,
        videohidecontrols:false,
        watermarktextcss:"font:12px Arial,Tahoma,Helvetica,sans-serif;color:#333;padding:2px 4px;-webkit-border-radius:4px;-moz-border-radius:4px;border-radius:4px;background-color:#fff;opacity:0.9;filter:alpha(opacity=90);",
        watermarkstyle:"text",
        donotresize:false,
        enabletouchswipe:true,
        fullscreen:false,
        autoplayvideo:true,
        addmargin:false,
        watermarklinkcss:"text-decoration:none;font:12px Arial,Tahoma,Helvetica,sans-serif;color:#333;",
        watermarktext:"amazingslider.com",
        watermarklink:"http://amazingslider.com?source=watermark",
        transitiononfirstslide:false,
        forceflash:false,
        isresponsive:true,
        forceflashonie11:true,
        forceflashonie10:true,
        pauseonmouseover:false,
        playvideoonclickthumb:true,
        showwatermark:false,
        slideinterval:2500,
        watermarkpositioncss:"display:block;position:absolute;bottom:4px;right:4px;",
        watermarkimage:"",
        fullwidth:true,
        randomplay:false,
        watermarktarget:"_blank",
        scalemode:"fill",
        loop:0,
        autoplay:true,
        navplayvideoimage:"play-32-32-0.png",
        navpreviewheight:60,
        timerheight:2,
        descriptioncssresponsive:"font-size:12px;",
        shownumbering:false,
        skin:"Elegant",
        addgooglefonts:true,
        navshowplaypause:true,
        navshowplayvideo:false,
        navshowplaypausestandalonemarginx:8,
        navshowplaypausestandalonemarginy:8,
        navbuttonradius:0,
        navthumbnavigationarrowimageheight:32,
        navmarginy:16,
        lightboxshownavigation:false,
        showshadow:false,
        navfeaturedarrowimagewidth:16,
        navpreviewwidth:120,
        googlefonts:"Inder",
        navborderhighlightcolor:"",
        navcolor:"",
        lightboxdescriptionbottomcss:"{color:#333; font-size:12px; font-family:Arial,Helvetica,sans-serif; overflow:hidden; text-align:left; margin:4px 0px 0px; padding: 0px;}",
        lightboxthumbwidth:80,
        navthumbnavigationarrowimagewidth:32,
        navthumbtitlehovercss:"text-decoration:underline;",
        navthumbmediumheight:64,
        texteffectresponsivesize:600,
        arrowwidth:32,
        texteffecteasing:"easeOutCubic",
        texteffect:"slide",
        lightboxthumbheight:60,
        navspacing:4,
        navarrowimage:"navarrows-28-28-0.png",
        bordercolor:"#ffffff",
        ribbonimage:"ribbon_topleft-0.png",
        navwidth:28,
        navheight:28,
        arrowimage:"arrows-32-32-0.png",
        timeropacity:0.6,
        arrowhideonmouseleave:1000,
        navthumbnavigationarrowimage:"carouselarrows-32-32-0.png",
        navshowplaypausestandalone:false,
        texteffect1:"slide",
        navpreviewbordercolor:"#ffffff",
        texteffect2:"slide",
        customcss:"",
        ribbonposition:"topleft",
        navthumbdescriptioncss:"display:block;position:relative;padding:2px 4px;text-align:left;font:normal 12px Arial,Helvetica,sans-serif;color:#333;",
        lightboxtitlebottomcss:"{color:#333; font-size:14px; font-family:Armata,sans-serif,Arial; overflow:hidden; text-align:left;}",
        arrowstyle:"none",
        navthumbmediumsize:800,
        navthumbtitleheight:20,
        textpositionmargintop:24,
        buttoncssresponsive:"",
        navswitchonmouseover:false,
        playvideoimage:"playvideo-64-64-0.png",
        arrowtop:50,
        textstyle:"dynamic",
        playvideoimageheight:64,
        navfonthighlightcolor:"#666666",
        showbackgroundimage:false,
        navpreviewborder:4,
        navshowplaypausestandaloneheight:28,
        navdirection:"horizontal",
        navbuttonshowbgimage:true,
        navbuttonbgimage:"navbuttonbgimage-28-28-0.png",
        textbgcss:"display:none;",
        textpositiondynamic:"bottomleft",
        playvideoimagewidth:64,
        buttoncss:"display:block; position:relative; margin-top:10px;",
        navborder:4,
        navshowpreviewontouch:false,
        bottomshadowimagewidth:110,
        showtimer:true,
        navradius:0,
        navmultirows:false,
        navshowpreview:true,
        navpreviewarrowheight:8,
        navmarginx:16,
        navfeaturedarrowimage:"featuredarrow-16-8-0.png",
        navthumbsmallsize:480,
        showribbon:false,
        navstyle:"numbering",
        textpositionmarginleft:24,
        descriptioncss:"display:block; position:relative; font:14px \"Lucida Sans Unicode\",\"Lucida Grande\",sans-serif,Arial; color:#00ccff;  background-color:#fff; margin-top:10px; padding:10px; ",
        navplaypauseimage:"navplaypause-28-28-0.png",
        backgroundimagetop:-10,
        timercolor:"#ffffff",
        numberingformat:"%NUM/%TOTAL ",
        navthumbmediumwidth:64,
        navfontsize:12,
        navhighlightcolor:"",
        texteffectdelay1:1000,
        navimage:"bullet-24-24-0.png",
        texteffectdelay2:1500,
        texteffectduration1:800,
        navshowplaypausestandaloneautohide:false,
        texteffectduration2:800,
        navbuttoncolor:"",
        navshowarrow:true,
        texteffectslidedirection:"bottom",
        navshowfeaturedarrow:false,
        lightboxbarheight:64,
        titlecss:"display:table; position:relative; font:16px \"Lucida Sans Unicode\",\"Lucida Grande\",sans-serif,Arial; color:#fff; white-space:nowrap; background-color:#00ccff; padding:10px;",
        ribbonimagey:0,
        ribbonimagex:0,
        navthumbsmallheight:48,
        texteffectslidedistance1:10,
        texteffectslidedistance2:10,
        navrowspacing:8,
        navshowplaypausestandaloneposition:"bottomright",
        shadowsize:5,
        lightboxthumbtopmargin:12,
        titlecssresponsive:"font-size:12px;",
        navshowplaypausestandalonewidth:28,
        navthumbresponsive:false,
        navfeaturedarrowimageheight:8,
        navopacity:0.8,
        textpositionmarginright:24,
        backgroundimagewidth:120,
        textautohide:true,
        navthumbtitlewidth:120,
        navpreviewposition:"bottom",
        texteffectseparate:true,
        arrowheight:32,
        shadowcolor:"#aaaaaa",
        arrowmargin:8,
        texteffectduration:600,
        bottomshadowimage:"bottomshadow-110-95-3.png",
        border:0,
        lightboxshowdescription:false,
        timerposition:"bottom",
        navfontcolor:"#333333",
        navthumbnavigationstyle:"arrow",
        borderradius:0,
        navbuttonhighlightcolor:"",
        textpositionstatic:"bottom",
        texteffecteasing2:"easeOutCubic",
        navthumbstyle:"imageonly",
        texteffecteasing1:"easeOutCubic",
        textcss:"display:block; padding:8px 16px; text-align:left;",
        navthumbsmallwidth:48,
        navbordercolor:"#ffffff",
        navpreviewarrowimage:"previewarrow-16-8-1.png",
        navthumbtitlecss:"display:block;position:relative;padding:2px 4px;text-align:left;font:bold 14px Arial,Helvetica,sans-serif;color:#333;",
        showbottomshadow:true,
        texteffectslidedistance:10,
        texteffectdelay:800,
        textpositionmarginstatic:0,
        backgroundimage:"",
        navposition:"topright",
        texteffectslidedirection1:"bottom",
        navpreviewarrowwidth:16,
        textformat:"Blue box",
        texteffectslidedirection2:"bottom",
        bottomshadowimagetop:95,
        texteffectresponsive:true,
        navshowbuttons:true,
        lightboxthumbbottommargin:8,
        textpositionmarginbottom:24,
        lightboxshowtitle:true,
        slice: {
            duration:1500,
            easing:"easeOutCubic",
            checked:true,
            effects:"up,down,updown",
            slicecount:10
        },
        transition:"slice",
        scalemode:"fill",
        isfullscreen:false,
        textformat: {

        }
    });
});