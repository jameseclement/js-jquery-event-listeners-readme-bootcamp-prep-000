//define functions here
function getIt() {
  $('p').on('click', function(){
    alert ('Hey!')
  })
}


function frameIt() {
    $('img').on('load', function(){
  $('img').addClass('tasty')
  })

}

function pressIt(){
  $('#typing').on('keypress', function(key){
    if(key.which == 71){
      alert('g was pressed')}
  })
}

function submitIt(){
  
}

$(document).ready(function(){

// call functions here
getIt()
frameIt()
pressIt()
submitIt()
});
