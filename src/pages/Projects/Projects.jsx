import './Projects.css'

export default function Projects() {
  return (
    <main class='main-projects'>
        <div class='wrap-title'>
            <h3 class='page-title'>
                Publications & Awards.
            </h3>
        </div>
        <section class='section-projects'>
            <div class='wrap-swiper'>
                <div class='wrap-contents'>
                    <div class='contents'>
                        <div class='card-title'>
                            <p>01 • <b>Arduino와 FSR402 센서를 활용한 라이프로그 자세 추정 웹 프로그램</b></p>  
                        </div>
                        <div class='card is-active'>
                            <div class='card-top'>
                                <div class='card-top-left'>
                                    <div class='title'>
                                        <p># 팀장 # 프론트엔드</p>
                                        <p><b>정애리, 송민석, 신현서, 조영복, 『Arduino와 FSR402 센서를 활용한 라이프로그 자세 추정 웹 프로그램, 한국컴퓨터정보학회논문지, 2024.</b></p>
                                    </div>  
                                    <div class='sub-title'>
                                        <p>한국컴퓨터정보학회 / 팀장 | 2024.</p>
                                        <p><b>Javascript</b></p>
                                    </div>
                                </div>
                                <div class='card-top-right'>
                                    <img src='/assets/tmp-screen.png'/>
                                </div>
                            </div>
                            <div class='card-bottom'>
                                <ul>
                                    <li>프로젝트 팀장 / 시스템 기획 및 논문 작성 주도</li>
                                    <li>주 1회 스크럼 미팅을 통한 진행 상황 공유 / 스프린트 기반 일정 관리</li>
                                    <li>HTTP-Only 쿠키 세션 유지 / D3.js 기반 일·주·월 단위 통계 시각화 화면 구현 / 150프레임 단위 자세 점수·실시간 알림</li>
                                    <li>한국컴퓨터정보학회논문지 등재 / 한국실천공학교육학회 우수논문상 / 베트남 호치민대학교 방문 및 성과 교류</li>
                                </ul>
                            </div>
                        </div>
                    </div>   
                    <div class='contents'>
                        <div class='card-title'>
                            <p>02 • <b>2023 WE_Meet Awards 바이오헬스부문 대한상공회의소회장상</b></p>  
                        </div>
                        <div class='card'>
                            <div class='card-top'>
                                <div class='card-top-left'>
                                    <div class='title'>
                                        <p># 팀장 # 엔드투엔드</p>
                                        <p><b>ECG 기반 마약 피해 모니터링 시스템</b></p>
                                    </div>  
                                    <div class='sub-title'>
                                        <p>대한상공회의소 / 팀장 | 2024.02.14.</p>
                                        <p><b>Javascript Node.js MySQL Arduino</b></p>
                                    </div>
                                </div>
                                <div class='card-top-right'>
                                    <img src='/assets/tmp-screen.png'/>
                                </div>
                            </div>
                            <div class='card-bottom'>
                                <ul>
                                    <li>프로젝트 팀장 / 엔드투엔드 개발</li>
                                    <li>React 기반 웹에서 Node.js 서버와 연동 / 특이값 감지 로그를 테이블 형태로 시각화</li>
                                    <li>Node.js 서버로 심전도 데이터 수신 및 특이값 감지 / MySQL DB에 사용자 정보·타임스탬프 저장 / 웹요청 시 DB 데이터 반환</li>
                                    <li>Arduino 기반 ECG 데이터 수집 및 API 연동</li>
                                </ul>
                            </div>
                        </div>
                    </div>  
                </div>    
            </div>
            <div class='slider-nav'>
                <div class='slider-nav-prev'>이전</div>
                <div class='slider-nav-next'>다음</div>
            </div>    
        </section>
    </main>
  );
}
