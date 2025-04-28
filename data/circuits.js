const circuitos = [
    {
        nombre: "Circuito de Mónaco",
        pais: "Mónaco",
        longitud_km: 3.34,
        vueltas: 78,
        descripcion: "Uno de los circuitos más prestigiosos y difíciles del calendario, conocido por sus calles angostas y la falta de zonas de adelantamiento.",
        record_vuelta: { tiempo: "1:10.166", piloto: "Lewis Hamilton", año: 2019 },
        ganadores: [
            { temporada: 2021, piloto: 1 },
            { temporada: 2022, piloto: 2 },
            { temporada: 2023, piloto: 1 }
        ],
        imagen: "https://upload.wikimedia.org/wikipedia/commons/4/4e/Monte_Carlo_Formula_1_track_map.svg"
    },
    {
        nombre: "Silverstone",
        pais: "Reino Unido",
        longitud_km: 5.89,
        vueltas: 52,
        descripcion: "Uno de los circuitos más rápidos del calendario, con curvas de alta velocidad como Maggotts y Becketts.",
        record_vuelta: { tiempo: "1:27.097", piloto: "Max Verstappen", año: 2020 },
        ganadores: [
            { temporada: 2021, piloto: 3 },
            { temporada: 2022, piloto: 5 },
            { temporada: 2023, piloto: 1 }
        ],
        imagen: "https://upload.wikimedia.org/wikipedia/commons/5/5e/Silverstone_Circuit_2020_layout.png"
    },
    {
        nombre: "Circuito de Spa-Francorchamps",
        pais: "Bélgica",
        longitud_km: 7.00,
        vueltas: 44,
        descripcion: "Famoso por la curva Eau Rouge y la larga recta de Kemmel, un circuito donde la potencia del motor es clave.",
        record_vuelta: { tiempo: "1:46.286", piloto: "Valtteri Bottas", año: 2018 },
        ganadores: [
            { temporada: 2021, piloto: 1 },
            { temporada: 2022, piloto: 1 },
            { temporada: 2023, piloto: 1 }
        ],
        imagen: "https://upload.wikimedia.org/wikipedia/commons/1/1e/Circuit_Spa_2018.png"
    },
    {
        nombre: "Circuito de Monza",
        pais: "Italia",
        longitud_km: 5.79,
        vueltas: 53,
        descripcion: "Conocido como 'El Templo de la Velocidad', Monza es el circuito más rápido del calendario con largas rectas y chicanes icónicas.",
        record_vuelta: { tiempo: "1:21.046", piloto: "Rubens Barrichello", año: 2004 },
        ganadores: [
            { temporada: 2021, piloto: 2 },
            { temporada: 2022, piloto: 1 },
            { temporada: 2023, piloto: 1 }
        ],
        imagen: "https://upload.wikimedia.org/wikipedia/commons/3/3e/Monza_track_map.svg"
    },
    {
        nombre: "Interlagos",
        pais: "Brasil",
        longitud_km: 4.31,
        vueltas: 71,
        descripcion: "Interlagos es un circuito legendario con cambios de elevación y un trazado técnico que ha sido sede de algunas de las carreras más emocionantes de la historia.",
        record_vuelta: { tiempo: "1:10.540", piloto: "Valtteri Bottas", año: 2018 },
        ganadores: [
            { temporada: 2021, piloto: 3 },
            { temporada: 2022, piloto: 1 },
            { temporada: 2023, piloto: 1 }
        ],
        imagen: "https://upload.wikimedia.org/wikipedia/commons/2/23/Aut%C3%B3dromo_Jos%C3%A9_Carlos_Pace_%28Interlagos%29.svg"
    },
    {
        nombre: "Circuito de Yas Marina",
        pais: "Emiratos Árabes Unidos",
        longitud_km: 5.28,
        vueltas: 58,
        descripcion: "Ubicado en Abu Dhabi, es famoso por ser el circuito donde se definen muchos campeonatos, con un diseño moderno y una espectacular carrera nocturna.",
        record_vuelta: { tiempo: "1:39.283", piloto: "Lewis Hamilton", año: 2019 },
        ganadores: [
            { temporada: 2021, piloto: 1 },
            { temporada: 2022, piloto: 1 },
            { temporada: 2023, piloto: 3 }
        ],
        imagen: "https://upload.wikimedia.org/wikipedia/commons/0/0a/Yas_Marina_Circuit_2021_layout.svg"
    },
    {
        nombre: "Circuito de Suzuka",
        pais: "Japón",
        longitud_km: 5.81,
        vueltas: 53,
        descripcion: "Un circuito desafiante con un diseño en forma de ocho, famoso por sus curvas de alta velocidad como 130R y la 'S' de Senna.",
        record_vuelta: { tiempo: "1:30.983", piloto: "Lewis Hamilton", año: 2019 },
        ganadores: [
            { temporada: 2021, piloto: 1 },
            { temporada: 2022, piloto: 1 },
            { temporada: 2023, piloto: 1 }
        ],
        imagen: "https://upload.wikimedia.org/wikipedia/commons/e/eb/Suzuka_circuit_map--2005.svg"
    }
];
