export const excerpt = (str, maxLength = 70) => {
  if (str?.length >= maxLength) {
    return str.substr(0, maxLength) + "...";
  }
  return str;
};

export const createAction = (type, payload) => ({ type, payload });
