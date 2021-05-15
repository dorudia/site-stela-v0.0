let sendEmailBtn = document.querySelector('footer form button');
let nameInput = document.querySelector('#name-input');
let receiverEmailAddress = document.querySelector('#receiver-email');




sendEmailBtn.addEventListener('click', () => {
    if(receiverEmailAddress.value.includes('@') == false) {
        alert('Scrie un email valid!');
        return;
    }
    sendEmail()
   
})


function sendEmail() {

    Email.send({
        Host: "smtp.gmail.com",
        Username: "diaconustelapfa@gmail.com",
        Password: "inkkaworbpysbvcj",
        To: `${receiverEmailAddress.value}`,
        From: "diaconustelapfa@gmail.com",
        Subject: "13 GRESELI DE MATKETING-PDF",
        Body: `Servus, ${nameInput.value}! Dă click pe acest link pentru acces la PDF.
          https://drive.google.com/file/d/11VQjNGPymNESIIrki6i2Hnq6Ialb5GQ3/view?usp=sharing`,
        Attachments: [
            {
                name: "170459790_262922575539254_8631593179620814993_n.png",
                path: "https://scontent.fotp7-2.fna.fbcdn.net/v/t1.6435-0/p180x540/170459790_262922575539254_8631593179620814993_n.png?_nc_cat=111&ccb=1-3&_nc_sid=e3f864&_nc_eui2=AeEp3DCw_hBbb2wXgoxOUFhhc-5exWuF9hZz7l7Fa4X2FueazbvPC3RBR126Ls-T7_TT4H4NHyJGF3PtK0AIshWq&_nc_ohc=4yFv1WayrQoAX_8OkhD&_nc_ht=scontent.fotp7-2.fna&tp=30&oh=3cb2630c37e512853fcb431c099cf697&oe=60ACF8D7"
            }]


    })

        .then(function (message) {
            alert("Te-ai înregistrat cu succes. Verifică-ți email-ul!")
        });

}

// module.exports = {nameInput, receiverEmailAddress}

// console.log(nameInput.value)