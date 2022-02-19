setInterval(() => {
    let d = new Date();
    h = d.getHours();
    m= d.getMinutes();
    s = d.getSeconds();
    hRotation = 30*h+m/2;
    mRotation = 6*m;
    sRotation = 6*s;
    hr.style.transform = `rotate(${hRotation}deg)`
    min.style.transform = `rotate(${mRotation}deg)`
    sec.style.transform = `rotate(${sRotation}deg)`
    document.getElementById('time').innerHTML= `<span style="font-family: Georgia, 'Times New Roman', Times, serif;" class="text-success">Local Time : </span>${d.toLocaleTimeString()}`;
}, 100);