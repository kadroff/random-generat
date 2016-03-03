$(document).ready(function(){
  $("button[name=generat]").click(function(){
    function getRandomArbitrary(min, max) {
      var value = $("select[name=value]").val();
      var max;
      var min = 1;

      if (value == "10"){
        max = 10;
    }else if (value == "50"){
        max = 50;
    }else if (value == "100"){
        max = 100;
      };

      Math.random() * (max + min) - min;
};
    $("input[name=result]").val(getRandomArbitrary);
  });
});
