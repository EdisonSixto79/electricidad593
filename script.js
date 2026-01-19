// Año automático
document.getElementById("year").textContent = new Date().getFullYear();

// Menú móvil (preparado)
const toggle = document.querySelector(".nav-toggle");
const nav = document.querySelector(".nav");
if(toggle){
  toggle.addEventListener("click",()=>{
    nav.style.display = nav.style.display === "flex" ? "none" : "flex";
  });
}

// Formulario WhatsApp
function sendWhatsApp(e){
  e.preventDefault();
  const n = document.getElementById("f-nombre").value;
  const z = document.getElementById("f-zona").value;
  const m = document.getElementById("f-mensaje").value;

  const text = `Hola, soy ${n}. Estoy en ${z}. Necesito: ${m}`;
  const url = `https://wa.me/593993596721?text=${encodeURIComponent(text)}`;
  window.open(url,"_blank");
  return false;
}
