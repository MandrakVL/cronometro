let msgText = document.getElementById("msgTexto");
let msg = document.getElementById("msg");
let sec = 0;
let min = 0;
let hr = 0;
let milisegundos = 0;
let interval;
let intervalmiliseg;

function bIniciar() {
    interval = setInterval(tempoC, 1000);
    intervalmiliseg = setInterval(milisegundo, 10)

    msg.classList.remove("dsp-n");
    msg.classList.add("dsp-b");
    msgText.innerHTML = "O conometro iníciou!";

    setTimeout(function() {
        msgText.innerHTML = "";
        msg.classList.remove("dsp-b");
        msg.classList.add("dsp-n");
    }, 4000)
}


function bPausar() {
    clearInterval(interval);
    clearInterval(intervalmiliseg)

    if (hr == 0 && min == 0 && sec == 0) {
        alert("Não tem como pausar!")
    } else {
        msg.classList.remove("dsp-n");
        msg.classList.add("dsp-b");
        msgText.innerHTML = "O conometro pausou!";
        
        setTimeout(function() {
            msgText.innerHTML = "";
            msg.classList.remove("dsp-b");
            msg.classList.add("dsp-n");
        }, 4000)
    }
}

function bParar() {
    sec = 0;
    min = 0;
    hr = 0;
    document.getElementById("temp").innerHTML = "00:00:00"
    document.getElementById("miliseg").innerHTML = "00"
    clearInterval(interval);
    clearInterval(intervalmiliseg)

    msg.classList.remove("dsp-n");
    msg.classList.add("dsp-b");
    msgText.innerHTML = "O conometro parou!";
    
    setTimeout(function() {
        msgText.innerHTML = "";
        msg.classList.remove("dsp-b");
        msg.classList.add("dsp-n");
    }, 4000)
}

function adicionarDigitoZero(digito) {
    if(digito < 10) {
        return("0"+digito);
    } else {
        return digito;
    }
}

function tempoC() {
    sec++
    if(sec == 60) {
        min++
        sec = 0;
        if (min == 60) {
            hr++
            min = 0;
        }
    }

    document.getElementById("temp").innerHTML = adicionarDigitoZero(hr) + ':' + adicionarDigitoZero(min) + ':' + adicionarDigitoZero(sec);
}

function milisegundo() {
    milisegundos++

    if(milisegundos == 100) {
        milisegundos = 0;
    }

    document.getElementById("miliseg").innerHTML = adicionarDigitoZero(milisegundos);
}