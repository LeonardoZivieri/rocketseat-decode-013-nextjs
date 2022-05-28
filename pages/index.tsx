import { useEffect, useState } from "react";

export default function Home() {

  const [repositories, setRepositories] = useState([] as string[]);

  useEffect(() => {
    fetch('https://api.github.com/users/LeonardoZivieri/repos')
      .then(d => d.json())
      .then(repositories => {
        const repositoryNames = repositories.map((repo) => repo.name);
        setRepositories(repositoryNames)
      })
  }, [])

  return (
    <>
      <h1>Hello World!</h1>
      <h3>I'm Leonardo and these are my repos:</h3>
      <ul>
        {repositories.map((repo) => <li key={repo}>{repo}</li>)}
      </ul>
    </>
  )
}
