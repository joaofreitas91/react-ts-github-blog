import { Building, ExternalLink, Github, User2 } from 'lucide-react'
import { useGithubUser } from '../../services/useGithubUser'

export function UserWidget() {
  const { data, isLoading } = useGithubUser()

  return (
    <>
      {isLoading && (
        <div className="flex w-full flex-col items-center justify-start gap-8 rounded-lg bg-base-profile p-8 shadow-md md:flex-row ">
          <div className="block h-36 w-36 shrink-0 animate-pulse rounded-lg bg-base-label" />
          <div className="w-full">
            <div className="mb-2 h-6 w-40 animate-pulse rounded bg-base-span text-2xl font-bold" />
            <div className="h-16 w-full animate-pulse rounded bg-base-span" />
            <div className="mt-2 h-6 w-full animate-pulse rounded bg-base-span" />
          </div>
        </div>
      )}

      {data && (
        <div className="flex w-full flex-col items-center gap-8 rounded-lg bg-base-profile p-8 shadow-md md:flex-row ">
          <img className="h-36 w-36 rounded-lg" src={data?.avatar_url} alt="" />
          <div>
            <div className="mb-2 flex items-center justify-between">
              <h1 className="text-2xl font-bold text-base-title ">
                {data?.name}
              </h1>
              <a
                className="flex items-center justify-center gap-2 text-base-blue"
                tabIndex={1}
                target="_blank"
                href={data?.blog}
                rel="noreferrer"
              >
                <span className="text-xs font-bold">GITHUB</span>
                <ExternalLink className="mb-[2px] h-3 w-3" />
              </a>
            </div>
            <p>{data?.bio}</p>
            <ul className="mt-6 flex items-center gap-6">
              <li className="flex items-center gap-2 ">
                <Github className="h-4 w-4 text-base-label" />
                <span className=" whitespace-nowrap text-xs md:text-base">
                  {data?.login}
                </span>
              </li>
              <li className="flex items-center gap-2 ">
                <Building className="h-4 w-4 text-base-label" />
                <span className=" whitespace-nowrap text-xs md:text-base">
                  {data?.company}
                </span>
              </li>
              <li className="flex items-center gap-1 md:gap-2">
                <User2 className="h-4 w-4 text-base-label" />
                <span className=" whitespace-nowrap text-xs md:text-base">
                  {`${data?.followers} seguidores`}
                </span>
              </li>
            </ul>
          </div>
        </div>
      )}
    </>
  )
}
