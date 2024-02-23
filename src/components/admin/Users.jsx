import React from "react";

import me from "../../assets/founder.png"

const Users = () => {
  const arr = [1, 2, 3, 4];
  return (
    <section className="tableClass">
      <main>
        <table>
          <thead>
            <tr>
              <th>User Id</th>
              <th>Name</th>
              <th>Photo</th>
              <th>Role</th>
              <th>Since</th>
            </tr>
          </thead>

          <tbody>
            {arr.map((i) => (
              <tr key={i}>
                <td>#set455</td>
                <td>Sankalp</td>
                <td>
                    <img src={me} alt="Users" />
                </td>
                <td>"admin"</td>
                <td>{12-6-2023}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </main>
    </section>
  );
};

export default Users;
