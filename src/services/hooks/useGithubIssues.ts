import { useQuery } from 'react-query'
import { api } from '../api'

import formatDistanceToNow from 'date-fns/formatDistanceToNow'
import brLocale from 'date-fns/locale/pt-BR'

interface GithubIssuesItems {
  title: string
  body: string
  number: number
  updated_at: string
}

interface GithubIssues {
  items: GithubIssuesItems[]
  total_count: number
}

export async function getGithubIssues(querySearch = '') {
  const user = import.meta.env.VITE_GITHUB_USER
  const repo = import.meta.env.VITE_GITHUB_REPO

  const repoPath = `${user}/${repo}`

  const { data } = await api.get<GithubIssues>(`search/issues`, {
    params: {
      q: `${querySearch} repo:${repoPath}`,
    },
  })

  const issues = data.items.map((issue) => ({
    title: issue.title,
    body: issue.body,
    number: issue.number,
    updatedAt: formatDistanceToNow(new Date(issue.updated_at), {
      locale: brLocale,
      addSuffix: true,
    }),
  }))

  return {
    items: issues,
    totalCount: data.total_count,
  }
}

export function useGithubIssues(querySearch = '') {
  return useQuery(['issues', querySearch], () => getGithubIssues(querySearch), {
    staleTime: 1000 * 60 * 1, // 1 minute
  })
}
