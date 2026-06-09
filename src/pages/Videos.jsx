import { useState, useEffect, useMemo } from 'react'
import { useParams, Navigate, NavLink } from 'react-router-dom'
import { topics, videos, PER_PAGE } from '../data/site'
import VideoCard from '../components/VideoCard'
import VideoModal from '../components/VideoModal'
import Pagination from '../components/Pagination'

export default function Videos() {
  const { topic } = useParams()
  const meta = topics.find((t) => t.key === topic)

  const [page, setPage] = useState(1)
  const [active, setActive] = useState(null) // 재생 중인 영상

  // 주제 변경 시 1페이지로 리셋
  useEffect(() => setPage(1), [topic])

  const list = videos[topic] || []
  const totalPages = Math.max(1, Math.ceil(list.length / PER_PAGE))

  const pageItems = useMemo(() => {
    const start = (page - 1) * PER_PAGE
    return list.slice(start, start + PER_PAGE)
  }, [list, page])

  // 페이지 변경 시 그리드 상단으로 스크롤
  const changePage = (p) => {
    setPage(p)
    document.getElementById('video-grid')?.scrollIntoView({ behavior: 'smooth', block: 'start' })
  }

  if (!meta) return <Navigate to={`/videos/${topics[0].key}`} replace />

  return (
    <div>
      {/* 페이지 헤드 */}
      <section className="hero-soft border-b border-navy-100 dark:border-navy-700">
        <div className="container-x py-12 md:py-16">
          <p className="eyebrow">VIDEO LECTURES</p>
          <h1 className="mt-4 text-3xl font-extrabold leading-tight text-navy-900 dark:text-white md:text-5xl">
            {meta.headline}
          </h1>
          <p className="mt-4 max-w-2xl text-base leading-relaxed text-navy-600 dark:text-navy-200 md:text-lg">
            {meta.desc}
          </p>
        </div>
      </section>

      {/* 주제 탭 (sticky, 가로 스크롤) */}
      <div className="sticky top-16 z-30 border-b border-navy-100 bg-white/95 backdrop-blur dark:border-navy-700 dark:bg-navy-900/95 md:top-20">
        <div className="container-x">
          <ul className="no-scrollbar flex gap-1 overflow-x-auto">
            {topics.map((t) => (
              <li key={t.key} className="shrink-0">
                <NavLink
                  to={`/videos/${t.key}`}
                  className={({ isActive }) =>
                    [
                      'block whitespace-nowrap border-b-2 px-4 py-4 text-sm font-bold transition md:text-base',
                      isActive
                        ? 'border-royal text-royal dark:border-sky dark:text-sky'
                        : 'border-transparent text-navy-600 hover:text-royal dark:text-navy-300 dark:hover:text-sky',
                    ].join(' ')
                  }
                >
                  {t.label}
                </NavLink>
              </li>
            ))}
          </ul>
        </div>
      </div>

      {/* 영상 그리드 (2 x 3) */}
      <section id="video-grid" className="container-x scroll-mt-32 py-12 md:py-16">
        <div className="mb-8 flex items-end justify-between">
          <div>
            <h2 className="text-2xl font-extrabold text-navy-900 dark:text-white md:text-3xl">
              {meta.title}
            </h2>
            <p className="mt-1 text-sm text-navy-500 dark:text-navy-400">
              총 {list.length}개 강의 · {page}/{totalPages} 페이지
            </p>
          </div>
        </div>

        {/* 2 x 3 배치 (한 페이지 6개: 2열 × 3행) */}
        <div className="grid grid-cols-1 gap-6 sm:grid-cols-2">
          {pageItems.map((v) => (
            <div key={v.id} className="animate-fadeUp">
              <VideoCard video={v} onPlay={setActive} />
            </div>
          ))}
        </div>

        <Pagination page={page} totalPages={totalPages} onChange={changePage} />
      </section>

      <VideoModal video={active} onClose={() => setActive(null)} />
    </div>
  )
}
