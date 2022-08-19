import { useState } from 'react'


const UserProfile = () => {
  const [userName, setUserName] = useState('')


  return (
    <div>
      <form>
        <h3>Sign In</h3>
        <input
          id="userName"
          value={userName}
          placeholder="User Name"
          onChange={(e) => setUserName(e.target.value)}
        />
        <button type="submit">Submit</button>
      </form>
    </div>
  )
}

export default UserProfile
