type =
  "text/javascript" >
  function validateEmail(email) {
    var reg = /^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    return reg.test(email);
  };

$(document).ready(function() {
  $(".modalbox").fancybox();
  $("#contact").submit(function() {
    return false;
  });

  $("#send").on("click", function() {
    var emailval = $("#email").val();
    var msgval = $("#msg").val();
    var msglen = msgval.length;
    var mailvalid = validateEmail(emailval);

    if (mailvalid == false) {
      $("#email").addClass("error");
    } else if (mailvalid == true) {
      $("#email").removeClass("error");
    }

    if (msglen < 4) {
      $("#msg").addClass("error");
    } else if (msglen >= 4) {
      $("#msg").removeClass("error");
    }

    if (mailvalid == true && msglen >= 4) {
      // if both validate we attempt to send the e-mail
      // first we hide the submit btn so the user doesnt click twice
      $("#send").replaceWith("<em>sending...</em>");

      $.ajax({
        type: "POST",
        url: "sendmessage.php",
        data: $("#contact").serialize(),
        success: function(data) {
          if (data == "true") {
            $("#contact").fadeOut("fast", function() {
              $(this).before(
                "<p><strong>Success! Your feedback has been sent, thanks :)</strong></p>"
              );
              setTimeout("$.fancybox.close()", 1000);
            });
          }
        }
      });
    }
  });
});

/*************************************************************** */

var languageSelect = document.getElementById("LanguageSelect");
var selectedLanguage = readCookie("language");

if (
  selectedLanguage == "english" ||
  selectedLanguage == "chinese" ||
  selectedLanguage == "portuguese"
) {
  $(".language select").val(selectedLanguage);
  var sel = $(".language select").val(selectedLanguage);
  if (selectedLanguage == "english") {
    $(".english").css("display", "inline");
    $(".chinese").css("display", "none");
    $(".portuguese").css("display", "none");
  } else if (selectedLanguage == "chinese") {
    $(".english").css("display", "none");
    $(".chinese").css("display", "inline");
    $(".portuguese").css("display", "none");
  } else if (selectedLanguage == "portuguese") {
    $(".english").css("display", "none");
    $(".chinese").css("display", "none");
    $(".portuguese").css("display", "inline");
  }
}

$(".language select").bind("change", function() {
  //on change set cookie and...
  setCookie("language", this.value, 365);

  //change css depending on what is selected
  var sel = $(".language select").val();
  if (sel == "english") {
    $(".english").css("display", "inline");
    $(".chinese").css("display", "none");
    $(".portuguese").css("display", "none");
  } else if (sel == "chinese") {
    $(".english").css("display", "none");
    $(".chinese").css("display", "inline");
    $(".portuguese").css("display", "none");
  } else if (sel == "portuguese") {
    $(".english").css("display", "none");
    $(".chinese").css("display", "none");
    $(".portuguese").css("display", "inline");
  }
});

function saveLanguage(cookieValue) {
  var sel = document.getElementById("LanguageSelect");
  setCookie("language", cookieValue, 365);
}

function setCookie(cookieName, cookieValue, nDays) {
  var today = new Date();
  var expire = new Date();

  if (nDays == null || nDays == 0) nDays = 1;

  expire.setTime(today.getTime() + 3600000 * 24 * nDays);
  document.cookie =
    cookieName + "=" + escape(cookieValue) + ";expires=" + expire.toGMTString();
}

function readCookie(name) {
  var nameEQ = name + "=";
  var ca = document.cookie.split(";");
  for (var i = 0; i < ca.length; i++) {
    var c = ca[i];
    while (c.charAt(0) == " ") c = c.substring(1, c.length);
    if (c.indexOf(nameEQ) == 0) return c.substring(nameEQ.length, c.length);
  }
  return null;
}

/********************************************************************** */

const buttonElement = document.querySelector(".chinese-button");

buttonElement.addEventListener(
  "mouseenter",
  (moveButton = () => {
    const offsetLeft =
      Math.random() * (window.innerWidth - buttonElement.clientWidth);
    const offsetTop =
      Math.random() * (window.innerHeight - buttonElement.clientHeight);
    buttonElement.style.top = offsetTop + "px";
    buttonElement.style.left = offsetLeft + "px";
  })
);

const buttonE = document.querySelector(".crazy-button");
buttonE.addEventListener(
  "mouseenter",
  (moveButton = () => {
    const offsetL = Math.random() * (window.innerWidth - buttonE.clientWidth);
    const offsetT = Math.random() * (window.innerHeight - buttonE.clientHeight);
    buttonE.style.top = offsetT + "px";
    buttonE.style.left = offsetL + "px";
  })
);
