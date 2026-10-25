'use client';

import React, { useState } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import {
  Microscope,
  Zap,
  Activity,
  Store,
  MapPin,
  Mail,
  Menu,
  X,
  ArrowRight,
  ChevronDown,
  Wallet,
  Clock,
  Repeat,
} from 'lucide-react';

/* ------------------------------------------------------------------
   設計色票（同 mockup 一致）
   ink     #12141C  深藍黑：Hero / 使用方法 / Footer 底色
   ink-2   #1E2130  深色卡片
   cream   #F6F3EC  主背景
   sand    #EAE5D8  次背景區塊
   accent  #F2B544  琥珀主色
   bronze  #6B5A2E  淺色背景上的小標題（對比度達標）
------------------------------------------------------------------- */

const display = { fontFamily: 'var(--font-display), sans-serif' };

export default function Home() {
  const [lang, setLang] = useState<'zh' | 'en'>('zh');
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [openFaq, setOpenFaq] = useState<number | null>(0);

  const t = {
    zh: {
      nav: {
        science: '透皮科學',
        products: '貼片系列',
        howto: '使用方法',
        faq: '常見問題',
        network: '銷售網絡',
        buy: '尋找銷售據點',
        newTag: 'New',
      },
      hero: {
        badge: 'Science-backed transdermal technology',
        titleA: '精密透皮吸收，',
        titleB: '貼上就得。',
        subtitle:
          'PATCH ON + 以透皮技術，讓活性營養經皮膚吸收，毋須經過腸胃。唔使食、唔使沖水，細細片放銀包都得。',
        btnProducts: '瀏覽貼片系列',
        btnHowto: '了解點用',
        imageAlt: 'PATCH ON 宿醉貼包裝盒及單片裝',
      },
      // 只保留品牌官方資料中已有的數字；95% / 100% 等數字待有測試報告再加
      stats: [
        { value: '20 min', label: '飲酒前貼上', desc: '最理想的使用時間' },
        { value: '8 hr+', label: '建議貼用時間', desc: '讓成分有足夠時間經皮膚吸收' },
        { value: '24 hr', label: '效用可長達', desc: '不建議連續使用超過 24 小時' },
      ],
      why: {
        eyebrow: 'Why PATCH ON +',
        title: '一片貼劑，三個理由',
        items: [
          { icon: Wallet, title: '方便', desc: '細細片放銀包、褲袋都得，唔使搵水送藥，隨時隨地貼。' },
          { icon: Clock, title: '持久', desc: '一片效用可長達 24 小時，由晚飯到 after party 都照顧到。' },
          { icon: Repeat, title: '彈性', desc: '飲之前、飲緊、飲完先記得貼，三個時間都用得。' },
        ],
      },
      science: {
        eyebrow: 'The science of PATCH ON +',
        title: '為什麼選擇透皮吸收？',
        desc: '口服膠囊或錠劑需要經過胃酸分解與肝臟首過代謝。PATCH ON + 採用矩陣透皮系統，讓營養經皮膚進入體內。',
        items: [
          { icon: Microscope, title: '微孔透皮導引', desc: '配方幫助營養成分平穩穿透皮膚屏障。' },
          { icon: Zap, title: '毋須經過腸胃', desc: '唔使配水吞服，適合飲酒場合隨時使用。' },
          { icon: Activity, title: '持續穩定釋放', desc: '基質黏合技術，讓活性成分在貼用期間平穩釋放。' },
        ],
      },
      products: {
        eyebrow: 'Product series',
        title: 'PATCH ON + 貼片系列',
        subtitle: '針對不同生活情境研發：宿醉貼現已有售，斷食、美顏、護肝系列即將推出。',
        more: '查看完整產品細節',
        all: '查看全部產品與成分規格',
        items: [
          {
            id: 'hangover',
            tag: '現正熱賣 ‧ 旗艦款',
            isHot: true,
            name: '宿醉貼',
            enName: 'Hangover Patch',
            desc: '美國研發配方，含維他命 B 群與綠茶萃取，飲酒前貼上，陪你盡興到最後。',
            specs: '5 貼/盒 ‧ 美國製造 ‧ 效用可長達 24 小時',
            image: '/images/pack-hangover.webp',
            packBg: '#F5C047',
          },
          {
            id: 'fasting',
            tag: '即將推出',
            isHot: false,
            name: '斷食維他命補充貼',
            enName: 'Fasting Vitamin Patch',
            desc: '為斷食日而設，持續補充，維持全日狀態。',
            specs: '5 貼/盒 ‧ 即將登場',
            image: '/images/pack-fasting.webp',
            packBg: '#83D4F1',
          },
          {
            id: 'beauty',
            tag: '即將推出',
            isHot: false,
            name: '美顏貼',
            enName: 'Beauty Patch',
            desc: '為日常護膚而設，隨身養膚。',
            specs: '5 貼/盒 ‧ 即將登場',
            image: '/images/pack-beauty.webp',
            packBg: '#F5AFB7',
          },
          {
            id: 'liver',
            tag: '即將推出',
            isHot: false,
            name: '護肝貼',
            enName: 'Liver Care Patch',
            desc: '為經常應酬、作息繁忙的你而設，日常保養。',
            specs: '5 貼/盒 ‧ 即將登場',
            image: '/images/pack-liver.webp',
            packBg: '#003845',
          },
        ],
      },
      howto: {
        eyebrow: 'How to use',
        title: '三步，貼好就得',
        steps: [
          { title: '飲酒前 20 分鐘', desc: '撕開包裝，取出一片貼劑。' },
          { title: '貼在乾淨皮膚上', desc: '揀乾淨、少毛的位置，例如手臂內側。' },
          { title: '保持最少 8 小時', desc: '然後安心去 enjoy。不建議連續使用超過 24 小時。' },
        ],
        altTitle: '漏咗飲之前貼？',
        alts: ['飲緊中途貼上都可以', '飲完醒咗先貼都得'],
      },
      faq: {
        title: '常見問題',
        items: [
          { q: '幾時貼最好？', a: '最理想是飲酒前 20 分鐘貼上；飲酒中途或醒來後才貼亦可使用。' },
          { q: '一片可以貼多久？', a: '建議最少貼 8 小時，效用可長達 24 小時，但不建議連續使用超過 24 小時。' },
          { q: '貼在哪個位置最好？', a: '建議貼在乾淨、乾爽、毛髮較少的皮膚上，例如手臂內側或肩頸。' },
          { q: '哪類人士不適合使用？', a: '懷孕或哺乳期間不建議使用。敏感性皮膚人士請先諮詢醫生意見。本產品僅供外用。' },
          { q: '會唔會對皮膚有刺激？', a: '貼片採用無乳膠（Latex free）材質。如出現不適，請立即撕下並停止使用。' },
          // TODO（待品牌確認後加入）：
          // { q: '貼住可以沖涼嗎？', a: '' },
        ],
      },
      network: {
        eyebrow: 'Retail & distribution',
        title: '銷售網絡與合作據點',
        subtitle: 'PATCH ON + 已於莎莎、King’s Wine Cellar 全港門市及指定網店有售。',
        all: '查看全部門市及地址',
        stores: [
          { name: '莎莎 SaSa', type: '實體門市', loc: '港九新界指定分店' },
          { name: 'King’s Wine Cellar', type: '實體門市', loc: '中環 / 北角 / 奧海城 / 九龍灣 / 將軍澳' },
          { name: 'HKTVmall 香港電視', type: '網上平台', loc: '官方旗艦店' },
          { name: 'Dimples 掂鋪', type: '網上平台', loc: '官方指定線上分銷' },
        ],
        b2bTitle: '成為合作藥房或分銷商？',
        b2bDesc: '我們誠邀連鎖藥房、健身中心、診所及電商平台加入 PATCH ON + 經銷網絡。',
        b2bBtn: '聯繫商務合作團隊',
      },
      cta: {
        title: '下次聚會，記得帶定。',
        desc: '5 貼/盒 ‧ 各大指定銷售點及網店有售',
        btnOnline: '網上購買',
        btnStore: '搵銷售點',
      },
      footer: {
        disclaimer:
          '免責聲明：PATCH ON + 產品為保健營養輔助貼片，並非藥物，不能用作診斷、治療或預防任何疾病。使用效果因人而異。請適量飲酒。',
        copy: '© 2026 PATCH ON + Laboratories. All Rights Reserved.',
        privacy: '私隱政策',
        terms: '使用條款',
      },
    },
    en: {
      nav: {
        science: 'Science',
        products: 'Products',
        howto: 'How to use',
        faq: 'FAQ',
        network: 'Where to buy',
        buy: 'Find a store',
        newTag: 'New',
      },
      hero: {
        badge: 'Science-backed transdermal technology',
        titleA: 'Precision transdermal care.',
        titleB: 'Just patch on.',
        subtitle:
          'PATCH ON + uses transdermal delivery so active nutrients are absorbed through the skin, not the gut. No pills, no water — small enough for your wallet.',
        btnProducts: 'Browse the series',
        btnHowto: 'How to use',
        imageAlt: 'PATCH ON Hangover Patch box and single sachet',
      },
      stats: [
        { value: '20 min', label: 'Before drinking', desc: 'The ideal time to apply' },
        { value: '8 hr+', label: 'Recommended wear', desc: 'Time for ingredients to absorb' },
        { value: '24 hr', label: 'Lasting effect', desc: 'Do not wear for more than 24 hours' },
      ],
      why: {
        eyebrow: 'Why PATCH ON +',
        title: 'One patch, three reasons',
        items: [
          { icon: Wallet, title: 'Convenient', desc: 'Fits in a wallet or pocket. No water, no pills — apply anywhere.' },
          { icon: Clock, title: 'Long-lasting', desc: 'One patch lasts up to 24 hours, from dinner to the after party.' },
          { icon: Repeat, title: 'Flexible', desc: 'Before, during or after drinking — it works at any of the three.' },
        ],
      },
      science: {
        eyebrow: 'The science of PATCH ON +',
        title: 'Why transdermal?',
        desc: 'Oral capsules and tablets must pass through stomach acid and first-pass liver metabolism. PATCH ON + uses a matrix transdermal system to deliver nutrients through the skin.',
        items: [
          { icon: Microscope, title: 'Micro-pore delivery', desc: 'The formula helps ingredients pass steadily through the skin barrier.' },
          { icon: Zap, title: 'Skips the gut', desc: 'Nothing to swallow, so it is easy to use on a night out.' },
          { icon: Activity, title: 'Steady release', desc: 'Matrix adhesive releases active ingredients evenly while worn.' },
        ],
      },
      products: {
        eyebrow: 'Product series',
        title: 'The PATCH ON + series',
        subtitle: 'Made for everyday moments. The Hangover Patch is available now; Fasting, Beauty and Liver Care are coming soon.',
        more: 'View product details',
        all: 'View all products and ingredients',
        items: [
          {
            id: 'hangover',
            tag: 'Best seller ‧ Flagship',
            isHot: true,
            name: 'Hangover Patch',
            enName: '宿醉貼',
            desc: 'US-developed formula with Vitamin B complex and green tea extract. Apply before drinking and enjoy the night.',
            specs: '5 patches / box ‧ Made in USA ‧ Lasts up to 24 hours',
            image: '/images/pack-hangover.webp',
            packBg: '#F5C047',
          },
          {
            id: 'fasting',
            tag: 'Coming soon',
            isHot: false,
            name: 'Fasting Vitamin Patch',
            enName: '斷食維他命補充貼',
            desc: 'Made for fasting days — steady top-up to keep you going all day.',
            specs: '5 patches / box ‧ Launching soon',
            image: '/images/pack-fasting.webp',
            packBg: '#83D4F1',
          },
          {
            id: 'beauty',
            tag: 'Coming soon',
            isHot: false,
            name: 'Beauty Patch',
            enName: '美顏貼',
            desc: 'Made for everyday skin care, on the go.',
            specs: '5 patches / box ‧ Launching soon',
            image: '/images/pack-beauty.webp',
            packBg: '#F5AFB7',
          },
          {
            id: 'liver',
            tag: 'Coming soon',
            isHot: false,
            name: 'Liver Care Patch',
            enName: '護肝貼',
            desc: 'Made for busy schedules and frequent social drinking — everyday care.',
            specs: '5 patches / box ‧ Launching soon',
            image: '/images/pack-liver.webp',
            packBg: '#003845',
          },
        ],
      },
      howto: {
        eyebrow: 'How to use',
        title: 'Three steps. That’s it.',
        steps: [
          { title: '20 minutes before drinking', desc: 'Open the pouch and take out one patch.' },
          { title: 'Apply to clean skin', desc: 'Choose a clean, low-hair area such as the inner arm.' },
          { title: 'Keep on for 8+ hours', desc: 'Then enjoy. Do not wear for more than 24 hours.' },
        ],
        altTitle: 'Forgot to apply beforehand?',
        alts: ['Apply it mid-way through drinking', 'Or apply it when you wake up'],
      },
      faq: {
        title: 'FAQ',
        items: [
          { q: 'When should I apply it?', a: 'Ideally 20 minutes before drinking. You can also apply it mid-way or after waking up.' },
          { q: 'How long can I wear one patch?', a: 'Wear it for at least 8 hours. The effect lasts up to 24 hours; do not wear for more than 24 hours continuously.' },
          { q: 'Where should I apply it?', a: 'On clean, dry skin with little hair, such as the inner arm or shoulder.' },
          { q: 'Who should not use it?', a: 'Not recommended during pregnancy or breastfeeding. If you have sensitive skin, consult a doctor first. For external use only.' },
          { q: 'Will it irritate my skin?', a: 'The patch is latex free. If you feel any discomfort, remove it and stop using it.' },
        ],
      },
      network: {
        eyebrow: 'Retail & distribution',
        title: 'Where to buy',
        subtitle: 'PATCH ON + is available at SaSa and King’s Wine Cellar stores across Hong Kong, and selected online stores.',
        all: 'See all stores and addresses',
        stores: [
          { name: 'SaSa', type: 'Retail store', loc: 'Selected stores across HK' },
          { name: 'King’s Wine Cellar', type: 'Retail store', loc: 'Central / North Point / Olympian City / Kowloon Bay / TKO' },
          { name: 'HKTVmall', type: 'Online', loc: 'Official flagship store' },
          { name: 'Dimples', type: 'Online', loc: 'Official online distributor' },
        ],
        b2bTitle: 'Become a partner or distributor?',
        b2bDesc: 'We welcome pharmacies, fitness centres, clinics and e-commerce platforms to join our network.',
        b2bBtn: 'Contact our partnerships team',
      },
      cta: {
        title: 'Bring one to your next night out.',
        desc: '5 patches / box ‧ Available at selected retailers and online',
        btnOnline: 'Buy online',
        btnStore: 'Find a store',
      },
      footer: {
        disclaimer:
          'Disclaimer: PATCH ON + products are wellness patches, not medicines, and are not intended to diagnose, treat, cure or prevent any disease. Results may vary. Please drink responsibly.',
        copy: '© 2026 PATCH ON + Laboratories. All Rights Reserved.',
        privacy: 'Privacy Policy',
        terms: 'Terms of Service',
      },
    },
  };

  const text = t[lang];
  const toggleLang = () => setLang(lang === 'zh' ? 'en' : 'zh');

  const navLinks = [
    { href: '#science', label: text.nav.science },
    { href: '/products', label: text.nav.products, isNew: true },
    { href: '#howto', label: text.nav.howto },
    { href: '#faq', label: text.nav.faq },
    { href: '/retail-network', label: text.nav.network },
  ];

  const Eyebrow = ({ children, dark = false }: { children: React.ReactNode; dark?: boolean }) => (
    <p
      style={display}
      className={`m-0 text-sm uppercase tracking-[0.18em] ${dark ? 'text-[#F2B544]' : 'text-[#6B5A2E]'}`}
    >
      {children}
    </p>
  );

  return (
    <div className="min-h-screen bg-[#F6F3EC] text-[#12141C] selection:bg-[#F2B544] selection:text-[#12141C]">
      {/* 1. Navbar */}
      <header className="sticky top-0 z-50 bg-[#12141C] text-[#F6F3EC]">
        <div className="mx-auto flex h-[72px] max-w-6xl items-center justify-between gap-4 px-6">
          <Link href="/" aria-label="PATCHON 首頁" className="flex shrink-0 items-center">
            <Image src="/images/logo-patchon.png" alt="PATCHON Healthastic" width={728} height={305} priority className="h-10 w-auto" />
          </Link>

          <nav aria-label="Main" className="hidden items-center gap-7 text-[15px] lg:flex">
            {navLinks.map((l) => (
              <Link key={l.href} href={l.href} className="flex items-center gap-1.5 text-[#D9D6CE] transition-colors hover:text-[#F2B544]">
                {l.label}
                {l.isNew && (
                  <span className="rounded-full bg-[#F2B544] px-1.5 py-0.5 text-[10px] font-bold text-[#12141C]">
                    {text.nav.newTag}
                  </span>
                )}
              </Link>
            ))}
            <button
              onClick={toggleLang}
              className="min-h-[44px] rounded-full border border-[#555A6B] px-4 text-xs font-bold text-[#D9D6CE] hover:border-[#F2B544]"
            >
              {lang === 'zh' ? 'EN' : '中文'}
            </button>
            <Link
              href="/retail-network"
              className="inline-flex min-h-[44px] items-center gap-2 rounded-full bg-[#F2B544] px-5 font-bold text-[#12141C] transition-colors hover:bg-[#F6C766]"
            >
              <Store className="h-4 w-4" aria-hidden="true" />
              {text.nav.buy}
            </Link>
          </nav>

          <div className="flex items-center gap-2 lg:hidden">
            <button onClick={toggleLang} className="min-h-[44px] rounded-full border border-[#555A6B] px-4 text-xs font-bold">
              {lang === 'zh' ? 'EN' : '中文'}
            </button>
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              aria-label={mobileMenuOpen ? 'Close menu' : 'Open menu'}
              aria-expanded={mobileMenuOpen}
              className="flex h-11 w-11 items-center justify-center"
            >
              {mobileMenuOpen ? <X /> : <Menu />}
            </button>
          </div>
        </div>

        {mobileMenuOpen && (
          <div className="space-y-1 border-t border-[#2A2E3E] px-6 py-5 lg:hidden">
            {navLinks.map((l) => (
              <Link
                key={l.href}
                href={l.href}
                onClick={() => setMobileMenuOpen(false)}
                className="block py-3 font-bold text-[#F6F3EC]"
              >
                {l.label}
              </Link>
            ))}
            <Link
              href="/retail-network"
              onClick={() => setMobileMenuOpen(false)}
              className="mt-3 flex min-h-[48px] items-center justify-center gap-2 rounded-full bg-[#F2B544] font-bold text-[#12141C]"
            >
              <Store className="h-4 w-4" aria-hidden="true" />
              {text.nav.buy}
            </Link>
          </div>
        )}
      </header>

      {/* 2. Hero */}
      <section className="bg-[#12141C] text-[#F6F3EC]">
        <div className="mx-auto flex max-w-6xl flex-wrap items-center gap-14 px-6 pb-16 pt-16 md:pt-20">
          <div className="flex min-w-0 flex-[1_1_460px] flex-col gap-6">
            <Eyebrow dark>PATCH ON + · {text.hero.badge}</Eyebrow>
            <h1 className="m-0 text-[clamp(40px,6vw,72px)] font-black leading-[1.1]">
              {text.hero.titleA}
              <br />
              {text.hero.titleB}
            </h1>
            <p className="m-0 max-w-[540px] text-lg leading-[1.7] text-[#C9C6BD]">{text.hero.subtitle}</p>
            <div className="flex flex-wrap gap-3 pt-2">
              <Link
                href="/products"
                className="inline-flex min-h-[48px] items-center gap-2 rounded-full bg-[#F2B544] px-7 text-[17px] font-bold text-[#12141C] transition-colors hover:bg-[#F6C766]"
              >
                {text.hero.btnProducts}
                <ArrowRight className="h-4 w-4" aria-hidden="true" />
              </Link>
              <a
                href="#howto"
                className="inline-flex min-h-[48px] items-center rounded-full border border-[#555A6B] px-7 text-[17px] font-medium text-[#F6F3EC] transition-colors hover:border-[#F2B544]"
              >
                {text.hero.btnHowto}
              </a>
            </div>
          </div>

          <div className="flex min-w-0 flex-[1_1_360px] justify-center">
            <div className="w-full max-w-[460px] overflow-hidden rounded-[32px] bg-[#FEFEFE]">
              <Image
                src="/images/hangover-box.webp"
                alt={text.hero.imageAlt}
                width={1600}
                height={1600}
                priority
                sizes="(min-width: 1024px) 460px, 90vw"
                className="h-auto w-full"
              />
            </div>
          </div>
        </div>

        {/* Stats */}
        <div className="mx-auto max-w-6xl px-6 pb-20">
          <div className="grid grid-cols-1 gap-4 md:grid-cols-3">
            {text.stats.map((s) => (
              <div key={s.label} className="rounded-2xl bg-[#1E2130] p-7">
                <div style={display} className="text-4xl font-bold text-[#F2B544]">{s.value}</div>
                <div className="mt-2 font-bold">{s.label}</div>
                <div className="mt-1 text-sm text-[#9A9DAB]">{s.desc}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 3. Why */}
      <section className="px-6 py-24">
        <div className="mx-auto flex max-w-6xl flex-col gap-12">
          <div className="flex max-w-[640px] flex-col gap-3">
            <Eyebrow>{text.why.eyebrow}</Eyebrow>
            <h2 className="m-0 text-[clamp(30px,4vw,44px)] font-black leading-tight">{text.why.title}</h2>
          </div>
          <div className="grid grid-cols-1 gap-6 md:grid-cols-3">
            {text.why.items.map(({ icon: Icon, title, desc }) => (
              <div key={title} className="flex flex-col gap-4 rounded-3xl bg-white p-8">
                <div className="flex h-[52px] w-[52px] items-center justify-center rounded-2xl bg-[#12141C]">
                  <Icon className="h-6 w-6 text-[#F2B544]" aria-hidden="true" />
                </div>
                <h3 className="m-0 text-[22px] font-bold">{title}</h3>
                <p className="m-0 leading-[1.7] text-[#4A4D58]">{desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 4. Science */}
      <section id="science" className="scroll-mt-20 px-6 pb-24">
        <div className="mx-auto flex max-w-6xl flex-col gap-10 rounded-[32px] bg-[#EAE5D8] px-6 py-14 md:px-12">
          <div className="flex max-w-[720px] flex-col gap-3">
            <Eyebrow>{text.science.eyebrow}</Eyebrow>
            <h2 className="m-0 text-[clamp(28px,3.5vw,40px)] font-black leading-tight">{text.science.title}</h2>
            <p className="m-0 leading-[1.7] text-[#4A4D58]">{text.science.desc}</p>
          </div>
          <div className="grid grid-cols-1 gap-4 md:grid-cols-3">
            {text.science.items.map(({ icon: Icon, title, desc }, i) => (
              <div key={title} className="flex flex-col gap-3 rounded-2xl bg-[#F6F3EC] p-6">
                <div className="flex items-center gap-3">
                  <span style={display} className="text-xl font-bold text-[#6B5A2E]">0{i + 1}</span>
                  <Icon className="h-5 w-5 text-[#6B5A2E]" aria-hidden="true" />
                </div>
                <h3 className="m-0 text-lg font-bold">{title}</h3>
                <p className="m-0 text-[15px] leading-[1.7] text-[#4A4D58]">{desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 5. Products */}
      <section id="products" className="scroll-mt-20 px-6 pb-24">
        <div className="mx-auto flex max-w-6xl flex-col gap-12">
          <div className="flex max-w-[640px] flex-col gap-3">
            <Eyebrow>{text.products.eyebrow}</Eyebrow>
            <h2 className="m-0 text-[clamp(30px,4vw,44px)] font-black leading-tight">{text.products.title}</h2>
            <p className="m-0 text-[#4A4D58]">{text.products.subtitle}</p>
          </div>
          <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {text.products.items.map((p) => (
              <div
                key={p.id}
                className={`flex flex-col justify-between gap-6 overflow-hidden rounded-3xl ${
                  p.isHot ? 'bg-[#12141C] text-[#F6F3EC]' : 'bg-white'
                }`}
              >
                <div className="px-5 pt-5">
                  <div className="overflow-hidden rounded-2xl" style={{ backgroundColor: p.packBg }}>
                    <Image src={p.image} alt={`${p.name} ${p.enName}`} width={540} height={484} sizes="(min-width: 1024px) 260px, (min-width: 640px) 45vw, 90vw" className="h-auto w-full" />
                  </div>
                </div>
                <div className="flex flex-col gap-3 px-7">
                  <span
                    className={`self-start rounded-full px-3 py-1 text-xs font-bold ${
                      p.isHot ? 'bg-[#F2B544] text-[#12141C]' : 'bg-[#EAE5D8] text-[#4A4D58]'
                    }`}
                  >
                    {p.tag}
                  </span>
                  <h3 className="m-0 text-2xl font-black">{p.name}</h3>
                  <p className={`m-0 text-xs font-bold ${p.isHot ? 'text-[#9A9DAB]' : 'text-[#6E6A60]'}`}>{p.enName}</p>
                  <p className={`m-0 text-[15px] leading-[1.7] ${p.isHot ? 'text-[#C9C6BD]' : 'text-[#4A4D58]'}`}>{p.desc}</p>
                </div>
                <div className="flex flex-col gap-5 px-7 pb-7">
                  <div
                    className={`border-t pt-4 text-xs font-semibold ${
                      p.isHot ? 'border-[#2A2E3E] text-[#C9C6BD]' : 'border-[#E5E0D3] text-[#6E6A60]'
                    }`}
                  >
                    {p.specs}
                  </div>
                  <Link
                    href="/products"
                    className={`flex min-h-[48px] items-center justify-center gap-2 rounded-full text-sm font-bold transition-colors ${
                      p.isHot
                        ? 'bg-[#F2B544] text-[#12141C] hover:bg-[#F6C766]'
                        : 'bg-[#EAE5D8] text-[#12141C] hover:bg-[#DDD6C5]'
                    }`}
                  >
                    {text.products.more}
                    <ArrowRight className="h-4 w-4" aria-hidden="true" />
                  </Link>
                </div>
              </div>
            ))}
          </div>
          <Link href="/products" className="self-center text-sm font-bold text-[#6B5A2E] underline underline-offset-4">
            {text.products.all}
          </Link>
        </div>
      </section>

      {/* 6. How to use */}
      <section id="howto" className="scroll-mt-20 bg-[#12141C] px-6 py-24 text-[#F6F3EC]">
        <div className="mx-auto flex max-w-6xl flex-col gap-12">
          <div className="flex flex-col gap-3">
            <Eyebrow dark>{text.howto.eyebrow}</Eyebrow>
            <h2 className="m-0 text-[clamp(30px,4vw,44px)] font-black leading-tight">{text.howto.title}</h2>
          </div>
          <ol className="m-0 grid list-none grid-cols-1 gap-8 p-0 md:grid-cols-3">
            {text.howto.steps.map((s, i) => (
              <li key={s.title} className="flex flex-col gap-3 border-t-2 border-[#F2B544] pt-6">
                <span style={display} className="text-[44px] font-bold leading-none text-[#F2B544]">{i + 1}</span>
                <h3 className="m-0 text-[21px] font-bold">{s.title}</h3>
                <p className="m-0 leading-[1.7] text-[#C9C6BD]">{s.desc}</p>
              </li>
            ))}
          </ol>
          <div className="flex flex-wrap gap-x-8 gap-y-3 rounded-2xl bg-[#1E2130] px-7 py-6 text-[15px] text-[#C9C6BD]">
            <span className="font-bold text-[#F6F3EC]">{text.howto.altTitle}</span>
            {text.howto.alts.map((a) => (
              <span key={a}>{a}</span>
            ))}
          </div>
        </div>
      </section>

      {/* 7. FAQ */}
      <section id="faq" className="scroll-mt-20 px-6 py-24">
        <div className="mx-auto flex max-w-[860px] flex-col gap-8">
          <h2 className="m-0 text-[clamp(30px,4vw,44px)] font-black">{text.faq.title}</h2>
          <div className="border-b border-[#CFC9BA]">
            {text.faq.items.map((f, i) => {
              const open = openFaq === i;
              return (
                <div key={f.q} className="border-t border-[#CFC9BA]">
                  <button
                    onClick={() => setOpenFaq(open ? null : i)}
                    aria-expanded={open}
                    className="flex min-h-[64px] w-full items-center justify-between gap-4 py-5 text-left text-[19px] font-bold"
                  >
                    {f.q}
                    <ChevronDown
                      className={`h-5 w-5 shrink-0 transition-transform ${open ? 'rotate-180' : ''}`}
                      aria-hidden="true"
                    />
                  </button>
                  {open && <p className="m-0 pb-6 leading-[1.7] text-[#4A4D58]">{f.a}</p>}
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* 8. Retail network + B2B */}
      <section id="network" className="scroll-mt-20 px-6 pb-24">
        <div className="mx-auto flex max-w-6xl flex-col gap-12">
          <div className="flex max-w-[640px] flex-col gap-3">
            <Eyebrow>{text.network.eyebrow}</Eyebrow>
            <h2 className="m-0 text-[clamp(30px,4vw,44px)] font-black leading-tight">{text.network.title}</h2>
            <p className="m-0 text-[#4A4D58]">{text.network.subtitle}</p>
          </div>
          <div className="grid grid-cols-1 gap-4 md:grid-cols-2">
            {text.network.stores.map((s) => (
              <div key={s.name} className="flex items-start gap-4 rounded-2xl bg-white p-6">
                <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-[#12141C]">
                  <Store className="h-5 w-5 text-[#F2B544]" aria-hidden="true" />
                </div>
                <div className="flex flex-col gap-1">
                  <span className="self-start rounded bg-[#EAE5D8] px-2 py-0.5 text-xs font-bold text-[#6B5A2E]">{s.type}</span>
                  <h3 className="m-0 text-lg font-bold">{s.name}</h3>
                  <p className="m-0 flex items-center gap-1 text-sm text-[#6E6A60]">
                    <MapPin className="h-3.5 w-3.5" aria-hidden="true" />
                    {s.loc}
                  </p>
                </div>
              </div>
            ))}
          </div>
          <Link
            href="/retail-network"
            className="-mt-4 inline-flex items-center gap-1 self-start text-sm font-bold text-[#6B5A2E] underline underline-offset-4"
          >
            {text.network.all}
            <ArrowRight className="h-4 w-4" aria-hidden="true" />
          </Link>

          <div className="flex flex-wrap items-center justify-between gap-8 rounded-[32px] bg-[#12141C] p-8 text-[#F6F3EC] md:p-12">
            <div className="flex min-w-0 flex-[1_1_420px] flex-col gap-2">
              <h3 className="m-0 text-2xl font-bold">{text.network.b2bTitle}</h3>
              <p className="m-0 max-w-xl text-[#C9C6BD]">{text.network.b2bDesc}</p>
            </div>
            <a
              href="mailto:partner@patchon.com"
              className="inline-flex min-h-[48px] items-center gap-2 whitespace-nowrap rounded-full bg-[#F2B544] px-7 font-bold text-[#12141C] transition-colors hover:bg-[#F6C766]"
            >
              <Mail className="h-4 w-4" aria-hidden="true" />
              {text.network.b2bBtn}
            </a>
          </div>
        </div>
      </section>

      {/* 9. Buy CTA */}
      <section className="px-6 pb-24">
        <div className="mx-auto flex max-w-6xl flex-wrap items-center justify-between gap-8 rounded-[32px] bg-[#F2B544] px-8 py-14 md:px-12">
          <div className="flex min-w-0 flex-[1_1_420px] flex-col gap-3">
            <h2 className="m-0 text-[clamp(30px,4vw,44px)] font-black text-[#12141C]">{text.cta.title}</h2>
            <p className="m-0 text-[17px] text-[#2A2C35]">{text.cta.desc}</p>
          </div>
          <div className="flex flex-wrap gap-3">
            {/* TODO：網上購買可直接換成 HKTVmall 官方店連結 */}
            <Link
              href="/retail-network"
              className="inline-flex min-h-[48px] items-center rounded-full bg-[#12141C] px-7 text-[17px] font-bold text-[#F6F3EC]"
            >
              {text.cta.btnOnline}
            </Link>
            <Link
              href="/retail-network"
              className="inline-flex min-h-[48px] items-center rounded-full border-[1.5px] border-[#12141C] px-7 text-[17px] font-bold text-[#12141C]"
            >
              {text.cta.btnStore}
            </Link>
          </div>
        </div>
      </section>

      {/* 10. Footer */}
      <footer className="bg-[#12141C] px-6 py-12 text-sm text-[#9A9DAB]">
        <div className="mx-auto flex max-w-6xl flex-wrap justify-between gap-6 leading-[1.7]">
          <div className="flex min-w-0 flex-[1_1_380px] flex-col gap-2">
            <Image src="/images/logo-patchon.png" alt="PATCHON Healthastic" width={728} height={305} className="h-12 w-auto self-start" />
            <p className="m-0 max-w-xl">{text.footer.disclaimer}</p>
            <p className="m-0 font-semibold text-[#C9C6BD]">{text.footer.copy}</p>
          </div>
          <div className="flex flex-wrap items-start gap-x-6 gap-y-2">
            <a href="https://www.facebook.com/PATCHON.Healthastic/" target="_blank" rel="noopener noreferrer" className="text-[#D9D6CE] hover:text-[#F2B544]">
              Facebook
            </a>
            <Link href="/privacy" className="text-[#D9D6CE] hover:text-[#F2B544]">{text.footer.privacy}</Link>
            <Link href="/terms" className="text-[#D9D6CE] hover:text-[#F2B544]">{text.footer.terms}</Link>
          </div>
        </div>
      </footer>
    </div>
  );
}
