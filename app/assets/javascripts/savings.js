var ready;


ready = function() {
    var config = liquidFillGaugeDefaultSettings();
    config.circleThickness = 0.05;
    config.circleColor = "#FFF";
    config.textColor = "#444";
    config.waveTextColor = "#444";
    config.waveColor = "#FFF";
    config.textVertPosition = 0.8;
    config.waveAnimateTime = 1000;
    config.waveHeight = 0.05;
    config.waveAnimate = true;
    config.waveRise = true;
    config.waveOffset = 0.25;
    config.textSize = 0.75;
    config.waveCount = 3;
    loadLiquidFillGauge("total-saving-svg", 80.44, config);

    $(".total-saving").click(function(){
        $("#total-saving-svg").empty();
        var config = liquidFillGaugeDefaultSettings();
        config.circleThickness = 0.05;
        config.circleColor = "#FFF";
        config.textColor = "#444";
        config.waveTextColor = "#444";
        config.waveColor = "#FFF";
        config.textVertPosition = 0.8;
        config.waveAnimateTime = 1000;
        config.waveHeight = 0.05;
        config.waveAnimate = true;
        config.waveRise = true;
        config.waveOffset = 0.25;
        config.textSize = 0.75;
        config.waveCount = 3;
        loadLiquidFillGauge("total-saving-svg", 50.44, config);
        setTimeout(function(){
            alert("You overpassed your limit! Watch out!")
        }, 1000);
    });
} 

         

$(document).ready(ready);
