import { Link } from 'react-router-dom'

// 약관 / 개인정보처리방침 등 단순 텍스트 페이지
export default function SimplePage({ title, body }) {
  return (
    <div>
      <section className="hero-gradient text-white">
        <div className="container-x py-16 md:py-20">
          <h1 className="text-3xl font-extrabold md:text-4xl">{title}</h1>
        </div>
      </section>
      <section className="container-x py-16 md:py-24">
        <div className="mx-auto max-w-3xl space-y-4 leading-8 text-navy-600 dark:text-navy-300">
          {body ? (
            body.map((p, i) => <p key={i}>{p}</p>)
          ) : (
            <p>내용이 준비 중입니다.</p>
          )}
          <Link to="/" className="btn-ghost mt-6 inline-flex">
            ← 홈으로
          </Link>
        </div>
      </section>
    </div>
  )
}
