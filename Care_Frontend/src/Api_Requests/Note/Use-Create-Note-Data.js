import baseUrl from '../../Api/baseURL'


export const UseCreateNoteData  = async data => {
    const config = {
        headers: {
            
            token: localStorage.getItem("token")
        }
    }
    return await baseUrl.post(
      'note/create',data,config );
  };