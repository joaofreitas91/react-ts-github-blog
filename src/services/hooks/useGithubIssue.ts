import { useQuery } from 'react-query'
import { api } from '../api'

interface GithubIssue {
  title: string
  body: string
}

export async function getGithubIssue(issueID: string) {
  const user = import.meta.env.VITE_GITHUB_USER
  const repo = import.meta.env.VITE_GITHUB_REPO

  const repoPath = `${user}/${repo}`

  const {
    data: { title, body },
  } = await api.get<GithubIssue>(`repos/${repoPath}/issues/${issueID}`)

  return {
    title,
    body,
  }
}

export function useGithubIssue(issueID = '') {
  return useQuery(['issue', issueID], () => getGithubIssue(issueID), {
    staleTime: 1000 * 60 * 60, // 1 hour
  })
}
