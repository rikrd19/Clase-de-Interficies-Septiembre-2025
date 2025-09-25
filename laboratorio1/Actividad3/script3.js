const nombre = prompt("¿Cómo te llamas?");
if (nombre === null) {
  alert("Cancelado.");
} else {
  const entradaEdad = prompt("¿Cuántos años tienes?");
  if (entradaEdad === null) {
    alert("Cancelado.");
  } else {
    const edad = Number(entradaEdad);

    if (Number.isNaN(edad)) {
      alert("La edad debe ser un número.");
    } else {
      alert(`Hola ${nombre}, tienes ${edad} años`);

      if (edad > 18) {
        alert("Puedes entrar");
      } else if (edad === 18) {
        alert("Justo 18, puedes entrar");
      } else {
        alert("Acceso denegado");
      }
    }
  }
}
