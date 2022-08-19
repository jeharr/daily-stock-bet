import { useState } from 'react'
import UserMoney from "./UserMoney"

const UserProfile = () => {
  const [userInfo, setUserInfo] = useState({})

  return (
    <div>
      <h3>User Name: {userInfo}</h3>
      <UserMoney />
      <h3>User Winning Streak:</h3>
    </div>
  )
}

export default UserProfile
