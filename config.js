var config = {
    style: 'mapbox://styles/jairo695/ck5igpqny0jhx1itlgg14u4ir',
    accessToken: 'pk.eyJ1IjoiamFpcm82OTUiLCJhIjoiY2s1aTlxaHFwMDVxYTNtcDI4NjlvMnNmMSJ9.JxibOrKRuIIfT7fL-0SrTQ',
    showMarkers: true,
    theme: 'light',
    alignment: 'left',
    title: 'Especial Elecciones 2020',
    subtitle: 'Un calendario de coberturas detallado',
    byline: 'Efe News',
    footer: '',
    chapters: [
    	{
            id: 'washington',
            title: 'Despliegue',
            image: '',
            description: 'Nos desplegaremos desde nuestros centros de operaciones en Washington, Nueva York, Florida, California y Texas.',
            location: {
                center: [-77.020636, 38.886900],
                zoom: 8,
                pitch: 60,
                bearing: -43.2
            },
            onChapterEnter: [],
            onChapterExit: []
        },
    
        {
            id: 'iowa',
            title: 'Iowa. 3 de febrero',
            image: './image/bea.jpg',
            description: 'Viajaremos a Iowa para entender el impacto de la política comercial de Donald Trump en los agricultores. ¿Influirá la nueva tregua con China en el resultado de los caucus demócrata? En nuestro viaje, también reflexionaremos sobre otros tres grandes temas para los iowanos: el cambio climático, la desindustrialisation y los cambios demográficos del estado.',
            location: {
                center: [-93.24889, 41.30369],
                zoom: 7,
                pitch: 60,
                bearing: 0
            },
            onChapterEnter: [
                // {
                //     layer: 'layer-name',
                //     opacity: 1
                // }
            ],
            onChapterExit: [
                // {
                //     layer: 'layer-name',
                //     opacity: 0
                // }
            ]
        },
        {
            id: 'NH',
            title: 'New Hampshire. 11 de febrero',
            image: './image/albert.png',
            description: 'Primaria importante para conocer qué candidato demócrata se consolida',
            location: {
                center: [-71.44791, 42.88482],
                zoom: 5,
                pitch: 60,
                bearing: -43.2
            },
            onChapterEnter: [],
            onChapterExit: []
        },
        {
            id: 'Nevada',
            title: 'Nevada. 22 de febrero',
            image: './path/to/image/source.png',
            description: 'La primaria de calado en la que los hispanos harán escuchar su voz sobre qué candidato demócrata prefieren que se enfrnte a Trump',
            location: {
                center: [-115.40700, 36.23850],
                zoom: 5,
                pitch: 60,
                bearing: 0
            },
            onChapterEnter: [],
            onChapterExit: []
        },
        {
            id: 'Supermartes',
            title: 'Supermartes. 4 de marzo',
            image: './path/to/image/source.png',
            description: 'Fecha clave para saber si uno de los candidato demócratas desmarca en la contienda de primarias. Estaremos en Texas, California y en la costa este.',
            location: {
                center: [-100.07681, 31.31958],
                zoom: 3,
                pitch: 45,
                bearing: 0
            },
            onChapterEnter: [],
            onChapterExit: []
        },
        {
            id: 'abril',
            title: 'Nueva York, Maryland y Pensilvania. 28 de abril',
            image: './path/to/image/source.png',
            description: 'Nueva York, Pensilvania y Maryland celebran primarias. Para esta fecha es muy probable que sepamos quién es el candidato demócrata oficioso. Bernie? Biden? Warren?',
            location: {
                center: [-73.97996, 40.69785],
                zoom: 9,
                pitch: 45,
                bearing: 0
            },
            onChapterEnter: [],
            onChapterExit: []
        },
        {
            id: 'michigan',
            title: 'Michigan. 10 de marzo',
            image: './path/to/image/source.png',
            description: 'Este estado del Medio Oeste es clave para entender si los demócratas contarán el apoyo del americano medio frente a Trump.',
            location: {
                center: [-86.27068, 45.09663],
                zoom: 5,
                pitch: 45,
                bearing: 0
            },
            onChapterEnter: [ {
                layer: 'Los estados clave',
                opacity: 1
                }],
            onChapterExit: []
        },
        {
            id: 'florida',
            title: 'Florida. 17 de marzo',
            image: './path/to/image/source.png',
            description: 'Florida es el estado "bisagra" por excelencia.Un demócrata fuerte en ese estado es un candidato fuerte frente a Trump',
            location: {
                center: [-83.75458, 27.70013],
                zoom: 6,
                pitch: 45,
                bearing: 0
            },
            onChapterEnter: [],
            onChapterExit: []
        },
        {
            id: 'democrata',
            title: 'Convención Demócrata de Milwaukee. 13-16 de julio',
            image: './path/to/image/source.png',
            description: 'Si dos candidato llegan a esta convención con posibilidades, el encuentro puede convertirse en un caótico cisma entre la rama moderada y más progresista.',
            location: {
                center: [-87.95846, 43.15262],
                zoom: 6,
                pitch: 45,
                bearing: 0
            },
            onChapterEnter: [],
            onChapterExit: []
        },
        {
            id: 'republicana',
            title: 'Convención Republicana de Charlotte. 24-27 de agosto',
            image: './path/to/image/source.png',
            description: 'Trump disfrutará de una nueva coronación frente a los delegados republicanos. Delineará su estrategia e intentará movilizar a su electorado en un año en el que se enfrenta al "impeachment"',
            location: {
                center: [-80.87443, 35.40062],
                zoom: 6,
                pitch: 45,
                bearing: 0
            },
            onChapterEnter: [],
            onChapterExit: []
        },
        {
            id: 'cierre',
            title: 'Cierre de campaña. Jornada electoral del 3 de noviembre',
            image: './path/to/image/source.png',
            description: 'Efe desplegará a sus equipos en los cuarteles generales de campaña y en los estados clave para contar una noche histórica.',
            location: {
                center: [-99.55450, 38.97532],
                zoom: 3,
                pitch: 0,
                bearing: 0
            },
            onChapterEnter: [],
            onChapterExit: []
        }
    ]

};
