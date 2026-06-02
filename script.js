// ── Gráfico 1: Dispersión — Acreditación vs Arancel anual ──────────────────

new Chart(document.getElementById("dispersion"), {
    type: "scatter",
    data: {
        datasets: [
            {
                label: "Carreras de Diseño",
                data: [
                    { name: "BACHILLERATO EN ARTES, ARQUITECTURA Y DISEÑO — U. Finis Terrae", x: 5, y: 7200000 },
                    { name: "BACHILLERATO EN DISEÑO — U. del Desarrollo", x: 6, y: 10364360 },
                    { name: "DISEÑO — U. Austral de Chile", x: 6, y: 5887000 },
                    { name: "DISEÑO — U. Católica de Temuco", x: 5, y: 5276000 },
                    { name: "DISEÑO — U. de Chile", x: 7, y: 6486700 },
                    { name: "DISEÑO — U. de La Serena", x: 5, y: 4071000 },
                    { name: "DISEÑO — U. de Las Américas", x: 5, y: 4730000 },
                    { name: "DISEÑO — U. de Playa Ancha", x: 5, y: 4305000 },
                    { name: "DISEÑO — U. de Talca", x: 6, y: 5887000 },
                    { name: "DISEÑO — U. de Valparaíso", x: 6, y: 5713000 },
                    { name: "DISEÑO — U. de Viña del Mar", x: 4, y: 4277000 },
                    { name: "DISEÑO DE EXPERIENCIAS INMERSIVAS — U. Gabriela Mistral", x: 4, y: 4814000 },
                    { name: "DISEÑO DE IMAGEN MODA — UNIACC", x: 3, y: 4210000 },
                    { name: "DISEÑO DE INTERIORES Y AMBIENTES — UNIACC", x: 3, y: 4030000 },
                    { name: "DISEÑO DE JUEGOS DIGITALES — U. Andrés Bello (Las Condes)", x: 6, y: 7136000 },
                    { name: "DISEÑO DE JUEGOS DIGITALES — U. Andrés Bello (Concepción)", x: 6, y: 5069000 },
                    { name: "DISEÑO DE MODA Y MANAGEMENT — U. Finis Terrae", x: 5, y: 7320000 },
                    { name: "DISEÑO DE VESTUARIO Y TEXTIL — U. Andrés Bello", x: 6, y: 7148000 },
                    { name: "DISEÑO DE VIDEOJUEGOS — U. Gabriela Mistral", x: 4, y: 4814000 },
                    { name: "DISEÑO EN ANIMACIÓN DIGITAL — U. Gabriela Mistral", x: 4, y: 4814000 },
                    { name: "DISEÑO EN COMUNICACIÓN VISUAL — UTEM", x: 4, y: 4763300 },
                    { name: "DISEÑO EN COMUNICACIÓN VISUAL — USACH", x: 7, y: 6552000 },
                    { name: "DISEÑO EN INTERACCIÓN DIGITAL — U. Gabriela Mistral", x: 4, y: 4814000 },
                    { name: "DISEÑO — PUC Chile", x: 7, y: 8080000 },
                    { name: "DISEÑO — PUCV", x: 7, y: 6915000 },
                    { name: "DISEÑO — U. del Desarrollo (Santiago)", x: 6, y: 9754692 },
                    { name: "DISEÑO — U. del Desarrollo (Concepción)", x: 6, y: 6056038 },
                    { name: "DISEÑO — U. Diego Portales", x: 6, y: 7597000 },
                    { name: "DISEÑO — U. Finis Terrae", x: 5, y: 7320000 },
                    { name: "DISEÑO EN MARKETING DIGITAL — U. Gabriela Mistral", x: 4, y: 4814000 },
                    { name: "DISEÑO GRÁFICO — U. Andrés Bello", x: 6, y: 7065000 },
                    { name: "DISEÑO GRÁFICO — U. del Bío-Bío", x: 5, y: 4307000 },
                    { name: "DISEÑO GRÁFICO MULTIMEDIA — UNIACC", x: 3, y: 4210000 },
                    { name: "DISEÑO GRÁFICO — U. de Antofagasta", x: 5, y: 5120000 },
                    { name: "DISEÑO INDUSTRIAL — USACH", x: 7, y: 4989000 },
                    { name: "DISEÑO INDUSTRIAL — UTEM", x: 4, y: 4891000 },
                    { name: "DISEÑO INDUSTRIAL — U. del Bío-Bío", x: 5, y: 4434000 },
                    { name: "DISEÑO — U. Mayor", x: 5, y: 7214218 },
                    { name: "DISEÑO MULTIMEDIA — U. de Tarapacá", x: 6, y: 6555000 },
                    { name: "DISEÑO TEATRAL — U. de Chile", x: 7, y: 5492400 },
                    { name: "ING. EN DISEÑO DE PRODUCTOS — UTFSM", x: 6, y: 6000000 },
                    { name: "ING. EN DISEÑO — U. Adolfo Ibáñez", x: 6, y: 9754692 },
                    { name: "ING. EN FABRICACIÓN Y DISEÑO INDUSTRIAL — UTFSM", x: 6, y: 5180000 },
                    { name: "ING. EN REALIDAD VIRTUAL Y DISEÑO — U. Bernardo O'Higgins", x: 5, y: 5900000 },
                ],
                backgroundColor: "rgba(241,142,45,.75)",
                pointRadius: 5,
                pointHoverRadius: 7,
            },
            {
                label: "Línea de referencia",
                type: "line",
                data: [
                    { x: 3, y: 4030000 },
                    { x: 7, y: 8080000 },
                ],
                borderColor: "rgba(102,102,102,.2)",
                borderWidth: 1,
                pointRadius: 0,
                pointHoverRadius: 0,
                fill: false,
                tension: 0,
            },
        ],
    },
    options: {
        scales: {
            x: {
                type: "linear",
                position: "bottom",
                grid: { color: "rgba(0,0,0,0.06)" },
                border: { color: "#ccc" },
                ticks: {
                    font: { family: "'Georama', sans-serif", size: 11 },
                    color: "#999",
                    callback: function (value) {
                        return Number.isInteger(value) ? value + " años" : null;
                    },
                },
            },
            y: {
                grid: { color: "rgba(0,0,0,0.06)" },
                border: { color: "#bbb", dash: [4, 4] },
                ticks: {
                    font: { family: "'Georama', sans-serif", size: 11 },
                    color: "#999",
                    callback: function (value) {
                        return "$ " + value.toLocaleString("es-CL");
                    },
                },
            },
        },
        plugins: {
            legend: { display: false },
            tooltip: {
                backgroundColor: "#fff",
                borderColor: "#ddd",
                borderWidth: 1,
                titleColor: "#111",
                bodyColor: "#555",
                titleFont: { family: "'Georama', sans-serif", size: 12, weight: "600" },
                bodyFont: { family: "'Georama', sans-serif", size: 11 },
                padding: 10,
                filter: function (item) {
                    return item.datasetIndex === 0;
                },
                callbacks: {
                    title: function () { return ""; },
                    label: function (context) {
                        const point = context.raw;
                        return [
                            point.name,
                            "Acreditación: " + point.x + " años",
                            "Arancel: $ " + point.y.toLocaleString("es-CL"),
                        ];
                    },
                },
            },
        },
    },
});


// ── Gráfico 2: Barras horizontales — Top 10 universidades más convenientes ──
//
// Índice de conveniencia (0–100): promedio de tres factores con igual peso:
//   1. Arancel bajo: (max - arancel) / (max - min) * 100
//      donde min = 4.071.000 (U. de La Serena) y max = 10.364.360 (U. del Desarrollo)
//   2. Gratuidad: Sí = 100, No = 0
//   3. Acreditación: (años - 3) / (7 - 3) * 100
//
// Tipo de institución (color):
//   Estatal CRUCH  → azul   #4a90a4
//   Privada CRUCH  → naranja #e8571a

const top10 = [
    { uni: "U. de La Serena",       arancel: 4071000, gratuidad: true, acred: 5, tipo: "Estatal CRUCH",  puntaje: 86.8 },
    { uni: "U. de Playa Ancha",     arancel: 4305000, gratuidad: true, acred: 5, tipo: "Estatal CRUCH",  puntaje: 84.3 },
    { uni: "U. del Bío-Bío",        arancel: 4307000, gratuidad: true, acred: 5, tipo: "Estatal CRUCH",  puntaje: 84.2 },
    { uni: "USACH",                 arancel: 4989000, gratuidad: true, acred: 7, tipo: "Estatal CRUCH",  puntaje: 79.5 },
    { uni: "UTEM",                  arancel: 4763300, gratuidad: true, acred: 4, tipo: "Estatal CRUCH",  puntaje: 76.5 },
    { uni: "U. de Chile",           arancel: 5492400, gratuidad: true, acred: 7, tipo: "Estatal CRUCH",  puntaje: 75.8 },
    { uni: "U. de Antofagasta",     arancel: 5120000, gratuidad: true, acred: 5, tipo: "Estatal CRUCH",  puntaje: 75.2 },
    { uni: "U. Católica de Temuco", arancel: 5276000, gratuidad: true, acred: 5, tipo: "Privada CRUCH",  puntaje: 73.8 },
    { uni: "U. de Valparaíso",      arancel: 5713000, gratuidad: true, acred: 6, tipo: "Estatal CRUCH",  puntaje: 70.9 },
    { uni: "U. Austral de Chile",   arancel: 5887000, gratuidad: true, acred: 6, tipo: "Privada CRUCH",  puntaje: 69.1 },
];

new Chart(document.getElementById("topConveniencia"), {
    type: "bar",
    data: {
        labels: top10.map((d) => d.uni),
        datasets: [
            {
                label: "Índice de conveniencia",
                data: top10.map((d) => d.puntaje),
                backgroundColor: top10.map((d) =>
                    d.tipo === "Estatal CRUCH"
                        ? "rgba(74,144,164,0.85)"
                        : "rgba(232,87,26,0.75)"
                ),
                borderRadius: 3,
                borderSkipped: false,
            },
        ],
    },
    options: {
        indexAxis: "y",
        responsive: true,
        plugins: {
            legend: { display: false },
            tooltip: {
                backgroundColor: "#fff",
                borderColor: "#ddd",
                borderWidth: 1,
                titleColor: "#111",
                bodyColor: "#555",
                titleFont: { family: "'Georama', sans-serif", size: 12, weight: "600" },
                bodyFont: { family: "'Georama', sans-serif", size: 11 },
                padding: 10,
                callbacks: {
                    title: function (items) {
                        return top10[items[0].dataIndex].uni;
                    },
                    label: function (context) {
                        const d = top10[context.dataIndex];
                        return [
                            "Índice: " + d.puntaje + " / 100",
                            "Tipo: " + d.tipo,
                            "Arancel: $ " + d.arancel.toLocaleString("es-CL"),
                            "Gratuidad: " + (d.gratuidad ? "Sí" : "No"),
                            "Acreditación: " + d.acred + " años",
                        ];
                    },
                },
            },
        },
        scales: {
            x: {
                min: 0,
                max: 100,
                grid: { color: "rgba(0,0,0,0.06)" },
                border: { color: "#ccc" },
                ticks: {
                    font: { family: "'Georama', sans-serif", size: 11 },
                    color: "#999",
                    callback: function (value) {
                        return value + " pts";
                    },
                },
            },
            y: {
                grid: { display: false },
                border: { display: false },
                ticks: {
                    font: { family: "'Georama', sans-serif", size: 11 },
                    color: "#444",
                },
            },
        },
    },
});
