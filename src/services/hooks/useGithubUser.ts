import { useQuery } from 'react-query'
import { api } from '../api'

interface GithubUser {
  name: string
  company: string
  bio: string
  blog: string
  login: string
  avatar_url: string
  followers: number
}

export async function getGithubUser(): Promise<GithubUser> {
  const { data } = await api.get<GithubUser>(
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
}

export function useGithubUser() {
  return useQuery('user', getGithubUser, {
    staleTime: Infinity,
  })
}
