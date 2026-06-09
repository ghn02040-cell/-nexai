import { NavLink } from 'react-router-dom'

// ============================================================
// 서브페이지 공통 레이아웃 (rest03 패턴 이식)
//  - 상단 sticky 탭 네비 (대카테고리 제목 + 빵부스러기 + 탭 메뉴)
//  - 페이지헤드 밴드 (headTitle / headDesc 를 그라데이션 배너로)
//  - 본문(children)
// ============================================================
export default function SubPageLayout({ sectionTitle, tabs = [], headTitle, headDesc, children }) {
  return (
    <div>
      {/* sticky 탭 네비 */}
      <div className="sticky top-16 z-30 bg-white shadow-sm dark:bg-navy-900 md:top-20">
        <div className="container-x pt-10 md:pt-12">
          <div className="flex flex-col-reverse justify-between md:flex-row">
            <h2 className="mb-6 text-4xl font-bold leading-none text-navy-300 dark:text-navy-500 md:mb-10 md:text-5xl">
              {sectionTitle}
            </h2>
            <p className="mb-4 text-sm font-medium text-navy-400 md:mb-0">
              홈
              <span className="ml-3 border-l border-navy-200 pl-3 dark:border-navy-600">
                {sectionTitle}
              </span>
            </p>
          </div>

          {tabs.length > 0 && (
            <ul className="no-scrollbar flex w-full overflow-x-auto font-bold md:justify-start">
              {tabs.map((t) => (
                <li key={t.to} className="shrink-0">
                  <NavLink
                    to={t.to}
                    className={({ isActive }) =>
                      [
                        'block whitespace-nowrap border-b-2 px-5 py-5 transition md:px-10 md:py-7',
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
          )}
        </div>
      </div>

      {/* 페이지헤드 밴드 */}
      {(headTitle || headDesc) && (
        <div className="hero-soft border-b border-navy-100 dark:border-navy-700">
          <div className="container-x py-12 md:py-16">
            {headTitle && (
              <h1 className="text-3xl font-extrabold leading-tight text-navy-900 dark:text-white md:text-5xl">
                {headTitle}
              </h1>
            )}
            {headDesc && (
              <p className="mt-4 max-w-3xl text-base leading-relaxed text-navy-600 dark:text-navy-200 md:text-lg">
                {headDesc}
              </p>
            )}
          </div>
        </div>
      )}

      {/* 본문 */}
      <div className="border-b border-navy-100 py-14 dark:border-navy-700 md:py-20">{children}</div>
    </div>
  )
}
