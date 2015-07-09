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
[2, 8, 7, 4, 1, 9, 6, 3, 5],
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
//initiates draggable numbers
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
///////////////////////////////////////////////////////////////////////////////

//////////////////////////////////ROWS CHECK////////////////////////////////
//rows check (create button to be clicked to check if solved)
for (var i = 0; i < board.length; i++) {
  var sumRow = eval(board[i].join('+'));
  // console.log(sumRow);
  // if (sumRow === 45) {
  //   console.log('true');
  // } else {
  //   console.log('false');
  // }
}
//////////need to finish rest of rows////////////////////////



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

var e1 = eval(firstBox.join('+')); var e2 = eval(secondBox.join('+')); var e3 = eval(thirdBox.join('+'));
var e4 = eval(fourthBox.join('+')); var e5 = eval(fifthBox.join('+')); var e6 = eval(sixthBox.join('+'));
var e7 = eval(seventhBox.join('+')); var e8 = eval(eighthBox.join('+')); var e9 = eval(ninthBox.join('+'));

if (e1==e2 && e2==e3 && e3==e4 && e4==e5 && e5==e6 && e6==e7 && e7==e8 && e8==e9 && e9 == 45) {
  console.log(true);
} else {
  console.log(false);
}

// console.log(firstBox);
// console.log(eval(firstBox.join('+')));
// console.log(secondBox)
// console.log(eval(secondBox.join('+')));
// console.log(thirdBox)
// console.log(eval(thirdBox.join('+')));
// console.log(fourthBox)
// console.log(eval(fourthBox.join('+')));


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
