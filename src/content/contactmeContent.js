import React from 'react'
import '../css/contactmeContent.css'
import emailjs from 'emailjs-com'
const ContactMeContent = (props) => {
    const [sent, setSent] = React.useState(false)
    const [error, setError] = React.useState(false)
    const theme = props.context.theme
    const styles = {
        container:{backgroundColor: theme.background, color: theme.color},
        inputs:{color: theme.color, border: '1px solid '+ theme.inputBorderColor},
        button:{color:theme.color,backgroundColor: theme.background, boxShadow: '2px 2px 5px 1px '+ theme.shadowColor}
    }
    const handleFormSubmit = (e)=>{
        e.preventDefault()
        emailjs.sendForm('service_ciduqmh','template_g7bf3xh', e.target,'user_wZx844leukE8T29AvBEzu')
        .then((result)=>{
            e.target.reset()
            setSent(true)
        },(error)=> console.log(error))
    }
    return(
       <div id={'contact-me-content-container'} style={styles.container}>
           {error ? <p>Something went wrong sending email</p> : null}
           <form onSubmit={handleFormSubmit}>
                {sent ? <p>Email Sent</p> : null}
                <input placeholder={'Name'} style={styles.inputs} minLength = {3} name="name" ></input>
                <input placeholder={'Email'} style={styles.inputs} type={'email'} name="email"></input>
                <textarea name="message" placeholder={'How can I be your service?'} style={styles.inputs} id='message' minLength= {3}></textarea>
                <button style={styles.button}>Submit</button>
           </form>
       </div>
    )
}
export default ContactMeContent