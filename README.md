<h1>API de Frases Motivacionales</h1>

Este proyecto es una API REST construida con **Node.js** y **Express** que permite gestionar frases motivacionales.  
Puedes obtener todas las frases, obtener una aleatoria o agregar nuevas frases.

---

<h2>Configuración</h2>
<b>puerto:3000</b>

<h2>Características</h2>
<ul>
<li>- Obtener todas las frases motivacionales</li>
<li>- Obtener una frase motivacional aleatoria</li>
<li>- Agregar nuevas frases motivacionales</li>
</ul>

<ol>
  <h2>Instalación</h2>
  <li>git clone https://github.com/usuario/api-frases-motivacionales.git</li>
  <li>npm install</li>
</ol>

<ul>
  <h2>Comandos</h2>
  <li>npm run dev</li>
  <li>npm start</li>
</ul>

<div style="overflow-x:auto;">
  <h2>Rutas</h2>

<table>
  <thead>
    <tr>
      <th>Método</th>
      <th>Ruta</th>
      <th>Descripción</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td>GET</td>
      <td><code>/random/quotes</code></td>
      <td>Devuelve todas las frases</td>
    </tr>
    <tr>
      <td>GET</td>
      <td><code>/random/quotes/random</code></td>
      <td>Devuelve una frase aleatoria</td>
    </tr>
    <tr>
      <td>POST</td>
      <td><code>/random/quotes</code></td>
      <td>Agrega una nueva frase</td>
    </tr>
  </tbody>
</table>

</div>
