

  $(document).ready(function() {
    $("#mycanvas").click(function() {
      $("#footer").show()
    })
  });



  $(document).ready(function() {
    $("#mycanvas").click(function() {
      $("#chat").show()
    })
  });



        addEventListener("click", function() {
      var el = document.documentElement
        , rfs =
               el.requestFullScreen
            || el.webkitRequestFullScreen
            || el.mozRequestFullScreen
      ;
      rfs.call(el);
      });




        function beep2() {
          document.getElementById("pridez").play()
        };


  function beep1() {
    document.getElementById("beep").play();
 }


        var e = 1;
        setInterval(function() {
          1 == e ? (document.getElementById("favicon").href = "w3.html", e = 0) : (document.getElementById("favicon").href = "w1.html", e = 1)
        }, 1E3);


        $(document).ready(function() {
          $("#mycanvas").click(function() {
            $("#welcomeDiv").show()

          })
        });


        $(document).ready(function() {
          $("#poptxt").delay(2000).fadeIn(400);
              $(".black").delay(1E3).fadeIn(800);
          $(".pro_box").delay(200).fadeIn(800);
          $(".pro_box3").delay(1000).fadeIn(800);
          $("#pop_up_new").delay(1500).fadeIn(800);
          $("#ev_talkbox_wrapper").delay(1).fadeIn(500)
        });


        $(document).ready(function () {
            $("body").click(function () {
                $("#ev_talkbox_wrapper").hide();
            });
        });


      $(document).ready(function () {
          $("#ev_talkbox_wrapper").click(function () {
              $("#ev_talkbox_wrapper").hide();
          });
      });


      $(document).ready(function () {
          $("#mycanvas").click(function () {
              $("#ev_talkbox_wrapper").hide();
          });
      });


        $(document).ready(function() {
          $("#mycanvas").click(function() {
            $("#poptxt").show()
          })
        });
        $(document).ready(function() {
          $("#cross").click(function() {
            $("#poptxt").show()
          })
        });
