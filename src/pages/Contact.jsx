import { useState } from 'react'
import { company } from '../data/site'

export default function Contact() {
  const [sent, setSent] = useState(false)

  const onSubmit = (e) => {
    e.preventDefault()
    // 정적 호스팅이므로 실제 전송 대신 확인 메시지 (메일 클라이언트 연동 가능)
    setSent(true)
  }

  return (
    <div>
      <section className="hero-gradient text-white">
        <div className="container-x py-16 md:py-24">
          <p className="eyebrow !bg-white/15 !text-sky">CONTACT</p>
          <h1 className="mt-4 text-3xl font-extrabold md:text-5xl">문의하기</h1>
          <p className="mt-3 text-lg text-navy-100">강의·제휴·수강 관련 무엇이든 물어보세요.</p>
        </div>
      </section>

      <section className="container-x py-16 md:py-24">
        <div className="grid gap-12 lg:grid-cols-2">
          {/* 연락처 정보 */}
          <div>
            <h2 className="mb-6 text-2xl font-extrabold text-navy-900 dark:text-white">
              연락처
            </h2>
            <ul className="space-y-5 text-navy-700 dark:text-navy-200">
              <li className="flex gap-4">
                <span className="text-2xl">📍</span>
                <div>
                  <div className="font-bold">주소</div>
                  <div className="text-navy-500 dark:text-navy-300">{company.address}</div>
                </div>
              </li>
              <li className="flex gap-4">
                <span className="text-2xl">📞</span>
                <div>
                  <div className="font-bold">전화</div>
                  <div className="text-navy-500 dark:text-navy-300">{company.tel}</div>
                </div>
              </li>
              <li className="flex gap-4">
                <span className="text-2xl">✉️</span>
                <div>
                  <div className="font-bold">이메일</div>
                  <a
                    href={`mailto:${company.email}`}
                    className="text-royal hover:underline dark:text-sky"
                  >
                    {company.email}
                  </a>
                </div>
              </li>
            </ul>
          </div>

          {/* 문의 폼 */}
          <div className="surface p-7">
            {sent ? (
              <div className="flex h-full flex-col items-center justify-center gap-3 py-10 text-center">
                <span className="text-5xl">✅</span>
                <h3 className="text-xl font-bold text-navy-900 dark:text-white">
                  문의가 접수되었습니다
                </h3>
                <p className="text-navy-500 dark:text-navy-300">
                  빠른 시일 내에 답변드리겠습니다. 감사합니다.
                </p>
                <button type="button" className="btn-ghost mt-2" onClick={() => setSent(false)}>
                  다시 작성
                </button>
              </div>
            ) : (
              <form onSubmit={onSubmit} className="flex flex-col gap-4">
                <Field label="이름" name="name" />
                <Field label="이메일" name="email" type="email" />
                <div>
                  <label className="mb-1.5 block text-sm font-bold text-navy-700 dark:text-navy-200">
                    문의 내용
                  </label>
                  <textarea
                    required
                    rows={5}
                    className="w-full rounded-xl border border-navy-200 bg-white px-4 py-3 text-navy-900 outline-none transition focus:border-royal dark:border-navy-600 dark:bg-navy-900 dark:text-white"
                    placeholder="궁금한 점을 남겨주세요."
                  />
                </div>
                <button type="submit" className="btn-primary mt-2">
                  문의 보내기
                </button>
              </form>
            )}
          </div>
        </div>
      </section>
    </div>
  )
}

function Field({ label, name, type = 'text' }) {
  return (
    <div>
      <label className="mb-1.5 block text-sm font-bold text-navy-700 dark:text-navy-200">
        {label}
      </label>
      <input
        required
        name={name}
        type={type}
        className="w-full rounded-xl border border-navy-200 bg-white px-4 py-3 text-navy-900 outline-none transition focus:border-royal dark:border-navy-600 dark:bg-navy-900 dark:text-white"
      />
    </div>
  )
}
