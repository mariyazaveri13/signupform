const cnfPwd = document.getElementById('confirmPwd');
const pwd = document.getElementById('password');
const warn = document.getElementById('warn');
cnfPwd.onkeyup = (e) => {
    if(pwd.value && e.target.value != pwd.value){
        cnfPwd.className = " error";
        pwd.className = " error";
        warn.style.removeProperty("display");
    }
    else
    {
        cnfPwd.className = " input-class";
        pwd.className = " input-class";
        warn.style.display = "none"
    }
}

pwd.onkeyup = (e) =>{
    if(cnfPwd.value && e.target.value != cnfPwd.value){
        pwd.className = "error";
        cnfPwd.className = "error";
        warn.style.removeProperty("display");
    }
    else{
        cnfPwd.className = " input-class";
        pwd.className = " input-class";
        warn.style.display = "none"
    }
}