import React from 'react'

const Formikform = () => {
  return (
    <>
      <div className="container-fluid">
        <div className="row">
          <div className="col-9 shadow-sm mx-auto">
            <form>
              <h1>sign up here</h1>
              <input type="text" placeholder='Firstname'/>
              <input type="text" placeholder='Lastname' />
              <input type="text" placeholder='Email' />
              <input type="text" placeholder='Password'/>
              <button className='w-100 btn btn-md'></button>
            </form>
          </div>
        </div>
      </div>
    </>
  )
}

export default Formikform