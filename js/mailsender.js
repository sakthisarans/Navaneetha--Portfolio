async function send_email(name,email,subject,body){
    try {
        const response =await fetch('https://portfolio.sakthisaran.in/server/mailservice/sendemail',{method:"POST", headers: {
            'Content-Type': 'application/json'
            },
            body:JSON.stringify({"name":name,"email":email,"subject":subject,"body":body,"to":"navaneetha@navaneetha.site"})});
        if(response.status==200){
        alert("I Recived Your Email i'll Contact you Soon")
        document.getElementById("formSubmit").disabled = false;
        document.getElementById("formSubmit").value="Send Message"
        }else{
            alert("Something went wrong please try again later")
            document.getElementById("formSubmit").disabled = false;
            document.getElementById("formSubmit").value="Send Message"
            document.getElementById("formSubmit").disabled = false;
        }
    } catch (error) {
        alert("Something went wrong please try again later")
        document.getElementById("formSubmit").value="Send Message"
    }
}

function handleFormSubmit(event) {
    document.getElementById("formSubmit").disabled = true;
    document.getElementById("formSubmit").value="Sending Email..."
    event.preventDefault();
    var name = document.getElementById('name').value;
    var email = document.getElementById('email').value;
    var subject = document.getElementById('subject').value;
    var message = document.getElementById('message').value;
    var erroraray=[]
    if(!name){
        erroraray.push("Name")
    }
    if(!email){
        erroraray.push("Email")
    }
    if(!subject){
        erroraray.push("Subject")
    }
    if(!message){
        erroraray.push("Message")
    }
    if(erroraray.length>1){
    var error=erroraray.join(",")+" Are Mandatory"
    }else if(erroraray.length==1){
       var error=erroraray.join(",")+" Is Mandatory"
    }
    if(error){
        alert(error)
        document.getElementById("formSubmit").disabled = false;
        document.getElementById("formSubmit").value="Send Message"
    }else{
        send_email(name,email,subject,message)
    }
}
var form = document.getElementById('contactForm');
form.addEventListener('submit', handleFormSubmit);
