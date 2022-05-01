import axios from "axios";

export const addressURL = '//transportadora-pedido.herokuapp.com/address/';

export const UrlGetCode =
  '//transportadora-pedido.herokuapp.com/address/codetracking/';

export const cadastroForm = axios.create({
    baseURL: `https://api-rest-transportadora.herokuapp.com`
})
