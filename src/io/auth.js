import Config from "../config"

export default class Auth {

    static checkEmail = async (email) => {
        const url = (email === "abc@gmail.com") ? `${Config.API_URL}/v2/5d99d9313100005d0097d9ed` : `${Config.API_URL}/v2/5d99d8ff3100006b1397d9eb`;
        console.log(url);
        const response = await fetch(url, {
            method: 'GET'
        });
        const responseJson = await response.json();
        return responseJson;
    }

}