document.getElementById("year").textContent=new Date().getFullYear();
function sendWhatsApp(e){e.preventDefault();
const nombre=document.getElementById("f-nombre").value.trim();
const zona=document.getElementById("f-zona").value.trim();
const mensaje=document.getElementById("f-mensaje").value.trim();
const texto=`Hola, soy ${nombre}.\nZona/Sector: ${zona}.\nNecesito: ${mensaje}`;
window.open(`https://wa.me/593993596721?text=${encodeURIComponent(texto)}`,"_blank","noopener");return false;}
window.sendWhatsApp=sendWhatsApp;