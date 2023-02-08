import baseUrl from '../../Api/baseURL'


export const UseCreateOral_CareData  = async data => {
    const config = {
        headers: {
            
            token: localStorage.getItem("token")
        }
    }
    return await baseUrl.post(
      'social-interests',data,config );
  };