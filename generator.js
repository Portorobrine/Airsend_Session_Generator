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
    getDevice(token);
}

async function getDevice(token) {
    const url = 'https://airsend.cloud/device';
    const params = {
        headers: {
            'accept': 'application/json'
        },
        method: 'GET'
    };
    const URL = url + '?session=' + token;
    try {
        const response = await fetch(URL, params);
        var devices = await response.json();
    } catch (e) {
        document.getElementById('device').innerHTML = 'Error: ' + e;
    }
    //create a tableau to display the devices
    var out = '<table><tr><th>Device Name</th><th>Device ID</th></tr>';
    for (var i = 0; i < devices.length; i++) {
        out += '<tr><td>' + devices[i].name + '</td><td>' + devices[i].id + '</td></tr>';
    }
    out += '</table>';
    document.getElementById('devices').innerHTML = out;
}