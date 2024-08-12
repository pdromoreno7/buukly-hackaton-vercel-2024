export const PATHNAMES = {
  'sign-in': '/sign-in',
  'sign-up': '/sign-up',
  'forgot-password': '/forgot-password',
  'reset-password': '/reset-password',
  'success-register': '/success-register',
  generate: '/generate',
  faq: '/faq',
  about: '/about',
  'terms-privacy': '/legal/terms-privacy',
}

export const MENU_ENTRIES = [
  {
    label: 'Mi cuenta',
    href: '#',
  },
  {
    label: 'Generar libro',
    href: PATHNAMES.generate,
  },
  {
    label: 'Preguntas frecuentes',
    href: PATHNAMES.faq,
  },
  {
    label: 'Acerca de',
    href: PATHNAMES.about,
  },
  {
    label: 'Uso legal',
    href: PATHNAMES['terms-privacy'],
  },
]

export const SUGGESTIONS = [
  {
    title: 'Sugerencia 1',
    description: 'Introducción a la programación web',
    icon: 'code',
  },
  {
    title: 'Sugerencia 2',
    description: 'Fundamentos de diseño.',
    icon: 'design',
  },
  {
    title: 'Sugerencia 3',
    description: '⁠Introducción a la computación en la nube.',
    icon: 'cloud',
  },
]

export const QUESTIONS = [
  {
    title: '¿Cómo puedo generar un nuevo libro con Buucly?',
    content:
      'Para generar un nuevo libro, ve a la sección "Crear Libro" en tu dashboard. Allí podrás seleccionar el género, tema y longitud deseada. Luego, sigue las instrucciones para personalizar tu historia y la IA de Buucly generará tu libro único.',
  },
  {
    title: '¿Puedo editar el contenido generado por la IA?',
    content:
      'Sí, puedes editar el contenido generado por la IA. Una vez que tu libro esté listo, tendrás acceso a un editor en línea donde podrás realizar cambios, añadir contenido adicional o refinar la historia según tus preferencias.',
  },
  {
    title: '¿Cuánto tiempo tarda en generarse un libro?',
    content:
      'El tiempo de generación varía dependiendo de la longitud y complejidad del libro. Típicamente, un libro corto puede estar listo en unos 15-30 minutos, mientras que una novela más larga podría tardar entre 1-2 horas. Te notificaremos por correo electrónico cuando tu libro esté listo.',
  },
  {
    title: '¿Cómo puedo cambiar mi contraseña?',
    content:
      'Para cambiar tu contraseña, ve a la sección de configuración de tu cuenta y selecciona la opción de cambiar contraseña.',
  },
  {
    title: '¿Cómo puedo cambiar mi nombre de usuario?',
    content:
      'Para cambiar tu nombre de usuario, ve a la sección de configuración de tu cuenta y selecciona la opción de cambiar nombre de usuario.',
  },
  {
    title: '¿Cómo puedo cambiar mi foto de perfil?',
    content:
      'Para cambiar tu foto de perfil, ve a la sección de configuración de tu cuenta y selecciona la opción de cambiar foto de perfil.',
  },
]

export const HOW_TO = [
  {
    step: 'Paso #1',
    title: 'Piensa en el tema que necesitas',
    description:
      'Una vez tengas claro lo que quieres leer, redacta el promt adecuado para generar el libro.',
  },
  {
    step: 'Paso #2',
    title: 'Verifica el contenido',
    description:
      'Tendrás una vista previa del contenido de los capítulos de tu libro para verificar que el contenido sea de tu agrado.',
  },
  {
    step: 'Paso #3',
    title: 'Lee en donde prefieras',
    description:
      'Disfruta de tu libro directamente en la app o descárgalo y úsalo en tu lector digital favorito.',
  },
]

export const HOW_IT_WORK = [
  'Algoritmos de IA avanzados para generar tramas y personajes.',
  'Personalización basada en preferencias del usuario.',
  'Generación de ilustraciones únicas para cada libro.',
  'Edición y refinamiento asistido por IA.',
  'Opciones de publicación digital y física bajo demanda.',
]

export const TERMS = [
  {
    title: 'Prohibición de Venta y Reproducción',
    description:
      'Está prohibida la venta, distribución o reproducción no autorizada de los libros generados a través de Buucly. Los libros deben usarse exclusivamente para fines personales o educativos.',
  },
  {
    title: 'Restricciones en la Creación de Libros',
    description:
      'No está permitido crear libros que incluyan contenido de otros autores sin su autorización. Los usuarios deben asegurarse de que todo el contenido generado no infrinja los derechos de propiedad intelectual de terceros.',
  },
  {
    title: 'Responsabilidad del Usuario',
    description:
      'El usuario es responsable de garantizar que el contenido de los libros generados cumpla con todas las leyes de derechos de autor y propiedad intelectual. Buucly no asume responsabilidad por el uso indebido del contenido creado.',
  },
]
