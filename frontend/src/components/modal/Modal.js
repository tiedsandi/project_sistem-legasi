import CIcon from '@coreui/icons-react'
import { cilLocationPin } from '@coreui/icons'
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
        <div className="header">
          <h2> Ekonomi Khusus </h2>
        </div>
        <br />
        <div className="body form-action">
          <div className="row">
            <div className="col mb-3">
              <label htmlFor="Name" class="mb-2">
                Nama Kawasan{' '}
              </label>
              <input type="text" name="nama_kawasan" id="nama_kawasan" class="form-control" />
            </div>
          </div>
          <div className="row">
            <div className="col mb-3">
              <label htmlFor="Name" class="mb-2">
                Badan Usaha{' '}
              </label>
              <input type="text" name="badan_usaha" id="badan_usaha" class="form-control" />
            </div>
          </div>
          <div className="row">
            <div className="col mb-3">
              <label htmlFor="Name" class="mb-2">
                Pengelola
              </label>
              <select name="provinsi" id="provinsi" class="form-control">
                <option value="#" disabled selected>
                  Pilih Pengelola
                </option>
              </select>
            </div>
            <div className="col mb-3 mt-2">
              <label htmlFor="Name" class="mb-2">

              </label>
              <select name="kecamatan" id="kecamatan" class="form-control">
                <option value="#" disabled selected>
                </option>
              </select>
            </div>
          </div>
          <div classNameName="row">
            <div classNameName="col mb-3">
              <label htmlFor="Name" className="mb-2">
                Jenis Pengelola
              </label>
              <input
                type="text"
                name="jenis_pengelola"
                id="jenis_pengelola"
                className="form-control"
              />
            </div>
            <div classNameName="col">
              <label htmlFor="Name" className="mb-2">
                Pengelola BUMD
              </label>
              <input
                type="text"
                name="pengelola_bumd"
                id="pengelola_bumd"
                className="form-control"
              />
            </div>
          </div>
          <div classNameName="row">
            <div classNameName="col mb-3">
              <label htmlFor="Name" className="mb-2">
                Dasar Hukum
              </label>
              <input type="text" name="dasar_hukum" id="dasar_hukum" className="form-control" />
            </div>
          </div>
          <div classNameName="row">
            <div classNameName="col mb-3">
              <label htmlFor="Name" className="mb-2">
                Tahun Operasi
              </label>
              <input type="text" name="tahun_operasi" id="tahun_operasi" className="form-control" />
            </div>
            <div classNameName="col mb-3">
              <label htmlFor="Name" className="mb-2">
                Tanggal Penetapan
              </label>
              <input
                type="text"
                name="tanggal_penetapan"
                id="tanggal_penetapan"
                className="form-control"
              />
            </div>
          </div>
          <div className="row">
            <div className="col mb-3">
              <label htmlFor="Name" class="mb-2">
                Perizinan
              </label>
              <input type="text" name="perizinan" id="perizinan" class="form-control" />
            </div>
            <div className="col mb-3">
              <label htmlFor="Name" class="mb-2">
                Pembina Teknis
              </label>
              <input type="text" name="pembina_teknis" id="pembina_teknis" class="form-control" />
            </div>
          </div>
          <div className="row">
            <div className="col mb-3">
              <label htmlFor="Name" class="mb-2">
                Luas
              </label>
              <input type="text" name="luas" id="luas" class="form-control" />
            </div>
            <div className="col mb-3">
              <label htmlFor="Name" class="mb-2">
                Luas UOM
              </label>
              <input type="text" name="luas_uom" id="luas_uom" class="form-control" />
            </div>
          </div>
          <div className="row">
            <div className="col mb-3">
              <label htmlFor="Name" class="mb-2">
                Range
              </label>
              <input type="text" name="range" id="range" class="form-control" />
            </div>
            <div className="col mb-3">
              <label htmlFor="Name" class="mb-2">
                Tahun Operasi
              </label>
              <input type="text" name="tahun_operasi" id="tahun_operasi" class="form-control" />
            </div>
          </div>
          <div className="row">
            <div className="col mb-3">
              <label htmlFor="Name" class="mb-2">
                Latitude
              </label>
              <div class="input-group mb-3">
                <span>
                  <CIcon icon={cilLocationPin} className="me-2 mt-2" />
                </span>
                <input type="text" name="latitude" id="latitude" class="form-control" />
              </div>
            </div>
            <div className="col mb-3">
              <label htmlFor="Name" class="mb-2">
                Longitude
              </label>
              <div class="input-group mb-3">
                <span>
                  <CIcon icon={cilLocationPin} className="me-2 mt-2" />
                </span>
                <input type="text" name="longitude" id="longitude" class="form-control" />
              </div>
            </div>
          </div>
          <div className="row">
            <div className="col mb-3">
              <label htmlFor="Name" class="mb-2">
                Koordinat Bidang
              </label>
              <div class="input-group mb-3">
                <span>
                  <CIcon icon={cilLocationPin} className="me-2 mt-2" />
                </span>
                <input
                  type="text"
                  name="koordinat_bidang"
                  id="koordinat_bidang"
                  class="form-control"
                />
              </div>
            </div>
            <div className="col mb-3">
              <label htmlFor="Name" class="mb-2">
                Koordinat Status
              </label>
              <div class="input-group mb-3">
                <span>
                  <CIcon icon={cilLocationPin} className="me-2 mt-2" />
                </span>
                <input
                  type="text"
                  name="koordinat_status"
                  id="koordinat_status"
                  class="form-control"
                />
              </div>
            </div>
          </div>
          <div className="row">
            <div className="col mb-3">
              <label htmlFor="Name" class="mb-2">
                Provinsi
              </label>
              <select name="provinsi" id="provinsi" class="form-control">
                <option value="#" disabled selected>
                  Pilih Provinsi
                </option>
              </select>
            </div>
            <div className="col mb-3">
              <label htmlFor="Name" class="mb-2">
                Kecamatan
              </label>
              <select name="kecamatan" id="kecamatan" class="form-control">
                <option value="#" disabled selected>
                  Pilih Kecamatan
                </option>
              </select>
            </div>
          </div>
          <div className="row">
            <div className="col mb-3">
              <label htmlFor="Name" class="mb-2">
                Kab/Kota
              </label>
              <select name="kab_kota" id="kab_kota" class="form-control">
                <option value="#" disabled selected>
                  Pilih Kab/Kota
                </option>
              </select>
            </div>
            <div className="col mb-3">
              <label htmlFor="Name" class="mb-2">
                Kel/Desa
              </label>
              <select name="kel_desa" id="kel_desa" class="form-control">
                <option value="#" disabled selected>
                  Pilih Kelurahan/Desa
                </option>
              </select>
            </div>
          </div>
        </div>
        <br />
        <div className="form-actions">
          <div class="col text-end">
            <button
              type="button"
              className="btn btn-secondary"
              onClick={() => dialog.current.close()}
              style={{ marginRight: '10px' }}
            >
              Close
            </button>
            <button type="submit" className="btn btn-primary">
              Submit
            </button>
          </div>
        </div>
      </form>
    </dialog>,
    document.getElementById('modal'),
  )
}
