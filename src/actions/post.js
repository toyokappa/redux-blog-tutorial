export function requestPost(entryId) {
  return {
    type: "REQUEST_POST",
    payload: entryId
  };
}

export function successPost(payload) {
  return {
    type: "SUCCESS_POST",
    payload: payload
  };
}

export function failurePost(error) {
  return {
    type: "FAILURE_POST",
    error: error
  };
}
