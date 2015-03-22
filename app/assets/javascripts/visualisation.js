var ready;


ready = function() {

// var width = 380,
//     height = 300-50;

var width = $("#system").parent().width(),
      height = 250;

var margin = {top: 20, right:20, bottom:20, left:50};

// draw and append the container
var svg = d3.select("#system").append("svg")
    .attr("height", height)
    .attr("width", width)
    .append("g")
      .attr("transform","translate(" + margin.left + "," + margin.right + ")");

var xScale = d3.scale.linear()
      .range([0,width - margin.left - margin.right]);

var yScale = d3.scale.linear()
      .range([height - margin.top - margin.bottom, 0]);

var line = d3.svg.line().interpolate("monotone")
  .x(function(d){ return xScale(d.time); })
  .y(function(d){ return yScale(d.usage); });



function retrieveData(hour, minutes, seconds){
  var time = hour*3600 + minutes*60 + seconds;
      var totalConsumtion = 0;
      if(time<=3600){
        totalConsumtion = 400 + Math.floor(Math.random()*350);
      }else if(time>3600 && time<=7200){
        totalConsumtion = 600 + Math.floor(Math.random()*350);
      }else if(time>7200 && time<=10800){
        totalConsumtion = 700 + Math.floor(Math.random()*350);
      }else if(time>10800 && time<=14400){
        totalConsumtion = 950 + Math.floor(Math.random()*350);
      }else if(time>14400 && time<=18000){
        totalConsumtion = 1300 + Math.floor(Math.random()*350);
      }else if(time>18000 && time<=21600){
        totalConsumtion = 1700 + Math.floor(Math.random()*350);
      }else if(time>21600 && time<=25200){
        totalConsumtion = 1900 + Math.floor(Math.random()*350);
      }else if(time>25200 && time<=28800){
        totalConsumtion = 2900 + Math.floor(Math.random()*350);
      }else if(time>28800 && time<=32400){
        totalConsumtion = 2500 + Math.floor(Math.random()*350);
      }else if(time>32400 && time<=36000){
        totalConsumtion = 2100 + Math.floor(Math.random()*350);
      }else if(time>36000 && time<=39600){
        totalConsumtion = 1800 + Math.floor(Math.random()*350);
      }else if(time>39600 && time<=43200){
        totalConsumtion = 1300 + Math.floor(Math.random()*350);
      }else if(time>43200 && time<=46800){
        totalConsumtion = 1200 + Math.floor(Math.random()*350);
      }else if(time>46800 && time<=50400){
        totalConsumtion = 1800 + Math.floor(Math.random()*350);
      }else if(time>50400 && time<=54000){
        totalConsumtion = 1300 + Math.floor(Math.random()*350);
      }else if(time>54000 && time<=57600){
        totalConsumtion = 1200 + Math.floor(Math.random()*350);
      }else if(time>57600 && time<=61200){
        totalConsumtion = 1100 + Math.floor(Math.random()*350);
      }else if(time>61200 && time<=64800){
        totalConsumtion = 1000 + Math.floor(Math.random()*350);
      }else if(time>64800 && time<=68400){
        totalConsumtion = 1100 + Math.floor(Math.random()*350);
      }else if(time>68400 && time<=72000){
        totalConsumtion = 1000 + Math.floor(Math.random()*350);
      }else if(time>72000 && time<=75600){
        totalConsumtion = 900 + Math.floor(Math.random()*350);
      }else if(time>75600 && time<=79200){
        totalConsumtion = 700 + Math.floor(Math.random()*350);
      }else if(time>79200 && time<=82800){
        totalConsumtion = 400 + Math.floor(Math.random()*350);
      };
    return totalConsumtion
}


// create random data
function newData(numberOfLines, numberOfPoints, hour, minutes, seconds){
  return d3.range(numberOfLines).map(function(){
    return d3.range(numberOfPoints).map(function(item, number, hour, minutes, seconds){
      var time = hour*3600 + minutes*60 + seconds;

      var totalConsumtion = 0;
      if(time<=3600){
        totalConsumtion = 400 + Math.floor(Math.random()*350);
      }else if(time>3600 && time<=7200){
        totalConsumtion = 600 + Math.floor(Math.random()*350);
      }else if(time>7200 && time<=10800){
        totalConsumtion = 700 + Math.floor(Math.random()*350);
      }else if(time>10800 && time<=14400){
        totalConsumtion = 950 + Math.floor(Math.random()*350);
      }else if(time>14400 && time<=18000){
        totalConsumtion = 1300 + Math.floor(Math.random()*350);
      }else if(time>18000 && time<=21600){
        totalConsumtion = 1700 + Math.floor(Math.random()*350);
      }else if(time>21600 && time<=25200){
        totalConsumtion = 1900 + Math.floor(Math.random()*350);
      }else if(time>25200 && time<=28800){
        totalConsumtion = 2900 + Math.floor(Math.random()*350);
      }else if(time>28800 && time<=32400){
        totalConsumtion = 2500 + Math.floor(Math.random()*350);
      }else if(time>32400 && time<=36000){
        totalConsumtion = 2100 + Math.floor(Math.random()*350);
      }else if(time>36000 && time<=39600){
        totalConsumtion = 1800 + Math.floor(Math.random()*350);
      }else if(time>39600 && time<=43200){
        totalConsumtion = 1300 + Math.floor(Math.random()*350);
      }else if(time>43200 && time<=46800){
        totalConsumtion = 1200 + Math.floor(Math.random()*350);
      }else if(time>46800 && time<=50400){
        totalConsumtion = 1800 + Math.floor(Math.random()*350);
      }else if(time>50400 && time<=54000){
        totalConsumtion = 1300 + Math.floor(Math.random()*350);
      }else if(time>54000 && time<=57600){
        totalConsumtion = 1200 + Math.floor(Math.random()*350);
      }else if(time>57600 && time<=61200){
        totalConsumtion = 1100 + Math.floor(Math.random()*350);
      }else if(time>61200 && time<=64800){
        totalConsumtion = 1000 + Math.floor(Math.random()*350);
      }else if(time>64800 && time<=68400){
        totalConsumtion = 1100 + Math.floor(Math.random()*350);
      }else if(time>68400 && time<=72000){
        totalConsumtion = 1000 + Math.floor(Math.random()*350);
      }else if(time>72000 && time<=75600){
        totalConsumtion = 900 + Math.floor(Math.random()*350);
      }else if(time>75600 && time<=79200){
        totalConsumtion = 700 + Math.floor(Math.random()*350);
      }else if(time>79200 && time<=82800){
        totalConsumtion = 400 + Math.floor(Math.random()*350);
      }

      return {time: (parseFloat(time)/3600 + hour),usage: totalConsumtion};
    });
  });
}

var currentHour = new Date().getHours();
var currentMinute = new Date().getMinutes();
var currentSecond = new Date().getSeconds();
// console.log(retrieveData(42100))
var data = [];
for(var i=0; i<currentMinute; i++){
  time = currentHour + parseFloat(i)/60
  data[i] = {
  time: time,
  usage: (retrieveData(currentHour, currentMinute, currentSecond) - 1500)
  };
}
data = [data]

// var data = 
//  [
//   [
//     {
//       "time": 0,
//       "usage": 99.0092993946746
//     },
//     {
//       "time": 0.5,
//       "usage": 40.64327261876315
//     },
//     {
//       "time": 1,
//       "usage": 98.616778338328
//     }
//   ]
// ];

function render(){
  var currentHour = new Date().getHours();
  var currentMinute = new Date().getMinutes();
  var currentSecond = new Date().getSeconds();
  time = currentHour + parseFloat(currentMinute)/60 + parseFloat(currentSecond) / 3600
  data[0] << {
    time: time,
    usage: retrieveData(currentHour, currentMinute, currentSecond)
  };
  // set domain for axis
  firstHour = new Date().getHours();
  secondHour = new Date().getHours() + 1;
  yScale.domain([0,3000]);
  xScale.domain([firstHour, secondHour])
  // create axis scale
  svg.selectAll('.axis line, .axis path')
     .style({'stroke': 'white', 'fill': 'none', 'stroke-width': '1px'});

  svg.append("text")      // text label for the x axis
        .attr("x", 30 )
        .attr("y", 0 )
        .style("text-anchor", "middle")
        .html("m&sup3;"+"/hour");

  svg.append("text")      // text label for the x axis
        .attr("x", 350 )
        .attr("y", 200 )
        .style("text-anchor", "middle")
        .html("hour");

  var yAxis = d3.svg.axis()
      .scale(yScale).orient("left");

  var xAxis = d3.svg.axis()
      .scale(xScale).orient("bottom");


  // if no axis exists, create one, otherwise update it
  if (svg.selectAll(".y.axis")[0].length < 1 ){
    svg.append("g")
        .attr("class","y axis")
        .attr("fill", "white")
        .attr("stroke-width", "3px")
        .call(yAxis);
    svg.append("g")
       .attr("class", "x axis")
       .attr("fill", "white")
       .attr("stroke-width", "3px")
       .attr("transform", "translate(0," + (height-margin.top-margin.bottom) + ")")
       .call(xAxis);
  } else {
    svg.selectAll(".y.axis").attr("fill", "white").attr("stroke-width", "3px").transition().duration(1000).call(yAxis);
  }

  // generate line paths
  var lines = svg.selectAll(".line").data(data).attr("class","line");

  var point = lines.append("g")
                .attr("class","point");



  // transition from previous paths to new paths
  lines.transition().duration(1000)
    .attr("d",line)
    .style("stroke", "white");
    
  // enter any new data
  lines.enter()
    .append("path")
    .attr("class","line")
    .attr("d",line)
    .style("stroke", "white");

  // console.log(lines.data());

  // exit
  lines.exit()
    .remove();
}
   


// initial page render
render();

// continuous page render
setInterval(render, 1000);

} 

         

$(document).ready(ready);
$(document).on('page:load', ready);
