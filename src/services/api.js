import axios from "axios";

export default class BancoService {

    obtenerBancos() {
        let buscarBanco = "https://dev.obtenmas.com/catom/api/challenge/banks";
        return axios.get(buscarBanco).then(response => response.data);
    }
}