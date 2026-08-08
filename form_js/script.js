 function submitForm() {

        const username =
            document.querySelector("#name").value;

        const password =
            document.querySelector("#password").value;

        const userMail =
            document.querySelector("#email").value;


        const msg1 =
            document.querySelector("#msg1");

        const msg2 =
            document.querySelector("#msg2");

        const msg3 =
            document.querySelector("#msg3");


        let isValid = true;

        if(username.trim() === "") {
            msg1.textContent = "Name is required!";
            isValid = false;
        } else {
            msg1.textContent = ""
        }

        // if(isNaN(usernumber)) {
        //     alert("Please Enter a valid number");
        //     return false;
        // }

        if(password === "") {
            msg2.textContent = "Password is requiered!";
            isValid = false;
        } else {
           msg2.textContent = "";
        }

        if(userMail === "") {
            msg3.textContent = "Email is required!";
            isValid = false;
        } else {
            msg3.textContent = "";
        }

        if(!isValid) {
            return false;
        }

        alert("Form is submitted successfully");

        return true;
    }