import React from 'react'

const Home = (props) => {
  return (
    <div>
      <h1>Table</h1>
      <table>
        <tr>
          <th> Rollno </th>
          <th> FirstName </th>
          <th> LastName </th>
          <th> Age </th>
          <th> Department </th>
        </tr>
        <tr> 
          <td>{props.Rollno}</td>
          <td>{props.Firstname}</td>
          <td>{props.Lastname}</td>
          <td>{props.Age}</td>
          <td>{props.Department}</td>
        </tr>
        <tr> 
          <td></td>
          <td></td>
          <td>  </td>
          <td>  </td>
          <td>  </td>
        </tr>
        <tr> 
          <td></td>
          <td></td>
          <td>  </td>
          <td>  </td>
          <td>  </td>
        </tr>
        <tr> 
          <td></td>
          <td></td>
          <td>  </td>
          <td>  </td>
          <td>  </td>
        </tr>
      </table>
    </div>
  )
}

export default Home
