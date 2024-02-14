# webTokenExample

Esimerkki sisältää databaseApiExample sovelluksen koodin. Tässä esimerkissä luodaan tietokantaan <b>user-taulu</b> ja sille CRUD-operaatiot. Tauluun lisättävä salasana kryptataan käyttäen <b>bcrypt</b> algoritmia.

## user-taulun rakenne

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

## bcryptjs

Asenna sovellukseen bcryptjs komennolla <b>npm install bcryptjs</b>.
Sen kuvaus ja käyttöohje löytyy sivulta https://www.npmjs.com/package/bcryptjs

Tässä esimerkissä käytetään <b>asynkroonista hash metodia</b>. 

## Sovelluksen muokkaus
<ol>
<li>Kloonaa tämä repo ja asenna komennolla <b>npm install</b></li>
<li>Luo tiedostot routes/user.js ja models/user_model.js</li>
<li>Kirjoita em. tiedostoihin tarvittavat koodit</li>
<li>Kryptaa modelissa salasana ennen sen viemistä tietokantaan</li>
</ol>