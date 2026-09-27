'use client';

import React, { useState, useMemo } from 'react';
import { 
  Store, 
  MapPin, 
  Phone, 
  Search, 
  Globe, 
  Mail, 
  ExternalLink,
  ChevronRight,
  Sparkles,
  ArrowLeft
} from 'lucide-react';
import Link from 'next/link';

// 門市與線上通路資料數據
const ONLINE_STORES = [
  {
    name: 'Dimples 掂鋪',
    type: '官方指定線上分銷',
    url: '#',
    badge: '網購直送'
  },
  {
    name: 'HKTVmall 香港電視',
    type: '官方旗艦店',
    url: '#',
    badge: '24h 送貨'
  }
];

const KINGS_WINE_STORES = [
  { region: 'hk', district: '中環', name: 'King\'s Wine Cellar 中環店', address: '中環士丹利街 42-44 號萬事利大廈地下', phone: '(852) 2329 3466' },
  { region: 'hk', district: '北角', name: 'King\'s Wine Cellar 北角匯店', address: '北角渣華道 123 號北角匯二期 2 樓 203 號舖', phone: '(852) 2728 5268' },
  { region: 'kl', district: '旺角/大角咀', name: 'King\'s Wine Cellar 奧海城店', address: '旺角海庭道 18 號奧海城 2 期 UG 層 UG02B 鋪', phone: '(852) 2387 8226' },
  { region: 'kl', district: '九龍灣', name: 'King\'s Wine Cellar 德福廣場店', address: '九龍灣偉業街 33 號德福商場 1 期 G87 鋪', phone: '(852) 2728 5088' },
  { region: 'nt', district: '將軍澳', name: 'King\'s Wine Cellar PopCorn 店', address: '將軍澳唐俊街 9 號 PopCorn 2 期 G68 號舖', phone: '(852) 2728 5266' }
];

const SASA_STORES = [
  // 香港區
  { region: 'hk', district: '香港仔', name: '莎莎 利港中心店', address: '香港仔成都道 38 號利港中心地下 G08 及 G10 號舖', phone: '(852) 2580 8811' },
  { region: 'hk', district: '上環', name: '莎莎 信德中心店', address: '上環幹諾道中 168-200 號信德中心 2 樓 234-235 號舖', phone: '(852) 2559 1288' },
  { region: 'hk', district: '中環', name: '莎莎 勵精中心店', address: '皇后大道中 88 號勵精中心地舖 1 號', phone: '(852) 2521 2928' },
  { region: 'hk', district: '銅鑼灣', name: '莎莎 羅素街店', address: '銅鑼灣羅素街 8 號地下及 1 樓', phone: '(852) 2702 0533' },
  { region: 'hk', district: '銅鑼灣', name: '莎莎 皇室堡店', address: '銅鑼灣告士打道 311 號皇室堡 1 樓 118 至 119 號舖', phone: '(852) 2177 3368' },
  { region: 'hk', district: '銅鑼灣', name: '莎莎 金百利店', address: '銅鑼灣紀利佐治街 1 號金百利商場地下 2-3 號舖', phone: '(852) 2711 9268' },
  { region: 'hk', district: '銅鑼灣', name: '莎莎 駱克道店', address: '銅鑼灣駱克道 500 號地下', phone: '-' },
  { region: 'hk', district: '銅鑼灣', name: '莎莎 啟超道店', address: '銅鑼灣啟超道 12 號地下', phone: '-' },
  { region: 'hk', district: '銅鑼灣', name: '莎莎 禮頓中心店', address: '銅鑼灣禮頓道 77 號禮頓中心地下及 2 樓', phone: '(852) 2555 0806' },
  { region: 'hk', district: '灣仔', name: '莎莎 莊士敦道店', address: '灣仔莊士敦道 108 號', phone: '(852) 2146 1333' },
  { region: 'hk', district: '北角', name: '莎莎 新達大廈店', address: '北角英皇道 345 號新達大廈地下 1 及 2 號舖', phone: '(852) 2566 3262' },
  { region: 'hk', district: '鰂魚涌', name: '莎莎 康怡廣場店', address: '鰂魚涌康山道 2 號康怡廣場 1 樓 F35 至 38 號舖', phone: '(852) 2513 1733' },
  { region: 'hk', district: '柴灣', name: '莎莎 新翠商場店', address: '柴灣道 233 號新翠商場 3 樓 312 至 315 號舖', phone: '(852) 2976 5620' },

  // 九龍區
  { region: 'kl', district: '深水埗', name: '莎莎 V Walk 店', address: '深水埗深旺道 28 號 V Walk 地下 G-20 號舖', phone: '(852) 2256 1176' },
  { region: 'kl', district: '深水埗', name: '莎莎 西九龍中心店', address: '深水埗欽州街 37K 號西九龍中心第一層 112A 號舖', phone: '(852) 2657 8336' },
  { region: 'kl', district: '大角咀', name: '莎莎 奧海城店', address: '大角咀奧海城二期 UG 層 UG11 號舖', phone: '(852) 2286 0200' },
  { region: 'kl', district: '黃大仙', name: '莎莎 黃大仙中心店', address: '黃大仙龍翔道 136 號黃大仙中心北館 1 樓', phone: '(852) 2656 2668' },
  { region: 'kl', district: '黃大仙', name: '莎莎 樂富廣場店', address: '黃大仙橫頭磡聯合道 198 號樂富廣場 1 樓 1159 號舖', phone: '(852) 2619 1213' },
  { region: 'kl', district: '鑽石山', name: '莎莎 荷里活廣場店', address: '鑽石山荷李活廣場 3 樓 345-346 號舖', phone: '(852) 2327 2997' },
  { region: 'kl', district: '九龍灣', name: '莎莎 德福廣場店', address: '九龍灣偉業街 33 號德福廣場地下 G36 號舖', phone: '(852) 2750 0002' },
  { region: 'kl', district: '牛頭角', name: '莎莎 淘大商場店', address: '牛頭角道 77 號淘大商場一期 G 層 G59 及 60 號舖', phone: '(852) 2739 8883' },
  { region: 'kl', district: '觀塘', name: '莎莎 APM 店', address: '觀塘觀塘道 418 號 apm 1 樓 L1-2, L1-6 號舖', phone: '(852) 2304 7285' },
  { region: 'kl', district: '油塘', name: '莎莎 大本型店', address: '油塘高超道 38 號大本型 1 樓 124 號舖', phone: '(852) 2799 2118' },
  { region: 'kl', district: '九龍城', name: '莎莎 九龍城廣場店', address: '九龍城賈炳達道 128 號九龍城廣場 UG 層 UG20 至 22 及 UG25A 號舖', phone: '(852) 2380 9912' },
  { region: 'kl', district: '新蒲崗', name: '莎莎 Mikiki 店', address: '新蒲崗太子道東 638 號 Mikiki 地下 G17 及 18 號舖', phone: '(852) 2750 9018' },
  { region: 'kl', district: '旺角', name: '莎莎 雅蘭中心店', address: '旺角彌敦道 625 及 639 號雅蘭中心地下 G15 至 19 號及 1 樓 104 號舖', phone: '(852) 2142 3330' },
  { region: 'kl', district: '旺角', name: '莎莎 西洋菜南街店', address: '旺角西洋菜南街 160-162 號地下', phone: '(852) 2394 9868' },
  { region: 'kl', district: '旺角', name: '莎莎 好望角大廈店', address: '旺角西洋菜南街 13-19 號好望角大廈地下 17 號舖', phone: '(852) 2474 6368' },
  { region: 'kl', district: '旺角', name: '莎莎 新世紀廣場店', address: '旺角新世紀廣場 1 樓 148 號舖', phone: '(852) 2409 8282' },
  { region: 'kl', district: '旺角', name: '莎莎 始創中心店', address: '旺角彌敦道 750 號始創中心地下 G12 至 16 號舖', phone: '(852) 2177 8111' },
  { region: 'kl', district: '佐敦', name: '莎莎 百誠大廈店', address: '佐敦佐敦道 31-37 號百誠大廈地下 A4 號舖', phone: '(852) 2385 0428' },
  { region: 'kl', district: '尖沙咀', name: '莎莎 彌敦道店', address: '尖沙咀彌敦道 86-88A 地下', phone: '(852) 2311 7118' },
  { region: 'kl', district: '尖沙咀', name: '莎莎 發利大廈店', address: '尖沙咀加拿芬道 33-35 號發利大廈地下', phone: '(852) 2556 0011' },
  { region: 'kl', district: '尖沙咀', name: '莎莎 重慶站店', address: '尖沙咀彌敦道 36-44 號重慶站 1 樓', phone: '(852) 2802 2286' },
  { region: 'kl', district: '尖沙咀', name: '莎莎 加連威老道店', address: '尖沙咀加連威老道地下 25A 號舖', phone: '(852) 2366 9383' },
  { region: 'kl', district: '尖沙咀', name: '莎莎 新港中心店', address: '尖沙咀廣東道 30 號新港中心 1 樓 111 至 112 號舖', phone: '(852) 2375 2998' },
  { region: 'kl', district: '紅磡', name: '莎莎 黃埔天地聚寶坊店', address: '紅磡黃埔花園聚寶坊地下 G19 及 20 號舖', phone: '(852) 2368 1681' },

  // 新界區
  { region: 'nt', district: '沙田', name: '莎莎 沙田中心店', address: '沙田橫壆街 2-16 號沙田中心 3 樓 32B 號舖', phone: '(852) 2608 2020' },
  { region: 'nt', district: '沙田', name: '莎莎 第一城店', address: '沙田銀城街 1 號置富第一城地下 G18B， G19-20 及 G24A4 號舖', phone: '(852) 2635 1300' },
  { region: 'nt', district: '沙田', name: '莎莎 新城市廣場店', address: '沙田正街 18 號新城市廣場一期 3 樓 357 號舖', phone: '(852) 2688 0772' },
  { region: 'nt', district: '馬鞍山', name: '莎莎 新港城中心店', address: '馬鞍山新港城中心 2 樓 2311-12 號舖', phone: '(852) 2642 3866' },
  { region: 'nt', district: '大埔', name: '莎莎 新達廣場店', address: '大埔南運路 9 號新達廣場 1 樓 A05 號舖', phone: '(852) 2615 0035' },
  { region: 'nt', district: '大埔', name: '莎莎 大埔超級城店', address: '大埔安邦路 3 號大埔超級城 C 區 2 樓 577 至 578 號舖', phone: '(852) 2660 0003' },
  { region: 'nt', district: '大埔', name: '莎莎 太和廣場店', address: '太和路 12 號太和廣場（東翼）2 樓 209 及 210 號舖', phone: '(852) 2638 1066' },
  { region: 'nt', district: '上水', name: '莎莎 新康街店', address: '上水新康街 72 號地下', phone: '(852) 2470 2611' },
  { region: 'nt', district: '上水', name: '莎莎 新都廣場店', address: '上水龍運街 8 號新都廣場 1 樓 104 及 105 號舖', phone: '(852) 2657 9866' },
  { region: 'nt', district: '上水', name: '莎莎 上水廣場店', address: '上水龍琛路 39 號上水廣場 4 樓 409A 及 408B 號舖', phone: '(852) 2671 9355' },
  { region: 'nt', district: '將軍澳', name: '莎莎 康城店', address: '將軍澳康城路 1 號康城 3 樓 327A 號舖', phone: '(852) 2328 2130' },
  { region: 'nt', district: '將軍澳', name: '莎莎 東港城店', address: '將軍澳重華路 8 號東港城 1 樓 136 至 137 號舖', phone: '(852) 2617 1112' },
  { region: 'nt', district: '將軍澳', name: '莎莎 新都城中心店', address: '將軍澳欣景道 8 號新都城中心二期 1136 至 1138 號舖', phone: '(852) 2408 6811' },
  { region: 'nt', district: '將軍澳', name: '莎莎 PopCorn 店', address: '將軍澳唐俊街 9 號 PopCorn 2 期 1 樓 F108-110 號舖', phone: '(852) 2752 1431' },
  { region: 'nt', district: '將軍澳', name: '莎莎 都會駅店', address: '將軍澳景嶺路 8 號都會駅 2 樓 L2-034 號舖', phone: '(852) 2776 0003' },
  { region: 'nt', district: '天水圍', name: '莎莎 T Town South 店', address: '天水圍天華路 30 號 T Town South 1 樓 S106 舖', phone: '(852) 2661 2278' },
  { region: 'nt', district: '天水圍', name: '莎莎 嘉湖店', address: '天水圍天恩路 18 號嘉湖二期地下 G12 號舖', phone: '(852) 2448 2217' },
  { region: 'nt', district: '元朗', name: '莎莎 形點店', address: '元朗朗日路 8 號形點 2 期 1 樓 A111 號舖', phone: '(852) 2327 4800' },
  { region: 'nt', district: '元朗', name: '莎莎 青山公路店', address: '元朗青山公路 118 號地下 1 號舖', phone: '(852) 2606 0298' },
  { region: 'nt', district: '元朗', name: '莎莎 元朗廣場店', address: '元朗青山公路 249-251 號元朗廣場 G/F 001-002 及 064 號舖', phone: '(852) 2336 2381' },
  { region: 'nt', district: '屯門', name: '莎莎 屯門市廣場店', address: '屯門屯成街 1 號屯門市廣場一期 2 樓 2057 至 2060 號舖', phone: '(852) 2246 7118' },
  { region: 'nt', district: '屯門', name: '莎莎 錦薈坊店', address: '屯門屯隆街 1 號錦薈坊 3 樓 311 至 313 號舖', phone: '(852) 2449 3312' },
  { region: 'nt', district: '屯門', name: '莎莎 V City 店', address: '屯門鄉事會路 83 號 V City 地下 G11 號舖', phone: '(852) 2628 7781' },
  { region: 'nt', district: '葵芳', name: '莎莎 新都會廣場店', address: '葵芳興芳路 223 號新都會廣場 2 樓 219 號舖', phone: '(852) 2461 0005' },
  { region: 'nt', district: '荃灣', name: '莎莎 悅來坊店', address: '荃灣荃華街 3 號悅來酒店悅來坊地下 G21 至 23 號舖', phone: '(852) 2363 9000' },
  { region: 'nt', district: '荃灣', name: '莎莎 荃灣廣場店', address: '荃灣大壩街 4-30 號荃灣廣場 2 樓 257-258 號舖', phone: '(852) 2786 3833' },
  { region: 'nt', district: '荃灣', name: '莎莎 如心廣場店', address: '荃灣楊屋道 8 號如心廣場一期一樓 117 號舖', phone: '(852) 2554 5022' },
  { region: 'nt', district: '荃灣', name: '莎莎 眾安街店', address: '荃灣眾安街 51 號地下', phone: '(852) 2408 8889' },
  { region: 'nt', district: '青衣', name: '莎莎 青衣城店', address: '青衣青荃路 33 號青衣城 1 期 2 樓 215 號舖', phone: '(852) 2436 2423' },
  { region: 'nt', district: '東涌', name: '莎莎 東薈城店', address: '東涌達東路 20 號東薈城 1 樓 116 號舖', phone: '(852) 2109 3898' }
];

export default function RetailNetworkPage() {
  const [selectedRegion, setSelectedRegion] = useState<'all' | 'hk' | 'kl' | 'nt'>('all');
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedBrand, setSelectedBrand] = useState<'all' | 'sasa' | 'kings'>('all');

  // 合併門市資料並進行即時篩選
  const filteredPhysicalStores = useMemo(() => {
    let stores = [];
    if (selectedBrand === 'all' || selectedBrand === 'sasa') {
      stores.push(...SASA_STORES.map(s => ({ ...s, brand: 'SaSa 莎莎' })));
    }
    if (selectedBrand === 'all' || selectedBrand === 'kings') {
      stores.push(...KINGS_WINE_STORES.map(s => ({ ...s, brand: 'King\'s Wine Cellar' })));
    }

    return stores.filter((store) => {
      const matchRegion = selectedRegion === 'all' || store.region === selectedRegion;
      const matchSearch = 
        store.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
        store.address.toLowerCase().includes(searchQuery.toLowerCase()) ||
        store.district.toLowerCase().includes(searchQuery.toLowerCase()) ||
        store.phone.includes(searchQuery);

      return matchRegion && matchSearch;
    });
  }, [selectedRegion, searchQuery, selectedBrand]);

  return (
    <div className="min-h-screen bg-slate-50 text-slate-900 font-sans selection:bg-amber-300">
      
      {/* 頂部導覽 */}
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
        </div>
      </header>

      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        
        {/* Title Section */}
        <div className="text-center max-w-3xl mx-auto mb-12">
          <span className="inline-block bg-amber-100 text-amber-900 font-extrabold text-xs px-3 py-1 rounded-full uppercase tracking-wider mb-3">
            WHERE TO BUY
          </span>
          <h1 className="text-3xl sm:text-5xl font-black text-slate-900 mb-4">
            銷售網絡與合作據點
          </h1>
          <p className="text-slate-600 text-base">
            PATCH ON + 產品已正式進駐各大指定線上平台、莎莎 SaSa 及 King's Wine Cellar 全港門市。
          </p>
        </div>

        {/* 1. 線上分銷商戶 Section */}
        <section className="mb-16">
          <h2 className="text-xl font-bold text-slate-900 mb-6 flex items-center space-x-2">
            <Globe className="w-5 h-5 text-amber-500" />
            <span>網上分銷商戶 (Online Retailers)</span>
          </h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
            {ONLINE_STORES.map((online, idx) => (
              <div key={idx} className="bg-white p-8 rounded-2xl border border-slate-200/80 shadow-sm hover:shadow-md transition-all flex items-center justify-between">
                <div>
                  <span className="bg-amber-100 text-amber-800 text-xs font-bold px-2.5 py-0.5 rounded mb-2 inline-block">
                    {online.badge}
                  </span>
                  <h3 className="text-2xl font-black text-slate-900">{online.name}</h3>
                  <p className="text-xs text-slate-500 mt-1">{online.type}</p>
                </div>
                <div className="w-12 h-12 bg-slate-100 rounded-full flex items-center justify-center text-slate-600">
                  <ExternalLink className="w-5 h-5" />
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* 2. 實體門市 Search & Filter Section */}
        <section className="mb-12">
          <h2 className="text-xl font-bold text-slate-900 mb-6 flex items-center space-x-2">
            <Store className="w-5 h-5 text-amber-500" />
            <span>實體專賣門市 (Physical Stores)</span>
          </h2>

          {/* 控制面板 */}
          <div className="bg-white p-6 rounded-2xl border border-slate-200/80 shadow-sm space-y-4 md:space-y-0 md:flex md:items-center md:justify-between md:gap-4 mb-8">
            
            {/* 搜尋欄 */}
            <div className="relative flex-1">
              <Search className="w-5 h-5 text-slate-400 absolute left-4 top-1/2 -translate-y-1/2" />
              <input 
                type="text"
                placeholder="搜尋地區、地址或門市名稱..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="w-full pl-12 pr-4 py-3 bg-slate-50 border border-slate-200 rounded-xl text-sm text-slate-900 focus:outline-none focus:ring-2 focus:ring-amber-400"
              />
            </div>

            {/* 品牌篩選 */}
            <div className="flex items-center space-x-2">
              <button 
                onClick={() => setSelectedBrand('all')}
                className={`px-4 py-2.5 rounded-xl text-xs font-bold transition-all ${selectedBrand === 'all' ? 'bg-slate-900 text-white' : 'bg-slate-100 text-slate-600 hover:bg-slate-200'}`}
              >
                全部品牌
              </button>
              <button 
                onClick={() => setSelectedBrand('sasa')}
                className={`px-4 py-2.5 rounded-xl text-xs font-bold transition-all ${selectedBrand === 'sasa' ? 'bg-pink-600 text-white' : 'bg-slate-100 text-slate-600 hover:bg-slate-200'}`}
              >
                莎莎 SaSa
              </button>
              <button 
                onClick={() => setSelectedBrand('kings')}
                className={`px-4 py-2.5 rounded-xl text-xs font-bold transition-all ${selectedBrand === 'kings' ? 'bg-amber-500 text-slate-950' : 'bg-slate-100 text-slate-600 hover:bg-slate-200'}`}
              >
                King's Wine
              </button>
            </div>

            {/* 地區分區按鈕 */}
            <div className="flex items-center space-x-2 border-t md:border-t-0 pt-3 md:pt-0 border-slate-100">
              {[
                { id: 'all', label: '全部區域' },
                { id: 'hk', label: '香港島' },
                { id: 'kl', label: '九龍區' },
                { id: 'nt', label: '新界區' }
              ].map((tab) => (
                <button
                  key={tab.id}
                  onClick={() => setSelectedRegion(tab.id as any)}
                  className={`px-3 py-2 rounded-lg text-xs font-bold transition-all ${selectedRegion === tab.id ? 'bg-amber-400 text-slate-950' : 'text-slate-600 hover:bg-slate-100'}`}
                >
                  {tab.label}
                </button>
              ))}
            </div>

          </div>

          {/* 門市數據清單 */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {filteredPhysicalStores.length > 0 ? (
              filteredPhysicalStores.map((store, idx) => (
                <div key={idx} className="bg-white p-6 rounded-2xl border border-slate-200/80 hover:border-amber-400 transition-all shadow-sm flex flex-col justify-between">
                  <div>
                    <div className="flex items-center justify-between mb-3">
                      <span className={`text-[10px] font-black uppercase px-2.5 py-1 rounded-md ${store.brand.includes('SaSa') ? 'bg-pink-50 text-pink-700 border border-pink-200' : 'bg-amber-50 text-amber-800 border border-amber-200'}`}>
                        {store.brand}
                      </span>
                      <span className="text-xs font-bold text-slate-400 bg-slate-100 px-2 py-0.5 rounded">
                        {store.district}
                      </span>
                    </div>

                    <h3 className="text-lg font-bold text-slate-900 mb-2">
                      {store.name}
                    </h3>

                    <p className="text-xs text-slate-600 mb-4 flex items-start space-x-1.5 leading-relaxed">
                      <MapPin className="w-4 h-4 text-slate-400 flex-shrink-0 mt-0.5" />
                      <span>{store.address}</span>
                    </p>
                  </div>

                  {store.phone !== '-' && (
                    <div className="pt-3 border-t border-slate-100 flex items-center text-xs font-semibold text-slate-500 space-x-1">
                      <Phone className="w-3.5 h-3.5 text-slate-400" />
                      <span>{store.phone}</span>
                    </div>
                  )}
                </div>
              ))
            ) : (
              <div className="col-span-full py-12 text-center text-slate-400 bg-white rounded-2xl border border-dashed border-slate-200">
                找不到符合條件的門市，請嘗試搜尋其他關鍵字。
              </div>
            )}
          </div>
        </section>

        {/* 3. B2B 批發洽詢 */}
        <section className="bg-slate-900 text-white rounded-3xl p-8 sm:p-12 mt-16 flex flex-col md:flex-row items-center justify-between gap-8">
          <div>
            <h3 className="text-2xl font-bold mb-2">成為 PATCH ON + 經銷夥伴？</h3>
            <p className="text-slate-400 text-sm max-w-xl">
              我們非常歡迎藥局、健美連鎖門市、診所及健身中心加入分銷網絡。
            </p>
          </div>
          <a 
            href="mailto:partner@patchon.com"
            className="whitespace-nowrap bg-amber-400 hover:bg-amber-300 text-slate-950 font-bold px-8 py-4 rounded-full text-sm transition-all shadow-lg shadow-amber-400/20 flex items-center space-x-2"
          >
            <Mail className="w-4 h-4" />
            <span>聯繫分銷團隊</span>
          </a>
        </section>

      </main>
    </div>
  );
}