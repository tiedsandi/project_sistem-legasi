import React, { useState } from 'react'
import { CCollapse, CContainer, CNavbar, CNavbarToggler, CAvatar } from '@coreui/react'
import avatar8 from './../assets/images/avatars/8.jpg'

export const AppSidebarMenuApp = () => {
  const [visible, setVisible] = useState(false)
  return (
    <>
      <CNavbar colorScheme="dark" className="bg-dark">
        <CContainer fluid>
          <CNavbarToggler
            aria-controls="navbarToggleExternalContent"
            aria-label="Toggle navigation"
            onClick={() => setVisible(!visible)}
            style={{
              width: '100%',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              gap: '4px',
            }}
          >
            <CAvatar src={avatar8} size="md" /> Subdit Perkotaan
          </CNavbarToggler>
        </CContainer>
      </CNavbar>

      <CCollapse id="navbarToggleExternalContent" visible={visible} data-coreui-theme="dark">
        <div className="bg-dark p-4">
          <h5 className="text-body-emphasis h4">Collapsed content</h5>
          <span className="text-body-secondary">Toggleable via the navbar brand.</span>
        </div>
      </CCollapse>
    </>
  )
}
