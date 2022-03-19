$('.lichsu-btn').click(function(){
    swal(
        {
            title: "Thông báo !",
            text: "Bạn cần đăng nhập để tham gia sự kiện !",
            buttons : {
                comfirm: "Đăng nhập"
            }
        });
});




$(document).ready(function() {
    getDataClient();
    getListRank();
});




function getDataClient (){

    $.getJSON('http://loanthe.gamota/api/getDataClient.php', function(data) {
        
        // let luottanghoa = `Bạn có: ${data.data.turn_remain}<br> Lượt tặng hoa`;
        // $("#stage").html(luottanghoa);
        

        // let diemthanmat = `Bạn có: ${data.data.point} Điểm thân mật`;
        // $("#diemthanmat").html(diemthanmat);
        // $("#diemthanmat-mob").html(diemthanmat);


        let exchange_award = data.data.exchange_award;
        $.each(exchange_award, function(key, value){
            let sent = `Đã đổi ${value.sent}/${value.max}`;
            let id_addr = `${key+1}`;
            let diemdoi = `${value.req} điểm đổi`;            
            $("#doiqua-sent"+id_addr).html(sent);
            $("#diemdoi"+id_addr).html(diemdoi);
            

            var dadoi;
            if (value.sent < value.max) {
                
                dadoi = `<img src="style/img/doingay.png" class="bottom__card-btn" alt="">`;
            }
            else{
                dadoi = `<img src="style/img/dadoi.png" class="bottom__card-btn" alt="">`;
            }
            $("#doiqua-btn"+id_addr).html(dadoi);

        });



        // login
        let user_login = data.data.user_login;
        console.log(user_login);

        if(user_login.is_login == 0){
            $('#dangnhap').attr("class", "show");
            $('#dangnhap-mob').attr("class","show-navbar");


            // Nếu chưa đăng nhập thì lượt tặng hoa = 0
            let luottanghoa = `Bạn có: 0<br> Lượt tặng hoa`;
            $("#luottanghoa").html(luottanghoa);


            // Nếu chưa đăng nhập thì điểm thân mật = 0
            let diemthanmat = `Bạn có: 0 Điểm thân mật`;
            $("#diemthanmat").html(diemthanmat);
            $("#diemthanmat-mob").html(diemthanmat);

            // console.log("1");
        }

        else{
            let username = user_login.username;
            $('#dangxuat').attr("class", "show");
            $('#dangxuat-mob').attr("class","show-navbar");
            $("#username").html(username);
            
            let luottanghoa = `Bạn có: ${data.data.turn_remain}<br> Lượt tặng hoa`;
            $("#luottanghoa").html(luottanghoa);
            let luottanghoa_mob = `Bạn có: ${data.data.turn_remain} Lượt tặng hoa`;
            $("#luottanghoa-mob").html(luottanghoa_mob);
            
            let diemthanmat = `Bạn có: ${data.data.point} Điểm thân mật`;
            $("#diemthanmat").html(diemthanmat);
            $("#diemthanmat-mob").html(diemthanmat);


            // console.log("2");
        }
    });
};








function getListRank (){

    $.getJSON('http://loanthe.gamota/api/getListRank.php', function(data) {

    let rank = data.rank;
    var html = '';
    $.each(rank, function(key, value){

    html += `<tr>
                <td>${key+1}. ${value.role_name}</td>
                <td>${value.server}</td>
                <td>${value.point}</td>
             </tr>` ;

    $("#bxh").html(html);
        }) 
    
    });
}
