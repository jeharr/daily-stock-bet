import { useState } from 'react'

const SignIn = () => {
  const [userName, setUserName] = useState('')


  return (
    <div>
      <form className='signIn'>

        <h3>Sign In</h3>

        <input
          id="userName"
          value={userName}
          placeholder="Create User Name"
          onChange={(e) => setUserName(e.target.value)}
        />

        <button
          type="submit"
          onClick={() => {
            alert(`Welcome ${userName}`)
          }}
        >
          Submit
        </button>
      </form>
    </div>
  )
}

export default SignIn
