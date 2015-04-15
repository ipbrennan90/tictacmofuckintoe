$(document).ready( function(){
  var boxes = $(".box")
  var player = 1;
  var array_1=[];
  var array_2=[];
  var winning=[[1,2,3],[4,5,6],[7,8,9],[1,5,9],[3,5,7], [1,4,7], [2,5,8], [3,6,9]]
  var count=0
  $.each(boxes, function(i, data){
  	$(this).click(function(){
      if ($(this).is(':empty')){
        if(player===1) {
          $(this).append('X');
          count++;

        } else {
          $(this).append('O');
          count++;

        }
        get_id($(this));
        change_player();
        check_winner(array_1);
        check_winner(array_2);
        if(count ===9){
          $(".banner").text("CAT'S GAME");
          alert("CAT'S GAME");
          clear_board();
          count=0;
        }
      }
    });
  });
  function get_id(element) {
    if(player===1){
      array_1.push($(element).attr("id"));
    }else{
      array_2.push($(element).attr("id"));
    }
		};
	function change_player() {
    if(player===1){
    	player=2;
    } else {
      player=1;
    };

  };

  function check_winner(arr){
    $.each(winning, function(data){
      if((intersection($(this), arr).length)===3){
        $('.banner').append("WINNER");
        alert("WINNER WINNER WINNER");
        count=0;
        clear_board();

      }
    });

  };
  function intersection(arr1, arr2) {
    var wintersection = [];
    for(var i = 0; i < arr1.length; i++){
        for(var k = 0; k < arr2.length; k++){
            if(arr1[i] == arr2[k]){
                wintersection.push( arr1[i]);
                break;
            }
        }
    }
    return wintersection

	};
  function clear_board(){
    $(".box").text('');
    array_1=[];
    array_2=[];
    $(".banner").text('');
  };
});
