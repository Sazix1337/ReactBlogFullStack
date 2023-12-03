export function LogOut() {
    const setCookie = (cname, cvalue, exdays) => {
        const d = new Date();
        d.setTime(d.getTime() + (exdays*24*60*60*1000));
        let expires = "expires="+ d.toUTCString();
        document.cookie = cname + "=" + cvalue + ";" + expires + ";path=/";
    };

    function eraseCookie(name) {
        document.cookie = name+'=; Max-Age=-99999999;';
    }

    setCookie("logged", false, 5000000);
    eraseCookie("username");
    eraseCookie("avatarUrl");
    eraseCookie("bio");
    eraseCookie("id");
    eraseCookie("password");

    window.location.reload();
}