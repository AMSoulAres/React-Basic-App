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
            console.log(err);
        }
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