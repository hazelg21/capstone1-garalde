var sendBtn = document.getElementById('sendMsg')

function clearFields() {
    document.getElementById('text-name').value = '',
    document.getElementById('text-email').value = '',
    document.getElementById('text-number').value = '',
    document.getElementById('text-textarea').value = ''
}

function togglePopup() {
    document.getElementById("popup-1").classList.toggle("active");
}

function sendMail(e) {
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
    .then((feedback) => {
        if(feedback.status === 200){
            clearFields()
            togglePopup()
        }
        else {
            console.log("Unable to send email at the moment please try again")
        }
    })
  
}


sendBtn.addEventListener('click', function(e) {
    e.preventDefault()
    if (document.getElementById('text-name').value !== '' && 
        document.getElementById('text-email').value !== '' &&
        document.getElementById('text-number').value !== '' &&
        document.getElementById('text-textarea').value !== ''){

        sendMail(e)
    
    }
    else if (document.getElementById('text-name').value === '') {
        document.getElementById('req-name').innerHTML = 'required';
    }
    else if (document.getElementById('text-email').value === '') {
        document.getElementById('req-email').innerHTML = 'required';
    }
    else if (document.getElementById('text-number').value === '') {
        document.getElementById('req-number').innerHTML = 'required';
    }
    else if (document.getElementById('text-textarea').value === '') {
        document.getElementById('req-textarea').innerHTML = 'required';
    }
})



document.getElementById('text-name').addEventListener('keyup', function(e) {
    e.preventDefault()
    document.getElementById('req-name').innerHTML = '*';
})

document.getElementById('text-email').addEventListener('keyup', function(e) {
    e.preventDefault()
    document.getElementById('req-email').innerHTML = '*';
})


document.getElementById('text-number').addEventListener('keyup', function(e) {
    e.preventDefault()
    document.getElementById('req-number').innerHTML = '*';
})


document.getElementById('text-textarea').addEventListener('keyup', function(e) {
    e.preventDefault()
    document.getElementById('req-textarea').innerHTML = '*';
})

