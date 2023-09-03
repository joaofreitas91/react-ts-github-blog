import { useContext } from 'react'
import { UserContext } from '../../contexts/UserContext'

import { NavLink, useParams } from 'react-router-dom'

import MarkdownIt from 'markdown-it'

import {
  ExternalLink,
  Github,
  ChevronLeft,
  Calendar,
  MessageCircle,
} from 'lucide-react'
import { useGithubIssue } from '../../services/hooks/useGithubIssue'

export function IssueDetail() {
  const { isUserLoading, user } = useContext(UserContext)

  const { id } = useParams()
  const { data: issueDetail } = useGithubIssue(id)

  const md = new MarkdownIt()

  const htmlContent = md.render(issueDetail?.body || '')

  return (
    <div className="-m-24 mx-auto flex w-full max-w-3xl flex-col px-3">
      <div className="flex w-full flex-col justify-center rounded-lg bg-base-profile p-8 shadow-md ">
        <div className="mb-5 flex items-center justify-between">
          <NavLink
            className="flex items-center justify-center gap-2 text-base-blue"
            tabIndex={1}
            to="/"
          >
            <ChevronLeft className="mb-px h-3 w-3" />
            <span className="text-xs font-bold">VOLTAR</span>
          </NavLink>

          <a
            className="flex items-center justify-center gap-2 text-base-blue"
            tabIndex={1}
            target="_blank"
            href={user?.blog}
            rel="noreferrer"
          >
            <span className="text-xs font-bold">GITHUB</span>
            <ExternalLink className="mb-[2px] h-3 w-3" />
          </a>
        </div>
        <h1 className="text-2xl font-bold text-base-title ">
          {issueDetail?.title}
        </h1>

        {!isUserLoading && user && (
          <ul className="mt-2 flex items-center gap-6">
            <li className="flex items-center gap-2 ">
              <Github className="h-5 w-5 text-base-label" />
              <span className=" whitespace-nowrap text-xs md:text-base">
                {user?.login}
              </span>
            </li>
            <li className="flex items-center gap-2 ">
              <Calendar className="h-5 w-5 text-base-label" />
              <span className=" whitespace-nowrap text-xs md:text-base">
                {user?.company}
              </span>
            </li>
            <li className="flex items-center gap-1 md:gap-2">
              <MessageCircle className="h-5 w-5 text-base-label" />
              <span className=" whitespace-nowrap text-xs md:text-base">
                {`${user?.followers} seguidores`}
              </span>
            </li>
          </ul>
        )}
      </div>
      <article className="prose prose-headings:text-base-title prose-headings:text-lg prose-p:text-base-text prose-a:text-base-blue prose-strong:text-base-text prose-li:text-base-text mt-4">
        <div dangerouslySetInnerHTML={{ __html: htmlContent }} />
      </article>
    </div>
  )
}
