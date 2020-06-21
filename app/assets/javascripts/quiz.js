$(function() {

  qa = gon.quizzes;
  pi = gon.images;
  count = 0;
  s = [];

  quiz();

  function recordAnswer() {
    if (s[count] == "○") {
      $(".table" + count).html(s[count]).css("color", "red");
    } else if (s[count] == "×") {
      $(".table" + count).html(s[count]).css("color", "blue");
    };
    count++;
    nextQuiz()
  };

  function choice_change() {
    var arr = [];
    $('ul li').each(function() {
      arr.push($(this).html());
    });
    arr.sort(function() {
      return Math.random() - Math.random();
    });
    $('ul').empty();
    for(i=0; i < arr.length; i++) {
      $('ul').append('<li>' + arr[i] + '</li>');
    };
  };

  function quizText() {
    $("#petsImage").fadeOut();
    $(".quizTitle").html("第" + (count + 1) + "問");
    $(".text").html(qa[count].text);
    $("#correct").html(qa[count].correct);
    $("#uncorrect1").html(qa[count].uncorrect1);
    $("#uncorrect2").html(qa[count].uncorrect2);
    $("#uncorrect3").html(qa[count].uncorrect3);
  };

  function choiceClick() {
    $(".correct").css("border", "4px solid red");
    $(".uncorrect").css("text-indent", "-9999px");
    $("img").attr('src', pi[count].photo.url);
    $("#petsImage").fadeIn(5);
    $(".text").html("").append('<div class="balloon"></div>');
    $("button").prop("disabled", true);
  };

  function correctClick() {
    var correct_messages = ["正解ニャ！", "その通りニャ！", "さすがニャ！正解ニャ！", "正解ニャ！すごいニャ！","正解ニャ！天才ニャ！"];
    var correct_messageNo = Math.floor( Math.random() * correct_messages.length);
    $(".correct").click(function(){
      choiceClick();
      $(".balloon").html(correct_messages[correct_messageNo]);
      s.push("○");
      recordAnswer()
    });
  };

  function uncorrectClick() {
    var uncorrect_messages = ["残念、不正解ニャ", "不正解ニャ...", "間違いニャ...", "違うニャ....", "(´・ω・`)", "しっかりするニャ！"];
    var uncorrect_messageNo = Math.floor( Math.random() * uncorrect_messages.length);
    $(".uncorrect").click(function(){
      choiceClick();
      $(".balloon").html(uncorrect_messages[uncorrect_messageNo]);
      s.push("×");
      recordAnswer()
    });
  };

  function quiz() {
    choice_change();
    quizText();
    correctClick();
    uncorrectClick();
  };

  function nextQuiz() {
    if (count < qa.length) {
      setTimeout(function() {
        $("button").prop("disabled", false).css({"border": "", "text-indent": ""});
        quiz();
      }, 1000);
    } else {
      setTimeout(function() {
        $(".quizTitle").html("終了!!");
        var cn = $.grep(s, function(e) {
          return e.indexOf("○") >= 0;
        });
        console.log(cn.length)
        if (cn.length == 5) {
          $(".balloon").html("全問正解！さすがご主人様！")
        } else if (cn.length == 4) {
          $(".balloon").html("4問正解！すごいニャ！")
        } else if (cn.length == 3) {
          $(".balloon").html("3問正解！まあまあだニャ")
        } else if (cn.length == 2) {
          $(".balloon").html("2問正解...がっかりニャ")
        } else if (cn.length == 1) {
          $(".balloon").html("1問正解...失望したニャ...")
        } else if (cn.length == 0) {
          $(".balloon").html("全問不正解...飼い主変えたい...")
        };
        setTimeout(function() {
          $(".modal").show();
          $(".replay").click(function() {
            location.reload();
          });
        }, 2000);
      }, 1000);
    };
  };
});