import { Link } from 'react-router-dom'
import { company, topics } from '../data/site'

// 푸터 — 브랜드 소개 / 영상 주제 바로가기 / 연락처 / 정책링크
export default function Footer() {
  return (
    <footer className="border-t border-navy-100 bg-navy-50 dark:border-navy-700 dark:bg-navy-900">
      <div className="container-x grid grid-cols-1 gap-10 py-14 md:grid-cols-2 lg:grid-cols-4">
        {/* 브랜드 */}
        <div className="lg:col-span-2">
          <div className="mb-4 flex items-center gap-2">
            <span className="flex h-9 w-9 items-center justify-center rounded-xl bg-royal text-white">
              ▶
            </span>
            <span className="text-xl font-extrabold text-navy-900 dark:text-white">
              {company.name}
            </span>
          </div>
          <p className="max-w-md text-sm leading-7 text-navy-600 dark:text-navy-300">
            {company.intro[0]}
          </p>
        </div>

        {/* 영상 주제 */}
        <div>
          <h4 className="mb-4 text-sm font-extrabold uppercase tracking-wider text-navy-400">
            영상 강의
          </h4>
          <ul className="flex flex-col gap-2.5 text-sm">
            {topics.map((t) => (
              <li key={t.key}>
                <Link
                  to={`/videos/${t.key}`}
                  className="text-navy-600 transition hover:text-royal dark:text-navy-300 dark:hover:text-sky"
                >
                  {t.label}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        {/* 연락처 */}
        <div>
          <h4 className="mb-4 text-sm font-extrabold uppercase tracking-wider text-navy-400">
            문의
          </h4>
          <ul className="flex flex-col gap-2.5 text-sm text-navy-600 dark:text-navy-300">
            <li>{company.address}</li>
            <li>Tel. {company.tel}</li>
            <li>
              <a href={`mailto:${company.email}`} className="hover:text-royal dark:hover:text-sky">
                {company.email}
              </a>
            </li>
            <li className="flex gap-3 pt-1">
              {company.social.map((s) => (
                <a
                  key={s.label}
                  href={s.url}
                  target="_blank"
                  rel="noreferrer"
                  className="font-bold text-navy-700 hover:text-royal dark:text-navy-200 dark:hover:text-sky"
                >
                  {s.label}
                </a>
              ))}
            </li>
          </ul>
        </div>
      </div>

      {/* 하단 바 */}
      <div className="border-t border-navy-100 dark:border-navy-700">
        <div className="container-x flex flex-col items-center justify-between gap-3 py-5 text-sm md:flex-row">
          <ul className="flex items-center">
            {company.footerLinks.map((l) => (
              <li key={l.label}>
                <Link
                  to={l.to}
                  className={[
                    'px-4 first:pl-0',
                    l.strong
                      ? 'font-extrabold text-navy-900 dark:text-white'
                      : 'font-medium text-navy-500 hover:text-royal dark:text-navy-400 dark:hover:text-sky',
                  ].join(' ')}
                >
                  {l.label}
                </Link>
              </li>
            ))}
          </ul>
          <p className="text-navy-400">{company.copyright}</p>
        </div>
      </div>
    </footer>
  )
}
