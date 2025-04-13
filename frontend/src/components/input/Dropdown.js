import { CDropdown, CDropdownItem, CDropdownMenu, CDropdownToggle } from '@coreui/react'

export default function DropdownComponent({ data, placeholder = 'select an option' }) {
  return (
    <CDropdown>
      <CDropdownToggle color="secondary">{placeholder}</CDropdownToggle>
      <CDropdownMenu style={{ width: '100%' }}>
        {data &&
          data.map((item, index) => (
            <CDropdownItem key={index} href={item.href || '#'}>
              {item.label}
            </CDropdownItem>
          ))}
      </CDropdownMenu>
    </CDropdown>
  )
}
