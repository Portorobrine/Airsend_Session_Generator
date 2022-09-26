import fetch from 'node-fetch';


console.log('Hello World!');
console.info(generate('fe80::dcf6:e5ff:fe65:d99a', 'BJMsT56W9gNPCRn9'));

function generate(ip, password) {
    const url = 'https://airsend.cloud/interface/login';

    const params = {
        headers: {
            'accept': 'application/json',
            'Content-Type': 'application/x-www-form-urlencoded'
        },
        body: {
            'localip': ip,
            'password': password
        },
        method: 'POST'
    };

    var token = fetch(url, params);



    return token;
}

