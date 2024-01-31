export const setDatos = (data) => {
  localStorage.setItem('bankData', JSON.stringify(data));
};

export const getDatos = () => {
  const datos = localStorage.getItem('bankData');
  return datos ? JSON.parse(datos) : null;
};
