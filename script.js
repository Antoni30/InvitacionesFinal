document.getElementById("btnMaps").addEventListener("click", () => {
    const latitud = -0.3754294520660317;
    const longitud = -78.54935968142497;

    window.open(
        `https://www.google.com/maps?q=${latitud},${longitud}`,
        "_blank"
    );
});