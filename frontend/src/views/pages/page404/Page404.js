import React from 'react'
import { CCol, CContainer, CRow } from '@coreui/react'

const Page404 = () => {
  return (
    <div
      className="bg-body-tertiary d-flex flex-row align-items-center justify-content-center flex-grow-1 text-center"
      style={{ height: '70vh' }}
    >
      <CContainer>
        <CRow className="justify-content-center">
          <CCol md={6}>
            <div className="clearfix">
              <h1 className="display-3">404</h1>
              <h4 className="pt-3">Oops! You{"'"}re lost.</h4>
              <p className="text-body-secondary">The page you are looking for was not found.</p>
            </div>
          </CCol>
        </CRow>
      </CContainer>
    </div>
  )
}

export default Page404
