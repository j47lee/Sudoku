$(function(){


// board = [
//   [null, null, 4, 6, null, 8, 9, 1, 2],
//   [null, 7, 2, null, null, null, 3, 4, 8],
//   [1, null, null, 3, 4, 2, 5, null, 7],
//   [null, 5, 9, 7, null, 1, 4, 2, null],
//   [null, 2, 6, null, 5, null, 7, 9, null],
//   [null, 1, 3, 9, 2, 4, 8, 5, null],
//   [9, null, 1, 5, 3, 7, null, null, 4],
//   [2, 8,	7, null, null, null, 6, 3, null],
//   [3, 4, 5, 2, null, 6, 1, null, null],
// ]

//board with zeros for null, need to figure out how to use null or have empty values!!
//might be conflict with the CHECKS!!
// board = [
//   [0, 0, 4, 6, 0, 8, 9, 1, 2],
//   [0, 7, 2, 0, 0, 0, 3, 4, 8],
//   [1, 0, 0, 3, 4, 2, 5, 0, 7],
//   [0, 5, 9, 7, 0, 1, 4, 2, 0],
//   [0, 2, 6, 0, 5, 0, 7, 9, 0],
//   [0, 1, 3, 9, 2, 4, 8, 5, 0],
//   [9, 0, 1, 5, 3, 7, 0, 0, 4],
//   [2, 8, 7, 0, 0, 0, 6, 3, 0],
//   [3, 4, 5, 2, 0, 6, 1, 0, 0],
// ]

//solved
board = [
[5, 3, 4, 6, 7, 8, 9, 1, 2],
[6, 7, 2, 1, 9, 5, 3, 4, 8],
[1, 9, 8, 3, 4, 2, 5, 6, 7],
[8, 5, 9, 7, 6, 1, 4, 2, 3],
[4, 2, 6, 8, 5, 3, 7, 9, 1],
[7, 1, 3, 9, 2, 4, 8, 5, 6],
[9, 6, 1, 5, 3, 7, 2, 8, 4],
[2, 8, 7, 4, 1, 9, 6, 3, 20],
[3, 4, 5, 2, 8, 6, 1, 7, 9]
]


///////////////////////POPULATES HTML BOARD FROM ARRAY////////////////////
var squares = document.getElementsByClassName('square'); //generates array from divs
for (var i = 0; i < board.length; i++) {
  for (var j = 0; j < board[i].length; j++) {
    var squareNumber = j+(i*board[i].length)
    squares[squareNumber].innerHTML = board[i][j];
  }
}

////////////////////////////////DRAG AND DROP//////////////////////////////////
//Initiates draggable numbers into each row
$('.number').draggable({helper:'clone'});
//for row1
$('.row1').children('div').each(function() {
  $(this).droppable({          // "this" refers to the div
    drop: function(ev,ui){
      var draggedNumber = $(ui.draggable).html();
      $(this).html(draggedNumber);
      for (var i = 0; i < 9; i++) {
        if (parseInt(this.title) == i) {
          board[0][i] = parseInt(this.innerHTML);
        }
      }
    }
  })
});

//for row2
$('.row2').children('div').each(function() {
  $(this).droppable({
    drop: function(ev,ui){
      var draggedNumber = $(ui.draggable).html();
      $(this).html(draggedNumber);
      for (var i = 0; i < 9; i++) {
        if (parseInt(this.title) == i) {
          board[1][i] = parseInt(this.innerHTML);
        }
      }
    }
  })
});

//for row3
$('.row3').children('div').each(function() {
  $(this).droppable({
    drop: function(ev,ui){
      var draggedNumber = $(ui.draggable).html();
      $(this).html(draggedNumber);
      for (var i = 0; i < 9; i++) {
        if (parseInt(this.title) == i) {
          board[2][i] = parseInt(this.innerHTML);
        }
      }
    }
  })
});

//for row4
$('.row4').children('div').each(function() {
  $(this).droppable({
    drop: function(ev,ui){
      var draggedNumber = $(ui.draggable).html();
      $(this).html(draggedNumber);
      for (var i = 0; i < 9; i++) {
        if (parseInt(this.title) == i) {
          board[3][i] = parseInt(this.innerHTML);
        }
      }
    }
  })
});

//for row5
$('.row5').children('div').each(function() {
  $(this).droppable({
    drop: function(ev,ui){
      var draggedNumber = $(ui.draggable).html();
      $(this).html(draggedNumber);
      for (var i = 0; i < 9; i++) {
        if (parseInt(this.title) == i) {
          board[4][i] = parseInt(this.innerHTML);
        }
      }
    }
  })
});

//for row6
$('.row6').children('div').each(function() {
  $(this).droppable({
    drop: function(ev,ui){
      var draggedNumber = $(ui.draggable).html();
      $(this).html(draggedNumber);
      for (var i = 0; i < 9; i++) {
        if (parseInt(this.title) == i) {
          board[5][i] = parseInt(this.innerHTML);
        }
      }
    }
  })
});

//for row7
$('.row7').children('div').each(function() {
  $(this).droppable({
    drop: function(ev,ui){
      var draggedNumber = $(ui.draggable).html();
      $(this).html(draggedNumber);
      for (var i = 0; i < 9; i++) {
        if (parseInt(this.title) == i) {
          board[6][i] = parseInt(this.innerHTML);
        }
      }
    }
  })
});

//for row8
$('.row8').children('div').each(function() {
  $(this).droppable({
    drop: function(ev,ui){
      var draggedNumber = $(ui.draggable).html();
      $(this).html(draggedNumber);
      for (var i = 0; i < 9; i++) {
        if (parseInt(this.title) == i) {
          board[7][i] = parseInt(this.innerHTML);
        }
      }
    }
  })
});

//for row9
$('.row9').children('div').each(function() {
  $(this).droppable({
    drop: function(ev,ui){
      var draggedNumber = $(ui.draggable).html();
      $(this).html(draggedNumber);
      for (var i = 0; i < 9; i++) {
        if (parseInt(this.title) == i) {
          board[8][i] = parseInt(this.innerHTML);
        }
      }
    }
  })
});

//////////////////////////////////ROWS CHECK////////////////////////////////
for (var i = 0; i < board.length; i++) {
  var sumCurrentRow = eval(board[i].join('+'));
  // console.log(sumCurrentRow);
  if (sumCurrentRow === 45) {
    // console.log(true);
  } else {
    // console.log(false);
    //////write function to return true or false
    break;
  }
}

//////////////////////////////////COLUMN CHECK////////////////////////////////
//column1 check
var column1 = [];
for (var i = 0; i < board.length; i++) {
  // column1.push(board[i][0]); //returns first column into an array
}
// console.log(eval(column1.join('+')));

//column2 check
var column2 = [];
for (var i = 0; i < board.length; i++) {
  // column2.push(board[i][1]); //returns first column into an array
}
// console.log(eval(column2.join('+')));

//////////need to finish rest of columns////////////////////////





/////////////////////////////////3X3 BOXES CHECK////////////////////////////////
var firstBox = []; var secondBox = []; var thirdBox = [];
var fourthBox = []; var fifthBox = []; var sixthBox = [];
var seventhBox = []; var eighthBox = []; var ninthBox = [];
//check 1-3 boxes
for (var i = 0; i < 3; i++) {
  for (var j = 0; j < 3; j++) {
    firstBox.push(board[i][j]);
  }
  for (var j = 3; j < 6; j++) {
    secondBox.push(board[i][j]);
  }
  for (var j = 6; j < 9; j++) {
    thirdBox.push(board[i][j]);
  }
}
//check 4-6 boxes
for (var i = 3; i < 6; i++) {
  for (var j = 0; j < 3; j++) {
    fourthBox.push(board[i][j]);
  }
  for (var j = 3; j < 6; j++) {
    fifthBox.push(board[i][j]);
  }
  for (var j = 6; j < 9; j++) {
    sixthBox.push(board[i][j]);
  }
}
//check 7-9 boxes
for (var i = 6; i < 9; i++) {
  for (var j = 0; j < 3; j++) {
    seventhBox.push(board[i][j]);
  }
  for (var j = 3; j < 6; j++) {
    eighthBox.push(board[i][j]);
  }
  for (var j = 6; j < 9; j++) {
    ninthBox.push(board[i][j]);
  }
}

var eb1 = eval(firstBox.join('+')); var eb2 = eval(secondBox.join('+')); var eb3 = eval(thirdBox.join('+'));
var eb4 = eval(fourthBox.join('+')); var eb5 = eval(fifthBox.join('+')); var eb6 = eval(sixthBox.join('+'));
var eb7 = eval(seventhBox.join('+')); var eb8 = eval(eighthBox.join('+')); var eb9 = eval(ninthBox.join('+'));

if (eb1===eb2 && eb2===eb3 && eb3===eb4 && eb4===eb5 && eb5===eb6 && eb6===eb7 && eb7===eb8 && eb8===eb9 && eb9===45) {
  console.log('All 3x3s are ' + true);
} else {
  console.log('Not all 3x3s are true. It is ' + false);
}

////////////BUTTON TO CHECK FOR ROWS, COLUMNS, 3X3///////////////////
$('#check').click(function(){
  alert('clicked');
});


console.log("----------");
console.log(board[0]);
console.log(board[1]);
console.log(board[2]);
console.log(board[3]);
console.log(board[4]);
console.log(board[5]);
console.log(board[6]);
console.log(board[7]);
console.log(board[8]);
console.log("----------");






}) //end of jq
