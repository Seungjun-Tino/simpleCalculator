$(document).ready(function () {
    var result;
    var condition;
    var fisrtNum;
    var secondNum;
    var input = "";

    $(".yarp").yarp({
        colors: ['white']
    });

    $("#clearInput").click(function () {
        console.log('a');
        console.log(input);
        $("#inputNum").val("");
        result = null;
        condition = null;
        fisrtNum = null;
        secondNum = null;
        input = "";
        console.log(input);
    })

    $("#inputNum").click(function () {
        $("#inputNum").val("");
    })

    $("#decimal").click(function () {
        var num = $("#inputNum").val();
        var decimal = parseFloat(num) * 0.01;
        $("#inputNum").val(decimal);
    })


    $("#convert").click(function () {
        var num = $("#inputNum").val();
        var convert = parseFloat(num) * -1;
        $("#inputNum").val(convert);
    })

    $("#add").click(function () {
        var num = $("#inputNum").val();

        if (!fisrtNum) {
            fisrtNum = num;
            $("#inputNum").val("");
            condition = 1;
        } else {
            secondNum = num;
            calculte();
            condition = 1;
        }
        input = ""
    })

    $("#substract").click(function () {
        var num = $("#inputNum").val();
        if (!fisrtNum) {
            fisrtNum = num;
            $("#inputNum").val("");
            condition = 2;
        } else {
            secondNum = num;
            calculte();
            condition = 2;
        }
        input = ""
    })

    $("#multiply").click(function () {
        var num = $("#inputNum").val();
        if (!fisrtNum) {
            fisrtNum = num;
            $("#inputNum").val("");
            condition = 3;
        } else {
            secondNum = num;
            calculte();
            condition = 3;
        }
        input = ""
    })

    $("#divide").click(function () {
        var num = $("#inputNum").val();
        if (!fisrtNum) {
            fisrtNum = num;
            $("#inputNum").val("");
            condition = 4;
        } else {
            secondNum = num;
            calculte();
            condition = 4;
        }
        input = ""
    })

    $("#calculate").click(function () {
        var num = $("#inputNum").val();

        if (condition == 1) {
            result = parseFloat(fisrtNum) + parseFloat(num);
        }
        if (condition == 2) {
            result = parseFloat(fisrtNum) - parseFloat(num);
        }
        if (condition == 3) {
            result = parseFloat(fisrtNum) * parseFloat(num);
        }
        if (condition == 4) {
            result = parseFloat(fisrtNum) / parseFloat(num);
        }

        $("#inputNum").val(result);
    })

    $(".num").click(function () {
        if ($(this).val() == '.') {
            if (input.indexOf('.') > -1) {
                alert("You cannot add . more than one");
            }
        }
        input += $(this).val();
        $("#inputNum").val(input);
    })

    function calculte() {
        if (condition == 1) {
            var set = parseFloat(fisrtNum) + parseFloat(secondNum);
            fisrtNum = set;
            $("#inputNum").val(set);
        }
        if (condition == 2) {
            var set = parseFloat(fisrtNum) - parseFloat(secondNum);
            fisrtNum = set;
            $("#inputNum").val(set);
        }
        if (condition == 3) {
            var set = parseFloat(fisrtNum) * parseFloat(secondNum);
            fisrtNum = set;
            $("#inputNum").val(set);
        }
        if (condition == 4) {
            var set = parseFloat(fisrtNum) / parseFloat(secondNum);
            fisrtNum = set;
            $("#inputNum").val(set);
        }
    }


});
