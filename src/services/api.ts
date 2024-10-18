import axios from 'axios';

const api = axios.create({
  baseURL: 'https://bitbucket.org/agrotis/teste-rh/raw/3bc797776e54586552d1c9666fd7c13366fc9548/teste-front-end-1',
});

export const fetchLaboratorios = () => api.get('/laboratorios.json');
export const fetchPropriedades = () => api.get('/propriedades.json');
