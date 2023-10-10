const request = require('request');

const options = {
    method: 'GET',
    url: 'https://ecm.coopculture.it/index.php',
    qs: {
        "option":"com_snapp",
        "task":"event.getperformancelist",
        "format":"raw","id":"3793660E-5E3F-9172-2F89-016CB3FAD609",
        "type":"1",
        "date_req":"8/11/2023",
        "dispoonly":"1",
        "lang":"it",
        "_":"1696903171213"
    },
    headers: {
        "authority": "ecm.coopculture.it",
        "accept": "text/html, */*; q=0.01",
        "accept-language": "it-IT,it;q=0.9,en-US;q=0.8,en;q=0.7",
        "referer": "https://ecm.coopculture.it/index.php?option=com_snapp&view=event&id=3793660E-5E3F-9172-2F89-016CB3FAD609&catalogid=B79E95CA-090E-FDA8-2364-017448FF0FA0&lang=it",
        "sec-ch-ua": '"Google Chrome";v="117", "Not;A=Brand";v="8", "Chromium";v="117"',
        "sec-ch-ua-mobile": "?0",
        "sec-ch-ua-platform": "\"macOS\"",
        "sec-fetch-dest": "empty",
        "sec-fetch-mode": "cors",
        "sec-fetch-site": "same-origin",
        "user-agent": "Mozilla/5.0 (Macintosh; Intel Mac OS X 10_15_7) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/117.0.0.0 Safari/537.36",
        "x-requested-with": "XMLHttpRequest"
    }
};

request(options, function (error, response, body) {
    if (error) throw new Error(error);

    console.log(body);
});
