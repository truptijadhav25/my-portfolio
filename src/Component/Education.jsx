import React from 'react'
import { Link } from 'react-router-dom'

const Education = () => {
  return (
    <div>
      <Link />
      <h1>Education</h1>
      <table>
        <table class="table">
          <thead>
            <tr>
              <th scope="col">No.</th>
              <th scope="col">Education</th>
              <th scope="col">Marks</th>
              <th scope="col">Collage Name</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <th scope="row">1</th>
              <td>SSC</td>
              <td>82.20</td>
              <td>K.K.D.V School</td>
            </tr>
            <tr>
              <th scope="row">2</th>
              <td>HSC</td>
              <td>79</td>
              <td>Jijamata Collage</td>
            </tr>
            <tr>
              <th scope="row">3</th>
              <td>BTech</td>
              <td>75</td>
              <td>Deogiri Institute </td>
            </tr>
          </tbody>
        </table>
      </table>

    </div>
  )
}

export default Education