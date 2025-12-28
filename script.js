function generate(length, includeupper, includelower, includenum, includespecial) {

    const lowercase = "abcdefghijklmnopqrstuvwxyz";
    const uppercase = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
    const num = "0123456789";
    const special = "!@#$%^&*()?";

    let allowedpas = "";
    let password = "";

    if (includelower) allowedpas += lowercase;
    if (includeupper) allowedpas += uppercase;
    if (includespecial) allowedpas += special;
    if (includenum) allowedpas += num;
    

    for (let i = 0; i < length; i++) {
        let index = Math.floor(Math.random() * allowedpas.length);
        password += allowedpas[index];
    }

    return password;
}

function generatepassword(){
    const pass=generate(12,true,true,true,true);
    document.getElementById("output").textContent=pass;
}


