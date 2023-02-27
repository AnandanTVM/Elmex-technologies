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
      );
      return data;
      
    } catch (error) {
      return error;
    }
  };
export const getAllEmploye = async () => {
    try {
      const config = {
        headers: {
            Accept: 'application/json',
            'Content-Type': 'application/json',
        },
      };
      const { data } = await axiosHomeInstance.get(
        '/getAllEmploye',
        config
      );
      return data;
      
    } catch (error) {
      return error;
    }
  };
export const getAllEmployeById = async (Id) => {
    try {
      const config = {
        headers: {
            Accept: 'application/json',
            'Content-Type': 'application/json',
        },
      };
      const { data } = await axiosHomeInstance.get(
        `/getEmploye/${Id}`,
        config
      );console.log(data);
      return data;
      
    } catch (error) {
      return error;
    }
  };