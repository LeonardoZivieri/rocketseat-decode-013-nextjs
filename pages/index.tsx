import { GetServerSideProps } from "next";
import { useEffect, useState } from "react";

interface HomeProps {
  repositories: string[]
}

export default function Home({ repositories }: HomeProps) {

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

export const getServerSideProps: GetServerSideProps<HomeProps> = async () => {

  const response = await fetch('https://api.github.com/users/LeonardoZivieri/repos')
  const repositories = await response.json();
  const repositoryNames = repositories.map((repo) => repo.name);

  return {
    props: {
      repositories: repositoryNames
    }
  }
}
