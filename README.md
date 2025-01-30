<h1>webTokenExample</h1>

Esimerkki sisältää databaseApiExample sovelluksen koodin. Tässä esimerkissä luodaan tietokantaan <b>user-taulu</b> ja sille CRUD-operaatiot. Tauluun lisättävä salasana kryptataan käyttäen <b>bcrypt</b> algoritmia.

<h2>user-taulun rakenne</h2>

Laitetaan user-tauluun kentät
<ul>
<li>username varchar(20) primary key</li>
<li>fname varchar(20)</li>
<li>password varchar(255)</li>
</ul>

Taulu voidaan luoda koodilla
<pre>
CREATE TABLE user(
 username varchar(20) primary key,
 fname varchar(20),
 password varchar(255)
) Engine=InnoDB;
</pre>
Ja lisätään kokeeksi yksi käyttäjä koodilla 
<pre>
INSERT INTO user VALUES('user01','Teuvo','pass01');
</pre>
Jatkossa käyttäjät luodaan ainoastaan REST APIn kautta, jotta salasana saadaan kryptattua.

<h2>bcryptjs</h2>

Asenna sovellukseen bcryptjs komennolla <b>npm install bcryptjs</b>.
Sen kuvaus ja käyttöohje löytyy sivulta https://www.npmjs.com/package/bcryptjs

Tässä esimerkissä käytetään <b>asynkroonista hash metodia</b>. 

<h2>Sovelluksen muokkaus</h2>
<ol>
<li>Kloonaa tämä repo ja asenna komennolla <b>npm install</b></li>
<li>Luo tiedostot routes/user.js ja models/user_model.js</li>
<li>Kirjoita em. tiedostoihin tarvittavat koodit</li>
<li>Kryptaa modelissa salasana ennen sen viemistä tietokantaan</li>
<li>Kirjoita login-controlleri, joka lähettää responsena true tai false</li>
<li>Muokkaa login-controlleria, niin että onnistuneen kirjautumisen seurauksena se palauttaakin webtokenin.
Webtokenin generoinnista löytyy ohjeet sivulta: https://peatutor.com/express/Examples/webtoken.php</li>
<li>Suojaa reitit book ja user webtoken autentikoinnilla</li>
</ol>

<h2>Huomioita sovelluksesta</h2>

Tiedostossa app.js lause <b>const app=express();</b> luo Express-sovelluksen instanssin, joka edustaa koko sovellusta.

Kaikissa kontrollereissa eli routes kansion tiedostoissa lause <b>const router=express.Router();</b> luo reititin-olion, joka edustaa osaa sovelluksen reiteistä ja middlewareista, mikä on hyödyllistä koodin modulaarisuuden kannalta.

<h2>Secret key</h2>

Tokenin generoinnissa tarvitaan Secret Key. Jotta sovellus toimii generoi se ajamalla komento node generate_token ja kopio saatu string .env tiedostoon jonka malli on tiedostossa .env_example.

<hr>
The example includes the code for the databaseApiExample application. In this example, a <b>user table</b> is created in the database along with CRUD operations. The password added to the table is encrypted using the <b>bcrypt</b> algorithm.

<h2>Structure of the user table</h2>

The user table will have the following fields:
<ul>
<li>username varchar(20) primary key</li>
<li>fname varchar(20)</li>
<li>password varchar(255)</li>
</ul>

The table can be created with the following code:
<pre>
CREATE TABLE user(
 username varchar(20) primary key,
 fname varchar(20),
 password varchar(255)
) Engine=InnoDB;
</pre>
And add a test user with the following code:
<pre>
INSERT INTO user VALUES('user01','Teuvo','pass01');
</pre>
In the future, users will only be created through the REST API to ensure the password is encrypted.

<h2>bcryptjs</h2>

Install bcryptjs in the application with the command <b>npm install bcryptjs</b>.
Its description and usage instructions can be found at https://www.npmjs.com/package/bcryptjs

In this example, the <b>asynchronous hash method</b> is used.

<h2>Modifying the application</h2>
<ol>
<li>Clone this repo and install with the command <b>npm install</b></li>
<li>Create the files routes/user.js and models/user_model.js</li>
<li>Write the necessary code in the aforementioned files</li>
<li>Encrypt the password in the model before saving it to the database</li>
<li>Write a login controller that responds with true or false</li>
<li>Modify the login controller so that upon successful login, it returns a web token.
Instructions for generating the web token can be found at: https://peatutor.com/express/Examples/webtoken.php</li>
<li>Protect the book and user routes with web token authentication</li>
</ol>

<h2>Notes about the application</h2>

In the app.js file, the statement <b>const app=express();</b> creates an instance of the Express application, which represents the entire application.

In all controllers, i.e., files in the routes folder, the statement <b>const router=express.Router();</b> creates a router object that represents a part of the application's routes and middleware, which is useful for code modularity.

<h2>Secret key</h2>

A Secret Key is required for generating the token. To make the application work, generate it by running the command node generate_token and copy the obtained string into the .env file, which is modeled in the .env_example file.
