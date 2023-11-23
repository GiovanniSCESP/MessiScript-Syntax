exports.COMMANDS = {
	"La agarra Messi.": {
		"doc":"Indica el comienzo del código.",
		"code": "La agarra Messi.\n...\n¡gol!",
		"type": "snippet",
		"snippet": "La agarra Messi.\n$0\n¡gol!"
	},
	"¡gol!": {
		"doc":"Indica el final del código.",
		"code": "La agarra Messi.\n...\n¡gol!",
		"type": "simple"
	},
	"Va Messi,": {
		"doc":"Asigna un valor a la posición actual de la lista. Es el único comando que además necesita que se le pase un parámetro. Es una oración que permite determinar el valor que se asignará.",
		"code": "Va Messi, talento único.# => 2.",
		"type": "snippet",
		"snippet": "Va messi, ${1:ms:sustantivo}."
	},
	"Encara Messi.": {
		"doc":"Asigna un cero a la posición actual de la lista.",
		"code": "Va Messi, talento único.# => 2.\nEncara Messi.# => 0",
		"type": "simple"
	},
	"Ankara Messi.": {
		"doc":"Asigna un cero a la posición actual de la lista.",
		"code": "Va Messi, talento único.# => 2.\nAnkara Messi.# => 0",
		"type": "simple"
	},
	"La mueve Messi por la derecha.": {
		"doc":"Cambia la posición a la derecha.",
		"type": "simple"
	},
	"La mueve Messi por la izquierda.": {
		"doc":"Cambia la posición a la izquierda.",
		"type": "simple"
	},
	"Juega Messi.": {
		"doc":"Muestra por pantalla el número de la posición actual de la lista.",
		"code": "Va Messi, talento único.\nJuega Messi.# => 2",
		"type": "simple"
	},
	"La pisa Messi.": {
		"doc":"Muestra por pantalla el caracter correspondiente en UNICODE al número de la posición actual de la lista.",
		"code": "Va Messi, talento único.\nLa pisa Messi.# => ☻",
		"type": "simple"
	},
	"Siempre Messi.": {
		"doc":"Toma un input numérico del usuario, y lo guarda en la posición actual de la lista. Si el input no es un número entero, se ignora.",
		"type": "simple"
	},
	"Gambetea Messi.": {
		"doc":"Toma un input del usuario, y guarda el número correspondiente en UNICODE al primer caracter que se ingresa.",
		"type": "simple"
	},
	"Sigue Messi.": {
		"doc":"Si la posición actual es cero, se saltea todos los comandos hasta encontrarse un 'vuelve Messi'. Si no lo es, ejecuta los comandos hasta encontrarse con un comando 'vuelve Messi' y luego vuelve al comando. Una vez que vuelve, corrobora de vuelta el valor de la posición actual, y actúa de la misma forma.",
		"code": "Sigue Messi.\n...\nVuelve Messi.",
		"type": "snippet",
		"snippet": "Sigue Messi.\n$0\nVuelve Messi."
	},
	"Vuelve Messi.": {
		"doc":"Indica el final de un bucle de comandos iniciado por un comando 'sigue Messi'.",
		"code": "Sigue Messi.\n...\nVuelve Messi.",
		"type": "simple"
	},
	"Corre Messi.": {
		"doc":"Copia el contenido de la posición actual de la lista al portapapeles.",
		"type": "simple"
	},
	"Amaga Messi.": {
		"doc":"Copia el contenido del portapapeles a la posición actual de la lista.",
		"type": "simple"
	}
};

exports.NOUNS = [
	"actuación", "actuaciones",
	"astro", "astros",
	"banda", "bandas",
	"calidad", "calidades",
	"campo", "campos",
	"cancha", "canchas",
	"centro", "centros",
	"clase", "clases",
	"dios", "dioses",
	"estadio", "estadios",
	"estrella", "estrellas",
	"figura", "figuras",
	"galaxia", "galaxias",
	"gambeta", "gambetas",
	"habilidad", "habilidades",
	"ídola", "ídolo", "ídolos", "ídolos",
	"jugada", "jugadas",
	"jugador", "jugadora", "jugadores", "jugadoras",
	"lateral", "laterales",
	"leo", "lio", "leonel", "lionel",
	"muchacho", "muchachos", "muchacha", "muchachas",
	"mundo", "mundos",
	"país", "países",
	"partido", "partidos",
	"pelota", "pelotas",
	"pibe", "pibes", "piba", "pibas",
	"planeta", "planetas",
	"potencial", "potenciales",
	"pulga", "pulgas",
	"república", "repúblicas",
	"talento", "talentos",
	"titán", "titanes",
	"tribuna", "tribunas",
	"toda", "todo", "todas", "todos",
];

exports.ADJECTIVES = [
	"argentina", "argentino", "argentinas", "argentinos",
	"favorita", "favorito", "favoritas", "favoritos",
	"fenomenal", "fenomenales",
	"futbolística", "futbolísticas", "futbolístico", "futbolísticos",
	"habilidosa", "habilidoso", "habilidosas", "habilidosos",
	"increible", "increibles",
	"irrepetible", "irrepetibles",
	"impecable", "impecables",
	"impresionante", "impresionantes",
	"magistral", "magistrales",
	"maravilloso", "maravillosa", "maravillosos", "maravillosas",
	"mundial", "mundiales",
	"nacional", "nacionales",
	"talentosa", "talentoso", "talentosas", "talentosos",
	"titánica", "titánico", "titánicas", "titánicos",
	"tremenda", "tremendo", "tremendas", "tremendos",
	"única", "único", "únicas", "únicos",
];
