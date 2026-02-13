import type { Metadata } from "next";

export const metadata: Metadata = {
    title: "개인정보 처리방침 - 제로타임",
    description: "제로타임 서비스의 개인정보 처리방침입니다.",
};

export default function PrivacyPage() {
    return (
        <div className="min-h-screen bg-white text-gray-900 font-sans selection:bg-blue-100">
            <div className="max-w-3xl mx-auto px-6 py-20 animate-fade-in">
                <header className="mb-12 border-b border-gray-100 pb-8">
                    <h1 className="text-4xl font-bold tracking-tight text-gray-950 mb-4">
                        개인정보 처리방침
                    </h1>
                    <p className="text-gray-500 font-medium">서비스 이름: 제로타임</p>
                </header>

                <div className="space-y-12 leading-relaxed text-gray-800">
                    <section>
                        <h2 className="text-2xl font-bold text-gray-950 mb-6 flex items-center gap-3">
                            <span className="flex items-center justify-center w-8 h-8 rounded-lg bg-gray-900 text-white text-sm">
                                1
                            </span>
                            개인정보의 수집 및 이용 목적
                        </h2>
                        <p className="mb-4">
                            &apos;ZeroTime&apos;(이하 &apos;서비스&apos;)은 다음의 목적을 위해
                            최소한의 개인정보를 수집합니다.
                        </p>
                        <ul className="list-disc pl-6 space-y-3">
                            <li>
                                <strong className="text-gray-950">
                                    서비스 제공 및 본인 확인:
                                </strong>{" "}
                                Apple/Google 소셜 로그인을 통한 회원 식별 및 서비스 이용.
                            </li>
                            <li>
                                <strong className="text-gray-950">맞춤형 알림 제공:</strong>{" "}
                                사용자가 설정한 키워드 및 학과에 따른 공지사항 푸시 알림 발송.
                            </li>
                            <li>
                                <strong className="text-gray-950">서비스 개선:</strong> 이용 통계
                                분석을 통한 서비스 최적화.
                            </li>
                        </ul>
                    </section>

                    <section>
                        <h2 className="text-2xl font-bold text-gray-950 mb-6 flex items-center gap-3">
                            <span className="flex items-center justify-center w-8 h-8 rounded-lg bg-gray-900 text-white text-sm">
                                2
                            </span>
                            수집하는 개인정보의 항목
                        </h2>
                        <p className="mb-4">
                            서비스는 별도의 회원가입 절차 없이 소셜 로그인을 통해 다음 정보를
                            수집할 수 있습니다.
                        </p>
                        <div className="grid gap-4">
                            <div className="p-5 rounded-xl bg-gray-50 border border-gray-100">
                                <h3 className="font-bold text-gray-950 mb-2">필수 항목</h3>
                                <p className="text-gray-700">소셜 로그인 식별자(ID), 이메일 주소.</p>
                            </div>
                            <div className="p-5 rounded-xl bg-gray-50 border border-gray-100">
                                <h3 className="font-bold text-gray-950 mb-2">선택 항목</h3>
                                <p className="text-gray-700">사용자가 설정한 관심 학과, 알림 키워드.</p>
                            </div>
                            <div className="p-5 rounded-xl bg-gray-50 border border-gray-100">
                                <h3 className="font-bold text-gray-950 mb-2">자동 수집 항목</h3>
                                <p className="text-gray-700">
                                    기기 식별자(UUID/FCM 토큰 - 알림 발송용), OS 버전.
                                </p>
                            </div>
                        </div>
                    </section>

                    <section>
                        <h2 className="text-2xl font-bold text-gray-950 mb-6 flex items-center gap-3">
                            <span className="flex items-center justify-center w-8 h-8 rounded-lg bg-gray-900 text-white text-sm">
                                3
                            </span>
                            개인정보의 보유 및 이용 기간
                        </h2>
                        <ul className="list-disc pl-6 space-y-3">
                            <li>
                                사용자의 개인정보는 원칙적으로 서비스 탈퇴 시까지 보유합니다.
                            </li>
                            <li>
                                단, 관계 법령에 따라 보존할 필요가 있는 경우 해당 기간까지
                                보관합니다.
                            </li>
                        </ul>
                    </section>

                    <section>
                        <h2 className="text-2xl font-bold text-gray-950 mb-6 flex items-center gap-3">
                            <span className="flex items-center justify-center w-8 h-8 rounded-lg bg-gray-900 text-white text-sm">
                                4
                            </span>
                            개인정보의 제3자 제공
                        </h2>
                        <p className="mb-4">
                            서비스는 사용자의 동의 없이 개인정보를 외부에 제공하지 않습니다.
                            다만, 다음의 경우는 예외로 합니다.
                        </p>
                        <ul className="list-disc pl-6 space-y-3">
                            <li>사용자가 사전에 동의한 경우</li>
                            <li>
                                법령의 규정에 의거하거나, 수사 목적으로 법령에 정해진 절차에 따라
                                수사기관의 요구가 있는 경우
                            </li>
                        </ul>
                    </section>

                    <section>
                        <h2 className="text-2xl font-bold text-gray-950 mb-6 flex items-center gap-3">
                            <span className="flex items-center justify-center w-8 h-8 rounded-lg bg-gray-900 text-white text-sm">
                                5
                            </span>
                            사용자의 권리와 그 행사 방법
                        </h2>
                        <p>
                            사용자는 언제든지 서비스 내 설정 또는 개발자 문의를 통해 본인의
                            개인정보를 열람, 수정하거나 삭제(탈퇴)를 요청할 수 있습니다.
                        </p>
                    </section>
                </div>

                <footer className="mt-20 pt-8 border-t border-gray-100 text-sm text-gray-400">
                    <p>© {new Date().getFullYear()} ZEROONE. All rights reserved.</p>
                </footer>
            </div>
        </div>
    );
}
