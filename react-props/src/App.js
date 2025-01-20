import React from "react";
import UserProfile from "./UserProfile";

function App() {
  const userData = {
    name: 'Dev',
    age: 21,
    location: 'Surat',
    bio: '.....'
  }
  return (
    <>
      <div>
        <UserProfile name={userData.name} age={userData.age} location={userData.location} bio={userData.bio} />
      </div>
    </>
  );
}

export default App;