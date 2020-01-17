const form = document.getElementById("newContact")
if (form) {
    form.addEventListener('submit', function(event) {
        event.preventDefault()
        console.log(event)
        let firstName = document.getElementById("firstName").value;
        let surname = document.getElementById("surname").value;
        let mobile = document.getElementById("mobile").value;
        let email = document.getElementById("email").value;

        console.log(firstName); {
            fetch('/contacts', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify({ firstname: firstName, surname: surname, mobile: mobile, email: email })
            })
        }
        window.location.replace("/");
    })
}