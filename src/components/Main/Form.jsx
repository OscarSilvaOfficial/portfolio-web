import React from 'react'
import axios from 'axios'

class Form extends React.Component {
    constructor(props){
        super(props)

        this.state = {
            name: 'Oscar',
            email: '',
            subject: '',
            message: ''
        }
    }

    changeHandler = e => {
        this.setState({
            [e.target.name]: e.target.value
        })
    }
    
    submitHandler = e => {
        e.preventDefault()
        axios.post('https://oscarsilvaofficial-api.herokuapp.com/api/send-mail', this.state)
            .then(respone => {
                console.log(respone.data)
            })
            .catch(response => {
                console.log(response.data)
            })
    }

    render() {
        const { name, email, subject, message } = this.state
        return(
            <div className="col-lg-7 mt-5 mt-lg-0 d-flex align-items-stretch">
                <form method="post" onSubmit={this.submitHandler} className="php-email-form">
                    <div className="form-row">
                        <div className="form-group col-md-6">
                        <label for="name">Nome</label>
                        <input type="text" value={name} onChange={this.changeHandler} name="name" className="form-control" id="name" data-rule="minlen:4" data-msg="Please enter at least 4 chars" />
                        <div className="validate"></div>
                        </div>
                        <div className="form-group col-md-6">
                        <label for="name">E-mail</label>
                        <input type="email" value={email} onChange={this.changeHandler} className="form-control" name="email" id="email" data-rule="email" data-msg="Please enter a valid email" />
                        <div className="validate"></div>
                        </div>
                    </div>
                    <div className="form-group">
                        <label for="name">Título</label>
                        <input type="text" value={subject} onChange={this.changeHandler} className="form-control" name="subject" id="subject" data-rule="minlen:4" data-msg="Please enter at least 8 chars of subject" />
                        <div className="validate"></div>
                    </div>
                    <div className="form-group">
                        <label for="name">Mensagem</label>
                        <textarea className="form-control" value={message} onChange={this.changeHandler} name="message" rows="10" data-rule="required" data-msg="Please write something for us"></textarea>
                        <div className="validate"></div>
                    </div>
                    <div className="mb-3">
                        <div className="loading">Loading</div>
                        <div className="error-message"></div>
                        <div className="sent-message">Mensagem Enviada!</div>
                    </div>
                    <div className="text-center"><button type="submit">Enviar</button></div>
                </form>
            </div>
        )
    }
}

export default Form