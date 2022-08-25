// alert(1);

// $(window).scroll(function () {
//   //zoom
//   var top = $(window).scrollTop(),
//     scale = top / 2000;
//   $(".inner").css({
//     transform: "scale(" + scale + "," + scale + ")",
//     "-webkit-transform": "scale(" + scale + "," + scale + ")",
//   });

//   var scroll = $(window).scrollTop();
//   // console.log(scroll);
//   var header = $("header");
//   return scroll > 20 ? header.addClass("stuck") : header.removeClass("stuck");
//   // }
// });

$(() => {
  $(window).on("load", function () {
    $(".preloader").fadeOut(10000);
    $(".preloader").remove();
  });
  new WOW().init();
  var mobile = $(".menu").addClass("mob");
  $(document).on("click", ".m-menu", () => {
    $(".menu").fadeIn("fast");
    // alert(1);
  });
  $(document).on("click", ".close-btn", () => {
    $(".menu").hide();
    // alert(1);
  });

  if ($(window).width() > 768) {
    // $(".m-menu").click(() => {
    // });
  }

  // const tilt = $(".js-tilt").tilt();
  // // tilt.on("change", callback); // parameters: event, transforms
  // // tilt.on("tilt.mouseLeave", callback); // parameters: event
  // // tilt.on("tilt.mouseEnter", callback); // parameters: event

  // $(".js-tilt").tilt({
  //   max: 30,
  //   speed: 600,
  //   scale: 1,
  //   transition: true,
  //   // easing: "cubic-bezie$(.03,.98,.52,.99)",
  //   perspective: 600,
  //   // glare: true,
  // });
});

//timeline js
// http://timeline.knightlab.com/docs/options.html
// var additionalOptions = {
//   start_at_end: true,
//   default_bg_color: { r: 0, g: 0, b: 0 },
//   timenav_height: 250
// };

$.ajax({
  url: 'js/data.json',
  type: 'GET',
  success: (response) => {
    // console.log(response.events.length);
    var i;
    var nul = [];
    
    for (var i = 0; i < response.events.length; i++) {
      if (response.events[i].id % 2 !== 0) {
        // response.events[i].id.push(response.events[i].id.splice(i, 1)[0]);
        // console.log(i + ': ' + response.events[i].id.join(' '));
        // nul.push(response.events)
        var id_ = response.events[i].id;
        var headline = response.events[i].text.headline;
        var desc = response.events[i].text.text;
        var url_media = response.events[i].text.url_media;
        // console.log(id_);
        $('iframe').hide()

        $(".ag-timeline_list").append(`
        <div class="js-timeline_item ag-timeline_item">
            <div class="ag-timeline-card_box">
              <div class="js-timeline-card_point-box
                ag-timeline-card_point-box">
                <div class="ag-timeline-card_point">
                  <div class="tembakan">
                    <img src="img/Tembakan2.png" />
                  </div>
                </div>
              </div>
              <div class="ag-timeline-card_meta-box">
                <div class="ag-timeline-card_meta">${headline}</div>
              </div>
            </div>
            <div class="ag-timeline-card_item">
              <div class="ag-timeline-card_inner">
                <div class="ag-timeline-card_img-box">
                  <img
                    class="id${id_}"
                    src="${url_media}"
                    class="ag-timeline-card_img" />
                    <iframe id="id${id_}" src="${url_media}" frameborder="0"  scrolling="no" allowfullscreen="true" class="tambah"></iframe>
                </div>
                <div class="ag-timeline-card_info">
                  <div class="ag-timeline-card_title">${headline}</div>
                  <div class="ag-timeline-card_desc">
                    ${desc}
                  </div>
                </div>
              </div>
              <div class="ag-timeline-card_arrow"></div>
            </div>
          </div>
        `)
      }
      // $('iframe').hide()
      
      if (response.events[i].id % 2 === 0) {
        // response.events[i].id.push(response.events[i].id.splice(i, 1)[0]);
        // console.log(i + ': ' + response.events[i].id.join(' '));
        // nul.push(response.events)
        var id_ = response.events[i].id;
        var headline = response.events[i].text.headline;
        var desc = response.events[i].text.text;
        var url_media = response.events[i].text.url_media;
        $(".ag-timeline_list").append(`
        <div class="js-timeline_item ag-timeline_item">
        <div class="ag-timeline-card_box">
          <div class="ag-timeline-card_meta-box">
            <div class="ag-timeline-card_meta">${headline}</div>
          </div>
          <div class="js-timeline-card_point-box
            ag-timeline-card_point-box">
            <div class="ag-timeline-card_point">
            <div class="tembakan">
                    <img src="img/Tembakan2.png" />
                  </div>
            </div>
          </div>
        </div>
        <div class="ag-timeline-card_item">
          <div class="ag-timeline-card_inner">
            <div class="ag-timeline-card_img-box">
              <img
                src="${url_media}"
                class="ag-timeline-card_img id${id_}" alt=""/>
                <iframe id="id${id_}" src="${url_media}" frameborder="0"  scrolling="no" allowfullscreen="true" class="tambah"></iframe>
            </div>
            <div class="ag-timeline-card_info">
              <div class="ag-timeline-card_title">${headline}</div>
              <div class="ag-timeline-card_desc">
                ${desc}
              </div>
            </div>
          </div>
          <div class="ag-timeline-card_arrow"></div>
        </div>
      </div>
        `)
      }
    }

    $(window).on('scroll', function () {
      fnOnScroll();
    });
    
    $(window).on('resize', function () {
      fnOnResize();
    });
    
    
    var agTimeline = $('.js-timeline'),
      agTimelineLine = $('.js-timeline_line'),
      agTimelineLineProgress = $('.js-timeline_line-progress'),
      agTimelinePoint = $('.js-timeline-card_point-box'),
      agTimelineItem = $('.js-timeline_item'),
      agOuterHeight = $(window).outerHeight(),
      agHeight = $(window).height(),
      f = -1,
      agFlag = false;
    
    function fnOnScroll() {
      agPosY = $(window).scrollTop();
    
      fnUpdateFrame();
    }
    
    function fnOnResize() {
      agPosY = $(window).scrollTop();
      agHeight = $(window).height();
    
      fnUpdateFrame();
    }
    
    function fnUpdateWindow() {
      agFlag = false;
    
      agTimelineLine.css({
        top: agTimelineItem.first().find(agTimelinePoint).offset().top - agTimelineItem.first().offset().top,
        bottom: agTimeline.offset().top + agTimeline.outerHeight() - agTimelineItem.last().find(agTimelinePoint).offset().top
      });
    
      f !== agPosY && (f = agPosY, agHeight, fnUpdateProgress());
    }
    
    function fnUpdateProgress() {
      var agTop = agTimelineItem.last().find(agTimelinePoint).offset().top;
    
      i = agTop + agPosY - $(window).scrollTop();
      a = agTimelineLineProgress.offset().top + agPosY - $(window).scrollTop();
      n = agPosY - a + agOuterHeight / 2;
      i <= agPosY + agOuterHeight / 2 && (n = i - a);
      agTimelineLineProgress.css({ height: n + "px" });
    
      agTimelineItem.each(function () {
        var agTop = $(this).find(agTimelinePoint).offset().top;
    
        (agTop + agPosY - $(window).scrollTop()) < agPosY + .5 * agOuterHeight ? $(this).addClass('js-ag-active') : $(this).removeClass('js-ag-active');
      })
    }
    
    function fnUpdateFrame() {
      agFlag || requestAnimationFrame(fnUpdateWindow);
      agFlag = true;
    }
    

  }
});

$("#scroll-top").hide();
// fade in #back-top
$(function () {
  $(window).scroll(function () {
    if ($(this).scrollTop() > 100) {
      $('#scroll-top').fadeIn();
    } else {
      $('#scroll-top').fadeOut();
    }
  });
  // scroll body to 0px on click
  $('#scroll-top').click(function () {
    $('body,html').animate({
      scrollTop: 0
    }, 800);
  });
});


$(".pistol").click(()=>{
  $('html, body').animate({
    scrollTop: $(".ag-timeline-block").offset().top
}, 2000);
});


const pauseVar = "rotations_x";
const playVar = "rotations";

const btns = document.querySelectorAll(".all");

function onChange(event) {
  const buttonElement = event.currentTarget;

  const isPlayButton = buttonElement.classList.contains(playVar);

  if (isPlayButton) {
    buttonElement.classList.remove(playVar);
    buttonElement.classList.add(pauseVar);
    $("#play-button").removeClass("animate__infinite");
    $("#myAudio").get(0).play();
  } else {
    buttonElement.classList.remove(pauseVar);
    buttonElement.classList.add(playVar);
    $("#play-button").addClass("animate__infinite");
    $("#myAudio").get(0).pause();
  }

  // You can also use .toggle function on classList as mentioned by the person in other answer
}

// query selector all returns a list of nodes, therefore we need to iterate over it and attach an event listener to each button seperatly
btns.forEach((btn) => {
  btn.addEventListener("click", onChange);
});


/* a Pen by Diaco m.lotfollahi  : https://diacodesign.com */

var Pic = document.getElementById('pic').cloneNode();
document.getElementById('container').appendChild(Pic);
var line = document.createElement('div'); line.className = 'line';
document.getElementById('container').appendChild(line);  


var tl = new TimelineMax({repeat:-1});

for(var i=50; i--;){
  tl.to(Pic,R(0.03,0.17),{opacity:R(0,1),y:R(-1.5,1.5)})
};

tl.to(line,tl.duration()/2,{opacity:R(0.1,1),x:R(0,300),ease:RoughEase.ease.config({strength:0.5,points:10,randomize:true,taper: "none"}),repeat:1,yoyo:true},0);

function R(max,min){return Math.random()*(max-min)+min};


// "url_media":"https://20.detik.com/embed/220811149"