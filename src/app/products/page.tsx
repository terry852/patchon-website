'use client';

import React, { useState } from 'react';
import Link from 'next/link';
import { 
  ShieldCheck, 
  Zap, 
  Sparkles, 
  Clock, 
  CheckCircle2, 
  ArrowLeft, 
  Store, 
  Info, 
  AlertCircle,
  ChevronRight,
  Flame,
  Heart,
  ExternalLink
} from 'lucide-react';

export default function ProductsPage() {
  const [activeTab, setActiveTab] = useState<'all' | 'flagship' | 'coming'>('all');

  return (
    <div className="min-h-screen bg-slate-50 text-slate-900 font-sans selection:bg-amber-300">
      
      {/* 頂部導覽列 */}
      <header className="bg-white border-b border-slate-200 sticky top-0 z-40">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-20 flex items-center justify-between">
          <Link href="/" className="flex items-center space-x-2 text-slate-600 hover:text-amber-600 transition-colors">
            <ArrowLeft className="w-5 h-5" />
            <span className="text-sm font-bold">返回首頁</span>
          </Link>
          <div className="flex items-center space-x-2">
            <div className="w-8 h-8 bg-amber-400 rounded-lg flex items-center justify-center font-black text-slate-950 text-lg">
              +
            </div>
            <span className="text-xl font-black text-slate-900">
              PATCH ON<span className="text-amber-500">+</span>
            </span>
          </div>
          <Link 
            href="/retail-network" 
            className="hidden sm:flex items-center space-x-1.5 text-xs font-bold bg-amber-400 hover:bg-amber-300 text-slate-950 px-4 py-2.5 rounded-full transition-all"
          >
            <Store className="w-4 h-4" />
            <span>尋找門市</span>
          </Link>
        </div>
      </header>

      {/* Hero 標題區 */}
      <section className="bg-slate-900 text-white py-16 px-4 sm:px-6 lg:px-8 border-b border-slate-800">
        <div className="max-w-4xl mx-auto text-center">
          <span className="inline-block bg-amber-400/20 text-amber-300 border border-amber-400/30 text-xs font-black px-3.5 py-1 rounded-full uppercase tracking-wider mb-4">
            INNOVATIVE TRANSDERMAL PATCHES
          </span>
          <h1 className="text-3xl sm:text-5xl font-black mb-4 tracking-tight">
            PATCHON<span className="text-amber-400">+</span> 創新透皮保健貼片系列
          </h1>
          <p className="text-slate-300 text-base sm:text-lg max-w-2xl mx-auto leading-relaxed">
            告別吞膠囊與難聞藥味。美國研發創新配方，經由皮膚持續緩釋吸收，讓營養補給更高效、無負擔。
          </p>

          {/* 分類切換按鈕 */}
          <div className="flex items-center justify-center space-x-3 mt-8">
            <button
              onClick={() => setActiveTab('all')}
              className={`px-5 py-2.5 rounded-full text-xs font-bold transition-all ${
                activeTab === 'all' ? 'bg-amber-400 text-slate-950 shadow-lg shadow-amber-400/20' : 'bg-slate-800 text-slate-300 hover:bg-slate-700'
              }`}
            >
              全部產品
            </button>
            <button
              onClick={() => setActiveTab('flagship')}
              className={`px-5 py-2.5 rounded-full text-xs font-bold transition-all ${
                activeTab === 'flagship' ? 'bg-amber-400 text-slate-950 shadow-lg shadow-amber-400/20' : 'bg-slate-800 text-slate-300 hover:bg-slate-700'
              }`}
            >
              現售旗艦款
            </button>
            <button
              onClick={() => setActiveTab('coming')}
              className={`px-5 py-2.5 rounded-full text-xs font-bold transition-all ${
                activeTab === 'coming' ? 'bg-amber-400 text-slate-950 shadow-lg shadow-amber-400/20' : 'bg-slate-800 text-slate-300 hover:bg-slate-700'
              }`}
            >
              即將推出 (New)
            </button>
          </div>
        </div>
      </section>

      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 space-y-16">

        {/* 1. 現售旗艦產品 —— 宿醉貼 (Hangover Patch) */}
        {(activeTab === 'all' || activeTab === 'flagship') && (
          <section className="bg-white rounded-3xl border border-slate-200/80 shadow-sm overflow-hidden">
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-0">
              
              {/* 產品圖片 / 盒裝模擬區 */}
              <div className="lg:col-span-5 bg-gradient-to-br from-amber-400 via-amber-300 to-amber-500 p-8 sm:p-12 flex flex-col justify-between relative overflow-hidden">
                <div className="absolute -right-12 -bottom-12 w-64 h-64 bg-amber-200/40 rounded-full blur-2xl"></div>
                
                <div>
                  <div className="flex items-center space-x-2 mb-4">
                    <span className="bg-slate-950 text-amber-300 text-[10px] font-black px-3 py-1 rounded-full uppercase">
                      HOT ITEM 現正熱賣
                    </span>
                    <span className="bg-white/80 backdrop-blur-sm text-slate-900 text-[10px] font-bold px-2.5 py-1 rounded-full">
                      MADE IN USA 美國製造
                    </span>
                  </div>

                  <h2 className="text-3xl sm:text-4xl font-black text-slate-950 leading-tight mb-2">
                    宿醉貼 <br />
                    <span className="text-xl font-bold opacity-80">HANGOVER PATCH</span>
                  </h2>
                  <p className="text-slate-900/80 text-sm font-semibold mb-6">
                    趕走宿醉 ‧ 回復活力
                  </p>
                </div>

                {/* 盒裝模擬視視覺框 */}
                <div className="bg-slate-950/90 text-white p-6 rounded-2xl backdrop-blur-sm border border-amber-300/30 my-6 shadow-xl">
                  <p className="text-amber-400 text-xs font-bold mb-1 uppercase tracking-wider">help</p>
                  <p className="text-xl font-black italic mb-3">"I don't want a hangover."</p>
                  <div className="flex items-center justify-between text-xs text-slate-300 border-t border-slate-800 pt-3">
                    <span>創新維他命+抗氧化劑+營養素</span>
                    <span className="font-bold text-amber-300">5 Patches / 盒</span>
                  </div>
                </div>

                <div className="space-y-2">
                  <div className="flex items-center space-x-2 text-xs font-bold text-slate-900">
                    <CheckCircle2 className="w-4 h-4 text-slate-950" />
                    <span>LATEX FREE 無乳膠低敏材質</span>
                  </div>
                  <div className="flex items-center space-x-2 text-xs font-bold text-slate-900">
                    <CheckCircle2 className="w-4 h-4 text-slate-950" />
                    <span>透皮緩釋技術，效果長達 24 小時</span>
                  </div>
                </div>
              </div>

              {/* 產品詳細資訊說明 */}
              <div className="lg:col-span-7 p-8 sm:p-12 space-y-8">
                
                {/* 產品介紹 */}
                <div>
                  <h3 className="text-xs font-bold text-amber-600 uppercase tracking-wider mb-1">
                    PRODUCT DETAILS
                  </h3>
                  <h3 className="text-2xl font-bold text-slate-900 mb-3">
                    美國研發最新配方
                  </h3>
                  <p className="text-slate-600 text-sm leading-relaxed">
                    PATCHON 宿醉貼採用美國創新研發的透皮吸收技術（Transdermal Patch），將活性成分直接透過皮膚毛孔緩慢吸收入體內，避免胃酸破壞，能有效減輕飲酒後引起的頭痛、噁心與全身疲憊。
                  </p>
                </div>

                {/* 成分 */}
                <div className="bg-slate-50 p-4 rounded-xl border border-slate-200/60">
                  <h4 className="text-xs font-extrabold text-slate-900 mb-2 flex items-center space-x-1.5">
                    <ShieldCheck className="w-4 h-4 text-amber-500" />
                    <span>核心活性成分 (Ingredients)</span>
                  </h4>
                  <p className="text-xs text-slate-600 font-medium">
                    維他命 B 群 (Vitamin B Complex)、綠茶萃取物 (Green Tea Extract) 及多種抗氧化劑與必需營養素。
                  </p>
                </div>

                {/* 使用方法 3 Steps */}
                <div>
                  <h4 className="text-xs font-extrabold text-slate-900 mb-3 uppercase tracking-wider">
                    三種使用方法 (Directions)
                  </h4>
                  <div className="grid grid-cols-1 sm:grid-cols-3 gap-3">
                    <div className="p-3.5 bg-amber-50 rounded-xl border border-amber-200">
                      <span className="inline-block bg-amber-400 text-slate-950 text-[10px] font-black px-2 py-0.5 rounded mb-1.5">
                        方法 1 (最佳效果)
                      </span>
                      <h5 className="text-xs font-bold text-slate-900 mb-1">飲酒前 20 分鐘貼上</h5>
                      <p className="text-[11px] text-slate-600 leading-snug">
                        貼於無毛髮手臂或肩頸，持續貼上至少 8 小時，緩慢吸收預防宿醉。
                      </p>
                    </div>

                    <div className="p-3.5 bg-slate-50 rounded-xl border border-slate-200">
                      <span className="inline-block bg-slate-200 text-slate-800 text-[10px] font-black px-2 py-0.5 rounded mb-1.5">
                        方法 2
                      </span>
                      <h5 className="text-xs font-bold text-slate-900 mb-1">酒後宿醉貼上</h5>
                      <p className="text-[11px] text-slate-600 leading-snug">
                        酒醒後若感覺頭疼不適，貼上可迅速減輕症狀並回復精神。
                      </p>
                    </div>

                    <div className="p-3.5 bg-slate-50 rounded-xl border border-slate-200">
                      <span className="inline-block bg-slate-200 text-slate-800 text-[10px] font-black px-2 py-0.5 rounded mb-1.5">
                        方法 3
                      </span>
                      <h5 className="text-xs font-bold text-slate-900 mb-1">飲酒期間貼上</h5>
                      <p className="text-[11px] text-slate-600 leading-snug">
                        飲酒中途貼上，同樣能發揮保護功效，抵禦過量酒精負擔。
                      </p>
                    </div>
                  </div>
                  <p className="text-[11px] text-slate-400 mt-2 italic">
                    * 貼劑效用可持續 24 小時，但不建議持續使用超過 24 小時。
                  </p>
                </div>

                {/* 使用須知 */}
                <div className="border-t border-slate-100 pt-4 text-[11px] text-slate-500 space-y-1">
                  <p className="font-bold text-slate-700">⚠️ 使用須知 (Cautions):</p>
                  <p>• 本產品僅供外用。敏感性皮膚使用者，請先諮詢醫生意見後方可使用。</p>
                  <p>• 懷孕期間或哺乳期不建議使用。本產品不適用於診斷、治療或預防任何疾病。</p>
                </div>

                {/* 前往門市購買按鈕 */}
                <div className="pt-2">
                  <Link 
                    href="/retail-network"
                    className="inline-flex items-center justify-center w-full sm:w-auto space-x-2 bg-slate-900 hover:bg-amber-400 hover:text-slate-950 text-white text-xs font-black px-8 py-4 rounded-xl transition-all shadow-md"
                  >
                    <Store className="w-4 h-4" />
                    <span>尋找全港莎莎及門市購買據點</span>
                  </Link>
                </div>

              </div>

            </div>
          </section>
        )}

        {/* 2. 即將推出新品預告 (Coming Soon) */}
        {(activeTab === 'all' || activeTab === 'coming') && (
          <section className="space-y-8">
            <div className="flex flex-col sm:flex-row sm:items-end justify-between border-b border-slate-200 pb-4">
              <div>
                <span className="text-xs font-black text-amber-600 uppercase tracking-wider">
                  NEW LINEUP
                </span>
                <h2 className="text-2xl sm:text-3xl font-black text-slate-900 mt-1">
                  即將推出全新貼片系列
                </h2>
              </div>
              <p className="text-xs text-slate-500 mt-2 sm:mt-0">
                專為日常精力補充與肌膚美容打造的全新透皮技術產品
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              
              {/* 新品 1: 能量貼 (Energy Boost Patch) */}
              <div className="bg-white rounded-3xl border border-slate-200/80 shadow-sm overflow-hidden flex flex-col justify-between group hover:border-amber-400 transition-all">
                <div className="p-8">
                  <div className="flex items-center justify-between mb-4">
                    <span className="bg-amber-100 text-amber-900 font-extrabold text-[10px] px-3 py-1 rounded-full uppercase tracking-wider">
                      COMING SOON 敬請期待
                    </span>
                    <div className="w-10 h-10 bg-amber-400/20 text-amber-600 rounded-xl flex items-center justify-center">
                      <Zap className="w-5 h-5" />
                    </div>
                  </div>

                  <h3 className="text-2xl font-black text-slate-900 mb-1">
                    能量貼 <span className="text-sm font-bold text-slate-400">ENERGY BOOST PATCH</span>
                  </h3>
                  <p className="text-xs font-bold text-amber-600 mb-4">
                    提神醒腦 ‧ 擺脫疲憊 ‧ 專注力提升
                  </p>

                  <p className="text-slate-600 text-xs leading-relaxed mb-6">
                    專為加班熬夜族、學生及運動健身人士設計。透過透皮緩釋技術，持續穩定釋放天然提神成分，避免傳統提神飲料帶來的血糖驟升骤降與胃部不適。
                  </p>

                  <div className="space-y-2 bg-slate-50 p-4 rounded-xl border border-slate-100 text-xs">
                    <p className="font-bold text-slate-800">💡 預計核心成分：</p>
                    <p className="text-slate-600">• 維他命 B12 + B6 複合配方</p>
                    <p className="text-slate-600">• 天然綠茶咖啡因 & 瓜拿納提取物</p>
                    <p className="text-slate-600">• 輔酶 Q10 (CoQ10)</p>
                  </div>
                </div>

                <div className="p-6 bg-slate-50 border-t border-slate-100 flex items-center justify-between text-xs">
                  <span className="text-slate-500 font-semibold">預計上市時間：近期登場</span>
                  <span className="text-amber-600 font-black flex items-center space-x-1">
                    <span>密切關注</span>
                    <ChevronRight className="w-4 h-4" />
                  </span>
                </div>
              </div>

              {/* 新品 2: 美顏貼 (Beauty Collagen Patch) */}
              <div className="bg-white rounded-3xl border border-slate-200/80 shadow-sm overflow-hidden flex flex-col justify-between group hover:border-pink-300 transition-all">
                <div className="p-8">
                  <div className="flex items-center justify-between mb-4">
                    <span className="bg-pink-100 text-pink-900 font-extrabold text-[10px] px-3 py-1 rounded-full uppercase tracking-wider">
                      COMING SOON 敬請期待
                    </span>
                    <div className="w-10 h-10 bg-pink-100 text-pink-600 rounded-xl flex items-center justify-center">
                      <Sparkles className="w-5 h-5" />
                    </div>
                  </div>

                  <h3 className="text-2xl font-black text-slate-900 mb-1">
                    美顏貼 <span className="text-sm font-bold text-slate-400">BEAUTY COLLAGEN PATCH</span>
                  </h3>
                  <p className="text-xs font-bold text-pink-600 mb-4">
                    水潤緊緻 ‧ 抗氧養顏 ‧ 隨身養膚
                  </p>

                  <p className="text-slate-600 text-xs leading-relaxed mb-6">
                    突破傳統口服美容膠原蛋白吸收率低的瓶頸。美顏貼將小分子膠原蛋白與玻尿酸透過皮膚長效滲透，隨時隨地為肌膚補充彈力與水分。
                  </p>

                  <div className="space-y-2 bg-slate-50 p-4 rounded-xl border border-slate-100 text-xs">
                    <p className="font-bold text-slate-800">💡 預計核心成分：</p>
                    <p className="text-slate-600">• 水解膠原蛋白 (Hydrolyzed Collagen)</p>
                    <p className="text-slate-600">• 玻尿酸 (Hyaluronic Acid) & 維他命 C</p>
                    <p className="text-slate-600">• 谷胱甘肽 (Glutathione) 抗氧化因子</p>
                  </div>
                </div>

                <div className="p-6 bg-slate-50 border-t border-slate-100 flex items-center justify-between text-xs">
                  <span className="text-slate-500 font-semibold">預計上市時間：近期登場</span>
                  <span className="text-pink-600 font-black flex items-center space-x-1">
                    <span>密切關注</span>
                    <ChevronRight className="w-4 h-4" />
                  </span>
                </div>
              </div>

            </div>
          </section>
        )}

      </main>
    </div>
  );
}