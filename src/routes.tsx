import {
  createBrowserRouter,
  createRoutesFromElements,
  Route,
} from 'react-router-dom'

import { Home } from './pages/Home'
import { IssueDetail } from './pages/IssueDetail'
import { DefaultLayout } from './layouts/DefaultLayout'

export const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path="/" element={<DefaultLayout />}>
      <Route index element={<Home />} />
      <Route path="issues/:id" element={<IssueDetail />} />
    </Route>,
  ),
)
