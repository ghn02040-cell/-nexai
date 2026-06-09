import { Link } from 'react-router-dom'
import { company, topics } from '../data/site'

// ============================================================
// 푸터 (rest03 패턴) — 상단: 로고+소개문 / 하단: 다크 영역(연락처·링크·정책)
// ============================================================
export default function Footer() {
  return (
    <footer>
      {/* 상단 소개 영역 (밝음) */}
      <div className="container-x py-16 md:py-20">
        <div className="flex flex-col items-start gap-8 md:flex-row md:items-center">
          <div className="flex shrink-0 items-center gap-2">
            <span className="flex h-10 w-10 items-center justify-center rounded-xl bg-royal text-white shadow-glow">
              ▶
            </span>
            <span className="text-2xl font-extrabold tracking-tight text-navy-900 dark:text-white">
              {company.name}
            </span>
          </div>
          <div className="flex-grow text-base leading-7 text-navy-600 dark:text-navy-300 md:text-[1.05rem]">
            {company.intro.map((p, i) => (
              <p key={i} className="mb-3 last:mb-0">
                {p}
              </p>
            ))}
          </div>
        </div>
      </div>

      {/* 하단 다크 영역 */}
      <div className="bg-navy-950 text-navy-300">
        <div className="container-x flex flex-col gap-10 py-12">
          <div className="grid grid-cols-1 gap-10 md:grid-cols-3">
            {/* 연락처 */}
            <div className="text-sm">
              <h4 className="mb-4 font-extrabold uppercase tracking-wider text-navy-100">문의</h4>
              <ul className="flex flex-col gap-2">
                <li>{company.address}</li>
                <li>Tel. {company.tel}</li>
                <li>
                  <a href={`mailto:${company.email}`} className="hover:text-sky">
                    {company.email}
                  </a>
                </li>
              </ul>
            </div>

            {/* 영상 주제 */}
            <div className="text-sm">
              <h4 className="mb-4 font-extrabold uppercase tracking-wider text-navy-100">
                영상 강의
              </h4>
              <ul className="flex flex-col gap-2">
                {topics.map((t) => (
                  <li key={t.key}>
                    <Link to={`/videos/${t.key}`} className="hover:text-sky">
                      {t.title}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>

            {/* 바로가기 / 소셜 */}
            <div className="text-sm">
              <h4 className="mb-4 font-extrabold uppercase tracking-wider text-navy-100">바로가기</h4>
              <ul className="flex flex-col gap-2">
                <li>
                  <Link to="/about" className="hover:text-sky">
                    회사소개
                  </Link>
                </li>
                <li>
                  <Link to="/contact" className="hover:text-sky">
                    문의하기
                  </Link>
                </li>
                <li className="flex gap-4 pt-1">
                  {company.social.map((s) => (
                    <a
                      key={s.label}
                      href={s.url}
                      target="_blank"
                      rel="noreferrer"
                      className="font-bold text-navy-100 hover:text-sky"
                    >
                      {s.label}
                    </a>
                  ))}
                </li>
              </ul>
            </div>
          </div>

          {/* 정책 링크 + 카피라이트 */}
          <div className="flex flex-col justify-between gap-4 border-t border-navy-800 pt-5 text-sm md:flex-row md:items-center">
            <ul className="flex">
              {company.footerLinks.map((l) => (
                <li key={l.label}>
                  <Link
                    to={l.to}
                    className={[
                      'px-5 first:pl-0',
                      l.strong ? 'font-black text-white' : 'font-medium text-navy-400 hover:text-white',
                    ].join(' ')}
                  >
                    {l.label}
                  </Link>
                </li>
              ))}
            </ul>
            <p className="text-navy-500">{company.copyright}</p>
          </div>
        </div>
      </div>
    </footer>
  )
}
