window.addEventListener("load", digitalclock)


function digitalclock() {

    var date = new Date();
    const daynumber = date.getDay();
    let hournumber = date.getHours();
    let minutenumber = date.getMinutes();
    const AmPm = hournumber >= 12 ? "PM" : "Am"
    const daynames = ["shanbe", "YekShanbe", "DoShanbe", "SeShanbe", "ChaharShanbe", "PanjShanbe", "Jome"]

    hournumber = hournumber % 12

    hournumber = hournumber ? hournumber : "12"

    hournumber = hournumber < 10 ? "0" + hournumber : hournumber
    minutenumber = minutenumber < 10 ? "0" + minutenumber : minutenumber

    document.getElementById("day").innerHTML = daynames[daynumber + 1]
    document.getElementById("hour").innerHTML = hournumber
    document.getElementById("minute").innerHTML = minutenumber
    document.getElementById("ampm").innerHTML = AmPm


    setTimeout(digitalclock, 200)
}