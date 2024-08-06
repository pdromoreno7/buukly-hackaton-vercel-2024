export const generateBookTitleAndChaptersPrompt = (query: string) => {
  const PROMPT_GENERATE_TITLE_SHAPTERS_BOOK = `Eres un escritor profesional de libros electrónicos con 20 años de experiencia. Tu estilo es claro, conciso y mantiene un tono formal.
Redactas títulos de libros electrónicos increíblemente convincentes: 

Genera un título altamente convincente para un libro electrónico sobre el tema de ${query} No pongas comillas (*) alrededor del título del libro electrónico
Genera una descripción corta altamente convincente para un libro electrónico sobre el tema de ${query}. No pongas comillas (*) alrededor de la descripción del libro electrónico
Luego, Redacta una lista de 5 capítulos para el libro electrónico titulado como el titulo que creaste y que va a tratar sobre ${query} Proporciona solo los títulos de los capítulos en forma de viñetas. 
No escribas subcapítulos ni esquemas de los capítulos.
Enumera palabras clave para un libro electrónico sobre el tema ${query} titulado como lo que creaste y con la lista de capítulos que creaste.
estructura: bookTitle: "", bookDescription: "", bookChapters: [], bookKeyWords:[] del libro. en bookTitle sera un string donde pondras el nombre del titulo del libro 
que creaste, en bookChapters sera una lista (array) de capítulos que craestes, solo pone el nombre del capítulo, y en bookKeyWords tambien sera na lista de palabras basdo en bookTitle y bookChapters que 
creastes`

  return PROMPT_GENERATE_TITLE_SHAPTERS_BOOK
}
export const generateKeyWordToCoverBookPrompt = (title: string) => {
  const PROMPT_GENERATE_TITLE_SHAPTERS_BOOK = `Analiza este título, el cual es de un libro electrónico, infiere el tema del libro, 
  y saca solo tres palabra clave de lo que pienses que trate el libro, y traducelas al ingles: ${title}. 
 tenga la siguiete estructura: { keyWordByTitle: "" }. 
  En keyWordByTitle sera un string donde pondras las palabras claves traducidas al ingles. 
`

  return PROMPT_GENERATE_TITLE_SHAPTERS_BOOK
}
export const generateChapterTextPrompt = (
  chapterTitle: string,
  bookTitle: string,
  keyWordsBook: string,
) => {
  const PROMPT_GENERATE_TITLE_SHAPTERS_BOOK = `
Escribe todo un capítulo, detallado, muy atractivo e instructivo titulado ${chapterTitle}, 
del libro electrónico llamado ${bookTitle} con las palabras clave ${keyWordsBook}. 
Responde con el capítulo completo, EXCLUYENDO el título del capítulo. El texto el capitulo debe estar formateodo como HTML valido. 
Utliza <br> para los saltos de linea, <b> para negrita, <i> para cursiva, <u> para subrayado, <code> para código, <a> para enlaces. los subtitulos deben usar la etiqueta <b> en negrita. 
Si usas la etiqueta <code> para ejemplificar un codigo usa esta class de tailwind: <code class='bg-slate-900 p-1 text-lime-500'>.
Despues de cada parrafo usa dos <br> <br> para generar un salto de linea.
Debe incluir todas las citas relevantes que se utilizaron. Nunca uses la etiqueta HTML, body y H1, no uses ###, ni ** como formato markdown o otro elemento de este formato solo el texto con las etiquetas y no comiences con el titulo del capítulo.
Proporciona solo el contenido del capítulo.
`

  return PROMPT_GENERATE_TITLE_SHAPTERS_BOOK
}
export const generateColorBookPrompt = (bookTitle: string) => {
  const PROMPT_GENERATE_COLOR_BOOK = `
Eres un escritor profesional de libros electrónicos con 20 años de experiencia. 
Tu estilo es claro, conciso y mantiene un tono formal.
Redactas títulos de libros electrónicos increíblemente convincentes: 

Genera un color en formato hexadecimal, basandote en el ${bookTitle}.

Crea un hexadecimal que tenga la siguiete estructura: colorBook: "" . 
En colorBook sera un string donde pondras el color hexadecimal. 
Solo responde con el hexadecimal. Respodome solo con el hexadecimal no respondas más nada, solo el hexadecimal.`

  return PROMPT_GENERATE_COLOR_BOOK
}
