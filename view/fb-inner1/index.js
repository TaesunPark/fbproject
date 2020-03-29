$(document).ready(function(){
    $("#js-checkbox1").click(function(){
        if($("#js-textbox1").css("display") =="none"){
            $("#js-textbox1").show();
        }
    })
})
$(document).ready(function(){
    $(document).mouseup(function(e){
        if($("#js-checkbox1").has(e.target).length === 0)
        {
            $("#js-textbox1").hide();
        }   
        if($("#js-checkbox2").has(e.target).length === 0)
        {
            $("#js-textbox2").hide();
        } 
        if($("#js-checkbox3").has(e.target).length === 0)
        {
            $("#js-textbox3").hide();
        } 
        if($("#js-checkbox4").has(e.target).length === 0)
        {
            $("#js-textbox4").hide();
        } 
    })
})
$(document).ready(function(){
    $("#js-checkbox2").click(function(){
        if($("#js-textbox2").css("display") =="none"){
            $("#js-textbox2").show();
        }
    })
})
$(document).ready(function(){
    $("#js-checkbox3").click(function(){
        if($("#js-textbox3").css("display") =="none"){
            $("#js-textbox3").show();
        }
    })
})
$(document).ready(function(){
    $("#js-checkbox4").click(function(){
        if($("#js-textbox4").css("display") =="none"){
            $("#js-textbox4").show();
        }
    })
})

