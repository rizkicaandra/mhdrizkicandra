import { useState, useEffect } from "react";
import axios from '../api/axios'

export default function Repository(){
  const [repos, setRepos] = useState([])
  const [loading, setLoading] = useState(false)

  async function getRepos () {
    try {
      setLoading(true)
      const response = await axios({
        method: "get",
        url: `/users/rizkicaandra/repos`,
      });
      setRepos(response.data)
      setLoading(false)
    } catch (error) {
      console.log(error)
      setLoading(false)
    }
  }

  useEffect(() => {
    getRepos()
  }, [])

  return(
    <>
      <div className="container mt-5">
        <div className="row">
        <table class="table table-bordered table-hover">
          <thead>
            <tr>
              <th>ID</th>
              <th>Name</th>
              <th>URL</th>
              <th>Language</th>
              <th>Login</th>
            </tr>
          </thead>
          <tbody>
            {
              repos.map((repo, number) => (
                <tr>
                  <td>{repo.id}</td>
                  <td>{repo.name}</td>
                  <td>{repo.html_url}</td>
                  <td>{repo.language}</td>
                  <td>{repo.owner.login}</td>
                </tr>
            ))
            }
          </tbody>
        </table>
        </div>
      </div>
    </>
  )
}