Hooks.once('diceSoNiceReady', (dice3d) => {

    /**
     * Adds a new system to the dice3d system list.
     */
    dice3d.addSystem({ id: "customsystem", name: "My Custom System" }, "default");

    /**
     * Add the Checker face texture
     * Make sure file exists:
     * modules/ackar-diceset/assets/textures/checker.png
     */
    dice3d.addTexture("checker-face", {
        name: "Checker",
        composite: "source-over",
        source: "modules/ackar-dices/assets/checker/checker.webp"
    });

    /**
     * Colorset that uses the Checker texture
     */
    dice3d.addColorset({
        name: "checker-texture",
        description: "Checker texture on dice faces",
        category: "My Custom System",
        foreground: "#000000",
        background: "#ffffff",
        outline: "#000000",
        edge: "#000000",
        texture: "checker-face",
        material: "plastic"
    }, "no");

    /**
     * Example preset already in the file – leaving as-is
     */
    dice3d.addDicePreset({
        type: "d20",
        labels: [
            '1','2','3','4','5','6','7','8','9','10',
            '11','12','13','14','15','16','17','18','19','20'
        ],
        font: "FoundryVTT",
        system: "customsystem",
        colorset: "default"       // <- leaving your d20 untouched
    });

    // ----------------------------------------------------------------------
    // ADD CHECKER TEXTURE TO D10 AND D100
    // ----------------------------------------------------------------------

    // d10 (0–9)
    dice3d.addDicePreset({
        type: "d10",
        system: "customsystem",
        colorset: "checker-texture",
        labels: ["0","1","2","3","4","5","6","7","8","9"],
        font: "FoundryVTT",
        fontScale: 0.9
    });

    // d100 (00–90)
    dice3d.addDicePreset({
        type: "d100",
        system: "customsystem",
        colorset: "checker-texture",
        labels: ["00","10","20","30","40","50","60","70","80","90"],
        font: "FoundryVTT",
        fontScale: 0.9
    });

});
