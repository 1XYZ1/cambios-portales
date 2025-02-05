// src/data/cambios.ts

export interface Substitution {
  interval: string;
  playerOut: string;
  playerIn: string;
  posicion: string; // "Defensa" o "Delantero"
}

export const substitutions: Substitution[] = [
  // Primer Tiempo
  {
    interval: "5",
    playerOut: "Ramón",
    playerIn: "Alberto",
    posicion: "Delantero",
  },
  {
    interval: "5",
    playerOut: "Garnacho",
    playerIn: "Manuel",
    posicion: "Delantero",
  },
  {
    interval: "5",
    playerOut: "Ender",
    playerIn: "Zipo (Alejandro)",
    posicion: "Defensa",
  },
  {
    interval: "10",
    playerOut: "Juan David",
    playerIn: "Ramón",
    posicion: "Delantero",
  },
  {
    interval: "10",
    playerOut: "Manuel",
    playerIn: "Garnacho",
    posicion: "Delantero",
  },
  {
    interval: "10",
    playerOut: "Roberto",
    playerIn: "Andrés",
    posicion: "Defensa",
  },
  {
    interval: "15",
    playerOut: "Alberto",
    playerIn: "Juan David",
    posicion: "Delantero",
  },
  {
    interval: "15",
    playerOut: "Ramón",
    playerIn: "Manuel",
    posicion: "Delantero",
  },
  {
    interval: "15",
    playerOut: "Zipo (Alejandro)",
    playerIn: "Roberto",
    posicion: "Defensa",
  },

  // Segundo Tiempo
  {
    interval: "25",
    playerOut: "Ramón",
    playerIn: "Juan David",
    posicion: "Delantero",
  },
  {
    interval: "25",
    playerOut: "Manuel",
    playerIn: "Garnacho",
    posicion: "Delantero",
  },
  {
    interval: "25",
    playerOut: "Andrés",
    playerIn: "Zipo (Alejandro)",
    posicion: "Defensa",
  },
  {
    interval: "30",
    playerOut: "Garnacho",
    playerIn: "Ramón",
    posicion: "Delantero",
  },
  {
    interval: "35",
    playerOut: "Alberto",
    playerIn: "Manuel",
    posicion: "Delantero",
  },
  {
    interval: "35",
    playerOut: "Juan David",
    playerIn: "Garnacho",
    posicion: "Delantero",
  },
  {
    interval: "35",
    playerOut: "Zipo (Alejandro)",
    playerIn: "Andrés",
    posicion: "Defensa",
  },
];
