"use client";

import React, { useState } from "react";
import Image from "next/image";
import { ShoppingBag, ShieldCheck, Zap, HeartPulse, Globe, Plus, CheckCircle2 } from "lucide-react";

// 雙語字典內容
const dictionary = {
  "zh-TW": {
    brandName: "PATCH ON",
    brandTagline: "Innovative Formulas from the USA",
    productType: "HANGOVER PATCH",
    navFeatures: "產品優勢",
    navScience: "科學原理",
    navPricing: "選購方案",
    heroBadge: "美國創新配方 • 經皮吸收科技",
    heroTitle: "歡聚無負擔，",
    heroTitleHighlight: "告別宿醉煩惱",
    heroSubtitle: "PATCH ON + 採用美式創新配方，透過經皮滲透技術於飲酒期間持續補充 B群與天然植物萃取，讓你派對後依然清醒光彩。",
    buyNow: "立即選購",
    learnMore: "探索科學原理",
    stat1Label: "經皮吸收率",
    stat1Value: "92%",
    stat2Label: "持續釋放時間",
    stat2Value: "12 Hours",
    stat3Label: "美國研發配方",
    stat3Value: "USA Formula",
    plan1Name: "派對體驗包",
    plan1Price: "HK$ 128",
    plan1PatchCount: "6 貼裝 (2 次派對份量)",
    plan2Name: "狂歡達人組",
    plan2Price: "HK$ 298",
    plan2PatchCount: "18 貼裝 (熱銷推薦 • 免運費)",
    popularTag: "最受歡迎",
    checkoutBtn: "前往結帳",
    feature1Title: "長效 12 小時持續釋放",
    feature1Desc: "不同於口服解酒藥被胃酸破壞，經皮貼片整夜持續輸送活性成分。",
    feature2Title: "100% 天然草本與 B群",
    feature2Desc: "富含維生素 B1, B6, B12、水飛薊萃取物與綠茶精華，幫助維持代謝活力。",
    feature3Title: "防水輕薄，貼服無感",
    feature3Desc: "極薄透氣材質，貼於手臂或肩胛骨，派對狂歡、狂歡舞動皆不脫落。",
  },
  "en-US": {
    brandName: "PATCH ON",
    brandTagline: "Innovative Formulas from the USA",
    productType: "HANGOVER PATCH",
    navFeatures: "Features",
    navScience: "Science",
    navPricing: "Pricing",
    heroBadge: "USA Innovative Formulas • Transdermal Tech",
    heroTitle: "Party Tonight,",
    heroTitleHighlight: "Thrive Tomorrow",
    heroSubtitle: "PATCH ON + delivers continuous B-Complex & botanical extracts directly through your skin while you enjoy your drinks.",
    buyNow: "Shop Now",
    learnMore: "Learn Science",
    stat1Label: "Absorption Rate",
    stat1Value: "92%",
    stat2Label: "Active Duration",
    stat2Value: "12 Hours",
    stat3Label: "Formulation",
    stat3Value: "USA Formula",
    plan1Name: "Party Starter Pack",
    plan1Price: "HK$ 128",
    plan1PatchCount: "6 Patches (2 Night outs)",
    plan2Name: "Nightlife Master Pack",
    plan2Price: "HK$ 298",
    plan2PatchCount: "18 Patches (Best Seller • Free Shipping)",
    popularTag: "POPULAR",
    checkoutBtn: "Proceed to Checkout",
    feature1Title: "12-Hour Sustained Release",
    feature1Desc: "Bypasses digestive breakdown for steady transdermal nutrient delivery all night long.",
    feature2Title: "100% Natural Botanicals & B-Complex",
    feature2Desc: "Packed with Vitamins B1, B6, B12, Milk Thistle, and Green Tea extract for liver support.",
    feature3Title: "Waterproof & Ultra-Thin",
    feature3Desc: "Discreet and lightweight. Stays securely attached through every celebration.",
  },
};

export default function HangoverPatchLanding() {
  const [lang, setLang] = useState<"zh-TW" | "en-US">("zh-TW");
  const t = dictionary[lang];

  const toggleLanguage = () => {
    setLang((prev) => (prev === "zh-TW" ? "en-US" : "zh-TW"));
  };

  const handleCheckout = (planId: string) => {
    console.log(`Checkout initiated for ${planId}`);
    alert(`[${lang}] Redirecting to Secure Payment API for ${planId}...`);
  };

  return (
    <div className="min-h-screen bg-[#0A0A0F] text-slate-100 font-sans overflow-hidden selection:bg-[#F5B800] selection:text-black">
      {/* 背景深暗黃光暈 */}
      <div className="fixed top-[-10%] left-[-10%] w-[500px] h-[500px] bg-[#F5B800]/15 rounded-full blur-[150px] pointer-events-none" />
      <div className="fixed bottom-[-10%] right-[-10%] w-[500px] h-[500px] bg-amber-600/10 rounded-full blur-[150px] pointer-events-none" />

      {/* Navbar 頂部導覽列 (Glassmorphism) */}
      <header className="sticky top-0 z-50 backdrop-blur-md bg-black/50 border-b border-[#F5B800]/20 px-6 py-4">
        <div className="max-w-7xl mx-auto flex items-center justify-between">
          
          {/* PATCH ON + 品牌 Logo 重現 */}
          <div className="flex flex-col">
            <div className="flex items-center space-x-1">
              <span className="text-2xl font-black tracking-tighter text-[#F5B800]">
                {t.brandName}
              </span>
              <div className="bg-[#F5B800] text-black rounded-sm p-0.5 flex items-center justify-center">
                <Plus className="w-4 h-4 stroke-[4]" />
              </div>
              <span className="text-[#F5B800] text-[10px] font-bold align-super">®</span>
            </div>
            <span className="text-[8px] sm:text-[9px] tracking-wider text-slate-400 font-medium uppercase -mt-1">
              {t.brandTagline}
            </span>
          </div>

          <nav className="hidden md:flex items-center space-x-8 text-sm font-medium text-slate-300">
            <a href="#features" className="hover:text-[#F5B800] transition-colors">{t.navFeatures}</a>
            <a href="#science" className="hover:text-[#F5B800] transition-colors">{t.navScience}</a>
            <a href="#pricing" className="hover:text-[#F5B800] transition-colors">{t.navPricing}</a>
          </nav>

          <div className="flex items-center space-x-4">
            <button
              onClick={toggleLanguage}
              className="flex items-center space-x-1.5 text-xs px-3 py-1.5 rounded-full border border-white/10 hover:border-[#F5B800]/50 hover:bg-white/5 transition-all"
            >
              <Globe className="w-3.5 h-3.5 text-[#F5B800]" />
              <span>{lang === "zh-TW" ? "EN" : "繁中"}</span>
            </button>

            <a
              href="#pricing"
              className="hidden sm:flex items-center space-x-2 text-xs font-bold px-4 py-2 rounded-full bg-[#F5B800] text-black hover:bg-[#D9A200] transition-colors shadow-lg shadow-[#F5B800]/20"
            >
              <ShoppingBag className="w-3.5 h-3.5" />
              <span>{t.buyNow}</span>
            </a>
          </div>
        </div>
      </header>

      {/* Hero 主視覺區 */}
      <section className="relative pt-16 pb-16 px-6 max-w-7xl mx-auto text-center md:text-left grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
        <div className="space-y-6">
          <div className="inline-flex items-center space-x-2 px-3 py-1.5 rounded-full border border-[#F5B800]/30 bg-[#F5B800]/10 text-[#F5B800] text-xs font-semibold backdrop-blur-md">
            <Zap className="w-3.5 h-3.5" />
            <span>{t.heroBadge}</span>
          </div>

          <h1 className="text-4xl md:text-6xl font-black tracking-tight leading-tight">
            {t.heroTitle} <br />
            <span className="text-[#F5B800]">
              {t.heroTitleHighlight}
            </span>
          </h1>

          <p className="text-slate-400 text-base md:text-lg max-w-xl leading-relaxed">
            {t.heroSubtitle}
          </p>

          <div className="flex flex-col sm:flex-row items-center space-y-3 sm:space-y-0 sm:space-x-4 pt-4">
            <a
              href="#pricing"
              className="w-full sm:w-auto px-8 py-3.5 rounded-xl bg-[#F5B800] text-black font-extrabold text-sm hover:scale-[1.02] transition-transform shadow-xl shadow-[#F5B800]/20 text-center"
            >
              {t.buyNow}
            </a>
            <a
              href="#features"
              className="w-full sm:w-auto px-8 py-3.5 rounded-xl border border-white/15 bg-white/5 hover:bg-white/10 font-semibold text-sm transition-all backdrop-blur-md text-center"
            >
              {t.learnMore}
            </a>
          </div>

          {/* 數據優勢 */}
          <div className="grid grid-cols-3 gap-4 pt-8 border-t border-white/10">
            <div>
              <div className="text-2xl font-black text-[#F5B800]">{t.stat1Value}</div>
              <div className="text-xs text-slate-400 mt-1">{t.stat1Label}</div>
            </div>
            <div>
              <div className="text-2xl font-black text-white">{t.stat2Value}</div>
              <div className="text-xs text-slate-400 mt-1">{t.stat2Label}</div>
            </div>
            <div>
              <div className="text-2xl font-black text-[#F5B800]">{t.stat3Value}</div>
              <div className="text-xs text-slate-400 mt-1">{t.stat3Label}</div>
            </div>
          </div>
        </div>

        {/* 右側：PATCH ON + 產品包裝展示 */}
        <div className="relative flex justify-center">
          <div className="relative w-full max-w-md p-6 rounded-3xl backdrop-blur-xl bg-white/5 border border-[#F5B800]/30 shadow-2xl shadow-yellow-500/10">
            <div className="absolute -top-3 -right-3 px-3 py-1 rounded-full bg-[#F5B800] text-black font-black text-[10px] tracking-wider uppercase">
              USA FORMULA
            </div>
            
            <div className="relative h-72 w-full rounded-2xl overflow-hidden bg-gradient-to-b from-neutral-900 to-black flex flex-col items-center justify-center border border-white/10 p-6 text-center">
              <div className="text-4xl font-black text-[#F5B800] tracking-tighter flex items-center gap-1.5">
                PATCH ON <Plus className="w-7 h-7 stroke-[4]" />
              </div>
              <div className="text-base font-bold tracking-widest text-white mt-1 uppercase">
                {t.productType}
              </div>
              <p className="text-[10px] text-slate-400 mt-6 border-t border-white/10 pt-4">
                {t.brandTagline} | patchonformulas.com
              </p>
            </div>

            <div className="mt-4 flex items-center justify-between text-xs text-slate-400">
              <span className="flex items-center gap-1"><ShieldCheck className="w-4 h-4 text-[#F5B800]" /> 經皮滲透技術</span>
              <span className="flex items-center gap-1"><HeartPulse className="w-4 h-4 text-white" /> 美國進口配方</span>
            </div>
          </div>
        </div>
      </section>

      {/* 產品特點區塊 Features Section */}
      <section id="features" className="py-20 px-6 max-w-7xl mx-auto border-t border-white/10">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div className="p-6 rounded-2xl bg-white/5 border border-white/10 space-y-3">
            <div className="w-10 h-10 rounded-lg bg-[#F5B800]/20 text-[#F5B800] flex items-center justify-center font-bold">
              12H
            </div>
            <h3 className="text-lg font-bold text-white">{t.feature1Title}</h3>
            <p className="text-slate-400 text-sm leading-relaxed">{t.feature1Desc}</p>
          </div>

          <div className="p-6 rounded-2xl bg-white/5 border border-white/10 space-y-3">
            <div className="w-10 h-10 rounded-lg bg-[#F5B800]/20 text-[#F5B800] flex items-center justify-center font-bold">
              B+
            </div>
            <h3 className="text-lg font-bold text-white">{t.feature2Title}</h3>
            <p className="text-slate-400 text-sm leading-relaxed">{t.feature2Desc}</p>
          </div>

          <div className="p-6 rounded-2xl bg-white/5 border border-white/10 space-y-3">
            <div className="w-10 h-10 rounded-lg bg-[#F5B800]/20 text-[#F5B800] flex items-center justify-center font-bold">
              <CheckCircle2 className="w-5 h-5" />
            </div>
            <h3 className="text-lg font-bold text-white">{t.feature3Title}</h3>
            <p className="text-slate-400 text-sm leading-relaxed">{t.feature3Desc}</p>
          </div>
        </div>
      </section>

      {/* 價格選購方案 Pricing Section */}
      <section id="pricing" className="py-20 px-6 max-w-7xl mx-auto border-t border-white/10">
        <div className="text-center space-y-4 mb-16">
          <h2 className="text-3xl font-black tracking-tight text-white">選擇適合你的選購方案</h2>
          <p className="text-slate-400 text-sm">支援信用卡、Apple Pay 及多元線上支付，快速直送到府</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto">
          {/* 方案 1 */}
          <div className="p-8 rounded-3xl backdrop-blur-xl bg-white/5 border border-white/10 hover:border-[#F5B800]/40 transition-all flex flex-col justify-between">
            <div>
              <h3 className="text-xl font-bold text-slate-200">{t.plan1Name}</h3>
              <div className="text-3xl font-extrabold text-white mt-4">{t.plan1Price}</div>
              <p className="text-sm text-slate-400 mt-2">{t.plan1PatchCount}</p>
            </div>
            <button
              onClick={() => handleCheckout("starter")}
              className="mt-8 w-full py-3.5 rounded-xl border border-[#F5B800]/40 bg-[#F5B800]/10 hover:bg-[#F5B800]/20 text-[#F5B800] font-bold text-sm transition-all"
            >
              {t.checkoutBtn}
            </button>
          </div>

          {/* 方案 2 (熱銷) */}
          <div className="relative p-8 rounded-3xl backdrop-blur-xl bg-gradient-to-b from-yellow-500/10 to-black border-2 border-[#F5B800] flex flex-col justify-between shadow-2xl shadow-[#F5B800]/10">
            <div className="absolute -top-3.5 right-6 px-3 py-1 rounded-full bg-[#F5B800] text-black font-black text-[10px] tracking-wider uppercase">
              {t.popularTag}
            </div>
            <div>
              <h3 className="text-xl font-black text-white">{t.plan2Name}</h3>
              <div className="text-3xl font-black text-[#F5B800] mt-4">{t.plan2Price}</div>
              <p className="text-sm text-slate-300 mt-2">{t.plan2PatchCount}</p>
            </div>
            <button
              onClick={() => handleCheckout("master")}
              className="mt-8 w-full py-3.5 rounded-xl bg-[#F5B800] text-black font-black text-sm hover:bg-[#D9A200] transition-colors shadow-lg shadow-[#F5B800]/20"
            >
              {t.checkoutBtn}
            </button>
          </div>
        </div>
      </section>

      {/* Footer 頁尾 */}
      <footer className="py-8 px-6 border-t border-white/10 text-center text-xs text-slate-500">
        <p>© {new Date().getFullYear()} PATCH ON +. All rights reserved. Innovative Formulas from the USA.</p>
      </footer>
    </div>
  );
}