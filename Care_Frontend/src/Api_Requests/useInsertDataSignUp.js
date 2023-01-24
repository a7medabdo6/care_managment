
import baseUrl from '../Api/baseURL'


export const useInsertDataSignUp  = async data => {
    
    return await baseUrl.post(
      'users/signup',data );
  };