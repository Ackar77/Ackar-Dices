Hooks.once("diceSoNiceReady", (dice3d) => {
  // 1) rejestrujemy "system" (preset grupujący kostki w menu DsN)
  dice3d.addSystem({ id: "ACKAR", name: "Ackar Dices" });

  // 2) lista Twoich skórek
  const themes = [
    "checker","dwarf","garden","khorne","mosaic",
    "necromancer","noble","nurgle","skulls","tzentch"
  ];

  // 3) rejestrujemy tekstury tła (opcjonalne, ale polecam)
  themes.forEach(t => {
    dice3d.addTexture(`ackar-${t}`, {
      name: `Ackar ${t}`,
      composite: "source-over",
      source: `modules/ackar-dices/assets/${t}/D100.png`
    });
  });

  // dalej: colorsety i dicePresety (sekcje 4 i 5)
});
