import { useState, useEffect, useMemo } from 'react'
import { useParams, Navigate } from 'react-router-dom'
import { topics, videos, PER_PAGE } from '../data/site'
import SubPageLayout from '../components/SubPageLayout'
import VideoCard from '../components/VideoCard'
import VideoModal from '../components/VideoModal'
import Pagination from '../components/Pagination'

// 대탭 (영상 주제)
const tabs = topics.map((t) => ({ label: t.label, to: `/videos/${t.key}` }))

export default function Videos() {
  const { topic } = useParams()
  const meta = topics.find((t) => t.key === topic)

  const [moduleIdx, setModuleIdx] = useState(0) // 0 = 전체
  const [page, setPage] = useState(1)
  const [active, setActive] = useState(null)

  // 주제 변경 시 소분류·페이지 초기화
  useEffect(() => {
    setModuleIdx(0)
    setPage(1)
  }, [topic])

  if (!meta) return <Navigate to={`/videos/${topics[0].key}`} replace />

  // 소분류 버튼 목록 (전체 + 모듈)
  const subTabs = ['전체', ...meta.modules]
  const selectedModule = moduleIdx === 0 ? null : subTabs[moduleIdx]

  const list = videos[topic] || []
  const filtered = selectedModule ? list.filter((v) => v.module === selectedModule) : list
  const totalPages = Math.max(1, Math.ceil(filtered.length / PER_PAGE))

  const pageItems = useMemo(() => {
    const start = (page - 1) * PER_PAGE
    return filtered.slice(start, start + PER_PAGE)
  }, [filtered, page])

  const selectModule = (i) => {
    setModuleIdx(i)
    setPage(1)
  }
  const changePage = (p) => {
    setPage(p)
    document.getElementById('video-grid')?.scrollIntoView({ behavior: 'smooth', block: 'start' })
  }

  return (
    <SubPageLayout
      sectionTitle="영상 강의"
      tabs={tabs}
      headTitle={meta.headline}
      headDesc={meta.desc}
    >
      <div className="container-x" id="video-grid">
        <h3 className="mb-10 text-3xl font-bold text-royal dark:text-sky md:text-4xl">
          {meta.title}
        </h3>

        {/* 소분류(모듈) 버튼 — rest03 Business 패턴 */}
        <div className="mb-12 overflow-hidden rounded-xl border border-navy-200 dark:border-navy-700">
          <ul className="no-scrollbar flex w-full overflow-x-auto">
            {subTabs.map((c, i) => (
              <li
                key={c}
                className="flex-grow border-l border-navy-200 first:border-l-0 dark:border-navy-700"
              >
                <button
                  type="button"
                  onClick={() => selectModule(i)}
                  className={[
                    'h-14 w-full whitespace-nowrap px-4 text-sm font-bold transition md:h-16 md:text-base',
                    i === moduleIdx
                      ? 'bg-royal text-white'
                      : 'bg-white text-navy-700 hover:bg-navy-50 dark:bg-navy-800 dark:text-navy-200 dark:hover:bg-navy-700',
                  ].join(' ')}
                >
                  {c}
                </button>
              </li>
            ))}
          </ul>
        </div>

        <p className="mb-6 text-sm font-medium text-navy-400">
          총 {filtered.length}개 강의 · {page}/{totalPages} 페이지
        </p>

        {/* 영상 그리드 (2 x 3) */}
        <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:gap-8">
          {pageItems.map((v) => (
            <div key={v.id} className="animate-fadeUp">
              <VideoCard video={v} onPlay={setActive} />
            </div>
          ))}
        </div>

        <Pagination page={page} totalPages={totalPages} onChange={changePage} />
      </div>

      <VideoModal video={active} onClose={() => setActive(null)} />
    </SubPageLayout>
  )
}
