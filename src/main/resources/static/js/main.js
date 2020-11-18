const CURRENT_PATHNAME = $(location).attr("pathname");

$(function() {
  switch(CURRENT_PATHNAME) {
    case "/":

      const modalBasicInformation = $("#modal-informasi-dasar");
      const modalCurrentOccupation = $("#modal-pekerjaan-saat-ini");
      const modalEducation = $("#modal-pendidikan");
      const modalAddress = $("#modal-alamat");
      const modalContact = $("#modal-kontak");

      modalBasicInformation
        .find("#informasi-dasar-tanggal-lahir")
        .datepicker({
          format: 'yyyy-mm-dd'
        });

      modalBasicInformation.on(
        "click", 
        ".submit-button", 
        () => modalBasicInformationSubmitClicked(modalBasicInformation)
      );

      modalCurrentOccupation.on(
        "click", 
        ".submit-button",
        () => modalCurrentOccupationSubmitClicked(modalCurrentOccupation)
      );

      modalEducation.on(
        "click", 
        ".submit-button", 
        () => modalEducationSubmitClicked(modalEducation)
      );

      modalAddress.on(
        "click", 
        ".submit-button", 
        () => modalAddressSubmitClicked(modalAddress)
      );

      modalContact.on(
        "click", 
        ".submit-button",
        () => modalContactSubmitClicked(modalContact)
      );

    break;
    
    case "/register":

      const registerForm = $(".register-form");

      registerForm
        .find("#pendaftaran-tanggal-lahir")
        .datepicker({
          format: 'yyyy-mm-dd'
        });

      registerForm.on(
        "click", 
        ".submit-button", 
        () => registerFormSubmitClicked(registerForm)
      );

    break;

    case "/forgotpassword":

      const forgotPasswordForm = $(".forgot-password-form");

      forgotPasswordForm.on(
        "click",
        ".submit-button",
        () => forgotPasswordFormSubmitClicked(forgotPasswordForm)
      );

    break;

    default:

      if(CURRENT_PATHNAME.split("/")[1] === "forgotpassword" && CURRENT_PATHNAME.split("/")[2]) {
        const resetPasswordForm = $(".reset-password-form");

        resetPasswordForm.on(
          "click",
          ".submit-button",
          () => resetPasswordFormSubmitClicked(resetPasswordForm)
        );
      }
  }
});