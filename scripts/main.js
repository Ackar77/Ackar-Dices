// Ensure the file is loaded as an ES module (you already have esmodules in module.json)

Hooks.once("diceSoNiceReady", (dice3d) => {
  if (!dice3d) return;

  // 1) Register your system (shows as a tab in DsN settings)
  dice3d.addSystem({ id: "ACKAR", name: "Ackar Dices" });

  const themes = [
    "checker","dwarf","garden","khorne","mosaic",
    "necromancer","noble","nurgle","skulls","tzentch"
  ];

  Object.entries(diceTypes).forEach(([type, labels]) => {
    const DIE = type.toUpperCase(); // "D2", "D4", ...
    const texId = `ackar-${type}`;
    const colorsetId = `ackar-${type}`;

    // 1) Per-die texture
    dice3d.addTexture(texId, {
      name: `Ackar ${type}`,
      composite: "source-over",
      source: `modules/ackar-dices/assets/${DIE}.png`,
      bump:   `modules/ackar-dices/assets/${DIE}_bump.png` // remove if not present
    });
    // 2) Per-die colorset using that texture
    dice3d.addColorset({
      name: colorsetId,
      description: `Ackar ${type}`,
      category: "Ackar Dices",
      foreground: "#ffffff",
      background: "#000000",
      outline: "black",
      edge: "#000000",
      texture: texId,
      material: "plastic"
    }, "no");

  presets.forEach(p => {
    dice3d.addDicePreset({
      type: p.type,
      system: "ACKAR",
      labels: p.labels,
      colorset: "ackar-universal"
    });
  });

    // 3) Register a colorset that uses that texture
//    dice3d.addColorset({
//      name: `ackar-${t}`,
//      description: `Ackar ${t}`,
//      category: "Ackar Dices",
//      foreground: "#ffffff",
//      background: "#000000",
//      outline: "black",
//      edge: "#000000",
//      texture: `ackar-${t}`,
//      material: "plastic"
//    }, "no");
  });
});
