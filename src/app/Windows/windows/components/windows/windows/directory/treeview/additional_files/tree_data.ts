import FilesNode from './interfaces/files-node.intrface';

export const TREE_DATA: FilesNode[] = [
  {
    icon: 'download',
    name: 'Downloads',
    children: [
      {
        icon: 'file',
        name: '',
      },
    ],
  },
  {
    icon: 'folder',
    name: 'Documents',
    children: [
      {
        icon: 'folder',
        name: 'images',
      },
      {
        icon: 'folder',
        name: 'Videos',
      },
      {
        icon: 'folder',
        name: 'Music',
      },
    ],
  },
  {
    icon: 'folder',
    name: 'OS',
    children: [
      {
        icon: 'folder',
        name: 'Program Files',
      },
      {
        icon: 'folder',
        name: 'Program Files (x86)',
      },
      {
        icon: 'folder',
        name: 'Windows',
      },
      {
        icon: 'folder',
        name: 'Users',
        children: [
          {
            icon: 'profile',
            name: 'Current User',
          },
          {
            icon: 'shared',
            name: 'Shared Files',
          },
        ],
      },
    ],
  },
  {
    icon: 'trash',
    name: 'Bin',
    children: [
      {
        name: '',
        icon: 'file',
      },
    ],
  },
];
