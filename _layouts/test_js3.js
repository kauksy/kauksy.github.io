// onload는 html을 다 읽고 (웹페이지를 다 읽고) 수행시키는것
// $로 시작하는 건 다 제이쿼리다
window.onload = function () {
    var img_flag = false;
    var div_flag = true;
    var color_toggle = true;
    var text_toggle = true;

    $("#button1").attr("disabled", true);

    $("#button1").click(function() {   
        img_flag =! img_flag;
        $("#img1").attr("hidden", img_flag);
        if(img_flag){
            this.textContent = '이미지보이기';
        }else{
            this.textContent = '이미지숨기기';
        }
    });
    
    $("#text_box").keyup(function(){
        if($("#text_box").val() == ""){
            $("#button1").attr("disabled", true);
        }else{
            $("#button1").attr("disabled", false);
        }
    });

    // 수정해야함
    $("#img1").click(function() {
        if(div_flag){
            $("#fdiv3").hide();
        }else {
            $("#fdiv3").show();
        }
    });

    $("#fdiv2").click(function() {
        if(color_toggle){
            this.style.color = "hotpink";
            color_toggle = false;
        }else{
            this.style.color = "aqua";
            color_toggle = true;
        }
    });

    $("#fidv3_1").click(function() {
        if(text_toggle) {
            $("#yebbi").text("조현철");
            text_toggle = false;
        }else{
            $("#yebbi").text("김예삐");
            text_toggle = true;
        } 
    });

    $("#button2").click(function (){
        var url = "https://reqres.in/api/users?page=2";
        $.ajax({
            type: "GET",
            url: url,
            success:function(response){
                console.log(response);
                $("#fdiv4").text(JSON.stringify(response));
            }
        }); 
    });


};

$(document).ready( function () {
    $('#myTable').DataTable();
} );