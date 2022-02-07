var sendBtn = document.getElementById('sendMsg')

function clearFields() {
    document.getElementById('text-name').value = '',
    document.getElementById('text-email').value = '',
    document.getElementById('text-number').value = '',
    document.getElementById('text-textarea').value = ''
}

function togglePopup() {
    // document.getElementById("popup-1").classList.toggle.("active")
    alert("success")
}

sendBtn.addEventListener('click', function(e) {
	e.preventDefault()
    fetch('https://powerful-shelf-02321.herokuapp.com/api/portfolio/contactMe', {
            method: 'POST',
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify({
                name: document.getElementById('text-name').value,
                email: document.getElementById('text-email').value,
                contactNo: document.getElementById('text-number').value,
                msg: document.getElementById('text-textarea').value
            })
        })
    .then(clearFields())
	.then(togglePopup())
})