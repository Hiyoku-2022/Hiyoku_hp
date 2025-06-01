$('#page-top').click(function () {
    $('body,html').animate({
        scrollTop: 0
    }, 500);
    return false;
});

$(".openbtn").click(function () {
	$(this).toggleClass('active');
    $("#g-nav").toggleClass('panelactive');
    $("#g-nav li").toggleClass('smooth');
});

$("#g-nav a").click(function () {
    $(".openbtn").removeClass('active');
    $("#g-nav").removeClass('panelactive');
    $("#g-nav li").removeClass('smooth');
});


$('#count-up-area').on('inview', function(event, isInView) {
	if (isInView) {
		$("#count-up-area .count-up").each(function(){
			$(this).prop('Counter',0).animate({
                Counter: $(this).text()
            }, {
                duration: 3000,
                easing: 'swing',
                step: function (now) {
                    $(this).text(Math.ceil(now));
                }
            });
		});
	}
});


Chart.plugins.register({
    afterDatasetsDraw: function (chart, easing) {
        var ctx = chart.ctx;

        chart.data.datasets.forEach(function (dataset, i) {
            var meta = chart.getDatasetMeta(i);
            if (!meta.hidden) {
                meta.data.forEach(function (element, index) {
                    ctx.fillStyle = 'rgb(0, 0, 0,0.8)';
                    var fontSize = 12;
                    var fontStyle = 'normal';
                    var fontFamily = 'Arial';
                    ctx.font = Chart.helpers.fontString(fontSize, fontStyle, fontFamily);
                    var dataString = dataset.data[index].toString();
					
                    ctx.textAlign = 'center';
                    ctx.textBaseline = 'middle';

                    var padding = 5;
                    var position = element.tooltipPosition();
                    ctx.fillText(dataString, position.x, position.y - (fontSize / 2) - padding);
		
                });
            }
        });
    }
});

$('#chart01').on('inview', function(event, isInView) {
if (isInView) {

var ctx=document.getElementById("chart01");
var chart=new Chart(ctx,{
type:'pie',
data:{
	labels:["20～25歳","25～30歳","30～35歳","40歳以上",],
	datasets:[{
			label:"社員の年齢層単位",
			backgroundColor:["#05c3c5","#059ac5", "#0576c5","#0556c5"],
			data:["40","30","20","10",]
		}]
},

options:{
	maintainAspectRatio: false,
	legend:{
		display:true
	},
	tooltips:{
		callbacks:{
        label: function (tooltipItem, data) {
			return data.labels[tooltipItem.index]+ ": "+ data.datasets[0].data[tooltipItem.index] + "%";//%繧呈怙蠕後↓縺､縺代ｋ
		}
    },		
	},
	title:{
		display: true,
		fontSize:14,
		text: '社員の年齢層%'
	},
}
});
        
}
});

// $('#chart02').on('inview', function(event, isInView) {
// if (isInView) {

// var ctx02=document.getElementById("chart02");
// ctx02.height = 300;
// var chart02=new Chart(ctx02,{
// type:'bar',
// data:{
// 	labels:["莉､蜥�3蟷ｴ蠎ｦ","莉､蜥�4蟷ｴ蠎ｦ","莉､蜥�5蟷ｴ蠎ｦ",],
// 	datasets:[{
// 			label:"譁ｽ險ｭ隕句ｭｦ閠�焚",
// 			backgroundColor:"#00b7b8",
// 			data:["2808","1476","1713",]
// 		}]
// },
// options:{
// 	maintainAspectRatio: false,
// 	legend:{
// 		display: false
// 	},
// 	tooltips:{
// 		callbacks:{
//         label: function(tooltipItems, data) {
//             if(tooltipItems.yLabel == "0"){
//                 return "";
//             }
//             return data.datasets[tooltipItems.datasetIndex].label + "��" + tooltipItems.yLabel + "莠ｺ";//莠ｺ繧呈怙蠕後↓縺､縺代ｋ
//         }
//     }
// 	},
// title:{
// 		display: true,
// 		fontSize:14,
// 		text: '譁ｽ險ｭ隕句ｭｦ謨ｰ縲蜊倅ｽ搾ｼ壻ｺｺ'
// 	},
// scales:{
// 		yAxes:[
// 			{
// 				ticks:{
// 					beginAtZero:true,
// 					suggestedMax: 1000,
// 					suggestedMin: 0,
// 					stepSize: 500,
// 					callback: function(value){
// 						return  value +  '莠ｺ'				
// 				}
// 			}
// 		}
// 	],
// 		xAxes:[
// 			{
// 				barPercentage:0.5,
// 			}
// 		]
// 	}
// }
// });
    
// }
// });   
  

var Obj = {
	loop: false,
	minDisplayTime: 2000,
	initialDelay:100,
	autoStart: true,
	in: {
		effect: 'fadeInUp',
		delayScale: 1,
		delay: 100,
		sync: false,
		shuffle: true,
	},
	out: {
	}
}
var element
function RandomInit() {
	element= $(".randomAnime");
	$(element[0]).textillate(Obj);
}

function RandomAnimeControl() {
		var elemPos = $(element[1]).offset().top - 50;
		var scroll = $(window).scrollTop();
		var windowHeight = $(window).height();

		if (scroll >= elemPos - windowHeight) {
			$(element[1]).textillate(Obj);
		}
}


particlesJS("particles-js",{
	"particles":{
		"number":{
			"value":38,
			"density":{
				"enable":true,
				"value_area":800
			}
		},
		"color":{
			"value":"#11a0ad"
		},
		"shape":{
			"type":"polygon",
			"stroke":{
				"width":0,
			},
	"polygon":{
		"nb_sides":3
	},
	"image":{
		"width":190,
		"height":100
	}
	},
		"opacity":{
		"value":0.664994832269074,
		"random":false,
		"anim":{
			"enable":true,
			"speed":2.2722661797524872,
			"opacity_min":0.08115236356258881,
			"sync":false
		}
		},
		"size":{
			"value":3,
			"random":true,
			"anim":{
				"enable":false,
				"speed":40,
				"size_min":0.1,
				"sync":false
			}
		},
		"line_linked":{
			"enable":true,
			"distance":150,
			"color":"#11a0ad",
			"opacity":0.6,
			"width":1
		},
		"move":{
			"enable":true,
			"speed":6,
			"direction":"none",
			"random":false,
			"straight":false,
			"out_mode":"out",
			"bounce":false,
			"attract":{
				"enable":false,
				"rotateX":600,
				"rotateY":961.4383117143238
			}
		}
	},
	"interactivity":{
		"detect_on":"canvas",
		"events":{
			"onhover":{
				"enable":false,
				"mode":"repulse"
			},
	"onclick":{
		"enable":false
	},
	"resize":true
		}
	},
	"retina_detect":true
});


function fadeAnime(){
    $('.fadeDownTrigger').each(function(){
		var elemPos = $(this).offset().top-50;
		var scroll = $(window).scrollTop();
		var windowHeight = $(window).height();
		if (scroll >= elemPos - windowHeight){
		$(this).addClass('fadeDown');
		}else{
		$(this).removeClass('fadeDown');
		}
		});
    
	$('.smoothTrigger').each(function(){
		var elemPos = $(this).offset().top-50;
		var scroll = $(window).scrollTop();
		var windowHeight = $(window).height();
		if (scroll >= elemPos - windowHeight){
		$(this).addClass('smooth');
		}else{
		$(this).removeClass('smooth');
		}
		});	
	
}

var unit = 100,
    canvasList,
    info = {},
    colorList;

/**
 * Init function.
 * 
 * Initialize variables and begin the animation.
 */
function init() {
    info.seconds = 0;
    info.t = 0;
		canvasList = [];
    colorList = [];
    canvasList.push(document.getElementById("waveCanvas"));
    colorList.push(['#11a0ad', '#11a0ad']);
for(var canvasIndex in canvasList) {
        var canvas = canvasList[canvasIndex];
        canvas.width = document.documentElement.clientWidth;
        canvas.height = 200;
        canvas.contextCache = canvas.getContext("2d");
    }
		update();
}

function update() {
		for(var canvasIndex in canvasList) {
        var canvas = canvasList[canvasIndex];
        draw(canvas, colorList[canvasIndex]);
    }
    info.seconds = info.seconds + .014;
    info.t = info.seconds*Math.PI;
    setTimeout(update, 35);
}

/**
 * Draw animation function.
 * 
 * This function draws one frame of the animation, waits 20ms, and then calls
 * itself again.
 */
function draw(canvas, color) {
    var context = canvas.contextCache;
    context.clearRect(0, 0, canvas.width, canvas.height);

    drawWave(canvas, color[0], 0.5, 3, 0);
    drawWave(canvas, color[1], 0.4, 2, 250);
//    drawWave(canvas, color[2], 0.2, 1.6, 100);
}

function drawWave(canvas, color, alpha, zoom, delay) {
		var context = canvas.contextCache;
    context.fillStyle = color;
    context.globalAlpha = alpha;
    context.beginPath();
    drawSine(canvas, info.t / 0.5, zoom, delay);
    context.lineTo(canvas.width + 10, canvas.height);
    context.lineTo(0, canvas.height);
    context.closePath()
    context.fill();
}

/**
 * Function to draw sine
 * 
 * The sine curve is drawn in 10px segments starting at the origin. 
 */
function drawSine(canvas, t, zoom, delay) {
    var xAxis = Math.floor(canvas.height/2);
    var yAxis = 0;
    var context = canvas.contextCache;
    // Set the initial x and y, starting at 0,0 and translating to the origin on
    // the canvas.
    var x = t;
    var y = Math.sin(x)/zoom;
    context.moveTo(yAxis, unit*y+xAxis);

    // Loop to draw segments
    for (i = yAxis; i <= canvas.width + 10; i += 10) {
        x = t+(-yAxis+i)/unit/zoom;
        y = Math.sin(x - delay)/3;
        context.lineTo(i, unit*y+xAxis);
    }
}

init();

$(window).scroll(function (){
    fadeAnime();
	RandomAnimeControl();
});

$(window).on('load', function () {
    
var bar = new ProgressBar.Line(splash_text, {
	easing: 'easeInOut',
	duration: 1000,
	strokeWidth: 0.2,
	color: '#00b7b8',
	trailWidth: 0.2,
	trailColor: '#ccc',
	text: {	
		style: {
			position: 'absolute',
			left: '50%',
			top: '50%',
			padding: '0',
			margin: '-30px 0 0 0',
			transform:'translate(-50%,-50%)',
			'font-size':'1rem',
			color: '#00b7b8',
		},
		autoStyleContainer: false
	},
	step: function(state, bar) {
		bar.setText(Math.round(bar.value() * 100) + ' %');
	}
});

bar.animate(1.0, function () {
	
    $("#splash").delay(500).fadeOut(800,function(){
    
	$('body').addClass('appear');
        
    fadeAnime();
	RandomInit();
	RandomAnimeControl();
    }); 
    
});   
    
});
