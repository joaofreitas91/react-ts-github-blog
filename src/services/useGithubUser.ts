import { useQuery } from 'react-query'
import { api } from './api'

interface GithubUser {
  name: string
  company: string
  bio: string
  blog: string
  login: string
  avatar_url: string
  followers: number
}

export function useGithubUser() {
  return useQuery<GithubUser>(
    'user',
    async () => {
      const { data } = await api.get(
        `/users/${import.meta.env.VITE_GITHUB_USER}`,
      )

      return {
        name: data.name,
        company: data.company,
        bio: data.bio,
        blog: data.blog,
        login: data.login,
        avatar_url: data.avatar_url,
        followers: data.followers,
      }
    },
    {
      staleTime: Infinity,
    },
  )
}
