import React from 'react';
import * as FaIcons from 'react-icons/fa';

export const SidebarData = [
  {
    title: 'Загрузить',
    path: '/',
    icon: <FaIcons.FaRegFolder />,
    cName: 'side-text'
  },
  {
    title: 'Галерея',
    path: '/gallery',
    icon: <FaIcons.FaRegEye />,
    cName: 'side-text'
  }
];