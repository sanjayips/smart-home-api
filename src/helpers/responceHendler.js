export const SUCCESS = 200;
export const INVELID_JSON = 400;

export const successResponseHandle = (data, message) => {
  return {
    isSuccess: true,
    status: SUCCESS,
    data,
    message: message ? message : 'Action perform success',
  };
};

export const errorResponseHandle = (error, code) => {
  return {
    isSuccess: false,
    status: code,
    error,
  };
};
