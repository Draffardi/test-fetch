const requestURL = 'http://localhost:3000/posts'

function sendRequest(method, url, body = null) {
    const headers = {
        'Content-Type': 'application/json'
    }

    return fetch(url, {
        method: method,
        body: JSON.stringify(body),
        headers: headers
    }).then(response => {
        if (response.ok) {
            return response.json()
        }

        return response.json().then(error => {
            const e = new Error('Error, something wrong')
            e.data = error
            throw e
        })
    })
}

sendRequest('GET', requestURL)
    .then(data => console.log(data))

const body = {
   nickname: "POST FETCH",
   message: "Add message from fetch.js",
   time: "889000"
}

sendRequest('POST', requestURL, body)
    .then(data => console.log(data))
