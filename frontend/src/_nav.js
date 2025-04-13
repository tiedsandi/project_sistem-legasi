import React from 'react'
import CIcon from '@coreui/icons-react'
import {
  cilNewspaper,
  cibItchIo,
  cibReadTheDocs,
  cibReadme,
  cilAddressBook,
  cilSettings,
} from '@coreui/icons'
import { CNavGroup, CNavItem } from '@coreui/react'

const _nav = [
  {
    component: CNavItem,
    name: 'Dashboard',
    to: '/dashboard',
    icon: <CIcon icon={cibReadTheDocs} customClassName="nav-icon" />,
  },
  {
    component: CNavGroup,
    name: 'Legasi Kawasan',
    to: '/kawasan',
    icon: <CIcon icon={cibItchIo} customClassName="nav-icon" />,
    items: [
      {
        component: CNavItem,
        name: 'Ekonomi Khusus',
        to: '/kawasan/ekonomi-khusus',
      },
      {
        component: CNavItem,
        name: 'Perdagangan Bebas',
        to: '/kawasan/perdagangan-bebas',
      },
      {
        component: CNavItem,
        name: 'Berikat',
        to: '/kawasan/berikat',
      },
      {
        component: CNavItem,
        name: 'Industri',
        to: '/kawasan/industri',
      },
      {
        component: CNavItem,
        name: 'Otorita',
        to: '/kawasan/otorita',
      },
      {
        component: CNavItem,
        name: 'Angkatan Perang',
        to: '/kawasan/angkatan-perang',
      },
      {
        component: CNavItem,
        name: 'Cagar Alam',
        to: '/kawasan/cagar-alam',
      },
      {
        component: CNavItem,
        name: 'Purbakala',
        to: '/kawasan/purbakala',
      },
      {
        component: CNavItem,
        name: 'Cagar Budaya',
        to: '/kawasan/cagar-budaya',
      },
      {
        component: CNavItem,
        name: 'Taman Buru',
        to: '/kawasan/taman-buru',
      },
      {
        component: CNavItem,
        name: 'Hutan Lindung',
        to: '/kawasan/hutan-lindung',
      },
      {
        component: CNavItem,
        name: 'Hutan Konvernasi',
        to: '/kawasan/hutan-konvervasi',
      },
      {
        component: CNavItem,
        name: 'Taman Laut',
        to: '/kawasan/taman-laut',
      },
      {
        component: CNavGroup,
        name: '   Lainnya',
        to: '/kawasan/lainnya',
        items: [
          {
            component: CNavItem,
            name: 'Jalur Sebidang',
            to: '/kawasan/lainnya/jalur-sebidang',
          },
          {
            component: CNavItem,
            name: 'Perkebunan Sawit',
            to: '/kawasan/lainnya/perkebunan-sawit',
          },
          {
            component: CNavItem,
            name: 'Pariwisata',
            to: '/kawasan/lainnya/pariwisata',
          },
        ],
      },
    ],
  },
  {
    component: CNavGroup,
    name: 'Legasi Batas Negara',
    to: '/batas-negara',
    icon: <CIcon icon={cilNewspaper} customClassName="nav-icon" />,
    items: [
      {
        component: CNavItem,
        name: 'JBC RI - RDTL',
        to: '/batas-negara/rdtl',
      },
      {
        component: CNavItem,
        name: 'JBC RI - PNG',
        to: '/batas-negara/png',
      },
      {
        component: CNavItem,
        name: 'BCA',
        to: '/batas-negara/bca',
      },
      {
        component: CNavItem,
        name: 'JIM',
        to: '/batas-negara/jim',
      },
      {
        component: CNavItem,
        name: 'SOSEKMALINDO',
        to: '/batas-negara/sosekmalindo',
      },
      {
        component: CNavItem,
        name: 'Sarana dan Prasarana',
        to: '/batas-negara/sapras',
      },
    ],
  },
  {
    component: CNavGroup,
    name: 'Legasi Perkotaan',
    to: '/perkotaan',
    icon: <CIcon icon={cibReadme} customClassName="nav-icon" />,
    items: [
      {
        component: CNavItem,
        name: 'Maturasi',
        to: '/perkotaan/maturasi',
      },
      {
        component: CNavItem,
        name: 'Advokasi Penerapan PP',
        to: '/perkotaan/advokasi',
      },
      {
        component: CNavItem,
        name: 'ASCN',
        to: '/perkotaan/ascn',
      },
      {
        component: CNavItem,
        name: 'Perkotaan',
        to: '/perkotaan/perkotaan',
      },
      {
        component: CNavItem,
        name: 'Kerjasama',
        to: '/perkotaan/kerjasama',
      },
    ],
  },
  {
    component: CNavGroup,
    name: 'Legasi Pertahanan',
    to: '/pertahanan',
    icon: <CIcon icon={cilAddressBook} customClassName="nav-icon" />,
    items: [
      {
        component: CNavItem,
        name: 'Laporan Pengaduan',
        to: '/pertahanan/laporan-pengaduan',
      },
    ],
  },
  {
    component: CNavGroup,
    name: 'Setting',
    to: '/setting',
    icon: <CIcon icon={cilSettings} customClassName="nav-icon" />,
    items: [],
  },
]

export default _nav
