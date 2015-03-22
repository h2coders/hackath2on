var ready;


ready = function() {
    var config = liquidFillGaugeDefaultSettings();
    config.circleThickness = 0.05;
    config.circleColor = "#FFF";
    config.textColor = "#FFF";
    config.waveTextColor = "#FFF";
    config.waveColor = "#FFF";
    config.textVertPosition = 0.8;
    config.waveAnimateTime = 1000;
    config.waveHeight = 0.05;
    config.waveAnimate = true;
    config.waveRise = false;
    config.waveOffset = 0.25;
    config.textSize = 0.75;
    config.waveCount = 3;
    loadLiquidFillGauge("total-saving-svg", 60.44, config);
} 

         

$(document).ready(ready);
