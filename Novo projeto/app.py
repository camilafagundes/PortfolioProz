from flask import Flask, render_template, redirect, request, flash, url_for
from flask_mail import Mail, Message
from dotenv import load_dotenv
import os

basedir = os.path.abspath(os.path.dirname(__file__))
app.config['SQLALCHEMY_DATABASE_URI'] = 'sqlite:///' + os.path.join(basedir, 'database', 'app.db')


load_dotenv()

app = Flask(__name__)
app.secret_key = 'camilafagundes'

mail_settings = {
    "MAIL_SERVER": 'smtp.gmail.com',
    "MAIL_PORT": 465,
    "MAIL_USE_TLS": False,
    "MAIL_USE_SSL": True,
    "MAIL_USERNAME": os.getenv("EMAIL"),
    "MAIL_PASSWORD": os.getenv("SENHA")
}

app.config.update(mail_settings)

mail = Mail(app)

class Contato:
    def __init__(self, nome, email, mensagem):
        self.nome = nome
        self.email = email
        self.mensagem = mensagem

@app.route('/')
def index():
    return render_template('index.html')

@app.route('/send', methods=['POST'])
def send():
    formContato = Contato(
        request.form["nome"],
        request.form["email"],
        request.form["mensagem"]
    )

    msg = Message(
        subject=f'{formContato.nome} te enviou uma mensagem no portfólio',
        sender=app.config.get("MAIL_USERNAME"),
        recipients=['camilex2013@gmail.com', app.config.get("MAIL_USERNAME")],
        body=f'''
            {formContato.nome} com o email {formContato.email}, te enviou a seguinte mensagem:

            {formContato.mensagem}
        '''
    )
    mail.send(msg)
    flash('Mensagem enviada com sucesso!', 'success')
    return redirect('/')

@app.route('/contato', methods=['GET', 'POST'])
def contato():
    if request.method == 'POST':
        flash('Mensagem enviada com sucesso!', 'success')
        return redirect(url_for('contato'))
    return render_template('contato.html')

if __name__ == '__main__':
    app.run(debug=True)