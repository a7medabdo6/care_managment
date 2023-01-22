import baseUrl from '../Api/baseURL'


const useInsertData  = async data => {
    
    return await baseUrl.post(
      'users/signin/',data );
  };




  
export { useInsertData};