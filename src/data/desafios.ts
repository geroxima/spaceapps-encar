export interface ChallengeItem {
  label: string;
  description: string;
  altdescription: string;
  challengeUrl: string;
  imageUrl: string;
  subjects: string[];
  difficulty: string[];
}

export const challenges: ChallengeItem[] = [
  {
    label:
      "Abandonados pero no Olvidados: Contando la Historia del Equipo Desechado de la NASA en la Luna y Marte",
    description:
      "Desde la década de 1960, la NASA ha dejado equipos por todo el sistema solar: en la Luna, en Marte y en el espacio profundo. Desde rovers e instrumentos que ya completaron sus misiones científicas hasta sondas que siguen alejándose de la Tierra, estos equipos varían enormemente tanto en su propósito como en su nivel actual de funcionamiento. Tu desafío es contar la historia de algunos (o todos) de estos equipos para presentarles a los estudiantes entusiastas del espacio el hardware y la ciencia que hicieron posible.",
    altdescription:
      "Tres diseños de rovers de Marte posicionados juntos en un terreno rocoso de prueba.",
    challengeUrl:
      "https://www.spaceappschallenge.org/2026/challenges/abandoned-but-not-forgotten-storytelling-about-nasas-discarded-equipment-on-the-moon-and-mars/",
    imageUrl: "/src/assets/images/1.jpg",
    subjects: ["Astrofísica", "Planetas y Lunas", "Exploración Espacial"],
    difficulty: ["Intermedio", "Principiante / Jóvenes"],
  },
  {
    label: "¡Sé un Detective de Tendencias del Sistema Terrestre!",
    description:
      'El cambio es constante en el sistema ambiental interconectado de la Tierra, y cuando avanza en una dirección constante —subiendo o bajando, aumentando o disminuyendo, engrosándose o afinándose— las variables medidas lo reflejan. Sin embargo, una variable puede tener una tendencia en una región y la opuesta en otra, incluso cuando el mismo proceso impulsa ambas. Tu desafío es encontrar y examinar variables medidas por misiones de la NASA o generadas por modelos de la NASA, visualizar cómo cambian con el tiempo y determinar qué está cambiando, dónde, cuánto y si estos cambios son lo que los científicos consideran "significativos".',
    altdescription:
      "Ilustración de la Tierra con cuatro cuadrantes mostrando diferentes capas de datos globales, incluyendo clima, precipitaciones, superficie terrestre y patrones atmosféricos.",
    challengeUrl:
      "https://www.spaceappschallenge.org/2026/challenges/be-an-earth-system-trend-detective/",
    imageUrl: "/src/assets/images/2.jpg",

    subjects: ["Ciencias de la Tierra", "Software"],
    difficulty: ["Avanzado"],
  },
  {
    label: "Construir un Simulador de Misiones para Jóvenes Astronautas",
    description:
      "El contenido STEM con temática espacial a menudo simplifica demasiado las concesiones y sacrificios de ingeniería que definen una misión real, o bien los presenta a un nivel demasiado complejo para mantener la atención de un aprendiz joven. Pocas herramientas hacen que esos compromisos sean tangibles y divertidos a la vez. Tu desafío es diseñar y construir un juego o aplicación interactiva que permita a los estudiantes administrar un puesto de avanzada lunar o marciano, equilibrando demandas contrapuestas como soporte vital, protección contra la radiación, energía y producción de alimentos, para que experimenten de primera mano las decisiones que determinan si una misión fracasa o tiene éxito.",
    altdescription:
      "La astronauta de la NASA Christina Koch mirando a la Tierra a través de la ventana.",
    challengeUrl:
      "https://www.spaceappschallenge.org/2026/challenges/build-a-junior-astronaut-mission-trainer/",
    imageUrl: "/src/assets/images/3.jpg",

    subjects: [
      "Juegos",
      "Planetas y Lunas",
      "Software",
      "Exploración Espacial",
      "Sol",
    ],
    difficulty: ["Intermedio", "Principiante / Jóvenes"],
  },
  {
    label: "Navegador de Misiones Lunares CLPS",
    description:
      "Las misiones al polo sur de la Luna enfrentan limitaciones extremas de iluminación y comunicación, y planificarlas requiere una cuidadosa coordinación entre los equipos de ciencia e ingeniería. Existen herramientas para determinar las posiciones del Sol y la Tierra en posibles sitios de aterrizaje, pero sus complicadas interfaces dificultan la evaluación eficiente de información crítica. Tu desafío es crear una herramienta o aplicación intuitiva que permita a los planificadores de misiones, educadores y al público comparar rápidamente lugares y fechas de aterrizaje, visualizando las posiciones del Sol y la Tierra con respecto al horizonte para evaluar el potencial de generación de energía y las ventanas de comunicación directa con la Tierra.",
    altdescription:
      "https://www.spaceappschallenge.org/2026/challenges/clps-lunar-mission-browser/",
    challengeUrl: "",
    imageUrl: "/src/assets/images/4.png",

    subjects: [
      "Exploración Humana",
      "Luna",
      "Software",
      "Exploración Espacial",
    ],
    difficulty: ["Avanzado", "Intermedio"],
  },
  {
    label:
      "Crear Software de Monitoreo de Salud para Astronautas en Misiones Espaciales",
    description:
      "Las misiones de larga duración exponen a los astronautas a la radiación espacial, el aislamiento y confinamiento, la gravedad alterada y un entorno cerrado y hostil, lo que puede provocar cambios inmunológicos, pérdida ósea, eventos cardiovasculares y problemas de salud conductual. En misiones largas, los astronautas llevan gran parte de la responsabilidad de detectar estos cambios en sí mismos. Tu desafío es desarrollar un software de monitoreo de salud que recopile indicadores de salud y permita a los astronautas evaluar y actuar sobre su estado de salud.",
    altdescription:
      "Un astronauta realiza un ejercicio de piernas mientras sus datos de salud se muestran en un monitor cercano, con la Tierra visible a través de la ventana detrás de él.",
    challengeUrl:
      "https://www.spaceappschallenge.org/2026/challenges/create-health-monitoring-software-for-astronauts-on-space-missions/",
    imageUrl: "/src/assets/images/5.jpg",

    subjects: ["Exploración Humana", "Software", "Exploración Espacial"],
    difficulty: ["Intermedio"],
  },
  {
    label: "Bailando con los SAR",
    description:
      "La superficie de la Tierra es una danza interminable de procesos naturales y actividades humanas, pero a menudo estos cambios son difíciles de visualizar, entender y comunicar. Desde la pérdida de humedales hasta incendios forestales, terremotos, actividades agrícolas, movimiento de glaciares y más, la Tierra está en un vals constante de cambios superficiales. Tu desafío es construir una aplicación interactiva que utilice datos de detección remota por radar de la misión del Radar de Apertura Sintética NASA-ISRO (NISAR) para rastrear y visualizar uno o más tipos de cambios superficiales en distintas partes del mundo.",
    altdescription:
      "Ilustración del satélite NISAR mostrando el Monte Rainier el 10 de noviembre de 2025, con el SAR de banda L revelando la superficie a través de las nubes.",
    challengeUrl:
      "https://www.spaceappschallenge.org/2026/challenges/dancing-with-the-sars/",
    imageUrl: "/src/assets/images/6.jpg",

    subjects: ["Ciencias de la Tierra"],
    difficulty: ["Avanzado", "Intermedio"],
  },
  {
    label: "Cambio de Campo: Adaptando las Chacras con Datos de la NASA",
    description:
      "Los productores agrícolas en todo el mundo lidian con cambios de temperatura, variaciones en los regímenes de lluvia, escasez de agua, clima extremo y el deterioro de la salud del suelo. Estas presiones dificultan la elección de rotaciones de cultivos que protejan los campos, conserven el agua y apoyen la resiliencia a largo plazo. Tu desafío es crear una herramienta de apoyo a la toma de decisiones que utilice las observaciones terrestres de la NASA junto con información local del suelo, características de los cultivos y las prioridades de los productores para ayudarlos a explorar estrategias de rotación que fortalezcan la salud del suelo y adapten sus campos a condiciones cambiantes.",
    altdescription:
      "La agricultora de Nevada Denise Moyle en sus campos de alfalfa.",
    challengeUrl:
      "https://www.spaceappschallenge.org/2026/challenges/field-shift-adapting-farms-with-nasa-data/",
    imageUrl: "/src/assets/images/7.jpg",

    subjects: ["Arte y Multimedia", "Ciencias de la Tierra", "Software"],
    difficulty: ["Avanzado", "Intermedio"],
  },
  {
    label:
      "Llama en Caída Libre: Conocimientos de Seguridad contra Incendios Impulsados por IA a partir de Datos de Combustión en Microgravedad",
    description:
      "Durante décadas, la NASA ha estudiado cómo se comportan las llamas y el fuego en microgravedad, reuniendo en el proceso un tesoro de datos experimentales. Ese conocimiento es hoy más importante que nunca mientras la humanidad se prepara para regresar a la Luna y seguir rumbo a Marte, sin embargo, el volumen de los resultados hace que sean difíciles de encontrar, comparar y entender. Tu desafío es crear un tablero interactivo impulsado por IA que resuma, clasifique e interprete esos hallazgos para brindar información sobre seguridad contra incendios útil para la exploración espacial humana.",
    altdescription:
      "Imagen de una llama quemando una de las pruebas de BASS sobre la extinción de combustibles en llamas.",
    challengeUrl:
      "https://www.spaceappschallenge.org/2026/challenges/flame-in-freefall-ai-powered-fire-safety-insights-from-microgravity-combustion-data/",
    imageUrl: "/src/assets/images/8.jpg",

    subjects: ["Exploración Espacial"],
    difficulty: ["Avanzado", "Intermedio"],
  },
  {
    label: "Armonización de los Focos de Calor de MODIS y VIIRS",
    description:
      "Entender cómo se distribuye la actividad de quema en nuestro planeta a lo largo del tiempo, incluyendo incendios forestales y quemas agrícolas lo suficientemente intensas como para ser detectadas por satélites, nos permite anticipar períodos críticos, guiar los esfuerzos de monitoreo y mejorar la respuesta ante el fuego. Los satélites han rastreado focos de calor durante más de dos décadas, pero el registro está dividido entre sensores cuyos datos no se pueden comparar directamente, dejando a los gestores de incendios sin un panorama consistente de cuándo y dónde ha ocurrido el fuego. Tu desafío es construir una aplicación web que armonice estos registros en un calendario de actividad de quema basado en focos de calor activos, permitiendo a los sistemas de alerta temprana, equipos de emergencia, científicos y gestores de tierras examinar patrones históricos de incendios, condiciones inusuales y períodos críticos dentro de un área de interés seleccionada.",
    altdescription: "",
    challengeUrl:
      "https://www.spaceappschallenge.org/2026/challenges/harmonization-of-modis-and-viirs-hot-spots/",
    imageUrl: "/src/assets/images/9.png",

    subjects: ["Ciencias de la Tierra", "Software"],
    difficulty: ["Avanzado", "Intermedio"],
  },
  {
    label:
      "Identificar Lugares en la Tierra Análogos a las Bases Permanentes en la Luna y Marte",
    description:
      "La selección de futuros sitios de aterrizaje y ubicaciones para bases lunares depende de muchos factores, incluyendo topografía, geología, medio ambiente y recursos disponibles, por nombrar algunos. Los lugares en la Tierra que tienen características análogas a la Luna o Marte —como el Desierto de Atacama, el Cráter Haughton, el Valle de la Muerte— permiten a los equipos de misión probar equipos y métodos antes de volar; sin embargo, este tipo de sitios análogos terrestres no están completamente caracterizados. Tu desafío es utilizar datos abiertos de la Tierra, la Luna y Marte de la NASA y otras agencias espaciales para identificar y caracterizar nuevos análogos terrestres para futuras bases o sitios de aterrizaje, explorando desiertos, regiones polares, terrenos volcánicos y áridos, cuevas y otros entornos que compartan condiciones con la superficie lunar o marciana.",
    altdescription:
      "Una Tierra azul apagada con nubes blancas brillantes se pone detrás de la superficie lunar llena de cráteres.",
    challengeUrl:
      "https://www.spaceappschallenge.org/2026/challenges/identify-earth-locations-that-analog-the-permanent-moon-base-locations-and-mars/",
    imageUrl: "/src/assets/images/10.png",

    subjects: [
      "Ciencias de la Tierra",
      "Planetas y Lunas",
      "Software",
      "Exploración Espacial",
    ],
    difficulty: ["Avanzado", "Intermedio", "Principiante / Jóvenes"],
  },
  {
    label: "Guía de Supervivencia Interplanetaria: Mapa Marciano",
    description:
      "La NASA ha explorado Marte de forma robótica durante décadas, estudiando su entorno extremo, cartografiando su superficie y recopilando muchos tipos de datos. Lejos de casa, los primeros astronautas en pisar Marte querrán tener el mejor mapa posible, con información detallada sobre sus rutas y destinos, actualizaciones de las condiciones actuales y los datos necesarios para completar su misión de manera rápida y segura. Tu desafío es crear una vista integrada y en capas de una ubicación o ruta en la superficie marciana que reúna datos de múltiples misiones científicas de la NASA y que pueda ayudar a un explorador humano a planificar y llevar a cabo una caminata marciana exitosa mientras realiza ciencia nueva y emocionante en el camino.",
    altdescription:
      "El rover Perseverance de la NASA tomándose una selfie mientras explora el Planeta Rojo.",
    challengeUrl:
      "https://www.spaceappschallenge.org/2026/challenges/interplanetary-survival-guide-martian-map/",
    imageUrl: "/src/assets/images/11.jpg",

    subjects: [
      "Exploración Humana",
      "Marte",
      "Planetas y Lunas",
      "Software",
      "Exploración Espacial",
    ],
    difficulty: ["Intermedio"],
  },
  {
    label: "El Planeta X y SPHEREx",
    description:
      "Desde 2025, la misión SPHEREx de la NASA ha estado mapeando todo el cielo cada seis meses en 102 bandas de luz infrarroja cercana, capturando imágenes de más de mil millones de objetos. Cometas, asteroides, estrellas, enanas marrones e incluso nuevos planetas se revelan al cambiar de posición entre una imagen y otra, pero ninguna persona puede revisar todos esos datos por sí sola. Tu desafío es crear una herramienta web pública para mostrar imágenes del cielo tomadas por la misión SPHEREx, facilitando que cualquier persona pueda ver rápidamente cómo cambian con el tiempo.",
    altdescription:
      "Ilustración de la nave espacial SPHEREx sobre la Tierra, con un detallado fondo cósmico.",
    challengeUrl:
      "https://www.spaceappschallenge.org/2026/challenges/planet-x-and-spherex/",
    imageUrl: "/src/assets/images/12.jpg",

    subjects: ["Astrofísica", "Planetas y Lunas", "Software"],
    difficulty: ["Avanzado"],
  },
  {
    label: "Juego de Diseño de Misiones Espaciales",
    description:
      "El diseño de una misión espacial requiere la consideración cuidadosa de demandas contrapuestas, incluyendo los objetivos de la misión, el diseño de la nave espacial, los instrumentos científicos, los vehículos de lanzamiento, los presupuestos, la energía, la masa, las comunicaciones y las restricciones orbitales. Para los estudiantes que rara vez tienen la oportunidad de experimentar con una misión completa, desde su concepto hasta la operación, estas concesiones a menudo resultan muy abstractas. Tu desafío es crear un juego interactivo que permita a los participantes diseñar, gestionar y simular una misión espacial completa, tomando decisiones de ingeniería, administrando recursos limitados y evaluando cómo cada elección da forma al éxito de su misión.",
    altdescription:
      "Un astronauta realiza una caminata espacial sobre la Tierra, sosteniendo un gran panel circular de equipos mientras está sujeto a la nave espacial.",
    challengeUrl:
      "https://www.spaceappschallenge.org/2026/challenges/space-mission-design-game/",
    imageUrl: "/src/assets/images/13.jpg",

    subjects: ["Juegos"],
    difficulty: ["Intermedio", "Principiante / Jóvenes"],
  },
  {
    label: "La Rocola de Información de la Tierra",
    description:
      'El Centro de Información de la Tierra (EIC) de la NASA produce visualizaciones impresionantes de nuestro planeta en constante cambio, pero presentar las ciencias de la Tierra basándose únicamente en la visualización limita quién puede acceder a ellas. Te invitamos a hacer que esta compleja ciencia de la Tierra sea accesible, atractiva y multisensorial mediante la traducción de lo visual al sonido. Tu desafío es construir una "Rocola de la Tierra": una interfaz, script o aplicación que vincule los marcos visuales del Centro de Información de la Tierra (EIC) con sonificaciones dinámicas generadas en tiempo real.',
    altdescription:
      "Una persona de pie en Space for Earth, una experiencia inmersiva que forma parte del Centro de Información de la Tierra, rodeada de proyecciones digitales brillantes de la Tierra y un follaje verde vibrante con patrones de luz fluyendo por el suelo.",
    challengeUrl:
      "https://www.spaceappschallenge.org/2026/challenges/the-earth-information-jukebox/",
    imageUrl: "/src/assets/images/14.jpg",

    subjects: ["Arte y Multimedia", "Ciencias de la Tierra", "Software"],
    difficulty: ["Intermedio", "Principiante / Jóvenes"],
  },
];
