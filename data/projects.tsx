import { Project } from '@/models/project';
import { SKILLS } from '@/data/skills';

export const PROJECTS: Project[] = [
  {
    title: {
      fr: 'Loodus',
      en: 'Loodus',
      es: 'Loodus',
    },
    description: {
      fr: 'Loodus est un projet scolaire dont le but était de reproduire un OS sur un navigateur WEB en utilisant uniquement des languages natifs, sans framework.\n' +
        '\n' +
        'L’OS doit fournir une calculette, une horloge, un chronomètre, un minuteur et un morpion. La date, l’heure, l’état de la batterie et du réseau, la méthode de vérouillage, le thème ainsi que les retours haptiques sont paramètrables.\n' +
        '\n' +
        'Le projet est architecturé en web components et utilises diverses API Web.',
      en: 'Loodus is a school project whose goal was to reproduce an OS on a WEB browser using only native languages, without frameworks.\n' +
        '\n' +
        'The OS must provide a calculator, a clock, a stopwatch, a timer and a tic-tac-toe game. The date, time, battery and network status, locking method, theme and haptic feedback are configurable.\n' +
        '\n' +
        'The project is structured in web components and uses various Web APIs.',
      es: 'Loodus es un proyecto escolar cuyo objetivo era reproducir un sistema operativo en un navegador web utilizando solo lenguajes nativos, sin frameworks.\n' +
        '\n' +
        'El sistema operativo debe proporcionar una calculadora, un reloj, un cronómetro, un temporizador y un juego de tres en raya. La fecha, la hora, el estado de la batería y la red, el método de bloqueo, el tema y la retroalimentación háptica son configurables.\n' +
        '\n' +
        'El proyecto está estructurado en componentes web y utiliza diversas API web.',
    },
    imageSrc: '/projects/loodus.png',
    date: '2023-05-01T00:00:00Z',
    skills: [
      SKILLS.HTML,
      SKILLS.JS,
      SKILLS.SCSS,
    ],
  },
];