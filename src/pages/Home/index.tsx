import { useEffect, useState } from 'react'
import { NavLink } from 'react-router-dom'

import { useForm } from 'react-hook-form'
import { zodResolver } from '@hookform/resolvers/zod'
import * as z from 'zod'

import { UserWidget } from './UserWidget'

import { useGithubIssues } from '../../services/hooks/useGithubIssues'
import { useDebounce } from '../../hooks/useDebouncing'

const schema = z.object({
  search: z.string(),
})

type SearchSchema = z.infer<typeof schema>

export function Home() {
  const [querySearch, setQuerySearch] = useState('')

  const debouncedQuerySearch = useDebounce(querySearch, 700)
  const { data: issues, isLoading } = useGithubIssues(debouncedQuerySearch)

  const { register, watch } = useForm<SearchSchema>({
    resolver: zodResolver(schema),
  })

  const watchSearch = watch('search')

  useEffect(() => {
    setQuerySearch(watchSearch)
  }, [watchSearch])

  return (
    <div className="-m-24 mx-auto flex w-full max-w-3xl flex-col px-3">
      <UserWidget />

      {/* Status and search */}
      <div className="mb-12 mt-24 flex w-full flex-col justify-between gap-3">
        <div className="flex justify-between">
          <span className="text-lg font-bold text-base-subtitle">
            Publicações
          </span>
          <span className="text-sm text-base-span">
            {issues?.totalCount || 0} resultados
          </span>
        </div>
        <form className="relative">
          <input
            className="w-full rounded-md border border-base-border bg-base-input px-4 py-3 outline-none placeholder:text-base-label focus:border-base-blue"
            type="text"
            autoFocus
            autoComplete="off"
            placeholder="Buscar conteúdo por palavra chave..."
            tabIndex={2}
            aria-describedby="search-error"
            {...register('search')}
          />
        </form>
      </div>

      <div className="mb-20 grid grid-cols-1 gap-8 lg:grid-cols-2">
        {isLoading ? (
          <div className=" col-span-2 flex justify-center">
            <div
              className="inline-block h-8 w-8 animate-spin rounded-full border-4 border-solid border-current border-r-transparent align-[-0.125em] motion-reduce:animate-[spin_1.5s_linear_infinite]"
              role="status"
            >
              <span className="!absolute !-m-px !h-px !w-px !overflow-hidden !whitespace-nowrap !border-0 !p-0 ![clip:rect(0,0,0,0)]">
                Loading...
              </span>
            </div>
          </div>
        ) : (
          issues?.items.map(({ title, body, number, updatedAt }) => (
            <NavLink
              key={number}
              tabIndex={3}
              to="/issues/1"
              className="cursor-pointer rounded-lg border-2 border-transparent bg-base-post p-8 outline-none hover:border-base-label focus:border-base-label"
            >
              <div className="mb-5 flex justify-between gap-4">
                <h2 className="text-xl font-bold text-base-title">{title}</h2>
                <span className="whitespace-nowrap text-sm text-base-span ">
                  {updatedAt}
                </span>
              </div>
              <p className="line-clamp-4">{body}</p>
            </NavLink>
          ))
        )}
      </div>
    </div>
  )
}
