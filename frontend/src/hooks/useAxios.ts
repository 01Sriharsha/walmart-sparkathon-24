import { useCallback, useState } from "react";
import { AxiosError, AxiosRequestConfig } from "axios";

import axios from "@/lib/axios";

export const useAxios = () => {
  const [loading, setLoading] = useState(false);

  const fetch = useCallback(async <T>(endpoint: string) => {
    let data: T | null = null;
    let error: string = "";
    try {
      setLoading(true);
      const res = await axios.get<T>(endpoint);
      data = res.data;
    } catch (err: any) {
      console.log(err);
      if (err instanceof AxiosError) {
        error = err.response?.data?.message || "Something went wrong";
      }
    } finally {
      setLoading(false);
    }

    return { data, error };
  }, []);

  const mutate = useCallback(
    async <T>(
      method: "put" | "post" | "delete",
      endpoint: string,
      body?: any,
      config?: AxiosRequestConfig
    ) => {
      let data: T | null = null;
      let error: string = "";
      try {
        setLoading(true);
        const res = await axios[method]<T>(endpoint, body, config);
        data = res.data;
        console.log("data" , data);
        
      } catch (err: any) {
        console.log(err);
        if (err instanceof AxiosError) {
          error = err.response?.data?.message || "Something went wrong";
        }
      } finally {
        setLoading(false);
      }

      return { data, error };
    },
    []
  );

  return { loading, fetch, mutate };
};