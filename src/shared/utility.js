export const updateObject = (oldObject, updateProperties) => {
  return {
    ...oldObject,
    ...updateProperties
  };
};

export const checkValidity = ( value, rules ) => {
  let isValid = true;

  if ( rules.required ) {
    isValid = value.trim() !== '' && isValid;
  }

  if ( rules.minLength ) {
    isValid = value.length >= rules.minLength && isValid;
  }

  if ( rules.maxLength ) {
    isValid = value.length <= rules.maxLength && isValid;
  }

   if ( rules.isEmail ) {
    const emailRegex = /^(([^<>()\[\]\.,;:\s@\"]+(\.[^<>()\[\]\.,;:\s@\"]+)*)|(\".+\"))@(([^<>()[\]\.,;:\s@\"]+\.)+[^<>()[\]\.,;:\s@\"]{2,})$/i;
    isValid = emailRegex.test(value);
  }

  return isValid;
}
