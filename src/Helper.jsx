//Obtiene la diferencia de años
export function getDifferenceYear(year) {
  return new Date().getFullYear() - year;
}

//Calcula el total a pagar según la marca
export function calculateBrand(brand) {
  let increase;

  switch (brand) {
    case "europeo":
      increase = 1.3;
      break;
    case "americano":
      increase = 1.15;
      break;
    case "asiatico":
      increase = 1.05;
      break;

    default:
      break;
  }
  return increase;
}

//Calcula el tipo de seguro
export function obtainPlan(plan) {
  return plan === "basic" ? 1.2 : 1.5;
}

//Muestra la primera letra en mayúscula
export function firstUpper(text){
    return text.charAt(0).toUpperCase() + text.slice(1)
}