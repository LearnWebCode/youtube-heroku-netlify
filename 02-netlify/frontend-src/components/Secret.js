import React, { useEffect, useState } from "react"
import Axios from "axios"

function Secret() {
  const [username, setUsername] = useState("")
  const [password, setPassword] = useState("")
  const [secret, setSecret] = useState("")

  async function handleSubmit(e) {
    e.preventDefault()
    const response = await Axios.post("/.netlify/functions/topsecret", { username, password })
    setSecret(response.data)
  }

  if (secret.status === "success") {
    return (
      <div className="py-5 text-center">
        <h1>{secret.message}</h1>
      </div>
    )
  }

  return (
    <form onSubmit={handleSubmit}>
      <div className="mb-3">
        {secret.status === "failure" && <div className="alert alert-danger">That is incorrect. Try again.</div>}
        <label for="exampleInputEmail1" className="form-label">
          Username
        </label>
        <input onChange={e => setUsername(e.target.value)} type="text" autoComplete="off" className="form-control" id="exampleInputEmail1" />
      </div>
      <div className="mb-3">
        <label for="exampleInputPassword1" className="form-label">
          Password
        </label>
        <input onChange={e => setPassword(e.target.value)} type="password" className="form-control" id="exampleInputPassword1" />
      </div>
      <button type="submit" className="btn btn-primary">
        Submit
      </button>
    </form>
  )
}

export default Secret
