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
                    { name: "DISEÑO GRÁFICO MENCIÓN ESTRATÉGICO — U. de Antofagasta", x: 5, y: 5120000 },
                    { name: "DISEÑO INDUSTRIAL — USACH", x: 7, y: 4989000 },
                    { name: "DISEÑO INDUSTRIAL — UTEM", x: 4, y: 4891000 },
                    { name: "DISEÑO INDUSTRIAL — U. del Bío-Bío", x: 5, y: 4434000 },
                    { name: "DISEÑO MENCIÓN INDUSTRIAL/GRÁFICO/AMBIENTES — U. Mayor", x: 5, y: 7214218 },
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


// ── Gráfico 2: Barras agrupadas — Arancel promedio por tipo de institución y gratuidad ──
//
// Datos calculados desde ambos Excel (SIES 2026):
//
// UNIVERSIDADES ESTATALES CRUCH — con gratuidad (redis=1, adscrita a gratuidad=Sí):
//   U. de Antofagasta: 5.120.000 | U. de Playa Ancha: 4.305.000 | USACH (2 carreras): 6.552.000 / 4.989.000
//   U. del Bío-Bío (2): 4.307.000 / 4.434.000 | UTEM (2): 4.763.300 / 4.891.000
//   U. de Tarapacá: 6.555.000 | U. de Talca: 5.887.000 | U. de Valparaíso: 5.713.000
//   U. de Chile (2): 6.486.700 / 5.492.400 | U. de La Serena: 4.071.000
//   Promedio: (5120000+4305000+6552000+4989000+4307000+4434000+4763300+4891000+6555000+5887000+5713000+6486700+5492400+4071000) / 14 = 5.261.886
//
// UNIVERSIDADES PRIVADAS CRUCH — con gratuidad (redis=1, adscrita=Sí):
//   PUCV: 6.915.000 | PUC: 8.080.000 | U. Austral: 5.887.000 | U. Católica de Temuco: 5.276.000
//   U. Diego Portales: 7.597.000 | UTFSM (3): 6.000.000 / 6.000.000 / 5.180.000
//   Promedio: (6915000+8080000+5887000+5276000+7597000+6000000+6000000+5180000) / 8 = 6.366.875
//
// UNIVERSIDADES PRIVADAS — con gratuidad (redis=0, adscrita=Sí):
//   U. de Las Américas: 4.730.000 | U. Finis Terrae (2): 7.200.000 / 7.320.000 / 7.320.000
//   U. Mayor (2): 7.214.218 / 7.214.218 | U. Bernardo O'Higgins: 5.900.000
//   Promedio: (4730000+7200000+7320000+7320000+7214218+7214218+5900000) / 7 = 6.699.776
//
// UNIVERSIDADES PRIVADAS — sin gratuidad (redis=0, adscrita=No):
//   U. Gabriela Mistral (5): 4.814.000 x5 | UNIACC (3): 4.210.000 / 4.030.000 / 4.210.000
//   U. del Desarrollo (3): 10.364.360 / 9.754.692 / 6.056.038 | U. Andrés Bello (4): 7.136.000 / 5.069.000 / 7.148.000 / 7.065.000
//   U. Adolfo Ibáñez: 9.754.692 | U. de Viña del Mar: 4.277.000
//   Promedio: (4814000*5 + 4210000+4030000+4210000 + 10364360+9754692+6056038 + 7136000+5069000+7148000+7065000 + 9754692 + 4277000) / 18 = 6.394.049

new Chart(document.getElementById("tipoInstitucion"), {
    type: "bar",
    data: {
        labels: ["Estatal CRUCH", "Privada CRUCH", "Privada con gratuidad", "Privada sin gratuidad"],
        datasets: [
            {
                label: "Arancel anual promedio",
                data: [5261886, 6366875, 6699776, 6394049],
                backgroundColor: [
                    "rgba(74,144,164,0.85)",
                    "rgba(74,144,164,0.55)",
                    "rgba(241,142,45,0.55)",
                    "rgba(232,87,26,0.85)",
                ],
                borderRadius: 3,
                borderSkipped: false,
            },
        ],
    },
    options: {
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
                    label: function (context) {
                        return "Arancel promedio: $ " + Math.round(context.raw).toLocaleString("es-CL");
                    },
                },
            },
        },
        scales: {
            x: {
                grid: { display: false },
                border: { color: "#ccc" },
                ticks: {
                    font: { family: "'Georama', sans-serif", size: 11 },
                    color: "#555",
                },
            },
            y: {
                grid: { color: "rgba(0,0,0,0.06)" },
                border: { color: "#bbb", dash: [4, 4] },
                ticks: {
                    font: { family: "'Georama', sans-serif", size: 11 },
                    color: "#999",
                    callback: function (value) {
                        return "$ " + (value / 1000000).toFixed(1) + "M";
                    },
                },
                suggestedMax: 8000000,
            },
        },
    },
});


// ── Gráfico 3: Top 10 universidades más convenientes para estudiar Diseño ──
//
// Puntaje de conveniencia (0–100) calculado combinando tres factores con igual peso:
//   1. Arancel bajo (33%): normalizado inversamente — menor arancel = mayor puntaje
//   2. Gratuidad disponible (33%): Sí = 100 puntos, No = 0
//   3. Acreditación (33%): escala 3–7 años normalizada a 0–100
//
// Universidades consideradas (una entrada por institución, usando el arancel más bajo
// disponible cuando tiene varias sedes o menciones):
//
// | Universidad                        | Arancel    | Gratuidad | Acred. | Puntaje |
// |------------------------------------|------------|-----------|--------|---------|
// | U. de La Serena                    | 4.071.000  | Sí        | 5      | 86.8    |
// | U. de Playa Ancha                  | 4.305.000  | Sí        | 5      | 84.3    |
// | U. del Bío-Bío                     | 4.307.000  | Sí        | 5      | 84.2    |
// | UTEM                               | 4.763.300  | Sí        | 4      | 76.5    |
// | U. de Santiago de Chile (USACH)    | 4.989.000  | Sí        | 7      | 79.5    |
// | U. Católica de Temuco              | 5.276.000  | Sí        | 5      | 73.8    |
// | U. de Antofagasta                  | 5.120.000  | Sí        | 5      | 75.2    |
// | U. del Desarrollo (Concepción)     | 6.056.038  | No        | 6      | 43.1    |  ← queda fuera del top 10
// | U. Austral de Chile                | 5.887.000  | Sí        | 6      | 69.1    |
// | U. de Talca                        | 5.887.000  | Sí        | 6      | 69.1    |
// | U. de Valparaíso                   | 5.713.000  | Sí        | 6      | 70.9    |
// | U. de Chile                        | 5.492.400  | Sí        | 7      | 75.8    |
//
// Fórmula por factor (arancel mín=4.071.000, máx=10.364.360):
//   puntaje_arancel = (max - arancel) / (max - min) * 100
//   puntaje_gratuidad = gratuidad ? 100 : 0
//   puntaje_acred = (acred - 3) / (7 - 3) * 100
//   total = (puntaje_arancel + puntaje_gratuidad + puntaje_acred) / 3

const top10 = [
    { uni: "U. de La Serena",         arancel: 4071000,  gratuidad: true,  acred: 5, puntaje: 86.8 },
    { uni: "U. de Playa Ancha",       arancel: 4305000,  gratuidad: true,  acred: 5, puntaje: 84.3 },
    { uni: "U. del Bío-Bío",          arancel: 4307000,  gratuidad: true,  acred: 5, puntaje: 84.2 },
    { uni: "USACH",                   arancel: 4989000,  gratuidad: true,  acred: 7, puntaje: 79.5 },
    { uni: "UTEM",                    arancel: 4763300,  gratuidad: true,  acred: 4, puntaje: 76.5 },
    { uni: "U. de Chile",             arancel: 5492400,  gratuidad: true,  acred: 7, puntaje: 75.8 },
    { uni: "U. de Antofagasta",       arancel: 5120000,  gratuidad: true,  acred: 5, puntaje: 75.2 },
    { uni: "U. Católica de Temuco",   arancel: 5276000,  gratuidad: true,  acred: 5, puntaje: 73.8 },
    { uni: "U. de Valparaíso",        arancel: 5713000,  gratuidad: true,  acred: 6, puntaje: 70.9 },
    { uni: "U. Austral / U. de Talca",arancel: 5887000,  gratuidad: true,  acred: 6, puntaje: 69.1 },
].sort((a, b) => b.puntaje - a.puntaje);

new Chart(document.getElementById("topUniversidades"), {
    type: "bar",
    data: {
        labels: top10.map((d) => d.uni),
        datasets: [
            {
                label: "Puntaje de conveniencia",
                data: top10.map((d) => d.puntaje),
                backgroundColor: top10.map((d, i) =>
                    i === 0 ? "rgba(232,87,26,0.9)" : "rgba(241,142,45,0.65)"
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
                    label: function (context) {
                        const d = top10[context.dataIndex];
                        return [
                            "Puntaje: " + d.puntaje + " / 100",
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
