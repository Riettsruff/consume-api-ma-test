const CURRENT_PATHNAME = $(location).attr("pathname");

$(function() {
  switch(CURRENT_PATHNAME) {
    case "/":

      const modalBasicInformation = $("#modal-informasi-dasar");
      const modalCurrentOccupation = $("#modal-pekerjaan-saat-ini");
      const modalEducation = $("#modal-pendidikan");
      const modalAddress = $("#modal-alamat");
      const modalContact = $("#modal-kontak");

      modalBasicInformation.on(
        "click", 
        ".submit-button", 
        () => modalBasicInformationClicked(modalBasicInformation)
      );  

      modalCurrentOccupation.on(
        "click", 
        ".submit-button",
        () => modalCurrentOccupationClicked(modalCurrentOccupation)
      );

      modalEducation.on(
        "click", 
        ".submit-button", 
        () => modalEducationClicked(modalEducation)
      );

      modalAddress.on(
        "click", 
        ".submit-button", 
        () => modalAddressClicked(modalAddress)
      );

      modalContact.on(
        "click", 
        ".submit-button",
        () => modalContactClicked(modalContact)
      );

    break;
    
    case "/register":

      const registerForm = $(".register-form");

      registerForm.on("click", ".submit-button", () => {
        
      });

    break;
  }
});