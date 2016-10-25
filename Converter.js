    function convert(temp) {
        var Cel = document.getElementById("Cel");
        var Fah = document.getElementById("Fah");
        var C2F;
        var F2C;

        try {
            if (temp == "C") {
                C2F = Cel.value * 1.8 + 32;
                Fah.value = Math.round(C2F);

                if (isNaN(Cel.value)) {
                    Fah.value = "Enter a #"
                }
            }
        }
        catch (err) {
            console.log(err);
        }

        try {
            if (temp == "F") {
                F2C = (Fah.value - 32) * 5 / 9;
                Cel.value = Math.round(F2C);

                if (isNaN(Fah.value)) {
                    Cel.value = "Enter a #"
                }
            }


        }
        catch (err) {
            console.log(err);

        }
    }








