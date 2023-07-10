

document.addEventListener("DOMContentLoaded", function () {




    $("#balle1").on("click", function () {

        $(".contenu").fadeOut(500)
        $(".contenu2").fadeOut(500)
        $(".photo").fadeOut(500)
        $(".message").fadeOut(500)
        $(".formcontact").css({"display":"none"})

        document.getElementById("balle1").animate([
            { transform: 'translateY(-50vh) translateX(35vw) scale(0.2)' }
        ], {
            duration: 500,
            fill: 'forwards'
        });
        setTimeout(() => {


            $("#balle1").css({ "display": "none" })
            $("#balle2").css({ "display": "block" })
            $("#balle3").css({ "display": "block" })
            $("#balle4").css({ "display": "block" })
            $("#balle5").css({ "display": "block" })
            $("#balle2").css({ "marginLeft": "13%" })
            $("#balle3").css({ "marginLeft": "2%" })
            $("#balle4").css({ "marginLeft": "13%" })
            $("#balle5").css({ "marginLeft": "13%" })

            document.getElementById("balle2").animate([
                { transform: 'translateY(65vh)' }
            ], {
                duration: 500,
                fill: 'forwards'
            });
            document.getElementById("balle2").animate([
                { transform: 'translatex(-40vw)' }
            ], {
                duration: 500,
                fill: 'forwards'
            });
            document.getElementById("balle3").animate([
                { transform: 'translateY(65vh)' }
            ], {
                duration: 500,
                fill: 'forwards'
            });
            document.getElementById("balle3").animate([
                { transform: 'translatex(40vw)' }
            ], {
                duration: 500,
                fill: 'forwards'
            });
            document.getElementById("balle4").animate([
                { transform: 'translateY(55vh) ' },
            ], {
                duration: 500,
                fill: 'forwards'

            });
            for (let index = 0; index < 4; index++) {
                $(".projet" + index).fadeIn(1600)
                $(".techno" + index).fadeIn(1600)
            }
        }, 500);

    });

    $("#balle5").on("click", function () {
        for (let index = 0; index < 4; index++) {
            $(".projet" + index).fadeOut()
            $(".techno" + index).fadeOut()
        }
        $(".contenu").fadeIn(1600)
        $(".contenu2").fadeIn(1600)
        $(".photo").fadeIn(1600)
        $(".message").fadeIn(1600)
        $(".titre2").css({"display":"none"})
        $(".titremessage").fadeIn(1600)




        document.getElementById("balle2").animate([
            { transform: 'translateY(70vh) scale(0.3)' }
        ], {
            duration: 500,
            fill: 'forwards'
        });
        document.getElementById("balle2").animate([
            { transform: 'translatex(2vw) scale(0.3)' }
        ], {
            duration: 500,
            fill: 'forwards'
        });
        document.getElementById("balle3").animate([
            { transform: 'translateY(65vh) scale(0.3)' }
        ], {
            duration: 500,
            fill: 'forwards'
        });
        document.getElementById("balle3").animate([
            { transform: 'translatex(7vw) scale(0.3)' }
        ], {
            duration: 500,
            fill: 'forwards'
        });
        document.getElementById("balle4").animate([
            { transform: 'translateY(0vw) translateX(2vw) scale(0.3)' },
        ], {
            duration: 500,
            fill: 'forwards'

        });
        setTimeout(() => {
            $("#balle1").css({ "display": "block" })
            $("#balle2").css({ "display": "none" })
            $("#balle3").css({ "display": "none" })
            $("#balle4").css({ "display": "none" })

            document.getElementById("balle1").animate([
                { transform: 'translateY(0vw)' }
            ], {
                duration: 500,
                fill: 'forwards'
            });
        }, 500);
        setTimeout(() => {
            $("#balle5").css({ "display": "none" })
        }, 480);
    })

    $(".titremessage").on("click", showform)
    $(".titre2").on("click", backtomain)
    $(".t1").on("click", showt1)
    $(".t2").on("click", showt2)
    $(".t3").on("click", showt3)
    $("#balle6").on("click", cacher)
    $(".textecard").on("click", showinfo)
    $(".submit").on("click", mailsend)



});

function showform() {
    $(".titremessage").css({ "display": "none" })
    $(".titre2").fadeIn(2500)
    $('#balle1').fadeOut(1500)
    $(".formcontact").fadeIn(2000)
}
function backtomain() {
    $(".titre2").css({ "display": "none" })
    $(".titremessage").fadeIn(2500)
    $(".formcontact").fadeOut(1500)
    $("#balle1").fadeIn(2000)
}
function showt1() {
    for (let index = 0; index < 4; index++) {
        $(".projet" + index).fadeOut()
        $(".techno" + index).fadeOut()
    }
    $("#balle5").fadeOut()
    $(".t1").fadeOut()
    $(".t2").fadeOut()
    $(".t3").fadeOut()
    $("#balle6").fadeIn()

    setTimeout(() => {
        for (let index = 8; index < 10; index++) {
            $(".c" + index).fadeIn(500)
            $(".cc" + index).fadeIn(500)

        }
    }, 500);


}
function showt2() {
    for (let index = 0; index < 4; index++) {
        $(".projet" + index).fadeOut()
        $(".techno" + index).fadeOut()
    }
    $("#balle5").fadeOut()
    $(".t1").fadeOut()
    $(".t2").fadeOut()
    $(".t3").fadeOut()
    $("#balle6").fadeIn()
    setTimeout(() => {
        $(".c1").fadeIn(500)
        $(".c2").fadeIn(500)
        $(".c3").fadeIn(500)
        $(".cc1").fadeIn(500)
        $(".cc2").fadeIn(500)
        $(".cc3").fadeIn(500)
    }, 600);

}
function showt3() {
    for (let index = 0; index < 4; index++) {
        $(".projet" + index).fadeOut()
        $(".techno" + index).fadeOut()
    }
    $("#balle5").fadeOut()
    $(".t1").fadeOut()
    $(".t2").fadeOut()
    $(".t3").fadeOut()
    $("#balle6").fadeIn()

    setTimeout(() => {
        for (let index = 4; index < 8; index++) {
            $(".c" + index).fadeIn(500)
            $(".cc" + index).fadeIn(500)
        }
    }, 500);
}
function cacher() {

    for (let index = 0; index < 10; index++) {
        $(".c" + index).fadeOut()
        $(".cc" + index).fadeOut()
    }
    $("#balle6").fadeOut()
    $("#balle5").fadeIn(500)
    $(".t1").fadeIn(500)
    $(".t2").fadeIn(500)
    $(".t3").fadeIn(500)
    setTimeout(() => {


        for (let index = 0; index < 4; index++) {
            $(".projet" + index).fadeIn()
            $(".techno" + index).fadeIn()
        }
    }, 500);


}
let x = true;
function showinfo() {
    if (x) {
        $(".contenu").fadeOut()
        $(".message").fadeOut()
        $("#balle1").fadeOut()
        $(".contenu2").fadeOut()
        $(".formcontact").fadeOut()
        $(".textecard").text("Revenir sur la page principale")

        $(".contenuinfo").fadeIn(1400)
        $(".cv").fadeIn(1400)
        $(".alternance").fadeIn(1400)

        x = false;
    }
    else {
        $(".contenu").fadeIn()
        $(".message").fadeIn()
        $("#balle1").fadeIn()
        $(".contenu2").fadeIn()

        $(".titre2").css({ "display": "none" })
        $(".titremessage").fadeIn()


        $(".contenuinfo").fadeOut()
        $(".cv").fadeOut()
        $(".alternance").fadeOut()





        $(".textecard").text("Voir plus d'informations sur moi")
        x = true;
    }

}
function mailsend() {
    if ($(".select").val() && $(".email").val() && $(".text").val()) {


        // Charger la bibliothèque EmailJS
        (function () {
            emailjs.init("-IGDl1U6vzjpkgMSv");
        })();
        
        sendEmail()
        alert("votre mail a bien été envoyé")


    }
    else {
        alert("Veuillez remplir tous les champs.")
    }
}
function sendEmail() {
    const templateParams = {
        to_name: $(".email").val(),
        from_name: $(".email").val(),
        message: $(".text").val()
    };

    emailjs.send("service_wm97v4e", 'template_hro8bg3', templateParams)
        .then(function (response) {
            alert('E-mail envoyé avec succès');
        }, function (error) {
            console.error('Une erreur s\'est produite lors de l\'envoi de l\'e-mail');
        });
}