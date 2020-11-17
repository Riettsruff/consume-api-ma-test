const CURRENT_PATHNAME = $(location).attr("pathname");

$(function() {
  if(CURRENT_PATHNAME === "/") {
    const modalBasicInformation = $("#modal-informasi-dasar");
    const modalCurrentOccupation = $("#modal-pekerjaan-saat-ini");
    const modalEducation = $("#modal-pendidikan");
    const modalAddress = $("#modal-alamat");
    const modalContact = $("#modal-kontak");

    modalBasicInformation.on("click", ".submit-button", () => {
      const htmlInput = {
        id: modalBasicInformation.find("#informasi-dasar-id-user"),
        name: modalBasicInformation.find("#informasi-dasar-nama"),
        email: modalBasicInformation.find("#informasi-dasar-email"),
        gender: modalBasicInformation.find("#informasi-dasar-jenis-kelamin"),
        birthDate: modalBasicInformation.find("#informasi-dasar-tanggal-lahir")
      };

      Promise.all(
        Object
          .values(htmlInput)
          .map(item => INPUT_VALIDATION(item))
      ).then(async () => {
        const requestBody = Object.fromEntries(
          Object.entries(htmlInput).map(item => {
            return [item[0], item[1].val()];
          })
        );

        const save = await saveBasicInformation(requestBody);

        if(save) {
          swal("Sukses!", "Data Informasi Dasar berhasil diupdate.", "success")
            .then(() => {
              const htmlTableBody = getInnerHTMLTableBody([
                {
                  name: "Nama",
                  value: htmlInput.name.val()
                },
                {
                  name: "Email",
                  value: htmlInput.email.val()
                },
                {
                  name: "Jenis Kelamin",
                  value: htmlInput.gender.val()
                },
                {
                  name: "Tanggal Lahir",
                  value: htmlInput.birthDate.val()
                }
              ]);
    
              $(".area-informasi-dasar")
                .find(".body-box-info table tbody")
                .html(htmlTableBody);
        
              modalBasicInformation.modal("hide");
            });
        } else {
          swal("Oops!", "Data Informasi Dasar gagal diupdate.", "warning");
        }
      }).catch(err => {
        swal("Oops!", err, "warning");
      });
    });  

    modalCurrentOccupation.on("click", ".submit-button", () => {
      const htmlInput = {
        id: modalCurrentOccupation.find("#pekerjaan-saat-ini-id-user"),
        job: modalCurrentOccupation.find("#jabatan-pekerjaan-saat-ini"),
        currentCompany: modalCurrentOccupation.find("#instansi-pekerjaan-saat-ini"),
        website: modalCurrentOccupation.find("#website-pekerjaan-saat-ini")
      };

      Promise.all(
        Object
          .values(htmlInput)
          .map(item => INPUT_VALIDATION(item))
      ).then(async () => {
        const requestBody = Object.fromEntries(
          Object.entries(htmlInput).map(item => {
            return [item[0], item[1].val()];
          })
        );

        const save = await saveCurrentOccupation(requestBody);

        if(save) {
          swal("Sukses!", "Data Pekerjaan Saat Ini berhasil diupdate", "success")
            .then(() => {
              const htmlTableBody = getInnerHTMLTableBody([
                {
                  name: "Jabatan",
                  value: htmlInput.job.val()
                },
                {
                  name: "Instansi",
                  value: htmlInput.currentCompany.val()
                },
                {
                  name: "Website",
                  value: htmlInput.website.val()
                }
              ]);

              $(".area-pekerjaan-saat-ini")
                .find(".body-box-info table tbody")
                .html(htmlTableBody);
        
              modalCurrentOccupation.modal("hide");
            });
        } else {
          swal("Oops!", "Data Pekerjaan Saat Ini gagal diupdate.", "warning");
        }
      }).catch(err => {
        swal("Oops!", err, "warning");
      });
    }); 

    modalEducation.on("click", ".submit-button", () => {
      const htmlInput = {
        id: modalEducation.find("#pendidikan-id-user"),
        degree: modalEducation.find("#tingkat-pendidikan"),
        university: modalEducation.find("#instansi-pendidikan"),
        major: modalEducation.find("#jurusan-pendidikan"),
        status: modalEducation.find("#status-pendidikan")
      };

      Promise.all(
        Object
          .values(htmlInput)
          .map(item => INPUT_VALIDATION(item))
      ).then(async () => {
        const requestBody = Object.fromEntries(
          Object.entries(htmlInput).map(item => {
            return [item[0], item[1].val()];
          })
        );

        const save = await saveEducation(requestBody);

        if(save) {
          swal("Sukses!", "Data Pendidikan berhasil diupdate.", "success")
            .then(() => {
              const htmlTableBody = getInnerHTMLTableBody([
                {
                  name: "Tingkat",
                  value: htmlInput.degree.val()
                },
                {
                  name: "Instansi",
                  value: htmlInput.university.val()
                },
                {
                  name: "Jurusan",
                  value: htmlInput.major.val()
                },
                {
                  name: "Status",
                  value: htmlInput.status.val()
                }
              ]);

              $(".area-pendidikan")
                .find(".body-box-info table tbody")
                .html(htmlTableBody);
        
              modalEducation.modal("hide");
            });
        } else {
          swal("Oops!", "Data Pendidikan gagal diupdate.", "warning");
        }
      }).catch(err => {
        swal("Oops!", err, "warning");
      });
    });

    modalAddress.on("click", ".submit-button", () => {
      const htmlInput = {
        id: modalAddress.find("#alamat-id-user"),
        province: modalAddress.find("#alamat-provinsi"),
        city: modalAddress.find("#alamat-kota"),
        street1: modalAddress.find("#alamat-nama-jalan-1"),
        street2: modalAddress.find("#alamat-nama-jalan-2"),
        zipCode: modalAddress.find("#alamat-kode-pos")
      };

      Promise.all(
        Object
          .values(htmlInput)
          .map(item => INPUT_VALIDATION(item))
      ).then(async () => {
        const requestBody = Object.fromEntries(
          Object.entries(htmlInput).map(item => {
            return [item[0], item[1].val()];
          })
        );

        const save = await saveAddress(requestBody);

        if(save) {
          swal("Sukses!", "Data Alamat berhasil diupdate", "success")
            .then(() => {
              const htmlTableBody = getInnerHTMLTableBody([
                {
                  name: "Provinsi",
                  value: htmlInput.province.val()
                },
                {
                  name: "Kota",
                  value: htmlInput.city.val()
                },
                {
                  name: "Nama Jalan 1",
                  value: htmlInput.street1.val()
                },
                {
                  name: "Nama Jalan 2",
                  value: htmlInput.street2.val()
                },
                {
                  name: "Kode Pos",
                  value: htmlInput.zipCode.val()
                }
              ]);
  
              $(".area-alamat")
                .find(".body-box-info table tbody")
                .html(htmlTableBody);
        
              modalAddress.modal("hide");
            });
        } else {
          swal("Oops!", "Data Alamat gagal diupdate.", "warning");
        }
      }).catch(err => {
        swal("Oops!", err, "warning");
      });
    });

    modalContact.on("click", ".submit-button", async () => {
      const htmlInput = {
        id: modalContact.find("#kontak-id-user"),
        phone: modalContact.find("#kontak-nomor-hp"),
        facebook: modalContact.find("#kontak-id-profil-facebook"),
        instagram: modalContact.find("#kontak-username-instagram"),
        linkedin: modalContact.find("#kontak-url-profil-linkedin")
      };

      Promise.all(
        Object
          .values(htmlInput)
          .map(item => INPUT_VALIDATION(item))
      ).then(async () => {
        const requestBody = Object.fromEntries(
          Object.entries(htmlInput).map(item => {
            return [item[0], item[1].val()];
          })
        );

        const save = await saveContact(requestBody);

        if(save) {
          swal("Sukses!", "Data Kontak berhasil diupdate.", "success")
            .then(() => {
              const htmlTableBody = getInnerHTMLTableBody([
                {
                  name: "Nomor HP",
                  value: htmlInput.phone.val()
                },
                {
                  name: "ID Profil Facebook",
                  value: htmlInput.facebook.val()
                },
                {
                  name: "Username Instagram",
                  value: htmlInput.instagram.val()
                },
                {
                  name: "URL Profil Linkedin",
                  value: htmlInput.linkedin.val()
                }
              ]);

              $(".area-kontak")
                .find(".body-box-info table tbody")
                .html(htmlTableBody);
        
              modalContact.modal("hide");
            });
        } else {
          swal("Oops!", "Data Kontak gagal diupdate.", "warning");
        }
      }).catch(err => {
        swal("Oops!", err, "warning");
      });
    });
  }
});