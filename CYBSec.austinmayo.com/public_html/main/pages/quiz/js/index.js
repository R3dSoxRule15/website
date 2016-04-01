
$(document).ready(function() {
start(questionNumber);

$(".submit-answer").on("click", function(event) {

    var userAnswer = parseInt($(this).attr("id"));
    answerCheck(userAnswer);

    setTimeout(function() {
                $(".submit-answer").removeClass("correctStyle incorrectStyle");
                 start(questionNumber);
             }, 1500)

     questionNumber++;
  });

});

var questionNumber = 0,
    totalCorrect = 0,
    optionFinal = 0;

var allQuestions = [
     {
        question: 'What would be the most personal information a hacker could obtain from you?',
        choices: ["Your Name", "Your Birthday", "Your Social Security Number", "The Name of Your Mother"],
        answer: 2}
    ,{
        question: "On social media who do you want to see your pictures and updates?",
        choices: ["Only people you know", "Random Person", "Everyone", "Your neighbor"],
        answer: 0}
    ,{
        question: "What should you do in the event of a privacy breach?",
        choices: ["Panic", "Let a parent know", "Delete all files", "Pull the power plug"],
        answer: 1}
    ,{
        question: "Which is the best password to use that is harder to crack?",
        choices: ["12345678", "password123", "1mth34n5w3r", "toor"],
        answer: 2}
    ,{
        question: "An ad says 'CLICK ME YOU'RE THE WINNER' what should you do?",
        choices: ["Click it.", "Ignore It.", "Leave the Website.", "Uninstall Chrome."],
        answer: 1}
    ,{
        question: "Which of these do hackers NOT have access to?",
        choices: ["IP.", "Your Toaster.", "Your root files.", "Location."],
        answer: 1}
    ,{
        question: "What is the type of attack where the hacker pretends to be someone else?",
        choices: ["DDoS.", "Phishing.", "Trojan Horse.", "Cat-fishing."],
        answer: 1}
    ,{
        question: "Which of these files sounds most likely to be a virus?",
        choices: ["'myfile.rar'", "'myfile.zip'", "'myfile.jpg.exe'", "'myfiles.jpg'"],
        answer: 2}
    ,{
        question: "If an unknown file ask's for admin access what should you do?",
		choices: ["Turn the Computer Off.", "Allow it to access your PC.", "Hit Cancel.", "Click Accept and Install."],
        answer: 2}
    ,{
        question: "Which of these devices cannot store personal information?",
        choices: ["iPod Nano.", "Ubuntu System.", "iPhone.", "Android."],
        answer: 0}
  ];

var result = [
     {
      comment: " Wowzers!"}
    ,{
      comment:  " Not bad."}
    ,{
      comment: " Meh."}
    ,{
      comment: " Well done."}
    ];

/*$('#story').typed({
  strings: [],
  typeSpeed: 20,
  backDelay: 500,
  loop: false,
  loopCount: false,
            });
            */
//var anim = {};
//
//anim.init = function() {
//  anim.canvas = document.getElementById("can");
//  anim.context = anim.canvas.getContext("2d");
//  anim.frame = 0;
//  anim.canvas.width  = window.innerWidth;
//  anim.canvas.height = window.innerHeight;
//  anim.text = [""];
//  anim.doFrame();
//}
//anim.doFrame = function() {
//	anim.context.fillStyle = "#000";
//	anim.context.fillRect(0,0,anim.canvas.width,anim.canvas.height);
//	anim.context.fillStyle = "#19ff00";
//	anim.context.font = "28px Hack";
//	for (var i=0;i<anim.text.length;i++) {
//		anim.context.fillText(anim.text[i], 20, 30 + (i * 32));
//	}
//	if (anim.frame%3 == 0) {
//		anim.text[anim.text.length - 1] += Math.floor(Math.random() * 16).toString(16);
//		if (anim.context.measureText(anim.text[anim.text.length - 1]).width > anim.canvas.width - 40) {
//			anim.text.push("");
//		}
//		if (30 + (32 * anim.text.length - 1) >= anim.canvas.height - 20) {
//			anim.text.shift();
//		}
//	}
//	
//	anim.frame++;
//	window.requestAnimationFrame(anim.doFrame);
//}
//anim.resize = function() {
//	anim.canvas.width  = window.innerWidth;
//	anim.canvas.height = window.innerHeight;
//}

// continue with next question or end
var start = function(questionNumber) {
      $('h2').hide().fadeIn(400);
	  $('h3').hide().fadeIn(400);

      if(questionNumber !== allQuestions.length){
          question(questionNumber);
      }else{
          end();
      }
};

// show question and possible answers
function question(questionNum) {
      $("h2").text(allQuestions[questionNum].question);

      $.each(allQuestions[questionNum].choices, function(i, answers){
         $("#" + i).html(answers);
      });
};

function end() {
  finalImage();
  $("ul").hide();
  $("h2").text("You scored " + totalCorrect + " out of " + allQuestions.length + ".");
  $("#try-again-container").show();
  $("#homep").show();
  $("h3").text(result[optionFinal].comment).show();
  restart();
};

// result image accourding to correct answers
function finalImage() {
  if(totalCorrect < allQuestions.length && totalCorrect >= (allQuestions.length*.7)){
            optionFinal = 1;
    }else if(totalCorrect <= (allQuestions.length*.6) && totalCorrect >= (allQuestions.length*.2)){
          optionFinal = 2;
    }else if(totalCorrect !== allQuestions.length){
          optionFinal = 3;
    }
}

function restart(){
  $("#try-again").click(function(){
    questionNumber = 0,
    totalCorrect = 0,
    optionFinal = 0;

    start(questionNumber);
    $("#image").hide();
    $("#try-again-container").hide();
    $("#homep").hide();
	$('h3').hide();
    $("ul").fadeIn(400);
  });
} 

function sendHome(){
    $("#homep").click(function(){
        location.href = "/Users/casper/Dropbox/CYBSEC/index";
    })
}

function answerCheck(userAnswer) {
     var correctAnswer = allQuestions[questionNumber].answer;

     if (userAnswer === correctAnswer) {
         $("#" + userAnswer).addClass("correctStyle");
         totalCorrect++;
     }else{
        $("#" + userAnswer).addClass("incorrectStyle");
     }
};

// set typing speed and wait times
var timeInit = 5000;     // initial wait before typing first line
var timeGap = 3000;      // wait time between each line
var timeChar = 70;       // time until next letter

var cursorChar = '&#9608;';

var originId = ['line1', 'line2','line3', 'line4', 'line5', 'line6', 'line7', 'line8', 'line9', 'line10', 'line11', 'line12', 'line13', 'line14', 'line15', 'line16'];
var originText = new Array();
for (var i = 0; i < originId.length; i++) {
  originText.push(document.getElementById(originId[i]).innerHTML);
}

//var cursorLine = document.getElementById('cursor-line');
//
//var currentTimeout;
//var showCursor;
//
//var typeWriter = function(index) {
//  var loc = document.getElementById(originId[index]);
//  var fullText = originText[index];
//  var letterCount = 0;
//
//  // this function spits out one letter per call, then calls the subsequent typeLetter()
//  var typeLetter = function() {
//    currentTimeout = setTimeout(function() {
//      loc.className = 'visible';
//      letterCount += 1;
//      var showText = fullText.substring(0, letterCount);
//
//      // stops the function from self-calling when all letters are typed
//      if (letterCount === fullText.length) {
//        loc.innerHTML = '&gt;&gt; ' + showText;
//      } else {
//        loc.innerHTML = '&gt;&gt; ' + showText + '<span class="typed-cursor">' + cursorChar + '</span>';
//        typeLetter();
//      }
//    }, timeChar);
//  };
//
//  typeLetter();
//
//  // show cursor on next line
//  var totalTime = fullText.length * timeChar + timeChar;
//  showCursor = setTimeout(function() {
//    document.getElementById('cursor-line').className = 'visible';
//  }, totalTime);
//};
//
//// calculated time delays
//var delayTime = [timeInit];
//var cumulativeDelayTime = [timeInit];
//for (var i = 0; i < originId.length; i++) {
//  var elapsedTimeLine = originText[i].length * timeChar + timeGap + timeChar * 2;
//  delayTime.push(elapsedTimeLine);
//  var sum = 0;
//  for (var j = 0; j < delayTime.length; j++) {
//    sum += delayTime[j];
//  };
//  cumulativeDelayTime.push(sum);
//};
//
//// calls setTimeout for each line
//var typeLineTimeout = new Array();
//for (var i = 0; i < originId.length; i++) {
//  typeLineTimeout[i] = setTimeout((function(index) {
//    return function() {
//      cursorLine.className = 'hidden';
//      typeWriter(index);
//    }
//  })(i), cumulativeDelayTime[i]);
//
//};
//
//// stops all timeouts
//var skip = function() {
//  clearTimeout(currentTimeout);
//  clearTimeout(showCursor);
//  for (var i = 0; i < typeLineTimeout.length; i++) {
//    clearTimeout(typeLineTimeout[i]);
//  };
//};
//
//// rewrite text with value stored on page load
//
//// var rewriteText = function(index) {
////   var loc = document.getElementById(originId[index]);
////   loc.innerHTML = '&gt;&gt; ' + originText[index];
////   loc.className = 'visible';
//// };
//
//var rewriteText = function(element, index, array) {
//  var loc = document.getElementById(element);
//  loc.innerHTML = '&gt;&gt; ' + originText[index];
//  loc.className = 'visible';
//};
//
//
//// trigger skip and rewrite on pressing enter or spacebar
//window.onkeydown = function(key){
//  if (key.which === 13 || key.which === 32) {
//    skip();
//    originId.forEach(rewriteText);
//    document.getElementById('cursor-line').className = 'visible';
//  }
//};
