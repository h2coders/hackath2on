var ready = function() {

  var userData = [{"x": 30, "y": 40, "radius": 10},
              {"x": 70, "y": 70, "radius": 20},
              {"x": 130, "y": 20, "radius": 30},
              {"x": 160, "y": 120, "radius": 5},
              {"x": 190, "y": 90, "radius": 20},
              {"x": 210, "y": 200, "radius": 20},
              {"x": 230, "y": 300, "radius": 20},
              {"x": 260, "y": 25, "radius": 20},
              {"x": 290, "y": 70, "radius": 20},
              {"x": 300, "y": 70, "radius": 20},
              {"x": 350, "y": 70, "radius": 20},
              {"x": 220, "y": 70, "radius": 20}
              ]

  var margin = {top: 20, right:20, bottom:20, left:50};
  var width = $("#reward").parent().width(),
      height = 400;

  var svg = d3.select("#reward")
              .append("svg")
              .attr("height", height)
              .attr("width", width)
              .append("g")
              .attr("transform","translate(" + margin.left + "," + margin.top + ")");

  var xScale = d3.scale.linear()
                 .range([0, width - margin.left - margin.right]);
  
  var yScale = d3.scale.linear()
                 .range([0, height - margin.top - margin.bottom]);
 
  function render(){
    yScale.domain([0,3000]);
    xScale.domain([0,24]);
    var yAxis = d3.svg.axis()
        .scale(yScale).orient("left");

    var xAxis = d3.svg.axis()
        .scale(xScale).orient("bottom");

    if (svg.selectAll(".y.axis")[0].length < 1 ){
      svg.append("g")
         .attr("class",".y axis")
         .attr("fill", "white")
         .style({'stroke': 'white', 'fill': 'none', 'stroke-width': '1px'})
         .call(yAxis);

      svg.append("g")
         .attr("class", ".x.axis")
         .attr("transform", "translate(0," + (height-margin.top-margin.bottom) + ")")
         .attr("fill", "white")
         .style({'stroke': 'white', 'fill': 'none', 'stroke-width': '1px'})
         .call(xAxis);
    }
    var userCircles = svg.selectAll("circle").data(userData).enter().append("circle");
    userCircles.attr("cx", function (d) { return d.x/24 * 24; })
               .attr("cy", function (d) { return d.y; })
               .attr("r", function (d) { return d.radius; })
               .style("fill", "#7BC2E9");

  }
render();
}

// initial page render

// continuous page render\
$(document).ready(ready);
$(document).on('page:load', ready);
