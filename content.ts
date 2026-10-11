export const benefits = [
  { icon: 'ri-passport-line', title: 'Legal stay up to 2 years', text: 'Subject to visa regulations and renewal requirements.' },
  { icon: 'ri-home-heart-line', title: 'Free room & meals', text: 'Accommodation and meals provided by your employer, with free Wi-Fi.' },
  { icon: 'ri-heart-pulse-line', title: 'National Health Insurance', text: 'Full coverage under the Korean national system.' },
  { icon: 'ri-walk-line', title: 'Your free time is yours', text: 'Go out freely outside of working hours.' },
  { icon: 'ri-bank-card-line', title: 'ARC in ~3 months', text: 'Open a Korean bank account and register a mobile phone.' },
  { icon: 'ri-money-dollar-circle-line', title: 'USD 1,500 – 2,500+', text: 'Monthly, depending on schedule and employment contract.' },
];

export const steps = [
  { n: '01', title: 'Audition eligibility', text: 'Auditions for vocal ability and performance are held for women aged 21 to 31 who hold a passport.' },
  { n: '02', title: 'Document authentication', text: 'CV and passport copy notarized, legalized by the Cambodian MFA, then authenticated by the Korean Embassy.' },
  { n: '03', title: 'Performance video', text: 'Perform two English pop songs, recorded professionally for your application.' },
  { n: '04', title: 'Visa application in Korea', text: 'We submit E-6-2 visa applications to the Korean Immigration authorities only for performers whose performance footage has successfully passed review by the Korea Media Rating Board.' },
  { n: '05', title: 'Medical examination', text: 'At a designated hospital in Cambodia. Collect the official report.' },
  { n: '06', title: 'Visa interview', text: 'Submit the report with your interview application to the Korean Embassy.' },
  { n: '07', title: 'Issuance & travel', text: 'Buy your ticket, fly to South Korea and begin work.' },
];

export const documents = [
  '여권 사본 · Passport copy',
  '오디션 · Audition',
  '3년 경력증명서 · 3-year career certificate (audition passers only)',
  '영상물등급위원회 심의 · Korea Media Rating Board review',
  '메디컬 체크 · Medical check (after review approval)',
  '가족 보증인 공증 · Notarized family guarantor',
];

export const kmrbOrg = ['신청사 · Applicant', '해당부서 · Department', '전문위원 · Expert reviewer', '소위원회 · Sub-committee', '해당부서 · Department'];

export const kmrbFlow = [
  { n: '01', title: '접수', en: 'Reception', role: '신청사', text: 'The application is filed and received through ORIS.' },
  { n: '02', title: '서류검토', en: 'Document review', role: '해당부서', text: 'The responsible department reviews all submitted documents.' },
  { n: '03', title: '내용검토', en: 'Content review', role: '전문위원', text: 'Expert reviewers screen the performance footage.' },
  { n: '04', title: '등급결정', en: 'Rating decision', role: '소위원회', text: 'The sub-committee decides the rating of the work.' },
  { n: '05', title: '결과통보', en: 'Result notice', role: '해당부서', text: 'Results are notified, followed by feedback and follow-up.' },
];

export const kmrbYearly = [
  { year: '2024', total: 1274, bar: 97 },
  { year: '2025', total: 1309, bar: 100 },
  { year: '2026', total: 564, bar: 43 },
];

export const kmrbTable = {
  columns: ['신규무혜', '신규유혜', '소계', '신규무혜', '신규유혜', '소계'],
  rows: [
    { year: '2024', cells: ['0', '0', '0', '140', '1,134', '1,274'] },
    { year: '2025', cells: ['0', '0', '0', '162', '1,147', '1,309'] },
    { year: '2026', cells: ['0', '0', '0', '70', '494', '564'] },
    { year: '계', cells: ['0', '0', '0', '372', '2,775', '3,147'], total: true },
  ],
};

export const gnoStatus = [
  { value: '53', kr: '무대공연 신규추천', en: 'Stage performance · new recommendation', size: '듀엣 · 트리오' },
  { value: '27', kr: '무대공연 변경추천', en: 'Stage performance · change recommendation', size: '듀엣 · 트리오' },
  { value: '80', kr: '누적 결과통보', en: 'Total results notified', size: '듀엣 · 트리오' },
];

export const gnoResults = [
  { value: '1', kr: '신청 접수', en: 'Application received', tone: 'ok' },
  { value: '0', kr: '수정요청', en: 'Revision requested', tone: 'muted' },
  { value: '0', kr: '진행중', en: 'In progress', tone: 'muted' },
  { value: '80', kr: '결과통보 완료', en: 'Result notified', tone: 'ok' },
];

export const govFacts = [
  { value: 'E-6-2', kr: '사증발급인정서 체류자격  24개월', en: 'Visa Grant Notice · status' },
  { value: 'E-6', kr: '외국인등록증 체류자격 (예술흥행)', en: 'Residence Card · status' },
  { value: '6-24', kr: '개월 체류기간 · 단수 입국 24개월', en: 'Months · single entry' },
  { value: 'PH', kr: '대상 국적 (필리핀)', en: 'Nationality · Philippines' },
];

export const govFlow = [
  { n: '01', org: '영상물등급위원회 · KMRB', title: 'KMRB 심의', en: 'Rating review', desc: '외국인 공연 추천에 대한 심의·등급 및 결과통보를 거칩니다.' },
  { n: '02', org: '대한민국 법무부 · Ministry of Justice', title: '법무부 사증발급', en: 'Visa grant', desc: '심의를 통과한 건에 대해 사증발급인정서(E-6-2)가 정식 발급됩니다.' },
  { n: '03', org: '출입국·외국인사무소 · Korea Immigration', title: '입국', en: 'Entry', desc: '아티스트가 한국에 정식 입국하고 체류가 시작됩니다.' },
  { n: '04', org: '양주출입국·외국인사무소 · Yangju Immigration Office', title: '외국인등록증 발급', en: 'Residence card', desc: '입국 후 외국인등록증(예술흥행 E-6)이 정식으로 발급됩니다.' },
];

export const govLinks = [
  {
    org: '대한민국 법무부',
    en: 'Ministry of Justice',
    desc: '출입국·외국인 정책 총괄 · 사증발급인정서 발급',
    icon: 'ri-government-line',
    url: 'https://www.moj.go.kr',
    label: 'moj.go.kr',
  },
  {
    org: '출입국·외국인정책본부',
    en: 'Korea Immigration Service',
    desc: '외국인 체류·등록 업무 총괄',
    icon: 'ri-passport-line',
    url: 'https://www.immigration.go.kr',
    label: 'immigration.go.kr',
  },
  {
    org: '하이코리아 전자민원',
    en: 'HiKorea e-Government',
    desc: '체류자격·외국인등록증 진위 및 민원 조회',
    icon: 'ri-shield-check-line',
    url: 'https://www.hikorea.go.kr',
    label: 'hikorea.go.kr',
  },
  {
    org: '코리아비자포털',
    en: 'Korea Visa Portal',
    desc: '사증발급인정서 진위 확인 (외교부)',
    icon: 'ri-earth-line',
    url: 'https://www.visa.go.kr',
    label: 'visa.go.kr',
  },
];

export const govVisaNotices = [
  {
    tag: 'E-6-2',
    src: 'https://storage.helloreaddy.io/project_files/1486b6d8-bd60-4c01-8447-8cf55d8f37ed/e74307c0-e0b3-448d-bfbd-5f6bb7d71524_compressed_2.webp',
    alt: '사증발급인정서 · 대한민국 법무부 발급 Visa Grant Notice (E-6-2) sample issued by the Ministry of Justice, Republic of Korea',
    title: '사증발급인정서 · Visa Grant Notice · 대한민국 법무부',
    caption: '사증발급인정서 · Visa Grant Notice',
    meta: 'No. PH2500013190 · 발급 2025.07.24 · 대한민국 법무부',
  },
  {
    tag: 'E-6-2',
    src: 'https://storage.helloreaddy.io/project_files/1486b6d8-bd60-4c01-8447-8cf55d8f37ed/d46850c8-62cc-4274-88a1-f4df924deb53_compressed_1.webp',
    alt: '사증발급인정서 · 대한민국 법무부 발급 Visa Grant Notice (E-6-2) sample issued by the Ministry of Justice, Republic of Korea',
    title: '사증발급인정서 · Visa Grant Notice · 대한민국 법무부',
    caption: '사증발급인정서 · Visa Grant Notice',
    meta: 'No. PH2500013140 · 발급 2025.07.24 · 대한민국 법무부',
  },
];

export const govResidenceCards = [
  {
    tag: 'E-6',
    src: 'https://storage.helloreaddy.io/project_files/1486b6d8-bd60-4c01-8447-8cf55d8f37ed/799af91b-9617-466f-992a-ea17f81e48ca_compressed_-2.webp',
    alt: '외국인등록증 · 양주출입국·외국인사무소 발급 Residence Card (E-6 예술흥행) sample issued by the Yangju Immigration Office, Republic of Korea',
    title: '외국인등록증 · Residence Card · 양주출입국·외국인사무소',
    caption: '외국인등록증 · Residence Card',
    meta: '발급 2024.12.19 · 양주출입국·외국인사무소',
  },
  {
    tag: 'E-6',
    src: 'https://storage.helloreaddy.io/project_files/1486b6d8-bd60-4c01-8447-8cf55d8f37ed/58eadfca-abaa-40a9-b494-3432b75d7965_compressed_-3.webp',
    alt: '외국인등록증 · 양주출입국·외국인사무소 발급 Residence Card (E-6 예술흥행) sample issued by the Yangju Immigration Office, Republic of Korea',
    title: '외국인등록증 · Residence Card · 양주출입국·외국인사무소',
    caption: '외국인등록증 · Residence Card',
    meta: '발급 2024.07.24 · 양주출입국·외국인사무소',
  },
  {
    tag: 'E-6',
    src: 'https://storage.helloreaddy.io/project_files/1486b6d8-bd60-4c01-8447-8cf55d8f37ed/ebb7956f-7f4b-4486-a6e3-c9c610bcd87e_compressed_-4.webp',
    alt: '외국인등록증 · 양주출입국·외국인사무소 발급 Residence Card (E-6 예술흥행) sample issued by the Yangju Immigration Office, Republic of Korea',
    title: '외국인등록증 · Residence Card · 양주출입국·외국인사무소',
    caption: '외국인등록증 · Residence Card',
    meta: '발급 2024.05.29 · 양주출입국·외국인사무소',
  },
  {
    tag: 'E-6',
    src: 'https://storage.helloreaddy.io/project_files/1486b6d8-bd60-4c01-8447-8cf55d8f37ed/68478cf8-0b3c-46f2-989d-014fed5a233f_compressed_-1.webp',
    alt: '외국인등록증 · 양주출입국·외국인사무소 발급 Residence Card (E-6 예술흥행) sample issued by the Yangju Immigration Office, Republic of Korea',
    title: '외국인등록증 · Residence Card · 양주출입국·외국인사무소',
    caption: '외국인등록증 · Residence Card',
    meta: '발급 2025.02.06 · 양주출입국·외국인사무소',
  },
];