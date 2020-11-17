const API_URI = "http://116.254.101.228:8080/ma_test";

async function AXIOS_POST(baseURL, data) {
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
}

function saveBasicInformation(data) {
  return AXIOS_POST(`${API_URI}/profile/basic`, data);
}

function saveCurrentOccupation(data) {
  return AXIOS_POST(`${API_URI}/profile/currentoccupation`, data);
}

function saveEducation(data) {
  return AXIOS_POST(`${API_URI}/profile/education`, data);
}

function saveAddress(data) {
  return AXIOS_POST(`${API_URI}/profile/address`, data);
}

function saveContact(data) {
  return AXIOS_POST(`${API_URI}/profile/contact`, data);
}

function saveUserRegistration(data) {
  return AXIOS_POST(`${API_URI}/register`, data);
}