import { Outlet } from 'react-router-dom'

import cover from '../assets/cover.png'

export function DefaultLayout() {
  return (
    <div className="w-full">
      <img src={cover} alt="" className="h-72 w-full object-cover" />
      <Outlet />
    </div>
  )
}
