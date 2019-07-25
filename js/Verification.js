function win(title, content, cancel, submit) {

    //let dom = `<div>${title}</div>`;
    var dom = "<div class='win'>" + "<form action='' method='POST'>" + "<div style='display: flex;flex-direction: row;justify-content:center;align-items:center;'>" + "<div class='popup' style='width:100vw;height:100vh;background:#000;opacity:0.3;position:fixed;top:0px;left:0px;z-index:99;'>" + "</div>" + "<div class= 'content' style='position:fixed;top:30vh;background:#fff;z-index:999;width:90%;max-width:400px;padding-top:10px;box-sizing:border-box;'>" + "<h3 style='margin:20px 0 0 0;text-align:center;color:#000;font-size:18px;font-weight:500;'>" + title + " <h3>" + "<div class='cost' style='margin:50px 0;display:flex;flex-direction:row;justify-content:center;align-items:center;'>" + "<span style='font-size:16px;margin-right:10px;'>" + content + "</span>" + "<div style='width:calc(100% - 120px);display:inline-block;border-bottom:#b6bece 1px solid;'>" + "<input name='maintenancecosts' id='txtName' type='text' style='width:100%;font-size:16px;outline:none;border:none;'>" + "</div> " + " </div>" + "<div class='confirm' style='display:flex;'>" + "<button class='clone' type='button' style='font-size:18px;outline:none;border:none;width:50%;height:60px;line-height:60px;color:#FFF;background:#fc7169;'>" + cancel + "</button>" + "<button type = 'submit' style='font-size:18px;outline:none;border:none;width:50%;height:60px;line-height:60px;color:#FFF;background:#b6bece;'> " + submit + "</button>" + "</div>" + "</div>" + "</div>" + "</form>" + "</div>"
    $("body").append(dom)
        // $(".win").css({"display":"none",})；
}
//页面加载完成后执行
$(document).ready(function() {
    //显示维保弹窗
    $(".submit").click(function() {
            //$(".win").removeClass("hide")
            $(".win").addClass("show")
            $("body,html").css("overflow", "hidden")
        })
        //隐藏弹窗   
    $(".clone").click(function() {
        //$(".win").removeClass("hide")
        $(".win").removeClass("show")
        $("body,html").css("overflow", "auto")
    })
});

//必填项提示
function checkForm(form) {
    if (form.maintenancecosts.value.trim() == "") {
        alert("维保费用不能为空!");
        form.username.focus();
        return false;
    }
}
//页面加载完成后执行
window.onload = function() {
    var myform = document.forms[0];
    myform.onsubmit = function() {
        return checkForm(this);
    }
}