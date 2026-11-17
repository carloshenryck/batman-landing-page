export interface Movie {
  id: string;
  number: string;
  year: string;
  title: string;
  director: string;
  actor: string;
  description: string;
  poster: string;
}

export const movies: Movie[] = [
  {
    id: '1966',
    number: '01',
    year: '1966',
    title: 'BATMAN - O HOMEM MORCEGO',
    director: 'LESLIE H. MARTINSON',
    actor: 'ADAM WEST',
    description: 'Adaptação da série de TV: o Batman enfrenta quatro vilões unidos num plano para dominar o mundo.',
    poster: './batman_posters/Batman - O Homem Morcego.webp',
  },
  {
    id: '1989',
    number: '02',
    year: '1989',
    title: 'BATMAN',
    director: 'TIM BURTON',
    actor: 'MICHAEL KEATON',
    description: 'Gotham é tomada pelo Coringa, e o Batman precisa detê-lo.',
    poster: './batman_posters/Batman.jpeg',
  },
  {
    id: '1992',
    number: '03',
    year: '1992',
    title: 'BATMAN: O RETORNO',
    director: 'TIM BURTON',
    actor: 'MICHAEL KEATON',
    description: 'O Pinguim e a Mulher-Gato desafiam o Batman numa Gotham coberta de neve.',
    poster: './batman_posters/batman o retorno.jpg',
  },
  {
    id: '1995',
    number: '04',
    year: '1995',
    title: 'BATMAN ETERNAMENTE',
    director: 'JOEL SCHUMACHER',
    actor: 'VAL KILMER',
    description: 'Duas-Caras e Charada se unem contra o Batman, que ganha Robin como aliado.',
    poster: './batman_posters/batman eternamente.jpg',
  },
  {
    id: '1997',
    number: '05',
    year: '1997',
    title: 'BATMAN & ROBIN',
    director: 'JOEL SCHUMACHER',
    actor: 'GEORGE CLOONEY',
    description: 'A dupla enfrenta Mr. Freeze e Hera Venenosa.',
    poster: './batman_posters/Batman_Robin_1997.jpg',
  },
  {
    id: '2005',
    number: '06',
    year: '2005',
    title: 'BATMAN BEGINS',
    director: 'CHRISTOPHER NOLAN',
    actor: 'CHRISTIAN BALE',
    description: 'Bruce Wayne treina e dá origem ao Batman.',
    poster: './batman_posters/Batman_begins.jpg',
  },
  {
    id: '2008',
    number: '07',
    year: '2008',
    title: 'BATMAN: O CAVALEIRO DAS TREVAS',
    director: 'CHRISTOPHER NOLAN',
    actor: 'CHRISTIAN BALE',
    description: 'Batman, Gordon e Harvey Dent enfrentam o Coringa.',
    poster: './batman_posters/The_Dark_Knight.jpg',
  },
  {
    id: '2012',
    number: '08',
    year: '2012',
    title: 'BATMAN: O CAVALEIRO DAS TREVAS RESSURGE',
    director: 'CHRISTOPHER NOLAN',
    actor: 'CHRISTIAN BALE',
    description: 'Oito anos depois, Bane ameaça Gotham e Bruce volta à máscara.',
    poster: './batman_posters/TheDarkKnightRises.jpg',
  },
  {
    id: '2022',
    number: '09',
    year: '2022',
    title: 'BATMAN',
    director: 'MATT REEVES',
    actor: 'ROBERT PATTINSON',
    description: 'No segundo ano combatendo o crime, o Batman investiga os assassinatos do Charada.',
    poster: './batman_posters/batman 2022.jpg',
  },
];
