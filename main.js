let app = document.getElementById('typewriter');
 
let typewriter = new Typewriter(app, {
  loop: true,
  delay: 75,
});
 
typewriter
  .pauseFor(2500)
  .typeString('<span style="color: #5e125c;">Me encanta programar y más si implica un nuevo reto.</span>')
  .pauseFor(200)
  .deleteChars(10)
  .start();
