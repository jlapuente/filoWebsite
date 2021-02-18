export class CONSTANTS {
  static readonly POLITICS_MARKS: number[] = [5, 5, 5, 5, 5, 5, 7, 0, 10, 5, 0, 0, 7, 5, 9, 8, 7, 6, 0, 0, 5, 7, 0, 0, 5, 5, 5, 0, 6, 5, 5, 5, 6, 10, 5, 0, 0, 6, 5, 5, 10, 9, 5, 7, 5, 5, 0, 5, 5, 5, 0, 6, 5, 6, 5, 5, 5, 6, 6, 7, 5, 5, 0, 0, 5, 7, 0, 5, 5];
  static readonly LOGIC_MARKS: number[] = [6, 4, 8, 9, 6, 5, 9, 9, 8, 8, 2, 3, 1, 10, 2, 3, 1, 7, 3, 8, 9, 5, 1, 6, 7, 4, 7, 5, 8, 7, 4, 8, 2, 4, 7, 3, 7, 0, 6, 5, 3, 0, 4, 3, 4, 6, 9];
  static readonly IPF_MARKS: number[] = [8, 5, 7, 7, 0, 5, 10, 0, 0, 9, 5, 9, 9, 9, 6, 6, 8, 0, 0, 5, 9, 0, 0, 5, 0, 5, 8, 6, 0, 0, 9, 6, 8, 5, 5, 10, 9, 6, 0, 8, 0, 10, 7, 8, 5, 8, 6, 9, 9, 6, 5, 9, 7, 0, 7, 5, 7, 8, 6, 9, 6, 8, 8, 3, 5, 0, 7, 9, 0, 6, 8];
  static readonly ANTROPOLOGY_MARKS: number[] = [6, 7, 5, 0, 7, 8, 0, 9, 4, 8, 7, 8, 9, 6, 0, 6, 8, 0, 2, 5, 6, 7, 0, 8, 4, 3, 3, 8, 9, 9, 0, 0, 0, 0, 8, 6, 6, 0, 7, 9, 7, 9, 8, 9, 4, 7, 7, 8, 9, 7, 7, 0, 0, 7, 6, 6, 7, 0, 9, 7, 6, 8, 8, 0, 6, 8];
  static readonly EPISTEMOLOGY_MARKS: number[] = [6, 5, 8, 6, 6, 7, 0, 0, 8, 8, 7, 8, 7, 9, 8, 4, 7, 5, 0, 9, 0, 7, 0, 5, 6, 4, 0, 6, 5, 4, 7, 7, 0, 8, 9, 0, 0, 6, 8, 5, 8, 0, 7, 7, 5, 6, 8, 6, 6, 8, 7, 0, 7, 7, 4, 8, 7, 0, 9, 9, 7, 0, 7, 7, 0, 9, 7, 6, 4, 7, 0, 6, 7, 0, 8, 7];

  static readonly COLORS: string[] = ['rgba(84, 71, 140, 0.6)', 'rgba(44, 105, 154, 0.6)', 'rgba(4, 139, 168, 0.6)', 'rgba(13, 179, 158, 0.6)', 'rgba(22, 219, 147, 0.6)', 'rgba(131, 227, 119, 0.6)', 'rgba(185, 231, 105, 0.6)', 'rgba(239, 234, 90, 0.6)', 'rgba(241, 196, 83, 0.6)', 'rgba(242, 158, 76, 0.6)', 'rgba(255, 56, 100, 0.6)'];
  static readonly BORDER_COLORS: string[] = ['rgba(84, 71, 140, 1)', 'rgba(44, 105, 154, 1)', 'rgba(4, 139, 168, 1)', 'rgba(13, 179, 158, 1)', 'rgba(22, 219, 147, 1)', 'rgba(131, 227, 119, 1)', 'rgba(185, 231, 105, 1)', 'rgba(239, 234, 90, 1)', 'rgba(241, 196, 83, 1)', 'rgba(242, 158, 76, 1)', 'rgba(255, 56, 100, 1)'];
  static readonly SINGLE_ESCALE = 1;
  static readonly TEN_ESCALE = 10;
  static readonly FIVE_ESCALE = 5;
  static readonly TREE_DATA: InfoNode[] = [
    {
      name: 'Segundo Cuatrimestre',
      children: [
        {
          name: 'Filosofía de la Imagen', children: [
            { name: 'Drive', link: 'https://drive.google.com/drive/folders/1gggZWEe6uJDTnqiu4CKV11A3j4SiLUiX' }
          ]
        },
      ]
    }, {
      name: 'Primer Cuatrimestre',
      children: [
        {
          name: 'Asignaturas',
          children: [
            {
              name: 'Introducción a los problemas filosóficos',
              children: [
                { name: 'Pagina de la universidad', link: 'https://filosofia.unizar.es/ipf-0' },
                { name: 'Temas Redactados', link: '../../assets/docs/Temas.zip' },
                { name: 'Moodle', link: 'https://moodle.unizar.es/add/course/view.php?id=37372' },
              ]
            },
            {
              name: 'Brussels sprouts',
              children: [
                { name: 'Pagina de la universidad', link: 'https://filosofia.unizar.es/ipf-0' },
                { name: 'Temas Redactados', link: '../../assets/docs/Temas.zip' },
                { name: 'Moodle', link: 'https://moodle.unizar.es/add/course/view.php?id=37372' },
              ]
            },
          ]
        }
      ]
    }, {
      name: 'Bibliotecas / Documentos compartidos',
      children: [
        { name: 'Biblioteca Política', link: 'https://drive.google.com/drive/folders/1n5s-1kb7ebCZwAXmQvhoidGQfIrO4Ooe?usp=sharing' },
      ]
    }, {
      name: 'Otros',
      children: [
        { name: 'Spotify APK - 16/01/2021', link: '../../assets/docs/8.5.93.445_spremium-telegram.apk' },
        { name: 'Snake', link: 'https://playsnake.org/' },
      ]
    },
  ];
  static readonly assetsFolder: string = 'src/assets';
  static readonly mainFolder: string = '../..';
  static readonly carousselFolder: string = '/assets/img/caroussel/';
  static readonly videoFolder: string = '/assets/videos/';
  static readonly GALERY_IMAGES: string[] = [CONSTANTS.mainFolder + CONSTANTS.carousselFolder + 'day_dreaming.svg', CONSTANTS.mainFolder + CONSTANTS.carousselFolder + 'girls_and_tree.svg',];
}

export interface InfoNode {
  name: string;
  link?: string;
  children?: InfoNode[];
}

export class Card {
  img?: string;
  title: string;
  subtitle?: string;
  body?: string;
  link?: Link;
  constructor(img, title, subtitle, body, link) {
    this.img = img;
    this.title = title;
    this.subtitle = subtitle;
    this.body = body;
    this.link = link
  }
}
export class Link {
  text: string;
  href: string;
  constructor(text, href) {
    this.text = text;
    this.href = href;
  }

}
export class Commit {
  autor: string;
  fecha: Date;
  comentario: string;
  detalle: string;
  constructor(autor, fecha, descripcion: string) {
    this.autor = autor;
    this.fecha = fecha;
    if (descripcion.length > 50) {
      this.comentario = descripcion.substr(0, 50).trim() + "...";
    } else {
      this.comentario = descripcion;
    }
    this.detalle = descripcion;
  }
}
export class Article {
  id: string;
  autor: string;
  title: string;
  subtitle: string;
  date: Date;
  body: string;
  constructor(autor, title, subtitle, date, body, id) {
    this.autor = autor;
    this.title = title;
    this.subtitle = subtitle;
    this.date = date;
    this.body = body;
    this.id = id;
  }
}