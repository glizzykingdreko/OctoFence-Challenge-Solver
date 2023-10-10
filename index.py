from tls_client import Session
from bs4 import BeautifulSoup
from subprocess import check_output
from json import loads
from os import remove
from time import sleep
session = Session("chrome_112")

# Join the website, will get 
url = "https://ecm.coopculture.it/index.php"
payload = ""
headers = {
    "Host": "ecm.coopculture.it",
    "cache-control": "max-age=0",
    "sec-ch-ua": '"Google Chrome";v="117", "Not;A=Brand";v="8", "Chromium";v="117"',
    "sec-ch-ua-mobile": "?0",
    "sec-ch-ua-platform": "\"macOS\"",
    "upgrade-insecure-requests": "1",
    "user-agent": "Mozilla/5.0 (Macintosh; Intel Mac OS X 10_15_7) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/117.0.0.0 Safari/537.36",
    "accept": "text/html,application/xhtml+xml,application/xml;q=0.9,image/avif,image/webp,image/apng,*/*;q=0.8,application/signed-exchange;v=b3;q=0.7",
    "sec-fetch-site": "same-origin",
    "sec-fetch-mode": "navigate",
    "sec-fetch-dest": "document",
    "referer": "https://ecm.coopculture.it/index.php",
    "accept-language": "en-GB,en;q=0.9"
}
response = session.get(url, data=payload, headers=headers)

# as header 'X-Octofence-Js-Function': 'captcha'
print(f"Status {response.headers.get('X-Octofence-Js-Function')=}")

# Parse the js script and solve the "challenge"
script = BeautifulSoup(response.text, "html.parser").find("body").find("script").text
open("script.tmp.js", "w").write(script)
res = check_output(["node", "solver/main.js", "./script.tmp.js"])
remove("script.tmp.js")

# Set cookies
for name, value in loads(res.decode("utf-8")).items():
    print(f"Setted {name} to {value}")
    session.cookies.set(name, value)

# Resend the original request and we good to go
response = session.get(url, data=payload, headers=headers, allow_redirects=True)
print(f"Status {response.headers.get('X-Octofence-Js-Function')=}")