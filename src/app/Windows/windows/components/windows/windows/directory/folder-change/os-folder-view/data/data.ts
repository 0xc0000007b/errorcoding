import FilesNode from '../../../treeview/additional_files/interfaces/files-node.intrface';

export const DATA: FilesNode[] = [
  {
    name: 'PerfLogs',
    icon: 'folder',
    children: [],
  },
  {
    name: 'Program Files',
    icon: 'folder',
    children: [
      {
        name: 'Windows Mail',
        icon: 'folder',
        children: [
          {name: 'wab.exe', icon: 'file'},
          {name: 'wabimp.dll', icon: 'file'},
          {name: 'wabmig.exe', icon: 'file'},
        ],
      },
      {
        name: 'Windows Media Player',
        icon: 'folder',
        children: [
          {name: 'en-US', icon: 'folder'},
          {name: 'icons', icon: 'folder'},
          {name: 'Media Renderer', icon: 'folder'},
          {name: 'Network Sharing', icon: 'folder'},
          {name: 'Skins', icon: 'folder'},
          {name: 'Visualizations', icon: 'folder'},
        ],
      },
      {
        name: 'Windows Multimedia  Platform',
        icon: 'folder',
        children: [{name: 'sqlapi.dll', icon: 'file'}],
      },
      {
        name: 'Windows NT ',
        icon: 'folder',
        children: [
          {
            name: 'Accessories',
            icon: 'folder',
            children: [
              {name: 'en-US', icon: 'folder'},
              {name: 'wordpad.exe', icon: 'file'},
              {name: 'wordpadfilter.dll', icon: 'file'},
            ],
          },
          {name: 'TableTextService', icon: 'folder'},
        ],
      },
    ],
  },
  {
    name: 'Program Files(x86)',
    icon: 'folder',
    children: [
      {
        name: 'Microsoft',
        icon: 'folder',
      },
      {
        name: 'Windows Mail',
        icon: 'folder',
        children: [
          {name: 'wab.exe', icon: 'file'},
          {name: 'wabimp.dll', icon: 'file'},
          {name: 'wabmig.exe', icon: 'file'},
        ],
      },
      {
        name: 'Windows Media Player',
        icon: 'folder',
        children: [
          {name: 'en-US', icon: 'folder'},
          {name: 'icons', icon: 'folder'},
          {name: 'Media Renderer', icon: 'folder'},
          {name: 'Network Sharing', icon: 'folder'},
          {name: 'Skins', icon: 'folder'},
          {name: 'Visualizations', icon: 'folder'},
        ],
      },
      {
        name: 'Windows Multimedia  Platform',
        icon: 'folder',
        children: [{name: 'sqlapi.dll', icon: 'file'}],
      },
      {
        name: 'Windows NT ',
        icon: 'folder',
        children: [
          {
            name: 'Accessories',
            icon: 'folder',
            children: [
              {name: 'en-US', icon: 'folder'},
              {name: 'wordpad.exe', icon: 'file'},
              {name: 'wordpadfilter.dll', icon: 'file'},
            ],
          },
          {name: 'TableTextService', icon: 'folder'},
        ],
      },
    ],
  },
  {
    name: 'Windows',
    icon: 'folder',
    children: [
      {name: '...', icon: 'folder'},
      {name: '...', icon: 'folder'},
      {name: '...', icon: 'folder'},
      {name: '...', icon: 'folder'},
      {name: '...', icon: 'folder'},
      {name: '...', icon: 'folder'},
      {name: '...', icon: 'folder'},
      {name: '...', icon: 'folder'},
      {name: '...', icon: 'folder'},
      {name: '...', icon: 'folder'},
      {name: '...', icon: 'folder'},
      {name: '...', icon: 'folder'},
      {name: '...', icon: 'folder'},
      {name: '...', icon: 'folder'},
      {name: '...', icon: 'folder'},
    ],
  },
  {
    name: 'Users',
    icon: 'folder',
    children: [
      {
        name: '...',
        icon: 'folder',
        children: [
          {name: '...', icon: 'folder'},
          {name: '...', icon: 'folder'},
          {name: '...', icon: 'folder'},
          {name: '...', icon: 'folder'},
          {name: '...', icon: 'folder'},
          {name: '...', icon: 'folder'},
          {name: '...', icon: 'folder'},
        ],
      },
      {
        name: '...',
        icon: 'folder',
        children: [
          {name: '...', icon: 'folder'},
          {name: '...', icon: 'folder'},
          {name: '...', icon: 'folder'},
          {name: '...', icon: 'folder'},
        ],
      },
    ],
  },
];
