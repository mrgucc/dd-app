import apiClient from './apiClient';

export function getAllClasses() {
  return new Promise((resolve, reject) => {
    apiClient({
      url: `/classes`,
    })
      .then((res) => {
        console.log(res.data);
        resolve(res.data);
      })
      .catch((err) => {
        reject(err);
      });
  });
}

export function getClass(cls) {
  return new Promise((resolve, reject) => {
    apiClient({
      url: `/classes/${cls}`,
    })
      .then((res) => {
        console.log(res.data);
        resolve(res.data);
      })
      .catch((err) => {
        reject(err);
      });
  });
}
