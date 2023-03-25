// onload는 html을 다 읽고 (웹페이지를 다 읽고) 수행시키는것
// $로 시작하는 건 다 제이쿼리다
var text_toggle = true;
window.onload = function () {
    var img_flag = false;
    var div_flag = true;
    var color_toggle = true;

    document.getElementById("button1").disabled = true;
    // document.getElementById("button1").onclick = function() {hideImg();};
    document.getElementById("text_box").onkeyup = function() {checkTextBox();};
    document.getElementById("img1").onclick = function() {hidefdiv3();};
    document.getElementById("fdiv2").onclick = function() {changeColor();}
    // document.getElementById("fdiv3").onclick = function() {changeText();}

    
        $("#button1").click(function() {   
            img_flag =! img_flag;
            $("#img1").attr("hidden", img_flag);
            if(img_flag){
                this.textContent = '이미지보이기';
            }else{
                this.textContent = '이미지숨기기';
            }
        });
    


    function checkTextBox(){
        if(document.getElementById("text_box").value == ""){
            document.getElementById("button1").disabled = true;
        }else{
            document.getElementById("button1").disabled = false;
        }
    }

    function hidefdiv3(){
        document.getElementById("fdiv3").hidden = div_flag;
        div_flag =! div_flag;
    }

    function changeColor(){

        if(color_toggle){
            document.getElementById("fdiv2").style.color = "hotpink";
            color_toggle = false;
        }else{
            document.getElementById("fdiv2").style.color = "aqua";
            color_toggle = true;
        }
    }
};

function changeText(){
    if(text_toggle){
        document.getElementById("yebbi").innerText = "김현철"
        text_toggle = false;
    }else{
        document.getElementById("yebbi").innerText = "김예삐"
        text_toggle = true;
    }    
}