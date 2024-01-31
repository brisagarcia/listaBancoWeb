import axios from "axios";

export default class BancoService {

    obtenerBancos() {
        let buscarBanco = "https://bast.dev/api/banks.php";
        return axios.get(buscarBanco).then(response => response.data);
    }
}