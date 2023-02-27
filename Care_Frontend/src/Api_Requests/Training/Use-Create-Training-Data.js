import baseUrl from '../../Api/baseURL'


export const UseCreateTrainingData  = async data => {
    const config = {
        headers: {
            
            token: localStorage.getItem("token")
        }
    }
    return await baseUrl.post(
      'training',data,config );
  };