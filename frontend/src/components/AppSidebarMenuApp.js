import React from 'react'
import {
  CAvatar,
  CDropdown,
  CDropdownDivider,
  CDropdownItem,
  CDropdownMenu,
  CDropdownToggle,
} from '@coreui/react'

import avatar8 from './../assets/images/avatars/8.jpg'

export const AppSidebarMenuApp = () => {
  return (
    <CDropdown variant="btn-group" className="m-2">
      <CDropdownToggle
        color="primary"
        style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}
      >
        <div>
          <CAvatar src={avatar8} size="sm" className="me-2" />
          <span className="fw-semibold">Subdit Perkotaan</span>
        </div>
      </CDropdownToggle>
      <CDropdownMenu style={{ width: '100%' }} className="border-info">
        <CDropdownItem href="#">
          <CAvatar src={avatar8} size="sm" className="me-2" />
          <span className="fw-semibold">Subdit Perkotaan</span>
        </CDropdownItem>
        <CDropdownItem href="#">
          <CAvatar src={avatar8} size="sm" className="me-2" />
          <span className="fw-semibold">Subdit Perkotaan</span>
        </CDropdownItem>
        <CDropdownItem href="#">
          <CAvatar src={avatar8} size="sm" className="me-2" />
          <span className="fw-semibold">Subdit Perkotaan</span>
        </CDropdownItem>
      </CDropdownMenu>
    </CDropdown>
  )
}
