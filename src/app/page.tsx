'use client';

import React, { useState } from 'react';
import Link from 'next/link';
import { 
  Beaker, 
  Sparkles, 
  ShieldCheck, 
  MapPin, 
  Globe, 
  ChevronRight, 
  Menu, 
  X, 
  CheckCircle2, 
  Store, 
  Building2, 
  Mail, 
  Phone,
  Microscope,
  Zap,
  Activity,
  ArrowRight
} from 'lucide-react';

export default function Home() {
  const [lang, setLang] = useState<'zh' | 'en'>('zh');
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  // 多語言文本
  const t = {
    zh: {
      nav: {
        home: '首頁',
        science: '科學科研',
        products: '貼片系列',
        network: '銷售網絡',
        contact: '聯絡我們'
      },
      hero: {
        badge: 'SCIENCE-BACKED TRANSDERMAL TECHNOLOGY',
        titlePre: '精密透皮吸收',
        titleHighlight: '科學透皮貼片',
        subtitle: 'PATCH ON + 結合生物醫學透皮傳導技術，繞過消化系統折損，將高純度活性營養直接送達體內，提供精準、高效的健康保養方案。',
        btnScience: '探索透皮科學',
        btnNetwork: '尋找銷售據點'
      },
      stats: [
        { value: '95%+', label: '活性成分生物利用度', desc: '相較傳統口服吸收率大幅提升' },
        { value: '8-12 Hours', label: '持續穩定釋放', desc: '微孔控釋技術，平穩吸收不忽高忽低' },
        { value: '100%', label: '無毒敏純素膠體', desc: '通過皮膚刺激性測試，敏弱肌適用' }
      ],
      scienceSection: {
        badge: 'THE SCIENCE OF PATCH ON +',
        title: '為什麼選擇透皮吸收？',
        desc: '傳統口服膠囊或錠劑需要經過胃酸分解與肝臟首過代謝，活性成分往往損失過半。PATCH ON + 採用醫藥級矩陣透皮系統，讓營養直達循環。',
        features: [
          {
            icon: Microscope,
            title: '分子級微孔導引',
            desc: '專利配方軟化角質層微隙，幫助大分子營養平穩穿透皮膚屏障。'
          },
          {
            icon: Zap,
            title: '繞過胃腸與肝臟代謝',
            desc: '不傷胃、不上火，避免腸胃消化液對活性營養成分的破壞。'
          },
          {
            icon: Activity,
            title: '零負擔恆速釋放',
            desc: '獨家基質粘合技術，確保 8 小時內活性物均勻釋放，不造成身體負擔。'
          }
        ]
      },
      products: {
        title: 'PATCH ON + 科研貼片系列',
        subtitle: '針對不同生活情境研發，提供精準的身體修復與能量補充。',
        items: [
          {
            id: 'hangover',
            tag: '現正熱賣 ‧ 旗艦款',
            isHot: true,
            name: 'PATCH ON + 宿醉貼',
            enName: 'Hangover Patch',
            desc: '美國研發創新配方，結合維他命B群與綠茶抗氧化劑，透皮吸收趕走宿醉、回復活力。',
            specs: '5 貼/盒 | 美國製造 | 長效24小時'
          },
          {
            id: 'energy',
            tag: '即將推出 COMING SOON',
            isHot: false,
            name: 'PATCH ON + 能量貼',
            enName: 'Energy Boost Patch',
            desc: '專為加班熬夜族與運動健身設計，持續穩定補充維他命B12與天然咖啡因，提神醒腦。',
            specs: '預計近期登場 | 全天候精力補給'
          },
          {
            id: 'beauty',
            tag: '即將推出 COMING SOON',
            isHot: false,
            name: 'PATCH ON + 美顏貼',
            enName: 'Beauty Collagen Patch',
            desc: '突破傳統口服吸收率瓶頸，透皮長效釋放膠原蛋白與玻尿酸，隨身養膚水潤緊緻。',
            specs: '預計近期登場 | 美容抗氧配方'
          }
        ]
      },
      network: {
        badge: 'RETAIL & DISTRIBUTION',
        title: '銷售網絡與合作據點',
        subtitle: 'PATCH ON + 產品已進駐全港多家指定藥局、連鎖健美通路與專業診所。',
        stores: [
          { name: '莎莎 SaSa 指定門市', type: '連鎖美妝藥局', loc: '全港各大指定分店' },
          { name: '萬寧 Mannings 指定旗艦門市', type: '連鎖藥妝', loc: '中環 / 銅鑼灣 / 尖沙咀店' },
          { name: '屈臣氏 Watsons 健康專櫃', type: '連鎖藥妝', loc: '金鐘 / 旺角 / 沙田店' },
          { name: 'HKTVmall 官方旗艦店', type: '線上平台', loc: '網購直送香港全區' }
        ],
        partnerB2B: '成為合作藥局或分銷商？',
        partnerB2BDesc: '我們誠邀各大連鎖藥局、健身中心、診所及電商平台加入 PATCH ON + 的經銷網絡。',
        btnContact: '聯繫商務合作團隊'
      },
      footer: {
        disclaimer: '免責聲明：PATCH ON + 產品為保健營養輔助貼片，非醫療藥物，不具有預防或治療疾病之功能。使用效果因人而異。',
        copy: '© 2026 PATCH ON + Laboratories. All Rights Reserved.'
      }
    },
    en: {
      nav: {
        home: 'Home',
        science: 'Science',
        products: 'Products',
        network: 'Retail Network',
        contact: 'Contact'
      },
      hero: {
        badge: 'SCIENCE-BACKED TRANSDERMAL TECHNOLOGY',
        titlePre: 'Precision Transdermal',
        titleHighlight: 'Wellness Patches',
        subtitle: 'PATCH ON + combines advanced biomedical transdermal delivery to bypass digestive degradation, delivering ultra-pure active nutrients directly into your system for targeted efficiency.',
        btnScience: 'Explore Science',
        btnNetwork: 'Where to Buy'
      },
      stats: [
        { value: '95%+', label: 'Bioavailability', desc: 'Significantly higher than oral supplements' },
        { value: '8-12 Hours', label: 'Sustained Release', desc: 'Micro-porous matrix technology for steady intake' },
        { value: '100%', label: 'Hypoallergenic', desc: 'Dermatologically tested for sensitive skin' }
      ],
      scienceSection: {
        badge: 'THE SCIENCE OF PATCH ON +',
        title: 'Why Transdermal Delivery?',
        desc: 'Traditional oral pills lose up to 70% of active ingredients during stomach acid breakdown and first-pass liver metabolism. PATCH ON + delivers pure bio-actives directly.',
        features: [
          {
            icon: Microscope,
            title: 'Molecular Transdermal Layer',
            desc: 'Proprietary formula gently opens skin lipid pathways for steady molecular penetration.'
          },
          {
            icon: Zap,
            title: 'Bypasses Digestive Track',
            desc: 'Zero stomach discomfort or hepatic burden caused by oral supplement processing.'
          },
          {
            icon: Activity,
            title: 'Steady 8-Hour Infusion',
            desc: 'Matrix adhesive technology maintains consistent nutrient delivery throughout the day or night.'
          }
        ]
      },
      products: {
        title: 'PATCH ON + Scientific Formulations',
        subtitle: 'Engineered for modern lifestyles to support optimal recovery, vitality, and beauty.',
        items: [
          {
            id: 'hangover',
            tag: 'HOT ITEM ‧ FLAGSHIP',
            isHot: true,
            name: 'PATCH ON + Hangover Patch',
            enName: 'Hangover Patch',
            desc: 'USA formulated with Vitamin B Complex & Green Tea Extract for transdermal hangover recovery.',
            specs: '5 Patches / Pack | Made in USA | 24-Hr Effect'
          },
          {
            id: 'energy',
            tag: 'COMING SOON',
            isHot: false,
            name: 'PATCH ON + Energy Boost Patch',
            enName: 'Energy Boost Patch',
            desc: 'Sustained delivery of Vitamin B12 and natural caffeine for steady mental focus.',
            specs: 'Launching Soon | Clean Energy Infusion'
          },
          {
            id: 'beauty',
            tag: 'COMING SOON',
            isHot: false,
            name: 'PATCH ON + Beauty Collagen Patch',
            enName: 'Beauty Collagen Patch',
            desc: 'Transdermal delivery of collagen & hyaluronic acid for deep hydration and anti-aging.',
            specs: 'Launching Soon | Radiant Skin Formula'
          }
        ]
      },
      network: {
        badge: 'RETAIL & DISTRIBUTION',
        title: 'Where to Buy & Retail Network',
        subtitle: 'PATCH ON + is available at selected pharmacies, wellness chains, and clinics across Hong Kong.',
        stores: [
          { name: 'SaSa Selected Stores', type: 'Beauty & Health', loc: 'Selected Hong Kong Stores' },
          { name: 'Mannings Selected Flagships', type: 'Pharmacy Chain', loc: 'Central / Causeway Bay / TST' },
          { name: 'Watsons Health Counters', type: 'Pharmacy Chain', loc: 'Admiralty / Mong Kok / Sha Tin' },
          { name: 'HKTVmall Official Store', type: 'Online Store', loc: 'HK-Wide Delivery' }
        ],
        partnerB2B: 'Become a Partner or Distributor?',
        partnerB2BDesc: 'We invite pharmacies, fitness centers, clinics, and e-commerce partners to join our network.',
        btnContact: 'Contact Wholesale Team'
      },
      footer: {
        disclaimer: 'Disclaimer: PATCH ON + products are wellness transdermal patches and are not intended to diagnose, treat, cure, or prevent any disease.',
        copy: '© 2026 PATCH ON + Laboratories. All Rights Reserved.'
      }
    }
  };

  const text = t[lang];

  return (
    <div className="min-h-screen bg-white text-slate-900 font-sans selection:bg-amber-300 selection:text-slate-900">
      
      {/* 1. 頂部導覽列 Navbar */}
      <nav className="fixed top-0 left-0 right-0 z-50 bg-white/90 backdrop-blur-md border-b border-slate-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-20 flex items-center justify-between">
          
          {/* Logo */}
          <Link href="/" className="flex items-center space-x-2 cursor-pointer">
            <div className="w-9 h-9 bg-amber-400 rounded-lg flex items-center justify-center font-black text-slate-950 text-xl shadow-sm">
              +
            </div>
            <span className="text-2xl font-black tracking-wider text-slate-900">
              PATCH ON<span className="text-amber-500">+</span>
            </span>
          </Link>

          {/* Desktop Nav Items */}
          <div className="hidden md:flex items-center space-x-8 text-sm font-semibold text-slate-600">
            <Link href="/" className="hover:text-amber-500 transition-colors text-amber-500 font-bold">
              {text.nav.home}
            </Link>
            <a href="#science" className="hover:text-amber-500 transition-colors">
              {text.nav.science}
            </a>
            <Link href="/products" className="hover:text-amber-500 transition-colors flex items-center space-x-1">
              <span>{text.nav.products}</span>
              <span className="bg-amber-100 text-amber-800 text-[10px] font-bold px-1.5 py-0.5 rounded-full">New</span>
            </Link>
            <Link href="/retail-network" className="hover:text-amber-500 transition-colors">
              {text.nav.network}
            </Link>
          </div>

          {/* Right Actions: Lang Switcher & Network Btn */}
          <div className="hidden md:flex items-center space-x-4">
            <button 
              onClick={() => setLang(lang === 'zh' ? 'en' : 'zh')}
              className="px-3 py-1.5 text-xs font-bold border border-slate-200 rounded-full hover:bg-slate-50 transition-all text-slate-700"
            >
              {lang === 'zh' ? 'EN' : '中文'}
            </button>

            <Link 
              href="/retail-network"
              className="flex items-center space-x-2 bg-slate-900 hover:bg-slate-800 text-white px-5 py-2.5 rounded-full text-sm font-bold transition-all shadow-md hover:shadow-amber-400/20"
            >
              <Store className="w-4 h-4 text-amber-400" />
              <span>{text.hero.btnNetwork}</span>
            </Link>
          </div>

          {/* Mobile Menu Button */}
          <div className="md:hidden flex items-center space-x-3">
            <button 
              onClick={() => setLang(lang === 'zh' ? 'en' : 'zh')}
              className="px-2.5 py-1 text-xs font-bold border border-slate-200 rounded-md"
            >
              {lang === 'zh' ? 'EN' : '中文'}
            </button>
            <button 
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="p-2 text-slate-700"
            >
              {mobileMenuOpen ? <X /> : <Menu />}
            </button>
          </div>
        </div>

        {/* Mobile Dropdown */}
        {mobileMenuOpen && (
          <div className="md:hidden bg-white border-b border-slate-100 px-6 py-6 space-y-4">
            <Link 
              href="/" 
              onClick={() => setMobileMenuOpen(false)}
              className="block font-bold text-slate-800 py-2"
            >
              {text.nav.home}
            </Link>
            <a 
              href="#science" 
              onClick={() => setMobileMenuOpen(false)}
              className="block font-bold text-slate-800 py-2"
            >
              {text.nav.science}
            </a>
            <Link 
              href="/products" 
              onClick={() => setMobileMenuOpen(false)}
              className="block font-bold text-amber-600 py-2"
            >
              {text.nav.products} (最新貼片)
            </Link>
            <Link 
              href="/retail-network" 
              onClick={() => setMobileMenuOpen(false)}
              className="block font-bold text-slate-800 py-2"
            >
              {text.nav.network}
            </Link>
            <Link 
              href="/retail-network"
              onClick={() => setMobileMenuOpen(false)}
              className="w-full bg-amber-400 text-slate-950 font-bold py-3 rounded-xl flex items-center justify-center space-x-2 shadow-sm"
            >
              <Store className="w-4 h-4" />
              <span>{text.hero.btnNetwork}</span>
            </Link>
          </div>
        )}
      </nav>

      {/* 2. Hero 區塊 (科學白色高質感風格) */}
      <section className="pt-32 pb-20 bg-gradient-to-b from-slate-50/80 via-white to-white relative overflow-hidden">
        <div className="absolute inset-0 bg-[radial-gradient(#e5e7eb_1px,transparent_1px)] [background-size:24px_24px] opacity-60 pointer-events-none" />
        
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="text-center max-w-3xl mx-auto">
            
            <div className="inline-flex items-center space-x-2 bg-amber-50 border border-amber-200/80 px-4 py-1.5 rounded-full mb-6">
              <Beaker className="w-4 h-4 text-amber-600" />
              <span className="text-xs font-extrabold tracking-wider text-amber-900 uppercase">
                {text.hero.badge}
              </span>
            </div>

            <h1 className="text-4xl sm:text-6xl font-black text-slate-900 tracking-tight leading-tight mb-6">
              {text.hero.titlePre} <br />
              <span className="relative inline-block text-slate-950">
                {text.hero.titleHighlight}
                <span className="absolute bottom-1 left-0 right-0 h-3 bg-amber-300/60 -z-10 rounded-sm" />
              </span>
            </h1>

            <p className="text-slate-600 text-base sm:text-lg leading-relaxed mb-10 font-normal">
              {text.hero.subtitle}
            </p>

            <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
              <Link 
                href="/products"
                className="w-full sm:w-auto bg-amber-400 hover:bg-amber-300 text-slate-950 px-8 py-4 rounded-full font-bold text-base transition-all shadow-lg shadow-amber-400/25 flex items-center justify-center space-x-2"
              >
                <Sparkles className="w-5 h-5" />
                <span>瀏覽貼片系列 (宿醉/能量/美顏)</span>
              </Link>
              <Link 
                href="/retail-network"
                className="w-full sm:w-auto bg-white border border-slate-200 hover:bg-slate-50 text-slate-800 px-8 py-4 rounded-full font-bold text-base transition-all flex items-center justify-center space-x-2"
              >
                <MapPin className="w-5 h-5 text-slate-500" />
                <span>{text.hero.btnNetwork}</span>
              </Link>
            </div>

          </div>

          <div className="mt-20 grid grid-cols-1 md:grid-cols-3 gap-6">
            {text.stats.map((stat, idx) => (
              <div key={idx} className="p-8 rounded-2xl bg-white border border-slate-100 shadow-xl shadow-slate-100/80 hover:border-amber-200 transition-all">
                <div className="text-3xl sm:text-4xl font-black text-amber-500 mb-2">
                  {stat.value}
                </div>
                <div className="text-base font-bold text-slate-900 mb-1">
                  {stat.label}
                </div>
                <div className="text-xs text-slate-500">
                  {stat.desc}
                </div>
              </div>
            ))}
          </div>

        </div>
      </section>

      {/* 3. 科學透皮原理區塊 Science Explanation */}
      <section id="science" className="py-20 bg-slate-900 text-white relative">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-2xl mx-auto mb-16">
            <span className="text-amber-400 font-bold text-xs tracking-widest uppercase mb-2 block">
              {text.scienceSection.badge}
            </span>
            <h2 className="text-3xl sm:text-4xl font-bold mb-4">
              {text.scienceSection.title}
            </h2>
            <p className="text-slate-400 text-sm sm:text-base">
              {text.scienceSection.desc}
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {text.scienceSection.features.map((item, idx) => {
              const IconComp = item.icon;
              return (
                <div key={idx} className="bg-slate-800/80 border border-slate-700/60 p-8 rounded-2xl hover:border-amber-400/50 transition-all">
                  <div className="w-12 h-12 bg-amber-400/10 border border-amber-400/30 rounded-xl flex items-center justify-center text-amber-400 mb-6">
                    <IconComp className="w-6 h-6" />
                  </div>
                  <h3 className="text-xl font-bold mb-3 text-white">
                    {item.title}
                  </h3>
                  <p className="text-slate-400 text-sm leading-relaxed">
                    {item.desc}
                  </p>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* 4. 產品系列展售 (含有宿醉貼、能量貼與美顏貼) */}
      <section className="py-20 bg-slate-50/50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-2xl mx-auto mb-16">
            <h2 className="text-3xl font-black text-slate-900 mb-4">
              {text.products.title}
            </h2>
            <p className="text-slate-600 text-sm sm:text-base">
              {text.products.subtitle}
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {text.products.items.map((prod) => (
              <div 
                key={prod.id} 
                className={`rounded-2xl border p-8 flex flex-col justify-between hover:shadow-xl transition-all ${
                  prod.isHot 
                    ? 'bg-white border-amber-300 ring-2 ring-amber-400/20' 
                    : 'bg-white border-slate-200/80'
                }`}
              >
                <div>
                  <span className={`inline-block text-xs font-bold px-3 py-1 rounded-full mb-4 ${
                    prod.isHot 
                      ? 'bg-amber-400 text-slate-950 font-extrabold' 
                      : 'bg-slate-100 text-slate-600'
                  }`}>
                    {prod.tag}
                  </span>
                  <h3 className="text-2xl font-black text-slate-900 mb-1">
                    {prod.name}
                  </h3>
                  <p className="text-xs font-bold text-slate-400 mb-3">{prod.enName}</p>
                  <p className="text-slate-600 text-sm leading-relaxed mb-6">
                    {prod.desc}
                  </p>
                </div>

                <div>
                  <div className="text-xs font-semibold text-slate-400 mb-6 border-t border-slate-100 pt-4">
                    {prod.specs}
                  </div>
                  <Link 
                    href="/products"
                    className={`w-full font-bold py-3.5 rounded-xl text-xs transition-all flex items-center justify-center space-x-2 ${
                      prod.isHot 
                        ? 'bg-slate-900 hover:bg-amber-400 hover:text-slate-950 text-white' 
                        : 'bg-slate-100 hover:bg-slate-200 text-slate-800'
                    }`}
                  >
                    <span>查看完整產品細節</span>
                    <ArrowRight className="w-4 h-4" />
                  </Link>
                </div>
              </div>
            ))}
          </div>

          <div className="text-center mt-12">
            <Link 
              href="/products"
              className="inline-flex items-center space-x-2 text-sm font-bold text-amber-600 hover:text-amber-700 underline underline-offset-4"
            >
              <span>查看全部產品與成分規格</span>
              <ChevronRight className="w-4 h-4" />
            </Link>
          </div>
        </div>
      </section>

      {/* 5. 銷售網絡區塊 */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          
          <div className="text-center max-w-2xl mx-auto mb-16">
            <span className="text-amber-600 font-extrabold text-xs tracking-widest uppercase mb-2 block">
              {text.network.badge}
            </span>
            <h2 className="text-3xl sm:text-4xl font-black text-slate-900 mb-4">
              {text.network.title}
            </h2>
            <p className="text-slate-600 text-sm sm:text-base">
              {text.network.subtitle}
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-16">
            {text.network.stores.map((store, idx) => (
              <div key={idx} className="p-6 rounded-2xl border border-slate-200/80 bg-slate-50/50 flex items-start space-x-4 hover:border-amber-400 transition-all">
                <div className="w-10 h-10 bg-amber-400 text-slate-950 rounded-xl flex items-center justify-center flex-shrink-0 font-bold">
                  <Store className="w-5 h-5" />
                </div>
                <div>
                  <div className="flex items-center space-x-2 mb-1">
                    <span className="text-xs font-bold text-amber-700 bg-amber-100 px-2 py-0.5 rounded">
                      {store.type}
                    </span>
                  </div>
                  <h4 className="text-lg font-bold text-slate-900 mb-1">
                    {store.name}
                  </h4>
                  <p className="text-slate-500 text-xs flex items-center space-x-1">
                    <MapPin className="w-3.5 h-3.5 text-slate-400" />
                    <span>{store.loc}</span>
                  </p>
                </div>
              </div>
            ))}
          </div>

          <div className="bg-gradient-to-r from-slate-900 to-slate-800 text-white rounded-3xl p-8 sm:p-12 flex flex-col md:flex-row items-center justify-between gap-8">
            <div>
              <h3 className="text-2xl font-bold mb-2 text-white">
                {text.network.partnerB2B}
              </h3>
              <p className="text-slate-300 text-sm max-w-xl">
                {text.network.partnerB2BDesc}
              </p>
            </div>
            <a 
              href="mailto:partner@patchon.com"
              className="whitespace-nowrap bg-amber-400 hover:bg-amber-300 text-slate-950 font-bold px-8 py-4 rounded-full text-sm transition-all shadow-lg shadow-amber-400/20 flex items-center space-x-2"
            >
              <Mail className="w-4 h-4" />
              <span>{text.network.btnContact}</span>
            </a>
          </div>

        </div>
      </section>

      {/* 6. Footer 頁尾 */}
      <footer className="bg-slate-950 text-slate-400 text-xs py-12 border-t border-slate-900">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-6 text-center sm:text-left sm:flex sm:items-center sm:justify-between sm:space-y-0">
          <div className="max-w-xl">
            <p className="leading-relaxed text-slate-500 mb-2">
              {text.footer.disclaimer}
            </p>
            <p className="font-semibold text-slate-400">
              {text.footer.copy}
            </p>
          </div>
          
          <div className="flex justify-center space-x-6 text-slate-400">
            <span className="hover:text-amber-400 cursor-pointer">Privacy Policy</span>
            <span className="hover:text-amber-400 cursor-pointer">Terms of Service</span>
          </div>
        </div>
      </footer>

    </div>
  );
}