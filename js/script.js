var i = 0;
var txt = "npm run start";
var speed = 300;
function typeWriter() {
  if (i < txt.length) {
    document.getElementById("console-pre").innerHTML += txt.charAt(i);
    i++;
    setTimeout(typeWriter, speed);
  }
}
typeWriter();
setTimeout(() => {
  document.getElementById("console").innerHTML +=
    '<p class="breakline"></p> <p class="breakline">Server listening {port: 8080} 😜🤘</p> <p class="breakline"></p>';
}, 5000);
setTimeout(() => {
  document.getElementById(
    "console"
  ).innerHTML += `<p class="breakline"> GET RESPONSE [200]: {'name':'Luis Gerardo Leon Ortega', 'age':'21', 'pasion':'Software Development'} </p>`;
}, 7000);
setTimeout(() => {
  document.getElementById(
    "console"
  ).innerHTML += `<p class="breakline"> GET RESPONSE [200]: {'technologies': ['JavaScript', 'Dart', 'C#', 'Python', 'Java', 'Kotlin', 'and in what you need...']} </p>`;
}, 9000);
setTimeout(() => {
  document.getElementById(
    "console"
  ).innerHTML += `<p class="breakline"> GET RESPONSE [200]: {'roles': ['BackEnd', 'FrontEnd', 'CiberSecurity', 'Gamer', 'Hacker']} </p>`;
}, 11000);
setTimeout(() => {
  document.getElementById(
    "console"
  ).innerHTML += `<p class="breakline"> GET RESPONSE [200]: {'networks': ['<a href="https://www.linkedin.com/in/luis-gerardo-leon-ortega-5054a3171/" target="_blank" rel="noopener noreferrer">LinkedIn</a>', '<a href="https://github.com/luislortega" target="_blank" rel="noopener noreferrer">GitHub</a>']} </p>`;
}, 13000);

setTimeout(() => {
  document.getElementById("console").innerHTML += ` <p class="breakline"></p>
      <p class="breakline"> Connection closed.</p>
      <p class="breakline"></p>`;
}, 15000);
