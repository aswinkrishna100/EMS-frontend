import React from 'react'

function Edit() {
  return (
    <div>
<button type="button" class="btn btn-secondary" data-bs-toggle="modal" data-bs-target="#exampleModal">Edit</button>

<div class="modal fade" id="exampleModal" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
  <div class="modal-dialog">
    <div class="modal-content">
      <div class="modal-header">
        <h1 class="modal-title fs-5" id="exampleModalLabel">Modal title</h1>
        <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
      </div>
      <div class="modal-body">
        <input type="text" className='form-control mb-2' placeholder='Name'/>
        <input type="email" className='form-control mb-2' placeholder='Email'/>
        <input type="text" className='form-control mb-2' placeholder='Age'/>
        <input type="text" className='form-control mb-2' placeholder='Designation'/>
        <input type="text" className='form-control mb-2' placeholder='Salary'/>
        <input type="text" className='form-control mb-2' placeholder='Place'/>
      </div>
      <div class="modal-footer">
        <button type="button" class="btn btn-secondary" data-bs-dismiss="modal">Close</button>
        <button type="button" class="btn btn-primary">Update</button>
      </div>
    </div>
  </div>
</div>
    </div>
  )
}

export default Edit
