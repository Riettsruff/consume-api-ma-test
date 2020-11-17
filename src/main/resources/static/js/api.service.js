const API_URI = "http://116.254.101.228:8080/ma_test";

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