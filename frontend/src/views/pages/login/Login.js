import React from 'react'
import { CButton, CCol, CContainer, CForm, CFormInput, CInputGroup, CRow } from '@coreui/react'

const Login = () => {
  return (
    <div className="min-vh-100 d-flex">
      {/* Bagian Kiri */}
      <CCol
        className="d-none d-md-flex bg-primary text-white align-items-center justify-content-center"
        style={{ flex: 1 }}
      >
        <div className="text-center">
          <h1>Selamat Datang Kembali!</h1>
          <p>Lorem ipsum dolor sit amet consectetur adipisicing..</p>
        </div>
      </CCol>

      {/* Bagian Kanan */}
      <CCol className="d-flex align-items-center justify-content-center" style={{ flex: 2 }}>
        <CContainer>
          <CRow className="justify-content-center">
            <CCol md={4}>
              <div>
                <CForm>
                  <h1>Masuk</h1>
                  <CInputGroup className="mb-3">
                    <CFormInput type="email" placeholder="Email" autoComplete="email" />
                  </CInputGroup>
                  <CInputGroup className="mb-4">
                    <CFormInput
                      type="password"
                      placeholder="Password"
                      autoComplete="current-password"
                    />
                  </CInputGroup>
                  <CRow>
                    <CCol xs={12} className="text-right">
                      <CButton color="link" className="px-0">
                        Lupa Password?
                      </CButton>
                    </CCol>
                    <CCol xs={12}>
                      <CButton color="primary" className="px-4" style={{ width: '100%' }}>
                        Login
                      </CButton>
                    </CCol>
                  </CRow>
                </CForm>
              </div>
            </CCol>
          </CRow>
        </CContainer>
      </CCol>
    </div>
  )
}

export default Login
