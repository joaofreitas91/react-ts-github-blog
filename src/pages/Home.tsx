import { useForm } from 'react-hook-form'
import { zodResolver } from '@hookform/resolvers/zod'
import * as z from 'zod'

import { NavLink } from 'react-router-dom'
import { ExternalLink, Github, Building, User2 } from 'lucide-react'

const schema = z.object({
  search: z.string().nonempty({ message: 'Campo obrigatório' }),
})

type SearchSchema = z.infer<typeof schema>

export function Home() {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<SearchSchema>({
    resolver: zodResolver(schema),
  })

  function handleSearch(data: SearchSchema) {
    console.log(data)
  }

  return (
    <div className="-m-24 mx-auto flex w-full max-w-3xl flex-col px-3">
      <div className="flex w-full flex-col items-center gap-8 rounded-lg bg-base-profile p-8 shadow-md md:flex-row ">
        <img
          className="h-36 w-36 rounded-lg"
          src="https://avatars.githubusercontent.com/u/80129250?v=4"
          alt=""
        />
        <div>
          <div className="mb-2 flex items-center justify-between">
            <h1 className="text-2xl font-bold text-base-title ">
              João Paulo Freitas
            </h1>
            <a
              className="flex items-center justify-center gap-2 text-base-blue"
              tabIndex={1}
              target="_blank"
              href="https://github.com/joaofreitas91"
              rel="noreferrer"
            >
              <span className="text-xs font-bold">GITHUB</span>
              <ExternalLink className="mb-[2px] h-3 w-3" />
            </a>
          </div>
          <p>
            Tristique volutpat pulvinar vel massa, pellentesque egestas. Eu
            viverra massa quam dignissim aenean malesuada suscipit. Nunc,
            volutpat pulvinar vel mass.
          </p>
          <ul className="mt-6 flex items-center gap-6">
            <li className="flex items-center gap-2 ">
              <Github className="h-4 w-4 text-base-label" />
              <span className=" whitespace-nowrap text-xs md:text-base">
                joaofreitas
              </span>
            </li>
            <li className="flex items-center gap-2 ">
              <Building className="h-4 w-4 text-base-label" />
              <span className=" whitespace-nowrap text-xs md:text-base">
                Lab2dev
              </span>
            </li>
            <li className="flex items-center gap-1 md:gap-2">
              <User2 className="h-4 w-4 text-base-label" />
              <span className=" whitespace-nowrap text-xs md:text-base">
                4 seguidores
              </span>
            </li>
          </ul>
        </div>
      </div>

      {/* Status and search */}
      <div className="mb-12 mt-[72px] flex w-full flex-col justify-between gap-3">
        <div className="flex justify-between">
          <span className="text-lg font-bold text-base-subtitle">
            Publicações
          </span>
          <span className="text-sm text-base-span">6 publicações</span>
        </div>
        <form className="relative" onSubmit={handleSubmit(handleSearch)}>
          <input
            data-error={errors.search ? 'true' : 'false'}
            className="w-full rounded-md border border-base-border bg-base-input px-4 py-3 outline-none placeholder:text-base-label focus:border-base-blue data-[error=true]:border-red-500"
            type="text"
            autoFocus
            autoComplete="off"
            placeholder="Buscar conteúdo..."
            tabIndex={2}
            aria-describedby="search-error"
            {...register('search')}
          />
          {errors.search && (
            <span className=" absolute -bottom-7 left-0 text-red-500">
              {`${errors.search.message}`}
            </span>
          )}
        </form>
      </div>

      <div className="mb-20 grid grid-cols-1 gap-8 lg:grid-cols-2">
        {Array.from({ length: 6 }).map((_, index) => (
          <NavLink
            key={index}
            tabIndex={3}
            to="/issues/1"
            className="cursor-pointer rounded-lg border-2 border-transparent bg-base-post p-8 outline-none hover:border-base-label focus:border-base-label"
          >
            <div className="mb-5 flex justify-between gap-4">
              <h2 className="text-xl font-bold text-base-title">
                JavaScript data types and data structures
              </h2>
              <span className="whitespace-nowrap text-sm text-base-span ">
                Há 1 dia
              </span>
            </div>
            <p className="line-clamp-4">
              Programming languages all have built-in data structures, but these
              often differ from one language to another. This article attempts
              to list the built-in data structures available in JavaScript and
              what properties they have. These can be used to build other data
              structures. Wherever possible, comparisons with other languages
              are drawn. Dynamic typing JavaScript is a loosely typed and
              dynamic language. Variables in JavaScript are not directly
              associated with any particular value type, and any variable can be
              assigned (and re-assigned) values of all types: let foo = 42; //
              foo is now a number foo = bar; // foo is now a string foo =
              trueee; // foo is now a boolean
            </p>
          </NavLink>
        ))}
      </div>
    </div>
  )
}
