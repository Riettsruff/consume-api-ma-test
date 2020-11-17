const API_URI = "http://116.254.101.228:8080/ma_test";

async function AXIOS_CUSTOM(method, baseURL, data = null) {
  const request = await axios({
    method,
    baseURL,
    data
  });

  const response = request.data;
  return response;
}

function saveBasicInformation(data) {
  return AXIOS_CUSTOM("POST", `${API_URI}/profile/basic`, data);
}

function saveCurrentOccupation(data) {
  return AXIOS_CUSTOM("POST", `${API_URI}/profile/currentoccupation`, data);
}

function saveEducation(data) {
  return AXIOS_CUSTOM("POST", `${API_URI}/profile/education`, data);
}

function saveAddress(data) {
  return AXIOS_CUSTOM("POST", `${API_URI}/profile/address`, data);
}

function saveContact(data) {
  return AXIOS_CUSTOM("POST", `${API_URI}/profile/contact`, data);
}

function saveUserRegistration(data) {
  return AXIOS_CUSTOM("POST", `${API_URI}/register`, data);
}

function forgotPassword(email) {
  return AXIOS_CUSTOM("GET", `${API_URI}/forgotpassword/${email}`);
}

function resetPassword(data) {
  return AXIOS_CUSTOM("PUT", `${API_URI}/forgotpassword/${data.verificationCode}`, { password: data.password });
}