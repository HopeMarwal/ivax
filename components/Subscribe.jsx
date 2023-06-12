'use client'

import { useState } from "react"
import Image from "next/image";
import mapImg from '../public/images/map.png'

export default function Subscribe() {
  const [formValues, setFormValues] = useState({
    branding: false,
    webDesign: false,
    dev: false,
    video: false,
    name: '',
    email: '',
    phone: '',
    msg: '',
    email: ''
  });
  const [submiting, setSubmiting] = useState('ok');

  const handleSubmit = (e) => {
    e.preventDefault()
    setSubmiting('process')
    // Send form values to server

    setTimeout(() => {
      console.log(formValues)
    // if res is Ok
      setSubmiting('ok')
    }, 3000);

    setTimeout(() => {
      setFormValues({
        branding: false,
        webDesign: false,
        dev: false,
        video: false,
        name: '',
        email: '',
        phone: '',
        msg: '',
        email: ''
      })
      setSubmiting('none')
    }, 5000)
  }

  const processBtn = <>
                    Sending
                      <svg className="animate-spin ml-1 h-5 w-5 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                        <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                        <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                      </svg>
                    </>
  
  const okBtn = <>
                  Success
                  <svg className="fill-primary-green" xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="currentColor" viewBox="0 0 20 20">
                    <path d="M12.354 4.354a.5.5 0 0 0-.708-.708L5 10.293 1.854 7.146a.5.5 0 1 0-.708.708l3.5 3.5a.5.5 0 0 0 .708 0l7-7zm-4.208 7-.896-.897.707-.707.543.543 6.646-6.647a.5.5 0 0 1 .708.708l-7 7a.5.5 0 0 1-.708 0z"/>
                    <path d="m5.354 7.146.896.897-.707.707-.897-.896a.5.5 0 1 1 .708-.708z"/>
                  </svg>
                </>

  const defaultBtn = 'Send'
  return (
    <div className='w-full my-10 bg-white flex flex-wrap'>
      <div className='w-full md:w-6/12 p-3'>
        <h3>Tell us <span>more</span></h3>
        <form className="flex flex-wrap" onSubmit={handleSubmit}>
          {/* Checkboxes */}
          <div className="w-full flex flex-wrap gap-4 items-center mb-3">
            <label className="form_label">
              <input
                type='checkbox'
                value={formValues.branding}
                onChange={() => setFormValues((prev) => ({...prev, branding: !prev.branding}))}
              />
              Branding
            </label>

            <label className="form_label">
              <input
                type='checkbox'
                value={formValues.webDesign}
                onChange={() => setFormValues((prev) => ({...prev, webDesign: !prev.webDesign}))}
              />
              Web design
            </label>

            <label className="form_label">
              <input
                type='checkbox'
                value={formValues.branding}
                onChange={() => setFormValues((prev) => ({...prev, branding: !prev.dev}))}
              />
              Development
            </label>

            <label className="form_label">
              <input
                type='checkbox'
                value={formValues.video}
                onChange={() => setFormValues((prev) => ({...prev, video: !prev.video}))}
              />
              Video
            </label>
          </div>

          {/* Text inputs */}
          <div className="w-full flex flex-wrap justify-between mb-6">
            <label className="form_label-text w-full md:w-44pr">
              <p>Name*</p>
              <input
                required
                type="text"
                value={formValues.name}
                onChange={(e) => setFormValues((prev) => ({...prev, name: e.target.value}))}
              />
            </label>

            <label className="form_label-text w-full md:w-44pr">
              <p>Phone*</p>
              <input
                required
                type="text"
                value={formValues.phone}
                onChange={(e) => setFormValues((prev) => ({...prev, phone: e.target.value}))}
              />
            </label>

            <label className="form_label-text w-full">
              <p>Email*</p>
              <input
                required
                type="email"
                value={formValues.email}
                onChange={(e) => setFormValues((prev) => ({...prev, email: e.target.value}))}
              />
            </label>

            <label className="form_label-text w-full">
              <p>Message*</p>
              <input
                required
                type="text"
                value={formValues.msg}
                onChange={(e) => setFormValues((prev) => ({...prev, msg: e.target.value}))}
              />
            </label>
          </div>
          
          <button className="btn flex items-center gap-1" type="submit" disabled={submiting !== 'none'}>
            {submiting === 'process' 
              ? processBtn
              : submiting === 'ok' 
                ? okBtn
                : defaultBtn
            }
            
          </button>
        </form>
      </div>
      <div className='w-full md:w-6/12'>
        <Image 
          src={mapImg}
          alt='address'
        />
      </div>
    </div>
  )
}
