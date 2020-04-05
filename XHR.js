const requestURL = 'http://localhost:3000/posts'

function sendRequest(method, url, body = null) {
    return new Promise((resolve, reject) =>{
        const xhr = new XMLHttpRequest()
        xhr.open(method, url)
        xhr.responseType = 'json'
        xhr.setRequestHeader('Content-Type', 'application/json')
        xhr.onload = () => {
        if (xhr.status >= 400) {
            reject(xhr.response)
        } else {
            resolve(xhr.response)
        }
    }

    xhr.onerror = () => {
        reject(xhr.response)
    }

    xhr.send(JSON.stringify(body))
    })
}

//sendRequest('GET', requestURL)     ----method get
//    .then(data => console.log(data))

const body = {
    nickname: "POST XHR",
    message: "Add message from XHR.js",
    time: "112000"
}

sendRequest('POST', requestURL, body)
    .then(data => console.log(data))

