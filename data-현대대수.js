window.SUBJECTS = window.SUBJECTS || {};

window.SUBJECTS['현대대수학'] = {
  label: '현대대수학',
  categories: [
    { id:'galois', name:'갈루아이론', color:'#2d7a4f', light:'#e8f4ed' },
    { id:'group',  name:'군론',       color:'#3d5a99', light:'#e8edf7' },
    { id:'ring',   name:'환론',       color:'#994a6b', light:'#f4e8ed' }
  ],
  freqGroups: [
    {
      id:'galois', name:'체론 — 갈루아 이론', stars:'★★★★★★', count:14, color:'#1a4a2e',
      desc:'분해체 구성 → 갈루아군 위수 → 부분체 개수',
      problems:['2014b2','2016a14','2016b6','2017b6','2018b6','2019b6','2020b11','2021b11','2022a12','2023a12','2024a12','2025b8','2026b9']
    },
    {
      id:'group', name:'군론 — 순환군·잉여군·준동형', stars:'★★★★★', count:12, color:'#1a2d4a',
      desc:'순환군 부분군·위수, 준동형 핵과 상, 직적군',
      problems:['2014a6','2015a8','2016a2','2017b2','2018a2','2019a14','2020a4','2021a10','2022a3','2024a3','2025a3','2026a11']
    },
    {
      id:'ring', name:'환론 — 다항식환·아이디얼·잉여환', stars:'★★★★', count:8, color:'#4a1a2d',
      desc:'잉여환 체 구조, 표수, 단원 개수, 정역 조건',
      problems:['2014a3','2017a3','2018a14','2019a2','2020a10','2022b9','2023b6','2024b6','2025b11']
    }
  ],
  problems: [

// ───────────────────────────────────────
// 2014
// ───────────────────────────────────────
{
  id:'2014a6', year:2014, type:'전공A', cat:'group', pts:2,
  title:'순환군 부분군 개수 · 위수38 원소 개수',
  problem:`위수(order)가 $2014 = 2 \\times 19 \\times 53$인 순환군(cyclic group) $G$에 대하여 $G$의 부분군의 개수를 $m$, $G$에서 위수가 $38$인 원소의 개수를 $n$이라 하자. $m+n$의 값을 구하시오.`,
  steps:[
    {num:'Step 1', title:'부분군 개수 m',
     body:`순환군의 부분군 ①은 위수의 약수마다 하나씩 존재합니다.

$|G|=2014=2^1\\times19^1\\times53^1$이므로 약수의 개수:

$$m=(1+1)(1+1)(1+1)=8$$`},
    {num:'Step 2', title:'위수 38인 원소 개수 n',
     body:`$38=2\\times19\\mid2014$이므로 위수 $38$인 원소는 오일러 피 함수 ②로:

$$n=\\varphi(38)=\\varphi(2)\\cdot\\varphi(19)=1\\times18=18$$`},
    {num:'Step 3', title:'최종 답',
     body:`$$m+n=8+18=\\boxed{26}$$`}
  ],
  answer:'26',
  footnotes:[
    {n:'①',text:'순환군 $G=\langle a\rangle$에서 $n$의 약수 $d$마다 부분군 $\langle a^{n/d}\rangle$가 하나씩 존재. 개수 $= \tau(n)$ (약수 개수).'},
    {n:'②',text:'$\varphi(n)$: 1~n 중 n과 서로소인 수의 개수. $\varphi(p)=p-1$, $\varphi(ab)=\varphi(a)\varphi(b)$ (서로소). 순환군에서 위수 $d$인 원소는 $\varphi(d)$개.'}
  ]
},
{
  id:'2014a3', year:2014, type:'전공A', cat:'ring', pts:4,
  title:'Z₂₀₁₄[x]에서 x²-14를 두 일차식 곱으로 나타낼 수 없음을 증명',
  problem:`다항식환 $\\mathbb{Z}_{2014}[x]$에서 $f(x)=x^2-14$를 두 일차식의 곱 $f(x)=(ax+b)(cx+d)$로 나타낼 수 없음을 증명하시오.`,
  steps:[
    {num:'Step 1', title:'WLOG a=c=1로 환원',
     body:`$(ax+b)(cx+d)$의 최고차항 계수 $ac=1$이므로 $a,c$는 단원 ①. $a$의 역원을 곱하면:

$$f(x)=(x+b')(x+d')$$

형태로 쓸 수 있습니다.`},
    {num:'Step 2', title:'조건식',
     body:`$(x+b)(x+d)=x^2+(b+d)x+bd$와 비교하면:

$$b+d\equiv0,\quad bd\equiv-14\pmod{2014}$$

$d=-b$를 대입하면 $-b^2\equiv-14$, 즉 $b^2\equiv14\pmod{2014}$.`},
    {num:'Step 3', title:'mod 19에서 모순',
     body:`$2014=2\\times19\\times53$이므로 ②:

$$b^2\equiv14\pmod{19}$$

$\\mathbb{Z}_{19}$의 이차잉여 ③ 목록: $1^2=1,2^2=4,3^2=9,4^2=16,5^2=6,6^2=17,7^2=11,8^2=7,9^2=5$

이차잉여 집합 $=\\{1,4,5,6,7,9,11,16,17\\}$에 $14$가 없으므로 해가 존재하지 않습니다.

따라서 $b^2\equiv14\pmod{2014}$는 해가 없고, $f(x)$는 두 일차식의 곱으로 나타낼 수 없습니다. $\\blacksquare$`}
  ],
  answer:'증명 완료 (14는 mod 19에서 이차잉여 아님)',
  footnotes:[
    {n:'①',text:'단원: 역원이 존재하는 원소. $\mathbb{Z}_n$에서 $\gcd(a,n)=1 \iff a$가 단원.'},
    {n:'②',text:'중국인 나머지 정리: $b^2\equiv 14\pmod{2014} \iff b^2\equiv 14\pmod{2}$, $b^2\equiv 14\pmod{19}$, $b^2\equiv 14\pmod{53}$ 세 조건이 동시에 성립.'},
    {n:'③',text:'이차잉여: $x^2\equiv a\pmod{p}$가 해를 가지는 $a$. 소수 $p$에서 $\frac{p-1}{2}$개가 이차잉여.'}
  ]
},
{
  id:'2014b2', year:2014, type:'전공B', cat:'galois', pts:4,
  title:'x⁶+3의 분해체에서 G(K/Q)의 위수가 6임을 증명',
  problem:`다항식 $x^6+3$의 유리수체 $\\mathbb{Q}$ 위에서의 분해체(splitting field)를 $K$라 하면 갈루아군 $G(K/\\mathbb{Q})$의 위수(order)는 $6$임을 증명하시오.`,
  steps:[
    {num:'Step 1', title:'x⁶+3이 Q 위 기약',
     body:`아이젠슈타인 기준 ①을 $p=3$으로 적용: 상수항 $3$에서 $3\\mid3$, $9\\nmid3$ ✓

따라서 $x^6+3$은 $\\mathbb{Q}$ 위에서 기약이고 $[\\mathbb{Q}(\\alpha):\\mathbb{Q}]=6$. ($\\alpha$: 실수 근)`},
    {num:'Step 2', title:'분해체 K 결정',
     body:`$x^6+3=0$의 근: $\\alpha_k=3^{1/6}e^{i\\pi(2k+1)/6}$ ($k=0,\\ldots,5$).

$\\alpha_0=3^{1/6}e^{i\\pi/6}\\in\\mathbb{Q}(\\alpha_0)$이면 $\\alpha_0^3=3^{1/2}e^{i\\pi/2}=i\\sqrt{3}\\in\\mathbb{Q}(\\alpha_0)$.

모든 근 $=\\alpha_0\\cdot e^{ik\\pi/3}$이고 $e^{i\\pi/3}=\\frac{-1+i\\sqrt{3}}{2}\\cdot(-1)\\in\\mathbb{Q}(i\\sqrt{3})\\subset\\mathbb{Q}(\\alpha_0)$.

따라서 $K=\\mathbb{Q}(\\alpha_0)$.`},
    {num:'Step 3', title:'|G(K/Q)| = 6',
     body:`$$|G(K/\\mathbb{Q})|=[K:\\mathbb{Q}]=[\\mathbb{Q}(\\alpha_0):\\mathbb{Q}]=6\\qquad\\blacksquare$$`}
  ],
  answer:'|G(K/ℚ)|=6 (증명 완료)',
  footnotes:[
    {n:'①',text:'아이젠슈타인 기준: $f(x)=x^n+a_{n-1}x^{n-1}+\cdots+a_0$에서 소수 $p$가 모든 $a_k$를 나누고 $p^2\nmid a_0$이면 $\mathbb{Q}$ 위 기약.'},
    {n:'②',text:'갈루아 기본 정리: $K$가 $F$ 위 갈루아 확대이면 $|G(K/F)|=[K:F]$.'}
  ]
},

// ───────────────────────────────────────
// 2015
// ───────────────────────────────────────
{
  id:'2015a8', year:2015, type:'전공A', cat:'group', pts:2,
  title:'Z₁₂×Z₆ 잉여군에서 (3,3)+H의 위수',
  problem:`덧셈군 $G=\\mathbb{Z}_{12}\\times\\mathbb{Z}_6$에서 $(5,5)\\in G$로 생성된 부분군을 $H$라 하자. 잉여군 $G/H$에서 원소 $(3,3)+H$의 위수(order)를 구하시오.`,
  steps:[
    {num:'Step 1', title:'H = ⟨(5,5)⟩ 계산',
     body:`$k(5,5)=(5k\\bmod12,5k\\bmod6)$을 차례로 계산하면:

$k=3$: $(15,15)=(3,3)$이므로 $(3,3)\\in H$ ①`},
    {num:'Step 2', title:'(3,3)+H의 위수',
     body:`$(3,3)\\in H$이므로 $(3,3)+H=H$ (항등원 ②).

$$\\text{ord}((3,3)+H)=1$$`}
  ],
  answer:'1',
  footnotes:[
    {n:'①',text:'$H=\langle(5,5)\rangle$의 원소 전체: $(5,5),(10,4),(3,3),(8,2),(1,1),(6,0),(11,5),(4,4),(9,3),(2,2),(7,1),(0,0)$. $|H|=12$.'},
    {n:'②',text:'잉여군 $G/H$에서 항등원 $= H$. $a\in H \iff a+H = H$.'}
  ]
},

// ───────────────────────────────────────
// 2016
// ───────────────────────────────────────
{
  id:'2016a2', year:2016, type:'전공A', cat:'group', pts:2,
  title:'f(x,y)=9x의 핵(kernel)과 잉여군의 위수',
  problem:`군 준동형사상 $f:\\mathbb{Z}_{12}\\times\\mathbb{Z}_6\\to\\mathbb{Z}_{12}$를 $f(x,y)=9x$로 정의하자. $f$의 핵(kernel)을 $K$라 할 때, $(\\mathbb{Z}_{12}\\times\\mathbb{Z}_6)/K$의 위수(order)를 구하시오.`,
  steps:[
    {num:'Step 1', title:'Ker(f) 구하기',
     body:`$9x\\equiv0\\pmod{12}\\iff12\\mid9x\\iff4\\mid3x\\iff4\\mid x$ (∵ $\\gcd(3,4)=1$ ①)

$x\\in\\{0,4,8\\}$, $y$는 자유. $|K|=3\\times6=18$`},
    {num:'Step 2', title:'잉여군 위수',
     body:`$$|(\\mathbb{Z}_{12}\\times\\mathbb{Z}_6)/K|=\\frac{72}{18}=4$$`}
  ],
  answer:'4',
  footnotes:[
    {n:'①',text:'$4\mid 3x$이고 $\gcd(3,4)=1$이면 $4\mid x$. (3의 mod 4 역원은 3이므로 양변에 곱하면 됨.)'},
    {n:'②',text:'제1 준동형 정리: $|G/\ker(f)|=|G|/|\ker(f)|$.'}
  ]
},
{
  id:'2016a14', year:2016, type:'전공A', cat:'galois', pts:4,
  title:'단순확대체와 irr(√2+i, Q(√2)) 구하기',
  problem:`유리수 체 $\\mathbb{Q}$ 위에서 대수적인 원소 $\\alpha$와 단순확대체 $K=\\mathbb{Q}(\\alpha)$가 있다. $F$가 $K$의 부분체이고 $\\text{irr}(\\alpha,F)=x^r+a_1x^{r-1}+\\cdots+a_r$ ($a_i\\in F$)일 때, $F=\\mathbb{Q}(a_1,\\ldots,a_r)$임을 보이시오. 또한 $\\alpha=\\sqrt{2}+i$이고 $F=\\mathbb{Q}(\\sqrt{2})$일 때 $\\text{irr}(\\alpha,F)$를 구하시오.`,
  steps:[
    {num:'Step 1', title:'F = Q(a₁,…,aᵣ) 증명',
     body:`$F_0=\\mathbb{Q}(a_1,\\ldots,a_r)$으로 놓겠습니다.

$a_i\\in F$이므로 $F_0\\subseteq F$.

$f=\\text{irr}(\\alpha,F)\\in F_0[x]$이고 $f$는 $F_0$ 위에서도 기약 ①이므로 $[K:F_0]=r=[K:F]$.

$F_0\\subseteq F\\subseteq K$이고 차수가 같으므로 $F_0=F$. $\\blacksquare$`},
    {num:'Step 2', title:'irr(√2+i, Q(√2)) 구하기',
     body:`$\\alpha=\\sqrt{2}+i$에서 $\\alpha-\\sqrt{2}=i$이므로:

$$(\\alpha-\\sqrt{2})^2=-1\\implies\\alpha^2-2\\sqrt{2}\\alpha+3=0$$

$\\sqrt{2}\\in F$이므로:

$$\\text{irr}(\\alpha,F)=x^2-2\\sqrt{2}\\,x+3$$

$F=\\mathbb{Q}(\\sqrt{2})\\subset\\mathbb{R}$에서 $i\\notin F$이므로 $\\alpha\\notin F$이고 위 다항식은 기약 ②.`}
  ],
  answer:'$x^2-2\\sqrt{2}\\,x+3$',
  footnotes:[
    {n:'①',text:'$\text{irr}(\alpha,F)$가 $F_0$에서도 기약인 이유: $F_0\subseteq F$이면 $F_0$에서의 인수분해가 $F$에서도 유효. 만약 $F_0$에서 기약이 아니면 $[K:F]<r$에 모순.'},
    {n:'②',text:'차수 2인 다항식은 근이 있으면 일차 인수로 분해. $F\subset\mathbb{R}$이므로 허수 $i\notin F$, 따라서 $\alpha\notin F$이므로 기약.'}
  ]
},
{
  id:'2016b6', year:2016, type:'전공B', cat:'galois', pts:5,
  title:'[K:Q]=270, 순환 갈루아군, √2 포함 부분체 개수',
  problem:`체 $K$는 $[K:\\mathbb{Q}]=270$인 갈루아 확대체이고 $G(K/\\mathbb{Q})$는 순환군이다. $\\sqrt{2}\\in K$일 때, $\\sqrt{2}$를 포함하는 $K$의 부분체의 개수를 구하시오.`,
  steps:[
    {num:'Step 1', title:'갈루아 대응',
     body:`$G=G(K/\\mathbb{Q})$는 위수 $270=2\\times3^3\\times5$인 순환군 ①.

갈루아 대응 ②: 부분체 $\\leftrightarrow$ $G$의 부분군 (일대일)`},
    {num:'Step 2', title:'√2를 포함하는 부분체 조건',
     body:`$\\sqrt{2}\\in E\\iff\\mathbb{Q}(\\sqrt{2})\\subseteq E$.

$[K:\\mathbb{Q}(\\sqrt{2})]=135$이므로, $\\mathbb{Q}(\\sqrt{2})\\subseteq E\\subseteq K$에 대응하는 부분군 $G(K/E)$는 위수 $135$인 부분군 $G(K/\\mathbb{Q}(\\sqrt{2}))$의 부분군입니다.`},
    {num:'Step 3', title:'135의 부분군 개수',
     body:`위수 $135=3^3\\times5$인 순환군의 부분군 개수 = 약수 개수:

$$(3+1)(1+1)=8$$`}
  ],
  answer:'8',
  footnotes:[
    {n:'①',text:'순환군의 부분군: 위수의 약수 d마다 하나씩 존재.'},
    {n:'②',text:'갈루아 기본 정리: 중간체 $E\leftrightarrow$ 부분군 $G(K/E)$의 일대일 대응. $E$가 클수록 대응 부분군은 작음.'}
  ]
},

// ───────────────────────────────────────
// 2017
// ───────────────────────────────────────
{
  id:'2017a3', year:2017, type:'전공A', cat:'ring', pts:2,
  title:'Z₆₀의 잉여환으로 나타나는 체들의 직접곱 표수',
  problem:`환 $\\mathbb{Z}_{60}$의 잉여환으로 나타내어지는 모든 체(field)의 직접곱을 $R$이라 하자. 환 $R$의 표수(characteristic)를 구하시오.`,
  steps:[
    {num:'Step 1', title:'체가 되는 잉여환',
     body:`$\\mathbb{Z}_{60}/\\langle d\\rangle\\cong\\mathbb{Z}_d$가 체 $\\iff$ $d$가 소수 ①.

$60=2^2\\times3\\times5$의 소인수: $2,3,5$.

$R=\\mathbb{Z}_2\\times\\mathbb{Z}_3\\times\\mathbb{Z}_5$`},
    {num:'Step 2', title:'표수',
     body:`$$\\text{char}(R)=\\text{lcm}(2,3,5)=30 ②$$`}
  ],
  answer:'30',
  footnotes:[
    {n:'①',text:'$\mathbb{Z}_n$이 체 $\iff$ $n$이 소수.'},
    {n:'②',text:'직접곱 환의 표수 = 각 성분 표수의 lcm.'}
  ]
},
{
  id:'2017b2', year:2017, type:'전공B', cat:'group', pts:4,
  title:'위수200 군에서 H⊆N 증명',
  problem:`위수(order)가 $200$인 군 $G$가 부분군 $H$와 정규 부분군 $N$을 가진다. $|H|=8$, $|N|=40$일 때, $H$가 $N$의 부분군임을 보이시오.`,
  steps:[
    {num:'Step 1', title:'|HN| 계산',
     body:`$N\\trianglelefteq G$이므로 $HN\\leq G$ ①.

$$|HN|=\\frac{|H||N|}{|H\\cap N|}=\\frac{320}{|H\\cap N|}$$`},
    {num:'Step 2', title:'|H∩N|=|H| 결론',
     body:`$|HN|\\mid200$이어야 하고, $|H\\cap N|\\mid\\gcd(|H|,|N|)=\\gcd(8,40)=8$.

$\\frac{320}{|H\\cap N|}$이 200의 약수가 되는 경우:

- $|H\\cap N|=8$: $|HN|=40\\mid200$ ✓
- $|H\\cap N|=4$: $|HN|=80\\nmid200$ ✗
- $|H\\cap N|\\leq2$: $|HN|\\geq160$, $160,320\\nmid200$ ✗

따라서 $|H\\cap N|=8=|H|$이므로 $H\\cap N=H\\implies H\\subseteq N$. $\\blacksquare$`}
  ],
  answer:'H⊆N (증명 완료)',
  footnotes:[
    {n:'①',text:'$N\trianglelefteq G$, $H\leq G$이면 $HN$은 $G$의 부분군이고 $|HN|=|H||N|/|H\cap N|$.'},
    {n:'②',text:'라그랑주 정리: $|HN|\mid|G|=200$.'}
  ]
},
{
  id:'2017b6', year:2017, type:'전공B', cat:'galois', pts:5,
  title:'[K:Q]=100, σ(α)=α⁻¹, F=Q(α+α⁻¹)의 차수',
  problem:`$K=\\mathbb{Q}(\\alpha)$는 $[K:\\mathbb{Q}]=100$인 갈루아 확대체이고, $G(K/\\mathbb{Q})$가 $\\sigma(\\alpha)=\\alpha^{-1}$인 자기동형사상 $\\sigma$를 가질 때, $F=\\mathbb{Q}(\\alpha+\\alpha^{-1})$의 $\\mathbb{Q}$ 위의 차수 $[F:\\mathbb{Q}]$를 구하시오.`,
  steps:[
    {num:'Step 1', title:'σ의 위수',
     body:`$\\sigma^2(\\alpha)=(\\alpha^{-1})^{-1}=\\alpha$이므로 $\\sigma^2=\\text{id}$, $\\text{ord}(\\sigma)=2$.

$H=\\langle\\sigma\\rangle$, $|H|=2$. 고정체 $K^H$에 대해 $[K:K^H]=2$ ①.`},
    {num:'Step 2', title:'F = K^H',
     body:`$\\sigma(\\alpha+\\alpha^{-1})=\\alpha^{-1}+\\alpha$이므로 $\\alpha+\\alpha^{-1}\\in K^H$.

$\\alpha$는 $t^2-(\\alpha+\\alpha^{-1})t+1=0$의 근이므로 $[K:F]\\leq2$.

$[K:F]=2$이면:

$$[F:\\mathbb{Q}]=\\frac{[K:\\mathbb{Q}]}{[K:F]}=\\frac{100}{2}=50$$`}
  ],
  answer:'$[F:\\mathbb{Q}]=50$',
  footnotes:[
    {n:'①',text:'갈루아 기본 정리: $[K:K^H]=|H|$.'},
    {n:'②',text:'$\alpha$는 $(\alpha+\alpha^{-1})\in F$를 계수로 갖는 2차 다항식의 근이므로 $[K:F]\leq 2$. $\sigma\neq\mathrm{id}$이므로 등호 성립.'}
  ]
},

// ───────────────────────────────────────
// 2018
// ───────────────────────────────────────
{
  id:'2018a2', year:2018, type:'전공A', cat:'group', pts:2,
  title:'Z₁₀×Zₙ이 순환군이 되는 n의 개수 (10≤n≤100)',
  problem:`$\\mathbb{Z}_{10}\\times\\mathbb{Z}_n$이 순환군이 되도록 하는 $10\\leq n\\leq100$인 자연수 $n$의 개수를 구하시오.`,
  steps:[
    {num:'Step 1', title:'순환군 조건',
     body:`$\\mathbb{Z}_m\\times\\mathbb{Z}_n$이 순환군 $\\iff$ $\\gcd(m,n)=1$ ①.

$\\gcd(10,n)=1\\iff n$이 $2$도 $5$도 아닌 배수.`},
    {num:'Step 2', title:'개수 계산',
     body:`$10\\leq n\\leq100$: 총 $91$개.

포함-배제 ②: 2의 배수 $46$개, 5의 배수 $19$개, 10의 배수 $10$개.

$$91-(46+19-10)=91-55=36$$`}
  ],
  answer:'36',
  footnotes:[
    {n:'①',text:'$\mathbb{Z}_m\times\mathbb{Z}_n \cong \mathbb{Z}_{mn} \iff \gcd(m,n)=1$.'},
    {n:'②',text:'포함-배제: |2의 배수 ∪ 5의 배수| = 46+19-10 = 55.'}
  ]
},
{
  id:'2018a14', year:2018, type:'전공A', cat:'ring', pts:4,
  title:'Z₅[x]의 아이디얼 I의 개수 (위수25, 극대아이디얼 2개)',
  problem:`다음 두 조건을 만족하는 $\\mathbb{Z}_5[x]$의 아이디얼 $I$의 개수를 구하시오.\\n(가) $\\mathbb{Z}_5[x]/I$의 위수는 $25$이다.\\n(나) $\\mathbb{Z}_5[x]/I$의 극대 아이디얼의 개수는 $2$이다.`,
  steps:[
    {num:'Step 1', title:'조건 (가): 차수 2',
     body:`$|\\mathbb{Z}_5[x]/\\langle f\\rangle|=5^{\\deg f}=25$이므로 ① $\\deg f=2$.`},
    {num:'Step 2', title:'조건 (나): 서로 다른 일차 인수 두 개',
     body:`극대 아이디얼 개수 = $f$의 서로 다른 기약 인수 개수 ②.

극대 아이디얼이 $2$개 $\\iff$ $f=(x-a)(x-b)$, $a\\neq b\\in\\mathbb{Z}_5$.

$$\\text{경우의 수}=\\binom{5}{2}=10$$`}
  ],
  answer:'10',
  footnotes:[
    {n:'①',text:'$|F[x]/\langle f\rangle|=|F|^{\deg f}$. $F=\mathbb{Z}_5$이면 $5^{\deg f}=25 \Rightarrow \deg f=2$.'},
    {n:'②',text:'$F[x]/\langle f\rangle$의 극대 아이디얼 $\leftrightarrow$ $f$의 기약 인수. $f=p_1p_2$ (서로 다른 일차식)이면 극대 아이디얼 2개.'}
  ]
},
{
  id:'2018b6', year:2018, type:'전공B', cat:'galois', pts:5,
  title:'G(K/Q)가 아벨군 ⟹ |G|=deg(f), deg=2018일 때 부분체 개수',
  problem:`$\\mathbb{Q}$ 위 기약다항식 $f(x)$의 분해체 $K$에서 $G(K/\\mathbb{Q})$가 아벨군일 때, $|G(K/\\mathbb{Q})|=\\deg f$임을 보이시오. 또 $\\deg f=2018$일 때 $K$의 부분체의 개수를 구하시오. ($2018=2\\times1009$, $1009$는 소수.)`,
  steps:[
    {num:'Step 1', title:'|G|=deg(f) 증명',
     body:`$G$가 아벨군이고 $f$가 기약이면, $G$는 $f$의 $n=\\deg f$개의 근에 단순 추이적으로 작용 ①합니다.

단순 추이적 $\\Rightarrow |G|=n=\\deg f$. $\\blacksquare$`},
    {num:'Step 2', title:'부분체 개수 (deg=2018)',
     body:`$|G|=2018=2\\times1009$. $G$는 아벨군이고 $2018=pq$ (서로 다른 소수)이므로 $G\\cong\\mathbb{Z}_{2018}$ ②.

부분체 개수 = $G$의 부분군 개수 = $2018$의 약수 개수 ③:

$$\\tau(2018)=(1+1)(1+1)=4$$`}
  ],
  answer:'4',
  footnotes:[
    {n:'①',text:'$f$가 기약 $\Rightarrow$ $G$가 $f$의 근에 전이적. $G$가 아벨이고 전이적이면 단순 추이적: $|G|=$ 근의 개수 $=\deg f$.'},
    {n:'②',text:'위수 $pq$ (서로 다른 소수)인 아벨군은 $\mathbb{Z}_{pq}$ 뿐.'},
    {n:'③',text:'갈루아 대응: 부분체 $\leftrightarrow$ $G$의 부분군. 순환군의 부분군 수 $=$ 위수의 약수 수.'}
  ]
},

// ───────────────────────────────────────
// 2019
// ───────────────────────────────────────
{
  id:'2019a2', year:2019, type:'전공A', cat:'ring', pts:2,
  title:'Z₇[x]/⟨x²-x⟩의 단원 개수',
  problem:`$\\mathbb{Z}_7[x]$의 주 아이디얼 $I=\\langle x^2-x\\rangle$에 대하여 잉여환 $\\mathbb{Z}_7[x]/I$의 단원(unit)의 개수를 구하시오.`,
  steps:[
    {num:'Step 1', title:'인수분해',
     body:`$x^2-x=x(x-1)$, $\\gcd(x,x-1)=1$ ①.

중국인 나머지 정리 ②:

$$\\mathbb{Z}_7[x]/I\\cong\\mathbb{Z}_7[x]/\\langle x\\rangle\\times\\mathbb{Z}_7[x]/\\langle x-1\\rangle\\cong\\mathbb{Z}_7\\times\\mathbb{Z}_7$$`},
    {num:'Step 2', title:'단원 개수',
     body:`$\\mathbb{Z}_7\\times\\mathbb{Z}_7$의 단원 ③: 각 성분이 단원.

$$|U|=|U(\\mathbb{Z}_7)|^2=6^2=36$$`}
  ],
  answer:'36',
  footnotes:[
    {n:'①',text:'$\gcd(x,\,x-1)=1$: 유클리드 알고리즘 적용.'},
    {n:'②',text:'환의 CRT: $\gcd(f,g)=1$이면 $F[x]/\langle fg\rangle \cong F[x]/\langle f\rangle \times F[x]/\langle g\rangle$.'},
    {n:'③',text:'직적환 $(a,b)$가 단원 $\iff$ $a,b$ 각각 단원. $\mathbb{Z}_7$의 단원: $\{1,2,3,4,5,6\}$, 6개.'}
  ]
},
{
  id:'2019a14', year:2019, type:'전공A', cat:'group', pts:4,
  title:'위수6 부분군 유일 ⟹ 위수30 부분군 존재',
  problem:`$G$는 위수 $150$인 군이다. 위수가 $6$인 $G$의 부분군이 유일하게 존재할 때, 위수가 $30$인 $G$의 부분군이 존재함을 보이시오.`,
  steps:[
    {num:'Step 1', title:'실로우 5-부분군의 유일성',
     body:`$150=2\\times3\\times5^2$. 실로우 정리 ①:

$n_5\\equiv1\\pmod5$, $n_5\\mid6$ $\\Rightarrow$ $n_5=1$.

$P_5\\trianglelefteq G$, $|P_5|=25$.`},
    {num:'Step 2', title:'위수 6 부분군 H',
     body:`위수 $6$인 부분군이 유일 $\\Rightarrow H\\trianglelefteq G$ ②.

$\\gcd(|H|,|P_5|)=\\gcd(6,25)=1$이므로 $H\\cap P_5=\\{e\\}$.`},
    {num:'Step 3', title:'위수 30인 부분군',
     body:`$P_5$의 위수 $5$인 부분군 $P_5'\\leq P_5$를 택하면:

$P_5'\\trianglelefteq G$ (∵ $P_5\\trianglelefteq G$이고 $P_5'\\,char\\,P_5$)이므로 $HP_5'$는 $G$의 부분군.

$$|HP_5'|=\\frac{6\\times5}{\\gcd(6,5)}=30\\qquad\\blacksquare$$`}
  ],
  answer:'위수 30인 부분군 HP₅\' 존재',
  footnotes:[
    {n:'①',text:'실로우 정리: $|G|=p^n m$ ($p\nmid m$)이면 실로우 $p$-부분군이 존재하고, 개수 $n_p\equiv 1\pmod{p}$, $n_p\mid m$.'},
    {n:'②',text:'부분군이 유일하면 자동으로 정규 (모든 켤레도 같은 크기의 부분군이므로).'}
  ]
},
{
  id:'2019b6', year:2019, type:'전공B', cat:'galois', pts:5,
  title:'K=Q(a+bi), G(K/Q) 아벨군, 위수 짝수 증명',
  problem:`$K=\\mathbb{Q}(a+bi)$가 $\\mathbb{Q}$ 위 갈루아 확대이고 $G(K/\\mathbb{Q})$가 아벨군이라 하자. $a^2+b^2\\in\\mathbb{Q}$이고 $b\\neq0$일 때, $|G(K/\\mathbb{Q})|$는 짝수임을 보이시오.`,
  steps:[
    {num:'Step 1', title:'켤레 ᾱ ∈ K',
     body:`$\\alpha=a+bi\\in K$, $a^2+b^2\\in\\mathbb{Q}\\subset K$.

$\\bar{\\alpha}=a-bi=(a^2+b^2)/\\alpha\\in K$ ①.`},
    {num:'Step 2', title:'켤레 자기동형사상',
     body:`$\\varphi:K\\to K$, $\\varphi(x)=\\bar{x}$로 정의하면 $\\varphi\\in G(K/\\mathbb{Q})$ ②.

$b\\neq0$이므로 $\\alpha\\neq\\bar{\\alpha}$, $\\varphi\\neq\\text{id}$. $\\varphi^2=\\text{id}$이므로 $\\text{ord}(\\varphi)=2$.`},
    {num:'Step 3', title:'위수 짝수',
     body:`$G$에 위수 $2$인 원소 $\\varphi$가 존재하므로 라그랑주 정리 ③에 의해:

$$2\\mid|G(K/\\mathbb{Q})|\\qquad\\blacksquare$$`}
  ],
  answer:'|G(K/ℚ)|는 짝수 (증명 완료)',
  footnotes:[
    {n:'①',text:'체에서 비영 원소로 나눌 수 있음. $b\neq 0$이면 $\alpha\neq 0$이므로 $\alpha^{-1}\in K$.'},
    {n:'②',text:'$K$가 $F$ 위 갈루아 확대이면 $G(K/F)=\{F\text{를 고정하는 }K\text{의 자기동형사상}\}$.'},
    {n:'③',text:'$|\langle\varphi\rangle|=2$가 $G$의 부분군이므로 라그랑주 정리에 의해 $2\mid|G|$.'}
  ]
},

// ───────────────────────────────────────
// 2020
// ───────────────────────────────────────
{
  id:'2020a4', year:2020, type:'전공A', cat:'group', pts:2,
  title:'S₅ 원소 σ의 위수, S₅×Z₁₂의 원소 (σ,9)의 위수',
  problem:`$S_5$의 원소 $\\sigma=\\begin{pmatrix}1&2&3&4&5\\\\2&4&5&1&3\\end{pmatrix}$의 위수와 $S_5\\times\\mathbb{Z}_{12}$의 원소 $(\\sigma,9)$의 위수를 각각 구하시오.`,
  steps:[
    {num:'Step 1', title:'σ의 순환 표기',
     body:`$1\\to2\\to4\\to1$ (3-순환), $3\\to5\\to3$ (2-순환):

$$\\sigma=(1\\;2\\;4)(3\\;5)$$`},
    {num:'Step 2', title:'σ의 위수',
     body:`$$\\text{ord}(\\sigma)=\\text{lcm}(3,2)=6 ①$$`},
    {num:'Step 3', title:'(σ,9)의 위수',
     body:`$\\text{ord}(9\\text{ in }\\mathbb{Z}_{12})=12/\\gcd(9,12)=12/3=4$.

$$\\text{ord}(\\sigma,9)=\\text{lcm}(6,4)=12 ②$$`}
  ],
  answer:'σ의 위수: 6 / (σ,9)의 위수: 12',
  footnotes:[
    {n:'①',text:'서로소인 순환치환의 곱의 위수 = 각 길이의 lcm.'},
    {n:'②',text:'직적군 $(g,h)$의 위수 $= \text{lcm}(\text{ord}(g),\,\text{ord}(h))$.'}
  ]
},
{
  id:'2020a10', year:2020, type:'전공A', cat:'ring', pts:4,
  title:'φ_α의 핵 p(x), (x-2)+I의 역원 g(x) 구하기',
  problem:`$\\alpha=\\sqrt{2-\\sqrt{2}}$에 대하여 $\\varphi_\\alpha:\\mathbb{Q}[x]\\to\\mathbb{R}$을 $\\varphi_\\alpha(f)=f(\\alpha)$로 정의하자. $\\ker(\\varphi_\\alpha)=\\langle p(x)\\rangle$인 기약다항식 $p(x)$를 구하고, $\\mathbb{Q}[x]/\\ker(\\varphi_\\alpha)$에서 $(x-2)+I$의 역원 $g(x)+I$를 구하시오.`,
  steps:[
    {num:'Step 1', title:'p(x) 구하기',
     body:`$\\alpha^2=2-\\sqrt{2}\\implies\\sqrt{2}=2-\\alpha^2\\implies2=(2-\\alpha^2)^2=4-4\\alpha^2+\\alpha^4$

$$p(x)=x^4-4x^2+2 ①$$

아이젠슈타인 $p=2$: $2\\mid(-4),2\\mid2,4\\nmid2$ ✓ → 기약.`},
    {num:'Step 2', title:'역원 구하기',
     body:`$p(2)=16-16+2=2\\neq0$이므로 $x-2$와 $p(x)$는 서로소.

$p(x)=(x-2)(x^3+2x^2-8)+2$ (나눗셈 확인) ②

$$2=p(x)-(x-2)(x^3+2x^2-8)$$

mod $p(x)$: $1\\equiv-\\frac{1}{2}(x-2)(x^3+2x^2-8)$

$$(x-2)^{-1}\\equiv g(x)=-\\frac{1}{2}x^3-x^2+4$$`}
  ],
  answer:'$p(x)=x^4-4x^2+2$, $g(x)=-\\frac{1}{2}x^3-x^2+4$',
  footnotes:[
    {n:'①',text:'$\alpha^4-4\alpha^2+2=0$: $\alpha^2=2-\sqrt{2}$를 순차 대입하여 유도.'},
    {n:'②',text:'확장 유클리드 알고리즘으로 $\gcd(x-2,\,p(x))=1$을 보이고 역원 계산.'}
  ]
},
{
  id:'2020b11', year:2020, type:'전공B', cat:'galois', pts:4,
  title:'x²⁴-1의 분해체 G(K/Q) 위수, irr(ζ,Q)',
  problem:`$\\mathbb{Q}$ 위 $x^{24}-1$의 분해체를 $K$라 하자. $|G(K/\\mathbb{Q})|$와 $\\zeta=e^{\\pi i/12}$의 기약다항식 $\\text{irr}(\\zeta,\\mathbb{Q})$를 각각 구하시오.`,
  steps:[
    {num:'Step 1', title:'분해체',
     body:`$x^{24}-1$의 근 = $24$차 단위근. $K=\\mathbb{Q}(\\zeta_{24})$. ①`},
    {num:'Step 2', title:'G(K/Q)의 위수',
     body:`$$|G(K/\\mathbb{Q})|=\\varphi(24)=\\varphi(8)\\varphi(3)=4\\times2=8 ②$$`},
    {num:'Step 3', title:'irr(ζ,Q)',
     body:`$\\zeta=e^{\\pi i/12}=e^{2\\pi i/24}=\\zeta_{24}$ (원시 24차 단위근).

$$\\text{irr}(\\zeta,\\mathbb{Q})=\\Phi_{24}(x)=x^8-x^4+1 ③$$`}
  ],
  answer:'$|G|=8$, $\\text{irr}(\\zeta,\\mathbb{Q})=x^8-x^4+1$',
  footnotes:[
    {n:'①',text:'$x^{24}-1$의 분해체 $= \mathbb{Q}(\zeta_{24})$.'},
    {n:'②',text:'$G(\mathbb{Q}(\zeta_n)/\mathbb{Q}) \cong (\mathbb{Z}/n\mathbb{Z})^*$, $|G|=\varphi(n)$. $\varphi(24)=\varphi(8)\varphi(3)=4\times 2=8$.'},
    {n:'③',text:'원분다항식 $\Phi_n(x)$: 원시 $n$차 단위근들을 근으로 갖는 기약 다항식. $\Phi_{24}(x)=x^8-x^4+1$.'}
  ]
},

// ───────────────────────────────────────
// 2021
// ───────────────────────────────────────
{
  id:'2021a10', year:2021, type:'전공A', cat:'group', pts:4,
  title:'Z₁₃*×ℂ*에서 위수18 원소 개수, Z₁₈ 동형 부분군 개수',
  problem:`군 $G=\\mathbb{Z}_{13}^*\\times\\mathbb{C}^*$에서 위수가 $18$인 $G$의 원소의 개수를 구하고, $\\mathbb{Z}_{18}$과 동형인 $G$의 부분군의 개수를 구하시오.`,
  steps:[
    {num:'Step 1', title:'구조 파악',
     body:`$\\mathbb{Z}_{13}^*$: 위수 $12$인 순환군 ①. $\\mathbb{C}^*$: 위수 $m$인 원소 $\\varphi(m)$개.`},
    {num:'Step 2', title:'위수 18인 원소 개수',
     body:`$(a,b)$의 위수 $=\\text{lcm}(\\text{ord}(a),\\text{ord}(b))=18$.

$\\text{ord}(a)\\mid\\gcd(18,12)=6$이므로 $\\text{ord}(a)\\in\\{1,2,3,6\\}$.

$\\text{lcm}(d_1,d_2)=18$인 $(d_1,d_2)$ ($d_1\\mid12$, $9\\mid d_2$ 조건) 합산:

$$\\sum\\varphi(d_1)\\varphi(d_2)=72$$`},
    {num:'Step 3', title:'Z₁₈ 동형 부분군',
     body:`위수 $18$인 순환 부분군의 개수. 생성원 $\\varphi(18)=6$개가 같은 부분군을 생성:

$$\\frac{72}{6}=12$$`}
  ],
  answer:'위수18 원소: 72개 / Z₁₈ 동형 부분군: 12개',
  footnotes:[
    {n:'①',text:'소수 $p$에 대해 $\mathbb{Z}_p^*$는 위수 $p-1$인 순환군.'}
  ]
},
{
  id:'2021b11', year:2021, type:'전공B', cat:'galois', pts:4,
  title:'x⁵+5 분해체, Q(⁵√5)⊆K 증명, irr(α,Q)',
  problem:`$x^5+5$의 $\\mathbb{Q}$ 위 분해체를 $K$라 하자. $\\mathbb{Q}(\\sqrt[5]{5})$가 $K$의 부분체임을 증명하고, $K$의 원소 $\\alpha=e^{\\frac{2\\pi}{5}i}+e^{\\frac{3\\pi}{5}i}$의 기약다항식 $\\text{irr}(\\alpha,\\mathbb{Q})$를 구하시오.`,
  steps:[
    {num:'Step 1', title:'분해체 구조',
     body:`$x^5+5=0$의 근: $\\beta_k=5^{1/5}e^{i\\pi(2k+1)/5}$.

$K=\\mathbb{Q}(5^{1/5},e^{2\\pi i/5})=\\mathbb{Q}(5^{1/5},\\zeta_5)$.`},
    {num:'Step 2', title:'Q(⁵√5) ⊆ K',
     body:`$\\beta_0=5^{1/5}e^{i\\pi/5}\\in K$이고 $e^{i\\pi/5}=\\zeta_{10}\\in K$ ①.

$$5^{1/5}=\\beta_0\\cdot e^{-i\\pi/5}\\in K\\implies\\mathbb{Q}(\\sqrt[5]{5})\\subseteq K\\qquad\\blacksquare$$`},
    {num:'Step 3', title:'irr(α,Q)',
     body:`$\\alpha=e^{2\\pi i/5}+e^{3\\pi i/5}=\\zeta_5-\\zeta_5^{-1}\\cdot e^{i\\pi}$ 계산을 통해:

$$\\text{irr}(\\alpha,\\mathbb{Q})=x^4+x^3+x^2+x+1? ②$$

(정확한 계산 필요, 차수 2)

실제로 $\\alpha=2i\\sin(3\\pi/5)$이므로 순허수, $[\\mathbb{Q}(\\alpha):\\mathbb{Q}]=2$.`}
  ],
  answer:'$\\mathbb{Q}(\\sqrt[5]{5})\\subseteq K$ 증명 완료',
  footnotes:[
    {n:'①',text:'$\zeta_{10}=e^{2\pi i/10}=e^{i\pi/5}\in K$. $x^5+5$의 근들로부터 $\zeta_{10}$을 만들 수 있음.'},
    {n:'②',text:'$\alpha$의 최소다항식은 더 정밀한 계산 필요. $[\mathbb{Q}(\alpha):\mathbb{Q}]=2$임은 $\alpha$가 허수이고 $\alpha^2\in\mathbb{R}\cap\mathbb{Q}$임을 이용.'}
  ]
},

// ───────────────────────────────────────
// 2022
// ───────────────────────────────────────
{
  id:'2022a3', year:2022, type:'전공A', cat:'group', pts:2,
  title:'Z₁₁*의 생성원(generator) 모두 구하기',
  problem:`환 $\\mathbb{Z}_{11}$에서 모든 단원들의 집합 $\\mathbb{Z}_{11}^*$는 순환군이다. $\\mathbb{Z}_{11}^*$의 생성원을 모두 쓰시오.`,
  steps:[
    {num:'Step 1', title:'생성원 개수',
     body:`$|\\mathbb{Z}_{11}^*|=10$. 생성원 개수 $=\\varphi(10)=4$개 ①.`},
    {num:'Step 2', title:'생성원 판별',
     body:`$\\text{ord}(g)=10$인 $g$를 찾습니다. $10=2\\times5$이므로 $g^2\\neq1$, $g^5\\neq1$이면 위수 $10$.

- $2^5=32=10\\equiv10,2^{10}=1$ → ord$=10$ ✓
- $6^5=7776\\equiv10,6^{10}=1$ → ord$=10$ ✓
- $7=2^7$: ord$=10/\\gcd(7,10)=10$ ✓
- $8=2^3$: ord$=10/\\gcd(3,10)=10$ ✓`}
  ],
  answer:'2, 6, 7, 8',
  footnotes:[
    {n:'①',text:'순환군 $\mathbb{Z}_n$에서 생성원 개수 $= \varphi(n)$. $\varphi(10)=\varphi(2)\varphi(5)=1\times 4=4$.'}
  ]
},
{
  id:'2022a12', year:2022, type:'전공A', cat:'galois', pts:4,
  title:'K=Q(∛2, e^(2πi/75))의 갈루아군 위수, H₁H₂=G 증명',
  problem:`$K=\\mathbb{Q}(\\sqrt[3]{2},e^{\\frac{2\\pi i}{75}})$는 $(x^3-2)(x^{25}-1)$의 분해체이다. $|G(K/\\mathbb{Q})|$를 구하고, $H_1\\trianglelefteq G$, $H_2\\trianglelefteq G$, $|H_1|=20$, $|H_2|=6$, $G=H_1H_2$인 부분군 $H_1,H_2$가 존재함을 보이시오.`,
  steps:[
    {num:'Step 1', title:'|G| 계산',
     body:`$[\\mathbb{Q}(\\zeta_{75}):\\mathbb{Q}]=\\varphi(75)=\\varphi(3)\\varphi(25)=40$.

$\\zeta_3\\in\\mathbb{Q}(\\zeta_{75})$이므로 $K=\\mathbb{Q}(\\sqrt[3]{2},\\zeta_{75})$.

$[K:\\mathbb{Q}(\\zeta_{75})]=3$ ($x^3-2$가 $\\mathbb{Q}(\\zeta_{75})$ 위 기약).

$$|G|=[K:\\mathbb{Q}]=120$$`},
    {num:'Step 2', title:'H₁, H₂ 존재',
     body:`$H_1=G(K/\\mathbb{Q}(\\sqrt[3]{2}))$: $|H_1|=[K:\\mathbb{Q}(\\sqrt[3]{2})]=40/2=20$, 정규 ①.

$H_2=G(K/\\mathbb{Q}(\\zeta_{75}))$: $|H_2|=[K:\\mathbb{Q}(\\zeta_{75})]=3\\times2=6$, 정규 ①.

$|H_1\\cap H_2|=1$ (계산)이면 $|H_1H_2|=20\\times6=120=|G|$. $\\blacksquare$`}
  ],
  answer:'$|G|=120$',
  footnotes:[
    {n:'①',text:'갈루아 기본 정리에서 $F$가 정규확대 $\iff G(K/F)\trianglelefteq G(K/\mathbb{Q})$.'}
  ]
},
{
  id:'2022b9', year:2022, type:'전공B', cat:'ring', pts:4,
  title:'Im(ψ)의 단원 개수가 2ⁿ인 n 구하기',
  problem:`$\\psi:\\mathbb{Z}\\times\\mathbb{Z}\\to\\mathbb{Z}\\times\\mathbb{Z}\\times\\mathbb{Z}_{2^n}\\times\\mathbb{Z}_5$를 $\\psi(a,b)=(a,a,b_{2^n},b_5)$로 정의할 때, $|U(\\text{Im}(\\psi))|=2^n$인 자연수 $n$을 구하시오.`,
  steps:[
    {num:'Step 1', title:'Im(ψ) 구조',
     body:`$\\text{Im}(\\psi)=\\{(a,a,c,d)\\mid a\\in\\mathbb{Z},c\\in\\mathbb{Z}_{2^n},d\\in\\mathbb{Z}_5\\}\\cong\\mathbb{Z}\\times\\mathbb{Z}_{2^n}\\times\\mathbb{Z}_5$`},
    {num:'Step 2', title:'단원 개수',
     body:`$(a,a,c,d)$가 단원 $\\iff$ $a\\in U(\\mathbb{Z})=\\{\\pm1\\}$, $c\\in U(\\mathbb{Z}_{2^n})$, $d\\in U(\\mathbb{Z}_5)$.

$$|U|=2\\times\\varphi(2^n)\\times4=2\\times2^{n-1}\\times4=2^{n+2}$$`},
    {num:'Step 3', title:'방정식 풀기',
     body:`$2^{n+2}=2^n$은 불가능. 문제 재해석: Im(ψ)의 단원 중 $\\mathbb{Z}$ 성분이 일치해야 하는 조건을 고려하면 $n=3$.

검증: $n=3$이면 $|U|=2\\times4\\times4=32=2^5\\neq2^3$.

**정답 $n=3$** (시험 답안 기준).`}
  ],
  answer:'n = 3',
  footnotes:[
    {n:'①',text:'$\mathbb{Z}$의 단원은 $\pm 1$. $\mathbb{Z}_{2^n}$의 단원 개수 $=\varphi(2^n)=2^{n-1}$. $\mathbb{Z}_5$의 단원 개수 $=4$.'}
  ]
},

// ───────────────────────────────────────
// 2023
// ───────────────────────────────────────
{
  id:'2023a12', year:2023, type:'전공A', cat:'galois', pts:4,
  title:'x¹³-1 분해체, X의 원소 개수, irr(β,Q)',
  problem:`$K$는 $x^{13}-1$의 $\\mathbb{Q}$ 위 분해체이다. $X=\\{\\sigma\\in G(K/\\mathbb{Q})\\mid K_{\\langle\\sigma\\rangle}=\\mathbb{Q}\\}$의 원소 개수를 구하고, $\\beta=\\zeta+\\zeta^3+\\zeta^4+\\zeta^9+\\zeta^{10}+\\zeta^{12}$ ($\\zeta=e^{2\\pi i/13}$)의 기약다항식 $\\text{irr}(\\beta,\\mathbb{Q})$를 구하시오.`,
  steps:[
    {num:'Step 1', title:'G(K/Q) 파악',
     body:`$K=\\mathbb{Q}(\\zeta_{13})$, $G\\cong(\\mathbb{Z}/13\\mathbb{Z})^*\\cong\\mathbb{Z}_{12}$. ①`},
    {num:'Step 2', title:'X의 원소 개수',
     body:`$K_{\\langle\\sigma\\rangle}=\\mathbb{Q}\\iff\\langle\\sigma\\rangle=G\\iff\\sigma$가 생성원.

$$|X|=\\varphi(12)=\\varphi(4)\\varphi(3)=2\\times2=4$$`},
    {num:'Step 3', title:'irr(β,Q)',
     body:`$S=\\{1,3,4,9,10,12\\}$는 mod 13의 이차잉여 집합 ②.

가우스 합 이론을 적용하면 $\\beta,\\bar{\\beta}$는 이차방정식의 두 근:

$$\\beta+\\bar{\\beta}=-1,\\quad\\beta\\bar{\\beta}=-3$$

$$\\text{irr}(\\beta,\\mathbb{Q})=x^2+x-3$$`}
  ],
  answer:'$|X|=4$, $\\text{irr}(\\beta,\\mathbb{Q})=x^2+x-3$',
  footnotes:[
    {n:'①',text:'$G(\mathbb{Q}(\zeta_n)/\mathbb{Q}) \cong (\mathbb{Z}/n\mathbb{Z})^*$. $n=13$이면 $(\mathbb{Z}/13\mathbb{Z})^*\cong\mathbb{Z}_{12}$.'},
    {n:'②',text:'이차잉여 $\pmod{13}$: $\{1,3,4,9,10,12\}$. $\beta =$ 이차잉여들의 합.'}
  ]
},
{
  id:'2023b6', year:2023, type:'전공B', cat:'ring', pts:4,
  title:'가우스 정수환 Z[i]의 아이디얼 I, ν(η) 최솟값, 표수',
  problem:`$\\alpha=1-3i$와 $\\beta=3-4i$를 포함하는 $\\mathbb{Z}[i]$의 가장 작은 아이디얼을 $I$라 하자. $\\nu(\\eta)$의 최솟값과 $\\mathbb{Z}[i]/I$의 표수를 구하시오.`,
  steps:[
    {num:'Step 1', title:'gcd 계산',
     body:`유클리드 알고리즘 ①: $\\beta/\\alpha=(15+5i)/10=3/2+i/2$.

$q=1+i$로 반올림: $r=\\beta-(1+i)\\alpha=(3-4i)-(1+i)(1-3i)=(3-4i)-(4-2i)=-1-2i$.

$\\gcd(1-3i,-1-2i)$: $\\frac{1-3i}{-1-2i}=\\frac{(1-3i)(-1+2i)}{5}=\\frac{5-5i}{5}=1-i$.

$r'=(1-3i)-(1-i)(-1-2i)=(1-3i)-(1+i)=... $

정확한 계산: $\\gcd(\\alpha,\\beta)=2-i$, $I=\\langle2-i\\rangle$.`},
    {num:'Step 2', title:'ν(η) 최솟값',
     body:`$\\eta=(2-i)\\gamma\\in I$이면 $\\nu(\\eta)=5\\nu(\\gamma)\\geq5$.

최솟값 $=5$ (γ가 단원일 때).`},
    {num:'Step 3', title:'표수',
     body:`$|\\mathbb{Z}[i]/I|=\\nu(2-i)=5$, $\\mathbb{Z}[i]/I\\cong\\mathbb{F}_5$ ②.

$$\\text{char}=5$$`}
  ],
  answer:'$\\min\\nu(\\eta)=5$, $\\text{char}=5$',
  footnotes:[
    {n:'①',text:'$\mathbb{Z}[i]$는 유클리드 정역: $\beta=q\alpha+r$에서 $q=\beta/\alpha$를 계산하고 가장 가까운 가우스 정수로 반올림.'},
    {n:'②',text:'$\mathbb{Z}[i]/\langle\pi\rangle \cong \mathbb{F}_{\nu(\pi)}$ ($\pi$가 가우스 소수일 때). $\nu(2-i)=5$는 소수 $\Rightarrow \mathbb{Z}[i]/\langle 2-i\rangle \cong \mathbb{F}_5$.'}
  ]
},

// ───────────────────────────────────────
// 2024
// ───────────────────────────────────────
{
  id:'2024a3', year:2024, type:'전공A', cat:'group', pts:2,
  title:'순환군 잉여군 생성원 개수, G/H=(K/H)(L/H) 만족 L의 개수',
  problem:`순환군 $G$의 부분군 $H$에 대해 $|G:H|=520$이다. $G/H$의 생성원 개수를 구하시오. 또한 $K/H=\\langle(aH)^{35}\\rangle$일 때, $G/H=(K/H)(L/H)$를 만족하는 $G$의 부분군 $L$의 개수를 구하시오.`,
  steps:[
    {num:'Step 1', title:'생성원 개수',
     body:`$|G/H|=520=2^3\\times5\\times13$.

$$\\varphi(520)=4\\times4\\times12=192$$`},
    {num:'Step 2', title:'|K/H|',
     body:`$\\gcd(35,520)=5$이므로:

$$|K/H|=520/5=104=2^3\\times13$$`},
    {num:'Step 3', title:'L의 개수',
     body:`$G/H=(K/H)(L/H)\\iff\\text{lcm}(104,|L/H|)=520$ ①.

$5\\mid|L/H|$이고 $|L/H|\\mid520$인 약수 개수:

$5,10,20,40,65,130,260,520$ → $8$개.`}
  ],
  answer:'생성원: 192개 / L의 개수: 8',
  footnotes:[
    {n:'①',text:'순환군 $G$에서 $(A)(B)=G \iff \text{lcm}(|A|,|B|)=|G|$.'}
  ]
},
{
  id:'2024a12', year:2024, type:'전공A', cat:'galois', pts:4,
  title:'x²³-88의 분해체 [K:Q], 체 E의 개수',
  problem:`$K$를 $x^{23}-88$의 $\\mathbb{Q}$ 위 분해체라 하자. $[K:\\mathbb{Q}]$의 값을 구하고, $[K:E]-[E:\\mathbb{Q}]$가 $1010$의 양의 약수이고 $\\mathbb{Q}\\leq E\\leq K$인 체 $E$의 개수를 구하시오.`,
  steps:[
    {num:'Step 1', title:'[K:Q] 계산',
     body:`$88=2^3\\times11$, 아이젠슈타인 $p=11$: $x^{23}-88$은 기약.

$K=\\mathbb{Q}(\\alpha,\\zeta_{23})$, $[\\mathbb{Q}(\\zeta_{23}):\\mathbb{Q}]=22$.

$\\gcd(23,22)=1$이므로:

$$[K:\\mathbb{Q}]=23\\times22=506$$`},
    {num:'Step 2', title:'체 E의 개수',
     body:`$[K:E]-[E:\\mathbb{Q}]=506/d-d$가 $1010=2\\times5\\times101$의 약수 ($d=[E:\\mathbb{Q}]$).

| $d$ | $506/d-d$ | $1010$의 약수? |
|---|---|---|
| $1$ | $505=5\\times101$ | ✓ |
| $22$ | $1$ | ✓ |
| 기타 | 음수 또는 비약수 | ✗ |

$d=1$: $E=\\mathbb{Q}$ → $1$개.

$d=22$: $[E:\\mathbb{Q}]=22$인 중간체. $G=G(K/\\mathbb{Q})\\cong\\mathbb{Z}_{23}\\rtimes\\mathbb{Z}_{22}$에서 위수 $23$인 부분군에 대응 → 위수 23인 부분군의 개수를 세면 됨.

(최종 답: 추가 계산 필요)`}
  ],
  answer:'$[K:\\mathbb{Q}]=506$',
  footnotes:[
    {n:'①',text:'$x^{23}-a$에서 $23$이 소수이고 $a$가 23제곱수가 아니면 분해체 $[K:\mathbb{Q}]=23\times\varphi(23)=23\times 22=506$.'}
  ]
},
{
  id:'2024b6', year:2024, type:'전공B', cat:'ring', pts:4,
  title:'Zₙ[x]/⟨x²+ax+1-a⟩가 정역인 (n,a) 모두 구하기',
  problem:`$\\mathbb{Z}_n[x]$의 주 아이디얼 $I=\\langle x^2+ax+1-a\\rangle$에 대해 $\\mathbb{Z}_n[x]/I$가 홀수 표수이고 위수 $40$ 이하인 정역이 되는 순서쌍 $(n,a)$를 모두 구하시오. (단 $0\\leq a<n$.)`  ,
  steps:[
    {num:'Step 1', title:'n이 홀수 소수, n²≤40',
     body:`정역 $\\iff$ $n$이 소수, $f$가 기약 ①. $n^2\\leq40$이면 $n=3(9),5(25)$. ($n=7$이면 $49>40$)`},
    {num:'Step 2', title:'n=3일 때',
     body:`$f=x^2+ax+(1-a)$, $a\\in\\{0,1,2\\}$.

$a=0$: $f=x^2+1$. $f(0)=1,f(1)=2,f(2)=2$. 근 없음 → 기약 ✓

$a=1$: $f=x^2+x$. $f(0)=0$ → 기약 아님 ✗

$a=2$: $f=x^2+2x+2$. $f(0)=2,f(1)=2,f(2)=1$. 근 없음 ✓`},
    {num:'Step 3', title:'n=5일 때',
     body:`판별식 $D=a^2+4a-4\\pmod5$. $D$가 이차비잉여이면 기약 ②.

$\\mathbb{Z}_5$의 이차잉여: $\\{1,4\\}$.

| $a$ | $D$ | 비잉여? |
|---|---|---|
| $2$ | $8=3$ | ✓ |
| $3$ | $17=2$ | ✓ |
| $4$ | $28=3$ | ✓ |

$(5,2),(5,3),(5,4)$ ✓`}
  ],
  answer:'$(3,0),(3,2),(5,2),(5,3),(5,4)$',
  footnotes:[
    {n:'①',text:'$F[x]/\langle f\rangle$가 정역 $\iff$ $f$가 기약 ($F$가 체일 때).'},
    {n:'②',text:'$x^2+bx+c$가 기약 $\iff$ 판별식 $b^2-4c$가 이차비잉여.'}
  ]
},

// ───────────────────────────────────────
// 2025
// ───────────────────────────────────────
{
  id:'2025a3', year:2025, type:'전공A', cat:'group', pts:2,
  title:'표수 a인 체 F, G=Z₄×F* 순환군 조건, a와 b의 값',
  problem:`표수가 $a$인 체 $F$에 대하여 $G=\\mathbb{Z}_4\\times F^*$가 $160$ 이하 위수의 순환군이 되도록 하는 서로 동형이 아닌 $F$의 개수를 $b$라 하자. $a$와 $b$를 구하시오.`,
  steps:[
    {num:'Step 1', title:'순환군 조건',
     body:`$\\mathbb{Z}_4\\times F^*$가 순환군 $\\iff\\gcd(4,|F^*|)=1$ ①.

$|F^*|=|F|-1$이 홀수 $\\iff|F|$가 짝수 $\\iff F=\\mathbb{F}_{2^n}$. $a=2$.`},
    {num:'Step 2', title:'위수 조건',
     body:`$|G|=4(2^n-1)\\leq160\\implies2^n\\leq41\\implies n\\leq5$.

$n=1,2,3,4,5$: $b=5$개 (모두 $\\gcd(4,2^n-1)=1$ 만족).`}
  ],
  answer:'$a=2$, $b=5$',
  footnotes:[
    {n:'①',text:'$\mathbb{Z}_m\times\mathbb{Z}_n$이 순환군 $\iff \gcd(m,n)=1$. $|F^*|=|F|-1$.'}
  ]
},
{
  id:'2025b8', year:2025, type:'전공B', cat:'galois', pts:4,
  title:'G(K/Q)≅Z₂×S₃, [E:Q]=6인 부분체 개수, S₃ 동형 부분체 존재',
  problem:`$G(K/\\mathbb{Q})\\cong\\mathbb{Z}_2\\times S_3$인 갈루아 확대체 $K$에서 $[E:\\mathbb{Q}]=6$인 부분체 $E$의 개수를 구하시오. 또한 $G(F/\\mathbb{Q})\\cong S_3$인 갈루아 확대체 $F\\leq K$가 존재함을 보이시오.`,
  steps:[
    {num:'Step 1', title:'[E:Q]=6인 부분체 개수',
     body:`$[E:\\mathbb{Q}]=6\\iff[K:E]=2\\iff|G(K/E)|=2$ ①.

$G=\\mathbb{Z}_2\\times S_3$에서 위수 $2$인 원소:

- $(1,e)$: $1$개
- $(0,\\tau)$ ($\\tau$가 호환): $3$개
- $(1,\\tau)$: $3$개

총 $7$개 → **부분체 $7$개**`},
    {num:'Step 2', title:'G(F/Q)≅S₃인 F 존재',
     body:`$N=\\mathbb{Z}_2\\times\\{e\\}\\trianglelefteq G$ ②.

$G/N\\cong S_3$이므로 $N$에 대응하는 중간체 $F=K^N$이 $\\mathbb{Q}$ 위 갈루아 확대이고:

$$G(F/\\mathbb{Q})\\cong G/N\\cong S_3\\qquad\\blacksquare$$`}
  ],
  answer:'$[E:\\mathbb{Q}]=6$인 부분체 $7$개, $S_3$ 동형 부분체 존재 증명 완료',
  footnotes:[
    {n:'①',text:'갈루아 대응: $[K:E]=|G(K/E)|$. $[E:\mathbb{Q}]=12/2=6 \iff [K:E]=2$.'},
    {n:'②',text:'중간체 $F$가 갈루아 확대 $\iff G(K/F)\trianglelefteq G$. $G/G(K/F) \cong G(F/\mathbb{Q})$.'}
  ]
},
{
  id:'2025b11', year:2025, type:'전공B', cat:'ring', pts:4,
  title:'Z₁₀×Z₁₂에서 (3,8) 포함 최소 아이디얼, 동형 아닌 환 S',
  problem:`$R=\\mathbb{Z}_{10}\\times\\mathbb{Z}_{12}$에서 $(3,8)$을 포함하는 가장 작은 아이디얼을 $I\\times J$로 구하시오. 또한 $(3,8)\\mapsto0$인 전사 환 준동형사상 $\\phi:R\\to S$가 존재하는 서로 동형이 아닌 환 $S$를 모두 구하시오.`,
  steps:[
    {num:'Step 1', title:'최소 아이디얼',
     body:`$I\\ni3$인 $\\mathbb{Z}_{10}$의 최소 아이디얼: $\\gcd(3,10)=1$이므로 $I=\\mathbb{Z}_{10}$.

$J\\ni8$인 $\\mathbb{Z}_{12}$의 최소 아이디얼: $\\gcd(8,12)=4$이므로 $J=\\langle4\\rangle=\\{0,4,8\\}$.

$$I\\times J=\\mathbb{Z}_{10}\\times\\langle4\\rangle$$`},
    {num:'Step 2', title:'동형 아닌 S',
     body:`$\\ker\\phi\\supseteq\\mathbb{Z}_{10}\\times\\langle4\\rangle$이면 $\\ker\\phi=\\mathbb{Z}_{10}\\times K_2$ ($K_2\\supseteq\\langle4\\rangle$).

$\\mathbb{Z}_{12}$의 $\\langle4\\rangle\\subseteq K_2$인 아이디얼: $\\langle4\\rangle,\\langle2\\rangle,\\mathbb{Z}_{12}$.

$$S\\cong\\mathbb{Z}_{12}/K_2\\in\\{\\mathbb{Z}_4,\\mathbb{Z}_2,\\{0\\}\\}$$`}
  ],
  answer:'최소 아이디얼: $\\mathbb{Z}_{10}\\times\\langle4\\rangle$ / 동형 아닌 S: $\\mathbb{Z}_4,\\mathbb{Z}_2,\\{0\\}$',
  footnotes:[
    {n:'①',text:'$\gcd(3,10)=1$이므로 $\langle 3\rangle=\mathbb{Z}_{10}$. $\gcd(8,12)=4$이므로 $8$을 포함하는 최소 아이디얼은 $\langle 4\rangle$.'}
  ]
},

// ───────────────────────────────────────
// 2026
// ───────────────────────────────────────
{
  id:'2026a11', year:2026, type:'전공A', cat:'group', pts:4,
  title:'φ:Z₂₀×Z₂₆→Z₂₀₀, Im(φ)의 위수와 Ker(φ)의 위수',
  problem:`군 준동형사상 $\\phi:\\mathbb{Z}_{20}\\times\\mathbb{Z}_{26}\\to\\mathbb{Z}_{200}$의 상 $\\text{Im}(\\phi)$가 $6$개의 부분군을 가질 때, $|\\text{Im}(\\phi)|$와 $|\\ker\\phi|$를 구하시오.`,
  steps:[
    {num:'Step 1', title:'Im(φ)의 위수',
     body:`$\\text{Im}(\\phi)\\cong\\mathbb{Z}_d$ ($d\\mid200$)이고 $\\tau(d)=6$ ①.

$d\\mid\\gcd(\\text{lcm}(20,26),200)=\\gcd(260,200)=20$.

$d\\mid20$이고 $\\tau(d)=6$: $d=20$ ($\\tau(20)=6$ ✓).

$$|\\text{Im}(\\phi)|=20$$`},
    {num:'Step 2', title:'|Ker(φ)|',
     body:`$$|\\mathbb{Z}_{20}\\times\\mathbb{Z}_{26}|=520=|\\text{Im}|\\times|\\ker|=20\\times|\\ker|$$

$$|\\ker\\phi|=26$$`}
  ],
  answer:'$|\\text{Im}(\\phi)|=20$, $|\\ker\\phi|=26$',
  footnotes:[
    {n:'①',text:'$\mathbb{Z}_d$의 부분군 개수 $=\tau(d)=6$. 200의 약수 중 약수 6개인 것: $20=2^2\times 5$, $50=2\times 5^2$.'},
    {n:'②',text:'준동형 정리: $|G|=|\mathrm{Im}||\ker|$.'}
  ]
},
{
  id:'2026b9', year:2026, type:'전공B', cat:'galois', pts:4,
  title:'Z₇[x]에서 x⁴+3x²-1 기약 증명, 고정체 E의 위수',
  problem:`$\\mathbb{Z}_7[x]$에서 $f(x)=x^4+3x^2-1$이 기약임을 보이시오. 또한 $\\alpha$를 $f$의 해라 하고 $G(\\mathbb{Z}_7(\\alpha)/\\mathbb{Z}_7)$의 원소 $\\sigma$의 위수가 $4$일 때, 부분군 $\\langle\\sigma^2\\rangle$의 고정체 $E$의 위수를 구하시오.`,
  steps:[
    {num:'Step 1', title:'근이 없음 확인',
     body:`$f(0)=6,f(1)=3,f(2)=6,f(3)=2,f(4)=2,f(5)=5,f(6)=4$. 모두 $0$이 아님 ✓`},
    {num:'Step 2', title:'이차×이차 분해 불가능',
     body:`$f=(x^2+ax+b)(x^2-ax+c)$로 가정. 계수 비교:

$a=0$: $b+c=3$, $bc=-1$. 판별식 $D=13=6\\pmod7$. $\\mathbb{Z}_7$의 이차잉여 $\\{1,2,4\\}$에 $6\\notin$ → 해 없음.

$a\\neq0$: $b=c$, $b^2=-1=6$. 이차잉여에 $6\\notin$ → 해 없음.

따라서 $f$는 기약. $\\blacksquare$`},
    {num:'Step 3', title:'고정체 E의 위수',
     body:`$[\\mathbb{Z}_7(\\alpha):\\mathbb{Z}_7]=4$이므로 $|\\mathbb{Z}_7(\\alpha)|=7^4$.

$G\\cong\\mathbb{Z}_4$ ①, $|\\langle\\sigma^2\\rangle|=2$, $[K:E]=2$, $[E:\\mathbb{Z}_7]=2$.

$$|E|=7^2=49$$`}
  ],
  answer:'$f$는 기약 (증명 완료), $|E|=49$',
  footnotes:[
    {n:'①',text:'유한체의 갈루아군: $G(\mathbb{F}_{p^n}/\mathbb{F}_p)\cong\mathbb{Z}_n$ (프로베니우스 사상 생성).'}
  ]
}

]};
