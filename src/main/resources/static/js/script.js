const API_URI = "http://116.254.101.228:8080/ma_test";

const CURRENT_PATHNAME = $(location).attr("pathname");

const AXIOS_POST = async (baseURL, data) => {
  try {
    const request = await axios({
      method: "POST",
      baseURL,
      data
    });
  
    const response = request.data;
    return response;
  } catch (e) {
    return false;
  }
};

$(function() {
  if(CURRENT_PATHNAME === "/") {
    const saveBasicInformation = data => {
      return AXIOS_POST(`${API_URI}/profile/basic`, data);
    };

    const saveCurrentOccupation = data => {
      return AXIOS_POST(`${API_URI}/profile/currentoccupation`, data);
    };

    const saveEducation = data => {
      return AXIOS_POST(`${API_URI}/profile/education`, data);
    };

    const saveAddress = data => {
      return AXIOS_POST(`${API_URI}/profile/address`, data);
    };

    const saveContact = data => {
      return AXIOS_POST(`${API_URI}/profile/contact`, data);
    };

    const getInnerHTMLTableBody = data => {
      let html = "";

      data.forEach(item => {
        html += "<tr>";
        html += `<td class="field-name">${item.name}</td>`;
        html += `<td class="field-value">${item.value}</td>`;
        html += "</tr>";
      });

      return html;
    };

    const areaInformasiDasar = $(".area-informasi-dasar");

    const areaPekerjaanSaatIni = $(".area-pekerjaan-saat-ini");

    const areaPendidikan = $(".area-pendidikan");

    const areaAlamat = $(".area-alamat");

    const areaKontak = $(".area-kontak");

    const modalBasicInformation = $("#modal-informasi-dasar");

    const modalCurrentOccupation = $("#modal-pekerjaan-saat-ini");

    const modalEducation = $("#modal-pendidikan");

    const modalAddress = $("#modal-alamat");

    const modalContact = $("#modal-kontak");
    
    console.log($("#modal-kontak"));

    modalBasicInformation.on("click", ".submit-button", async () => {
      const data = {
        id: modalBasicInformation.find("#informasi-dasar-id-user").val(),
        name: modalBasicInformation.find("#informasi-dasar-nama").val(),
        email: modalBasicInformation.find("#informasi-dasar-email").val(),
        gender: modalBasicInformation.find("#informasi-dasar-jenis-kelamin").val(),
        birthDate: modalBasicInformation.find("#informasi-dasar-tanggal-lahir").val()
      };

      const save = await saveBasicInformation(data);

      if(save) {
        swal("Sukses!", "Data Informasi Dasar berhasil diupdate.", "success")
          .then(() => {
            const html = getInnerHTMLTableBody([
              {
                name: "Nama",
                value: data.name
              },
              {
                name: "Email",
                value: data.email
              },
              {
                name: "Jenis Kelamin",
                value: data.gender
              },
              {
                name: "Tanggal Lahir",
                value: data.birthDate
              }
            ]);
  
            areaInformasiDasar
              .find(".body-box-info table tbody")
              .html(html);
      
            modalBasicInformation.modal("hide");
          });
      } else {
        swal("Oops!", "Data Informasi Dasar gagal diupdate.", "warning");
      }
    });  

    modalCurrentOccupation.on("click", ".submit-button", async () => {
      const data = {
        id: modalCurrentOccupation.find("#pekerjaan-saat-ini-id-user").val(),
        job: modalCurrentOccupation.find("#jabatan-pekerjaan-saat-ini").val(),
        currentCompany: modalCurrentOccupation.find("#instansi-pekerjaan-saat-ini").val(),
        website: modalCurrentOccupation.find("#website-pekerjaan-saat-ini").val()
      };

      const save = await saveCurrentOccupation(data);

      if(save) {
        swal("Sukses!", "Data Pekerjaan Saat Ini berhasil diupdate", "success")
          .then(() => {
            const html = getInnerHTMLTableBody([
              {
                name: "Jabatan",
                value: data.job
              },
              {
                name: "Instansi",
                value: data.currentCompany
              },
              {
                name: "Website",
                value: data.website
              }
            ]);

            areaPekerjaanSaatIni
              .find(".body-box-info table tbody")
              .html(html);
      
            modalCurrentOccupation.modal("hide");
          });
      } else {
        swal("Oops!", "Data Pekerjaan Saat Ini gagal diupdate.", "warning");
      }
    }); 

    modalEducation.on("click", ".submit-button", async () => {
      const data = {
        id: modalEducation.find("#pendidikan-id-user").val(),
        degree: modalEducation.find("#tingkat-pendidikan").val(),
        university: modalEducation.find("#instansi-pendidikan").val(),
        major: modalEducation.find("#jurusan-pendidikan").val(),
        status: modalEducation.find("#status-pendidikan").val()
      };

      const save = await saveEducation(data);

      if(save) {
        swal("Sukses!", "Data Pendidikan berhasil diupdate.", "success")
          .then(() => {
            const html = getInnerHTMLTableBody([
              {
                name: "Tingkat",
                value: data.degree
              },
              {
                name: "Instansi",
                value: data.university
              },
              {
                name: "Jurusan",
                value: data.major
              },
              {
                name: "Status",
                value: data.status
              }
            ]);

            areaPendidikan
              .find(".body-box-info table tbody")
              .html(html);
      
            modalEducation.modal("hide");
          });
      } else {
        swal("Oops!", "Data Pendidikan gagal diupdate.", "warning");
      }
    });

    modalAddress.on("click", ".submit-button", async () => {
      const data = {
        id: modalAddress.find("#alamat-id-user").val(),
        province: modalAddress.find("#alamat-provinsi").val(),
        city: modalAddress.find("#alamat-kota").val(),
        street1: modalAddress.find("#alamat-nama-jalan-1").val(),
        street2: modalAddress.find("#alamat-nama-jalan-2").val(),
        zipCode: modalAddress.find("#alamat-kode-pos").val()
      };

      const save = await saveAddress(data);

      if(save) {
        swal("Sukses!", "Data Alamat berhasil diupdate", "success")
          .then(() => {
            const html = getInnerHTMLTableBody([
              {
                name: "Provinsi",
                value: data.province
              },
              {
                name: "Kota",
                value: data.city
              },
              {
                name: "Nama Jalan 1",
                value: data.street1
              },
              {
                name: "Nama Jalan 2",
                value: data.street2
              },
              {
                name: "Kode Pos",
                value: data.zipCode
              }
            ]);

            areaAlamat
              .find(".body-box-info table tbody")
              .html(html);
      
            modalAddress.modal("hide");
          });
      } else {
        swal("Oops!", "Data Alamat gagal diupdate.", "warning");
      }
    });

    modalContact.on("click", ".submit-button", async () => {
      const data = {
        id: modalContact.find("#kontak-id-user").val(),
        phone: modalContact.find("#kontak-nomor-hp").val(),
        facebook: modalContact.find("#kontak-id-profil-facebook").val(),
        instagram: modalContact.find("#kontak-username-instagram").val(),
        linkedin: modalContact.find("#kontak-url-profil-linkedin").val()
      };

      const save = await saveContact(data);

      if(save) {
        swal("Sukses!", "Data Kontak berhasil diupdate.", "success")
          .then(() => {
            const html = getInnerHTMLTableBody([
              {
                name: "Nomor HP",
                value: data.phone
              },
              {
                name: "ID Profil Facebook",
                value: data.facebook
              },
              {
                name: "Username Instagram",
                value: data.instagram
              },
              {
                name: "URL Profil Linkedin",
                value: data.linkedin
              }
            ]);

            areaKontak
              .find(".body-box-info table tbody")
              .html(html);
      
            modalContact.modal("hide");
          });
      } else {
        swal("Oops!", "Data Kontak gagal diupdate.", "warning");
      }
    });
  }
});