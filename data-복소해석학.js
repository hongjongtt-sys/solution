window.SUBJECTS = window.SUBJECTS || {};

window.SUBJECTS['복소해석학'] = {
  label: '복소해석학',
  categories: [
    { id:'entire',  name:'해석함수의 성질', color:'#6b4a99', light:'#f0ecf9' },
    { id:'residue', name:'적분·유수정리',   color:'#1a6b6b', light:'#e8f5f5' },
    { id:'series',  name:'급수·특이점·사상', color:'#996b1a', light:'#f7f0e6' }
  ],
  freqGroups: [
    {
      id:'entire', name:'해석함수의 성질 — 정함수·조화함수·CR방정식', stars:'★★★★★★', count:9, color:'#4a2d70',
      desc:'코시-리만 방정식, 정함수와 리우빌 정리, 최대계수원리, 조화함수',
      problems:['2017a6','2017a11','2018b4','2019b4','2020b10','2021a2','2022b11','2023a7','2024b11']
    },
    {
      id:'residue', name:'적분 — 코시적분·유수정리', stars:'★★★★★', count:8, color:'#134f4f',
      desc:'유수정리, 편각원리, 루셰 정리, 선적분 계산',
      problems:['2014b2','2015a3','2019a5','2021b8','2022a10','2023b11','2024a2','2026a3']
    },
    {
      id:'series', name:'급수·특이점·등각사상', stars:'★★★★', count:6, color:'#704a12',
      desc:'테일러·로랑 급수, 제거가능 특이점, 일차분수변환',
      problems:['2016b7','2018a5','2020a9','2025a7','2025b9','2026b8']
    }
  ],
  problems: [

// ───────────────────────────────────────
// 2014
// ───────────────────────────────────────
{
  id:'2014b2', year:2014, type:'전공B', cat:'residue', pts:10,
  title:'선형사상 $T(f)=∮f(z)dz$의 핵과 $T⁻¹(2)$ 구하기',
  problem:`다음 4개의 복소함수 $f_1(z)=z,\\ f_2(z)=\\bar z,\\ f_3(z)=e^z,\\ f_4(z)=e^{\\bar z}$로 생성되는 복소 벡터 공간 $\\{a_1f_1+a_2f_2+a_3f_3+a_4f_4\\mid a_1,a_2,a_3,a_4\\in\\mathbb{C}\\}$를 $V$라 하자. 여기서 $\\bar z$는 $z$의 켤레복소수이다. 복소평면 $\\mathbb{C}$ 상의 시계반대방향의 단위원 $C:|z|=1$에 대하여 사상 $T:V\\to\\mathbb{C}$를 $T(f)=\\displaystyle\\int_C f(z)\\,dz$로 정의하자. $T$가 선형사상임을 증명하시오. 선형사상 $T$의 핵 $\\ker(T)$의 기저를 구하고, $\\ker(T)$를 이용하여 $T^{-1}(2)=\\{f\\in V\\mid T(f)=2\\}$를 나타내시오.`,
  steps:[
    {num:'Step 1', title:'$T$의 선형성',
     body:`적분은 선형연산이므로 임의의 $f,g\\in V$, $\\alpha\\in\\mathbb{C}$에 대하여:

$$T(\\alpha f+g)=\\int_C(\\alpha f+g)\\,dz=\\alpha\\int_C f\\,dz+\\int_C g\\,dz=\\alpha T(f)+T(g)$$

따라서 $T$는 선형사상이다. $\\blacksquare$`},
    {num:'Step 2', title:'기저별 $T$값 계산',
     body:`$C:|z|=1$에서 각 기저함수의 적분을 계산합니다.

$T(f_1)=\\displaystyle\\int_C z\\,dz=0$ ($z$는 정함수이므로 코시의 적분정리 ①에 의해).

$T(f_3)=\\displaystyle\\int_C e^z\\,dz=0$ (같은 이유).

$T(f_2)=\\displaystyle\\int_C\\bar z\\,dz$: $|z|=1$이면 $\\bar z=1/z$이므로 $\\displaystyle\\int_C\\frac1z\\,dz=2\\pi i$ ②.

$T(f_4)=\\displaystyle\\int_C e^{\\bar z}\\,dz=\\int_C e^{1/z}\\,dz$: $e^{1/z}=\\sum_{n=0}^\\infty\\frac{1}{n!z^n}$의 $z^{-1}$ 계수(유수)는 $1$이므로 ③:

$$T(f_4)=2\\pi i\\cdot1=2\\pi i$$`},
    {num:'Step 3', title:'$T(f)$의 일반식과 $ker(T)$',
     body:`$$T(a_1f_1+a_2f_2+a_3f_3+a_4f_4)=2\\pi i(a_2+a_4)$$

$\\ker(T)=\\{a_1f_1+a_2f_2+a_3f_3+a_4f_4\\mid a_2+a_4=0\\}$이므로 $a_4=-a_2$를 대입하면:

$$\\ker(T)=\\text{span}\\{f_1,\\,f_3,\\,f_2-f_4\\}=\\text{span}\\{z,\\ e^z,\\ \\bar z-e^{\\bar z}\\}$$

기저는 $\\{z,\\ e^z,\\ \\bar z-e^{\\bar z}\\}$ (선형독립이며 $\\dim\\ker T=4-\\text{rank}(T)=4-1=3$).`},
    {num:'Step 4', title:'$T⁻¹(2)$ 구하기',
     body:`$T(f)=2\\iff2\\pi i(a_2+a_4)=2\\iff a_2+a_4=\\dfrac{1}{\\pi i}=-\\dfrac{i}{\\pi}$.

특수해로 $a_2=-\\dfrac{i}{\\pi},\\,a_4=0$을 택하면 $f_p=-\\dfrac{i}{\\pi}\\bar z$이고 $T(f_p)=2\\pi i\\cdot\\left(-\\dfrac{i}{\\pi}\\right)=2$.

따라서:

$$T^{-1}(2)=-\\frac{i}{\\pi}\\bar z+\\ker(T)=\\left\\{-\\frac{i}{\\pi}\\bar z+b_1z+b_2e^z+b_3(\\bar z-e^{\\bar z})\\ \\middle|\\ b_1,b_2,b_3\\in\\mathbb{C}\\right\\}$$`}
  ],
  answer:'$\\ker(T)$의 기저: $\\{z,\\,e^z,\\,\\bar z-e^{\\bar z}\\}$, $T^{-1}(2)=-\\dfrac{i}{\\pi}\\bar z+\\ker(T)$',
  footnotes:[
    {n:'①',text:'코시의 적분정리: f가 단순연결영역에서 해석적이면 그 안의 임의의 닫힌곡선에서 ∮f dz=0.'},
    {n:'②',text:'∮_{|z|=1} 1/z dz = 2πi는 유수정리의 가장 기본적인 예.'},
    {n:'③',text:'로랑 급수에서 z⁻¹의 계수가 곧 그 점에서의 유수(residue)이며, ∮f dz=2πi·Res.'}
  ]
},

// ───────────────────────────────────────
// 2015
// ───────────────────────────────────────
{
  id:'2015a3', year:2015, type:'전공A', cat:'residue', pts:5,
  title:'조던 부등식으로 경계적분 소멸 증명 후 실적분 계산',
  problem:`복소평면 $\\mathbb{C}$에서 다음 그림과 같이 반지름의 길이가 $R$인 반원을 $C_R=\\{Re^{it}\\in\\mathbb{C}\\mid0\\le t\\le\\pi\\}$라고 할 때, $a>0$과 $b>0$에 대하여 $\\displaystyle\\lim_{R\\to\\infty}\\int_{C_R}\\frac{ze^{ibz}}{z^2+a^2}\\,dz=0$임을 보이고 $\\displaystyle\\int_{-\\infty}^{\\infty}\\frac{xe^{ibx}}{x^2+a^2}\\,dx$의 값을 풀이 과정과 함께 쓰시오.`,
  steps:[
    {num:'Step 1', title:'$C_R$ 위에서 크기 추정',
     body:`$R>a$일 때 $|z^2+a^2|\\ge R^2-a^2$이고, $z=Re^{it}$에서 $|e^{ibz}|=e^{-bR\\sin t}$이므로:

$$\\left|\\int_{C_R}\\frac{ze^{ibz}}{z^2+a^2}dz\\right|\\le\\int_0^\\pi\\frac{R\\cdot e^{-bR\\sin t}}{R^2-a^2}\\cdot R\\,dt=\\frac{R^2}{R^2-a^2}\\int_0^\\pi e^{-bR\\sin t}\\,dt$$`},
    {num:'Step 2', title:'조던 부등식 적용',
     body:`조던 부등식 ①: $\\displaystyle\\int_0^\\pi e^{-bR\\sin t}\\,dt<\\frac{\\pi}{bR}$ ($b,R>0$)이므로:

$$\\left|\\int_{C_R}\\frac{ze^{ibz}}{z^2+a^2}dz\\right|<\\frac{R^2}{R^2-a^2}\\cdot\\frac{\\pi}{bR}=\\frac{\\pi R}{b(R^2-a^2)}\\xrightarrow{R\\to\\infty}0\\qquad\\blacksquare$$`},
    {num:'Step 3', title:'유수 계산',
     body:`$f(z)=\\dfrac{ze^{ibz}}{z^2+a^2}$의 특이점 중 상반평면 내부는 $z=ia$뿐. 단순극에서의 유수 ②:

$$\\text{Res}_{z=ia}f(z)=\\frac{z e^{ibz}}{2z}\\Big|_{z=ia}=\\frac{e^{ib(ia)}}{2}=\\frac{e^{-ab}}{2}$$`},
    {num:'Step 4', title:'실적분 값',
     body:`반원 $C_R$과 실축 $[-R,R]$을 합친 닫힌곡선에 유수정리를 적용하고 $R\\to\\infty$:

$$\\int_{-\\infty}^{\\infty}\\frac{xe^{ibx}}{x^2+a^2}dx=2\\pi i\\cdot\\frac{e^{-ab}}{2}=\\pi i\\,e^{-ab}$$`}
  ],
  answer:'$\\pi i\\,e^{-ab}$',
  footnotes:[
    {n:'①',text:'조던 부등식(Jordan\'s inequality): 0≤t≤π/2에서 sin t ≥ 2t/π이므로 ∫₀^π e^{-R sin t}dt < π/R.'},
    {n:'②',text:'f(z)=g(z)/h(z)에서 h(z0)=0, h\'(z0)≠0인 단순극이면 Res=g(z0)/h\'(z0).'}
  ]
},

// ───────────────────────────────────────
// 2016
// ───────────────────────────────────────
{
  id:'2016b7', year:2016, type:'전공B', cat:'series', pts:5,
  title:'$e^z/(e^{2z}+1)$의 테일러 급수 홀수항 소멸과 유수 계산',
  problem:`복소함수 $f(z)=\\dfrac{e^z}{e^{2z}+1}$ ($|z|<\\dfrac{\\pi}{2}$)의 점 $z_0=0$에 관한 테일러 급수 전개를 $f(z)=\\displaystyle\\sum_{n=0}^\\infty a_nz^n$이라 하자. 음이 아닌 모든 정수 $n$에 대하여 $a_{2n+1}=0$임을 보이시오. 또한 복소평면에서 시계반대방향의 단위원 $C:|z|=1$에 대하여 $\\displaystyle\\int_C\\frac{f(z)}{z^3}\\,dz$의 값을 풀이 과정과 함께 쓰시오.`,
  steps:[
    {num:'Step 1', title:'$f(z)$를 쌍곡코시컨트 함수로 정리',
     body:`분모를 $e^z$로 묶으면:

$$f(z)=\\frac{e^z}{e^{2z}+1}=\\frac{1}{e^z+e^{-z}}=\\frac{1}{2\\cosh z}$$`},
    {num:'Step 2', title:'$f$가 우함수임을 보여 홀수항 소멸 증명',
     body:`$\\cosh(-z)=\\cosh z$이므로 $f(-z)=\\dfrac{1}{2\\cosh(-z)}=\\dfrac{1}{2\\cosh z}=f(z)$, 즉 $f$는 우함수 ①.

$f(z)=\\sum a_nz^n$에서 $f(-z)=\\sum a_n(-1)^nz^n=f(z)=\\sum a_nz^n$이므로 모든 $n$에 대해 $a_n((-1)^n-1)=0$.

$n$이 홀수이면 $(-1)^n-1=-2\\ne0$이므로 $a_n=0$. 즉 $a_{2n+1}=0$. $\\blacksquare$`},
    {num:'Step 3', title:'$a₂$ 계수 계산',
     body:`$\\text{sech}(z)=\\dfrac1{\\cosh z}=1-\\dfrac{z^2}{2}+\\dfrac{5z^4}{24}-\\cdots$ (표준 전개) ②이므로:

$$f(z)=\\frac12\\text{sech}(z)=\\frac12-\\frac{z^2}{4}+\\frac{5z^4}{48}-\\cdots$$

따라서 $a_2=-\\dfrac14$.`},
    {num:'Step 4', title:'적분값 계산',
     body:`$\\dfrac{f(z)}{z^3}=\\sum a_nz^{n-3}$에서 $z^{-1}$ 항은 $n=2$일 때이므로 유수는 $a_2$:

$$\\int_C\\frac{f(z)}{z^3}dz=2\\pi i\\cdot a_2=2\\pi i\\left(-\\frac14\\right)=-\\frac{\\pi i}{2}$$`}
  ],
  answer:'$a_{2n+1}=0$ (증명 완료), $\\displaystyle\\int_C\\frac{f(z)}{z^3}dz=-\\dfrac{\\pi i}{2}$',
  footnotes:[
    {n:'①',text:'우함수(짝함수) f(-z)=f(z)의 테일러 급수는 짝수차 항만 갖는다.'},
    {n:'②',text:'cosh z = 1+z²/2!+z⁴/4!+⋯의 역수를 급수 나눗셈으로 구한 표준 전개(sech 함수).'}
  ]
},

// ───────────────────────────────────────
// 2017
// ───────────────────────────────────────
{
  id:'2017a6', year:2017, type:'전공A', cat:'entire', pts:2,
  title:'$z=1$에서 해석적이 되는 자연수 $n$과 $f\'(1)$ 구하기',
  problem:`복소수 $z=x+iy$ ($x,y$는 실수)에 대한 함수 $f(z)=(x^ny+xy^n+x+y)+iv(x,y)$가 $z=1$에서 해석적(analytic)이 되도록 하는 자연수 $n$의 값과 이때의 $f'(1)$의 값을 각각 구하시오. (단, $v(x,y)$는 실숫값 함수이다.)`,
  steps:[
    {num:'Step 1', title:'$u$가 조화함수가 되는 $n$ 결정',
     body:`$u=x^ny+xy^n+x+y$에서:

$$u_{xx}=n(n-1)x^{n-2}y,\\qquad u_{yy}=n(n-1)xy^{n-2}$$

해석적이려면 $u$가 조화함수 ①여야 하므로 $u_{xx}+u_{yy}=n(n-1)[x^{n-2}y+xy^{n-2}]=0$이 항등적으로 성립해야 합니다.

$n(n-1)=0$이어야 하고 $n$은 자연수이므로 $n=1$.`},
    {num:'Step 2', title:'$n=1$일 때 $u$와 $CR$ 방정식',
     body:`$n=1$: $u=xy+xy+x+y=2xy+x+y$.

$u_x=2y+1,\\quad u_y=2x+1$. 코시-리만 방정식 ②: $v_y=u_x=2y+1,\\ v_x=-u_y=-2x-1$.

$v_y=2y+1$을 $y$에 대해 적분: $v=y^2+y+g(x)$. $v_x=g'(x)=-2x-1\\Rightarrow g(x)=-x^2-x+C$.

$$v=y^2+y-x^2-x+C$$`},
    {num:'Step 3', title:'$f\'(1)$ 계산',
     body:`$f'(z)=u_x+iv_x=(2y+1)+i(-2x-1)$.

$z=1$ ($x=1,y=0$)에서:

$$f'(1)=(0+1)+i(-2-1)=1-3i$$`}
  ],
  answer:'$n=1$, $f\'(1)=1-3i$',
  footnotes:[
    {n:'①',text:'f가 해석적이면 u,v는 조화함수(라플라스 방정식 u_xx+u_yy=0 만족).'},
    {n:'②',text:'코시-리만 방정식: u_x=v_y, u_y=-v_x. f\'(z)=u_x+iv_x로 계산 가능.'}
  ]
},
{
  id:'2017a11', year:2017, type:'전공A', cat:'entire', pts:4,
  title:'로그형 부등식으로 제거가능 특이점 증명, 최대계수원리로 $f$ 결정',
  problem:`복소평면 $\\mathbb{C}$의 영역 $D=\\{z\\in\\mathbb{C}\\mid0<|z|<1\\}$에 대하여 함수 $f:D\\to\\mathbb{C}$는 해석적(analytic)이다. 임의의 $z\\in D$에 대하여 함수 $f(z)$가 부등식 $|f(z)|\\le1+\\ln\\left(\\dfrac{1+|z|}{2|z|}\\right)$를 만족시킨다. $z=0$은 함수 $f(z)$의 제거 가능 특이점(없앨 수 있는 특이점, removable singular point)임을 보이고, $f\\left(\\dfrac12\\right)=1$일 때 $f\\left(\\dfrac{1+i}{3}\\right)$의 값을 풀이 과정과 함께 쓰시오.`,
  steps:[
    {num:'Step 1', title:'$zf(z)→0$ 임을 보이고 $g=zf$ 확장',
     body:`$\\varphi(r):=1+\\ln\\dfrac{1+r}{2r}$이라 하면 $|f(z)|\\le\\varphi(|z|)$.

$$|zf(z)|\\le|z|\\varphi(|z|)=|z|+|z|\\ln(1+|z|)-|z|\\ln(2|z|)$$

$|z|\\to0$일 때 $|z|\\to0$, $|z|\\ln(1+|z|)\\to0$(∵$\\ln(1+|z|)\\sim|z|$), $|z|\\ln(2|z|)\\to0$(∵표준 극한 $t\\ln t\\to0$) ①이므로 $zf(z)\\to0$.

따라서 $g(z):=zf(z)$는 $0<|z|<1$에서 해석적이고 $0$ 근방에서 유계(사실 극한 $0$)이므로, 리만의 제거가능 특이점 정리에 의해 $g$는 $z=0$까지 해석적으로 확장되고 $g(0)=0$.`},
    {num:'Step 2', title:'$f$ 자체의 확장',
     body:`$g$는 $|z|<1$에서 해석적이고 $g(0)=0$이므로 $g(z)=z\\,k(z)$ ($k$는 $|z|<1$에서 해석적) ②로 인수분해됩니다.

$z\\ne0$에서 $k(z)=g(z)/z=f(z)$이므로, $f(0):=k(0)$으로 정의하면 $f$는 $|z|<1$ 전체에서 해석적으로 확장됩니다. 즉 $z=0$은 제거가능 특이점. $\\blacksquare$`},
    {num:'Step 3', title:'최대계수원리로 $|f|≤1$ 증명',
     body:`$\\varphi(r)$은 $r$에 대해 감소함수 ($\\varphi'(r)=\\frac1{1+r}-\\frac1r<0$)이고 $\\varphi(r)\\to1$ as $r\\to1^-$.

임의의 $z_0\\in D$와 $|z_0|<\\rho<1$에 대해, 확장된 $f$가 닫힌원판 $|z|\\le\\rho$에서 해석적이므로 최대계수원리 ③에 의해:

$$|f(z_0)|\\le\\max_{|z|=\\rho}|f(z)|\\le\\varphi(\\rho)$$

$\\rho\\to1^-$로 보내면 $|f(z_0)|\\le1$. $z_0$는 임의였으므로 $D$ 전체(및 확장된 $z=0$)에서 $|f(z)|\\le1$.`},
    {num:'Step 4', title:'등호조건으로 $f$ 상수 결정',
     body:`$f(1/2)=1$은 $|f|\\le1$의 등호가 **내부점** $z=1/2$에서 달성됨을 의미합니다.

최대계수원리의 등호조건 ④: $|f|$가 정의역 내부에서 최댓값을 가지면 $f$는 상수함수.

따라서 $f(z)\\equiv1$ ($D$ 전체에서).

$$f\\!\\left(\\frac{1+i}{3}\\right)=1$$`}
  ],
  answer:'제거가능 특이점 증명 완료, $f\\left(\\dfrac{1+i}{3}\\right)=1$',
  footnotes:[
    {n:'①',text:'t→0+일 때 t ln t → 0 (로피탈 정리 또는 지수함수 성장 비교로 증명 가능한 표준 극한).'},
    {n:'②',text:'해석함수 g가 g(a)=0이면 g(z)=(z-a)k(z) 꼴로 인수분해되며 k도 해석적 (테일러 전개에서 상수항이 0).'},
    {n:'③',text:'최대계수원리: 유계 닫힌영역에서 해석적인 함수의 |f|는 경계에서 최댓값을 가진다.'},
    {n:'④',text:'최대계수원리의 등호(강한) 형태: |f|가 정의역 내부의 한 점에서 최댓값을 가지면 f는 그 정의역에서 상수.'}
  ]
},
{
  id:'2018a5', year:2018, type:'전공A', cat:'series', pts:2,
  title:'세 점의 상으로 일차분수변환 $T(2i)$ 구하기',
  problem:`확장 복소평면(extended complex plane) $\\mathbb{C}\\cup\\{\\infty\\}$에서 정의된 일차분수변환(선형분수변환, linear fractional transformation, bilinear transformation) $T$가 $T(0)=2,\\ T(1)=2i,\\ T(\\infty)=-2$를 만족시킬 때, $T(2i)$의 값을 구하시오.`,
  steps:[
    {num:'Step 1', title:'$T(z)$ 결정 $(T(∞)=-2$ 이용)',
     body:`$T(z)=\\dfrac{az+b}{cz+d}$로 놓으면 $T(\\infty)=\\dfrac{a}{c}=-2$ ①이므로 $a=-2c$. $c=1$로 정규화하면 $a=-2$.

$T(0)=\\dfrac{b}{d}=2\\Rightarrow b=2d$.`},
    {num:'Step 2', title:'$T(1)=2i$로 나머지 계수 결정',
     body:`$T(1)=\\dfrac{a+b}{c+d}=\\dfrac{-2+2d}{1+d}=2i$

$$-2+2d=2i(1+d)\\ \\Rightarrow\\ 2d(1-i)=2(1+i)\\ \\Rightarrow\\ d=\\frac{1+i}{1-i}=\\frac{(1+i)^2}{2}=\\frac{2i}{2}=i$$

$d=i,\\ b=2i,\\ c=1,\\ a=-2$이므로:

$$T(z)=\\frac{-2z+2i}{z+i}$$`},
    {num:'Step 3', title:'$T(2i)$ 계산',
     body:`$$T(2i)=\\frac{-2(2i)+2i}{2i+i}=\\frac{-4i+2i}{3i}=\\frac{-2i}{3i}=-\\frac23$$`}
  ],
  answer:'$-\\dfrac23$',
  footnotes:[
    {n:'①',text:'T(z)=(az+b)/(cz+d)에서 T(∞)=lim_{z→∞}T(z)=a/c.'}
  ]
},
{
  id:'2018b4', year:2018, type:'전공B', cat:'entire', pts:4,
  title:'정함수의 부등식과 리우빌 정리로 $f\'(0)$ 구하기',
  problem:`정함수(entire function) $f(z)$가 모든 복소수 $z$에 대하여 부등식 $|f(z)|\\le|e^z-1|$을 만족시킨다. $f(1)=1$일 때, $f'(0)$의 값을 풀이 과정과 함께 쓰시오.`,
  steps:[
    {num:'Step 1', title:'$g(z)=f(z)/(e^z-1)$의 제거가능 특이점',
     body:`$z=2\\pi ik$ ($k\\in\\mathbb{Z}$)에서 $e^z-1=0$이고, 주어진 부등식에서 $|f(2\\pi ik)|\\le0$이므로 $f(2\\pi ik)=0$도 성립합니다.

$e^z-1$은 이 점들에서 단순영점 ($\\frac{d}{dz}(e^z-1)=e^z\\ne0$)이므로 $g(z)=\\dfrac{f(z)}{e^z-1}$은 각 $z=2\\pi ik$ 근방에서 $|g(z)|=\\dfrac{|f(z)|}{|e^z-1|}\\le1$로 유계.

제거가능 특이점 정리에 의해 $g$는 $\\mathbb{C}$ 전체로 해석적으로 확장되어 **정함수**가 됩니다.`},
    {num:'Step 2', title:'유계 정함수 + 리우빌 정리',
     body:`$e^z-1\\ne0$인 곳에서는 $|g(z)|=|f(z)|/|e^z-1|\\le1$이 직접 성립하고, 특이점에서도 극한으로 $|g|\\le1$.

따라서 $g$는 유계 정함수이므로 리우빌 정리 ①에 의해 $g(z)\\equiv c$ (상수).`},
    {num:'Step 2', title:'상수 $c$ 결정 및 $f$ 구하기',
     body:`$f(1)=1$에서 $g(1)=\\dfrac{f(1)}{e-1}=\\dfrac{1}{e-1}=c$.

$$f(z)=c(e^z-1)=\\frac{e^z-1}{e-1}$$`},
    {num:'Step 3', title:'$f\'(0)$ 계산',
     body:`$f'(z)=\\dfrac{e^z}{e-1}$이므로:

$$f'(0)=\\frac{1}{e-1}$$`}
  ],
  answer:'$\\dfrac{1}{e-1}$',
  footnotes:[
    {n:'①',text:'리우빌 정리: 유계인 정함수는 상수함수이다.'}
  ]
},

// ───────────────────────────────────────
// 2019
// ───────────────────────────────────────
{
  id:'2019a5', year:2019, type:'전공A', cat:'residue', pts:2,
  title:'$z²-iz̄$ 형태로 변형해 닫힌곡선 위 선적분 계산',
  problem:`복소평면에서 곡선 $C$가 $z(t)=\\begin{cases}e^{i\\pi t}, & 0\\le t\\le1\\\\ t-2, & 1<t\\le3\\end{cases}$일 때, 복소적분 $\\displaystyle\\int_C(x^2-y^2-y)+i(2xy-x)\\,dz$의 값을 구하시오. (단, $x,y$는 실수이고 $z=x+iy$는 복소수이다.)`,
  steps:[
    {num:'Step 1', title:'곡선 $C$ 파악 및 피적분함수 변형',
     body:`$t\\in[0,1]$: 상반 단위원(1에서 $-1$까지, CCW). $t\\in(1,3]$: 실수선 $-1$에서 $1$까지. $z(0)=1=z(3)$이므로 $C$는 닫힌곡선.

$z^2=(x^2-y^2)+2ixy$, $i\\bar z=i(x-iy)=y+ix$이므로:

$$f(z)=(x^2-y^2-y)+i(2xy-x)=z^2-i\\bar z$$`},
    {num:'Step 2', title:'$∮z² dz = 0$',
     body:`$z^2$은 정함수이고 $C$는 닫힌곡선이므로 코시의 적분정리에 의해 $\\displaystyle\\int_Cz^2dz=0$.`},
    {num:'Step 3', title:'$∮z̄ dz$ 직접 계산',
     body:`반원 구간: $z=e^{i\\pi t}$, $\\bar z=e^{-i\\pi t}$, $dz=i\\pi e^{i\\pi t}dt$:

$$\\int_0^1\\bar z\\,dz=\\int_0^1i\\pi\\,dt=i\\pi$$

직선 구간: $z=t-2$ (실수), $\\bar z=z$, $dz=dt$:

$$\\int_1^3(t-2)\\,dt=\\left[\\frac{t^2}2-2t\\right]_1^3=(4.5-6)-(0.5-2)=-1.5+1.5=0$$

$$\\int_C\\bar z\\,dz=i\\pi+0=i\\pi$$`},
    {num:'Step 4', title:'최종 계산',
     body:`$$\\int_Cf\\,dz=\\int_Cz^2dz-i\\int_C\\bar z\\,dz=0-i(i\\pi)=-i^2\\pi=\\pi$$`}
  ],
  answer:'$\\pi$',
  footnotes:[
    {n:'①',text:'z=x+iy일 때 z²=(x²-y²)+2ixy이므로 실수부는 x²-y², 허수부는 2xy. 문제의 피적분함수를 z², z̄의 조합으로 바꾸면 정함수 부분(z²)은 적분정리로 바로 0이 되어 계산이 쉬워진다.'},
    {n:'②',text:'닫힌곡선인지 확인하려면 시작점과 끝점이 같은지(z(0)=z(3)) 보면 된다. 닫혀 있어야 코시의 적분정리를 적용할 수 있다.'}
  ]
},
{
  id:'2019b4', year:2019, type:'전공B', cat:'entire', pts:4,
  title:'평균값 성질로 $f(0)$과 조화함수 $u(x,y)$ 결정',
  problem:`실숫값을 갖는 두 함수 $u(x,y),\\ v(x,y)=e^{-y}(x\\cos x-y\\sin x)$와 복소수 $z=x+iy$ ($x,y$는 실수)에 대하여, $f(z)=u(x,y)+iv(x,y)$가 정함수(entire function)이다. 곡선 $C$가 $x=\\cos t,\\ y=\\sin t$ ($0\\le t\\le2\\pi$)로 정의된 원일 때, $\\displaystyle\\int_C-yu(x,y)\\,dx+xu(x,y)\\,dy=6\\pi$이다. $f(0)$의 값과 함수 $u(x,y)$를 각각 풀이 과정과 함께 쓰시오.`,
  steps:[
    {num:'Step 1', title:'코시-리만 방정식으로 $u$ 구하기',
     body:`$v_x=e^{-y}[\\cos x-x\\sin x-y\\cos x]$, $v_y=e^{-y}[-x\\cos x+y\\sin x-\\sin x]$.

$u_x=v_y$를 $x$에 대해 적분하고 $u_y=-v_x$를 확인하면 (상수항 제외 시행착오 대신 직접 대입 검산):

$$u(x,y)=C-e^{-y}(x\\sin x+y\\cos x)$$

가 $u_x=v_y,\\ u_y=-v_x$를 모두 만족함을 대입으로 확인할 수 있습니다 (단, $C$는 실수 상수) ①.`},
    {num:'Step 2', title:'$f(z)$의 닫힌 형태',
     body:`$z e^{iz}=(x+iy)e^{-y}(\\cos x+i\\sin x)=e^{-y}(x\\cos x-y\\sin x)+ie^{-y}(x\\sin x+y\\cos x)$이므로:

$$f(z)=C+ize^{iz}$$`},
    {num:'Step 3', title:'$x dy - y dx = dθ$ 이용',
     body:`단위원 위에서 $x\\,dy-y\\,dx=(\\cos t)(\\cos t\\,dt)-(\\sin t)(-\\sin t\\,dt)=dt$이므로:

$$\\int_C u(x\\,dy-y\\,dx)=\\int_0^{2\\pi}u(\\cos t,\\sin t)\\,dt=6\\pi$$`},
    {num:'Step 4', title:'평균값 성질로 $C$ 결정',
     body:`$u$는 조화함수이므로 평균값 성질 ②:

$$\\int_0^{2\\pi}u(\\cos t,\\sin t)\\,dt=2\\pi\\,u(0,0)$$

$2\\pi\\,u(0,0)=6\\pi\\Rightarrow u(0,0)=3$. 그런데 $u(0,0)=C-e^0(0+0)=C$이므로 $C=3$.`}
  ],
  answer:'$f(0)=3$, $u(x,y)=3-e^{-y}(x\\sin x+y\\cos x)$',
  footnotes:[
    {n:'①',text:'u_x = e^{-y}[-x cos x+y sin x-sin x] = v_y, u_y = e^{-y}[-cos x+x sin x+y cos x] = -v_x 를 직접 미분하여 검산.'},
    {n:'②',text:'조화함수의 평균값 성질: u(z0)=(1/2π)∫₀^{2π}u(z0+re^{iθ})dθ. 해석함수의 실부/허부는 조화함수.'}
  ]
},
{
  id:'2020a9', year:2020, type:'전공A', cat:'series', pts:4,
  title:'테일러 다항식 계수를 이용한 유수 계산',
  problem:`정의역이 $\\{x\\in\\mathbb{R}\\mid-1<x<1\\}$인 함수 $f(x)=\\dfrac{e^x-1}{1-x}$의 $x=0$에서의 3차 테일러 다항식을 구하시오. 또한 복소평면에서 원점을 중심으로 하고 반지름의 길이가 $\\dfrac12$인 원을 시계반대방향으로 한 바퀴 도는 곡선 $C$에 대하여 선적분 $\\displaystyle\\int_C\\frac{e^z-1}{z^4(1-z)}\\,dz$의 값을 풀이 과정과 함께 쓰시오.`,
  steps:[
    {num:'Step 1', title:'급수 곱으로 계수 계산',
     body:`$e^x-1=x+\\dfrac{x^2}2+\\dfrac{x^3}6+\\cdots$, $\\dfrac1{1-x}=1+x+x^2+x^3+\\cdots$의 코시 곱 ①으로 $a_n=\\sum_{k=1}^n\\dfrac1{k!}$ ($n\\ge1$):

$$a_1=1,\\quad a_2=1+\\frac12=\\frac32,\\quad a_3=1+\\frac12+\\frac16=\\frac53$$`},
    {num:'Step 2', title:'3차 테일러 다항식',
     body:`$$P_3(x)=x+\\frac32x^2+\\frac53x^3$$`},
    {num:'Step 3', title:'유수 계산 (원점만 내부에 위치)',
     body:`$g(z)=\\dfrac{e^z-1}{1-z}$는 $z=1$을 제외하고 해석적이며, $|z|=1/2$ 안에는 $z=0$만 특이점.

$g(z)$의 테일러 전개는 $x$ 대신 $z$로 바꾼 것과 동일: $g(z)=\\sum a_nz^n$ ($a_3=5/3$).

$$\\frac{g(z)}{z^4}=\\sum a_nz^{n-4}$$

$z^{-1}$항은 $n=3$일 때이므로 유수는 $a_3=5/3$.`},
    {num:'Step 4', title:'최종 적분값',
     body:`$$\\int_C\\frac{e^z-1}{z^4(1-z)}dz=2\\pi i\\cdot\\frac53=\\frac{10\\pi i}{3}$$`}
  ],
  answer:'$P_3(x)=x+\\dfrac32x^2+\\dfrac53x^3$, 적분값 $=\\dfrac{10\\pi i}{3}$',
  footnotes:[
    {n:'①',text:'두 멱급수의 곱(코시 곱): (Σbₖxᵏ)(Σcⱼxʲ)=Σaₙxⁿ, aₙ=Σ_{k=0}^n bₖc_{n-k}.'}
  ]
},
{
  id:'2020b10', year:2020, type:'전공B', cat:'entire', pts:4,
  title:'정함수 조건과 원 위 최대·최소값으로 $|f(i)|$ 최댓값',
  problem:`다음 조건을 만족시키는 정함수(entire function) $f(z)$에 대하여 $|f(i)|$의 최솟값을 풀이 과정과 함께 쓰시오. (가) 모든 복소수 $z$에 대하여 $|f(z)+z^2|\\ge3$이다. (나) $|f(2)|=3$.`,
  steps:[
    {num:'Step 1', title:'조건(가)로 $f(z)+z²$의 형태 결정',
     body:`$|f(z)+z^2|\\ge3>0$이므로 $f(z)+z^2$는 어디서도 $0$이 되지 않습니다. 따라서 $g(z):=\\dfrac1{f(z)+z^2}$는 정함수이고 $|g(z)|\\le\\dfrac13$로 유계.

리우빌 정리 ①에 의해 $g$는 상수이므로 $f(z)+z^2=c$ (상수, $|c|\\ge3$), 즉:

$$f(z)=c-z^2$$`},
    {num:'Step 2', title:'조건(나)로 $c$의 조건',
     body:`$f(2)=c-4$이고 $|f(2)|=3$이므로 $|c-4|=3$, 즉 $c$는 중심 $4$, 반지름 $3$인 원 위에 있습니다.`},
    {num:'Step 3', title:'$|f(i)|$ 최댓값을 기하적으로 계산',
     body:`$f(i)=c-i^2=c+1$이므로 $|f(i)|=|c+1|$은 $c$에서 $-1$까지의 거리.

$c$가 원 $|c-4|=3$ 위를 움직일 때 $|c-(-1)|$의 최댓값은 중심에서 $-1$까지 거리에 반지름을 더한 값 ②:

$$|4-(-1)|+3=5+3=8$$`}
  ],
  answer:'$8$',
  footnotes:[
    {n:'①',text:'리우빌 정리: 유계 정함수는 상수.'},
    {n:'②',text:'점 P에서 중심 O, 반지름 r인 원 위의 점까지 거리의 최댓값은 |OP|+r, 최솟값은 |OP|-r (단, |OP|≥r).'}
  ]
},
{
  id:'2021a2', year:2021, type:'전공A', cat:'entire', pts:2,
  title:'$|z|=2$ 위에서 $f(z)=(z+1/z)/2$의 최댓값·최솟값',
  problem:`복소함수 $f(z)=\\dfrac12\\left(z+\\dfrac1z\\right)$에 대하여, 집합 $\\{z\\in\\mathbb{C}\\mid|z|=2\\}$에서 $|f(z)|$의 최댓값과 최솟값을 구하시오.`,
  steps:[
    {num:'Step 1', title:'매개변수화',
     body:`$z=2e^{i\\theta}$로 놓으면:

$$f(z)=\\frac12\\left(2e^{i\\theta}+\\frac12e^{-i\\theta}\\right)=e^{i\\theta}+\\frac14e^{-i\\theta}=\\frac54\\cos\\theta+i\\cdot\\frac34\\sin\\theta$$`},
    {num:'Step 2', title:'$|f(z)|²$ 계산',
     body:`$$|f(z)|^2=\\frac{25}{16}\\cos^2\\theta+\\frac9{16}\\sin^2\\theta=\\frac9{16}+\\cos^2\\theta$$

($\\because\\frac{25}{16}\\cos^2\\theta+\\frac9{16}\\sin^2\\theta=\\frac9{16}(\\cos^2\\theta+\\sin^2\\theta)+\\cos^2\\theta$)`},
    {num:'Step 3', title:'최댓값과 최솟값',
     body:`$\\cos^2\\theta\\in[0,1]$이므로:

$$|f(z)|^2_{\\max}=\\frac9{16}+1=\\frac{25}{16}\\Rightarrow|f(z)|_{\\max}=\\frac54$$

$$|f(z)|^2_{\\min}=\\frac9{16}\\Rightarrow|f(z)|_{\\min}=\\frac34$$`}
  ],
  answer:'최댓값 $\\dfrac54$, 최솟값 $\\dfrac34$',
  footnotes:[
    {n:'①',text:'|z|=r인 원 위의 점은 z=re^{iθ} (θ는 0~2π)로 매개변수화한다. 이렇게 두면 f(z)를 삼각함수의 실수부·허수부로 분리해 |f(z)|²=(실수부)²+(허수부)²을 θ의 함수로 정리할 수 있다.'},
    {n:'②',text:'cos²θ+sin²θ=1을 이용해 하나의 삼각함수(여기선 cos²θ)로 통일하면, cos²θ의 범위 [0,1]만 보고 최댓값·최솟값을 바로 구할 수 있다.'}
  ]
},
{
  id:'2021b8', year:2021, type:'전공B', cat:'residue', pts:4,
  title:'편각원리로 $z³f\'(z)/f(z)$ 선적분 계산',
  problem:`복소함수 $f(z)=z^6-1$에 대하여 $\\displaystyle\\int_C\\frac{z^3f'(z)}{f(z)}\\,dz$의 값을 풀이 과정과 함께 쓰시오. 여기서 $C$는 복소평면에서 점 $\\left(\\dfrac12,0\\right)$을 중심으로 하고 반지름의 길이가 $1$인 원을 시계반대방향으로 한 바퀴 도는 곡선이다.`,
  steps:[
    {num:'Step 1', title:'$f$의 영점과 $C$ 내부 판별',
     body:`$f(z)=z^6-1=0$의 근은 6제곱근의 단위근 $z_k=e^{i\\pi k/3}$ ($k=0,\\ldots,5$): $1,\\ \\frac12\\pm\\frac{\\sqrt3}2i,\\ -1,\\ -\\frac12\\pm\\frac{\\sqrt3}2i$.

$C:|z-\\tfrac12|=1$ 내부 판별: $|1-\\tfrac12|=0.5<1$✓, $|\\tfrac12\\pm\\tfrac{\\sqrt3}2i-\\tfrac12|=\\tfrac{\\sqrt3}2\\approx0.87<1$✓, $|-1-\\tfrac12|=1.5>1$✗, $|-\\tfrac12\\pm\\tfrac{\\sqrt3}2i-\\tfrac12|=\\sqrt{1+0.75}\\approx1.32>1$✗.

내부의 근: $z=1,\\ e^{i\\pi/3},\\ e^{-i\\pi/3}$ (3개, 모두 단순근).`},
    {num:'Step 2', title:'$z³f\'(z)/f(z)$의 유수',
     body:`$f$가 단순영점을 가지므로 $\\dfrac{f'(z)}{f(z)}$는 각 영점 $z_k$에서 유수 $1$을 갖는 단순극 ①. 따라서 $z^3\\dfrac{f'(z)}{f(z)}$의 $z_k$에서의 유수는 $z_k^3$.`},
    {num:'Step 3', title:'유수 합산',
     body:`$1^3=1$, $(e^{i\\pi/3})^3=e^{i\\pi}=-1$, $(e^{-i\\pi/3})^3=e^{-i\\pi}=-1$이므로:

$$\\int_C\\frac{z^3f'(z)}{f(z)}dz=2\\pi i(1-1-1)=2\\pi i(-1)=-2\\pi i$$`}
  ],
  answer:'$-2\\pi i$',
  footnotes:[
    {n:'①',text:'f가 z0에서 m차 영점이면 f\'/f는 z0에서 단순극이고 유수는 m (편각원리의 기초).'}
  ]
},

// ───────────────────────────────────────
// 2022
// ───────────────────────────────────────
{
  id:'2022a10', year:2022, type:'전공A', cat:'residue', pts:4,
  title:'유수정리와 $∮z̄dz=2iA$ 공식을 함께 이용한 선적분',
  problem:`복소평면에서 중심이 $i$이고 반지름의 길이가 $2$인 원을 시계반대방향으로 한 바퀴 도는 곡선 $C$에 대하여 선적분 $\\displaystyle\\int_C\\left\\{\\frac{4e^{-iz}}{(z+6i)(z-2i)}+\\bar z\\right\\}dz$의 값을 풀이 과정과 함께 쓰시오. (단, $\\bar z$는 $z$의 켤레복소수이다.)`,
  steps:[
    {num:'Step 1', title:'유수항 처리$: C$ 내부의 극점 판별',
     body:`$C:|z-i|=2$. $z=2i$: $|2i-i|=1<2$ ✓ 내부. $z=-6i$: $|-6i-i|=7>2$ ✗ 외부.

$z=2i$에서의 유수:

$$\\text{Res}_{z=2i}\\frac{4e^{-iz}}{(z+6i)(z-2i)}=\\frac{4e^{-i(2i)}}{2i+6i}=\\frac{4e^2}{8i}=\\frac{e^2}{2i}$$`},
    {num:'Step 2', title:'유수항 적분값',
     body:`$$\\int_C\\frac{4e^{-iz}}{(z+6i)(z-2i)}dz=2\\pi i\\cdot\\frac{e^2}{2i}=\\pi e^2$$`},
    {num:'Step 3', title:'$∮z̄dz = 2iA$ 공식',
     body:`단위원에서 $\\oint\\bar z\\,dz=2\\pi i$ (직접 계산 시 $A=\\pi$이므로 $2i\\pi=2\\pi i$)이 성립하듯, 반지름 $r$인 원(CCW)에서 일반적으로:

$$\\oint_C\\bar z\\,dz=2i\\cdot(\\text{둘러싸인 넓이})$$①

반지름 $2$인 원의 넓이는 $4\\pi$이므로 $\\displaystyle\\int_C\\bar z\\,dz=2i\\cdot4\\pi=8\\pi i$.`},
    {num:'Step 4', title:'최종 합산',
     body:`$$\\int_C\\left\\{\\frac{4e^{-iz}}{(z+6i)(z-2i)}+\\bar z\\right\\}dz=\\pi e^2+8\\pi i$$`}
  ],
  answer:'$\\pi e^2+8\\pi i$',
  footnotes:[
    {n:'①',text:'z̄dz=(x-iy)(dx+idy)=(xdx+ydy)+i(xdy-ydx). 앞항은 완전미분(적분=0), 뒤항은 그린정리로 CCW 넓이의 2배.'}
  ]
},
{
  id:'2022b11', year:2022, type:'전공B', cat:'entire', pts:4,
  title:'조화함수 조건으로 $a,b$ 결정 후 $f\'\'(π/2)$ 계산',
  problem:`복소수 $z=x+iy$ ($x,y$는 실수)에 대한 함수 $f(z)=e^{-3y}\\cos(ax)+bx^2-4y^2+iv(x,y)$가 정함수(entire function)가 되도록 하는 양의 실수 $a,b$의 값과, 이 때의 $f''\\left(\\dfrac{\\pi}2\\right)$의 값을 각각 풀이 과정과 함께 쓰시오. (단, $v(x,y)$는 실숫값 함수이다.)`,
  steps:[
    {num:'Step 1', title:'$u$가 조화함수가 되는 $a,b$',
     body:`$u=e^{-3y}\\cos(ax)+bx^2-4y^2$에서:

$$u_{xx}=-a^2e^{-3y}\\cos(ax)+2b,\\qquad u_{yy}=9e^{-3y}\\cos(ax)-8$$

$u_{xx}+u_{yy}=(9-a^2)e^{-3y}\\cos(ax)+2b-8=0$이 항등적으로 성립해야 하므로:

$$9-a^2=0,\\ 2b-8=0\\ \\Rightarrow\\ a=3\\ (양수),\\ b=4$$`},
    {num:'Step 2', title:'$CR$ 방정식으로 $v$ 구하기',
     body:`$u=e^{-3y}\\cos3x+4x^2-4y^2$에서 $v_y=u_x=-3e^{-3y}\\sin3x+8x$, $v_x=-u_y=3e^{-3y}\\cos3x+8y$.

$v_y$를 적분: $v=e^{-3y}\\sin3x+8xy+g(x)$. $v_x=3e^{-3y}\\cos3x+8y+g'(x)$가 요구값과 일치하려면 $g'(x)=0$.

$$v=e^{-3y}\\sin3x+8xy$$`},
    {num:'Step 3', title:'$f(z)$의 닫힌 형태',
     body:`$e^{-3y}\\cos3x+ie^{-3y}\\sin3x=e^{-3y}(\\cos3x+i\\sin3x)=e^{i3x-3y}=e^{3iz}$이고, $4x^2-4y^2+i8xy=4z^2$이므로:

$$f(z)=e^{3iz}+4z^2$$`},
    {num:'Step 4', title:'$f\'\'(π/2)$ 계산',
     body:`$f'(z)=3ie^{3iz}+8z$, $f''(z)=-9e^{3iz}+8$.

$$f''\\left(\\frac\\pi2\\right)=-9e^{3i\\pi/2}+8=-9(-i)+8=8+9i$$`}
  ],
  answer:'$a=3,\\ b=4$, $f\'\'\\left(\\dfrac\\pi2\\right)=8+9i$',
  footnotes:[
    {n:'①',text:'함수 f=u+iv가 해석적(정함수)이려면 u,v가 코시-리만 방정식(u_x=v_y, u_y=-v_x)을 만족해야 하고, 그 결과로 u,v는 조화함수(라플라스 방정식 만족)가 된다. 즉 u_xx+u_yy=0은 해석성의 필요조건.'},
    {n:'②',text:'f(z)=e^{3iz}+4z² 처럼 u,v를 하나의 복소식으로 합치면 f\'(z), f\'\'(z)는 실변수 미분과 같은 규칙으로 바로 계산할 수 있다 (지수함수·다항식 미분 공식 그대로 적용).'}
  ]
},

// ───────────────────────────────────────
// 2023
// ───────────────────────────────────────
{
  id:'2023a7', year:2023, type:'전공A', cat:'entire', pts:4,
  title:'평균값 성질로 원둘레 적분 계산, 이차형식 최솟값',
  problem:`실수 $a$에 대하여 함수 $u:\\mathbb{R}^2\\to\\mathbb{R}$를 $u(x,y)=x^2-2xy+ay^2+4x-6y$라 하자. $a=-1$일 때 적분 $\\displaystyle\\int_0^{2\\pi}u(1+2\\cos\\theta,2\\sin\\theta)\\,d\\theta$의 값을 풀이 과정과 함께 쓰시오. 또한 $a=2$일 때 $u(x,y)$의 최솟값을 풀이 과정과 함께 쓰시오.`,
  steps:[
    {num:'Step 1', title:'$a=-1$일 때 $u$가 조화함수',
     body:`$a=-1$: $u=x^2-2xy-y^2+4x-6y$. $u_{xx}=2$, $u_{yy}=-2a=2\\cdot(-(-1))$... 직접 계산: $u_y=-2x-2y-6$, $u_{yy}=-2$.

$u_{xx}+u_{yy}=2+(-2)=0$이므로 $u$는 조화함수 ①.`},
    {num:'Step 2', title:'평균값 성질 적용',
     body:`적분은 중심 $(1,0)$, 반지름 $2$인 원 위의 $u$ 평균값의 $2\\pi$배이므로:

$$\\int_0^{2\\pi}u(1+2\\cos\\theta,2\\sin\\theta)\\,d\\theta=2\\pi\\,u(1,0)$$

$u(1,0)=1-0+0+4-0=5$ ($a=-1$ 대입)이므로:

$$2\\pi\\times5=10\\pi$$`},
    {num:'Step 3', title:'$a=2$일 때 임계점 계산',
     body:`$u=x^2-2xy+2y^2+4x-6y$. $u_x=2x-2y+4=0,\\ u_y=-2x+4y-6=0$.

첫 식: $y=x+2$. 둘째 식에 대입: $-x+2(x+2)-3=0\\Rightarrow x+1=0\\Rightarrow x=-1,\\ y=1$.`},
    {num:'Step 4', title:'최솟값 확인 및 계산',
     body:`헤시안 $\\begin{pmatrix}2&-2\\\\-2&4\\end{pmatrix}$의 판별식 $=8-4=4>0$이고 $u_{xx}=2>0$이므로 양의 정부호 → 최소점 ②.

$$u(-1,1)=1+2+2-4-6=-5$$`}
  ],
  answer:'적분값 $=10\\pi$, 최솟값 $=-5$',
  footnotes:[
    {n:'①',text:'조화함수의 평균값 성질: 중심 z0, 반지름 r인 원 위 평균값 = u(z0).'},
    {n:'②',text:'이차형식(2변수)의 임계점에서 헤시안이 양의 정부호이면 그 점은 전역 최솟값.'}
  ]
},
{
  id:'2023b11', year:2023, type:'전공B', cat:'residue', pts:4,
  title:'루셰 정리로 근의 개수, 무한대 유수로 선적분 계산',
  problem:`복소방정식 $z^3-z-4=0$이 영역 $\\{z\\in\\mathbb{C}\\mid|z|<2\\}$에서 갖는 근의 개수를 풀이 과정과 함께 쓰시오. 또한 원점을 중심으로 하고 반지름의 길이가 $2$인 원을 시계반대방향으로 한 바퀴 도는 곡선을 $C$라 할 때, 선적분 $\\displaystyle\\int_C\\frac1{(z-3)(z^3-z-4)}\\,dz$의 값을 풀이 과정과 함께 쓰시오. (단, 다중근의 경우 중복되는 수만큼 근의 개수로 인정한다.)`,
  steps:[
    {num:'Step 1', title:'루셰 정리로 근의 개수',
     body:`$f(z)=z^3$, $g(z)=-z-4$로 놓으면 $|z|=2$ 위에서:

$$|f(z)|=|z|^3=8,\\qquad|g(z)|=|-z-4|\\le|z|+4=6<8=|f(z)|$$

루셰 정리 ①에 의해 $z^3-z-4=f+g$는 $f(z)=z^3$과 $|z|<2$에서 같은 개수의 근을 갖습니다. $z^3$은 원점에서 3중근을 가지므로:

$$z^3-z-4=0\\text{의 근의 개수}=3$$`},
    {num:'Step 2', title:'세 근 모두 내부에 위치 확인',
     body:`3차방정식은 정확히 3개의 근을 가지는데(대수학의 기본정리), Step 1에서 $|z|<2$ 안에 3개 모두 있음을 보였으므로 $h(z):=z^3-z-4$의 **모든** 근이 $|z|<2$ 내부에 있습니다.`},
    {num:'Step 3', title:'무한대에서의 유수(전체 유수 합=0) 이용',
     body:`$f(z)=\\dfrac1{(z-3)h(z)}$는 $|z|\\to\\infty$일 때 $O(1/z^4)$로 감소하므로 $zf(z)\\to0$.

이런 경우 복소평면 전체(유한 극점 전부)에서의 유수의 합은 $0$ ②:

$$\\text{Res}_{z=3}f+\\sum_i\\text{Res}_{z=z_i}f=0$$

$C$ 내부에는 $h$의 근 $z_i$들만 있고 $z=3$은 $|3|=3>2$로 외부.`},
    {num:'Step 4', title:'$z=3$에서의 유수와 최종 계산',
     body:`$$\\text{Res}_{z=3}f=\\frac1{h(3)}=\\frac1{27-3-4}=\\frac1{20}$$

$$\\sum_i\\text{Res}_{z=z_i}f=-\\frac1{20}$$

$$\\int_C\\frac1{(z-3)(z^3-z-4)}dz=2\\pi i\\left(-\\frac1{20}\\right)=-\\frac{\\pi i}{10}$$`}
  ],
  answer:'근의 개수: $3$, 선적분값: $-\\dfrac{\\pi i}{10}$',
  footnotes:[
    {n:'①',text:'루셰 정리: γ와 그 내부에서 f,g가 해석적이고 γ 위에서 |g|<|f|이면 f+g와 f는 γ 내부에서 같은 개수의 영점을 갖는다.'},
    {n:'②',text:'f(z)가 무한대 근방에서 zf(z)→0이면(즉 O(1/z²) 이상으로 감소) 복소평면 위 모든 극점에서의 유수의 합은 0이다.'}
  ]
},

// ───────────────────────────────────────
// 2024
// ───────────────────────────────────────
{
  id:'2024a2', year:2024, type:'전공A', cat:'residue', pts:2,
  title:'$|z|=1$ 위에서 $z̄=1/z$ 대입으로 선적분 계산',
  problem:`복소평면에서 중심이 원점이고 반지름의 길이가 $1$인 원을 시계 반대방향으로 한 바퀴 도는 곡선 $C$에 대하여 적분 $\\displaystyle\\int_C\\bar z\\,dz-\\frac1{\\bar z}\\,d\\bar z$의 값을 구하시오. (단, $\\bar z$는 $z$의 켤레복소수이다.)`,
  steps:[
    {num:'Step 1', title:'매개변수화',
     body:`$z=e^{i\\theta}$ ($0\\le\\theta\\le2\\pi$), $\\bar z=e^{-i\\theta}$, $dz=ie^{i\\theta}d\\theta$, $d\\bar z=-ie^{-i\\theta}d\\theta$.`},
    {num:'Step 2', title:'첫째 항',
     body:`$$\\int_C\\bar z\\,dz=\\int_0^{2\\pi}e^{-i\\theta}\\cdot ie^{i\\theta}d\\theta=\\int_0^{2\\pi}i\\,d\\theta=2\\pi i$$`},
    {num:'Step 3', title:'둘째 항',
     body:`$$\\int_C\\frac1{\\bar z}\\,d\\bar z=\\int_0^{2\\pi}e^{i\\theta}\\cdot(-ie^{-i\\theta})d\\theta=\\int_0^{2\\pi}(-i)\\,d\\theta=-2\\pi i$$`},
    {num:'Step 4', title:'최종 계산',
     body:`$$\\int_C\\bar z\\,dz-\\int_C\\frac1{\\bar z}\\,d\\bar z=2\\pi i-(-2\\pi i)=4\\pi i$$`}
  ],
  answer:'$4\\pi i$',
  footnotes:[
    {n:'①',text:'|z|=1 (단위원) 위에서는 z z̄=|z|²=1이 항상 성립하므로 z̄=1/z. 이 관계를 알면 굳이 매개변수화하지 않고도 적분을 1/z, z 형태로 바꿔 유수정리로 바로 계산할 수도 있다.'},
    {n:'②',text:'dz̄는 z̄를 곡선의 매개변수(여기선 θ)에 대해 미분한 것. z=e^{iθ}이면 z̄=e^{-iθ}이므로 dz̄=-ie^{-iθ}dθ로, dz=ie^{iθ}dθ와 부호·형태가 다르다는 점에 주의.'}
  ]
},
{
  id:'2024b11', year:2024, type:'전공B', cat:'entire', pts:4,
  title:'CR방정식과 부등식으로 $f(z)=-e^{\\pi z}$ 결정 후 비율 계산',
  problem:`실숫값을 갖는 두 함수 $u(x,y),\\ v(x,y)$와 복소수 $z=x+iy$ ($x,y$는 실수)에 대하여 복소함수 $f(z)=u(x,y)+iv(x,y)$는 정함수(전해석함수, entire function)이다. $\\overline{f(\\bar z)}$가 정함수임을 보이시오. 또한, $f'(i)=\\pi,\\ f(-i)=1$이고 모든 실수 $x,y$에 대하여 $\\dfrac{\\partial u}{\\partial x}(x,y)\\dfrac{\\partial v}{\\partial y}(x,y)-\\dfrac{\\partial u}{\\partial y}(x,y)\\dfrac{\\partial v}{\\partial x}(x,y)>(u(x,-y))^2+(v(x,-y))^2$일 때, $\\dfrac{f'(1-i)}{f(1+i)}$의 값을 풀이 과정과 함께 쓰시오. (단, $\\bar z$는 $z$의 켤레복소수이다.)`,
  steps:[
    {num:'Step 1', title:'$g(z)=conj(f(z̄))$가 정함수임을 증명',
     body:`$g(z)=\\overline{f(\\bar z)}$라 하면 $g(z)=u(x,-y)-iv(x,-y)=:U+iV$ ($U(x,y)=u(x,-y),\\ V(x,y)=-v(x,-y)$).

연쇄법칙: $U_x=u_x(x,-y),\\ U_y=-u_y(x,-y),\\ V_x=-v_x(x,-y),\\ V_y=v_y(x,-y)$.

$f$의 CR방정식 $u_x=v_y,\\ u_y=-v_x$를 $(x,-y)$에서 적용하면 $U_x=u_x(x,-y)=v_y(x,-y)=V_y$이고 $U_y=-u_y(x,-y)=v_x(x,-y)=-V_x$.

$U,V$가 CR방정식을 만족하고 연속인 편도함수를 가지므로 $g$는 정함수. $\\blacksquare$`},
    {num:'Step 2', title:'부등식을 $|f\'(z)|²>|f(z̄)|²$로 재해석',
     body:`CR방정식 $v_y=u_x,\\ v_x=-u_y$를 이용하면:

$$u_xv_y-u_yv_x=u_x^2+u_y^2=|f'(z)|^2$$

또한 $u(x,-y)^2+v(x,-y)^2=|f(\\bar z)|^2=|\\overline{f(\\bar z)}|^2=|g(z)|^2$.

따라서 조건은 $|f'(z)|^2>|g(z)|^2$, 즉 $|f'(z)|>|g(z)|$가 **모든** $z$에서 성립.`},
    {num:'Step 3', title:'리우빌 정리로 $g=f\'/π$ 도출',
     body:`$|f'(z)|>|g(z)|\\ge0$이므로 $f'$은 영점을 갖지 않고, $\\varphi(z):=g(z)/f'(z)$는 정함수이며 $|\\varphi(z)|<1$ (유계) ①.

리우빌 정리에 의해 $\\varphi\\equiv c$ (상수, $|c|<1$), 즉 $g(z)=c\\,f'(z)$.

$z=i$에서: $g(i)=\\overline{f(-i)}=\\overline1=1$이고 $g(i)=c\\,f'(i)=c\\pi$이므로 $c=1/\\pi$.

$$\\overline{f(\\bar z)}=\\frac1\\pi f'(z)\\quad\\text{(모든 }z\\text{에서)}\\qquad(*)$$`},
    {num:'Step 4', title:'급수 전개로 $f(z)$ 결정',
     body:`$f(z)=\\sum a_nz^n$이면 $\\overline{f(\\bar z)}=\\sum\\bar a_nz^n$이므로 $(*)$: $\\bar a_n=\\dfrac{(n+1)a_{n+1}}\\pi$, 즉 $a_{n+1}=\\dfrac{\\pi\\bar a_n}{n+1}$.

이 점화식으로 $a_{2k}=\\dfrac{\\pi^{2k}a_0}{(2k)!},\\ a_{2k+1}=\\dfrac{\\pi^{2k+1}\\bar a_0}{(2k+1)!}$을 얻고:

$$f(z)=a_0\\cosh(\\pi z)+\\bar a_0\\sinh(\\pi z)$$

$f(-i)=-a_0=1\\Rightarrow a_0=-1$ (실수, $\\bar a_0=-1$도 만족 및 $f'(i)=-\\pi\\bar a_0=\\pi$와도 일치 확인 ②).

$$f(z)=-\\cosh(\\pi z)-\\sinh(\\pi z)=-e^{\\pi z}$$`},
    {num:'Step 5', title:'$f\'(1-i)/f(1+i)$ 계산',
     body:`$f'(z)=-\\pi e^{\\pi z}$.

$$f'(1-i)=-\\pi e^{\\pi(1-i)}=-\\pi e^\\pi e^{-i\\pi}=-\\pi e^\\pi(-1)=\\pi e^\\pi$$

$$f(1+i)=-e^{\\pi(1+i)}=-e^\\pi e^{i\\pi}=-e^\\pi(-1)=e^\\pi$$

$$\\frac{f'(1-i)}{f(1+i)}=\\frac{\\pi e^\\pi}{e^\\pi}=\\pi$$`}
  ],
  answer:'$\\overline{f(\\bar z)}$가 정함수임을 증명 완료, $\\dfrac{f\'(1-i)}{f(1+i)}=\\pi$',
  footnotes:[
    {n:'①',text:'f\'(z)가 영점이 없으므로 g/f\'은 극점 없이 전체에서 해석적, 즉 정함수.'},
    {n:'②',text:'f(z)=a₀cosh(πz)+ā₀sinh(πz)에서 f\'(i)=π[a₀sinh(iπ)+ā₀cosh(iπ)]=-πā₀ (sinh(iπ)=0,cosh(iπ)=-1). a₀=-1이면 -π(-1)=π로 일치.'}
  ]
},

// ───────────────────────────────────────
// 2025
// ───────────────────────────────────────
{
  id:'2025a7', year:2025, type:'전공A', cat:'series', pts:4,
  title:'세 점으로 $T(z)$ 결정, 원의 상(직선)과 점 사이 최소거리',
  problem:`확장 복소평면(extended complex plane) $\\mathbb{C}\\cup\\{\\infty\\}$에서 정의된 일차분수변환(선형분수변환, linear fractional transformation, bilinear transformation) $T$가 $T(0)=-1,\\ T(i)=-i,\\ T(2)=3$을 만족시킬 때, $T(z)$를 풀이 과정과 함께 쓰시오. 또한 $W=\\{T(z)\\mid|z|=1,\\,z\\in\\mathbb{C}\\}$라고 할 때, $W$의 원소와 복소수 $1+i$ 사이의 거리의 최솟값을 풀이 과정과 함께 쓰시오.`,
  steps:[
    {num:'Step 1', title:'$T(z)$ 계수 결정',
     body:`$T(z)=\\dfrac{az+b}{cz+d}$, $d=1$로 정규화. $T(0)=b=-1$.

$T(i)=-i$: $\\dfrac{ai-1}{ci+1}=-i\\Rightarrow ai-1=-i(ci+1)=c-i\\Rightarrow$ 실부: $-1=c$, 허부: $a=-1$.

$T(2)$ 검산: $\\dfrac{2a+b}{2c+d}=\\dfrac{-2-1}{-2+1}=\\dfrac{-3}{-1}=3$ ✓`},
    {num:'Step 2', title:'$T(z)$ 정리',
     body:`$$T(z)=\\frac{-z-1}{-z+1}=\\frac{z+1}{z-1}$$

검산: $T(0)=1/(-1)=-1$✓, $T(2)=3/1=3$✓, $T(i)=(i+1)/(i-1)=-i$✓ (분모유리화로 확인).`},
    {num:'Step 3', title:'단위원의 상 $W$ 결정',
     body:`$z=1$은 $T$의 극이고 단위원 $|z|=1$이 $z=1$을 지나므로, $W$는 원이 아니라 **직선**이 됩니다 ①.

세 점의 상을 계산: $T(-1)=0/(-2)=0$, $T(i)=-i$, $T(-i)=(1-i)/(-1-i)=i$ (분모유리화).

세 점 $0,-i,i$가 모두 허수축 위에 있으므로:

$$W=\\{iy\\mid y\\in\\mathbb{R}\\}\\ (\\text{허수축})$$`},
    {num:'Step 4', title:'점 $1+i$까지의 최소거리',
     body:`허수축(직선 $\\text{Re}(w)=0$)과 점 $1+i=(1,1)$ 사이의 최소거리는 수평거리:

$$|1-0|=1$$`}
  ],
  answer:'$T(z)=\\dfrac{z+1}{z-1}$, 최소거리 $=1$',
  footnotes:[
    {n:'①',text:'일차분수변환은 원 또는 직선을 원 또는 직선으로 보내며, 극(pole)을 지나는 원은 반드시 직선으로 사상된다.'}
  ]
},
{
  id:'2025b9', year:2025, type:'전공B', cat:'series', pts:4,
  title:'$f(z)=e^{-z}$ 결정 후 essential singularity 유수로 $f(1/z)$ 적분',
  problem:`복소수 $z=x+iy$ ($x,y$는 실수)에 대한 함수 $f(z)=e^{-x}\\cos y+iv(x,y)$ (단, $v(x,y)$는 실숫값 함수)가 정함수(전해석함수, entire function)이고 $f(0)=1$을 만족시킬 때, $f(z)$를 풀이 과정과 함께 쓰시오. 또한 복소평면에서 중심이 원점이고 반지름의 길이가 $1$인 원을 시계반대방향으로 한 바퀴 도는 곡선 $C$에 대하여 선적분 $\\displaystyle\\int_Cf\\!\\left(\\frac1z\\right)dz$의 값을 풀이 과정과 함께 쓰시오.`,
  steps:[
    {num:'Step 1', title:'$CR$방정식으로 $v$ 구하기',
     body:`$u=e^{-x}\\cos y$에서 $v_y=u_x=-e^{-x}\\cos y$, $v_x=-u_y=e^{-x}\\sin y$.

$v_y$ 적분: $v=-e^{-x}\\sin y+g(x)$. $v_x=e^{-x}\\sin y+g'(x)$가 요구값과 같으려면 $g'(x)=0$.

$$v(x,y)=-e^{-x}\\sin y+C$$`},
    {num:'Step 2', title:'$f(z)$의 닫힌 형태',
     body:`$$f(z)=e^{-x}\\cos y-ie^{-x}\\sin y+iC=e^{-x}(\\cos y-i\\sin y)+iC=e^{-x-iy}+iC=e^{-z}+iC$$

$f(0)=1+iC=1\\Rightarrow C=0$. 따라서:

$$f(z)=e^{-z}$$`},
    {num:'Step 3', title:'$f(1/z)=e^{-1/z}$의 로랑 전개',
     body:`$$e^{-1/z}=\\sum_{n=0}^\\infty\\frac{(-1)^n}{n!\\,z^n}$$

$z^{-1}$항($n=1$)의 계수(유수)는 $-1$.`},
    {num:'Step 4', title:'선적분 계산',
     body:`$$\\int_Cf\\!\\left(\\frac1z\\right)dz=\\int_Ce^{-1/z}dz=2\\pi i\\times(-1)=-2\\pi i$$`}
  ],
  answer:'$f(z)=e^{-z}$, 선적분값 $=-2\\pi i$',
  footnotes:[
    {n:'①',text:'z=0은 e^{-1/z}의 본질적 특이점(essential singularity)이다. 이런 점 주변에서는 유한 차수의 극이 아니라 무한히 많은 음수 차수 항(z⁻¹,z⁻²,...)을 갖는 로랑 급수로 전개된다.'},
    {n:'②',text:'로랑 급수에서 z⁻¹의 계수가 곧 그 점에서의 유수(residue)이며, 유수정리에 의해 ∮f dz=2πi×(유수의 합)이다.'}
  ]
},

// ───────────────────────────────────────
// 2026
// ───────────────────────────────────────
{
  id:'2026a3', year:2026, type:'전공A', cat:'residue', pts:2,
  title:'편각원리로 $f\'/f$ 선적분, 반지름별 $Z=P$ 개수 세기',
  problem:`복소함수 $f(z)=\\dfrac{(z-i+1)^5(z+1+i)^4}{z^6(z-1+4i)^3(z-9+2i)^5}e^z$과 복소평면에 중심이 원점이고 반지름의 길이가 $r$인 원을 시계반대방향으로 한 바퀴 도는 곡선 $C(r)$이 있다. 선적분 $\\displaystyle\\int_{C(2)}\\frac{f'(z)}{f(z)}\\,dz$의 값을 구하시오. 또한 $\\displaystyle\\int_{C(r)}\\frac{f'(z)}{f(z)}\\,dz=0$을 만족시키는 양의 정수 $r$의 개수를 구하시오.`,
  steps:[
    {num:'Step 1', title:'영점과 극점의 위치·차수',
     body:`영점: $z=i-1$ (5차, $|z|=\\sqrt2\\approx1.41$), $z=-1-i$ (4차, $|z|=\\sqrt2\\approx1.41$).

극점: $z=0$ (6차), $z=1-4i$ (3차, $|z|=\\sqrt{17}\\approx4.12$), $z=9-2i$ (5차, $|z|=\\sqrt{85}\\approx9.22$).

($e^z$는 영점·극점 없음.)`},
    {num:'Step 2', title:'편각원리로 $C(2)$ 적분',
     body:`$|z|<2$ 내부: 두 영점 ($\\sqrt2<2$, 총 차수 $5+4=9$)과 원점 극점 ($6$차)만 포함. 나머지 극점은 $\\sqrt{17},\\sqrt{85}>2$로 외부.

편각원리 ①: $\\displaystyle\\int_{C(r)}\\frac{f'}{f}dz=2\\pi i(Z-P)$

$$\\int_{C(2)}\\frac{f'(z)}{f(z)}dz=2\\pi i(9-6)=6\\pi i$$`},
    {num:'Step 3', title:'$r$에 따른 $Z(r), P(r)$ 변화',
     body:`특이점의 크기 순서: $0<\\sqrt2\\approx1.41<\\sqrt{17}\\approx4.12<\\sqrt{85}\\approx9.22$ (모두 정수가 아님, 정수 반지름과 겹치지 않음).

| $r$ | 포함된 영점(Z) | 포함된 극점(P) | $Z-P$ |
|---|---|---|---|
| $1$ | $0$ | $6$ | $-6$ |
| $2,3,4$ | $9$ | $6$ | $3$ |
| $5,6,7,8,9$ | $9$ | $6+3=9$ | $\\mathbf0$ |
| $10,11,\\ldots$ | $9$ | $6+3+5=14$ | $-5$ |`},
    {num:'Step 4', title:'조건을 만족하는 $r$의 개수',
     body:`$Z(r)-P(r)=0$을 만족하는 양의 정수 $r$은 $5,6,7,8,9$로 총 **5개**.`}
  ],
  answer:'$\\displaystyle\\int_{C(2)}\\frac{f\'(z)}{f(z)}dz=6\\pi i$, 조건을 만족하는 $r$의 개수 $=5$',
  footnotes:[
    {n:'①',text:'편각원리: f가 γ 위에서 영점·극점이 없고 내부에서 유리형이면 ∮(f\'/f)dz=2πi(Z-P) (Z,P는 중복도 포함 영점·극점 개수).'}
  ]
},
{
  id:'2026b8', year:2026, type:'전공B', cat:'series', pts:4,
  title:'CR방정식으로 $a,b,c,d$ 결정, $e^{1/z}f(z)$의 $a_{-1}$ 계수',
  problem:`복소수 $z=x+iy$ ($x,y$는 실수)에 대한 함수 $f(z)=\\dfrac{x+ay}{x^2+y^2}+x^2+by^2+i\\left(\\dfrac{cy}{x^2+y^2}+dxy\\right)$가 영역 $\\mathbb{C}-\\{0\\}$에서 해석적(analytic)이 되도록 하는 실수 $a,b,c,d$의 값을 풀이 과정과 함께 쓰시오. 또한 $e^{\\frac1z}f(z)$의 $z=0$을 중심으로 하는 로랑 급수(Laurent series)를 $\\displaystyle\\sum_{n=-\\infty}^\\infty a_nz^n$이라 할 때, $a_{-1}$의 값을 풀이 과정과 함께 쓰시오.`,
  steps:[
    {num:'Step 1', title:'특이항을 $1/z$와 비교해 $a,c$ 결정',
     body:`$\\dfrac1z=\\dfrac{\\bar z}{|z|^2}=\\dfrac{x-iy}{x^2+y^2}$이므로 실부 $\\dfrac x{x^2+y^2}$, 허부 $\\dfrac{-y}{x^2+y^2}$.

$u$의 특이항 $\\dfrac{x+ay}{x^2+y^2}$과 $v$의 특이항 $\\dfrac{cy}{x^2+y^2}$이 $k/z$ 형태($k=k_1+ik_2$)와 같으려면:

실부 비교: $k_1=1,\\ k_2=a$. 허부 비교($x$항 없음, $y$항만): $k_2=0,\\ -k_1=c$.

$$k_2=0\\Rightarrow a=0,\\qquad k_1=1\\Rightarrow c=-1$$

즉 특이항은 정확히 $1/z$ ①.`},
    {num:'Step 2', title:'다항식부에 $CR$방정식 적용',
     body:`나머지 $u_{poly}=x^2+by^2,\\ v_{poly}=dxy$도 $\\mathbb{C}-\\{0\\}$ 전체(사실상 전체)에서 해석적이어야 하므로 CR방정식 만족:

$u_{poly,x}=2x=v_{poly,y}=dx\\Rightarrow d=2$

$u_{poly,y}=2by=-v_{poly,x}=-dy\\Rightarrow2b=-d=-2\\Rightarrow b=-1$`},
    {num:'Step 3', title:'$f(z)$ 닫힌 형태 확인',
     body:`$a=0,b=-1,c=-1,d=2$일 때 $u_{poly}=x^2-y^2,\\ v_{poly}=2xy$이므로 $u_{poly}+iv_{poly}=z^2$.

$$f(z)=\\frac1z+z^2$$`},
    {num:'Step 4', title:'$e^{1/z}f(z)$의 $a_{-1}$ 계수',
     body:`$e^{1/z}=\\displaystyle\\sum_{n=0}^\\infty\\frac1{n!z^n}$이므로:

$$e^{1/z}f(z)=\\left(\\sum_{n\\ge0}\\frac1{n!z^n}\\right)(z^2+z^{-1})=\\sum_{n\\ge0}\\frac{z^{2-n}}{n!}+\\sum_{n\\ge0}\\frac{z^{-n-1}}{n!}$$

$z^{-1}$항: 첫째 합에서 $2-n=-1\\Rightarrow n=3$, 계수 $\\dfrac1{3!}=\\dfrac16$. 둘째 합에서 $-n-1=-1\\Rightarrow n=0$, 계수 $\\dfrac1{0!}=1$.

$$a_{-1}=\\frac16+1=\\frac76$$`}
  ],
  answer:'$a=0,\\ b=-1,\\ c=-1,\\ d=2$ ($f(z)=z^2+1/z$), $a_{-1}=\\dfrac76$',
  footnotes:[
    {n:'①',text:'1/z = z̄/|z|² = (x-iy)/(x²+y²): 실부 x/(x²+y²), 허부 -y/(x²+y²).'}
  ]
}

]};
