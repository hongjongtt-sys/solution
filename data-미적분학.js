window.SUBJECTS = window.SUBJECTS || {};

window.SUBJECTS['미적분학'] = {
  label: '미적분학',
  categories: [
    { id:'mint',   name:'중적분·좌표변환',     color:'#7a1f6b', light:'#f6e9f4' },
    { id:'green',  name:'선적분·그린 정리',    color:'#b0451a', light:'#fbeee7' },
    { id:'mvcalc', name:'극한·연속·최대최소',  color:'#4f4f56', light:'#ececed' }
  ],
  freqGroups: [
    {
      id:'mint', name:'중적분·적분순서 변경·좌표변환', stars:'★★★★★★', count:10, color:'#5a1450',
      desc:'적분 순서를 바꿔야 풀리는 반복적분, 극좌표·일반 변수변환(야코비안), 삼중적분, 넓이 계산',
      problems:['2014a7','2016a5','2017a4','2018a4','2019a4','2021a5','2022a2','2023a2','2024a7','2026a8']
    },
    {
      id:'green', name:'선적분과 그린 정리', stars:'★★★', count:4, color:'#87340f',
      desc:'그린 정리로 폐곡선 선적분을 넓이적분으로, 보존장이면 퍼텐셜 함수로 바꿔 계산',
      problems:['2015a2','2016a4','2020a2','2025a2']
    },
    {
      id:'mvcalc', name:'극한·연속성·최대최소', stars:'★★', count:3, color:'#35353b',
      desc:'적분과 극한의 교환, 이변수함수의 연속성 판정, 유계 닫힌영역에서의 최대·최소',
      problems:['2014a10','2017a5','2019a3']
    }
  ],
  problems: [

// ───────────────────────────────────────
// 2014
// ───────────────────────────────────────
{
  id:'2014a7', year:2014, type:'전공A', cat:'mint', pts:2,
  title:'적분 순서를 바꿔 $\\int_0^1\\int_{\\sqrt y}^1 7y^2\\sin(x^7)\\,dx\\,dy$ 계산하기',
  problem:`반복적분 $\\displaystyle\\int_0^1\\int_{\\sqrt y}^1 7y^2\\sin(x^7)\\,dx\\,dy$의 값을 구하시오.`,
  diagram:`<svg viewBox="0 0 280 220" xmlns="http://www.w3.org/2000/svg" style="font-family:'Noto Sans KR',sans-serif">
    <text x="140" y="16" font-size="11" fill="var(--t2)" text-anchor="middle">적분영역: √y ≤ x ≤ 1  ⟺  0 ≤ y ≤ x²</text>
    <polygon points="50,190 65,188.5 80,184 95,176.5 110,166 125,152.5 140,136 155,116.5 170,94 185,68.5 200,40 200,190" fill="var(--acc)" fill-opacity="0.18" stroke="none"/>
    <polyline points="50,190 65,188.5 80,184 95,176.5 110,166 125,152.5 140,136 155,116.5 170,94 185,68.5 200,40" fill="none" stroke="var(--acc)" stroke-width="2"/>
    <line x1="200" y1="40" x2="200" y2="190" stroke="var(--acc)" stroke-width="2"/>
    <line x1="40" y1="190" x2="240" y2="190" stroke="var(--t2)" stroke-width="1.2"/>
    <line x1="50" y1="205" x2="50" y2="30" stroke="var(--t2)" stroke-width="1.2"/>
    <line x1="50" y1="40" x2="200" y2="40" stroke="var(--t3)" stroke-width="1" stroke-dasharray="3 3"/>
    <text x="45" y="44" font-size="10" fill="var(--t3)" text-anchor="end">1</text>
    <text x="45" y="202" font-size="10" fill="var(--t3)" text-anchor="end">O</text>
    <text x="200" y="204" font-size="10" fill="var(--t3)" text-anchor="middle">1</text>
    <text x="235" y="184" font-size="11" fill="var(--t2)">x</text>
    <text x="60" y="46" font-size="11" fill="var(--t2)">y</text>
    <text x="214" y="76" font-size="11" fill="var(--acc)">y = x²</text>
    <text x="140" y="212" font-size="10" fill="var(--t3)" text-anchor="middle">세로로 자르면(y 먼저) sin(x⁷)이 치환으로 풀린다</text>
  </svg>`,
  steps:[
    {num:'Step 1', title:'적분영역을 부등식으로 다시 쓰기',
     body:`주어진 순서에서는 안쪽이 $x$ 적분이고 $\\sin(x^7)$의 원시함수를 초등함수로 쓸 수 없습니다 ①. 그래서 순서를 바꿉니다.

영역은

$$0\\le y\\le1,\\qquad \\sqrt y\\le x\\le1$$

입니다. $\\sqrt y\\le x$는 $y\\ge0$에서 $y\\le x^2$과 같으므로, 같은 영역을 $x$ 기준으로 쓰면

$$0\\le x\\le1,\\qquad 0\\le y\\le x^2$$`},
    {num:'Step 2', title:'순서를 바꿔 안쪽 $y$ 적분 수행',
     body:`$$\\int_0^1\\int_0^{x^2}7y^2\\sin(x^7)\\,dy\\,dx=\\int_0^1 7\\sin(x^7)\\left[\\frac{y^3}{3}\\right]_0^{x^2}dx$$

$$=\\int_0^1 7\\sin(x^7)\\cdot\\frac{x^6}{3}dx=\\frac{7}{3}\\int_0^1 x^6\\sin(x^7)\\,dx$$

$x^6$이 따라 나온 덕분에 치환이 가능해집니다.`},
    {num:'Step 3', title:'치환적분',
     body:`$u=x^7$로 두면 $du=7x^6dx$이고, $x:0\\to1$일 때 $u:0\\to1$입니다.

$$\\frac{7}{3}\\int_0^1 x^6\\sin(x^7)dx=\\frac{1}{3}\\int_0^1\\sin u\\,du=\\frac{1}{3}\\big[-\\cos u\\big]_0^1$$

$$=\\frac{1-\\cos1}{3}$$`}
  ],
  answer:'$\\dfrac{1-\\cos1}{3}$',
  footnotes:[
    {n:'①',text:'$\\sin(x^7)$의 부정적분은 초등함수로 표현되지 않는다. 반복적분에서 안쪽 적분이 이런 꼴이면 순서를 바꾸라는 신호로 읽으면 된다. 순서를 바꾸면 안쪽 적분에서 $x^6$ 같은 인수가 따라 나와 치환이 가능해지는 경우가 많다.'},
    {n:'②',text:'푸비니 정리(Fubini theorem): 피적분함수가 영역에서 적분가능하면(연속이면 충분) 반복적분의 순서를 바꿔도 값이 같다. 순서를 바꿀 때 실수하기 쉬운 부분은 적분값이 아니라 적분 한계이므로, 영역을 부등식으로 정확히 다시 쓰는 것이 핵심이다.'}
  ]
},

{
  id:'2014a10', year:2014, type:'전공A', cat:'mvcalc', pts:2,
  title:'$\\lim_{n\\to\\infty}\\int_0^1 n^2xe^{-2nx}dx$의 값',
  problem:`$\\displaystyle\\lim_{n\\to\\infty}\\int_0^1 n^2xe^{-2nx}\\,dx$의 값을 구하시오.`,
  steps:[
    {num:'Step 1', title:'치환으로 $n$을 적분 밖으로 빼내기',
     body:`$t=2nx$로 두면 $x=\\dfrac{t}{2n}$, $dx=\\dfrac{dt}{2n}$이고, $x:0\\to1$일 때 $t:0\\to2n$입니다 ①.

$$\\int_0^1 n^2xe^{-2nx}dx=n^2\\int_0^{2n}\\frac{t}{2n}e^{-t}\\frac{dt}{2n}=\\frac{n^2}{4n^2}\\int_0^{2n}te^{-t}dt$$

$$=\\frac{1}{4}\\int_0^{2n}te^{-t}dt$$

$n$이 계수에서 완전히 사라지고 적분 상한에만 남았습니다.`},
    {num:'Step 2', title:'부분적분으로 적분값 계산',
     body:`$u=t$, $dv=e^{-t}dt$로 부분적분하면

$$\\int_0^{T}te^{-t}dt=\\Big[-te^{-t}\\Big]_0^{T}+\\int_0^{T}e^{-t}dt=-Te^{-T}+\\big(1-e^{-T}\\big)$$

$$=1-(T+1)e^{-T}$$`},
    {num:'Step 3', title:'극한 취하기',
     body:`$T=2n\\to\\infty$일 때 지수함수가 다항식보다 훨씬 빨리 감소하므로 ② $(T+1)e^{-T}\\to0$입니다.

$$\\lim_{n\\to\\infty}\\frac{1}{4}\\Big(1-(2n+1)e^{-2n}\\Big)=\\frac{1}{4}$$`}
  ],
  answer:'$\\dfrac{1}{4}$',
  footnotes:[
    {n:'①',text:'적분 안에 $n$이 여러 군데 들어 있을 때는 $nx$처럼 뭉쳐 있는 부분을 새 변수로 잡는 것이 정석이다. 그러면 $n$이 계수와 적분 한계로 분리되어 극한을 다루기 쉬워진다.'},
    {n:'②',text:'$\\lim_{T\\to\\infty}T^ke^{-T}=0$ (임의의 $k$에 대해). 로피탈 정리를 $k$번 적용하면 확인된다. 지수적 감소가 다항식 증가를 항상 이긴다는 사실이다.'},
    {n:'③',text:'참고로 $\\int_0^\\infty te^{-t}dt=\\Gamma(2)=1!=1$이다. 이 문제의 답 $\\frac14$은 결국 $\\frac14\\Gamma(2)$이다. 또 $n^2xe^{-2nx}$는 $n$이 커질수록 원점 근처에 높고 좁은 봉우리를 이루는데, 그 봉우리 아래 넓이가 $\\frac14$로 수렴한다는 뜻이다.'}
  ]
},

// ───────────────────────────────────────
// 2015
// ───────────────────────────────────────
{
  id:'2015a2', year:2015, type:'전공A', cat:'green', pts:2,
  title:'그린 정리로 원 위의 선적분 계산하기',
  problem:`다음 그림과 같이 반시계 방향의 단순닫힌곡선(simple closed curve) $C:x^2+y^2=4$가 주어졌을 때,

$$\\int_C\\big(e^{\\sin x}-4x^2y\\big)dx+\\big(e^{\\cos y}+4xy^2\\big)dy$$

의 값을 구하시오.`,
  diagram:`<svg viewBox="0 0 280 230" xmlns="http://www.w3.org/2000/svg" style="font-family:'Noto Sans KR',sans-serif">
    <circle cx="140" cy="115" r="75" fill="var(--acc)" fill-opacity="0.12" stroke="var(--acc)" stroke-width="2"/>
    <line x1="45" y1="115" x2="240" y2="115" stroke="var(--t2)" stroke-width="1.2"/>
    <line x1="140" y1="212" x2="140" y2="22" stroke="var(--t2)" stroke-width="1.2"/>
    <polygon points="193,62 183,60 189,72" fill="var(--acc)"/>
    <text x="200" y="56" font-size="12" fill="var(--acc)">C</text>
    <text x="132" y="34" font-size="10" fill="var(--t3)" text-anchor="end">2</text>
    <text x="212" y="130" font-size="10" fill="var(--t3)" text-anchor="middle">2</text>
    <text x="68" y="130" font-size="10" fill="var(--t3)" text-anchor="middle">−2</text>
    <text x="132" y="200" font-size="10" fill="var(--t3)" text-anchor="end">−2</text>
    <text x="132" y="130" font-size="10" fill="var(--t3)" text-anchor="end">O</text>
    <text x="238" y="131" font-size="11" fill="var(--t2)">x</text>
    <text x="148" y="32" font-size="11" fill="var(--t2)">y</text>
    <text x="140" y="222" font-size="10" fill="var(--t3)" text-anchor="middle">반시계 방향 = 그린 정리의 양의 방향</text>
  </svg>`,
  steps:[
    {num:'Step 1', title:'그린 정리 적용',
     body:`$P=e^{\\sin x}-4x^2y$, $Q=e^{\\cos y}+4xy^2$라 두면, $C$가 반시계 방향의 단순닫힌곡선이므로 그린 정리 ①를 쓸 수 있습니다.

$$\\oint_C P\\,dx+Q\\,dy=\\iint_D\\left(\\frac{\\partial Q}{\\partial x}-\\frac{\\partial P}{\\partial y}\\right)dA$$

여기서 $D$는 원판 $x^2+y^2\\le4$입니다.`},
    {num:'Step 2', title:'편도함수 계산 — 지수 항이 소거됨',
     body:`$$\\frac{\\partial Q}{\\partial x}=\\frac{\\partial}{\\partial x}\\big(e^{\\cos y}+4xy^2\\big)=4y^2$$

$e^{\\cos y}$는 $x$와 무관하므로 사라집니다.

$$\\frac{\\partial P}{\\partial y}=\\frac{\\partial}{\\partial y}\\big(e^{\\sin x}-4x^2y\\big)=-4x^2$$

$$\\frac{\\partial Q}{\\partial x}-\\frac{\\partial P}{\\partial y}=4y^2+4x^2=4(x^2+y^2)$$

적분이 불가능해 보이던 $e^{\\sin x}$, $e^{\\cos y}$가 통째로 사라진 것이 이 문제의 핵심입니다 ②.`},
    {num:'Step 3', title:'극좌표로 넓이적분 계산',
     body:`$x=r\\cos\\theta$, $y=r\\sin\\theta$, $dA=r\\,dr\\,d\\theta$로 바꾸면

$$\\iint_D 4(x^2+y^2)dA=\\int_0^{2\\pi}\\int_0^2 4r^2\\cdot r\\,dr\\,d\\theta=4\\cdot2\\pi\\left[\\frac{r^4}{4}\\right]_0^2$$

$$=8\\pi\\cdot4=32\\pi$$`}
  ],
  answer:'$32\\pi$',
  footnotes:[
    {n:'①',text:'그린 정리: $D$가 단순닫힌곡선 $C$로 둘러싸인 영역이고 $C$가 양의 방향(반시계, 즉 영역을 왼쪽에 두고 도는 방향)일 때 $\\oint_C P\\,dx+Q\\,dy=\\iint_D(Q_x-P_y)\\,dA$. 곡선 위의 적분을 영역 위의 적분으로 바꿔주는 정리다.'},
    {n:'②',text:'$P$의 $e^{\\sin x}$는 $y$로 미분하면, $Q$의 $e^{\\cos y}$는 $x$로 미분하면 0이 된다. 시험 문제에서 "$e^{\\sin x}$처럼 적분이 안 되는 항"이 보이면 그린 정리로 소거하라는 신호다.'},
    {n:'③',text:'극좌표에서 $dA=r\\,dr\\,d\\theta$의 $r$은 야코비안이다. 미소 부채꼴의 넓이가 $($호의 길이 $r\\,d\\theta) \\times ($반지름 방향 $dr)$이기 때문이다. 이 $r$을 빠뜨리는 것이 가장 흔한 실수다.'}
  ]
},

// ───────────────────────────────────────
// 2016
// ───────────────────────────────────────
{
  id:'2016a4', year:2016, type:'전공A', cat:'green', pts:2,
  title:'보존장의 선적분을 퍼텐셜 함수로 계산하기',
  problem:`그림과 같이 좌표평면에서 곡선 $C$는 점 $(-2,0)$에서 시작하여 점 $(0,-2)$와 점 $(2,0)$을 지나 점 $(0,2)$까지 선분으로 연결한 경로이다. $\\displaystyle\\int_C(3+ye^x)dx+e^x\\,dy$의 값을 구하시오.`,
  diagram:`<svg viewBox="0 0 300 220" xmlns="http://www.w3.org/2000/svg" style="font-family:'Noto Sans KR',sans-serif">
    <line x1="60" y1="120" x2="250" y2="120" stroke="var(--t2)" stroke-width="1.2"/>
    <line x1="150" y1="200" x2="150" y2="35" stroke="var(--t2)" stroke-width="1.2"/>
    <polyline points="90,120 150,180 210,120 150,60" fill="none" stroke="var(--acc)" stroke-width="2.2"/>
    <polygon points="122,152 112,148 118,142" fill="var(--acc)"/>
    <polygon points="178,152 172,142 168,148" fill="var(--acc)"/>
    <polygon points="182,88 172,84 178,78" fill="var(--acc)"/>
    <circle cx="90" cy="120" r="3.5" fill="var(--acc)"/>
    <circle cx="150" cy="60" r="3.5" fill="var(--t1)"/>
    <text x="86" y="112" font-size="10" fill="var(--acc)" text-anchor="middle">시작</text>
    <text x="162" y="58" font-size="10" fill="var(--t1)">끝</text>
    <text x="196" y="86" font-size="12" fill="var(--acc)">C</text>
    <text x="140" y="64" font-size="10" fill="var(--t3)" text-anchor="end">2</text>
    <text x="212" y="134" font-size="10" fill="var(--t3)" text-anchor="middle">2</text>
    <text x="86" y="134" font-size="10" fill="var(--t3)" text-anchor="middle">−2</text>
    <text x="158" y="192" font-size="10" fill="var(--t3)">−2</text>
    <text x="142" y="134" font-size="10" fill="var(--t3)" text-anchor="end">O</text>
    <text x="248" y="136" font-size="11" fill="var(--t2)">x</text>
    <text x="140" y="44" font-size="11" fill="var(--t2)" text-anchor="end">y</text>
    <text x="150" y="214" font-size="10" fill="var(--t3)" text-anchor="middle">보존장이므로 경로와 무관, 시작점과 끝점만 필요</text>
  </svg>`,
  steps:[
    {num:'Step 1', title:'보존장인지 판정',
     body:`$P=3+ye^x$, $Q=e^x$라 하면

$$\\frac{\\partial P}{\\partial y}=e^x,\\qquad \\frac{\\partial Q}{\\partial x}=e^x$$

두 값이 같고 정의역이 $\\mathbb{R}^2$ 전체(단순연결)이므로 이 벡터장은 보존장 ①입니다.`},
    {num:'Step 2', title:'퍼텐셜 함수 찾기',
     body:`$f_x=3+ye^x$를 $x$에 대해 적분하면

$$f(x,y)=3x+ye^x+g(y)$$

이를 $y$로 미분하면 $f_y=e^x+g'(y)$이고, 이것이 $Q=e^x$와 같아야 하므로 $g'(y)=0$, 즉 $g$는 상수입니다.

$$f(x,y)=3x+ye^x$$`},
    {num:'Step 3', title:'선적분의 기본정리 적용',
     body:`보존장에서는 경로와 무관하게 끝점과 시작점의 퍼텐셜 차이만 계산하면 됩니다 ②. 중간의 점 $(0,-2)$, $(2,0)$은 값에 영향을 주지 않습니다.

시작점 $(-2,0)$: $f(-2,0)=3(-2)+0\\cdot e^{-2}=-6$

끝점 $(0,2)$: $f(0,2)=3\\cdot0+2\\cdot e^0=2$

$$\\int_C P\\,dx+Q\\,dy=f(0,2)-f(-2,0)=2-(-6)=8$$`}
  ],
  answer:'$8$',
  footnotes:[
    {n:'①',text:'평면에서 정의역이 단순연결(구멍이 없는 영역)이고 $P_y=Q_x$이면 벡터장 $(P,Q)$는 보존장이며, $\\nabla f=(P,Q)$인 퍼텐셜 함수 $f$가 존재한다. 단순연결 조건이 빠지면 반례가 있다(원점을 뺀 평면에서의 회전장 등).'},
    {n:'②',text:'선적분의 기본정리: 보존장에서는 $\\int_C\\nabla f\\cdot d\\mathbf{r}=f(\\text{끝점})-f(\\text{시작점})$이다. 일변수의 미적분 기본정리 $\\int_a^b F\'(x)dx=F(b)-F(a)$를 곡선 위로 확장한 것이다.'},
    {n:'③',text:'경로를 세 선분으로 나눠 직접 계산해도 답은 같지만 계산량이 훨씬 많다. 선적분 문제를 만나면 먼저 $P_y=Q_x$를 확인하는 습관을 들이면 좋다. 닫힌 경로가 아니므로 그린 정리는 그대로 쓸 수 없다는 점도 함께 기억해 둘 만하다.'}
  ]
},

{
  id:'2016a5', year:2016, type:'전공A', cat:'mint', pts:2,
  title:'조각정의 함수의 반복적분 두 개의 합',
  problem:`좌표평면에서 영역 $D$가

$$D=\\{(x,y)\\in\\mathbb{R}^2\\mid 0\\le x\\le2,\\ 0\\le y\\le9\\}$$

일 때, 함수 $f:D\\to\\mathbb{R}$를 다음과 같이 정의하자.

$$f(x,y)=\\begin{cases}y, & y\\ge\\sin\\sqrt x\\\\ \\sin\\sqrt x, & y<\\sin\\sqrt x\\end{cases}$$

두 반복적분의 합

$$\\int_0^2\\int_0^9 f(x,y)\\,dy\\,dx+\\int_0^2\\int_0^{\\sin\\sqrt x}\\big(y-\\sin\\sqrt x\\big)dy\\,dx$$

의 값을 구하시오.`,
  steps:[
    {num:'Step 1', title:'$f$의 정체 파악',
     body:`정의를 보면 $y$와 $\\sin\\sqrt x$ 중 큰 쪽을 택하고 있습니다 ①.

$$f(x,y)=\\max\\{y,\\ \\sin\\sqrt x\\}$$

$0\\le x\\le2$에서 $\\sqrt x\\in[0,\\sqrt2]$이고 $\\sqrt2<\\pi$이므로 $s:=\\sin\\sqrt x\\ge0$이며, $s\\le1\\le9$입니다.`},
    {num:'Step 2', title:'첫 번째 적분의 안쪽 계산',
     body:`$x$를 고정하고 $s=\\sin\\sqrt x$라 두면 $0\\le s\\le1$이므로 구간 $[0,9]$를 $[0,s]$와 $[s,9]$로 나눕니다.

$$\\int_0^9\\max\\{y,s\\}dy=\\int_0^s s\\,dy+\\int_s^9 y\\,dy=s^2+\\frac{81-s^2}{2}=\\frac{81}{2}+\\frac{s^2}{2}$$`},
    {num:'Step 3', title:'두 번째 적분의 안쪽 계산',
     body:`$$\\int_0^{s}(y-s)dy=\\left[\\frac{y^2}{2}-sy\\right]_0^{s}=\\frac{s^2}{2}-s^2=-\\frac{s^2}{2}$$

$y<s$인 구간에서는 $y-s$가 음수이므로 값도 음수입니다.`},
    {num:'Step 4', title:'두 결과를 더하면 $s$가 소거됨',
     body:`두 안쪽 적분을 더하면

$$\\left(\\frac{81}{2}+\\frac{s^2}{2}\\right)+\\left(-\\frac{s^2}{2}\\right)=\\frac{81}{2}$$

$\\sin\\sqrt x$가 완전히 사라져 $x$에 무관한 상수가 됩니다 ②.

$$\\int_0^2\\frac{81}{2}dx=\\frac{81}{2}\\times2=81$$`}
  ],
  answer:'$81$',
  footnotes:[
    {n:'①',text:'$\\max\\{a,b\\}$는 "조건에 따라 큰 쪽" 이라는 조각정의로 자주 위장되어 나온다. $\\max\\{a,b\\}=\\frac{a+b+|a-b|}{2}$, $\\min\\{a,b\\}=\\frac{a+b-|a-b|}{2}$로 쓸 수도 있다.'},
    {n:'②',text:'두 식을 합치면 $\\max\\{y,s\\}+(y-s)^{-}$ 꼴이 되어 $y$만 남는다는 것이 구조적 이유다. 실제로 $\\max\\{y,s\\}=y+\\max\\{0,s-y\\}$이고, 두 번째 적분이 그 $\\max\\{0,s-y\\}$ 부분을 정확히 상쇄한다. 그래서 $\\int_0^9 y\\,dy=\\frac{81}{2}$만 남는다.'},
    {n:'③',text:'$\\sin\\sqrt x$의 부정적분은 초등함수로도 표현되지만($2\\sin\\sqrt x-2\\sqrt x\\cos\\sqrt x$), 이 문제는 애초에 그것을 계산할 필요가 없도록 설계되어 있다. 두 적분을 각각 끝까지 계산하려 들면 훨씬 돌아가게 된다.'}
  ]
},

// ───────────────────────────────────────
// 2017
// ───────────────────────────────────────
{
  id:'2017a4', year:2017, type:'전공A', cat:'mint', pts:2,
  title:'$\\iint_D 3\\cos(x^3)\\,dA$ 계산하기',
  problem:`좌표평면에서 영역 $D$가

$$D=\\{(x,y)\\in\\mathbb{R}^2\\mid 0\\le x\\le1,\\ 0\\le y\\le x^2\\}$$

일 때, 중적분 $\\displaystyle\\iint_D 3\\cos(x^3)\\,dA$의 값을 구하시오.`,
  steps:[
    {num:'Step 1', title:'$y$ 먼저 적분하는 순서 선택',
     body:`영역이 이미 "$x$를 고정하면 $y$가 $0$부터 $x^2$까지"로 주어져 있으므로 그대로 반복적분으로 씁니다.

피적분함수 $3\\cos(x^3)$은 $y$와 무관하므로 안쪽 적분은 단순히 구간의 길이를 곱하는 일이 됩니다 ①.

$$\\iint_D 3\\cos(x^3)dA=\\int_0^1\\int_0^{x^2}3\\cos(x^3)\\,dy\\,dx=\\int_0^1 3x^2\\cos(x^3)\\,dx$$`},
    {num:'Step 2', title:'치환적분',
     body:`$u=x^3$로 두면 $du=3x^2dx$이고, $x:0\\to1$일 때 $u:0\\to1$입니다.

$$\\int_0^1 3x^2\\cos(x^3)dx=\\int_0^1\\cos u\\,du=\\big[\\sin u\\big]_0^1=\\sin1$$`},
    {num:'Step 3', title:'결론',
     body:`$$\\iint_D 3\\cos(x^3)\\,dA=\\sin1$$

만약 순서를 반대로 잡아 $\\int_0^1\\int_{\\sqrt y}^1 3\\cos(x^3)dx\\,dy$로 썼다면 $\\cos(x^3)$의 원시함수가 필요해져서 풀리지 않습니다 ②.`}
  ],
  answer:'$\\sin1$',
  footnotes:[
    {n:'①',text:'피적분함수가 한 변수와 무관하면 그 변수를 먼저 적분하는 것이 유리하다. 안쪽 적분이 그냥 (함수) × (구간 길이)가 되기 때문이다. 여기서는 $3\\cos(x^3)$이 $y$와 무관해서 $y$ 적분이 곧 $x^2$을 곱하는 일이 된다.'},
    {n:'②',text:'$\\cos(x^3)$은 초등적 원시함수를 갖지 않는다. 중적분에서 어느 순서로 하느냐가 계산 가능 여부를 가르는 전형적인 예다. 2014년 A형 7번도 같은 구조의 문제였다.'}
  ]
},

{
  id:'2017a5', year:2017, type:'전공A', cat:'mvcalc', pts:2,
  title:'삼각형 영역에서 $f(x,y)=4x-2xy+y^2$의 최댓값과 최솟값의 합',
  problem:`좌표평면의 영역

$$D=\\{(x,y)\\in\\mathbb{R}^2\\mid 0\\le x\\le4,\\ 0\\le y\\le4,\\ x+y\\le4\\}$$

에서 함수 $f(x,y)=4x-2xy+y^2$의 최댓값과 최솟값의 합을 구하시오.`,
  steps:[
    {num:'Step 1', title:'영역 확인과 내부 임계점',
     body:`$D$는 세 꼭짓점 $(0,0)$, $(4,0)$, $(0,4)$를 갖는 삼각형(유계 닫힌집합)이므로 연속함수 $f$는 최댓값과 최솟값을 반드시 가집니다 ①.

$$f_x=4-2y=0\\ \\Rightarrow\\ y=2,\\qquad f_y=-2x+2y=0\\ \\Rightarrow\\ x=y$$

따라서 임계점은 $(2,2)$ 하나인데, $2+2=4$이므로 이 점은 내부가 아니라 빗변 위에 있습니다. 즉 **내부에는 임계점이 없으므로** 최대·최소는 모두 경계에서 일어납니다.`},
    {num:'Step 2', title:'경계 ① 아래변과 왼변',
     body:`$y=0$, $0\\le x\\le4$: $f=4x$ → 값의 범위 $[0,16]$

$x=0$, $0\\le y\\le4$: $f=y^2$ → 값의 범위 $[0,16]$

두 변 모두 원점에서 $0$, 끝점에서 $16$입니다.`},
    {num:'Step 3', title:'경계 ② 빗변 $x+y=4$',
     body:`$y=4-x$ $(0\\le x\\le4)$를 대입합니다.

$$f=4x-2x(4-x)+(4-x)^2=4x-8x+2x^2+16-8x+x^2$$

$$=3x^2-12x+16=3(x-2)^2+4$$

꼭짓점 $x=2$에서 최솟값 $4$ (점 $(2,2)$), 양 끝 $x=0,4$에서 최댓값 $16$입니다.`},
    {num:'Step 4', title:'전체 최대·최소 결정',
     body:`후보값을 모두 모으면 $\\{0,\\ 4,\\ 16\\}$입니다.

최댓값 $M=16$ (점 $(4,0)$과 $(0,4)$)

최솟값 $m=0$ (점 $(0,0)$)

$$M+m=16+0=16$$

빗변의 임계점 $(2,2)$에서의 값 $4$는 전체 최소가 아니라 그 변 위에서만의 최솟값이었습니다 ②.`}
  ],
  answer:'최댓값 $16$, 최솟값 $0$, 합 $=16$',
  footnotes:[
    {n:'①',text:'최대·최소 정리(극값 정리): 유계이고 닫힌집합 위의 연속함수는 최댓값과 최솟값을 갖는다. 그래서 "내부의 임계점 + 경계 전체"만 조사하면 반드시 답이 나온다.'},
    {n:'②',text:'경계 위의 임계점은 그 곡선 위로 제한한 일변수함수의 극값일 뿐이므로, 영역 전체의 극값이라고 단정하면 안 된다. 경계는 세 변을 각각 매개변수로 나타내 일변수 문제로 바꾸고, 꼭짓점 값도 반드시 함께 확인해야 한다.'},
    {n:'③',text:'만약 내부에 임계점이 있었다면 이계도함수 판정법(헤세 판정)을 쓸 수도 있지만, 유계 닫힌영역의 최대·최소 문제에서는 판정법 없이 후보값을 전부 비교하는 편이 더 안전하고 빠르다.'}
  ]
},

// ───────────────────────────────────────
// 2018
// ───────────────────────────────────────
{
  id:'2018a4', year:2018, type:'전공A', cat:'mint', pts:2,
  title:'변수변환 $2x=u+v$, $2y=u-v$로 중적분 계산하기',
  problem:`좌표평면에서 영역 $A$가

$$A=\\{(x,y)\\in\\mathbb{R}^2\\mid x\\ge0,\\ y\\ge0,\\ 1\\le x+y\\le3\\}$$

일 때, 변수변환 $2x=u+v$, $2y=u-v$를 사용하여 중적분

$$\\iint_A\\frac{1}{x+y}e^{\\frac{x-y}{x+y}}dx\\,dy$$

의 값을 구하시오.`,
  diagram:`<svg viewBox="0 0 470 230" xmlns="http://www.w3.org/2000/svg" style="font-family:'Noto Sans KR',sans-serif">
    <text x="115" y="16" font-size="11" fill="var(--t2)" text-anchor="middle">xy평면: 영역 A</text>
    <polygon points="50,190 110,190 50,130" fill="none" stroke="var(--t3)" stroke-width="1.2" stroke-dasharray="3 3"/>
    <polygon points="50,190 170,190 50,70" fill="var(--acc)" fill-opacity="0.16" stroke="var(--acc)" stroke-width="1.8"/>
    <polygon points="50,190 110,190 50,130" fill="var(--bg)" stroke="var(--acc)" stroke-width="1.8"/>
    <line x1="40" y1="190" x2="200" y2="190" stroke="var(--t2)" stroke-width="1.2"/>
    <line x1="50" y1="205" x2="50" y2="55" stroke="var(--t2)" stroke-width="1.2"/>
    <text x="110" y="204" font-size="10" fill="var(--t3)" text-anchor="middle">1</text>
    <text x="170" y="204" font-size="10" fill="var(--t3)" text-anchor="middle">3</text>
    <text x="45" y="134" font-size="10" fill="var(--t3)" text-anchor="end">1</text>
    <text x="45" y="74" font-size="10" fill="var(--t3)" text-anchor="end">3</text>
    <text x="198" y="206" font-size="11" fill="var(--t2)">x</text>
    <text x="58" y="64" font-size="11" fill="var(--t2)">y</text>
    <text x="98" y="168" font-size="10" fill="var(--acc)">A</text>
    <text x="365" y="16" font-size="11" fill="var(--t2)" text-anchor="middle">uv평면: u = x+y, v = x−y</text>
    <line x1="310" y1="115" x2="415" y2="10" stroke="var(--t3)" stroke-width="1" stroke-dasharray="4 3"/>
    <line x1="310" y1="115" x2="415" y2="220" stroke="var(--t3)" stroke-width="1" stroke-dasharray="4 3"/>
    <polygon points="340,85 400,25 400,205 340,145" fill="var(--acc)" fill-opacity="0.16" stroke="var(--acc)" stroke-width="1.8"/>
    <line x1="300" y1="115" x2="440" y2="115" stroke="var(--t2)" stroke-width="1.2"/>
    <line x1="310" y1="215" x2="310" y2="28" stroke="var(--t2)" stroke-width="1.2"/>
    <text x="340" y="129" font-size="10" fill="var(--t3)" text-anchor="middle">1</text>
    <text x="400" y="129" font-size="10" fill="var(--t3)" text-anchor="middle">3</text>
    <text x="438" y="131" font-size="11" fill="var(--t2)">u</text>
    <text x="320" y="38" font-size="11" fill="var(--t2)">v</text>
    <text x="356" y="66" font-size="9" fill="var(--t3)">v = u</text>
    <text x="356" y="176" font-size="9" fill="var(--t3)">v = −u</text>
  </svg>`,
  steps:[
    {num:'Step 1', title:'변환식을 $x,y$에 대해 풀고 야코비안 구하기',
     body:`$$x=\\frac{u+v}{2},\\qquad y=\\frac{u-v}{2}$$

$$\\frac{\\partial(x,y)}{\\partial(u,v)}=\\begin{vmatrix}\\frac12 & \\frac12\\\\[2pt] \\frac12 & -\\frac12\\end{vmatrix}=-\\frac14-\\frac14=-\\frac12$$

야코비안의 절댓값이 $\\dfrac12$이므로 $dx\\,dy=\\dfrac12\\,du\\,dv$입니다 ①.

또한 $u=x+y$, $v=x-y$이므로 피적분함수는 $\\dfrac{1}{u}e^{v/u}$로 아주 간단해집니다.`},
    {num:'Step 2', title:'영역을 $uv$평면으로 옮기기',
     body:`$1\\le x+y\\le3$ $\\Rightarrow$ $1\\le u\\le3$

$x\\ge0$ $\\Rightarrow$ $u+v\\ge0$ $\\Rightarrow$ $v\\ge-u$

$y\\ge0$ $\\Rightarrow$ $u-v\\ge0$ $\\Rightarrow$ $v\\le u$

즉 $uv$평면에서 영역은 $\\{1\\le u\\le3,\\ -u\\le v\\le u\\}$인 사다리꼴입니다. $u$를 먼저 고정하면 $v$의 범위가 깔끔하게 나오므로 $v$를 안쪽으로 둡니다.`},
    {num:'Step 3', title:'적분 계산',
     body:`$$\\iint_A\\frac{1}{x+y}e^{\\frac{x-y}{x+y}}dx\\,dy=\\int_1^3\\int_{-u}^{u}\\frac{1}{u}e^{v/u}\\cdot\\frac12\\,dv\\,du$$

안쪽 적분에서 $u$는 상수이므로

$$\\int_{-u}^{u}e^{v/u}dv=u\\Big[e^{v/u}\\Big]_{-u}^{u}=u\\big(e-e^{-1}\\big)$$

$$\\Rightarrow\\ \\frac{1}{2u}\\cdot u\\big(e-e^{-1}\\big)=\\frac{e-e^{-1}}{2}$$

이 값이 $u$에 무관하므로

$$\\int_1^3\\frac{e-e^{-1}}{2}du=\\frac{e-e^{-1}}{2}\\times2=e-\\frac{1}{e}$$`}
  ],
  answer:'$e-\\dfrac{1}{e}$',
  footnotes:[
    {n:'①',text:'중적분의 변수변환 공식: $\\iint_A F(x,y)\\,dx\\,dy=\\iint_{A^*}F\\big(x(u,v),y(u,v)\\big)\\left|\\dfrac{\\partial(x,y)}{\\partial(u,v)}\\right|du\\,dv$. 야코비안 행렬식은 변환이 미소 넓이를 몇 배로 늘리는지를 재는 값이며, 넓이는 음수가 될 수 없으므로 절댓값을 취한다.'},
    {n:'②',text:'피적분함수에 $x+y$와 $x-y$가 통째로 등장하면 그 두 덩어리를 새 변수로 잡으라는 신호다. 이 문제는 문제문이 아예 변환을 지정해 주었다.'},
    {n:'③',text:'$\\dfrac{\\partial(x,y)}{\\partial(u,v)}$를 구하기 번거로우면 역방향 $\\dfrac{\\partial(u,v)}{\\partial(x,y)}$를 구한 뒤 역수를 취해도 된다. 여기서는 $u=x+y$, $v=x-y$이므로 그 행렬식이 $-2$이고, 역수의 절댓값이 $\\frac12$로 일치한다.'}
  ]
},

// ───────────────────────────────────────
// 2019
// ───────────────────────────────────────
{
  id:'2019a3', year:2019, type:'전공A', cat:'mvcalc', pts:2,
  title:'$f$가 원점에서 연속이 되게 하는 자연수 $n$의 최솟값',
  problem:`다음과 같이 정의된 함수 $f:\\mathbb{R}^2\\to\\mathbb{R}$가 $(0,0)$에서 연속이 되도록 하는 자연수 $n$의 최솟값을 구하시오.

$$f(x,y)=\\begin{cases}\\dfrac{x^ny^n}{x^{30}+y^{30}}, & (x,y)\\ne(0,0)\\\\[6pt] 0, & (x,y)=(0,0)\\end{cases}$$`,
  steps:[
    {num:'Step 1', title:'직선 $y=x$를 따라 접근해 필요조건 얻기',
     body:`연속이려면 $\\lim_{(x,y)\\to(0,0)}f(x,y)=0$이어야 합니다. 어느 한 경로에서라도 극한이 $0$이 아니면 탈락입니다 ①.

$y=x$ $(x>0)$를 따라가면

$$f(x,x)=\\frac{x^{2n}}{2x^{30}}=\\frac{x^{2n-30}}{2}$$

이 값이 $x\\to0^+$에서 $0$이 되려면 $2n-30>0$, 즉 $n>15$이어야 합니다.

$n=15$이면 $f(x,x)=\\frac12$로 일정하므로 극한이 $0$이 아니고, $n\\le14$면 발산합니다. 따라서 $n\\ge16$이 필요합니다.`},
    {num:'Step 2', title:'$n=16$이면 실제로 연속임을 확인',
     body:`산술–기하평균 부등식 ②을 분모에 적용합니다.

$$x^{30}+y^{30}\\ge2\\sqrt{x^{30}y^{30}}=2|x|^{15}|y|^{15}$$

(짝수 지수라 $x^{30}=|x|^{30}\\ge0$입니다.) 따라서 $(x,y)\\ne(0,0)$에서

$$|f(x,y)|=\\frac{|x|^{16}|y|^{16}}{x^{30}+y^{30}}\\le\\frac{|x|^{16}|y|^{16}}{2|x|^{15}|y|^{15}}=\\frac{|x||y|}{2}$$

(분모가 $0$이 되는 경우는 $x=y=0$뿐이고, $x$나 $y$ 중 하나가 $0$이면 분자도 $0$이라 부등식이 자명하게 성립합니다.)`},
    {num:'Step 3', title:'조임 정리로 마무리',
     body:`$(x,y)\\to(0,0)$일 때 $\\dfrac{|x||y|}{2}\\to0$이므로 조임 정리 ③에 의해

$$\\lim_{(x,y)\\to(0,0)}f(x,y)=0=f(0,0)$$

즉 $n=16$일 때 $f$는 $(0,0)$에서 연속입니다. Step 1에서 $n\\le15$는 불가능함을 보였으므로 최솟값은 $16$입니다.`}
  ],
  answer:'$n=16$',
  footnotes:[
    {n:'①',text:'이변수 극한은 "모든 경로"에서 같은 값으로 가야 존재한다. 그래서 한 경로만으로는 극한의 존재를 증명할 수 없지만, 극한이 없음을 보이거나 필요조건을 얻는 데는 유용하다. 여기서는 $y=x$가 분모 $x^{30}+y^{30}$을 가장 작게 만드는(즉 $f$를 가장 크게 만드는) 방향이라 결정적이다.'},
    {n:'②',text:'산술–기하평균 부등식 $a+b\\ge2\\sqrt{ab}$ $(a,b\\ge0)$. 여기에 $a=x^{30}$, $b=y^{30}$을 넣으면 분모를 아래에서 눌러줄 수 있고, 그 결과 분수 전체를 위에서 억누르는 상계를 얻는다.'},
    {n:'③',text:'조임 정리(샌드위치 정리): $0\\le|f|\\le g$이고 $g\\to0$이면 $f\\to0$이다. 이변수 극한을 증명할 때 가장 자주 쓰이는 도구이며, 극좌표 $x=r\\cos\\theta,\\ y=r\\sin\\theta$를 넣어 $r$의 거듭제곱으로 상계를 잡는 방법도 같은 원리다.'}
  ]
},

{
  id:'2019a4', year:2019, type:'전공A', cat:'mint', pts:2,
  title:'최대정수함수가 든 중적분의 극한',
  problem:`좌표평면에서 자연수 $n$에 대하여 영역 $D_n$이

$$D_n=\\{(x,y)\\in\\mathbb{R}^2\\mid (x-y)^2+x^2\\le n\\}$$

일 때, 다음 극한값을 구하시오.

$$\\lim_{n\\to\\infty}\\iint_{D_n}e^{-\\lfloor(x-y)^2+x^2\\rfloor}dx\\,dy$$

(단, $\\lfloor x\\rfloor$는 $x$보다 크지 않은 최대 정수이다.)`,
  steps:[
    {num:'Step 1', title:'선형변환으로 타원을 원으로 펴기',
     body:`$u=x-y$, $v=x$로 두면 $x=v$, $y=v-u$이므로

$$\\frac{\\partial(x,y)}{\\partial(u,v)}=\\begin{vmatrix}0 & 1\\\\ -1 & 1\\end{vmatrix}=0\\cdot1-1\\cdot(-1)=1$$

야코비안이 $1$이라 넓이가 그대로 보존됩니다 ①. 영역과 피적분함수는

$$D_n\\ \\to\\ u^2+v^2\\le n,\\qquad e^{-\\lfloor(x-y)^2+x^2\\rfloor}\\ \\to\\ e^{-\\lfloor u^2+v^2\\rfloor}$$

로 바뀝니다. 즉 반지름 $\\sqrt n$인 원판 위의 적분이 되고, $n\\to\\infty$이면 평면 전체가 됩니다.`},
    {num:'Step 2', title:'극좌표로 바꾸기',
     body:`$u=r\\cos\\theta$, $v=r\\sin\\theta$이면 $u^2+v^2=r^2$이고 $dA=r\\,dr\\,d\\theta$이므로

$$\\iint_{u^2+v^2\\le n}e^{-\\lfloor r^2\\rfloor}dA=\\int_0^{2\\pi}\\int_0^{\\sqrt n}e^{-\\lfloor r^2\\rfloor}r\\,dr\\,d\\theta=2\\pi\\int_0^{\\sqrt n}e^{-\\lfloor r^2\\rfloor}r\\,dr$$

$t=r^2$로 치환하면 $dt=2r\\,dr$이므로

$$=2\\pi\\cdot\\frac12\\int_0^{n}e^{-\\lfloor t\\rfloor}dt=\\pi\\int_0^{n}e^{-\\lfloor t\\rfloor}dt$$

치환 덕분에 최대정수함수가 아주 다루기 쉬운 꼴로 바뀌었습니다 ②.`},
    {num:'Step 3', title:'등비급수로 계산',
     body:`$t\\in[k,k+1)$에서 $\\lfloor t\\rfloor=k$로 상수이므로, 각 구간의 적분값은 $e^{-k}\\times1$입니다.

$$\\int_0^{n}e^{-\\lfloor t\\rfloor}dt=\\sum_{k=0}^{n-1}e^{-k}$$

$n\\to\\infty$일 때 초항 $1$, 공비 $e^{-1}<1$인 등비급수이므로

$$\\sum_{k=0}^{\\infty}e^{-k}=\\frac{1}{1-e^{-1}}=\\frac{e}{e-1}$$

$$\\lim_{n\\to\\infty}\\iint_{D_n}e^{-\\lfloor(x-y)^2+x^2\\rfloor}dx\\,dy=\\frac{\\pi e}{e-1}$$`}
  ],
  answer:'$\\dfrac{\\pi e}{e-1}$',
  footnotes:[
    {n:'①',text:'$(x-y)^2+x^2\\le n$은 기울어진 타원의 내부다. 피적분함수도 정확히 같은 식 $(x-y)^2+x^2$을 쓰고 있으므로, 그 덩어리를 $u^2+v^2$로 만드는 선형변환을 잡는 것이 자연스럽다. 야코비안이 $1$이라 넓이 보정도 필요 없다.'},
    {n:'②',text:'$\\lfloor r^2\\rfloor$처럼 계단함수가 들어 있으면 그 안의 식을 새 변수로 잡아 $\\lfloor t\\rfloor$로 만드는 것이 정석이다. 그러면 정수 구간마다 상수가 되어 적분이 급수의 합으로 바뀐다.'},
    {n:'③',text:'만약 $\\lfloor\\ \\rfloor$가 없었다면 $\\iint_{\\mathbb{R}^2}e^{-(u^2+v^2)}dA=\\pi$ (가우스 적분)였을 것이다. 최대정수함수가 지수를 조금씩 낮춰주기 때문에 값이 $\\pi$보다 커져 $\\frac{\\pi e}{e-1}\\approx1.582\\pi$가 된다.'}
  ]
},

// ───────────────────────────────────────
// 2020
// ───────────────────────────────────────
{
  id:'2020a2', year:2020, type:'전공A', cat:'green', pts:2,
  title:'$y^3=x^2$과 $y=1$로 둘러싸인 영역의 넓이와 선적분',
  problem:`좌표평면에서 곡선 $y^3=x^2$과 직선 $y=1$로 둘러싸인 부분을 $D$라 하고, 영역 $D$의 경계(boundary)를 시계반대방향으로 한 바퀴 도는 곡선을 $C$라 하자. 영역 $D$의 넓이와 선적분 $\\displaystyle\\int_C -y\\,dx+x\\,dy$의 값을 각각 구하시오.`,
  diagram:`<svg viewBox="0 0 300 230" xmlns="http://www.w3.org/2000/svg" style="font-family:'Noto Sans KR',sans-serif">
    <polygon points="70,70 230,70 230,70 214,85.2 198,101.8 182,120.3 166,142.4 158,156.3 150,180 142,156.3 134,142.4 118,120.3 102,101.8 86,85.2 70,70" fill="var(--acc)" fill-opacity="0.15" stroke="none"/>
    <polyline points="70,70 86,85.2 102,101.8 118,120.3 134,142.4 142,156.3 150,180" fill="none" stroke="var(--acc)" stroke-width="2"/>
    <polyline points="150,180 158,156.3 166,142.4 182,120.3 198,101.8 214,85.2 230,70" fill="none" stroke="var(--acc)" stroke-width="2"/>
    <line x1="70" y1="70" x2="230" y2="70" stroke="var(--acc)" stroke-width="2"/>
    <line x1="40" y1="180" x2="270" y2="180" stroke="var(--t2)" stroke-width="1.2"/>
    <line x1="150" y1="205" x2="150" y2="45" stroke="var(--t2)" stroke-width="1.2"/>
    <polygon points="142,70 152,66 152,74" fill="var(--acc)"/>
    <polygon points="122,127 133,124 128,134" fill="var(--acc)"/>
    <polygon points="182,121 170,127 177,137" fill="var(--acc)"/>
    <text x="145" y="66" font-size="10" fill="var(--t3)" text-anchor="end">1</text>
    <text x="145" y="194" font-size="10" fill="var(--t3)" text-anchor="end">O</text>
    <text x="268" y="196" font-size="11" fill="var(--t2)">x</text>
    <text x="158" y="54" font-size="11" fill="var(--t2)">y</text>
    <text x="240" y="66" font-size="11" fill="var(--acc)">y³ = x²</text>
    <text x="150" y="220" font-size="10" fill="var(--t3)" text-anchor="middle">y = x^(2/3), 원점에서 첨점(cusp)</text>
  </svg>`,
  steps:[
    {num:'Step 1', title:'영역 파악',
     body:`$y^3=x^2$에서 $y=x^{2/3}\\ge0$이고, $x=\\pm y^{3/2}$입니다. 원점에서 첨점(cusp)을 갖는 $y$축 대칭 곡선입니다 ①.

$y=1$과의 교점은 $x^2=1$에서 $x=\\pm1$, 즉 $(-1,1)$과 $(1,1)$입니다.

$D$는 곡선 위쪽, 직선 $y=1$ 아래쪽 영역이므로

$$D=\\{(x,y)\\mid 0\\le y\\le1,\\ -y^{3/2}\\le x\\le y^{3/2}\\}$$`},
    {num:'Step 2', title:'넓이 계산',
     body:`$y$를 고정할 때 가로 길이가 $2y^{3/2}$이므로

$$\\text{넓이}=\\int_0^1 2y^{3/2}\\,dy=2\\cdot\\frac{2}{5}\\Big[y^{5/2}\\Big]_0^1=\\frac{4}{5}$$`},
    {num:'Step 3', title:'그린 정리로 선적분 계산',
     body:`$P=-y$, $Q=x$이므로

$$\\frac{\\partial Q}{\\partial x}-\\frac{\\partial P}{\\partial y}=1-(-1)=2$$

$C$가 반시계 방향이므로 그린 정리를 그대로 적용하면

$$\\int_C -y\\,dx+x\\,dy=\\iint_D 2\\,dA=2\\times\\text{넓이}=2\\times\\frac{4}{5}=\\frac{8}{5}$$

이 선적분은 넓이 공식으로 잘 알려진 형태입니다 ②.`}
  ],
  answer:'넓이 $=\\dfrac{4}{5}$, 선적분 $=\\dfrac{8}{5}$',
  footnotes:[
    {n:'①',text:'$y=x^{2/3}$은 원점에서 미분불가능한 첨점을 갖지만, 곡선 자체는 연속이고 조각마다 매끄러우므로 그린 정리를 적용하는 데 문제가 없다. 그린 정리는 경계가 조각마다 $C^1$이면 성립한다.'},
    {n:'②',text:'$\\text{넓이}=\\dfrac12\\oint_C(-y\\,dx+x\\,dy)$는 그린 정리의 대표적인 따름정리다. 같은 이유로 $\\oint_C x\\,dy$와 $-\\oint_C y\\,dx$도 각각 넓이와 같다. 이 문제의 선적분은 넓이의 정확히 두 배가 된다.'},
    {n:'③',text:'적분 순서를 $x$ 먼저로 잡으면 $\\int_{-1}^{1}(1-x^{2/3})dx=2\\left(1-\\frac35\\right)=\\frac45$로 같은 값이 나온다. 어느 쪽이든 계산량은 비슷하지만, $x=\\pm y^{3/2}$ 꼴이 더 단순해 $y$ 먼저가 편하다.'}
  ]
},

// ───────────────────────────────────────
// 2021
// ───────────────────────────────────────
{
  id:'2021a5', year:2021, type:'전공A', cat:'mint', pts:4,
  title:'세 반복적분을 합쳐 극좌표로 계산하기',
  problem:`함수 $f(x,y)=\\dfrac{x^2}{\\left(\\sqrt{x^2+y^2}\\right)^3}$에 대하여 다음 적분의 값을 풀이 과정과 함께 쓰시오.

$$\\int_{\\frac{1}{\\sqrt2}}^{1}\\int_{\\sqrt{1-y^2}}^{y}\\big(f(x,y)-\\lfloor x+y\\rfloor\\big)dx\\,dy+\\int_{1}^{\\sqrt2}\\int_0^{y}f(x,y)\\,dx\\,dy+\\int_{\\sqrt2}^{2}\\int_0^{\\sqrt{4-y^2}}f(x,y)\\,dx\\,dy$$

(단, $\\lfloor x\\rfloor$는 $x$보다 크지 않은 최대 정수이다.)`,
  diagram:`<svg viewBox="0 0 300 250" xmlns="http://www.w3.org/2000/svg" style="font-family:'Noto Sans KR',sans-serif">
    <path d="M 50,50 A 160,160 0 0,1 163.1,96.9 L 106.6,153.4 A 80,80 0 0,0 50,130 Z" fill="var(--acc)" fill-opacity="0.16" stroke="var(--acc)" stroke-width="2"/>
    <line x1="50" y1="210" x2="205" y2="55" stroke="var(--t3)" stroke-width="1" stroke-dasharray="4 3"/>
    <line x1="40" y1="210" x2="250" y2="210" stroke="var(--t2)" stroke-width="1.2"/>
    <line x1="50" y1="225" x2="50" y2="35" stroke="var(--t2)" stroke-width="1.2"/>
    <line x1="50" y1="153.4" x2="180" y2="153.4" stroke="var(--t3)" stroke-width="0.9" stroke-dasharray="2 3"/>
    <line x1="50" y1="130" x2="180" y2="130" stroke="var(--t3)" stroke-width="0.9" stroke-dasharray="2 3"/>
    <line x1="50" y1="96.9" x2="180" y2="96.9" stroke="var(--t3)" stroke-width="0.9" stroke-dasharray="2 3"/>
    <text x="45" y="157" font-size="9" fill="var(--t3)" text-anchor="end">1/√2</text>
    <text x="45" y="134" font-size="10" fill="var(--t3)" text-anchor="end">1</text>
    <text x="45" y="100" font-size="9" fill="var(--t3)" text-anchor="end">√2</text>
    <text x="45" y="54" font-size="10" fill="var(--t3)" text-anchor="end">2</text>
    <text x="45" y="222" font-size="10" fill="var(--t3)" text-anchor="end">O</text>
    <text x="248" y="226" font-size="11" fill="var(--t2)">x</text>
    <text x="62" y="46" font-size="11" fill="var(--t2)">y</text>
    <text x="200" y="52" font-size="10" fill="var(--t3)">y = x</text>
    <text x="76" y="146" font-size="10" fill="var(--acc)">R₁</text>
    <text x="76" y="118" font-size="10" fill="var(--acc)">R₂</text>
    <text x="76" y="78" font-size="10" fill="var(--acc)">R₃</text>
    <text x="150" y="242" font-size="10" fill="var(--t3)" text-anchor="middle">셋을 합치면 1 ≤ r ≤ 2, π/4 ≤ θ ≤ π/2 인 부채꼴 고리</text>
  </svg>`,
  steps:[
    {num:'Step 1', title:'세 영역을 합치면 무엇이 되는지 확인',
     body:`세 적분의 영역을 각각 $R_1,R_2,R_3$이라 하고, 공통 조건 $x\\ge0$, $x\\le y$ (즉 $\\theta\\in[\\tfrac\\pi4,\\tfrac\\pi2]$)를 염두에 두고 봅니다 ①.

$R_1$: $\\frac1{\\sqrt2}\\le y\\le1$, $\\sqrt{1-y^2}\\le x\\le y$ — 왼쪽 경계 $x=\\sqrt{1-y^2}$는 $x^2+y^2=1$, 오른쪽 경계는 $x=y$

$R_2$: $1\\le y\\le\\sqrt2$, $0\\le x\\le y$ — 이 구간에서는 $x^2+y^2\\ge1$이 자동, $x\\le y\\le\\sqrt2$이므로 $x^2+y^2\\le2y^2\\le4$도 자동

$R_3$: $\\sqrt2\\le y\\le2$, $0\\le x\\le\\sqrt{4-y^2}$ — 오른쪽 경계가 $x^2+y^2=4$

합치면 정확히

$$R=\\left\\{(r,\\theta)\\ \\middle|\\ 1\\le r\\le2,\\ \\frac{\\pi}{4}\\le\\theta\\le\\frac{\\pi}{2}\\right\\}$$

인 부채꼴 고리입니다.`},
    {num:'Step 2', title:'$f$ 부분을 극좌표로 계산',
     body:`$$f(x,y)=\\frac{x^2}{(x^2+y^2)^{3/2}}=\\frac{r^2\\cos^2\\theta}{r^3}=\\frac{\\cos^2\\theta}{r}$$

$dA=r\\,dr\\,d\\theta$이므로 $r$이 깔끔하게 약분됩니다 ②.

$$\\iint_R f\\,dA=\\int_{\\pi/4}^{\\pi/2}\\int_1^2\\frac{\\cos^2\\theta}{r}\\cdot r\\,dr\\,d\\theta=\\int_{\\pi/4}^{\\pi/2}\\cos^2\\theta\\,\\big[r\\big]_1^2\\,d\\theta$$

$$=\\int_{\\pi/4}^{\\pi/2}\\cos^2\\theta\\,d\\theta=\\left[\\frac{\\theta}{2}+\\frac{\\sin2\\theta}{4}\\right]_{\\pi/4}^{\\pi/2}=\\left(\\frac{\\pi}{4}+0\\right)-\\left(\\frac{\\pi}{8}+\\frac14\\right)=\\frac{\\pi}{8}-\\frac14$$`},
    {num:'Step 3', title:'$\\lfloor x+y\\rfloor$ 부분: $R_1$에서 값이 항상 1',
     body:`$\\lfloor x+y\\rfloor$는 $R_1$에서만 빠집니다. $R_1$ 위에서 $x+y$의 범위를 봅니다.

최솟값: $R_1$의 안쪽 경계인 단위원 위에서 $x+y=\\cos\\theta+\\sin\\theta=\\sqrt2\\sin\\!\\left(\\theta+\\frac\\pi4\\right)$이고 $\\theta\\in[\\frac\\pi4,\\frac\\pi2]$이므로 $1$부터 $\\sqrt2$ 사이. 영역 안의 다른 점은 원점에서 더 멀어 $x+y$가 더 큽니다. 따라서 최솟값은 $1$(점 $(0,1)$).

최댓값: $y\\le1$, $x\\le y\\le1$이므로 $x+y\\le2$이고, 등호는 점 $(1,1)$ 한 점에서만.

즉 $R_1$의 거의 모든 점에서 $1\\le x+y<2$이므로 $\\lfloor x+y\\rfloor=1$입니다 ③.

$$\\iint_{R_1}\\lfloor x+y\\rfloor\\,dA=\\iint_{R_1}1\\,dA=\\text{Area}(R_1)$$`},
    {num:'Step 4', title:'$R_1$의 넓이 계산',
     body:`$$\\text{Area}(R_1)=\\int_{1/\\sqrt2}^{1}\\Big(y-\\sqrt{1-y^2}\\Big)dy$$

첫 항: $\\left[\\dfrac{y^2}{2}\\right]_{1/\\sqrt2}^{1}=\\dfrac12-\\dfrac14=\\dfrac14$

둘째 항: $\\displaystyle\\int\\sqrt{1-y^2}\\,dy=\\frac{y\\sqrt{1-y^2}+\\arcsin y}{2}$이므로

$$\\int_{1/\\sqrt2}^{1}\\sqrt{1-y^2}\\,dy=\\frac{0+\\frac\\pi2}{2}-\\frac{\\frac12+\\frac\\pi4}{2}=\\frac{\\pi}{4}-\\frac14-\\frac{\\pi}{8}=\\frac{\\pi}{8}-\\frac14$$

$$\\text{Area}(R_1)=\\frac14-\\left(\\frac\\pi8-\\frac14\\right)=\\frac12-\\frac{\\pi}{8}$$`},
    {num:'Step 5', title:'최종 계산',
     body:`$$\\text{(주어진 식)}=\\iint_R f\\,dA-\\iint_{R_1}\\lfloor x+y\\rfloor\\,dA$$

$$=\\left(\\frac{\\pi}{8}-\\frac14\\right)-\\left(\\frac12-\\frac{\\pi}{8}\\right)=\\frac{\\pi}{8}+\\frac{\\pi}{8}-\\frac14-\\frac12$$

$$=\\frac{\\pi}{4}-\\frac34=\\frac{\\pi-3}{4}$$`}
  ],
  answer:'$\\dfrac{\\pi-3}{4}$',
  footnotes:[
    {n:'①',text:'세 반복적분이 나란히 주어지면 대개 "한 영역을 세 조각으로 쪼개 놓은 것"이다. 각 조각의 경계식($\\sqrt{1-y^2}$는 단위원, $\\sqrt{4-y^2}$는 반지름 2인 원, $x=y$는 45° 직선)을 읽어내 원래 영역을 복원하는 것이 첫 단계다.'},
    {n:'②',text:'$\\dfrac{x^2}{(x^2+y^2)^{3/2}}$처럼 $x^2+y^2$이 분모에 있으면 극좌표가 거의 항상 정답이다. 여기서는 $\\frac{\\cos^2\\theta}{r}$가 되어 $dA$의 $r$과 약분되고, 결국 $r$ 적분이 단순히 구간 길이 $2-1=1$이 된다.'},
    {n:'③',text:'최대정수함수는 값이 바뀌는 경계(여기서는 $x+y=2$)가 넓이 0인 곡선이면 적분값에 영향을 주지 않는다. 그래서 "거의 모든 점에서 상수"임을 확인하면 그 상수를 그대로 쓸 수 있다.'},
    {n:'④',text:'$\\int\\sqrt{1-y^2}\\,dy$는 $y=\\sin t$ 치환으로 얻는다. 기하적으로는 원의 부채꼴 넓이와 삼각형 넓이의 합이므로, $R_1$의 넓이를 "$45°$ 부채꼴을 뺀 삼각형"으로 보고 구해도 같은 값이 나온다.'}
  ]
},

// ───────────────────────────────────────
// 2022
// ───────────────────────────────────────
{
  id:'2022a2', year:2022, type:'전공A', cat:'mint', pts:2,
  title:'$g(-2)$와 $\\lim_{t\\to0}g(t)^{1/t}$ 구하기',
  problem:`실수 $t$에 대하여

$$g(t)=\\frac{1}{\\pi}\\iint_D(x^2+y^2+1)^t\\,dx\\,dy$$

라 할 때, $g(-2)$와 $\\displaystyle\\lim_{t\\to0}g(t)^{\\frac1t}$의 값을 순서대로 쓰시오. (단, $D=\\{(x,y)\\in\\mathbb{R}^2:x^2+y^2\\le1\\}$이다.)`,
  steps:[
    {num:'Step 1', title:'극좌표로 $g(t)$를 닫힌 식으로 구하기',
     body:`$$\\iint_D(x^2+y^2+1)^t dA=\\int_0^{2\\pi}\\int_0^1(r^2+1)^t\\,r\\,dr\\,d\\theta=2\\pi\\int_0^1(1+r^2)^t r\\,dr$$

$u=r^2$로 치환하면 $du=2r\\,dr$이므로

$$=2\\pi\\cdot\\frac12\\int_0^1(1+u)^t du=\\pi\\left[\\frac{(1+u)^{t+1}}{t+1}\\right]_0^1=\\pi\\cdot\\frac{2^{t+1}-1}{t+1}$$

(단 $t\\ne-1$.) 따라서

$$g(t)=\\frac{2^{t+1}-1}{t+1}$$`},
    {num:'Step 2', title:'$g(-2)$ 계산',
     body:`$$g(-2)=\\frac{2^{-1}-1}{-1}=\\frac{-\\frac12}{-1}=\\frac12$$`},
    {num:'Step 3', title:'$1^\\infty$ 꼴 극한을 로그로 처리',
     body:`$g(0)=\\dfrac{2-1}{1}=1$이므로 $\\lim_{t\\to0}g(t)^{1/t}$은 $1^{\\infty}$ 부정형입니다 ①. 로그를 취합니다.

$$\\ln g(t)^{1/t}=\\frac{h(t)}{t},\\qquad h(t)=\\ln\\big(2^{t+1}-1\\big)-\\ln(t+1)$$

$h(0)=\\ln1-\\ln1=0$이므로 $\\dfrac{h(t)}{t}=\\dfrac{h(t)-h(0)}{t-0}\\to h'(0)$, 즉 미분계수의 정의 그 자체입니다 ②.`},
    {num:'Step 4', title:'미분계수 계산과 마무리',
     body:`$$h'(t)=\\frac{2^{t+1}\\ln2}{2^{t+1}-1}-\\frac{1}{t+1}$$

$$h'(0)=\\frac{2\\ln2}{2-1}-1=2\\ln2-1$$

$$\\lim_{t\\to0}g(t)^{1/t}=e^{2\\ln2-1}=\\frac{e^{\\ln4}}{e}=\\frac{4}{e}$$`}
  ],
  answer:'$g(-2)=\\dfrac12$, $\\displaystyle\\lim_{t\\to0}g(t)^{1/t}=\\dfrac{4}{e}$',
  footnotes:[
    {n:'①',text:'$1^{\\infty}$는 부정형이다. $\\lim a(t)^{b(t)}$ 꼴에서 밑이 1로, 지수가 무한대로 갈 때는 $\\exp\\big(\\lim b(t)\\ln a(t)\\big)$로 바꿔 처리하는 것이 정석이다.'},
    {n:'②',text:'$h(0)=0$일 때 $\\lim_{t\\to0}\\frac{h(t)}{t}=h\'(0)$이다. 로피탈 정리를 써도 되지만, 미분계수의 정의로 보는 편이 더 간단하고 안전하다.'},
    {n:'③',text:'$t=-1$일 때는 Step 1의 공식이 성립하지 않는다. 그 경우 $\\int_0^1(1+u)^{-1}du=\\ln2$이므로 $g(-1)=\\ln2$가 된다. 이 문제에서는 $t=-2$와 $t\\to0$만 묻고 있어 문제되지 않는다.'}
  ]
},

// ───────────────────────────────────────
// 2023
// ───────────────────────────────────────
{
  id:'2023a2', year:2023, type:'전공A', cat:'mint', pts:2,
  title:'원판 위의 중적분과 이를 이용한 삼중적분',
  problem:`실수 $a$에 대하여 좌표평면의 영역 $D(a)$를

$$D(a)=\\{(x,y)\\mid x^2+y^2\\le(1+a)^2\\}$$

이라 할 때, 중적분 $\\displaystyle\\iint_{D(a)}(x^2+y^2)\\,dA$를 구하시오. 또한 좌표공간의 영역 $\\Omega$를

$$\\Omega=\\{(x,y,z)\\mid x^2+y^2\\le(1+z)^2,\\ 0\\le z\\le1\\}$$

이라 할 때, 삼중적분 $\\displaystyle\\iiint_\\Omega z(x^2+y^2)\\,dV$의 값을 구하시오.`,
  steps:[
    {num:'Step 1', title:'극좌표로 중적분 계산',
     body:`$D(a)$는 중심이 원점이고 반지름이 $|1+a|$인 원판입니다. 극좌표에서 $x^2+y^2=r^2$, $dA=r\\,dr\\,d\\theta$이므로

$$\\iint_{D(a)}(x^2+y^2)dA=\\int_0^{2\\pi}\\int_0^{|1+a|}r^2\\cdot r\\,dr\\,d\\theta=2\\pi\\left[\\frac{r^4}{4}\\right]_0^{|1+a|}$$

$$=\\frac{\\pi}{2}(1+a)^4$$

네제곱이라 절댓값을 벗겨도 값이 같습니다 ①.`},
    {num:'Step 2', title:'삼중적분을 $z$-단면으로 자르기',
     body:`$\\Omega$를 높이 $z$에서 자른 단면은 반지름 $1+z$인 원판, 즉 정확히 $D(z)$입니다 ②.

$$\\iiint_\\Omega z(x^2+y^2)dV=\\int_0^1 z\\left(\\iint_{D(z)}(x^2+y^2)dA\\right)dz$$

Step 1의 결과에 $a=z$를 대입하면

$$=\\int_0^1 z\\cdot\\frac{\\pi}{2}(1+z)^4\\,dz=\\frac{\\pi}{2}\\int_0^1 z(1+z)^4dz$$`},
    {num:'Step 3', title:'남은 일변수 적분 계산',
     body:`$u=1+z$로 치환하면 $z=u-1$, $u:1\\to2$입니다.

$$\\int_1^2(u-1)u^4du=\\int_1^2(u^5-u^4)du=\\left[\\frac{u^6}{6}-\\frac{u^5}{5}\\right]_1^2$$

$$=\\left(\\frac{64}{6}-\\frac{32}{5}\\right)-\\left(\\frac16-\\frac15\\right)=\\frac{64}{15}-\\left(-\\frac{1}{30}\\right)=\\frac{128+1}{30}=\\frac{129}{30}=\\frac{43}{10}$$

$$\\iiint_\\Omega z(x^2+y^2)dV=\\frac{\\pi}{2}\\cdot\\frac{43}{10}=\\frac{43\\pi}{20}$$`}
  ],
  answer:'$\\displaystyle\\iint_{D(a)}(x^2+y^2)dA=\\frac{\\pi}{2}(1+a)^4$, $\\displaystyle\\iiint_\\Omega z(x^2+y^2)dV=\\frac{43\\pi}{20}$',
  footnotes:[
    {n:'①',text:'반지름은 $|1+a|$이지만 결과가 $(1+a)^4$로 네제곱이라 부호에 무관하다. 만약 $a<-1$이면 $(1+a)^2$은 여전히 양수라 원판이 잘 정의되고, 답도 그대로 유효하다.'},
    {n:'②',text:'삼중적분을 계산할 때 단면(슬라이스)으로 쪼개는 방법을 푸비니 정리의 한 형태로 볼 수 있다. $z$를 고정하면 단면이 앞에서 이미 계산한 $D(z)$와 같으므로 1단계 결과를 그대로 재활용할 수 있다. 문제가 두 소문항으로 나뉜 이유다.'},
    {n:'③',text:'원기둥좌표계 $(r,\\theta,z)$로 직접 세우면 $\\int_0^1\\int_0^{2\\pi}\\int_0^{1+z}z\\,r^2\\cdot r\\,dr\\,d\\theta\\,dz$가 되어 같은 계산에 도달한다. $\\Omega$는 아래 반지름 1, 위 반지름 2인 원뿔대(절두원뿔)이다.'}
  ]
},

// ───────────────────────────────────────
// 2024
// ───────────────────────────────────────
{
  id:'2024a7', year:2024, type:'전공A', cat:'mint', pts:4,
  title:'절댓값이 든 피적분함수의 중적분 $g(0)$, $g\\left(\\frac12\\right)$',
  problem:`좌표평면의 영역

$$D(t)=\\{(x,y)\\mid x\\ge0,\\ y\\ge0,\\ x^2+y^2\\le1,\\ x+y\\ge t\\}\\quad(0\\le t\\le1)$$

과 함수 $f(x,y)=\\sqrt{|8x^2+8y^2-1|}$에 대하여

$$g(t)=\\iint_{D(t)}f(x,y)\\,dx\\,dy$$

라 하자. $g(0)$과 $g\\left(\\dfrac12\\right)$의 값을 풀이 과정과 함께 쓰시오.`,
  diagram:`<svg viewBox="0 0 300 250" xmlns="http://www.w3.org/2000/svg" style="font-family:'Noto Sans KR',sans-serif">
    <path d="M 50,200 L 210,200 A 160,160 0 0,0 50,40 Z" fill="var(--acc)" fill-opacity="0.10" stroke="var(--acc)" stroke-width="1.8"/>
    <path d="M 50,200 L 106.6,200 A 56.6,56.6 0 0,0 50,143.4 Z" fill="none" stroke="var(--t1)" stroke-width="1.6" stroke-dasharray="4 3"/>
    <line x1="50" y1="120" x2="130" y2="200" stroke="var(--t1)" stroke-width="2"/>
    <circle cx="90" cy="160" r="3.5" fill="var(--t1)"/>
    <line x1="40" y1="200" x2="250" y2="200" stroke="var(--t2)" stroke-width="1.2"/>
    <line x1="50" y1="215" x2="50" y2="30" stroke="var(--t2)" stroke-width="1.2"/>
    <text x="45" y="44" font-size="10" fill="var(--t3)" text-anchor="end">1</text>
    <text x="45" y="124" font-size="10" fill="var(--t3)" text-anchor="end">1/2</text>
    <text x="45" y="212" font-size="10" fill="var(--t3)" text-anchor="end">O</text>
    <text x="210" y="214" font-size="10" fill="var(--t3)" text-anchor="middle">1</text>
    <text x="130" y="214" font-size="10" fill="var(--t3)" text-anchor="middle">1/2</text>
    <text x="246" y="194" font-size="11" fill="var(--t2)">x</text>
    <text x="62" y="36" font-size="11" fill="var(--t2)">y</text>
    <text x="102" y="150" font-size="10" fill="var(--t1)">(1/4, 1/4)</text>
    <text x="150" y="168" font-size="10" fill="var(--t1)">x + y = 1/2</text>
    <text x="60" y="186" font-size="9" fill="var(--t1)">r = 1/(2√2)</text>
    <text x="150" y="240" font-size="10" fill="var(--t3)" text-anchor="middle">직선 x+y=1/2 는 원 r=1/(2√2) 에 접한다 (핵심)</text>
  </svg>`,
  steps:[
    {num:'Step 1', title:'$g(0)$: 사분원에서 절댓값 벗기기',
     body:`$t=0$이면 $x+y\\ge0$은 자동이므로 $D(0)$은 제1사분면의 사분원판입니다.

극좌표에서 $8x^2+8y^2-1=8r^2-1$이고, 부호가 바뀌는 지점은

$$8r^2=1\\ \\Rightarrow\\ r=\\frac{1}{2\\sqrt2}$$

이므로 $r$을 이 값에서 나눕니다.

$$g(0)=\\int_0^{\\pi/2}\\int_0^1\\sqrt{|8r^2-1|}\\;r\\,dr\\,d\\theta=\\frac{\\pi}{2}\\int_0^1\\sqrt{|8r^2-1|}\\;r\\,dr$$`},
    {num:'Step 2', title:'두 조각을 각각 치환적분',
     body:`(i) $0\\le r\\le\\frac{1}{2\\sqrt2}$: $w=1-8r^2$, $dw=-16r\\,dr$, $w:1\\to0$

$$\\int_0^{1/(2\\sqrt2)}\\sqrt{1-8r^2}\\,r\\,dr=\\frac{1}{16}\\int_0^1\\sqrt w\\,dw=\\frac{1}{16}\\cdot\\frac23=\\frac{1}{24}$$

(ii) $\\frac{1}{2\\sqrt2}\\le r\\le1$: $w=8r^2-1$, $dw=16r\\,dr$, $w:0\\to7$

$$\\int_{1/(2\\sqrt2)}^{1}\\sqrt{8r^2-1}\\,r\\,dr=\\frac{1}{16}\\int_0^7\\sqrt w\\,dw=\\frac{1}{16}\\cdot\\frac23\\cdot7\\sqrt7=\\frac{7\\sqrt7}{24}$$

$$g(0)=\\frac{\\pi}{2}\\cdot\\frac{1+7\\sqrt7}{24}=\\frac{\\pi\\big(1+7\\sqrt7\\big)}{48}$$`},
    {num:'Step 3', title:'$g\\left(\\frac12\\right)$: 접선이라는 핵심 관찰',
     body:`직선 $x+y=\\frac12$와 원점 사이의 거리는

$$\\frac{|{-\\frac12}|}{\\sqrt{1^2+1^2}}=\\frac{1}{2\\sqrt2}$$

인데, 이는 정확히 부호가 바뀌는 원 $r=\\frac{1}{2\\sqrt2}$의 반지름과 같습니다. 즉 직선이 그 원에 접하며, 접점은 $\\left(\\frac14,\\frac14\\right)$입니다 ①.

따라서 $D\\left(\\frac12\\right)$의 모든 점은 원점에서 거리가 $\\frac{1}{2\\sqrt2}$ 이상이므로 $8r^2-1\\ge0$이고, 절댓값을 그냥 벗길 수 있습니다.

$$f=\\sqrt{8r^2-1}\\quad\\text{on }D\\!\\left(\\tfrac12\\right)$$`},
    {num:'Step 4', title:'극좌표로 세우기',
     body:`직선 $x+y=\\frac12$를 극좌표로 쓰면 $r(\\cos\\theta+\\sin\\theta)=\\frac12$이므로 안쪽 경계는

$$\\rho(\\theta)=\\frac{1}{2(\\cos\\theta+\\sin\\theta)}$$

$$g\\!\\left(\\tfrac12\\right)=\\int_0^{\\pi/2}\\int_{\\rho(\\theta)}^{1}\\sqrt{8r^2-1}\\;r\\,dr\\,d\\theta$$

안쪽 적분은 Step 2와 같은 치환으로

$$\\int\\sqrt{8r^2-1}\\,r\\,dr=\\frac{(8r^2-1)^{3/2}}{24}$$

$$\\Rightarrow\\ \\frac{7\\sqrt7-\\big(8\\rho^2-1\\big)^{3/2}}{24}$$`},
    {num:'Step 5', title:'$\\theta$ 적분 — 코탄젠트가 등장',
     body:`$\\cos\\theta+\\sin\\theta=\\sqrt2\\sin\\varphi$ (단 $\\varphi=\\theta+\\frac\\pi4$)로 두면 $\\varphi:\\frac\\pi4\\to\\frac{3\\pi}{4}$이고

$$8\\rho^2=\\frac{8}{4\\cdot2\\sin^2\\varphi}=\\frac{1}{\\sin^2\\varphi}\\ \\Rightarrow\\ 8\\rho^2-1=\\frac{1-\\sin^2\\varphi}{\\sin^2\\varphi}=\\cot^2\\varphi$$

$$g\\!\\left(\\tfrac12\\right)=\\frac{1}{24}\\int_{\\pi/4}^{3\\pi/4}\\Big(7\\sqrt7-|\\cot\\varphi|^3\\Big)d\\varphi$$

$|\\cot\\varphi|^3$은 $\\varphi=\\frac\\pi2$에 대해 대칭이므로

$$\\int_{\\pi/4}^{3\\pi/4}|\\cot\\varphi|^3d\\varphi=2\\int_{\\pi/4}^{\\pi/2}\\cot^3\\varphi\\,d\\varphi$$

$\\cot^3\\varphi=\\cot\\varphi(\\csc^2\\varphi-1)$이므로 원시함수는 $-\\frac{\\cot^2\\varphi}{2}-\\ln|\\sin\\varphi|$ ②이고

$$\\int_{\\pi/4}^{\\pi/2}\\cot^3\\varphi\\,d\\varphi=0-\\left(-\\frac12+\\frac{\\ln2}{2}\\right)=\\frac{1-\\ln2}{2}$$

따라서 $\\int_{\\pi/4}^{3\\pi/4}|\\cot\\varphi|^3d\\varphi=1-\\ln2$.`},
    {num:'Step 6', title:'최종 정리',
     body:`$$g\\!\\left(\\tfrac12\\right)=\\frac{1}{24}\\left(7\\sqrt7\\cdot\\frac{\\pi}{2}-(1-\\ln2)\\right)=\\frac{7\\sqrt7\\,\\pi}{48}+\\frac{\\ln2-1}{24}$$

수치로는 $g(0)\\approx1.2776$, $g\\left(\\frac12\\right)\\approx1.1994$로, 영역이 줄어든 만큼 값도 조금 작습니다.`}
  ],
  answer:'$g(0)=\\dfrac{\\pi(1+7\\sqrt7)}{48}$, $g\\!\\left(\\dfrac12\\right)=\\dfrac{7\\sqrt7\\,\\pi}{48}+\\dfrac{\\ln2-1}{24}$',
  footnotes:[
    {n:'①',text:'점 $(x_0,y_0)$에서 직선 $ax+by+c=0$까지의 거리는 $\\dfrac{|ax_0+by_0+c|}{\\sqrt{a^2+b^2}}$이다. 원점과 $x+y-\\frac12=0$의 거리가 원 $r=\\frac{1}{2\\sqrt2}$의 반지름과 정확히 일치하도록 $t=\\frac12$을 고른 것이 이 문제의 설계 의도다. 덕분에 절댓값 안의 부호가 한쪽으로 고정되어 경우 나누기가 사라진다.'},
    {n:'②',text:'$\\int\\cot^3\\varphi\\,d\\varphi$는 $\\cot^2=\\csc^2-1$을 이용해 $\\int\\cot\\varphi\\csc^2\\varphi\\,d\\varphi-\\int\\cot\\varphi\\,d\\varphi$로 쪼갠다. 앞은 $u=\\cot\\varphi$ 치환으로 $-\\frac{\\cot^2\\varphi}{2}$, 뒤는 $\\ln|\\sin\\varphi|$가 된다.'},
    {n:'③',text:'$\\varphi=\\theta+\\frac\\pi4$ 치환은 $\\cos\\theta+\\sin\\theta=\\sqrt2\\sin\\!\\left(\\theta+\\frac\\pi4\\right)$라는 삼각함수의 합성이다. $x+y$ 꼴이 극좌표에 나타나면 거의 항상 이 합성으로 정리된다.'}
  ]
},

// ───────────────────────────────────────
// 2025
// ───────────────────────────────────────
{
  id:'2025a2', year:2025, type:'전공A', cat:'green', pts:2,
  title:'넓이 조건으로 $a$를 정하고 그린 정리로 선적분 구하기',
  problem:`좌표평면의 영역 $D$를

$$D=\\{(x,y)\\in\\mathbb{R}^2\\mid -1\\le xy\\le1,\\ a\\le x\\le a+1\\}\\quad(a\\text{는 양수})$$

이라 하고, 이 영역의 경계를 시계반대방향으로 한 바퀴 도는 곡선을 $C$라고 하자. 영역 $D$의 넓이가 $2\\ln2$일 때, $a$의 값과 선적분

$$\\int_C(2x-y)\\,dx+(2x-y)\\,dy$$

의 값을 순서대로 구하시오.`,
  steps:[
    {num:'Step 1', title:'넓이를 $a$의 식으로 나타내기',
     body:`$a>0$이므로 $D$ 안에서 $x>0$입니다. 따라서 $-1\\le xy\\le1$은

$$-\\frac1x\\le y\\le\\frac1x$$

와 같고, 세로 방향의 길이는 $\\dfrac2x$입니다 ①.

$$\\text{넓이}=\\int_a^{a+1}\\frac{2}{x}dx=2\\Big[\\ln x\\Big]_a^{a+1}=2\\ln\\frac{a+1}{a}$$`},
    {num:'Step 2', title:'$a$ 결정',
     body:`$$2\\ln\\frac{a+1}{a}=2\\ln2\\ \\Rightarrow\\ \\frac{a+1}{a}=2\\ \\Rightarrow\\ a+1=2a\\ \\Rightarrow\\ a=1$$

$a=1>0$이므로 조건에 맞습니다. 즉 $D$는 $1\\le x\\le2$ 구간에서 두 쌍곡선 $y=\\pm\\frac1x$ 사이의 영역입니다.`},
    {num:'Step 3', title:'그린 정리 적용',
     body:`$P=2x-y$, $Q=2x-y$이므로

$$\\frac{\\partial Q}{\\partial x}=2,\\qquad \\frac{\\partial P}{\\partial y}=-1$$

$$\\frac{\\partial Q}{\\partial x}-\\frac{\\partial P}{\\partial y}=2-(-1)=3$$

상수이므로 넓이만 알면 됩니다 ②. $C$가 반시계 방향이므로

$$\\int_C(2x-y)dx+(2x-y)dy=\\iint_D 3\\,dA=3\\times2\\ln2=6\\ln2$$

경계의 구체적인 모양(쌍곡선 두 개와 수직선 두 개)을 전혀 몰라도 계산이 끝납니다.`}
  ],
  answer:'$a=1$, 선적분 $=6\\ln2$',
  footnotes:[
    {n:'①',text:'$x>0$이므로 $-1\\le xy\\le1$의 각 변을 $x$로 나눌 때 부등호 방향이 유지된다. 만약 $x<0$인 부분이 포함되었다면 부등호가 뒤집혀 영역이 전혀 달라진다. 문제에서 "$a$는 양수"라고 못 박은 이유다.'},
    {n:'②',text:'$Q_x-P_y$가 상수 $k$이면 선적분값은 항상 $k\\times(\\text{영역의 넓이})$가 된다. 경계 곡선이 복잡할수록 그린 정리의 위력이 커지는 대표적인 상황이다.'},
    {n:'③',text:'$P$와 $Q$가 같은 식이어도 편미분하는 변수가 다르므로 $Q_x$와 $P_y$는 다른 값이 된다. 눈으로 보기에 대칭이라고 해서 $Q_x-P_y=0$이라 넘겨짚지 않도록 주의해야 한다.'}
  ]
},

// ───────────────────────────────────────
// 2026
// ───────────────────────────────────────
{
  id:'2026a8', year:2026, type:'전공A', cat:'mint', pts:4,
  title:'등위곡선 $x^4+y^4-xy^2=0$과 직선의 교점, 그리고 영역의 넓이',
  problem:`함수 $f:\\mathbb{R}^2\\to\\mathbb{R}$을 $f(x,y)=x^4+y^4-xy^2$이라 하자. $t\\ne0$인 상수 $t$에 대하여 직선 $y=tx$와 등위곡선(level curve) $f(x,y)=0$의 원점 이외의 교점을 구하시오.

또한 영역 $\\{(x,y)\\in\\mathbb{R}^2\\mid f(x,y)\\le0,\\ y\\ge0\\}$의 넓이를 풀이 과정과 함께 쓰시오.

(참고: $\\displaystyle\\int_0^\\infty\\frac{dt}{1+t^4}=\\frac{\\sqrt2\\,\\pi}{4}$)`,
  diagram:`<svg viewBox="0 0 300 230" xmlns="http://www.w3.org/2000/svg" style="font-family:'Noto Sans KR',sans-serif">
    <path d="M 60.0,190.0 L 64.0,189.5 L 77.4,185.6 L 99.6,174.9 L 125.9,157.1 L 153.8,131.9 L 179.6,100.3 L 194.7,72.8 L 200.0,50.0 L 196.5,37.1 L 187.1,31.1 L 173.4,31.3 L 159.3,36.0 L 142.6,45.4 L 125.9,58.2 L 107.2,76.7 L 90.7,97.8 L 77.4,120.3 L 67.8,143.4 L 62.8,162.0 L 60.7,176.0 Z" fill="var(--acc)" fill-opacity="0.18" stroke="var(--acc)" stroke-width="2"/>
    <line x1="50" y1="190" x2="270" y2="190" stroke="var(--t2)" stroke-width="1.2"/>
    <line x1="60" y1="205" x2="60" y2="20" stroke="var(--t2)" stroke-width="1.2"/>
    <line x1="60" y1="190" x2="230" y2="20" stroke="var(--t3)" stroke-width="1" stroke-dasharray="4 3"/>
    <circle cx="200" cy="50" r="3.5" fill="var(--t1)"/>
    <text x="208" y="46" font-size="10" fill="var(--t1)">(1/2, 1/2)</text>
    <text x="236" y="34" font-size="10" fill="var(--t3)">y = x</text>
    <text x="55" y="204" font-size="10" fill="var(--t3)" text-anchor="end">O</text>
    <text x="268" y="206" font-size="11" fill="var(--t2)">x</text>
    <text x="72" y="28" font-size="11" fill="var(--t2)">y</text>
    <text x="118" y="118" font-size="10" fill="var(--acc)">f ≤ 0</text>
    <text x="150" y="222" font-size="10" fill="var(--t3)" text-anchor="middle">원점에서 시작해 원점으로 돌아오는 물방울 모양 폐곡선</text>
  </svg>`,
  steps:[
    {num:'Step 1', title:'직선을 대입해 교점 구하기',
     body:`$y=tx$를 $f(x,y)=0$에 대입합니다.

$$x^4+(tx)^4-x(tx)^2=x^4+t^4x^4-t^2x^3=x^3\\big[(1+t^4)x-t^2\\big]=0$$

$x=0$이면 $y=0$이므로 원점입니다. 원점 이외의 해는

$$x=\\frac{t^2}{1+t^4},\\qquad y=tx=\\frac{t^3}{1+t^4}$$

즉 교점은 $\\left(\\dfrac{t^2}{1+t^4},\\ \\dfrac{t^3}{1+t^4}\\right)$입니다 ①.`},
    {num:'Step 2', title:'영역의 모양 파악',
     body:`$f(x,y)\\le0$은 $x^4+y^4\\le xy^2$입니다. 좌변이 $0$ 이상이므로 $xy^2\\ge0$, 즉 $x\\ge0$이어야 합니다.

Step 1에서 원점을 지나는 각 반직선이 곡선과 정확히 한 점에서 만나므로, $f\\le0$인 영역은 원점을 기준으로 별모양영역(star-shaped)이며 그 경계가 Step 1의 점들로 매개변수화됩니다.

$t\\to0^+$이면 교점이 원점으로, $t\\to\\infty$여도 교점이 원점으로 돌아오므로 경계는 원점에서 출발해 원점으로 돌아오는 폐곡선(물방울 모양)입니다. $y\\ge0$ 조건은 $t\\ge0$에 대응합니다.`},
    {num:'Step 3', title:'극좌표 넓이 공식 세우기',
     body:`$t=\\tan\\theta$로 두면 $\\theta$는 $0$부터 $\\frac\\pi2$까지 움직이고, 경계점까지의 거리 제곱은

$$r^2=x^2+y^2=\\frac{t^4+t^6}{(1+t^4)^2}=\\frac{t^4(1+t^2)}{(1+t^4)^2}$$

극좌표 넓이 공식 ②과 $d\\theta=\\dfrac{dt}{1+t^2}$를 쓰면

$$S=\\int_0^{\\pi/2}\\frac12 r^2\\,d\\theta=\\frac12\\int_0^{\\infty}\\frac{t^4(1+t^2)}{(1+t^4)^2}\\cdot\\frac{dt}{1+t^2}=\\frac12\\int_0^{\\infty}\\frac{t^4}{(1+t^4)^2}dt$$

$(1+t^2)$이 통째로 약분되는 것이 이 문제의 설계 포인트입니다.`},
    {num:'Step 4', title:'부분적분으로 참고 적분에 연결',
     body:`$I=\\displaystyle\\int_0^\\infty\\frac{t^4}{(1+t^4)^2}dt$, $A=\\displaystyle\\int_0^\\infty\\frac{dt}{1+t^4}=\\frac{\\sqrt2\\pi}{4}$라 둡니다.

$\\dfrac{t}{1+t^4}$를 미분하면

$$\\frac{d}{dt}\\left(\\frac{t}{1+t^4}\\right)=\\frac{(1+t^4)-t\\cdot4t^3}{(1+t^4)^2}=\\frac{1}{1+t^4}-\\frac{4t^4}{(1+t^4)^2}$$

양변을 $0$부터 $\\infty$까지 적분합니다. 좌변은 $\\left[\\dfrac{t}{1+t^4}\\right]_0^{\\infty}=0-0=0$이므로 ③

$$0=A-4I\\ \\Rightarrow\\ I=\\frac{A}{4}=\\frac{\\sqrt2\\pi}{16}$$`},
    {num:'Step 5', title:'넓이 결론',
     body:`$$S=\\frac{I}{2}=\\frac{\\sqrt2\\,\\pi}{32}$$

수치로는 약 $0.1388$이며, 몬테카를로 방식으로 확인해도 같은 값이 나옵니다.`}
  ],
  answer:'교점 $\\left(\\dfrac{t^2}{1+t^4},\\ \\dfrac{t^3}{1+t^4}\\right)$, 넓이 $=\\dfrac{\\sqrt2\\,\\pi}{32}$',
  footnotes:[
    {n:'①',text:'$f$의 각 항의 차수가 $4,4,3$으로 섞여 있어(비동차) $y=tx$를 대입하면 $x^3$으로 묶이고 남는 일차식에서 교점이 하나 나온다. 원점이 삼중근인 것은 원점 근처에서 곡선이 원점에 접하며 지나간다는 뜻이다.'},
    {n:'②',text:'극좌표 넓이 공식 $S=\\int\\frac12 r^2\\,d\\theta$. 미소 부채꼴의 넓이가 $\\frac12r^2d\\theta$이기 때문이다. 원점에서 본 각 방향마다 경계까지의 거리를 알 수 있는 별모양영역에서 특히 유용하다.'},
    {n:'③',text:'$\\dfrac{t}{1+t^4}$는 $t\\to\\infty$일 때 $\\dfrac1{t^3}\\to0$이고 $t=0$에서도 $0$이다. "미분해서 적분하면 경계값이 0"이라는 관계를 이용해 $I$를 $A$로 환산하는 이 기법은, 주어진 참고 적분 하나만으로 다른 적분을 얻어낼 때 자주 쓰인다.'},
    {n:'④',text:'다른 방법으로 $\\dfrac{t^4}{(1+t^4)^2}=\\dfrac{1}{1+t^4}-\\dfrac{1}{(1+t^4)^2}$로 쪼갤 수도 있는데, 그러면 $\\int(1+t^4)^{-2}dt$를 따로 구해야 한다. 위의 부분적분 관계식이 이를 한 번에 해결해 준다.'}
  ]
}

  ]
};
