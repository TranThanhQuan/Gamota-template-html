// modal menu mobile
function modalmenu() {
    var element = document.getElementById("menu-list");
    element.classList.toggle("show");
}

//right bar slice
function rightbar() {
    // console.log("abcc")
    var element = document.getElementById("arrow-bar");
    element.classList.toggle("slicebar");
    // console.log(element)
}


//sliceshow heros

if (window.innerWidth < 768) {   
  var slideIndex = 1;
  showDivs(slideIndex);
  
  function plusDivs(n) {
    showDivs(slideIndex += n);
  }
  
  function showDivs(n) {
    var i;
    var x = document.getElementsByClassName("mySlides");
  
  
      if(n == 5) {slideIndex = 1}
      if(n < 1) {slideIndex = 5}

  
    for (i = 0; i < x.length; i++) {
      x[i].style.display = "none";
    }
    x[slideIndex-1].style.display = "block"; 
  }
  
}





//vòng quay số

$(document).ready(function(){
  $(".btn-quayso").click(function(e){
    $(".btn-quayso img").addClass("btn-quayso-active");

    var a = 0;
    var b = 0;
    var c = Math.floor(Math.random() * 10) + 1; //random 1 số từ 1 - 10
    // var c = 10;
    var d = 200; // tốc độ quay (millisecond)
    var sovongquay = 3;

    console.log(c)

    var item = document.getElementById(`card${c}`);
    // console.log(item);

    var alertTime = (11*sovongquay + c + 3)*d;
    // console.log(alertTime);


    // if(c == 10){
    //   let timerId= setInterval(() => alert("Chúc bạn may mắn lần sau"), alertTime);
    //   setTimeout(() => { clearInterval(timerId);}, alertTime);
    // }

    // else{
    //   let timerId= setInterval(() => alert("Chúc mừng bạn đã trúng:"+ item.innerText), alertTime);
    //   setTimeout(() => { clearInterval(timerId);}, alertTime);  
    // }




  if(c == 10){
    let timerId= setInterval(() =>
      {
        swal(
          {
              title: "",
              text: "Chúc bạn may mắn lần sau !",
              buttons : {
                  comfirm: "OK"
              }
          });

        $(".btn-quayso img").removeClass("btn-quayso-active");
      }
    , alertTime);
      setTimeout(() => { clearInterval(timerId);}, alertTime);
  }

  else{
    let timerId= setInterval(() => 
    {
      swal(
        {
            title: "",
            text: "Chúc mừng bạn đã trúng: "+ item.innerText,
            buttons : {
                comfirm: "OK"
            }
        });

      $(".btn-quayso img").removeClass("btn-quayso-active");



    }
    , alertTime);
      setTimeout(() => { clearInterval(timerId);}, alertTime);  
    }


    function wheel()
    {    

        var e = $('.quayso-gift').children().length; //tổng số card
        var f = 11*sovongquay + c;                    //số vòng quay trước khi dừng
        setTimeout(function() {

            $('.quayso-gift .card1:eq(' + a + ')').addClass('card-active').siblings().removeClass('card-active');
            
            a++;
            b++;
            if (a == e)
                a = 0;
            if (b < f)
                wheel(d, c);             
        }, d);
    }
    wheel(); 
  });
});






//hóa thân vĩ nhân
function herogcl() {
  $(".item-gcl").addClass("show-item");
  $(".item-qv").removeClass("show-item");
  $(".item-tk").removeClass("show-item");

  $("#character-gcl").addClass("active");
  $("#character-qv").removeClass("active");
  $("#character-tk").removeClass("active");
}

function heroqv() {
  $(".item-gcl").removeClass("show-item");
  $(".item-qv").addClass("show-item");
  $(".item-tk").removeClass("show-item");

  $("#character-gcl").removeClass("active");
  $("#character-qv").addClass("active");
  $("#character-tk").removeClass("active");
}

function herotk() {
  $(".item-gcl").removeClass("show-item");
  $(".item-qv").removeClass("show-item");
  $(".item-tk").addClass("show-item");

  $("#character-gcl").removeClass("active");
  $("#character-qv").removeClass("active");
  $("#character-tk").addClass("active");
}







$('.single-item').slick();

//////////

$(document).ready(function() {
  getDataClient();
});





function getDataClient (){
  $.ajax({
      url : 'http://loanthe.gamota/api/getDataClient.php',
      type: 'POST',
      data: 'allow='+1,
      dataType: 'json',
      beforeSend:function(){
      },
      success: function(data){
          // console.log(user_login);
          let user_login = data.data.user_login;
            console.log(user_login);
            var userinfo = 0;

          if(user_login.is_login == 0){
            
            userinfo = `Vui lòng đăng nhập`;
          }

          else{
            userinfo =`Chào: ${user_login.username}`
          }
          $("#userinfo").html(userinfo);
          
      },   
      complete: function(){
          
      }
  });
}




function setValue(userLogin){
  console.log(userLogin);
}


function test(){
  console.log(userLogin);
}