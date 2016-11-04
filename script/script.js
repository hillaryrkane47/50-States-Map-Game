$(document).ready(function() {

var statesArr = [
  {
    name : "Alabama",
    abbrv : ".AL",
    ansR : "Yee Yee!",
    ansW : "Nope, sorry dood."
  },
  {
    name : "Alaska",
    abbrv : ".AK",
    ansR : "Yee Yee!",
    ansW : "Nope, sorry dood."
  },
  {
    name : "Arizona",
    abbrv : ".AZ",
    ansR : "Yee Yee!",
    ansW : "Nope, sorry dood."
  },
  {
    name : "Arkansas",
    abbrv : ".AR",
    ansR : "Yee Yee!",
    ansW : "Nope, sorry dood."
  },
  {
    name : "California",
    abbrv : ".CA",
    ansR : "Yee Yee!",
    ansW : "Nope, sorry dood."
  },
  {
    name : "Colorado",
    abbrv : ".CO",
    ansR : "Yee Yee!",
    ansW : "Nope, sorry dood."
  },
  {
    name : "Connecticut",
    abbrv : ".CT",
    ansR : "Yee Yee!",
    ansW : "Nope, sorry dood."
  },
  {
    name : "Delaware",
    abbrv : ".DE",
    ansR : "Yee Yee!",
    ansW : "Nope, sorry dood."
  },
  {
    name : "District of Columbia",
    abbrv : ".DC",
    ansR : "Yee Yee!",
    ansW : "Nope, sorry dood."
  },
  {
    name : "Florida",
    abbrv : ".FL",
    ansR : "Yee Yee!",
    ansW : "Nope, sorry dood."
  },
  {
    name : "Georgia",
    abbrv : ".GA",
    ansR : "Yee Yee!",
    ansW : "Nope, sorry dood."
  },
  {
    name : "Hawaii",
    abbrv : ".HI",
    ansR : "Yee Yee!",
    ansW : "Nope, sorry dood."
  },
  {
    name : "Idaho",
    abbrv : ".ID",
    ansR : "Yee Yee!",
    ansW : "Nope, sorry dood."
  },
  {
    name : "Illinois",
    abbrv : ".IL",
    ansR : "Yee Yee!",
    ansW : "Nope, sorry dood."
  },
  {
    name : "Indiana",
    abbrv : ".IN",
    ansR : "Yee Yee!",
    ansW : "Nope, sorry dood."
  },
  {
    name : "Iowa",
    abbrv : ".IA",
    ansR : "Yee Yee!",
    ansW : "Nope, sorry dood."
  },
  {
    name : "Kansas",
    abbrv : ".KS",
    ansR : "Yee Yee!",
    ansW : "Nope, sorry dood."
  },
  {
    name : "Kentucky",
    abbrv : ".KY",
    ansR : "Yee Yee!",
    ansW : "Nope, sorry dood."
  },
  {
    name : "Louisiana",
    abbrv : ".LA",
    ansR : "Yee Yee!",
    ansW : "Nope, sorry dood."
  },
  {
    name : "Maine",
    abbrv : ".ME",
    ansR : "Yee Yee!",
    ansW : "Nope, sorry dood."
  },
  {
    name : "Maryland",
    abbrv : ".MD",
    ansR : "Yee Yee!",
    ansW : "Nope, sorry dood."
  },
  {
    name : "Massachusetts",
    abbrv : ".MA",
    ansR : "Yee Yee!",
    ansW : "Nope, sorry dood."
  },
  {
    name : "Michigan",
    abbrv : ".MI",
    ansR : "Yee Yee!",
    ansW : "Nope, sorry dood."
  },
  {
    name : "Minnesota",
    abbrv : ".MN",
    ansR : "Yee Yee!",
    ansW : "Nope, sorry dood."
  },
  {
    name : "Mississippi",
    abbrv : ".MS",
    ansR : "Yee Yee!",
    ansW : "Nope, sorry dood."
  },
  {
    name : "Missouri",
    abbrv : ".MO",
    ansR : "Yee Yee!",
    ansW : "Nope, sorry dood."
  },
  {
    name : "Montana",
    abbrv : ".MT",
    ansR : "Yee Yee!",
    ansW : "Nope, sorry dood."
  },
  {
    name : "Nebraska",
    abbrv : ".NE",
    ansR : "Yee Yee!",
    ansW : "Nope, sorry dood."
  },
  {
    name : "Nevada",
    abbrv : ".NV",
    ansR : "Yee Yee!",
    ansW : "Nope, sorry dood."
  },
  {
    name : "New Hampshire",
    abbrv : ".NH",
    ansR : "Yee Yee!",
    ansW : "Nope, sorry dood."
  },
  {
    name : "New Jersey",
    abbrv : ".NJ",
    ansR : "Yee Yee!",
    ansW : "Nope, sorry dood."
  },
  {
    name : "New Mexico",
    abbrv : ".NM",
    ansR : "Yee Yee!",
    ansW : "Nope, sorry dood."
  },
  {
    name : "New York",
    abbrv : ".NY",
    ansR : "Yee Yee!",
    ansW : "Nope, sorry dood."
  },
  {
    name : "North Carolina",
    abbrv : ".NC",
    ansR : "Yee Yee!",
    ansW : "Nope, sorry dood."
  },
  {
    name : "North Dakota",
    abbrv : ".ND",
    ansR : "Yee Yee!",
    ansW : "Nope, sorry dood."
  },
  {
    name : "Ohio",
    abbrv : ".OH",
    ansR : "Yee Yee!",
    ansW : "Nope, sorry dood."
  },
  {
    name : "Oklahoma",
    abbrv : ".OR",
    ansR : "Yee Yee!",
    ansW : "Nope, sorry dood."
  },
  {
    name : "Pennsylvania",
    abbrv : ".PA",
    ansR : "Yee Yee!",
    ansW : "Nope, sorry dood."
  },
  {
    name : "Rhode Island",
    abbrv : ".RI",
    ansR : "Yee Yee!",
    ansW : "Nope, sorry dood."
  },
  {
    name : "South Carolina",
    abbrv : ".SC",
    ansR : "Yee Yee!",
    ansW : "Nope, sorry dood."
  },
  {
    name : "South Dakota",
    abbrv : ".SD",
    ansR : "Yee Yee!",
    ansW : "Nope, sorry dood."
  },
  {
    name : "Tennessee",
    abbrv : ".TN",
    ansR : "Yee Yee!",
    ansW : "Nope, sorry dood."
  },
  {
    name : "Texas",
    abbrv : ".TX",
    ansR : "Yee Yee!",
    ansW : "Nope, sorry dood."
  },
  {
    name : "Utah",
    abbrv : ".UT",
    ansR : "Yee Yee!",
    ansW : "Nope, sorry dood."
  },
  {
    name : "Vermont",
    abbrv : ".VT",
    ansR : "Yee Yee!",
    ansW : "Nope, sorry dood."
  },
  {
    name : "Virginia",
    abbrv : ".VA",
    ansR : "Yee Yee!",
    ansW : "Nope, sorry dood."
  },
  {
    name : "Washington",
    abbrv : ".WA",
    ansR : "Yee Yee!",
    ansW : "Nope, sorry dood."
  },
  {
    name : "West Virginia",
    abbrv : ".WV",
    ansR : "Yee Yee!",
    ansW : "Nope, sorry dood."
  },
  {
    name : "Wisconsin",
    abbrv : ".WI",
    ansR : "Yee Yee!",
    ansW : "Nope, sorry dood."
  },
  {
    name : "Wyoming",
    abbrv : ".WY",
    ansR : "Yee Yee!",
    ansW : "Nope, sorry dood."
  },
];


var questions = {
  questionA: 'Where is Alaska?',
  questionB: 'Where is Alaska?',
};

var countStart = 10*2*60; // tenths * seconds * hours
var count = countStart;
var playing = false;

var playPause = $(".play-btn");
var reset = $(".reset");
var state = $('.state');
var thing = $('.thing');

//set active state when clicked

  var mapLink = $('.mapContainer a');
  $(mapLink).click(function() {
    $('.mapContainer a path').css('fill', '');
    $(this).find('path').css('fill', '#1A81A2');
    // unbind not working idk why - trying to remove fill when state is clicked a second time
    $('.mapContainer a path').unbind('click');
  });

// game magic

// randomly display state name
var chooseState = function() {
  var randomStateNum = Math.floor(Math.random() * 50)
  var oneState = statesArr[randomStateNum].name;
    // console.log(oneState)
  $('.thing').text(oneState);
}
chooseState();

// making sure state name is tied to state area
state.on('click', function() {
  //get me state that was clicked on
  var abbrv = $(this).data('filter');
 //go through the entire array of states objects
  $.each(statesArr, function(key, value){
//match abbrv with the same state object
      if (abbrv === value.abbrv){
        $(this).map(function(x, y){
          // console.log(y.name)
      var clickState = y.name;
        })
      }
  })
});

// timer timer timer yo

playPause.on("click", function() {
  console.log("hit");
  if (playing) {
    playing = false;
    console.log("Pause!");
    playPause.text("▶");
  } else if (!playing) {
    playing = true;
    console.log("Play!");
    playPause.text("‖");
  }

});

reset.on("click", function() {
  console.log("reset hit");
  if (playing) {
    playing = false;
    playPause.text("▶");
  }
  console.log("Reset Timer!");
  count = countStart;
});

function countDown(){
    displayTime();
    if (count == 0) {
      playing = false;
    } else if (playing) {
      setTimeout(countDown, 100);
      count--;
    } else {
      setTimeout(countDown, 100);
    }
};

countDown();

function displayTime() {

  var tenths = count;
  var sec = Math.floor(tenths / 10);
  var hours = Math.floor(sec / 3600);
  sec -= hours * (3600);
  var mins = Math.floor(sec / 60);
  sec -= mins * (60);

  if (hours < 1) {
    $('.time-left').text(leadingZero(mins)+':'+leadingZero(sec));
  }
  else {
    $('.time-left').text(hours+':'+leadingZero(mins)+':'+leadingZero(sec));
  }
};

function leadingZero(Time) {
  return (Time < 10) ? "0" + Time : + Time;
}



// end code above
});
