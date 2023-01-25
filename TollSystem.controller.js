import fetch from "node-fetch";

    const getVignette = async () => {
        const response = await fetch('localhost:8082/test?RegistrationNumber=asd');
        const myJson = await response.json(); //extract JSON from the http response
        console.log(myJson)
        // do something with myJson
    }

    getVignette()


