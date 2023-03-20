export default class Request {
    static async getAllProducts() {
        try {
            const res = await fetch(`http://10.0.2.2:3000/profile`, {
                method: "GET",
                headers: {
                    "content-type": "application/json",
                },
            });
            return res.json();
        } catch (err) {
            console.log('As informações não puderam ser carregadas');
        }
        
    }

    static async fetchWithTimeout(options: {timeout: number}){
        const {timeout = 10000} = options

        const controller = new AbortController();
        const id = setTimeout(()=> controller.abort(), timeout);

        const res = await fetch(`http://10.0.2.2:3000/profile`, {
            method: "GET",
            headers: {
                "content-type": "application/json",
            },
            ...options,
            signal: controller.signal
        });
        clearTimeout(id);

        return res.json()
    }

    static getList() {
        return fetch('http://10.0.2.2:3000/profile')
        .then((response) => response.json())
        .then((responseJson) => {
            console.log(responseJson);
            return responseJson;
        })
        .catch((error) => {
            console.error(error);
        });
      }
}