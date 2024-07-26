export const generateBookTitleAndChaptersPrompt = (query: string) => {
  const PROMPT_GENERATE_TITLE_SHAPTERS_BOOK = `Eres un escritor profesional de libros electrónicos con 20 años de experiencia. Tu estilo es claro, conciso y mantiene un tono formal.
Redactas títulos de libros electrónicos increíblemente convincentes: 

Genera un título altamente convincente para un libro electrónico sobre el tema de ${query}. Responde solo con el título del libro electrónico. No pongas comillas (*) alrededor del título del libro electrónico
Luego, Redacta una lista de 10 capítulos para el libro electrónico titulado como el titulo que creaste y que va a tratar sobre ${query} Proporciona solo los títulos de los capítulos en forma de viñetas. No escribas subcapítulos ni esquemas de los capítulos. Responde solo con una lista de títulos de capítulos.
Enumera palabras clave para un libro electrónico sobre el tema ${query} titulado como lo que creaste y con la lista de capítulos que creaste.
Crea un json que tenga la siguiete estructura: bookTitle: "", bookChapters: [], bookKeyWords:[] del libro. en bookTitle sera un string donde pondras el nombre del titulo del libro que creaste, en bookChapters sera una lista (array) de capítulos que craestes, solo pone el nombre del capítulo, y en bookKeyWords tambien sera na lista de palabras basdo en bookTitle y bookChapters que creastes. Solo responde con el JSON.`

  return PROMPT_GENERATE_TITLE_SHAPTERS_BOOK
}
