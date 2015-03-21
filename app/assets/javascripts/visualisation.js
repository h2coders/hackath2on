var ready;


ready = function() {

var width = 500,
    height = 300-37;

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
      .range([height - margin.top - margin.bottom,0]);

var line = d3.svg.line().interpolate("monotone")
  .x(function(d){ return xScale(d.time); })
  .y(function(d){ return yScale(d.usage); });

// create random data
function newData(numberOfLines, numberOfPoints){
  return d3.range(numberOfLines).map(function(){
    return d3.range(numberOfPoints).map(function(item,idx){
      return {time:idx/(numberOfPoints-1),usage:Math.random()*100};
    });
  });
}

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


 var data = newData(1,10);

 // console.log(data);
  // set domain for axis
  yScale.domain([0,100]);

  // create axis scale
  var yAxis = d3.svg.axis()
      .scale(yScale).orient("left");


  // if no axis exists, create one, otherwise update it
  if (svg.selectAll(".y.axis")[0].length < 1 ){
    svg.append("g")
        .attr("class","y axis")
        .call(yAxis);
  } else {
    svg.selectAll(".y.axis").transition().duration(1500).call(yAxis);
  }

  // generate line paths
  var lines = svg.selectAll(".line").data(data).attr("class","line");

  var point = lines.append("g")
                .attr("class","point");



  // transition from previous paths to new paths
  lines.transition().duration(5000)
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
setInterval(render, 1500);

} 

         

$(document).ready(ready);
$(document).on('page:load', ready);
