var sendBtn = document.getElementById('sendMsg')



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
                msg: document.getElementById('text-textarea').value
            })
        })
	.then(alert("success"))
})