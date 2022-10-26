async function generate() {
    const url = 'https://airsend.cloud/interface/login';

    const ip = document.getElementById('ip').value.replace(/ /g, '').replace(/:/g, '%3A');
    const password = document.getElementById('password').value;
    
    const URL = url + '?localip=' + ip + '&password=' + password;
    const params = {
        headers: {

            'accept': 'application/json',

        },

        method: 'GET'
    };
    try {
        const response = await fetch(URL, params);
        var token = await response.json();
        token = token.session;
    } catch (e) {
        document.getElementById('token').innerHTML = 'Error: ' + e ;
    }
    document.getElementById('token').innerHTML = token;
}