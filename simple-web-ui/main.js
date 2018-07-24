console.log('-im main.js-');
//----------------------------------------------------------------------
// using DOM API
let greetBox = document.getElementById('greet-box');
let greetBtns = document.getElementsByTagName('button');
let [gmBtn, gnBtn, geBtn] = greetBtns;
let changeMessage = e => {
    let id = e.target.id;
    switch (id) {
        case 'gm':
            greetBox.innerText = "good morning";
            break;
        case 'gn':
            greetBox.innerText = "good noon";
            break;
        case 'ge':
            greetBox.innerText = "good eveinin";
            break;
    }
};
gmBtn.addEventListener('click', changeMessage)
gnBtn.addEventListener('click', changeMessage)
geBtn.addEventListener('click', changeMessage)
//----------------------------------------------------------------------


// Timer API
let startBtn = document.getElementById('startBtn');
let stopBtn = document.getElementById('stopBtn');
stopBtn.setAttribute('disabled', true);
let timeSpan = document.getElementById('time-span');
timeSpan.innerText = new Date().toLocaleTimeString()

let interval;

startBtn.addEventListener('click', e => {
    interval = setInterval(e => {
        let timeNow = new Date().toLocaleTimeString();
        timeSpan.innerText = timeNow;
    }, 1000);
    startBtn.setAttribute('disabled', true);
    stopBtn.removeAttribute('disabled');
});

stopBtn.addEventListener('click', e => {
    if (interval) {
        clearInterval(interval);
        startBtn.removeAttribute('disabled');
        stopBtn.setAttribute('disabled', true);
    }
});
//----------------------------------------------------------------------

// XHR API / Fetch API

let loadUsersBtn = document.getElementById('loadUsersBtn');
let usersTable = document.getElementById('users-table');
loadUsersBtn.addEventListener('click', e => {
    console.log('loading users..');
    let apiUrl = "https://jsonplaceholder.typicode.com/users?_limit=2";
    let promise = fetch(apiUrl);
    promise
        .then(response => response.json())
        .then(users => {
            let rows = [];
            users.forEach(user => {
                let row = `
                    <tr>
                        <td>${user.id}</td>
                        <td>${user.username}</td>
                        <td>${user.name}</td>
                        <td>${user.email}</td>
                        <td>${user.phone}</td>
                    </tr>
                `;
                rows.push(row);
            })
            usersTable.innerHTML = rows.join(" ");
        })
        ;
});