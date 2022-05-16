function send(){

    let email = document.getElementById('exampleInputEmail1').value
    let pass = document.getElementById('exampleInputPassword1').value

    localStorage.setItem('email', email)
    localStorage.setItem('pass', pass)

    window.open('display.html')
    function sdata() {
        let xhr = new XMLHttpRequest();
        let data = JSON.stringify(send());
        xhr.open("POST", "http://localhost:4000/storedata", true);
        xhr.setRequestHeader("Content-Type", "application/json");
        xhr.send(data);
        

    }

}