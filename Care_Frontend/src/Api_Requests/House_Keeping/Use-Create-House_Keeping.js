import baseUrl from '../../Api/baseURL'


export const UseCreateHouseKeepinData  = async data => {
    const config = {
        headers: {
            
            token: localStorage.getItem("token")
        }
    }
    return await baseUrl.post(
      'house-keeping',data,config );
  };