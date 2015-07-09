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

// board = [
//   [null, null, 4, 6, null, 8, 9, 1, 2],
//   [null, 7, 2, null, null, null, 3, 4, 8],
//   [1, null, null, 3, 4, 2, 5, null, 7],
//   [null, 5, 9, 7, null, 1, 4, 2, null],
//   [null, 2, 6, null, 5, null, 7, 9, null],
//   [null, 1, 3, 9, 2, 4, 8, 5, null],
//   [9, null, 1, 5, 3, 7, null, null, 4],
//   [2, 8,	7, null, null, null, 6, 3, null],
//   [3, 4, 5, 2, 8, 6, 1, 7, 9],  //this row solved
// ]

//solved
board = [
[5,	3, 4,	6, 7,	8, 9, 1, 2],
[6,	7, 2,	1, 9, 5, 3, 4, 8],
[1,	9, 8,	3, 4,	2, 5,	6, 7],
[8, 5, 9,	7, 6,	1, 4,	2, 3],
[4, 2, 6, 8, 5, 3, 7, 9, 1],
[7, 1, 3, 9, 2, 4, 8, 5, 6],
[9, 6, 1, 5, 3, 7, 2, 8, 4],
[2, 8, 7, 4, 1, 9, 6, 3, 5],
[3,	4, 5, 2, 8, 6, 1,	7, 9]
]

var squares = document.getElementsByClassName('square');  //grabs the divs, puts into array

for (var i = 0; i < board.length; i++) {
  for (var j = 0; j < board[i].length; j++) {
    var squareNumber = j+(i*board[i].length)
    squares[squareNumber].innerHTML = board[i][j];
  }
}

//rows check (create button to be clicked to check if solved)
for (var i = 0; i < board.length; i++) {
  var sumRow = eval(board[i].join('+'));
  console.log(sumRow);
  // if (sumRow === 45) {
  //   console.log('true');
  // } else {
  //   console.log('false');
  // }
}

//refactor and/or create for all columns
//column1 check
var column1 = [];
for (var i = 0; i < board.length; i++) {
  column1.push(board[i][0]); //returns first column into an array
}
console.log(eval(column1.join('+')));

//column2 check
var column2 = [];
for (var i = 0; i < board.length; i++) {
  column2.push(board[i][1]); //returns first column into an array
}
console.log(eval(column2.join('+')));

//3x3 check
var firstBox = [];
var secondBox = [];
var thirdBox = []
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

console.log(firstBox);
console.log(eval(firstBox.join('+')));
console.log(secondBox)
console.log(eval(secondBox.join('+')));
console.log(thirdBox)
console.log(eval(thirdBox.join('+')));

//drag 1-9 to board


// var squares = document.getElementsByClassName('square');  //grabs the divs, puts into array
//
// for (var i = 0; i < board.length; i++) {
//   for (var j = 0; j < board[i].length; j++) {
//     var squareNumber = j+(i*board[i].length)
//     squares[squareNumber].innerHTML = board[i][j];
//   }
// }





//MAKES NUMBERS DRAGGABLE
$('.number').draggable({helper:'clone'});


//for row1 only
$('.row1').children('div').each(function() {
  $(this).droppable({          // "this" refers to the div
    drop: function(ev,ui){
      var draggedNumber = $(ui.draggable).html();
      $(this).html(draggedNumber);



//good code, drag and drops properly. pushes to row1 correctly
      for (var i = 0; i < 9; i++) {
        if (parseInt(this.title) == i) {
          board[0][i] = parseInt(this.innerHTML);
        }
      }


      // if (this.id == 'sq1') {
      //   board[0][0] = parseInt(this.innerHTML); //parseInt(this.innerHTML) gives us the number dragged 1-9
      // } else if (this.id == 'sq2') {
      //   board[0][1] = parseInt(this.innerHTML);
      // } else if (this.id == 'sq3') {
      //   board[0][2] = parseInt(this.innerHTML);
      // } else if (this.id == 'sq4') {
      //   board[0][3] = parseInt(this.innerHTML);
      // } else if (this.id == 'sq5') {
      //   board[0][4] = parseInt(this.innerHTML);
      // } else if (this.id == 'sq6') {
      //   board[0][5] = parseInt(this.innerHTML);
      // } else if (this.id == 'sq7') {
      //   board[0][6] = parseInt(this.innerHTML);
      // } else if (this.id == 'sq8') {
      //   board[0][7] = parseInt(this.innerHTML);
      // } else if (this.id == 'sq9') {
      //   board[0][8] = parseInt(this.innerHTML);
      // }
        console.log(board[0]);
        console.log("----------");
    }
  })
});


//drop to change square 1/81
// $('#sq1').droppable({
//   drop: function(ev,ui){
//     var draggedNumber = $(ui.draggable).html();
//     $(this).html(draggedNumber);
//     board[0][0] = parseInt(this.innerHTML);
//     console.log(board[0]);
//   }
// })
//
// $('#sq2').droppable({
//   drop: function(ev,ui){
//     var draggedNumber = $(ui.draggable).html();
//     $(this).html(draggedNumber);
//     board[0][1] = parseInt(this.innerHTML);
//     console.log(board[0]);
//   }
// })
//
// $('#sq3').droppable({
//   drop: function(ev,ui){
//     var draggedNumber = $(ui.draggable).html();
//     $(this).html(draggedNumber);
//     board[0][2] = parseInt(this.innerHTML);
//     console.log(board[0]);
//   }
// })





}) //end of jq
