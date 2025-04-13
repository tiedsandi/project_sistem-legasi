import React from 'react'
import {
  CDropdown,
  CDropdownDivider,
  CDropdownItem,
  CDropdownMenu,
  CDropdownToggle,
} from '@coreui/react'

export const AppSidebarMenuApp = () => {
  return (
    <CDropdown variant="btn-group" className="m-2">
      <CDropdownToggle color="secondary">Centered dropdown</CDropdownToggle>
      <CDropdownMenu style={{ width: '100%' }}>
        <CDropdownItem href="#">Action</CDropdownItem>
        <CDropdownItem href="#">Another action</CDropdownItem>
        <CDropdownItem href="#">Something else here</CDropdownItem>
        <CDropdownDivider />
        <CDropdownItem href="#">Separated link</CDropdownItem>
      </CDropdownMenu>
    </CDropdown>
  )
}
