let nama, val;
const url_string = document.URL;
const url = new URL(url_string);
let ti;
let hmp;

if (url.searchParams.get("in") != null) {
  bms = url.searchParams.get("in");
} else {
  bms = "Rika Pada";
}

let footer = document.getElementById("credit");

function time() {
  var d = new Date();
  var n = d.getHours();
  console.log(n);
  if (n >= 5 && n <= 10) {
    return "Enjang";
  } else if (n >= 10 && n <= 14) {
    return "Awan";
  } else if (n >= 14 && n <= 18) {
    return "Sore";
  } else if (n >= 18 && n <= 24) {
    return "Wengi";
  }
}

function belajar() {
  switch (time()) {
    case "Pagi":
      return "esuk";
      break;
    case "Siang":
      return "awan";
      break;
    case "Sore":
      return "sore";
      break;
    case "Malam":
      return "wengi";
      break;
    default:
      break;
  }
}

document.querySelector(".tombol").addEventListener("click", function () {
  Swal.fire({
    title: "Hallo Lurrr....",
    html: `Sugeng ${time()}, Lagi pada ngapa Lurrr ?`,
    timer: 3000,
    timerProgressBar: true,
    showConfirmButton: false,
  }).then((result) => {
    Swal.fire({
      title: " ",
      html: `Aku ngerti antum lagi pada sibuk kayane`,
      timer: 2500,
      timerProgressBar: true,
      showConfirmButton: false,
    }).then((result) => {
      if (result.dismiss === Swal.DismissReason.timer) {
        Swal.fire({
          title: " ",
          html: `Lagi pusing banget, ngurusi pengabdian`,
          timer: 2500,
          timerProgressBar: true,
          showConfirmButton: false,
        }).then((result) => {
          if (result.dismiss === Swal.DismissReason.timer) {
            Swal.fire("Semangat ngabdi kawan :=)").then((result) => {
              Swal.fire("Aja nganti ora lulus pengabdian !", "", "error").then((result) => {
                Swal.fire("Aja Keseringan Begadang !", "", "error").then((result) => {
                  Swal.fire("Aja Kelalen Wong Tua !", "", "error").then((result) => {
                    Swal.fire("Aja Lali Shalat !", "", "error").then((result) => {
                      Swal.fire("Good Luck for Us").then((result) => {
                        Swal.fire({
                          title: "Minta Saran Nih Kawan",
                          text: "Ana sing arep disampekna ?",
                          showDenyButton: true,
                          confirmButtonText: `Ana kayane`,
                          denyButtonText: `Kayane langka`,
                        }).then((result) => {
                          if (result.isConfirmed) {
                            Swal.fire({
                              title: "Nek ana, ngomong bae",
                              input: "text",
                              inputPlaceholder: "Monggoh diisi mas mba",
                              showCancelButton: false,
                              inputValidator: (value) => {
                                if (!value) {
                                  return "Harap Diisi Mas Mba";
                                }
                              },
                            }).then((result) => {
                              Swal.fire("Siap kawan", "Kami tunggu setelah ngabdi").then((result) => {
                                Swal.fire("Do It Like You Love It And Do It Daily").then((result) => {});
                              });
                            });
                          } else if (result.isDenied) {
                            Swal.fire("Okelah rapapa", "nek langka").then((result) => {
                              Swal.fire("Don't Wasting Your Time :)").then((result) => {});
                            });
                          }
                        });
                      });
                    });
                  });
                });
              });
            });
          }
        });
      }
    });
  });
});
