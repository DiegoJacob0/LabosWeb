function mostrarActividad() {
  let dia = document.getElementById("dia").value.trim().toLowerCase();
  let actividad = "";

  switch (dia) {
    case "lunes":
      actividad = "Atender a un cliente específico";
      break;
    case "martes":
      actividad = "Visitar una agencia fuera de la ciudad";
      break;
    case "miercoles":
      actividad = "Llevar a mi hija al ballet";
      break;
    case "jueves":
      actividad = "Priorizar entregas de desarrollo";
      break;
    case "viernes":
      actividad = "Atender problemas de manera remota";
      break;
    case "sabado":
      actividad = "Hacer lo que mi esposa quiera";
      break;
    case "domingo":
      actividad = "Dia libre";
      break;
    default:
      actividad = "Ingresar un dia correcto o el dia sin tilde";
  }

  document.getElementById("actividad").innerText = "Hoy: " + actividad;
}
