"user strict";

const form = document.querySelector("form");
statusTxt = form.querySelector(".statusTxt");

form.onsubmit = (e) => {
    e.preventDefault();
    statusTxt.style.display = "block";

    let xhr = new XMLHttpRequest();
    xhr.open("POST", "message.php", true);
    xhr.onload = () => {
        if (xhr.readyState == 4 && xhr.status == 200) {
            if (
                response.indexOf("Email and Password field is required") != -1 ||
                response.indexOf("Your email is not valid")
            ) {
                statusTxt.style.color = "red";
            } else {
                form.reset();
                setTimeout(() => {
                    statusTxt.style.display = "none";
                }, 3000);
            }
            let response = xhr.response;
            statusTxt.innerText = response;
        }
    };
    let formData = new FormData(form);
    xhr.send(formData);
};
