import { HEADERS } from "../../service/UrlUtils";
import { QueryClient } from "@tanstack/react-query";
import { BASE_URL } from "../../service/UrlUtils";
export   const queryClient=new QueryClient();
export async function fetchEvents() {
    try {
      const response = await fetch(`${BASE_URL}/api/categories/user`, HEADERS());
  
      if (!response.ok) {
        const error = new Error('An error has occurred while fetching data.');
        error.code = response.status;
        error.info = await response.json();
        console.error(error);
        throw error;
      }
  
      const data = await response.json(); // Parse the response as JSON
      console.log(data);
      return data;
    } catch (error) {
      console.error('Error:', error);
      throw error;
    }
  }

export async function fetchNotification() {
    try {
      const response = await fetch(`${BASE_URL}/api/categories/report`,HEADERS());
  
      if (!response.ok) {
        const error = new Error('An error has occurred while fetching data.');
        error.code = response.status;
        error.info = await response.json();
        console.error(error);
        throw error;
      }
  
      const data = await response.json(); // Parse the response as JSON
      return data;
    } catch (error) {
      console.error('Error:', error);
      throw error;
    }
  }
  