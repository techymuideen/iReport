import axios from 'axios';
import { PAGE_SIZE } from '../utils/constants';

export const createReport = async ({ payload }) => {
  const token = localStorage.getItem('token');

  const { response, error } = await axios.post(
    `${import.meta.env.VITE_API_URL}/api/v1/reports`,
    payload,
    {
      headers: {
        Authorization: `Bearer ${token}`,
        'Content-Type': 'multipart/form-data',
      },
    },
  );

  if (error) throw new Error(error.message);

  return response;
};

export const getAllReport = async ({ page, filter1, filter2 }) => {
  const token = localStorage.getItem('token');

  let query = `${import.meta.env.VITE_API_URL}/api/v1/reports?`;

  if (page) query = `${query}page=${page}&limit=${PAGE_SIZE}&`;

  if (filter1) query = `${query}${filter1.field}=${filter1.value}&`;

  if (filter2) query = `${query}${filter2.field}=${filter2.value}`;

  const { data, error } = await axios.get(`${query}`, {
    headers: {
      Authorization: `Bearer ${token}`,
    },
  });

  if (error) throw new Error(error.message);

  return { data: data.data.reports, count: data.data.count };
};

export const getReport = async (reportId) => {
  const token = localStorage.getItem('token');

  const { data, error } = await axios.get(
    `${import.meta.env.VITE_API_URL}/api/v1/reports/${reportId}`,
    {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    },
  );

  if (error) throw new Error(error.message);

  return data.data.data;
};

export const updateReport = async ({ reportId, payload }) => {
  const token = localStorage.getItem('token');

  const { response, error } = await axios.patch(
    `${import.meta.env.VITE_API_URL}/api/v1/reports/${reportId}`,
    payload,
    {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    },
  );

  if (error) throw new Error(error.message);

  return response;
};

export const deleteReport = async (reportId) => {
  const token = localStorage.getItem('token');

  const { response, error } = await axios.delete(
    `${import.meta.env.VITE_API_URL}/api/v1/reports/${reportId}`,
    {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    },
  );

  if (error) throw new Error(error.message);

  return response;
};
