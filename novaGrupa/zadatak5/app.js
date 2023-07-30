let password = "Lddasfdsa@j";
let simbols = ["@", "#", "$", "%", "&"];

if (password[0] !== password[0].toUpperCase()) {
  console.log("prvo slovo mora biti veliko");
} else if (password.length < 8) {
  console.log("sifra mora imati minimum 8 karaktera");
} else if (!simbols.some((el) => password.includes(el))) {
  console.log("sifra mora sadrzati neki od sledecih simbola: @,#,$,%,&");
} else {
  console.log("Vaša šifra je ispravna.");
}

switch (true) {
  case password[0] !== password[0].toUpperCase():
    console.log("prvo slovo mora biti veliko");
    break;
  case password.length < 8:
    console.log("sifra mora imati minimum 8 karaktera");
    break;
  case !simbols.some((el) => password.includes(el)):
    console.log("sifra mora sadrzati neki od sledecih simbola: @,#,$,%,&");
    break;
  default:
    console.log("vasa sifra je ispravna");
}
