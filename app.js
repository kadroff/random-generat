$(document).ready(function(){
  $("button[name=generat]").click(function(){
    function getRandomArbitrary(min, max) {
      var min = 0;
      var max = 10;
      return Math.random() * (max - min) + min;

};
    $("input[name=result]").val(getRandomArbitrary);
  });


});
