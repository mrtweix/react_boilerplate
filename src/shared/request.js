/*
 * global promise fetch function
 */
function parseTEXT(response) {
  if (response === null || response === "") {
    return null;
  }
  return JSON.parse(response);
}

function parseJSON(response) {
  if (response.status === 204 || response.status === 205) {
    return null;
  }
  return response.text();
}

function checkStatus(response) {
  if (response.status >= 200 && response.status < 300) {
    return response;
  } else if (!response.ok) {
    throw Error(response.statusText);
  }
  const error = new Error(response.statusText);
  error.response = response;
  throw error;
}

const request = async (url, options) => {
  const header = {
    "Content-Type": "application/json",
    accept: "application/json",
  };
  const newOptions = { ...options, headers: header };
  return await fetch(url, newOptions)
    .then(checkStatus)
    .then(parseJSON)
    .then(parseTEXT);
};

export default request;
