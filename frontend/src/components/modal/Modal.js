import { useImperativeHandle, useRef } from 'react'
import { createPortal } from 'react-dom'

export default function Modal({ ref, children }) {
  const dialog = useRef()

  useImperativeHandle(ref, () => {
    return {
      open: () => {
        dialog.current.showModal()
      },
    }
  })

  return createPortal(
    <dialog ref={dialog} className="result-modal">
      <form method="dialog" className="form-table">
        {children}
        <div className="form-actions">
          <button type="submit" className="btn btn-primary">
            Submit
          </button>
          <button
            type="button"
            className="btn btn-secondary"
            onClick={() => dialog.current.close()}
          >
            Close
          </button>
        </div>
      </form>
    </dialog>,
    document.getElementById('modal'),
  )
}
