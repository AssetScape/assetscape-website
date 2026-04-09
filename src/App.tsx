import { BrowserRouter, Routes, Route } from 'react-router-dom'
import { Layout, ScrollToTop } from './components/Layout'
import { DetailPage } from './components/DetailPage'
import { HomePage } from './pages/HomePage'
import { ConnectedDataPage } from './pages/ConnectedDataPage'
import { NotFoundPage } from './pages/NotFoundPage'

import { P_M3 } from './content/project-m3-j2-4a'
import { P_CCTV } from './content/project-cctv-suitability'
import { P_HE_Tech } from './content/project-highways-technology'
import { P_NH_CCMT } from './content/project-nh-ccmt'
import { P_NH_RL } from './content/project-nh-road-lighting'
import { P_NH_DR } from './content/project-nh-drainage'

export default function App() {
  return (
    <BrowserRouter basename={import.meta.env.BASE_URL}>
      <ScrollToTop />
      <Routes>
        <Route path='/' element={<Layout><HomePage /></Layout>} />
        <Route path='/3d-data-wrapper' element={<Layout><ConnectedDataPage /></Layout>} />
        <Route path='/projects/m3-j2-4a' element={<Layout><DetailPage {...P_M3} /></Layout>} />
        <Route path='/projects/cctv-suitability' element={<Layout><DetailPage {...P_CCTV} /></Layout>} />
        <Route path='/projects/highways-technology' element={<Layout><DetailPage {...P_HE_Tech} /></Layout>} />
        <Route path='/projects/nh-ccmt' element={<Layout><DetailPage {...P_NH_CCMT} /></Layout>} />
        <Route path='/projects/nh-road-lighting' element={<Layout><DetailPage {...P_NH_RL} /></Layout>} />
        <Route path='/projects/nh-drainage' element={<Layout><DetailPage {...P_NH_DR} /></Layout>} />
        <Route path='*' element={<Layout><NotFoundPage /></Layout>} />
      </Routes>
    </BrowserRouter>
  )
}
