from flask import Flask, render_template, request, redirect, url_for
from flask_sqlalchemy import SQLAlchemy

app = Flask(__name__)

# Configurações do banco de dados
app.config['SQLALCHEMY_DATABASE_URI'] = 'sqlite:///dynapark.db'
db = SQLAlchemy(app)

# Modelo de exemplo (User)
class User(db.Model):
    id = db.Column(db.Integer, primary_key=True)
    email = db.Column(db.String(100), unique=True, nullable=False)
    password = db.Column(db.String(100), nullable=False)

# Rotas de exemplo
@app.route('/')
def home():
    return render_template('index.html')

@app.route('/login', methods=['GET', 'POST'])
def login():
    if request.method == 'POST':
        email = request.form['email']
        password = request.form['password']
        user = User.query.filter_by(email=email, password=password).first()
        if user:
            return redirect(url_for('home'))
        else:
            return "Credenciais inválidas"
    return render_template('login.html')

@app.route('/vagas', methods=['GET'])
def consultar_vagas():
    vagas = [{"estacionamento": "A", "vagas": 5}, {"estacionamento": "B", "vagas": 0}]
    return render_template('vagas.html', vagas=vagas)

if __name__ == '__main__':
    app.run(debug=True)
