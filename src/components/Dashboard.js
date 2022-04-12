import React, { useState, useEffect } from "react"
import { Card, Button, Alert } from "react-bootstrap"
import { useAuth } from "../context/AuthContext"
import { Link, useNavigate } from "react-router-dom"
import axios from 'axios'

export default function Dashboard() {
  const [error, setError] = useState("")
  // const [token, setToken] = useState("")
  // const [msg, setMsg] = useState("")
  const { currentUser, logout } = useAuth()
  const navigate = useNavigate()

  async function handleLogout() {
    setError("")

    try {
      await logout()
      navigate("/login")
    } catch {
      setError("Failed to log out")
    }
  }
  useEffect(() => {
    // console.log(currentUser.auth.currentUser.accessToken)
    // setToken(currentUser.auth.currentUser.accessToken)
    fetchData(currentUser.auth.currentUser.accessToken)
  }, [currentUser]);


  const fetchData = async (token)=>{
    const res = await axios.get('http://localhost:4000/api/private/priv',{
      headers:{
        Authorization: `Bearer ${token}`
      }
    })
    console.log(res)
  }

  return (
    <>
      <Card>
        <Card.Body>
          <h2 className="text-center mb-4">Profile</h2>
          {error && <Alert variant="danger">{error}</Alert>}
          <strong>Email:</strong> {currentUser.email}
          <Link to="/update-profile" className="btn btn-primary w-100 mt-3">
            Update Profile
          </Link>
        </Card.Body>
      </Card>
      <div className="w-100 text-center mt-2">
        <Button variant="link" onClick={handleLogout}>
          Log Out
        </Button>
      </div>
    </>
  )
  }