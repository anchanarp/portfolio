**app.py**

from flask import Flask, render\_template, request, redirect, url\_for



app = Flask(\_\_name\_\_)



\# Store messages (temporary)

messages = \[]



\# Home Page

@app.route('/')

def home():

&#x20;   return render\_template("index.html")





\# About Page

@app.route('/about')

def about():

&#x20;   return render\_template("about.html")





\# Destinations Page

@app.route('/destinations')

def destinations():

&#x20;   return render\_template("destinations.html")





\# Contact Page (GET)

@app.route('/contact')

def contact():

&#x20;   success = request.args.get('success')

&#x20;   return render\_template("contact.html", success=success, messages=messages)





\# Contact Form Submit (POST)

@app.route('/submit', methods=\['POST'])

def submit():

&#x20;   data = {

&#x20;       "name": request.form.get('name'),

&#x20;       "email": request.form.get('email'),

&#x20;       "message": request.form.get('message')

&#x20;   }



&#x20;   messages.append(data)



&#x20;   # Redirect using url\_for

&#x20;   return redirect(url\_for('contact', success=1))





\# Dynamic Route

@app.route('/greet/<name>')

def greet(name):

&#x20;   return f"Hello, {name} 👋"





\# Advanced Dynamic Route

@app.route('/shoedetails/<category>/<product>')

def show\_product(category, product):

&#x20;   return f"Category: {category}, Product: {product}"





if \_\_name\_\_ == '\_\_main\_\_':

&#x20;   app.run(debug=True)

