import React from 'react';

const Form = () => {
  return (
    <div>
      <h2>Form</h2>
      <form action="#" method="post">
        <label htmlFor="name">Name:</label><br />
        <input type="text" id="name" name="name" required /><br /><br />

        <label htmlFor="email">Email:</label><br />
        <input type="email" id="email" name="email" required /><br /><br />

        <label htmlFor="password">Password:</label><br />
        <input type="password" id="password" name="password" required /><br /><br />

        <input type="submit" value="Submit" />
      </form>
    </div>
  );
}

export default Form;
