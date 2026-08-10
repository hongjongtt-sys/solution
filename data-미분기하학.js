window.SUBJECTS = window.SUBJECTS || {};

window.SUBJECTS['미분기하학'] = {
  label: '미분기하학',
  categories: [
    { id:'curve',  name:'곡선론',          color:'#8a5a2d', light:'#f7f0e6' },
    { id:'fund',   name:'곡면의 기본형식',  color:'#2d6b8a', light:'#e6f2f7' },
    { id:'gauss',  name:'가우스·측지곡률',  color:'#4a7a2d', light:'#eef7e6' }
  ],
  freqGroups: [
    {
      id:'curve', name:'곡선론 — 프레네 프레임·곡률·비틀림률', stars:'★★★★★★', count:13, color:'#6b4420',
      desc:'단위속력곡선의 곡률·비틀림률, 프레네 공식, 새로운 곡선의 길이·곡률 계산',
      problems:['2014a11','2015a7','2016a6','2017a8','2018a6','2019a6','2020a3','2021a4','2022a9','2023a3','2024a4','2025b2','2026a4']
    },
    {
      id:'gauss', name:'가우스곡률·측지곡률·가우스-보네', stars:'★★★★★', count:7, color:'#345a1a',
      desc:'곡면 위 곡선의 측지곡률·법곡률, 가우스-보네 정리, 전곡률 적분',
      problems:['2014a12','2016b5','2017b5','2021b10','2023b9','2024b7','2026b11']
    },
    {
      id:'fund', name:'곡면의 제1·2기본형식 — 주곡률·법곡률', stars:'★★★★', count:6, color:'#1a4a5a',
      desc:'접평면, 주곡률, 법곡률, 가우스곡률·평균곡률 계산',
      problems:['2015b3','2018b5','2019b5','2020b8','2022b2','2025a9']
    }
  ],
  problems: [

// ───────────────────────────────────────
// 2014
// ───────────────────────────────────────
{
  id:'2014a11', year:2014, type:'전공A', cat:'curve', pts:2,
  title:'주법벡터 적분으로 정의된 곡선 β의 κ_β+τ_β',
  problem:`3차원 유클리드 공간 $\\mathbb{R}^3$에서 비틀림률(열률, 꼬임률, torsion)과 곡률(curvature)이 각각 상수 $\\tau,\\ 1$인 단위속력 곡선 $\\alpha$에 대하여, 곡선 $\\beta$를 다음과 같이 정의하자.

$$\\beta(s)=\\int_0^s \\boldsymbol{N}(t)\\,dt$$

여기서 $\\boldsymbol{N}(t)$는 곡선 $\\alpha$의 주법벡터장(단위주법벡터장, principal normal vector field)이다. 곡선 $\\beta$의 곡률과 비틀림률을 각각 $\\kappa_\\beta(>0),\\ \\tau_\\beta$라 할 때, $\\kappa_\\beta+\\tau_\\beta$의 값을 구하시오.`,
  steps:[
    {num:'Step 1', title:'β\'와 β\'\'을 프레네 공식으로 전개',
     body:`$\\beta'(s)=\\boldsymbol{N}(s)$이므로 $\\beta$도 단위속력곡선.

프레네 공식 ① ($\\kappa=1,\\ \\tau$는 상수): $\\boldsymbol{N}'=-\\kappa\\boldsymbol{T}+\\tau\\boldsymbol{B}=-\\boldsymbol{T}+\\tau\\boldsymbol{B}$이므로:

$$\\beta''(s)=\\boldsymbol{N}'(s)=-\\boldsymbol{T}(s)+\\tau\\boldsymbol{B}(s)$$`},
    {num:'Step 2', title:'κ_β 계산',
     body:`$\\beta$는 단위속력이므로 $\\kappa_\\beta=|\\beta''(s)|$:

$$\\kappa_\\beta=|-\\boldsymbol{T}+\\tau\\boldsymbol{B}|=\\sqrt{1+\\tau^2}$$

($\\boldsymbol{T}\\perp\\boldsymbol{B}$, 둘 다 단위벡터이므로)`},
    {num:'Step 3', title:'β\'\'\'을 구하고 τ_β 계산',
     body:`$$\\beta'''(s)=-\\boldsymbol{T}'+\\tau\\boldsymbol{B}'=-\\kappa\\boldsymbol{N}+\\tau(-\\tau\\boldsymbol{N})=-(1+\\tau^2)\\boldsymbol{N}$$

단위속력곡선의 비틀림률 공식 ②: $\\tau_\\beta=\\dfrac{(\\beta'\\times\\beta'')\\cdot\\beta'''}{|\\beta''|^2}$.

$\\beta'\\times\\beta''=\\boldsymbol{N}\\times(-\\boldsymbol{T}+\\tau\\boldsymbol{B})=-(\\boldsymbol{N}\\times\\boldsymbol{T})+\\tau(\\boldsymbol{N}\\times\\boldsymbol{B})=\\boldsymbol{B}+\\tau\\boldsymbol{T}$

($\\boldsymbol{N}\\times\\boldsymbol{T}=-\\boldsymbol{B},\\ \\boldsymbol{N}\\times\\boldsymbol{B}=\\boldsymbol{T}$)

$(\\beta'\\times\\beta'')\\cdot\\beta'''=(\\boldsymbol{B}+\\tau\\boldsymbol{T})\\cdot(-(1+\\tau^2)\\boldsymbol{N})=0$

($\\boldsymbol{N}\\perp\\boldsymbol{B},\\ \\boldsymbol{N}\\perp\\boldsymbol{T}$이므로)

따라서 $\\tau_\\beta=0$.`},
    {num:'Step 4', title:'최종 계산',
     body:`$$\\kappa_\\beta+\\tau_\\beta=\\sqrt{1+\\tau^2}+0=\\sqrt{1+\\tau^2}$$`}
  ],
  answer:'$\\sqrt{1+\\tau^2}$',
  footnotes:[
    {n:'①',text:'프레네-세레 공식: T\'=κN, N\'=-κT+τB, B\'=-τN. (T,N,B는 단위접선·주법선·종법선벡터)'},
    {n:'②',text:'단위속력곡선의 비틀림률: τ=(r\'×r\'\')·r\'\'\'/|r\'\'|² (일반 곡선은 분모가 |r\'×r\'\'|²).'}
  ]
},
{
  id:'2014a12', year:2014, type:'전공A', cat:'gauss', pts:2,
  title:'가우스-보네 정리로 회전포물면 위 영역의 전측지곡률',
  problem:`3차원 유클리드 공간 $\\mathbb{R}^3$에 놓인 곡면 $M:X(u,v)=\\left(u\\cos v,\\,u\\sin v,\\,\\dfrac12u^2\\right)\\ (u\\ge0,\\ 0\\le v\\le2\\pi)$에 포함되는 영역 $S=\\{X(u,v)\\mid0\\le u\\le1,\\ 0\\le v\\le\\pi\\}$가 있다. $S$의 경계(boundary) $\\partial S$의 측지곡률을 $\\kappa_g$라 할 때, $\\partial S$의 측지곡률합(전측지곡률, total geodesic curvature) $\\displaystyle\\int_{\\partial S}\\kappa_g\\,ds$의 절댓값을 구하시오. (단, $s$는 호의 길이를 나타내는 매개변수이다.)`,
  diagram:`<svg viewBox="0 0 300 230" xmlns="http://www.w3.org/2000/svg" style="font-family:'Noto Sans KR',sans-serif">
    <text x="150" y="18" font-size="11" fill="var(--t2)" text-anchor="middle">매개변수 영역 (u,v) — S = {0≤u≤1, 0≤v≤π}</text>
    <line x1="60" y1="40" x2="220" y2="40" stroke="var(--acc)" stroke-width="2.2"/>
    <line x1="220" y1="40" x2="220" y2="190" stroke="var(--t1)" stroke-width="2.2"/>
    <line x1="220" y1="190" x2="60" y2="190" stroke="var(--acc)" stroke-width="2.2"/>
    <line x1="60" y1="40" x2="60" y2="190" stroke="var(--t3)" stroke-width="2.2" stroke-dasharray="1 5" stroke-linecap="round"/>
    <polygon points="145,40 137,36 137,44" fill="var(--acc)"/>
    <polygon points="220,120 216,112 224,112" fill="var(--t1)"/>
    <polygon points="140,190 148,186 148,194" fill="var(--acc)"/>
    <text x="130" y="34" font-size="12" fill="var(--acc)" text-anchor="middle">v=0 (자오선 C₁)</text>
    <text x="255" y="118" font-size="12" fill="var(--t1)" text-anchor="middle">u=1 (호 C₂)</text>
    <text x="130" y="205" font-size="12" fill="var(--acc)" text-anchor="middle">v=π (자오선 C₃)</text>
    <text x="30" y="118" font-size="11" fill="var(--t3)" text-anchor="middle">u=0</text>
    <text x="30" y="132" font-size="9" fill="var(--t3)" text-anchor="middle">(꼭짓점</text>
    <text x="30" y="143" font-size="9" fill="var(--t3)" text-anchor="middle">한 점)</text>
    <circle cx="60" cy="40" r="3" fill="var(--t2)"/>
    <circle cx="60" cy="190" r="3" fill="var(--t2)"/>
    <circle cx="220" cy="40" r="3" fill="var(--t1)"/>
    <circle cx="220" cy="190" r="3" fill="var(--t1)"/>
    <text x="200" y="35" font-size="10" fill="var(--t3)">u=1,v=0</text>
    <text x="196" y="205" font-size="10" fill="var(--t3)">u=1,v=π</text>
  </svg>`,
  steps:[
    {num:'Step 1', title:'경계의 구조 파악',
     body:`$u=0$은 곡면의 꼭짓점(원점) 하나로 축퇴되므로, $\\partial S$는 $v=0$과 $v=\\pi$의 자오선 두 개(원점을 지나며 매끄럽게 이어짐, 실제로는 하나의 포물선)와 $u=1$의 호(반원)로 이루어집니다.

두 자오선은 원점에서 매끄럽게 연결되므로 실제 모서리(꼭짓점)는 $u=1$에서 자오선과 호가 만나는 **두 점**뿐입니다.`},
    {num:'Step 2', title:'가우스곡률 K(u) 계산',
     body:`$X_u=(\\cos v,\\sin v,u),\\ X_v=(-u\\sin v,u\\cos v,0)$에서 $E=1+u^2,\\ F=0,\\ G=u^2$.

$X_u\\times X_v=(-u^2\\cos v,-u^2\\sin v,u)$이고 단위법선은 이를 $u\\sqrt{u^2+1}$로 나눈 것.

$e=\\dfrac1{\\sqrt{u^2+1}},\\ f=0,\\ g=\\dfrac{u^2}{\\sqrt{u^2+1}}$이므로:

$$K(u)=\\frac{eg-f^2}{EG-F^2}=\\frac{u^2/(u^2+1)}{u^2(1+u^2)}=\\frac1{(1+u^2)^2}$$`},
    {num:'Step 3', title:'∬K dA 계산',
     body:`$dA=\\sqrt{EG-F^2}\\,du\\,dv=u\\sqrt{1+u^2}\\,du\\,dv$이므로:

$$\\iint_SK\\,dA=\\int_0^\\pi dv\\int_0^1\\frac{u}{(1+u^2)^{3/2}}du=\\pi\\left[1-\\frac1{\\sqrt2}\\right]$$

(치환 $w=1+u^2$로 직접 계산.)`},
    {num:'Step 4', title:'가우스-보네 정리 적용',
     body:`두 모서리에서 자오선과 위선(원)은 항상 직교 ①하므로 외각은 각각 $\\pi/2$, 합은 $\\pi$.

가우스-보네 정리 ②: $\\displaystyle\\iint_SK\\,dA+\\oint_{\\partial S}\\kappa_g\\,ds+\\sum\\theta_i=2\\pi$

$$\\oint_{\\partial S}\\kappa_g\\,ds=2\\pi-\\pi-\\pi\\left(1-\\frac1{\\sqrt2}\\right)=\\frac{\\pi}{\\sqrt2}$$`}
  ],
  answer:'$\\dfrac{\\pi}{\\sqrt2}=\\dfrac{\\sqrt2}{2}\\pi$',
  footnotes:[
    {n:'①',text:'회전면에서 자오선(meridian)과 위선(parallel)은 항상 서로 직교 (F=0인 정칙 매개변수화의 표준적 성질).'},
    {n:'②',text:'가우스-보네 정리: 원판형(단순연결) 영역 S에서 ∬K dA + ∮κ_g ds + Σ외각 = 2π.'}
  ]
},

// ───────────────────────────────────────
// 2015
// ───────────────────────────────────────
{
  id:'2015a7', year:2015, type:'전공A', cat:'curve', pts:2,
  title:'두 곡선이 합동이 되는 a,b: 속력·곡률 일치로 결정',
  problem:`좌표공간 $\\mathbb{R}^3$에서 두 곡선 $\\alpha(t)=(2t,\\,t^2,\\,at^3),\\ \\beta(t)=(t,\\,bt,\\,t^2)$이 합동이 되도록 하는 두 상수 $a,\\,b$에 대하여, $a^2+b^2$의 값을 구하시오.`,
  steps:[
    {num:'Step 1', title:'속력이 일치해야 함',
     body:`합동(강체운동으로 대응)이려면 대응하는 매개변수 $t$에서 속력이 같아야 합니다 ①.

$|\\alpha'(t)|^2=4+4t^2+9a^2t^4,\\quad|\\beta'(t)|^2=1+b^2+4t^2$

$t^4$항 비교: $9a^2=0\\Rightarrow a=0$. 상수항 비교: $4=1+b^2\\Rightarrow b^2=3$.`},
    {num:'Step 2', title:'a=0일 때 β의 비틀림률이 항상 0임을 확인',
     body:`$\\beta'''=(0,0,0)$이므로 임의의 $b$에 대해 $\\tau_\\beta\\equiv0$ (평면곡선, $y=bx$ 평면 위에 놓임).

합동이려면 $\\alpha$도 $\\tau_\\alpha\\equiv0$이어야 하는데, $\\alpha'''=(0,0,6a)$이므로 $\\tau_\\alpha=0\\iff a=0$과 일치 ②.`},
    {num:'Step 3', title:'곡률까지 일치하는지 검산',
     body:`$a=0$: $\\kappa_\\alpha(t)=\\dfrac1{2(1+t^2)^{3/2}}$.

$b^2=3$: $\\kappa_\\beta(t)=\\dfrac{|\\beta'\\times\\beta''|}{|\\beta'|^3}=\\dfrac{2\\sqrt{b^2+1}}{(2\\sqrt{1+t^2})^3}=\\dfrac{4}{8(1+t^2)^{3/2}}=\\dfrac1{2(1+t^2)^{3/2}}$

$\\kappa_\\alpha=\\kappa_\\beta$ 확인됨. 두 조건 모두 만족하므로 실제로 합동.`},
    {num:'Step 4', title:'최종 계산',
     body:`$$a^2+b^2=0+3=3$$`}
  ],
  answer:'$3$',
  footnotes:[
    {n:'①',text:'강체운동(합동변환)은 거리를 보존하므로 속력(단위시간당 이동거리)도 보존한다.'},
    {n:'②',text:'합동인 곡선은 (대응하는 매개변수에서) 곡률과 비틀림률 함수가 일치해야 한다 (곡선론의 기본정리).'}
  ]
},
{
  id:'2015b3', year:2015, type:'전공B', cat:'fund', pts:5,
  title:'회전면의 주곡률과 법곡률 ab 값',
  problem:`곡면 $M=\\{(x,y,z)\\in\\mathbb{R}^3\\mid4x=(y^2+z^2)^2\\}$ 위의 점 $p=\\left(\\dfrac14u^4,\\,u,\\,0\\right)\\,(u>0)$에서의 접평면(tangent plane)을 $T_p(M)=\\{\\mathbf{v}_p\\in\\mathbb{R}^3\\mid\\mathbf{v}_p$는 $p$에서의 곡면 $M$의 접벡터$\\}$라 하고 이 점에서의 주곡률(principal curvature)을 각각 $k_1(u),\\,k_2(u)$라 하자. 또, $T_p(M)$에 속하는 두 개의 단위접벡터(unit tangent vector) $\\mathbf{w}_p$와 $(0,0,1)_p$가 이루는 각이 $\\dfrac\\pi6$이라고 하자. 점 $p$에서 곡면 $M$의 가우스 곡률 $K(u)$를 풀이 과정과 함께 쓰고, $\\mathbf{w}_p$ 방향으로의 법곡률(normal curvature) $k(\\mathbf{w}_p)$를 $ak_1(u)+bk_2(u)$ ($a,b$는 상수)로 나타낼 때 $ab$의 값을 풀이 과정과 함께 쓰시오.`,
  steps:[
    {num:'Step 1', title:'회전면으로 매개변수화',
     body:`$4x=(y^2+z^2)^2$은 $x$축에 대한 회전면이므로 $r^2=y^2+z^2$, $x=r^4/4$. $X(r,\\theta)=(r^4/4,\\,r\\cos\\theta,\\,r\\sin\\theta)$로 놓으면 $p$는 $r=u,\\theta=0$에 대응.

$f(r)=r^4/4$, $f'(r)=r^3,\\ f''(r)=3r^2$.`},
    {num:'Step 2', title:'주곡률 공식 적용',
     body:`회전면(profile $x=f(r)$) 표준 공식 ①: $k_r=\\dfrac{f''}{(1+f'^2)^{3/2}},\\ k_\\theta=\\dfrac{f'}{r\\sqrt{1+f'^2}}$이고, $F=0$이므로 이 두 방향이 바로 주방향.

$$k_1(u)=\\frac{3u^2}{(1+u^6)^{3/2}},\\qquad k_2(u)=\\frac{u^2}{\\sqrt{1+u^6}}$$`},
    {num:'Step 3', title:'가우스곡률 K(u)',
     body:`$$K(u)=k_1(u)k_2(u)=\\frac{3u^2}{(1+u^6)^{3/2}}\\cdot\\frac{u^2}{\\sqrt{1+u^6}}=\\frac{3u^4}{(1+u^6)^2}$$`},
    {num:'Step 4', title:'주방향과 (0,0,1)의 관계, 오일러 공식',
     body:`$X_\\theta(u,0)=(0,0,u)$이므로 단위접벡터는 $(0,0,1)$—바로 $k_2$의 주방향과 일치 ②!

$\\mathbf{w}_p$가 $(0,0,1)$(즉 $k_2$방향)과 이루는 각이 $\\pi/6$이므로, $k_1$방향과 이루는 각은 $\\pi/2-\\pi/6=\\pi/3$.

오일러 공식 ③: $k(\\mathbf{w}_p)=k_1\\cos^2\\dfrac\\pi3+k_2\\sin^2\\dfrac\\pi3=\\dfrac14k_1+\\dfrac34k_2$`},
    {num:'Step 5', title:'ab 계산',
     body:`$a=\\dfrac14,\\ b=\\dfrac34$이므로:

$$ab=\\frac14\\times\\frac34=\\frac3{16}$$`}
  ],
  answer:'$K(u)=\\dfrac{3u^4}{(1+u^6)^2}$, $ab=\\dfrac3{16}$',
  footnotes:[
    {n:'①',text:'회전면 X(r,θ)=(f(r),rcosθ,rsinθ)의 자오선방향(r) 주곡률: f\'\'/(1+f\'²)^{3/2}, 위선방향(θ) 주곡률: f\'/(r√(1+f\'²)).'},
    {n:'②',text:'X_θ(u,0)=(0,-usin0,ucos0)=(0,0,u), 크기로 나누면 정확히 (0,0,1) — 계산을 크게 단순화시켜주는 우연.'},
    {n:'③',text:'오일러 공식: 주방향 e1,e2에서 각 φ만큼 회전한 단위접벡터 방향의 법곡률 = k1cos²φ+k2sin²φ.'}
  ]
},

// ───────────────────────────────────────
// 2016
// ───────────────────────────────────────
{
  id:'2016a6', year:2016, type:'전공A', cat:'curve', pts:2,
  title:'곡률로부터 α(t)=γ(t)+γ\'(t)의 길이 계산',
  problem:`3차원 유클리드 공간 $\\mathbb{R}^3$에서 단위속력곡선(unit speed curve) $\\gamma:\\mathbb{R}\\to\\mathbb{R}^3$의 점 $\\gamma(s)$에서의 곡률(curvature) $\\kappa(s)$는 $\\kappa(s)=\\sqrt{s^4+4s^2+3}$이다. 곡선 $\\alpha:\\mathbb{R}\\to\\mathbb{R}^3$을 $\\alpha(t)=\\gamma(t)+\\gamma'(t)$로 정의할 때, $t=0$에서 $t=1$까지 곡선 $\\alpha$의 길이를 구하시오.`,
  steps:[
    {num:'Step 1', title:'α\'(t)를 프레네 공식으로 표현',
     body:`$\\alpha'(t)=\\gamma'(t)+\\gamma''(t)=\\boldsymbol{T}(t)+\\kappa(t)\\boldsymbol{N}(t)$ ①

($\\gamma$가 단위속력이므로 $\\gamma'=\\boldsymbol{T},\\ \\gamma''=\\kappa\\boldsymbol{N}$)`},
    {num:'Step 2', title:'|α\'(t)| 계산',
     body:`$\\boldsymbol{T}\\perp\\boldsymbol{N}$이므로:

$$|\\alpha'(t)|^2=1+\\kappa(t)^2=1+t^4+4t^2+3=t^4+4t^2+4=(t^2+2)^2$$

$$|\\alpha'(t)|=t^2+2$$`},
    {num:'Step 3', title:'길이 적분',
     body:`$$\\int_0^1(t^2+2)\\,dt=\\left[\\frac{t^3}3+2t\\right]_0^1=\\frac13+2=\\frac73$$`}
  ],
  answer:'$\\dfrac73$',
  footnotes:[
    {n:'①',text:'단위속력곡선의 프레네 공식: T\'=κN. 여기서 γ\'=T, γ\'\'=T\'=κN.'}
  ]
},
{
  id:'2016b5', year:2016, type:'전공B', cat:'gauss', pts:4,
  title:'원뿔의 전개도로 측지선의 곡률 구하기',
  problem:`3차원 유클리드 공간에 밑면이 반지름의 길이가 $1$인 원이고 모선의 길이가 $4$인 원뿔이 있다. 이 원뿔의 옆면에 있는 점 $p$와 밑면에 있는 점 $q$는 같은 모선 위에 있고, 선분 $pq$의 길이는 $1$이다. 점 $q$에서 출발하여 원뿔의 옆면을 돌아 점 $p$를 지나는 측지선(geodesic) $\\gamma$에 대하여, 점 $p$에서 원뿔의 옆면의 주곡률(principal curvature)을 각각 $\\kappa_1,\\ \\kappa_2$라 하고, 점 $p$에서 측지선 $\\gamma$의 곡률(curvature)을 $\\kappa$라 하자. $\\kappa_1,\\ \\kappa_2$의 값을 구하고, 이를 이용하여 $\\kappa$의 값을 풀이 과정과 함께 쓰시오.`,
  diagram:`<svg viewBox="0 0 480 270" xmlns="http://www.w3.org/2000/svg" style="font-family:'Noto Sans KR',sans-serif">
    <!-- 왼쪽: 원뿔 개념도 -->
    <polygon points="110,20 40,220 180,220" fill="none" stroke="var(--t2)" stroke-width="1.5"/>
    <ellipse cx="110" cy="220" rx="70" ry="12" fill="none" stroke="var(--t2)" stroke-width="1.5"/>
    <line x1="110" y1="20" x2="162.5" y2="170" stroke="var(--t1)" stroke-width="2"/>
    <path d="M180,220 C120,235 90,190 162.5,170" fill="none" stroke="var(--acc)" stroke-width="1.6" stroke-dasharray="4 3"/>
    <circle cx="180" cy="220" r="3.5" fill="var(--t1)"/>
    <circle cx="162.5" cy="170" r="3.5" fill="var(--t1)"/>
    <circle cx="110" cy="20" r="2.5" fill="var(--t1)"/>
    <text x="188" y="224" font-size="13" fill="var(--t1)">q</text>
    <text x="145" y="164" font-size="13" fill="var(--t1)">p</text>
    <text x="98" y="14" font-size="11" fill="var(--t2)">꼭짓점</text>
    <text x="110" y="252" font-size="11" fill="var(--t2)" text-anchor="middle">원뿔</text>
    <!-- 구분선 -->
    <line x1="245" y1="10" x2="245" y2="250" stroke="var(--b2)" stroke-width="1"/>
    <!-- 오른쪽: 전개도(펼친 부채꼴) -->
    <path d="M330,230 L458,230 A128,128 0 0 0 330,102 Z" fill="var(--acc-bg)" stroke="var(--t2)" stroke-width="1.5"/>
    <line x1="330" y1="230" x2="330" y2="134" stroke="var(--t1)" stroke-width="2"/>
    <line x1="458" y1="230" x2="330" y2="134" stroke="var(--acc)" stroke-width="2"/>
    <circle cx="330" cy="230" r="2.5" fill="var(--t1)"/>
    <circle cx="458" cy="230" r="3.5" fill="var(--t1)"/>
    <circle cx="330" cy="134" r="3.5" fill="var(--t1)"/>
    <text x="336" y="222" font-size="11" fill="var(--t2)">O</text>
    <text x="464" y="234" font-size="13" fill="var(--t1)">q</text>
    <text x="308" y="138" font-size="13" fill="var(--t1)">p</text>
    <text x="390" y="245" font-size="11" fill="var(--t2)">4</text>
    <text x="312" y="185" font-size="11" fill="var(--t2)">3</text>
    <text x="352" y="205" font-size="11" fill="var(--t2)">β=π/2</text>
    <text x="394" y="270" font-size="11" fill="var(--t2)" text-anchor="middle">펼친 부채꼴 (측지선 = 직선)</text>
  </svg>`,
  steps:[
    {num:'Step 1', title:'주곡률 κ1, κ2 계산',
     body:`꼭짓점 반각 $\\alpha$: $\\sin\\alpha=\\dfrac{\\text{밑면 반지름}}{\\text{모선}}=\\dfrac14$, $\\cos\\alpha=\\dfrac{\\sqrt{15}}4$.

모선(직선) 방향은 곡면 위 직선이므로 법곡률 $0$: $\\kappa_1=0$ ①.

꼭짓점에서 거리 $\\rho$인 점에서 위선 방향 주곡률(회전면 공식과 유사) ②: $\\kappa_2=\\dfrac{\\cos\\alpha}{\\rho\\sin\\alpha}$.

$q$는 밑면 위($\\rho=4$), $p$는 같은 모선 위 $|pq|=1$이므로 $\\rho_p=4-1=3$.

$$\\kappa_2=\\frac{\\sqrt{15}/4}{3\\times1/4}=\\frac{\\sqrt{15}}3$$`},
    {num:'Step 2', title:'전개도(펼친 부채꼴)로 변환',
     body:`원뿔을 펼치면 반지름 $4$, 중심각 $\\beta=2\\pi\\sin\\alpha=2\\pi\\times\\dfrac14=\\dfrac\\pi2$인 부채꼴 ③이 됩니다.

측지선은 전개도에서 **직선**이 되므로 ④, $q=(4,0)$에서 옆면을 한 바퀴 돌아 같은 모선(각 $\\beta=\\pi/2$만큼 이동한 자리) 위 $p=(3,\\pi/2)$까지 가는 직선.

직교좌표: $q=(4,0)$, $p=(0,3)$. 이 둘을 잇는 직선의 방향벡터는 $(-4,3)$, 길이 $5$ (3-4-5 삼각형!).`},
    {num:'Step 3', title:'측지선과 모선이 이루는 각',
     body:`$p=(0,3)$에서 모선(반지름) 방향은 $(0,1)$. 측지선 방향은 $(-4,3)/5$.

$$\\cos\\psi=(0,1)\\cdot\\frac{(-4,3)}5=\\frac35,\\qquad\\sin^2\\psi=\\frac{16}{25}$$

($\\psi$: 측지선과 모선(=$\\kappa_1$ 주방향) 사이의 각)`},
    {num:'Step 4', title:'오일러 공식 + 측지선(κ_g=0) 조건',
     body:`오일러 공식: $\\kappa_n=\\kappa_1\\cos^2\\psi+\\kappa_2\\sin^2\\psi=0\\times\\dfrac9{25}+\\dfrac{\\sqrt{15}}3\\times\\dfrac{16}{25}=\\dfrac{16\\sqrt{15}}{75}$

측지선은 $\\kappa_g=0$이므로 뫼니에 정리 ⑤에 의해 $\\kappa=|\\kappa_n|$:

$$\\kappa=\\frac{16\\sqrt{15}}{75}$$`}
  ],
  answer:'$\\kappa_1=0,\\ \\kappa_2=\\dfrac{\\sqrt{15}}3$, $\\kappa=\\dfrac{16\\sqrt{15}}{75}$',
  footnotes:[
    {n:'①',text:'곡면 위에 놓인 직선은 곡률이 0이므로 그 방향의 법곡률도 항상 0. 특히 이는 주방향이 된다.'},
    {n:'②',text:'꼭짓점에서 모선을 따라 거리 ρ인 점에서, 모선에 수직한 방향의 주곡률은 cosα/(ρsinα) (원뿔을 국소적 회전면으로 보고 유도).'},
    {n:'③',text:'전개했을 때 부채꼴의 호 길이가 원래 밑면 둘레(2π·반지름)와 같아야 하므로 반지름 4(모선)·중심각 β: 4β=2π(1) → β=π/2.'},
    {n:'④',text:'전개(발전, developing)해도 길이가 보존되는 가우스곡률 0인 곡면(원뿔)에서는 측지선이 전개도 상의 직선에 대응.'},
    {n:'⑤',text:'뫼니에 정리: 곡선의 곡률 κ, 측지곡률 κ_g, 법곡률 κ_n 사이에 κ²=κ_g²+κ_n². 측지선은 κ_g=0.'}
  ]
},

// ───────────────────────────────────────
// 2017
// ───────────────────────────────────────
{
  id:'2017a8', year:2017, type:'전공A', cat:'curve', pts:2,
  title:'평면곡선 조건과 β의 길이로 γ의 곡률 구하기',
  problem:`3차원 유클리드 공간 $\\mathbb{R}^3$의 한 평면에 있고 곡률(curvature)이 양인 단위속력곡선(unit speed curve) $\\gamma:\\mathbb{R}\\to\\mathbb{R}^3$에 대하여, 점 $\\gamma(s)$에서의 접선벡터(tangent vector)를 $\\boldsymbol{T}(s)$, 주법선벡터(principal normal vector)를 $\\boldsymbol{N}(s)$라 하자. 곡선 $\\beta:\\mathbb{R}\\to\\mathbb{R}^3$을 $\\beta(s)=\\dfrac12\\boldsymbol{T}(s)+\\boldsymbol{N}(s)$로 정의할 때, 모든 양수 $t$에 대하여 $s=0$에서 $s=t$까지 곡선 $\\beta$의 길이는 $3t$이다. $s=1$일 때, 곡선 $\\gamma$의 곡률을 구하시오.`,
  steps:[
    {num:'Step 1', title:'γ가 평면곡선이므로 τ=0',
     body:`$\\gamma$가 한 평면에 있으므로 비틀림률 $\\tau(s)\\equiv0$ ①.`},
    {num:'Step 2', title:'β\'(s) 계산',
     body:`프레네 공식($\\tau=0$): $\\boldsymbol{T}'=\\kappa\\boldsymbol{N},\\ \\boldsymbol{N}'=-\\kappa\\boldsymbol{T}$이므로:

$$\\beta'(s)=\\frac12\\kappa\\boldsymbol{N}+(-\\kappa\\boldsymbol{T})=-\\kappa\\boldsymbol{T}+\\frac\\kappa2\\boldsymbol{N}$$

$$|\\beta'(s)|^2=\\kappa^2+\\frac{\\kappa^2}4=\\frac54\\kappa(s)^2$$`},
    {num:'Step 3', title:'길이 조건으로 κ 결정',
     body:`길이 $=\\displaystyle\\int_0^t|\\beta'(s)|ds=3t$가 모든 $t>0$에서 성립하므로 양변을 $t$로 미분하면 $|\\beta'(t)|=3$ (상수) ②.

$$\\frac54\\kappa(t)^2=9\\ \\Rightarrow\\ \\kappa(t)^2=\\frac{36}5\\ \\Rightarrow\\ \\kappa(t)=\\frac6{\\sqrt5}\\quad(\\because\\kappa>0)$$

$\\kappa$가 상수이므로 $s=1$에서도 동일.`}
  ],
  answer:'$\\dfrac6{\\sqrt5}=\\dfrac{6\\sqrt5}5$',
  footnotes:[
    {n:'①',text:'평면곡선(한 평면 안에 있는 곡선)은 항상 비틀림률이 0이다 (역도 성립: τ≡0이면 평면곡선).'},
    {n:'②',text:'길이함수 L(t)=∫₀ᵗ|β\'(s)|ds가 모든 t에서 3t와 같으면, 양변을 미분하여 피적분함수 자체가 상수 3임을 얻는다(미적분학의 기본정리).'}
  ]
},
{
  id:'2017b5', year:2017, type:'전공B', cat:'gauss', pts:4,
  title:'두 곡면의 교선 매개변수화와 구 위의 측지곡률',
  problem:`3차원 유클리드 공간 $\\mathbb{R}^3$에서 곡선 $\\gamma$를 두 곡면 $S_1=\\{(x,y,z)\\in\\mathbb{R}^3\\mid x^2+y^2+z^2=4,\\,z>0\\},\\ S_2=\\{(x,y,z)\\in\\mathbb{R}^3\\mid(x-1)^2+y^2=1,\\,z>0\\}$의 교선이라 하자. 각 $\\theta\\,(0<\\theta<2\\pi)$를 매개변수로 하는 곡선 $\\gamma:(0,2\\pi)\\to\\mathbb{R}^3$의 매개변수표현(parametrized representation) $\\gamma(\\theta)$를 하나 구하시오. 또한 곡면 $S_1$ 위에 놓인 곡선으로서 $\\gamma$의 점 $(0,0,2)$에서의 측지곡률(geodesic curvature)의 절댓값을 풀이 과정과 함께 쓰시오.`,
  diagram:`<svg viewBox="0 0 300 250" xmlns="http://www.w3.org/2000/svg" style="font-family:'Noto Sans KR',sans-serif">
    <line x1="20" y1="180" x2="270" y2="180" stroke="var(--t2)" stroke-width="1.2"/>
    <polygon points="270,180 261,176 261,184" fill="var(--t2)"/>
    <text x="272" y="184" font-size="12" fill="var(--t2)">x</text>
    <line x1="60" y1="220" x2="60" y2="20" stroke="var(--t2)" stroke-width="1.2"/>
    <polygon points="60,20 56,29 64,29" fill="var(--t2)"/>
    <text x="66" y="24" font-size="12" fill="var(--t2)">y</text>
    <circle cx="130" cy="180" r="70" fill="none" stroke="var(--acc)" stroke-width="1.8"/>
    <text x="168" y="120" font-size="11" fill="var(--t2)">(x-1)²+y²=1</text>
    <line x1="130" y1="180" x2="200" y2="180" stroke="var(--t3)" stroke-width="1" stroke-dasharray="3 2"/>
    <line x1="130" y1="180" x2="175" y2="126" stroke="var(--t1)" stroke-width="1.6"/>
    <path d="M 152,180 A 22,22 0 0 0 146,161" fill="none" stroke="var(--t2)" stroke-width="1"/>
    <text x="152" y="158" font-size="12" fill="var(--t1)">θ</text>
    <circle cx="60" cy="180" r="3" fill="var(--t1)"/>
    <text x="42" y="196" font-size="12" fill="var(--t1)">O</text>
    <circle cx="200" cy="180" r="2.5" fill="var(--t2)"/>
    <text x="196" y="196" font-size="11" fill="var(--t2)">2</text>
    <circle cx="130" cy="180" r="2.5" fill="var(--t2)"/>
    <text x="126" y="196" font-size="11" fill="var(--t2)">1</text>
    <text x="150" y="240" font-size="11" fill="var(--t2)" text-anchor="middle">원기둥 S₂를 위에서 본 밑원: x=1+cosθ, y=sinθ</text>
  </svg>`,
  steps:[
    {num:'Step 1', title:'원기둥 S₂로 매개변수화',
     body:`$S_2$: $x=1+\\cos\\theta,\\ y=\\sin\\theta$. $S_1$에 대입: $z^2=4-(1+\\cos\\theta)^2-\\sin^2\\theta=2-2\\cos\\theta=4\\sin^2(\\theta/2)$.

$z>0$이므로 $z=2\\sin(\\theta/2)$ ($0<\\theta<2\\pi$에서 양수).

$$\\gamma(\\theta)=(1+\\cos\\theta,\\ \\sin\\theta,\\ 2\\sin(\\theta/2))$$`},
    {num:'Step 2', title:'점 (0,0,2)의 θ값과 γ\', γ\'\'',
     body:`$1+\\cos\\theta=0,\\sin\\theta=0\\Rightarrow\\theta=\\pi$. 확인: $z=2\\sin(\\pi/2)=2$ ✓.

$\\gamma'(\\theta)=(-\\sin\\theta,\\cos\\theta,\\cos(\\theta/2))$, $\\gamma''(\\theta)=(-\\cos\\theta,-\\sin\\theta,-\\tfrac12\\sin(\\theta/2))$

$\\theta=\\pi$: $\\gamma'(\\pi)=(0,-1,0)$, $\\gamma''(\\pi)=(1,0,-\\tfrac12)$. $|\\gamma'(\\pi)|=1$.`},
    {num:'Step 3', title:'공간곡선 곡률 κ 계산',
     body:`$\\gamma'\\times\\gamma''=(0,-1,0)\\times(1,0,-\\tfrac12)=\\left(\\dfrac12,0,1\\right)$

$$\\kappa=\\frac{|\\gamma'\\times\\gamma''|}{|\\gamma'|^3}=\\sqrt{\\frac14+1}=\\frac{\\sqrt5}2$$`},
    {num:'Step 4', title:'구면의 법곡률과 측지곡률',
     body:`구(반지름 $R=2$) 위의 모든 방향의 법곡률은 $\\kappa_n=\\dfrac1R=\\dfrac12$ (전제(全臍, umbilic)점) ①.

뫼니에 정리 $\\kappa^2=\\kappa_g^2+\\kappa_n^2$에서:

$$\\kappa_g^2=\\frac54-\\frac14=1\\ \\Rightarrow\\ |\\kappa_g|=1$$`}
  ],
  answer:'$\\gamma(\\theta)=(1+\\cos\\theta,\\sin\\theta,2\\sin(\\theta/2))$, $|\\kappa_g|=1$',
  footnotes:[
    {n:'①',text:'반지름 R인 구는 전제점(모든 방향의 법곡률이 같은 점)으로만 이루어져 있고, 그 값은 항상 1/R.'}
  ]
},

// ───────────────────────────────────────
// 2018
// ───────────────────────────────────────
{
  id:'2018a6', year:2018, type:'전공A', cat:'curve', pts:2,
  title:'적분으로 정의된 β\'\'과 α\'의 직교조건으로 곡률 구하기',
  problem:`3차원 유클리드 공간 $\\mathbb{R}^3$에서 $\\alpha(2)=(0,0,0)$인 단위속력곡선(unit speed curve) $\\alpha:\\mathbb{R}\\to\\mathbb{R}^3$에 대하여 곡선 $\\beta:\\mathbb{R}\\to\\mathbb{R}^3$을 $\\beta(t)=\\displaystyle\\int_2^t\\bigl(\\alpha(s)+s^2\\boldsymbol{N}(s)\\bigr)ds$라 하자. 두 벡터 $\\alpha'(2),\\,\\beta''(2)$가 서로 수직일 때, $t=2$에서 $\\alpha$의 곡률(curvature) $\\kappa$의 값을 구하시오. (단, $\\boldsymbol{N}(s)$는 곡선 $\\alpha$의 주법벡터장(principal normal vector field)이다.)`,
  steps:[
    {num:'Step 1', title:'β\'와 β\'\' 계산',
     body:`미적분학의 기본정리: $\\beta'(t)=\\alpha(t)+t^2\\boldsymbol{N}(t)$.

$$\\beta''(t)=\\alpha'(t)+2t\\boldsymbol{N}(t)+t^2\\boldsymbol{N}'(t)=\\boldsymbol{T}(t)+2t\\boldsymbol{N}(t)+t^2(-\\kappa(t)\\boldsymbol{T}(t)+\\tau(t)\\boldsymbol{B}(t))$$

$$=(1-t^2\\kappa(t))\\boldsymbol{T}(t)+2t\\boldsymbol{N}(t)+t^2\\tau(t)\\boldsymbol{B}(t)$$`},
    {num:'Step 2', title:'직교조건 적용',
     body:`$\\alpha'(2)=\\boldsymbol{T}(2)$이므로:

$$\\alpha'(2)\\cdot\\beta''(2)=\\boldsymbol{T}(2)\\cdot\\bigl[(1-4\\kappa(2))\\boldsymbol{T}(2)+4\\boldsymbol{N}(2)+4\\tau(2)\\boldsymbol{B}(2)\\bigr]$$

$\\boldsymbol{T}\\perp\\boldsymbol{N},\\ \\boldsymbol{T}\\perp\\boldsymbol{B}$이므로 나머지 항은 모두 $0$:

$$=1-4\\kappa(2)=0$$`},
    {num:'Step 3', title:'κ(2) 결정',
     body:`$$\\kappa(2)=\\frac14$$`}
  ],
  answer:'$\\dfrac14$',
  footnotes:[
    {n:'①',text:'프레네 공식: T\'=κN, N\'=-κT+τB. β\'\'을 전개할 때 T\',N\'을 이 공식으로 바꿔 T,N,B 성분으로 정리한다.'},
    {n:'②',text:'T,N,B는 서로 직교하는 단위벡터이므로, T·N=T·B=0. 내적을 계산할 때 이 성질로 대부분의 항이 소거된다.'}
  ]
},
{
  id:'2018b5', year:2018, type:'전공B', cat:'fund', pts:4,
  title:'회전면의 주곡률과 임의 방향 법곡률 계산',
  problem:`곡면 $X(u,v)=\\left(u\\cos v,\\,u\\sin v,\\,\\dfrac1u\\right)\\,(u>0,\\,-\\pi<v<\\pi)$ 위의 점 $p=(1,0,1)$에서 주곡률(principal curvature) $k_1,\\,k_2$ ($k_1>k_2$)의 값을 풀이 과정과 함께 쓰시오. 또한 점 $p$에서 단위접벡터(unit tangent vector) $\\mathbf{w}=\\dfrac1{\\sqrt3}(1,1,-1)$ 방향으로의 법곡률(normal curvature)을 풀이 과정과 함께 쓰시오.`,
  steps:[
    {num:'Step 1', title:'회전면 공식으로 주곡률',
     body:`$h(u)=1/u$, $h'(u)=-1/u^2,\\ h''(u)=2/u^3$. 회전면 표준 공식 ①: $k_u=\\dfrac{h''}{(1+h'^2)^{3/2}},\\ k_v=\\dfrac{h'}{u\\sqrt{1+h'^2}}$.

$u=1$: $h'(1)=-1,\\ h''(1)=2$.

$$k_u=\\frac2{2^{3/2}}=\\frac1{\\sqrt2},\\qquad k_v=\\frac{-1}{\\sqrt2}$$

$k_1>k_2$이므로 $k_1=\\dfrac{\\sqrt2}2,\\ k_2=-\\dfrac{\\sqrt2}2$.`},
    {num:'Step 2', title:'주방향 단위벡터 계산',
     body:`$X_u(1,0)=(\\cos0,\\sin0,h'(1))=(1,0,-1)$, $X_v(1,0)=(0,1,0)$.

단위화: $\\mathbf{e}_1=\\dfrac{(1,0,-1)}{\\sqrt2},\\quad\\mathbf{e}_2=(0,1,0)$`},
    {num:'Step 3', title:'w를 e1,e2로 분해',
     body:`$\\mathbf{w}\\cdot\\mathbf{e}_1=\\dfrac{(1,1,-1)}{\\sqrt3}\\cdot\\dfrac{(1,0,-1)}{\\sqrt2}=\\dfrac2{\\sqrt6}$

$\\mathbf{w}\\cdot\\mathbf{e}_2=\\dfrac1{\\sqrt3}$

검산: $\\left(\\dfrac2{\\sqrt6}\\right)^2+\\left(\\dfrac1{\\sqrt3}\\right)^2=\\dfrac23+\\dfrac13=1$ ✓ ($\\mathbf{w}$가 실제로 접평면 위에 있음을 확인)`},
    {num:'Step 4', title:'오일러 공식으로 법곡률',
     body:`$$\\kappa_n(\\mathbf{w})=k_1\\left(\\frac2{\\sqrt6}\\right)^2+k_2\\left(\\frac1{\\sqrt3}\\right)^2=\\frac1{\\sqrt2}\\cdot\\frac23-\\frac1{\\sqrt2}\\cdot\\frac13=\\frac1{\\sqrt2}\\cdot\\frac13=\\frac{\\sqrt2}6$$`}
  ],
  answer:'$k_1=\\dfrac{\\sqrt2}2,\\ k_2=-\\dfrac{\\sqrt2}2$, $\\kappa_n(\\mathbf{w})=\\dfrac{\\sqrt2}6$',
  footnotes:[
    {n:'①',text:'회전면 X(u,v)=(ucosv,usinv,h(u))의 u방향 주곡률: h\'\'/(1+h\'²)^{3/2}, v방향 주곡률: h\'/(u√(1+h\'²)).'}
  ]
},

// ───────────────────────────────────────
// 2019
// ───────────────────────────────────────
{
  id:'2019a6', year:2019, type:'전공A', cat:'curve', pts:2,
  title:'평면곡선의 비틀림률(항상 0)과 곡률=3이 되는 a',
  problem:`3차원 유클리드 공간 $\\mathbb{R}^3$에서 곡선 $C$가 $C=\\{(x,y,z)\\in\\mathbb{R}^3\\mid y=x^3-ax+a,\\,z=x-1\\}$일 때, 이 곡선의 비틀림률(열률, 꼬임률, torsion) $\\tau$를 구하시오. 또한 점 $(1,1,0)$에서 곡선 $C$의 곡률(curvature)이 $3$이 되도록 하는 $a$의 값을 구하시오. (단, $a$는 상수이다.)`,
  steps:[
    {num:'Step 1', title:'평면곡선임을 확인하고 τ=0',
     body:`$z=x-1$, 즉 $z-x=-1$은 $y$와 무관한 평면 방정식이므로 $C$는 평면 $z-x=-1$ 위에 있는 평면곡선 ①.

따라서 임의의 $a$에 대해:

$$\\tau=0$$

(직접 계산해도 $r'''=(0,6,0)$이 $r'\\times r''=(-6t,0,6t)$와 수직이 되어 $\\tau\\equiv0$ 확인됨.)`},
    {num:'Step 2', title:'매개변수화와 t=1 확인',
     body:`$t=x$로 매개변수화: $r(t)=(t,\\,t^3-at+a,\\,t-1)$.

$(1,1,0)$: $t=1$에서 $y=1-a+a=1$ ✓ (모든 $a$에서 성립), $z=0$ ✓.`},
    {num:'Step 3', title:'곡률 계산 및 a 결정',
     body:`$r'(t)=(1,3t^2-a,1),\\ r''(t)=(0,6t,0)$. $t=1$: $r'(1)=(1,3-a,1),\\ r''(1)=(0,6,0)$.

$r'\\times r''=(-6,0,6)$, $|r'\\times r''|=6\\sqrt2$.

$$\\kappa=\\frac{6\\sqrt2}{[2+(3-a)^2]^{3/2}}=3\\ \\Rightarrow\\ [2+(3-a)^2]^{3/2}=2\\sqrt2=2^{3/2}$$

$$2+(3-a)^2=2\\ \\Rightarrow\\ (3-a)^2=0\\ \\Rightarrow\\ a=3$$`}
  ],
  answer:'$\\tau=0$, $a=3$',
  footnotes:[
    {n:'①',text:'z=x-1 (y항이 없는 선형관계)은 xz평면에 평행한 평면의 방정식. 이 곡면 위의 모든 곡선은 평면곡선.'}
  ]
},
{
  id:'2019b5', year:2019, type:'전공B', cat:'fund', pts:4,
  title:'곡면과 평면의 접점에서 가우스곡률',
  problem:`3차원 유클리드 공간 $\\mathbb{R}^3$에서 곡면 $M:z=\\dfrac14(x^4+y^4)$과 평면 $H:x+y-z=d$가 한 점 $p$에서 접할 때, 상수 $d$의 값을 구하시오. 또한 접점 $p$에서 곡면 $M$의 가우스곡률(Gaussian curvature) $K$의 값을 풀이 과정과 함께 쓰시오.`,
  steps:[
    {num:'Step 1', title:'법선 방향 일치 조건',
     body:`$f(x,y)=\\dfrac14(x^4+y^4)$, $f_x=x^3,\\,f_y=y^3$. $M$의 법선 방향 $(f_x,f_y,-1)=(x_0^3,y_0^3,-1)$이 $H$의 법선 $(1,1,-1)$과 평행 ①해야 하므로 ($z$성분이 이미 일치):

$$x_0^3=1,\\ y_0^3=1\\ \\Rightarrow\\ x_0=1,\\ y_0=1$$`},
    {num:'Step 2', title:'접점 p와 d',
     body:`$z_0=f(1,1)=\\dfrac{1+1}4=\\dfrac12$이므로 $p=\\left(1,1,\\dfrac12\\right)$.

$H$가 $p$를 지나므로: $1+1-\\dfrac12=d\\ \\Rightarrow\\ d=\\dfrac32$`},
    {num:'Step 3', title:'가우스곡률 K 계산',
     body:`몽주 조각(Monge patch) 공식 ②: $K=\\dfrac{f_{xx}f_{yy}-f_{xy}^2}{(1+f_x^2+f_y^2)^2}$

$f_{xx}=3x^2,\\,f_{yy}=3y^2,\\,f_{xy}=0$. $(1,1)$에서 $f_{xx}=3,f_{yy}=3,f_x=1,f_y=1$:

$$K=\\frac{3\\times3-0}{(1+1+1)^2}=\\frac99=1$$`}
  ],
  answer:'$d=\\dfrac32$, $K=1$',
  footnotes:[
    {n:'①',text:'두 곡면(또는 곡면과 평면)이 한 점에서 접하려면 그 점을 공유하고 법선 방향이 (스칼라배 관계로) 일치해야 한다.'},
    {n:'②',text:'z=f(x,y) 그래프의 가우스곡률: K=(f_xxf_yy-f_xy²)/(1+f_x²+f_y²)².'}
  ]
},

// ───────────────────────────────────────
// 2020
// ───────────────────────────────────────
{
  id:'2020a3', year:2020, type:'전공A', cat:'curve', pts:2,
  title:'접벡터가 평행한 t₀와 그 점에서의 비틀림률',
  problem:`3차원 유클리드 공간 $\\mathbb{R}^3$에서 곡선 $\\gamma(t)=(2t-\\cos t,\\,t+\\sin t,\\,2t+1)\\ (0<t<2\\pi)$ 위의 점 $\\gamma(t_0)$에서의 접벡터(tangent vector)가 벡터 $(6,2,4)$와 평행하다. $t_0$의 값과 $t=t_0$일 때 곡선 $\\gamma$의 비틀림률(열률, 꼬임률, torsion)을 각각 구하시오.`,
  steps:[
    {num:'Step 1', title:'t₀ 결정',
     body:`$\\gamma'(t)=(2+\\sin t,\\,1+\\cos t,\\,2)$. $(6,2,4)=2(3,1,2)$와 평행: $z$성분 비교 $2=2k\\Rightarrow k=1$.

$2+\\sin t=3\\Rightarrow\\sin t=1$, $1+\\cos t=1\\Rightarrow\\cos t=0$. $0<t<2\\pi$에서 $t_0=\\dfrac\\pi2$.`},
    {num:'Step 2', title:'t=π/2에서 도함수들',
     body:`$\\gamma'\\left(\\dfrac\\pi2\\right)=(3,1,2)$, $\\gamma''(t)=(\\cos t,-\\sin t,0)\\Rightarrow\\gamma''\\left(\\dfrac\\pi2\\right)=(0,-1,0)$

$\\gamma'''(t)=(-\\sin t,-\\cos t,0)\\Rightarrow\\gamma'''\\left(\\dfrac\\pi2\\right)=(-1,0,0)$`},
    {num:'Step 3', title:'비틀림률 계산',
     body:`$\\gamma'\\times\\gamma''=(3,1,2)\\times(0,-1,0)=(2,0,-3)$

$$\\tau=\\frac{(\\gamma'\\times\\gamma'')\\cdot\\gamma'''}{|\\gamma'\\times\\gamma''|^2}=\\frac{(2,0,-3)\\cdot(-1,0,0)}{4+0+9}=\\frac{-2}{13}$$`}
  ],
  answer:'$t_0=\\dfrac\\pi2$, $\\tau=-\\dfrac2{13}$',
  footnotes:[
    {n:'①',text:'두 벡터가 평행하면 한 벡터가 다른 벡터의 스칼라배(k배)이다. 성분별로 비교해 스칼라 k와 미지수를 함께 구한다.'},
    {n:'②',text:'비틀림률 공식: τ=(r\'×r\'\')·r\'\'\'/|r\'×r\'\'|² (단위속력이 아닌 일반 매개변수화에서도 그대로 사용 가능).'}
  ]
},
{
  id:'2020b8', year:2020, type:'전공B', cat:'fund', pts:4,
  title:'곡면의 접평면 방정식과 평균곡률 H',
  problem:`3차원 유클리드 공간 $\\mathbb{R}^3$에서 곡면 $\\mathbf{x}(u,v)=(u^2+v,\\,u-v^2,\\,uv)$ 위의 $u=1,\\,v=2$인 점 P에서의 접평면(tangent plane)의 방정식을 구하시오. 또한 점 P에서 곡면 $\\mathbf{x}$의 평균곡률(mean curvature) $H$의 값을 풀이 과정과 함께 쓰시오.`,
  steps:[
    {num:'Step 1', title:'접평면 방정식',
     body:`$\\mathbf{x}_u=(2u,1,v),\\ \\mathbf{x}_v=(1,-2v,u)$. $u=1,v=2$: $\\mathbf{x}_u=(2,1,2),\\ \\mathbf{x}_v=(1,-4,1)$, $P=(3,-3,2)$.

$\\mathbf{x}_u\\times\\mathbf{x}_v=(9,0,-9)\\parallel(1,0,-1)$이므로 접평면: $(x-3)-(z-2)=0\\Rightarrow x-z=1$.`},
    {num:'Step 2', title:'기본형식 계수 계산',
     body:`$\\mathbf{x}_{uu}=(2,0,0),\\ \\mathbf{x}_{uv}=(0,0,1),\\ \\mathbf{x}_{vv}=(0,-2,0)$. 단위법선 $\\mathbf{n}=(1,0,-1)/\\sqrt2$.

$E=9,\\ F=0,\\ G=18$

$e=\\mathbf{x}_{uu}\\cdot\\mathbf{n}=\\sqrt2,\\quad f=\\mathbf{x}_{uv}\\cdot\\mathbf{n}=-\\dfrac1{\\sqrt2},\\quad g=\\mathbf{x}_{vv}\\cdot\\mathbf{n}=0$`},
    {num:'Step 3', title:'평균곡률 공식 적용',
     body:`평균곡률 공식 ①: $H=\\dfrac{eG-2fF+gE}{2(EG-F^2)}$

$$H=\\frac{\\sqrt2\\times18-2\\times\\left(-\\frac1{\\sqrt2}\\right)\\times0+0\\times9}{2\\times(9\\times18)}=\\frac{18\\sqrt2}{324}=\\frac{\\sqrt2}{18}$$`}
  ],
  answer:'접평면: $x-z=1$, $H=\\dfrac{\\sqrt2}{18}$',
  footnotes:[
    {n:'①',text:'평균곡률: H=(eG-2fF+gE)/(2(EG-F²)) = (k1+k2)/2.'}
  ]
},

// ───────────────────────────────────────
// 2021
// ───────────────────────────────────────
{
  id:'2021a4', year:2021, type:'전공A', cat:'curve', pts:2,
  title:'구면 위 곡선: B·n=상수 조건에서 비틀림률과 곡률',
  problem:`3차원 유클리드 공간 $\\mathbb{R}^3$에서 구 $M=\\{(x,y,z)\\in\\mathbb{R}^3\\mid x^2+y^2+z^2=1\\}$ 위에 단위속력곡선(arc-length parametrized curve) $\\gamma:[0,1]\\to M$이 있다. 각 $s\\in[0,1]$에 대하여 점 $\\gamma(s)$에서의 $\\gamma$의 종법선벡터(binormal vector)를 $B(s)$, 점 $\\gamma(s)$에서의 $M$의 법선벡터(normal vector)를 $n(s)$라 하자. 모든 $s\\in[0,1]$에 대하여 $B(s)\\cdot n(s)=\\dfrac12$을 만족할 때, $\\gamma(s)$의 비틀림률(열률, 꼬임률, torsion) $a(s)$와 곡률(curvature) $b(s)$를 구하시오.`,
  steps:[
    {num:'Step 1', title:'구면 법선과 곡률의 관계식',
     body:`단위구에서 $n(s)=\\gamma(s)$. $\\gamma\\cdot\\gamma=1$을 미분: $\\gamma\\cdot\\boldsymbol{T}=0$. 다시 미분: $1+\\kappa(\\gamma\\cdot\\boldsymbol{N})=0$이므로:

$$\\gamma\\cdot\\boldsymbol{N}=-\\frac1\\kappa\\quad\\text{①}$$`},
    {num:'Step 2', title:'B·γ=1/2를 미분하여 τ=0 유도',
     body:`$B(s)\\cdot\\gamma(s)=\\dfrac12$ (상수)를 미분: $B'\\cdot\\gamma+B\\cdot\\gamma'=0$.

$B'=-\\tau\\boldsymbol{N}$, $\\gamma'=\\boldsymbol{T}$, $B\\cdot\\boldsymbol{T}=0$이므로:

$$-\\tau(\\boldsymbol{N}\\cdot\\gamma)=0\\ \\Rightarrow\\ -\\tau\\left(-\\frac1\\kappa\\right)=0\\ \\Rightarrow\\ \\tau(s)=0$$`},
    {num:'Step 3', title:'τ=0 ⟹ 평면원, 곡률 결정',
     body:`$\\tau=0$이므로 $B$는 상수벡터, $\\gamma$는 평면 $B\\cdot x=\\dfrac12$ 위에 놓이는 **평면곡선**이며 구면 위에 있으므로 원.

원점에서 이 평면까지 거리 $d=\\dfrac12$ ($B$가 단위벡터이므로), 원의 반지름 $r=\\sqrt{1-d^2}=\\sqrt{1-\\tfrac14}=\\dfrac{\\sqrt3}2$ ②.

원의 곡률: $\\kappa=\\dfrac1r=\\dfrac2{\\sqrt3}=\\dfrac{2\\sqrt3}3$`}
  ],
  answer:'$a(s)=\\tau(s)=0$, $b(s)=\\kappa(s)=\\dfrac{2\\sqrt3}3$',
  footnotes:[
    {n:'①',text:'구면(반지름 R) 위 곡선의 일반적 성질: γ·N=-R²/κ. 여기선 R=1이므로 γ·N=-1/κ.'},
    {n:'②',text:'단위구를 원점에서 거리 d인 평면으로 자르면 반지름 √(1-d²)인 원이 생긴다 (피타고라스 정리).'}
  ]
},
{
  id:'2021b10', year:2021, type:'전공B', cat:'gauss', pts:4,
  title:'회전면의 전가우스곡률 (경계 접선이 수평이 되어 0)',
  problem:`3차원 유클리드 공간 $\\mathbb{R}^3$에서 곡선 $\\gamma(u)=(0,\\,u^4-2u^2+5,\\,u)\\ (u\\in\\mathbb{R})$를 $z$축을 중심으로 $360^\\circ$ 회전시켜 얻은 회전체를 $M$이라 하고, $M$의 가우스 곡률(Gaussian curvature)을 $K$라 하자. 영역 $S=\\{(x,y,z)\\in M\\mid-1\\le z\\le1\\}$에 대하여 $\\displaystyle\\iint_SK\\,dA$의 값을 풀이 과정과 함께 쓰시오.`,
  diagram:`<svg viewBox="0 0 280 260" xmlns="http://www.w3.org/2000/svg" style="font-family:'Noto Sans KR',sans-serif">
    <line x1="130" y1="20" x2="130" y2="245" stroke="var(--t3)" stroke-width="1" stroke-dasharray="2 3"/>
    <text x="98" y="18" font-size="10" fill="var(--t3)">r(z)=z⁴-2z²+5</text>
    <line x1="15" y1="63" x2="255" y2="63" stroke="var(--acc)" stroke-width="1.3" stroke-dasharray="4 3"/>
    <text x="260" y="67" font-size="11" fill="var(--acc)">z=1</text>
    <line x1="15" y1="197" x2="255" y2="197" stroke="var(--acc)" stroke-width="1.3" stroke-dasharray="4 3"/>
    <text x="257" y="201" font-size="11" fill="var(--acc)">z=-1</text>
    <path d="M210,197 Q248,130 210,63" fill="none" stroke="var(--t1)" stroke-width="2"/>
    <path d="M50,197 Q12,130 50,63" fill="none" stroke="var(--t1)" stroke-width="2"/>
    <path d="M210,197 Q248,130 210,63 L50,63 Q12,130 50,197 Z" fill="var(--acc-bg)" opacity="0.5"/>
    <circle cx="130" cy="63" r="2.5" fill="var(--t2)"/>
    <circle cx="130" cy="197" r="2.5" fill="var(--t2)"/>
    <text x="130" y="255" font-size="11" fill="var(--t2)" text-anchor="middle">S: 회전면에서 -1≤z≤1인 띠 영역 (색칠), r\'(±1)=0</text>
  </svg>`,
  steps:[
    {num:'Step 1', title:'회전면 매개변수화, K(u) 공식',
     body:`반지름 $r(u)=u^4-2u^2+5$ (항상 양수), 높이 $z=u$인 회전면. 표준 공식 ①:

$$K(u)=\\frac{-r''(u)}{r(u)(1+r'(u)^2)^2}$$`},
    {num:'Step 2', title:'∬KdA를 원함수로 변형',
     body:`$dA=r\\sqrt{1+r'^2}\\,du\\,d\\theta$이므로:

$$\\iint_SK\\,dA=2\\pi\\int_{-1}^1\\frac{-r''}{(1+r'^2)^{3/2}}\\,du$$

피적분함수는 정확히 $\\dfrac{d}{du}\\left[\\dfrac{-r'}{\\sqrt{1+r'^2}}\\right]$의 도함수 ②이므로:

$$=2\\pi\\left[\\frac{-r'(u)}{\\sqrt{1+r'(u)^2}}\\right]_{-1}^1$$`},
    {num:'Step 3', title:'r\'(±1) 계산',
     body:`$r'(u)=4u^3-4u=4u(u-1)(u+1)$이므로:

$$r'(1)=4-4=0,\\qquad r'(-1)=-4+4=0$$

경계 $z=\\pm1$에서 자오선의 접선이 수평(반지름함수의 극값점)이 되도록 곡선이 설계되어 있음.`},
    {num:'Step 4', title:'최종 계산',
     body:`$$\\iint_SK\\,dA=2\\pi\\left[\\frac{-0}{\\sqrt1}-\\frac{-0}{\\sqrt1}\\right]=2\\pi\\times0=0$$`}
  ],
  answer:'$0$',
  footnotes:[
    {n:'①',text:'회전면(높이=매개변수, 반지름 r(u)) 가우스곡률: K=-r\'\'/[r(1+r\'²)²].'},
    {n:'②',text:'d/du[-r\'/√(1+r\'²)] = -r\'\'(1+r\'²)^{-3/2} (연쇄법칙으로 직접 검산 가능).'}
  ]
},

// ───────────────────────────────────────
// 2022
// ───────────────────────────────────────
{
  id:'2022a9', year:2022, type:'전공A', cat:'curve', pts:4,
  title:'τT+κB로 정의된 β가 정칙곡선임을 보이고 τ_α(1)κ_β(1) 계산',
  problem:`단위속력곡선(unit speed curve) $\\alpha:\\mathbb{R}\\to\\mathbb{R}^3$에 대하여 점 $\\alpha(t)$에서의 곡률(curvature)과 비틀림률(열률, 꼬임률, torsion)을 각각 $\\kappa_\\alpha(t),\\,\\tau_\\alpha(t)$라 할 때, $\\kappa_\\alpha(t)\\ne0\\ (t\\in\\mathbb{R})$이고 함수 $f:\\mathbb{R}\\to\\mathbb{R}$는 $\\tau_\\alpha(t)=f(t)\\kappa_\\alpha(t),\\ f(1)=\\sqrt3,\\ f'(1)=-2$를 만족한다. 점 $\\alpha(t)$에서 곡선 $\\alpha$의 단위접벡터장(unit tangent vector field) $T(t)$와 단위종법벡터장(unit binormal vector field) $B(t)$에 대하여 곡선 $\\beta:\\mathbb{R}\\to\\mathbb{R}^3$을 $\\beta(t)=\\displaystyle\\int_0^t\\{\\tau_\\alpha(s)T(s)+\\kappa_\\alpha(s)B(s)\\}ds$로 정의하고, 이 곡선 위의 점 $\\beta(t)$에서의 곡률을 $\\kappa_\\beta(t)$라 하자. 이 때, 곡선 $\\beta$가 정칙곡선(정규곡선, regular curve)임을 보이고, $\\tau_\\alpha(1)\\kappa_\\beta(1)$의 값을 풀이 과정과 함께 쓰시오.`,
  steps:[
    {num:'Step 1', title:'정칙성 증명',
     body:`$\\beta'(t)=\\tau_\\alpha(t)T(t)+\\kappa_\\alpha(t)B(t)$ (미적분학 기본정리). $T\\perp B$이므로:

$$|\\beta'(t)|^2=\\tau_\\alpha(t)^2+\\kappa_\\alpha(t)^2\\ge\\kappa_\\alpha(t)^2>0$$

($\\kappa_\\alpha\\ne0$이므로) 따라서 $\\beta'(t)\\ne0$이고 $\\beta$는 정칙곡선. $\\blacksquare$`},
    {num:'Step 2', title:'β\'\'을 계산, N성분이 소거됨',
     body:`$$\\beta''=\\tau_\\alpha'T+\\tau_\\alpha(\\kappa_\\alpha N)+\\kappa_\\alpha'B+\\kappa_\\alpha(-\\tau_\\alpha N)=\\tau_\\alpha'T+\\kappa_\\alpha'B$$

($T'=\\kappa_\\alpha N,\\ B'=-\\tau_\\alpha N$이고 $\\tau_\\alpha\\kappa_\\alpha-\\kappa_\\alpha\\tau_\\alpha=0$으로 $N$성분 소거)`},
    {num:'Step 3', title:'κ_β 공식 유도',
     body:`$\\beta'\\times\\beta''=(\\tau_\\alpha T+\\kappa_\\alpha B)\\times(\\tau_\\alpha'T+\\kappa_\\alpha'B)=(\\kappa_\\alpha\\tau_\\alpha'-\\tau_\\alpha\\kappa_\\alpha')N$

$\\tau_\\alpha=f\\kappa_\\alpha$ 대입: $\\kappa_\\alpha\\tau_\\alpha'-\\tau_\\alpha\\kappa_\\alpha'=f'\\kappa_\\alpha^2$ (직접 대입하면 소거 확인).

$$\\kappa_\\beta=\\frac{|f'|\\kappa_\\alpha^2}{[\\kappa_\\alpha^2(f^2+1)]^{3/2}}=\\frac{|f'|}{\\kappa_\\alpha(f^2+1)^{3/2}}$$`},
    {num:'Step 4', title:'τ_α(1)κ_β(1)에서 κ_α 소거',
     body:`$$\\tau_\\alpha(1)\\kappa_\\beta(1)=f(1)\\kappa_\\alpha(1)\\times\\frac{|f'(1)|}{\\kappa_\\alpha(1)(f(1)^2+1)^{3/2}}=\\frac{f(1)|f'(1)|}{(f(1)^2+1)^{3/2}}$$

$\\kappa_\\alpha(1)$이 소거되어 값이 정해집니다!

$$=\\frac{\\sqrt3\\times2}{4^{3/2}}=\\frac{2\\sqrt3}8=\\frac{\\sqrt3}4$$`}
  ],
  answer:'$\\beta$는 정칙곡선 (증명 완료), $\\tau_\\alpha(1)\\kappa_\\beta(1)=\\dfrac{\\sqrt3}4$',
  footnotes:[
    {n:'①',text:'정칙곡선(정규곡선): 모든 점에서 속도벡터가 0이 아닌 곡선. β\'≠0임을 보이면 충분하다.'},
    {n:'②',text:'κ_α(1)이 결과식에서 완전히 소거되는 것이 이 문제의 핵심 — 미지의 κ_α 값을 몰라도 답이 정해진다.'}
  ]
},
{
  id:'2022b2', year:2022, type:'전공B', cat:'fund', pts:2,
  title:'법곡률 적분과 가우스곡률로 주곡률 모두 구하기',
  problem:`3차원 유클리드 공간 $\\mathbb{R}^3$에 놓인 곡면 $M$ 위의 점 $\\mathbf{p}$에서 모든 접벡터(tangent vector)의 집합을 $T_{\\mathbf{p}}(M)$, $\\mathbf{p}$에서의 주벡터(principal vector) 중 하나를 $\\mathbf{e}$라 하자. $T_{\\mathbf{p}}(M)$에 속하는 단위접벡터(unit tangent vector) $\\mathbf{v}$와 $\\mathbf{e}$의 사잇각을 $\\theta$라 할 때, $\\mathbf{p}$에서 $\\mathbf{v}$ 방향으로의 법곡률(normal curvature) $\\kappa_n(\\theta)$가 $\\displaystyle\\int_0^\\pi\\kappa_n(\\theta)\\,d\\theta=\\dfrac{11\\pi}8$를 만족한다고 하자. 점 $\\mathbf{p}$에서 곡면 $M$의 가우스곡률(Gaussian curvature)이 $\\dfrac32$일 때, $\\mathbf{p}$에서 $M$의 주곡률(principal curvature)의 값을 모두 쓰시오. (단, 주벡터는 주곡률방향(주방향, principal direction)의 단위접벡터이다.)`,
  steps:[
    {num:'Step 1', title:'오일러 공식을 θ에 대해 적분',
     body:`$\\mathbf{e}$가 주방향이므로 오일러 공식 ①: $\\kappa_n(\\theta)=k_1\\cos^2\\theta+k_2\\sin^2\\theta$.

$$\\int_0^\\pi\\kappa_n(\\theta)d\\theta=k_1\\int_0^\\pi\\cos^2\\theta\\,d\\theta+k_2\\int_0^\\pi\\sin^2\\theta\\,d\\theta=\\frac\\pi2(k_1+k_2)$$

$$\\frac\\pi2(k_1+k_2)=\\frac{11\\pi}8\\ \\Rightarrow\\ k_1+k_2=\\frac{11}4$$`},
    {num:'Step 2', title:'K=k1k2와 연립하여 이차방정식',
     body:`$k_1k_2=K=\\dfrac32$이므로 $k_1,k_2$는 $x^2-\\dfrac{11}4x+\\dfrac32=0$, 즉 $4x^2-11x+6=0$의 두 근.

$$x=\\frac{11\\pm\\sqrt{121-96}}8=\\frac{11\\pm5}8$$`},
    {num:'Step 3', title:'주곡률 값',
     body:`$$x=2\\ \\text{또는}\\ x=\\frac34$$`}
  ],
  answer:'$2$와 $\\dfrac34$',
  footnotes:[
    {n:'①',text:'오일러 공식: 주방향 e(주곡률 k1)에서 각 θ 회전한 방향의 법곡률 κ_n(θ)=k1cos²θ+k2sin²θ.'}
  ]
},

// ───────────────────────────────────────
// 2023
// ───────────────────────────────────────
{
  id:'2023a3', year:2023, type:'전공A', cat:'curve', pts:2,
  title:'평면곡선의 접촉원 중심과 반지름 계산',
  problem:`2차원 유클리드 평면에 곡선 $\\alpha(t)=(2\\sin t-\\sin2t,\\,2\\cos t-\\cos2t)\\ (0<t<\\pi)$가 있다. 곡선 $\\alpha$의 $t=\\dfrac\\pi2$에서의 접촉원(osculating circle)의 중심(곡률중심, center of curvature)과 반지름(곡률반경, radius of curvature)을 구하시오.`,
  steps:[
    {num:'Step 1', title:'도함수 계산',
     body:`$\\alpha'(t)=(2\\cos t-2\\cos2t,\\,-2\\sin t+2\\sin2t)$, $\\alpha''(t)=(-2\\sin t+4\\sin2t,\\,-2\\cos t+4\\cos2t)$

$t=\\dfrac\\pi2$: $\\alpha=( 2,1)$, $\\alpha'=(2,-2)$, $\\alpha''=(-2,-4)$`},
    {num:'Step 2', title:'부호있는 곡률과 곡률반경',
     body:`평면곡선 부호있는 곡률 ①: $\\kappa=\\dfrac{x'y''-y'x''}{(x'^2+y'^2)^{3/2}}=\\dfrac{2(-4)-(-2)(-2)}{8^{3/2}}=\\dfrac{-12}{16\\sqrt2}=-\\dfrac{3\\sqrt2}8$

$$\\text{곡률반경}=\\frac1{|\\kappa|}=\\frac{8}{3\\sqrt2}=\\frac{4\\sqrt2}3$$`},
    {num:'Step 3', title:'곡률중심 계산',
     body:`곡률중심 공식 ②: $C=\\alpha+\\dfrac{x'^2+y'^2}{x'y''-y'x''}(-y',x')$

$$C=(2,1)+\\frac8{-12}(2,2)=(2,1)+\\left(-\\frac43,-\\frac43\\right)=\\left(\\frac23,-\\frac13\\right)$$

검산: $|C-\\alpha|=\\left|\\left(-\\dfrac43,-\\dfrac43\\right)\\right|=\\dfrac{4\\sqrt2}3$ ✓ (반지름과 일치)`}
  ],
  answer:'중심 $\\left(\\dfrac23,-\\dfrac13\\right)$, 반지름 $\\dfrac{4\\sqrt2}3$',
  footnotes:[
    {n:'①',text:'평면곡선 α(t)=(x(t),y(t))의 부호있는 곡률: κ=(x\'y\'\'-y\'x\'\')/(x\'²+y\'²)^{3/2}.'},
    {n:'②',text:'곡률중심(접촉원의 중심): C=α+[(x\'²+y\'²)/(x\'y\'\'-y\'x\'\')]·(-y\',x\') — 법선벡터 방향으로 곡률반경만큼 이동.'}
  ]
},
{
  id:'2023b9', year:2023, type:'전공B', cat:'gauss', pts:4,
  title:'교선의 측지곡률·법곡률을 뫼니에 정리로 분리',
  problem:`3차원 유클리드 공간 $\\mathbb{R}^3$에서 두 곡면 $M,\\,N$을 $M=\\{(x,y,z)\\in\\mathbb{R}^3\\mid x^2-y^2-z=0\\},\\ N=\\{(x,y,z)\\in\\mathbb{R}^3\\mid x+y+z=1\\}$이라 하고, 곡선 $\\gamma$를 $M$과 $N$의 교선이라 하자. 곡면 $M$에 놓인 곡선으로서 $\\gamma$의 점 $p=\\left(\\dfrac12,\\dfrac12,0\\right)$에서의 측지곡률(geodesic curvature)과 법곡률(normal curvature)을 풀이 과정과 함께 쓰시오.`,
  steps:[
    {num:'Step 1', title:'매개변수화 (s=x+y 이용)',
     body:`$z=x^2-y^2=(x-y)(x+y)$와 $z=1-x-y$를 연립: $(x-y)(x+y)=1-(x+y)$.

$s=x+y,\\ d=x-y$로 치환: $ds=1-s\\Rightarrow d=\\dfrac{1-s}s$ ($p$에서 $s=1,d=0$, 일치 확인).

$$x(s)=\\frac{s+d}2,\\quad y(s)=\\frac{s-d}2,\\quad z(s)=1-s,\\qquad d(s)=\\frac1s-1$$`},
    {num:'Step 2', title:'s=1에서 도함수',
     body:`$d'(s)=-1/s^2,\\ d''(s)=2/s^3$. $x'=(1-1/s^2)/2,\\ y'=(1+1/s^2)/2,\\ z'=-1$.

$s=1$: $r'(1)=(0,1,-1)$, $r''(1)=(1,-1,0)$ ($x''=1/s^3,\\,y''=-1/s^3$에서).`},
    {num:'Step 3', title:'공간곡선 곡률 κ',
     body:`$r'\\times r''=(0,1,-1)\\times(1,-1,0)=(-1,-1,-1)$, $|r'\\times r''|=\\sqrt3$.

$$\\kappa=\\frac{\\sqrt3}{|r'|^3}=\\frac{\\sqrt3}{(\\sqrt2)^3}=\\frac{\\sqrt3}{2\\sqrt2}=\\frac{\\sqrt6}4$$`},
    {num:'Step 4', title:'법곡률 κ_n 계산',
     body:`$M$의 법선방향: $\\nabla(x^2-y^2-z)=(2x,-2y,-1)$, $p$에서 $(1,-1,-1)$, 단위법선 $\\mathbf{n}=(1,-1,-1)/\\sqrt3$.

일반매개변수의 법곡률 ①: $\\kappa_n=\\dfrac{r''\\cdot\\mathbf{n}}{|r'|^2}=\\dfrac{(1,-1,0)\\cdot(1,-1,-1)/\\sqrt3}2=\\dfrac{2/\\sqrt3}2=\\dfrac1{\\sqrt3}=\\dfrac{\\sqrt3}3$`},
    {num:'Step 5', title:'뫼니에 정리로 측지곡률',
     body:`$$\\kappa_g^2=\\kappa^2-\\kappa_n^2=\\frac6{16}-\\frac13=\\frac1{24}\\ \\Rightarrow\\ \\kappa_g=\\frac1{2\\sqrt6}=\\frac{\\sqrt6}{12}$$`}
  ],
  answer:'측지곡률 $=\\dfrac{\\sqrt6}{12}$, 법곡률 $=\\dfrac{\\sqrt3}3$',
  footnotes:[
    {n:'①',text:'일반(단위속력이 아닌) 매개변수화 r(s)에서 법곡률: κ_n=(r\'\'·n)/|r\'|² (단위속력이면 κ_n=r\'\'·n).'}
  ]
},

// ───────────────────────────────────────
// 2024
// ───────────────────────────────────────
{
  id:'2024a4', year:2024, type:'전공A', cat:'curve', pts:2,
  title:'yz평면 교점에서의 접선 조건으로 a²+b²과 곡률',
  problem:`3차원 유클리드 공간 $\\mathbb{R}^3$에서 곡선 $C$를 $C=\\{(x,y,z)\\in\\mathbb{R}^3\\mid y=e^{ax},\\,yz=b\\}$ (단, $a,\\,b$는 상수)라 하자. 곡선 $C$와 $yz$평면의 교점 P에서 곡선 $C$의 접선(tangent line)이 점 $(2\\sqrt2,3,-1)$을 지날 때, $a^2+b^2$의 값과 점 P에서의 곡률(curvature)을 순서대로 구하시오.`,
  steps:[
    {num:'Step 1', title:'교점 P와 매개변수화',
     body:`$x=0$: $y=1$, $z=b$. $P=(0,1,b)$. $x$로 매개변수화: $r(x)=(x,\\,e^{ax},\\,be^{-ax})$.

$r'(x)=(1,\\,ae^{ax},\\,-abe^{-ax})$, $r'(0)=(1,a,-ab)$.`},
    {num:'Step 2', title:'접선이 주어진 점을 지나는 조건',
     body:`$(2\\sqrt2,3,-1)-(0,1,b)=(2\\sqrt2,\\,2,\\,-1-b)\\parallel(1,a,-ab)$

$x$성분: $\\lambda=2\\sqrt2$. $y$성분: $2=2\\sqrt2\\,a\\Rightarrow a=\\dfrac1{\\sqrt2}=\\dfrac{\\sqrt2}2$.

$z$성분: $-1-b=2\\sqrt2(-ab)=-2b\\ \\Rightarrow\\ b=1$`},
    {num:'Step 3', title:'a²+b² 계산',
     body:`$$a^2+b^2=\\frac12+1=\\frac32$$`},
    {num:'Step 4', title:'P에서의 곡률',
     body:`$r''(x)=(0,a^2e^{ax},a^2be^{-ax})$. $x=0$: $r'(0)=\\left(1,\\dfrac{\\sqrt2}2,-\\dfrac{\\sqrt2}2\\right)$, $r''(0)=\\left(0,\\dfrac12,\\dfrac12\\right)$.

$r'\\times r''=\\left(\\dfrac{\\sqrt2}2,-\\dfrac12,\\dfrac12\\right)$, $|r'\\times r''|=1$. $|r'(0)|^2=2$.

$$\\kappa=\\frac1{(\\sqrt2)^3}=\\frac{\\sqrt2}4$$`}
  ],
  answer:'$a^2+b^2=\\dfrac32$, 곡률 $=\\dfrac{\\sqrt2}4$',
  footnotes:[
    {n:'①',text:'yz평면은 x=0인 평면이므로, 곡선의 매개변수가 x일 때 x=0을 대입하면 교점을 바로 얻는다.'},
    {n:'②',text:'접선이 특정 점을 지난다는 조건은 "그 점-교점 벡터가 접선방향벡터와 평행"이라는 뜻이므로 성분별 비례식을 세운다.'}
  ]
},
{
  id:'2024b7', year:2024, type:'전공B', cat:'gauss', pts:4,
  title:'회전타원면의 가우스곡률과 전곡률 적분',
  problem:`3차원 유클리드 공간 $\\mathbb{R}^3$에서 곡면 $M:x^2+4y^2+4z^2=4,\\ 0<x<\\dfrac{4\\sqrt5}5,\\ 0<z<\\sqrt3y$ 위의 점 $\\left(\\sqrt2,\\dfrac12,\\dfrac12\\right)$에서의 가우스곡률(Gaussian curvature) $K$를 구하시오. 또한, 곡면 $M$에서의 가우스 곡률합(가우스 전곡률, total Gaussian curvature) $\\displaystyle\\iint_MK\\,dA$를 풀이 과정과 함께 쓰시오. (단, $dA$는 곡면 $M$의 면적소(area element)이다.)`,
  steps:[
    {num:'Step 1', title:'x축 회전 타원면으로 파악',
     body:`$\\dfrac{x^2}4+y^2+z^2=1$: $x$축에 대한 회전면 ($y,z$ 계수 같음). $\\rho(x)=\\sqrt{y^2+z^2}=\\sqrt{1-x^2/4}$.

$\\rho\\rho'=-x/4$이고 이를 다시 미분해 $\\rho\\rho''=-\\dfrac14-\\rho'^2$.`},
    {num:'Step 2', title:'주어진 점에서 K 계산',
     body:`$x_0=\\sqrt2$: $\\rho=\\sqrt{1/2}=\\dfrac{\\sqrt2}2$, $\\rho'=-x_0/(4\\rho)=-\\dfrac12$, $\\rho\\rho''=-\\dfrac14-\\dfrac14=-\\dfrac12\\Rightarrow\\rho''=-\\dfrac{\\sqrt2}2$.

회전면 공식 $K=\\dfrac{-\\rho''}{\\rho(1+\\rho'^2)^2}$:

$$K=\\frac{\\sqrt2/2}{(\\sqrt2/2)\\times(5/4)^2}=\\frac1{25/16}=\\frac{16}{25}$$`},
    {num:'Step 3', title:'영역의 각도 범위 파악',
     body:`$0<z<\\sqrt3y$는 극각(원기둥좌표) $\\theta=\\tan^{-1}(z/y)$가 $0<\\theta<\\pi/3$인 쐐기꼴 영역 ①.

$$\\iint_MK\\,dA=\\frac\\pi3\\int_0^{4\\sqrt5/5}\\frac{-\\rho''}{(1+\\rho'^2)^{3/2}}dx=\\frac\\pi3\\left[\\frac{-\\rho'}{\\sqrt{1+\\rho'^2}}\\right]_0^{4\\sqrt5/5}$$`},
    {num:'Step 4', title:'경계값 계산',
     body:`$\\rho'(0)=0$. $x_1=4\\sqrt5/5=4/\\sqrt5$: $\\rho(x_1)=\\sqrt{1-4/5}=1/\\sqrt5$, $\\rho'(x_1)=-x_1/(4\\rho(x_1))=-1$.

$$\\left[\\frac{-\\rho'}{\\sqrt{1+\\rho'^2}}\\right]_0^{x_1}=\\frac{1}{\\sqrt2}-0=\\frac1{\\sqrt2}$$

$$\\iint_MK\\,dA=\\frac\\pi3\\times\\frac1{\\sqrt2}=\\frac{\\sqrt2\\pi}6$$`}
  ],
  answer:'$K=\\dfrac{16}{25}$, $\\displaystyle\\iint_MK\\,dA=\\dfrac{\\sqrt2\\pi}6$',
  footnotes:[
    {n:'①',text:'y=ρcosθ,z=ρsinθ로 놓으면 z<√3y ⟺ tanθ<√3 ⟺ θ<π/3 (y,z>0인 경우).'}
  ]
},

// ───────────────────────────────────────
// 2025
// ───────────────────────────────────────
{
  id:'2025a9', year:2025, type:'전공A', cat:'fund', pts:4,
  title:'현수면(카테노이드)의 접평면·가우스곡률·평균곡률',
  problem:`3차원 유클리드 공간 $\\mathbb{R}^3$에서 곡면 $X(u,v)=(1+2u,\\,2\\cosh u\\cos v,\\,2\\cosh u\\sin v)$ 위의 $u=0,\\,v=\\dfrac\\pi4$인 점 P에서 접평면(tangent plane)의 방정식을 풀이 과정과 함께 쓰시오. 또한 점 P에서 곡면 $X$의 가우스곡률(Gaussian curvature) $K$와 평균곡률(mean curvature) $H$의 값을 각각 풀이 과정과 함께 쓰시오.`,
  steps:[
    {num:'Step 1', title:'X_u, X_v와 법선 계산',
     body:`$X_u=(2,2\\sinh u\\cos v,2\\sinh u\\sin v)$, $X_v=(0,-2\\cosh u\\sin v,2\\cosh u\\cos v)$.

$u=0,v=\\pi/4$: $\\sinh0=0,\\cosh0=1$이므로 $X_u=(2,0,0)$, $X_v=(0,-\\sqrt2,\\sqrt2)$.

$P=X(0,\\pi/4)=(1,\\sqrt2,\\sqrt2)$. $X_u\\times X_v=(0,-2\\sqrt2,-2\\sqrt2)\\parallel(0,-1,-1)$.`},
    {num:'Step 2', title:'접평면 방정식',
     body:`법선 $(0,-1,-1)$, 점 $(1,\\sqrt2,\\sqrt2)$: $-(y-\\sqrt2)-(z-\\sqrt2)=0$

$$y+z=2\\sqrt2$$`},
    {num:'Step 3', title:'기본형식 계수',
     body:`$X_{uu}=(0,2\\cosh u\\cos v,2\\cosh u\\sin v),\\ X_{uv}=(0,-2\\sinh u\\sin v,2\\sinh u\\cos v),\\ X_{vv}=(0,-2\\cosh u\\cos v,-2\\cosh u\\sin v)$

$u=0,v=\\pi/4$: $X_{uu}=(0,\\sqrt2,\\sqrt2)$, $X_{uv}=(0,0,0)$, $X_{vv}=(0,-\\sqrt2,-\\sqrt2)$. 단위법선 $\\mathbf{n}=(0,-1,-1)/\\sqrt2$.

$E=4,\\,F=0,\\,G=4$; $e=-2,\\,f=0,\\,g=2$`},
    {num:'Step 4', title:'K, H 계산',
     body:`$$K=\\frac{eg-f^2}{EG-F^2}=\\frac{-4}{16}=-\\frac14$$

$$H=\\frac{eG-2fF+gE}{2(EG-F^2)}=\\frac{-8+8}{32}=0$$

(이 곡면은 사실 카테노이드(현수면)로, 평균곡률이 모든 점에서 $0$인 극소곡면 ①입니다.)`}
  ],
  answer:'접평면: $y+z=2\\sqrt2$, $K=-\\dfrac14$, $H=0$',
  footnotes:[
    {n:'①',text:'카테노이드(현수면): x=c cosh(v/c) cosθ 꼴로 매개변수화되는 회전면으로, 평균곡률이 항상 0인 극소곡면의 대표적 예.'}
  ]
},
{
  id:'2025b2', year:2025, type:'전공B', cat:'curve', pts:2,
  title:'심장형(카디오이드)의 길이와 전곡률',
  problem:`극방정식(polar equation) $r=1-\\cos\\left(\\theta-\\dfrac\\pi3\\right)\\ (0\\le\\theta\\le2\\pi)$로 주어진 평면곡선(plane curve)의 길이와 전곡률(total curvature)의 값을 순서대로 구하시오. (단, 곡선의 방향은 시계반대방향으로 주어져 있다.)`,
  steps:[
    {num:'Step 1', title:'위상이동은 길이·전곡률에 무관',
     body:`$\\varphi=\\theta-\\pi/3$로 치환하면 $r=1-\\cos\\varphi$인 표준 심장형(cardioid)과 같은 곡선을 단지 회전시킨 것 ①이므로 길이와 전곡률은 표준 카디오이드와 동일.`},
    {num:'Step 2', title:'길이 계산',
     body:`$r'=\\sin\\varphi$. $r^2+r'^2=(1-\\cos\\varphi)^2+\\sin^2\\varphi=2-2\\cos\\varphi=4\\sin^2(\\varphi/2)$.

$$L=\\int_0^{2\\pi}2\\sin(\\varphi/2)\\,d\\varphi=\\Bigl[-4\\cos(\\varphi/2)\\Bigr]_0^{2\\pi}=4+4=8$$`},
    {num:'Step 3', title:'극좌표 곡률 공식으로 κ ds 정리',
     body:`극좌표 곡률 공식 ②: $\\kappa\\,ds=\\dfrac{r^2+2r'^2-rr''}{r^2+r'^2}\\,d\\varphi$

$r''=\\cos\\varphi$이므로 분자 $=(1-\\cos\\varphi)^2+2\\sin^2\\varphi-(1-\\cos\\varphi)\\cos\\varphi=3(1-\\cos\\varphi)=3r$

분모 $=r^2+r'^2=2(1-\\cos\\varphi)=2r$이므로:

$$\\kappa\\,ds=\\frac{3r}{2r}\\,d\\varphi=\\frac32\\,d\\varphi$$

(첨점 $r=0$에서도 비율이 상수로 소거되어 특이점이 사라짐)`},
    {num:'Step 4', title:'전곡률 적분',
     body:`$$\\int_0^{2\\pi}\\kappa\\,ds=\\int_0^{2\\pi}\\frac32\\,d\\varphi=3\\pi$$

(단순폐곡선이면 전곡률이 보통 $2\\pi$이지만, 카디오이드는 원점에서 첨점(cusp)을 가지므로 $3\\pi$로 더 큽니다.)`}
  ],
  answer:'길이 $=8$, 전곡률 $=3\\pi$',
  footnotes:[
    {n:'①',text:'극방정식에서 θ를 θ-c로 치환하는 것은 곡선 전체를 각 c만큼 회전시키는 것과 같아, 길이·곡률 등 회전에 불변인 양은 변하지 않는다.'},
    {n:'②',text:'극곡선 r=r(θ)의 곡률: κ=(r²+2r\'²-rr\'\')/(r²+r\'²)^{3/2}, ds=√(r²+r\'²)dθ이므로 κds=(r²+2r\'²-rr\'\')/(r²+r\'²) dθ.'}
  ]
},

// ───────────────────────────────────────
// 2026
// ───────────────────────────────────────
{
  id:'2026a4', year:2026, type:'전공A', cat:'curve', pts:2,
  title:'α·N=-2s² 조건과 α(1)·B(1)로 곡률·비틀림률 구하기',
  problem:`3차원 유클리드 공간 $\\mathbb{R}^3$에서 단위속력곡선(unit speed curve) $\\alpha:(0,2)\\to\\mathbb{R}^3$이 모든 $s\\in(0,2)$에 대하여 $\\alpha(s)\\cdot\\alpha'(s)=0,\\ \\alpha(s)\\cdot N(s)=-2s^2$을 만족시킨다. $\\alpha(1)\\cdot B(1)=12$일 때, 곡선 $\\alpha(s)$의 $s=1$에서의 곡률(curvature) $\\kappa(1)$과 비틀림률(열률, 꼬임률, torsion)의 절댓값 $|\\tau(1)|$을 순서대로 구하시오. (단, $N(s)$는 점 $\\alpha(s)$에서의 법선벡터(normal vector)이고, $B(s)$는 점 $\\alpha(s)$에서의 종법선벡터(binormal vector)이다.)`,
  steps:[
    {num:'Step 1', title:'α·N=-2s²에서 κ(s) 직접 결정',
     body:`$\\alpha\\cdot\\alpha'=0$은 $\\alpha\\cdot T=0$. 이를 미분: $T\\cdot T+\\alpha\\cdot(\\kappa N)=0\\Rightarrow\\alpha\\cdot N=-\\dfrac1\\kappa$ ①.

주어진 조건과 비교: $-\\dfrac1{\\kappa(s)}=-2s^2\\ \\Rightarrow\\ \\kappa(s)=\\dfrac1{2s^2}$.

$$\\kappa(1)=\\frac12$$`},
    {num:'Step 2', title:'α·N=-2s²을 다시 미분',
     body:`$\\alpha'\\cdot N+\\alpha\\cdot N'=-4s$. $\\alpha'\\cdot N=T\\cdot N=0$. $N'=-\\kappa T+\\tau B$이므로:

$$\\alpha\\cdot N'=-\\kappa(\\alpha\\cdot T)+\\tau(\\alpha\\cdot B)=\\tau(\\alpha\\cdot B)$$

따라서 $\\tau(s)\\bigl(\\alpha(s)\\cdot B(s)\\bigr)=-4s$.`},
    {num:'Step 3', title:'s=1에서 τ(1) 계산',
     body:`$s=1$: $\\tau(1)\\times12=-4\\ \\Rightarrow\\ \\tau(1)=-\\dfrac13$

$$|\\tau(1)|=\\frac13$$`}
  ],
  answer:'$\\kappa(1)=\\dfrac12$, $|\\tau(1)|=\\dfrac13$',
  footnotes:[
    {n:'①',text:'α·T=0을 미분하면 α\'·T+α·T\'=1+κ(α·N)=0이 되어 α·N=-1/κ (α가 원점 중심 구면에 있지 않아도, α·T=0이라는 조건만으로 성립하는 관계식).'}
  ]
},
{
  id:'2026b11', year:2026, type:'전공B', cat:'gauss', pts:4,
  title:'세 평행원의 측지곡률 조건으로 f(0)과 가우스곡률 결정',
  problem:`최고차항의 계수가 $2$인 삼차함수 $f(x)$가 $-1<x<2$에서 $f(x)>0$이다. 3차원 유클리드 공간 $\\mathbb{R}^3$에서 곡선 $y=f(x),\\,z=0\\,(-1<x<2)$를 $x$축 둘레로 $360^\\circ$ 회전시켜 얻은 회전면(surface of revolution)을 $M$이라 하고, 곡면 $M$이 평면 $x=0$과 만나서 생기는 원을 $\\alpha$, 평면 $x=\\dfrac23$와 만나서 생기는 원을 $\\beta$, 평면 $x=1$과 만나서 생기는 원을 $\\gamma$라 하자. 곡면 $M$에 놓인 곡선으로서 $\\alpha,\\,\\beta,\\,\\gamma$의 측지곡률(geodesic curvature)이 각각 $0,\\,0,\\,\\dfrac25$이다. $f(0)$의 값과 곡선 $\\alpha$ 위의 점에서 $M$의 가우스 곡률(Gaussian curvature)을 풀이 과정과 함께 쓰시오.`,
  diagram:`<svg viewBox="0 0 320 200" xmlns="http://www.w3.org/2000/svg" style="font-family:'Noto Sans KR',sans-serif">
    <line x1="15" y1="100" x2="305" y2="100" stroke="var(--t3)" stroke-width="1" stroke-dasharray="3 3"/>
    <polygon points="305,100 297,96 297,104" fill="var(--t3)"/>
    <text x="300" y="115" font-size="11" fill="var(--t3)">x</text>
    <path d="M30,60 Q70,35 113,44 Q145,50 175,52 Q205,45 207,44 Q250,30 295,10" fill="none" stroke="var(--t1)" stroke-width="1.8"/>
    <path d="M30,140 Q70,165 113,156 Q145,150 175,148 Q205,155 207,156 Q250,170 295,190" fill="none" stroke="var(--t1)" stroke-width="1.8"/>
    <ellipse cx="113" cy="100" rx="7" ry="56" fill="var(--acc-bg)" stroke="var(--acc)" stroke-width="1.8"/>
    <ellipse cx="175" cy="100" rx="7" ry="48.5" fill="var(--acc-bg)" stroke="var(--acc)" stroke-width="1.8"/>
    <ellipse cx="207" cy="100" rx="7" ry="56" fill="var(--acc-bg)" stroke="var(--acc)" stroke-width="1.8"/>
    <text x="113" y="30" font-size="11" fill="var(--t1)" text-anchor="middle">x=0</text>
    <text x="113" y="172" font-size="12" fill="var(--acc)" text-anchor="middle">α</text>
    <text x="175" y="24" font-size="11" fill="var(--t1)" text-anchor="middle">x=2/3</text>
    <text x="175" y="164" font-size="12" fill="var(--acc)" text-anchor="middle">β</text>
    <text x="207" y="30" font-size="11" fill="var(--t1)" text-anchor="middle">x=1</text>
    <text x="207" y="172" font-size="12" fill="var(--acc)" text-anchor="middle">γ</text>
    <text x="160" y="195" font-size="11" fill="var(--t2)" text-anchor="middle">y=f(x)를 x축 둘레로 회전 — 세 단면원 α,β,γ의 측지곡률이 0,0,2/5</text>
  </svg>`,
  steps:[
    {num:'Step 1', title:'평행원의 측지곡률 공식',
     body:`회전면(반지름함수 $r(x)=f(x)$)의 평행원(단면원)의 측지곡률 ①:

$$\\kappa_g(x_0)=\\frac{|f'(x_0)|}{f(x_0)\\sqrt{1+f'(x_0)^2}}$$

($\\because$ 평행원의 공간곡선 곡률은 $1/f(x_0)$이고, 법곡률과 뫼니에 정리로 분리하면 위 식이 유도됨.)`},
    {num:'Step 2', title:'α, β의 측지곡률=0에서 f\'의 두 근',
     body:`$\\kappa_g=0\\iff f'(x_0)=0$이므로 $f'(0)=0,\\ f'(2/3)=0$.

$f$가 삼차(최고차항 계수 $2$)이므로 $f'(x)=6x^2+\\cdots$는 이차식. 두 근이 $0,\\,2/3$이므로:

$$f'(x)=6x(x-\\tfrac23)=6x^2-4x$$

적분: $f(x)=2x^3-2x^2+C$ (단, $C=f(0)$, 우리가 구하려는 값).`},
    {num:'Step 3', title:'γ의 조건으로 C 결정',
     body:`$f(1)=2-2+C=C$ (즉 $f(1)=f(0)=C$). $f'(1)=6-4=2$.

$$\\kappa_g(1)=\\frac{|f'(1)|}{f(1)\\sqrt{1+f'(1)^2}}=\\frac2{C\\sqrt5}=\\frac25$$

$$C\\sqrt5=5\\ \\Rightarrow\\ C=\\sqrt5$$

$$f(0)=\\sqrt5$$`},
    {num:'Step 4', title:'α 위의 점에서 가우스곡률',
     body:`$f''(x)=12x-4$이므로 $f''(0)=-4$.

회전면 공식: $K(x)=\\dfrac{-f''(x)}{f(x)(1+f'(x)^2)^2}$. $x=0$: $f(0)=\\sqrt5,\\,f'(0)=0$:

$$K(0)=\\frac{-(-4)}{\\sqrt5\\times1^2}=\\frac4{\\sqrt5}=\\frac{4\\sqrt5}5$$`}
  ],
  answer:'$f(0)=\\sqrt5$, $\\alpha$ 위에서 가우스곡률 $=\\dfrac{4\\sqrt5}5$',
  footnotes:[
    {n:'①',text:'회전면의 위선(평행원)은 공간곡선으로서 곡률이 1/r(x0)인 원이며, 뫼니에 정리로 측지곡률·법곡률로 분리하면 κ_g=|r\'|/(r√(1+r\'²))가 나온다.'}
  ]
}

]};
