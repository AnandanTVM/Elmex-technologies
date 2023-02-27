import { axiosHomeInstance } from '../axios';
export const addEmployee = async (value) => {
    try {
      const config = {
        headers: {
            Accept: 'application/json',
            'Content-Type': 'application/json',
        },
      };
      const { data } = await axiosHomeInstance.post(
        '/add',
        value,
        config
      );console.log(data);
      return data;
      
    } catch (error) {
      return error;
    }
  };