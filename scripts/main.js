Hooks.once("diceSoNiceReady", (dice3d) => {
  if (!dice3d) return;

  dice3d.addSystem({ id: "ACKAR", name: "Ackar Dices" });

  const themes = ["khorne","mosaic","checker","dwarf","garden","necromancer","noble","nurgle","skulls","tzentch"];

  const diceTypes = {
    d2:  ["1","2"],
    d4:  ["1","2","3","4"],
    d6:  ["1","2","3","4","5","6"],
    d8:  ["1","2","3","4","5","6","7","8"],
    d10: ["1","2","3","4","5","6","7","8","9","0"],
    d12: ["1","2","3","4","5","6","7","8","9","10","11","12"],
    d20: ["1","2","3","4","5","6","7","8","9","10","11","12","13","14","15","16","17","18","19","20"],
    d100:["00","10","20","30","40","50","60","70","80","90"]
  };

  themes.forEach(themeId => {
    const themeName = `Ackar ${themeId}`;

    // VISIBLE theme choice (shows in Theme dropdown)
    dice3d.addColorset({
      name: `ackar-${themeId}`,
      description: themeName,
      category: "Ackar Dices",
      foreground: "#ffffff",
      background: "#000000",
      outline: "black",
      edge: "#000000",
      texture: `ackar-${themeId}-d6`, // preview only
      material: "plastic"
    }, "no"); // <-- MUST be "no" to show

    Object.entries(diceTypes).forEach(([type, labels]) => {
      const DIE = type.toUpperCase();
      const texId = `ackar-${themeId}-${type}`;

      // per-die texture for this theme
      dice3d.addTexture(texId, {
        name: `${themeName} ${type}`,
        composite: "source-over",
        source: `modules/ackar-dices/assets/${themeId}/${DIE}.png`
      });

      // HIDDEN per-die colorset (glue)
      dice3d.addColorset({
        name: texId,
        description: `${themeName} ${type}`,
        category: "Ackar Dices",
        foreground: "#ffffff",
        background: "#000000",
        outline: "black",
        edge: "#000000",
        texture: texId,
        material: "plastic"
      }, "yes"); // <-- MUST be "yes" to hide

      // presets route dice types to per-die textures
      if (type === "d100") {
        dice3d.addDicePreset({ type:"d100", system:"ACKAR", labels, colorset: texId }, "d10");
      } else {
        dice3d.addDicePreset({ type, system:"ACKAR", labels, colorset: texId });
      }
    });
  });
});
