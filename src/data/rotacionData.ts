// src/data/rotationData.ts

export const rotationData = {
  firstHalf: [
    {
      interval: "0-5",
      onField: [
        "Carlos (P)",
        "Roberto (D)",
        "Ender (D)",
        "Ramón (DEL)",
        "Juan David (DEL)",
        "Garnacho (DEL)",
      ],
    },
    {
      interval: "5-10",
      onField: [
        "Carlos (P)",
        "Roberto (D)",
        "Zipo (Alejandro) (D)",
        "Manuel (DEL)",
        "Juan David (DEL)",
        "Alberto (DEL)",
      ],
    },
    {
      interval: "10-15",
      onField: [
        "Carlos (P)",
        "Zipo (Alejandro) (D)",
        "Andrés (D)",
        "Alberto (DEL)",
        "Ramón (DEL)",
        "Garnacho (DEL)",
      ],
    },
    {
      interval: "15-20",
      onField: [
        "Carlos (P)",
        "Andrés (D)",
        "Roberto (D)",
        "Garnacho (DEL)",
        "Juan David (DEL)",
        "Manuel (DEL)",
      ],
    },
  ],
  secondHalf: [
    {
      // Intervalo 20-25: Se da inicio al 2T, donde tanto Alberto como Manuel ingresan.
      interval: "20-25",
      onField: [
        "Carlos (P)",
        "Ender (D)",
        "Andrés (D)",
        "Alberto (DEL)", // Juega aquí (+5 min)
        "Manuel (DEL)", // Juega aquí (+5 min)
        "Ramón (DEL)",
      ],
    },
    {
      // Intervalo 25-30: Se realizan los siguientes cambios:
      // - Ramón sale y entra Juan David.
      // - **Manuel sale** y entra Garnacho.
      // - Andrés sale y entra Zipo.
      interval: "25-30",
      onField: [
        "Carlos (P)",
        "Ender (D)",
        "Alberto (DEL)", // Sigue en cancha (+5 min)
        "Juan David (DEL)", // Entra (+5 min)
        "Garnacho (DEL)", // Entra (Manuel sale: detiene su acumulado)
        "Zipo (Alejandro) (D)", // Entra
      ],
    },
    {
      // Intervalo 30-35: Se efectúa el cambio:
      // - Garnacho sale y entra Ramón.
      interval: "30-35",
      onField: [
        "Carlos (P)",
        "Ender (D)",
        "Alberto (DEL)", // Juega otro intervalo (+5 min; total 15 en 2T)
        "Juan David (DEL)",
        "Zipo (Alejandro) (D)",
        "Ramón (DEL)", // Regresa (o permanece)
      ],
    },
    {
      // Intervalo 35-40: Para compensar los minutos:
      // - **Alberto sale** y entra **Manuel** (Manuel suma otros 5 min; total 10 en 2T, quedando en 20 totales).
      // - Juan David sale y entra Garnacho.
      // - Zipo sale y entra Andrés.
      interval: "35-40",
      onField: [
        "Carlos (P)",
        "Ender (D)",
        "Manuel (DEL)", // Regresa (+5 min; 5+5=10 en 2T; total 20)
        "Garnacho (DEL)", // Entra
        "Ramón (DEL)",
        "Andrés (D)", // Entra
      ],
    },
  ],
};
