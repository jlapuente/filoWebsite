import { Article, CONSTANTS } from "./constants";

export class ARTICLES {
  static readonly articuloPiePagina: Article = new Article('Javier Lapuente', 'Guia de Word 01', 'Como citar a pie de pagina', 'Sat Feb 13 2021 12:19:12',
    '<p>Para la asignatura de <u>Teorías Filosóficas de la Ciudadanía</u> se nos ha pedido aprender a citar a pie de página debido a los trabajos monográficos ' +
    'con los que se acreditará que hemos leido los textos obligatorios.<br>' +
    "En esta guia por un lado mostraré como insertar notas a pie de pagina en Word usando la herramienta <i>Referencias</i> y mostraré el formato para dichas citas" +
    '</p><div class="videoContainer"><iframe class="video" src="https://www.youtube.com/embed/tmm1o2x2wVA" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe></div>' +
    '<p>Una vez insertada una nota a fin de pagina deberemos crear una nueva fuente bibliografica (si es que no la hemos creado ya) e insertarla en la nota recien creada' +
    '</p><div class="videoContainer"><iframe class="video" src="https://www.youtube.com/embed/AM2KumCYj_k" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe></div>', '0')
  static readonly articuloPiePagina2: Article = new Article("Javier Lapuente", 'Articulo de Prueba', 'Como hacer tal y tal', new Date, "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged.It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum. <br> <img src='" + CONSTANTS.mainFolder + CONSTANTS.carousselFolder + "/day_dreaming.svg'>", "1");

  static listOfArticles: Article[] = [ARTICLES.articuloPiePagina, ARTICLES.articuloPiePagina2];
  constructor() {
    // ARTICLES.listOfArticles.push(ARTICLES.articuloPiePagina);
    // console.log(ARTICLES.listOfArticles);
  }
}