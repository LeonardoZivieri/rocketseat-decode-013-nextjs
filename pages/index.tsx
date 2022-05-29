import { GetStaticProps } from "next";

interface HomeProps {
  repositories: string[],
  renderedAt: string
}

export default function Home({ repositories, renderedAt }: HomeProps) {
  return (
    <>
      <h1>Hello World!</h1>
      <h3>I&apos;m Leonardo and these are my repos:</h3>
      <ul>
        {repositories.map((repo) => <li key={repo}>{repo}</li>)}
      </ul>
      <small>Rendered at: {renderedAt}</small>
    </>
  )
}

export const getStaticProps: GetStaticProps<HomeProps> = async () => {

  const response = await fetch('https://api.github.com/users/LeonardoZivieri/repos')
  const repositories = await response.json();
  const repositoryNames = repositories.map((repo) => repo.name);

  return {
    props: {
      repositories: repositoryNames,
      renderedAt: new Date().toJSON()
    },
    revalidate: 60 * 60 * 4, // 4 hours
  }
}
