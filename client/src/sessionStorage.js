export const saveState = state => {
  try {
    const serializedState = JSON.stringify(state);
    sessionStorage.setItem('state', serializedState);
  } catch (error) {
    console.log(error)
  }
}

export const storeAuthToken = token => {
  try {
    sessionStorage.setItem('authToken', token);
  } catch (error) {
    console.log(error)
  }
}

export const getAuthToken = () => {
  try {
    const token = sessionStorage.getItem('authToken');
    if (token === '') {
      return undefined;
    }
    return token
  } catch (err) {
    return undefined;
  }
}

export const loadState = () => {
  try {
    const serializedState = sessionStorage.getItem('state');
    if (serializedState === null) {
      return undefined;
    }
    return JSON.parse(serializedState);
  } catch (err) {
    return undefined;
  }
};

export const deleteState = () => {
  sessionStorage.removeItem('state');
  return undefined
}