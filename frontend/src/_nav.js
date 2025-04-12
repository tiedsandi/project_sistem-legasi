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
    to: '/legasi-kawasan',
    icon: <CIcon icon={cibItchIo} customClassName="nav-icon" />,
    items: [
      {
        component: CNavItem,
        name: 'Ekonomi Khusus',
        to: '/legasi-kawasan/ekonomi-khusus',
      },
      {
        component: CNavItem,
        name: 'Perdagangan Bebas',
        to: '/legasi-kawasan/perdagangan-bebas',
      },
      {
        component: CNavItem,
        name: 'Berikat',
        to: '/legasi-kawasan/berikat',
      },
      {
        component: CNavItem,
        name: 'Industri',
        to: '/legasi-kawasan/industri',
      },
      {
        component: CNavItem,
        name: 'Otorita',
        to: '/legasi-kawasan/otorita',
      },
      {
        component: CNavItem,
        name: 'Angkatan Perang',
        to: '/legasi-kawasan/angkatan-perang',
      },
      {
        component: CNavItem,
        name: 'Cagar Alam',
        to: '/legasi-kawasan/cagar-alam',
      },
      {
        component: CNavItem,
        name: 'Purbakala',
        to: '/legasi-kawasan/purbakala',
      },
      {
        component: CNavItem,
        name: 'Cagar Budaya',
        to: '/legasi-kawasan/cagar-budaya',
      },
      {
        component: CNavItem,
        name: 'Taman Buru',
        to: '/legasi-kawasan/taman-buru',
      },
      {
        component: CNavItem,
        name: 'Hutan Lindung',
        to: '/legasi-kawasan/hutan-lindung',
      },
      {
        component: CNavItem,
        name: 'Hutan Konvernasi',
        to: '/legasi-kawasan/hutan-konvervasi',
      },
      {
        component: CNavItem,
        name: 'Taman Laut',
        to: '/legasi-kawasan/taman-laut',
      },
      {
        component: CNavGroup,
        name: '   Lainnya',
        to: '/legasi-kawasan/lainnya',
        items: [
          {
            component: CNavItem,
            name: 'Jalur Sebidang',
            to: '/legasi-kawasan/lainnya/jalur-sebidang',
          },
          {
            component: CNavItem,
            name: 'Perkebunan Sawit',
            to: '/legasi-kawasan/lainnya/perkebunan-sawit',
          },
          {
            component: CNavItem,
            name: 'Pariwisata',
            to: '/legasi-kawasan/lainnya/pariwisata',
          },
        ],
      },
    ],
  },
  {
    component: CNavGroup,
    name: 'Legasi Batas Negara',
    to: '/legasi-batas-negara',
    icon: <CIcon icon={cilNewspaper} customClassName="nav-icon" />,
    items: [
      {
        component: CNavItem,
        name: 'JBC RI - RDTL',
        to: '/legasi-batas-negara/rdtl',
      },
      {
        component: CNavItem,
        name: 'JBC RI - PNG',
        to: '/legasi-batas-negara/png',
      },
      {
        component: CNavItem,
        name: 'BCA',
        to: '/legasi-batas-negara/bca',
      },
      {
        component: CNavItem,
        name: 'JIM',
        to: '/legasi-batas-negara/jim',
      },
      {
        component: CNavItem,
        name: 'SOSEKMALINDO',
        to: '/legasi-batas-negara/sosekmalindo',
      },
      {
        component: CNavItem,
        name: 'Sarana dan Prasarana',
        to: '/legasi-batas-negara/sapras',
      },
    ],
  },
  {
    component: CNavGroup,
    name: 'Legasi Perkotaan',
    to: '/legasi-perkotaan',
    icon: <CIcon icon={cibReadme} customClassName="nav-icon" />,
    items: [
      {
        component: CNavItem,
        name: 'Maturasi',
        to: '/legasi-perkotaan/maturasi',
      },
      {
        component: CNavItem,
        name: 'Advokasi Penerapan PP',
        to: '/legasi-perkotaan/advokasi',
      },
      {
        component: CNavItem,
        name: 'ASCN',
        to: '/legasi-perkotaan/ascn',
      },
      {
        component: CNavItem,
        name: 'Perkotaan',
        to: '/legasi-perkotaan/perkotaan',
      },
      {
        component: CNavItem,
        name: 'Kerjasama',
        to: '/legasi-perkotaan/kerjasama',
      },
    ],
  },
  {
    component: CNavGroup,
    name: 'Legasi Pertahanan',
    to: '/legasi-pertahanan',
    icon: <CIcon icon={cilAddressBook} customClassName="nav-icon" />,
    items: [
      {
        component: CNavItem,
        name: 'Laporan Pengaduan',
        to: '/legasi-pertahanan/laporan-pengaduan',
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
