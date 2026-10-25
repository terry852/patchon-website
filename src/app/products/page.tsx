'use client';

import React, { useState } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { ShieldCheck, CheckCircle2, ArrowLeft, Store, AlertCircle } from 'lucide-react';

const display = { fontFamily: 'var(--font-display), sans-serif' };

type Tab = 'all' | 'flagship' | 'coming';

const TABS: { id: Tab; label: string }[] = [
  { id: 'all', label: '全部產品' },
  { id: 'flagship', label: '現售旗艦款' },
  { id: 'coming', label: '即將推出' },
];

const METHODS = [
  { tag: '方法 1 ‧ 最佳', title: '飲酒前 20 分鐘貼上', desc: '貼於少毛髮的手臂內側或肩頸，持續貼上至少 8 小時。', best: true },
  { tag: '方法 2', title: '飲酒期間貼上', desc: '飲酒中途才記起，即時貼上亦可使用。', best: false },
  { tag: '方法 3', title: '醒來後貼上', desc: '酒醒後才貼上亦可使用。', best: false },
];

// 成分：包裝背面暫時仍沿用宿醉貼內容，正式成分待品牌確認後補上
const COMING = [
  {
    id: 'fasting',
    image: '/images/pack-fasting.webp',
    packBg: '#83D4F1',
    name: '斷食維他命補充貼',
    enName: 'Fasting Vitamin Patch',
    hook: '“I don’t want exhausted during my fasting day.”',
    tagline: '持續補充 ‧ 維持全日狀態',
    desc: '為斷食日而設。透皮緩釋技術，讓維他命在貼用期間持續補充，毋須配水吞服。',
  },
  {
    id: 'beauty',
    image: '/images/pack-beauty.webp',
    packBg: '#F5AFB7',
    name: '美顏貼',
    enName: 'Beauty Patch',
    hook: '“I don’t want a dull skin.”',
    tagline: '日常保養 ‧ 隨身養膚',
    desc: '為日常護膚而設，以透皮方式持續釋放，隨時隨地為肌膚補充。',
  },
  {
    id: 'liver',
    image: '/images/pack-liver.webp',
    packBg: '#003845',
    name: '護肝貼',
    enName: 'Liver Care Patch',
    hook: '“I don’t want a tired liver.”',
    tagline: '日常保養 ‧ 維持狀態',
    desc: '為經常應酬、作息繁忙的你而設，貼一片作日常保養。',
  },
];

export default function ProductsPage() {
  const [activeTab, setActiveTab] = useState<Tab>('all');

  return (
    <div className="min-h-screen bg-[#F6F3EC] text-[#12141C] selection:bg-[#F2B544] selection:text-[#12141C]">
      {/* Header */}
      <header className="sticky top-0 z-40 bg-[#12141C] text-[#F6F3EC]">
        <div className="mx-auto flex h-[72px] max-w-6xl items-center justify-between gap-4 px-6">
          <Link href="/" className="inline-flex min-h-[44px] items-center gap-2 text-sm font-bold text-[#D9D6CE] hover:text-[#F2B544]">
            <ArrowLeft className="h-5 w-5" aria-hidden="true" />
            返回首頁
          </Link>
          <Link href="/" style={display} className="text-[22px] font-bold tracking-[0.04em] text-[#F6F3EC]">
            PATCH ON<span className="text-[#F2B544]">+</span>
          </Link>
          <Link
            href="/retail-network"
            className="hidden min-h-[44px] items-center gap-2 rounded-full bg-[#F2B544] px-5 text-sm font-bold text-[#12141C] hover:bg-[#F6C766] sm:inline-flex"
          >
            <Store className="h-4 w-4" aria-hidden="true" />
            尋找門市
          </Link>
        </div>
      </header>

      {/* Hero */}
      <section className="bg-[#12141C] px-6 pb-14 pt-12 text-[#F6F3EC]">
        <div className="mx-auto flex max-w-6xl flex-col gap-4">
          <p style={display} className="m-0 text-sm uppercase tracking-[0.18em] text-[#F2B544]">Transdermal patches</p>
          <h1 className="m-0 text-[clamp(36px,5vw,60px)] font-black leading-tight">貼片系列</h1>
          <p className="m-0 max-w-2xl text-lg leading-[1.7] text-[#C9C6BD]">
            唔使吞膠囊、唔使配水。美國研發配方，經皮膚持續釋放，隨身就用得。
          </p>
          <div role="group" aria-label="產品分類" className="flex flex-wrap gap-2 pt-4">
            {TABS.map((tab) => (
              <button
                key={tab.id}
                onClick={() => setActiveTab(tab.id)}
                aria-pressed={activeTab === tab.id}
                className={`min-h-[44px] rounded-full px-5 text-sm font-bold transition-colors ${
                  activeTab === tab.id ? 'bg-[#F2B544] text-[#12141C]' : 'bg-[#1E2130] text-[#C9C6BD] hover:bg-[#2A2E3E]'
                }`}
              >
                {tab.label}
              </button>
            ))}
          </div>
        </div>
      </section>

      <main className="mx-auto flex max-w-6xl flex-col gap-20 px-6 py-16">
        {/* Flagship: Hangover Patch */}
        {(activeTab === 'all' || activeTab === 'flagship') && (
          <section className="grid grid-cols-1 overflow-hidden rounded-[32px] bg-white lg:grid-cols-12">
            {/* Left: product visual */}
            <div className="flex flex-col justify-between gap-8 bg-[#F2B544] p-8 sm:p-12 lg:col-span-5">
              <div className="flex flex-col gap-4">
                <div className="flex flex-wrap gap-2">
                  <span className="rounded-full bg-[#12141C] px-3 py-1 text-[11px] font-bold text-[#F2B544]">現正熱賣</span>
                  <span className="rounded-full bg-[#F6F3EC] px-3 py-1 text-[11px] font-bold text-[#12141C]">美國製造 Made in USA</span>
                </div>
                <h2 className="m-0 text-[40px] font-black leading-tight text-[#12141C]">宿醉貼</h2>
                <p style={display} className="m-0 text-lg font-bold tracking-[0.04em] text-[#2A2C35]">HANGOVER PATCH</p>
              </div>

              <div className="overflow-hidden rounded-2xl bg-[#FEFEFE]">
                <Image
                  src="/images/hangover-box.webp"
                  alt="PATCH ON 宿醉貼包裝盒（5 貼裝）及單片裝"
                  width={1600}
                  height={1600}
                  priority
                  sizes="(min-width: 1024px) 400px, 90vw"
                  className="h-auto w-full"
                />
              </div>

              <ul className="m-0 flex list-none flex-col gap-2 p-0 text-sm font-bold text-[#12141C]">
                <li className="flex items-center gap-2">
                  <CheckCircle2 className="h-4 w-4" aria-hidden="true" />
                  無乳膠材質 Latex free
                </li>
                <li className="flex items-center gap-2">
                  <CheckCircle2 className="h-4 w-4" aria-hidden="true" />
                  透皮緩釋，效用可長達 24 小時
                </li>
              </ul>
            </div>

            {/* Right: details */}
            <div className="flex flex-col gap-8 p-8 sm:p-12 lg:col-span-7">
              <div className="flex flex-col gap-3">
                <p style={display} className="m-0 text-sm uppercase tracking-[0.18em] text-[#6B5A2E]">Product details</p>
                <h3 className="m-0 text-2xl font-black">美國研發配方</h3>
                <p className="m-0 leading-[1.7] text-[#4A4D58]">
                  PATCH ON 宿醉貼採用透皮吸收技術（Transdermal Patch），讓配方成分經皮膚持續緩慢釋放，毋須經過腸胃。飲酒前貼上，陪你盡興到最後。
                </p>
              </div>

              <div className="flex flex-col gap-2 rounded-2xl bg-[#F6F3EC] p-5">
                <h4 className="m-0 flex items-center gap-2 text-sm font-bold">
                  <ShieldCheck className="h-4 w-4 text-[#6B5A2E]" aria-hidden="true" />
                  核心成分 Ingredients
                </h4>
                <p className="m-0 text-sm leading-[1.7] text-[#4A4D58]">
                  維他命 B 群（Vitamin B Complex）、綠茶萃取物（Green Tea Extract）及多種抗氧化劑與營養素。
                </p>
              </div>

              <div className="flex flex-col gap-3">
                <h4 className="m-0 text-sm font-bold">三種使用方法</h4>
                <div className="grid grid-cols-1 gap-3 sm:grid-cols-3">
                  {METHODS.map((m) => (
                    <div
                      key={m.title}
                      className={`flex flex-col gap-2 rounded-2xl p-4 ${m.best ? 'bg-[#12141C] text-[#F6F3EC]' : 'bg-[#F6F3EC]'}`}
                    >
                      <span
                        className={`self-start rounded px-2 py-0.5 text-[11px] font-bold ${
                          m.best ? 'bg-[#F2B544] text-[#12141C]' : 'bg-[#EAE5D8] text-[#4A4D58]'
                        }`}
                      >
                        {m.tag}
                      </span>
                      <h5 className="m-0 text-[15px] font-bold">{m.title}</h5>
                      <p className={`m-0 text-sm leading-relaxed ${m.best ? 'text-[#C9C6BD]' : 'text-[#4A4D58]'}`}>{m.desc}</p>
                    </div>
                  ))}
                </div>
                <p className="m-0 text-sm text-[#6E6A60]">* 貼劑效用可長達 24 小時，但不建議連續使用超過 24 小時。</p>
              </div>

              <div className="flex flex-col gap-1.5 border-t border-[#E5E0D3] pt-5 text-sm leading-[1.7] text-[#4A4D58]">
                <p className="m-0 flex items-center gap-2 font-bold text-[#12141C]">
                  <AlertCircle className="h-4 w-4 text-[#6B5A2E]" aria-hidden="true" />
                  使用須知
                </p>
                <p className="m-0">‧ 本產品僅供外用。敏感性皮膚人士請先諮詢醫生意見。</p>
                <p className="m-0">‧ 懷孕或哺乳期間不建議使用。</p>
                <p className="m-0">‧ 本產品並非藥物，不能用作診斷、治療或預防任何疾病。</p>
              </div>

              <Link
                href="/retail-network"
                className="inline-flex min-h-[52px] items-center justify-center gap-2 self-start rounded-full bg-[#12141C] px-8 font-bold text-[#F6F3EC] transition-colors hover:bg-[#F2B544] hover:text-[#12141C]"
              >
                <Store className="h-4 w-4" aria-hidden="true" />
                尋找莎莎及其他購買據點
              </Link>
            </div>
          </section>
        )}

        {/* Coming soon */}
        {(activeTab === 'all' || activeTab === 'coming') && (
          <section className="flex flex-col gap-8">
            <div className="flex flex-col gap-3">
              <p style={display} className="m-0 text-sm uppercase tracking-[0.18em] text-[#6B5A2E]">New lineup</p>
              <h2 className="m-0 text-[clamp(28px,3.5vw,40px)] font-black">即將推出</h2>
              <p className="m-0 text-[#4A4D58]">斷食、美顏、護肝三款全新透皮貼片，即將登場。</p>
            </div>

            <div className="grid grid-cols-1 gap-6 md:grid-cols-3">
              {COMING.map(({ id, image, packBg, name, enName, hook, tagline, desc }) => (
                <div key={id} className="flex flex-col overflow-hidden rounded-3xl bg-white">
                  <div className="px-5 pt-5">
                    <div className="overflow-hidden rounded-2xl" style={{ backgroundColor: packBg }}>
                      <Image src={image} alt={`${name} ${enName} 包裝`} width={540} height={484} sizes="(min-width: 768px) 360px, 90vw" className="h-auto w-full" />
                    </div>
                  </div>
                  <div className="flex flex-1 flex-col gap-3 p-7">
                    <span className="self-start rounded-full bg-[#EAE5D8] px-3 py-1 text-[11px] font-bold text-[#4A4D58]">Coming soon 敬請期待</span>
                    <div className="flex flex-col gap-1">
                      <h3 className="m-0 text-2xl font-black">{name}</h3>
                      <p style={display} className="m-0 text-sm font-bold text-[#6E6A60]">{enName}</p>
                    </div>
                    <p className="m-0 text-[15px] italic text-[#4A4D58]">{hook}</p>
                    <p className="m-0 text-sm font-bold text-[#6B5A2E]">{tagline}</p>
                    <p className="m-0 text-[15px] leading-[1.7] text-[#4A4D58]">{desc}</p>
                  </div>
                  <div className="flex flex-wrap justify-between gap-2 border-t border-[#E5E0D3] px-7 py-5 text-sm font-semibold text-[#6E6A60]">
                    <span>5 貼 / 盒 ‧ 美國製造</span>
                    <span>成分即將公佈</span>
                  </div>
                </div>
              ))}
                    </div>
                  </div>
                  <div className="border-t border-[#E5E0D3] px-8 py-5 text-sm font-semibold text-[#6E6A60]">
                    預計上市：即將登場
                  </div>
                </div>
              ))}
            </div>
          </section>
        )}
      </main>

      <footer className="bg-[#12141C] px-6 py-10 text-sm text-[#9A9DAB]">
        <div className="mx-auto max-w-6xl leading-[1.7]">
          免責聲明：PATCH ON + 產品為保健營養輔助貼片，並非藥物，不能用作診斷、治療或預防任何疾病。使用效果因人而異。請適量飲酒。
        </div>
      </footer>
    </div>
  );
}
