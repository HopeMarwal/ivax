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
  return (
    <div className='w-full my-10 bg-white flex flex-wrap'>
      <div className='w-full md:w-6/12 p-3'>
        <h3>Tell us <span>more</span></h3>
        <form className="flex flex-wrap">
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
          
          <button className="btn" type="submit">Send</button>
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
