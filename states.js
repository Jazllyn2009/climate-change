    //for loop
    var regions = ["Artic", "Africa", "Asian megadeltas"];
    var text = "";
    var i;
    for (i = 0; i < regions.length; i++) {
      text += regions[i] + "<br>";
    }
    document.getElementById("demo").innerHTML = text;

        //arrays
        var regions = ["JAPAN", "PHILIPPINES", "GERMANY", "MADAGASCAR"];
        document.getElementById("countries").innerHTML = regions;