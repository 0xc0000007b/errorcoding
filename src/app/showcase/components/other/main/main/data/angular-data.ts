import {SkillNode} from '../interfaces/skill-node.interface';

export const Skills_DATA_Angular: SkillNode[] = [
  {
    name: 'Conduit Clone',
    children: [
      {
        name: 'Почти полный  клон сайта angular.realworld.io. Тут я использовал NgRX в качестве обзервера для состояний в приложении и тайпскрипт ккак основной язык, тюк Ангуляр написан на нем  работает только на нем',
      },
    ],
  },
  {
    name: 'Trello Clone',
    children: [
      {
        name: 'Клон приложения Trello boards. Тут я не следил за состоояниями, но по максимуму использоват TS. Как на бэкенде, так и на фронтендею Так же использовал ануляровские RouterGuards. Что позволило сделать нормальный JWT-Authenticate в приложении',
      },
    ],
  },
  {
    name: 'Error Coding.',
    children: [
      {
        name: 'Моя личная страница. Тут все было сделано с помощью ангуляра с ипользованием UI библиотеки Angular Material. Точнее, из этой бтиблиотеки были взяты только окна, tree-view и табы, остальное это все Html, CSS и TS',
      },
    ],
  },
];
export const WANNA_DATA_Angular: SkillNode[] = [
  {
    name: 'Максимально изучить TypeScript и написать своюбиблиотеку компонентов для Angular',
    children: [
      {
        name: '...',
      },
    ],
  },
];
