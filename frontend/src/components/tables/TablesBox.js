import React, { useRef } from 'react'
import {
  CTable,
  CTableHead,
  CTableRow,
  CTableHeaderCell,
  CTableBody,
  CTableDataCell,
  CFormInput,
} from '@coreui/react'
import DropdownComponent from '../input/Dropdown'
import { CButton } from '@coreui/react'
import CIcon from '@coreui/icons-react'
import { cilSearch } from '@coreui/icons'
import Modal from '../../components/modal/Modal'

const TablesBox = ({ title = 'Nan', columns, data }) => {
  const dialog = useRef()

  function onClick() {
    dialog.current.open()
  }

  return (
    <>
      <Modal ref={dialog} />
      <h3 style={{ fontWeight: 'bold', fontSize: '36px', marginBottom: '20px' }}>{title}</h3>
      <div style={{ display: 'flex', alignItems: 'center', gap: '10px', marginBottom: '20px' }}>
        <DropdownComponent data={data} placeholder="Pilih Provinsi" style={{ flex: 1 }} />
        <DropdownComponent data={data} placeholder="Pilih Kabupaten/Kota" style={{ flex: 1 }} />
        <CFormInput type="text" placeholder="Cari..." style={{ flex: 1 }} />
        <CButton color="primary" onClick={onClick} style={{ flexShrink: 0, whiteSpace: 'nowrap' }}>
          + Tambah
        </CButton>
        <CButton
          color="secondary"
          style={{ flexShrink: 0, whiteSpace: 'nowrap', display: 'flex', alignItems: 'center' }}
        >
          <CIcon icon={cilSearch} style={{ marginRight: '10px' }} />
          <span>Download</span>
        </CButton>
      </div>
      <CTable striped hover>
        <CTableHead>
          <CTableRow>
            {columns &&
              columns.map((col) => (
                <CTableHeaderCell key={col} scope="col" style={{ color: 'gray' }}>
                  {col.toUpperCase()}
                </CTableHeaderCell>
              ))}
          </CTableRow>
        </CTableHead>
        <CTableBody>
          {data.map((item) => (
            <CTableRow key={item.id}>
              <CTableDataCell>{item.id}</CTableDataCell>
              <CTableDataCell>{item.label}</CTableDataCell>
              <CTableDataCell>{item.age}</CTableDataCell>
              <CTableDataCell>{item.job}</CTableDataCell>
            </CTableRow>
          ))}
        </CTableBody>
      </CTable>
    </>
  )
}

export default TablesBox
