window.SUBJECTS = window.SUBJECTS || {};

window.SUBJECTS['해석학'] = {
  label: '해석학',
  categories: [
    { id:'uniform', name:'고른수렴',     color:'#1a6b40', light:'#edf7f1' },
    { id:'diff',    name:'미분·연속성',  color:'#1a4a9f', light:'#eef3fd' },
    { id:'series',  name:'급수·수렴반경', color:'#9f1a6b', light:'#fceef6' }
  ],
  freqGroups: [
    {
      id:'uniform', name:'함수열·함수급수 — 고른수렴', stars:'★★★★★★', count:12, color:'#1a6b40',
      desc:'$Weierstrass M-$판정법, 극한과 적분 교환, 미분과 극한 교환',
      problems:['2016b4','2017b4','2018a3','2018b7','2019a11','2020b9','2021a12','2022b10','2023a11','2024b10','2025b10','2026a10']
    },
    {
      id:'diff', name:'미분·연속성 — 극한과 증명', stars:'★★★★★', count:9, color:'#1a4a9f',
      desc:'미분가능성 정의$, ε-δ$ 논증, 고정점, 영점 존재, 대우명제',
      problems:['2014a9','2014a4','2016a11','2017b7','2018a11','2020a12','2021b7','2025a12','2026b10']
    },
    {
      id:'series', name:'급수·수렴반경·이상적분', stars:'★★★★', count:7, color:'#9f1a6b',
      desc:'멱급수 수렴구간, 이상적분 수렴판별, 수열 수렴, 평균값 정리',
      problems:['2014a8','2015a3','2016a3','2019b7','2022a7','2023b7','2024a10']
    }
  ],
  problems: [

// ─── 2014 ───
{
  id:'2014a8', year:2014, type:'전공A', cat:'series', pts:2,
  title:'멱급수(거듭제곱급수)의 수렴구간',
  problem:`거듭제곱급수(멱급수, power series) $\\displaystyle\\sum_{n=1}^{\\infty}\\frac{(-1)^n x^n}{5^n\\sqrt{n}}$의 수렴구간을 구하시오.`,
  steps:[
    {num:'Step 1', title:'수렴반경 $R$ 결정',
     body:`코시-아다마르 공식 ①: $a_n = \\dfrac{(-1)^n}{5^n\\sqrt{n}}$이면

$$\\frac{1}{R} = \\limsup_{n\\to\\infty}|a_n|^{1/n} = \\lim_{n\\to\\infty}\\frac{1}{5 \\cdot n^{1/(2n)}} = \\frac{1}{5}$$

따라서 $R = 5$. 즉 $|x| < 5$에서 절대수렴.`},
    {num:'Step 2', title:'끝점 $x=5$ 검토',
     body:`$\\displaystyle\\sum_{n=1}^{\\infty}\\frac{(-1)^n}{\\sqrt{n}}$: 교대급수 ②. $1/\\sqrt{n}$은 단조감소하여 $0$으로 수렴 → **수렴**.`},
    {num:'Step 3', title:'끝점 $x=-5$ 검토',
     body:`$\\displaystyle\\sum_{n=1}^{\\infty}\\frac{1}{\\sqrt{n}}$: $p$-급수 ③ ($p=1/2<1$) → **발산**.`},
    {num:'Step 4', title:'수렴구간',
     body:`$$\\boxed{-5 < x \\leq 5}$$`}
  ],
  answer:'$(-5,\\,5]$',
  footnotes:[
    {n:'①',text:'코시-아다마르(Cauchy-Hadamard) 공식: $\\sum a_n x^n$의 수렴반경 $R=1/\\limsup|a_n|^{1/n}$. $n^{1/(2n)}\\to 1$이므로 $1/R=1/5$.'},
    {n:'②',text:'교대급수 판정법: $\\sum(-1)^n b_n$에서 $b_n\\geq 0$이 단조감소하고 $b_n\\to 0$이면 수렴.'},
    {n:'③',text:'$p$-급수 $\\sum 1/n^p$는 $p>1$이면 수렴, $p\\leq 1$이면 발산.'}
  ]
},
{
  id:'2014a9', year:2014, type:'전공A', cat:'diff', pts:2,
  title:"f'이 x=0에서 연속이 되기 위한 r의 조건",
  problem:`양수 $r>0$에 대하여 $f(x)=\\begin{cases}x^6\\sin\\dfrac{1}{x^r}+x^r\\sin\\dfrac{1}{x^2},&x>0\\\\0,&x\\leq 0\\end{cases}$일 때, $f'$이 $x=0$에서 연속이기 위한 필요충분조건을 $r$에 대한 부등식으로 나타내시오.`,
  steps:[
    {num:'Step 1', title:"f'(0) 계산",
     body:`$f'(0) = \\displaystyle\\lim_{x\\to 0^+}\\frac{f(x)}{x}$. 각 항을 분리:

$$\\left|x^5\\sin\\frac{1}{x^r}\\right|\\leq x^5\\to 0, \\quad \\left|x^{r-1}\\sin\\frac{1}{x^2}\\right|\\leq x^{r-1}$$

$r>1$이면 $x^{r-1}\\to 0$이므로 $f'(0)=0$.`},
    {num:'Step 2', title:"x>0에서 f'(x) 계산",
     body:`미분하면 (주요 항만 나열):

$$f'(x) = 6x^5\\sin\\frac{1}{x^r} \\underbrace{-rx^{5-r}\\cos\\frac{1}{x^r}}_{\\text{(가)}} + rx^{r-1}\\sin\\frac{1}{x^2} \\underbrace{-2x^{r-3}\\cos\\frac{1}{x^2}}_{\\text{(나)}}$$`},
    {num:'Step 3', title:"lim f'(x)=0 조건",
     body:`$f'$이 $x=0$에서 연속이 되려면 $\\displaystyle\\lim_{x\\to 0^+}f'(x)=0$:

- $6x^5\\sin(1/x^r)\\to 0$: 항상 성립
- (가) $x^{5-r}\\cos(1/x^r)\\to 0$: $5-r>0$, 즉 $r<5$ 필요
- $rx^{r-1}\\sin(1/x^2)\\to 0$: $r>1$ 필요
- (나) $x^{r-3}\\cos(1/x^2)\\to 0$: $r-3>0$, 즉 $r>3$ 필요

가장 강한 조건: $r>3$과 $r<5$를 동시에 만족.`}
  ],
  answer:'$3 < r < 5$',
  footnotes:[
    {n:'①',text:'조건 (나)에서 $x^{r-3}\\cos(1/x^2)$: $\\cos$는 유계이지만 진동하므로, $x^{r-3}\\to 0$이 필요. 이것이 가장 강한 제약조건.'},
    {n:'②',text:'(가)에서 $r=5$이면 $x^0\\cos(1/x^r)=\\cos(1/x^5)$가 $x\\to 0$일 때 수렴하지 않으므로 $r<5$ 필요.'}
  ]
},
{
  id:'2014a4', year:2014, type:'전공A', cat:'diff', pts:4,
  title:'연속함수의 최댓값 존재 증명 (볼차노-바이어슈트라스)',
  problem:`연속함수 $f:[0,1]\\to\\mathbb{R}$에 대해 집합 $\\{f(x)\\mid x\\in[0,1]\\}$의 상한(supremum) $M$이 존재한다. $\\langle$정리 1$\\rangle$을 이용하여 $f(x^*)=M$을 만족하는 $x^*\\in[0,1]$이 존재함을 증명하시오.
  [$\\langle$정리 1$\\rangle$: 유계인 실수열은 수렴하는 부분수열을 갖는다.]`,
  steps:[
    {num:'Step 1', title:'근사수열 구성',
     body:`$M = \\sup\\{f(x)\\}$이므로, 모든 $n\\in\\mathbb{N}$에 대해 ①:

$$M - \\frac{1}{n} < f(x_n) \\leq M$$

을 만족하는 $x_n\\in[0,1]$이 존재한다.`},
    {num:'Step 2', title:'수렴 부분수열 추출',
     body:`수열 $\\{x_n\\}\\subset[0,1]$은 유계이므로, $\\langle$정리 1$\\rangle$ (볼차노-바이어슈트라스 정리 ②)에 의해 수렴하는 부분수열 $\\{x_{n_k}\\}$가 존재한다.

$$x_{n_k} \\to x^* \\in [0,1]$$`},
    {num:'Step 3', title:'연속성으로 결론',
     body:`$f$가 $[0,1]$에서 연속이므로:

$$f(x_{n_k}) \\to f(x^*)$$

한편 $M-\\frac{1}{n_k} < f(x_{n_k}) \\leq M$이므로 조임 정리 ③에 의해 $f(x_{n_k})\\to M$.

따라서 $f(x^*) = M$. $\\blacksquare$`}
  ],
  answer:'$x^*\\in[0,1]$이 존재하여 $f(x^*)=M$ (증명 완료)',
  footnotes:[
    {n:'①',text:'상한의 정의$: M$이 상한이면 $M$보다 작은 어떤 수도 상한이 아님. 따라서 모든 $n$에 대해 $M-1/n$은 상한이 아니므로$, M-1/n < f(xₙ)$인 $xₙ$이 존재.'},
    {n:'②',text:'볼차노-바이어슈트라스$(Bolzano-Weierstrass)$ 정리: 모든 유계인 실수열은 수렴하는 부분수열을 가짐. 고등학교 수열과 같은 개념의 깊은 버전.'},
    {n:'③',text:'조임 정리$(Squeeze theorem): M-1/nₖ < f(xₙₖ) ≤ M$이고 $M-1/nₖ → M$이므로 $f(xₙₖ) → M.$'}
  ]
},

// ─── 2015 ───
{
  id:'2015a3', year:2015, type:'전공A', cat:'series', pts:2,
  title:'매개변수 곡선에서 평균값 정리 적용',
  problem:`매개변수방정식 $x=4t-t^2$, $y=t^2+1$ $(0\\leq t\\leq 1)$로 주어진 곡선 $y=f(x)$가 있다. 두 점 $(0,f(0))$, $(3,f(3))$을 연결하는 직선의 기울기와 점 $(c,f(c))$에서의 접선의 기울기가 같게 되는 값 $c$를 구간 $(0,3)$에서 구하시오.`,
  steps:[
    {num:'Step 1', title:'끝점 좌표',
     body:`$t=0$: $(x,y)=(0,1)$, $t=1$: $(x,y)=(3,2)$.

두 점을 잇는 직선의 기울기 $= \\dfrac{2-1}{3-0} = \\dfrac{1}{3}$.`},
    {num:'Step 2', title:'접선의 기울기 (평균값 정리 ①)',
     body:`매개변수 미분 ②:

$$\\frac{dy}{dx} = \\frac{dy/dt}{dx/dt} = \\frac{2t}{4-2t} = \\frac{t}{2-t}$$`},
    {num:'Step 3', title:'방정식 풀기',
     body:`$$\\frac{t}{2-t} = \\frac{1}{3} \\implies 3t = 2-t \\implies t = \\frac{1}{2}$$

$t=\\frac{1}{2}$일 때: $c = x\\!\\left(\\frac{1}{2}\\right) = 4\\cdot\\frac{1}{2} - \\left(\\frac{1}{2}\\right)^2 = 2 - \\frac{1}{4} = \\frac{7}{4}$`}
  ],
  answer:'$c = \\dfrac{7}{4}$',
  footnotes:[
    {n:'①',text:'평균값 정리$(MVT): f$가 $[a,b]$에서 연속$, (a,b)$에서 미분가능하면 $f(b)-f(a)=(b-a)f\'(c)$인 $c∈(a,b)$가 존재.'},
    {n:'②',text:'매개변수 미분법$: x=x(t), y=y(t)$이면 $dy/dx = (dy/dt)/(dx/dt). dx/dt=4-2t≠0 (t≠2, t∈[0,1]$에서 항상 $nonzero).$'}
  ]
},

// ─── 2016 ───
{
  id:'2016a3', year:2016, type:'전공A', cat:'series', pts:2,
  title:'이상적분과 급수의 합',
  problem:`$f(x)=\\frac{1}{2}(x-10)^2$과 양의 정수 $n$에 대하여 $a_n$을 $\\displaystyle\\int_1^{\\infty}(f(n))^t\\,dt$의 수렴 여부에 따라 $a_n=\\begin{cases}\\displaystyle\\int_1^{\\infty}(f(n))^t\\,dt & \\text{수렴}\\\\0 & \\text{발산}\\end{cases}$로 정의하자. $\\displaystyle\\sum_{n=1}^{\\infty}a_n$의 값을 구하시오.`,
  steps:[
    {num:'Step 1', title:'이상적분 수렴 조건',
     body:`$a = f(n) = \\frac{1}{2}(n-10)^2$으로 놓으면:

$$\\int_1^{\\infty} a^t\\,dt = \\left[\\frac{a^t}{\\ln a}\\right]_1^{\\infty}$$

$a<1$이면 $a^t\\to 0$으로 수렴: 값 $=\\dfrac{-a}{\\ln a}=\\dfrac{a}{\\ln(1/a)}$.

$a\\geq 1$이면 발산 → $a_n=0$.`},
    {num:'Step 2', title:'수렴하는 $n$ 찾기',
     body:`$\\frac{1}{2}(n-10)^2 < 1 \\iff (n-10)^2 < 2 \\iff |n-10| < \\sqrt{2} \\approx 1.41$

양의 정수 $n$: $n\\in\\{9, 10, 11\\}$.

$n=10$: $f(10)=0$, $\\int_1^{\\infty}0^t\\,dt = 0$ → 수렴, $a_{10}=0$.

$n=9$: $f(9)=\\frac{1}{2}$, $a_9=\\dfrac{1/2}{\\ln 2}=\\dfrac{1}{2\\ln 2}$.

$n=11$: $f(11)=\\frac{1}{2}$, $a_{11}=\\dfrac{1}{2\\ln 2}$.`},
    {num:'Step 3', title:'급수의 합',
     body:`$$\\sum_{n=1}^{\\infty}a_n = a_9 + a_{10} + a_{11} = \\frac{1}{2\\ln 2} + 0 + \\frac{1}{2\\ln 2} = \\frac{1}{\\ln 2}$$`}
  ],
  answer:'$\\dfrac{1}{\\ln 2}$',
  footnotes:[
    {n:'①',text:'$\\int_1^\\infty a^t\\,dt$: $a^t=e^{t\\ln a}$이므로 $\\ln a<0$ (i.e. $a<1$)일 때 수렴. $\\int_1^\\infty e^{t\\ln a}dt = e^{\\ln a}/(-\\ln a) = a/(-\\ln a)$.'}
  ]
},
{
  id:'2016a11', year:2016, type:'전공A', cat:'diff', pts:4,
  title:'미분가능 함수의 부등식과 고정점 유일성',
  problem:`$f:[0,\\infty)\\to\\mathbb{R}$가 구간 $[0,\\infty)$에서 미분가능하고 $|f'(x)|\\leq M$, $f(0)>0$일 때, $f(x)\\leq f(0)+Mx$임을 보이시오. 또한 $0\\leq M<1$이면 $f(x)=x$는 단 하나의 해를 가짐을 보이시오.`,
  steps:[
    {num:'Step 1', title:'부등식 증명',
     body:`임의의 $x>0$에 대해 평균값 정리 ①:

$$f(x)-f(0) = f'(c)\\cdot x \\quad (c\\in(0,x))$$

$$f(x) = f(0)+f'(c)\\cdot x \\leq f(0)+|f'(c)|\\cdot x \\leq f(0)+Mx \\qquad\\blacksquare$$`},
    {num:'Step 2', title:'해의 존재 (사이값 정리)',
     body:`$g(x)=f(x)-x$로 놓으면:

$g(0)=f(0)>0$.

$f(x)\\leq f(0)+Mx$에서 $g(x)\\leq f(0)+(M-1)x$. $M<1$이므로 $x\\to\\infty$일 때 $g(x)\\to-\\infty$. 어떤 $x_0$에서 $g(x_0)<0$.

사이값 정리 ②: $g(0)>0$, $g(x_0)<0$ → $g(x^*)=0$인 $x^*\\in(0,x_0)$ 존재.`},
    {num:'Step 3', title:'해의 유일성',
     body:`$g(a)=g(b)=0$ ($a<b$)라 가정하면, 평균값 정리:

$$0 = \\frac{g(b)-g(a)}{b-a} = g'(c) = f'(c)-1$$

$\\therefore f'(c)=1$. 그런데 $|f'(c)|\\leq M<1$. 모순. $\\blacksquare$`}
  ],
  answer:'부등식 및 유일해 존재 증명 완료',
  footnotes:[
    {n:'①',text:'평균값 정리$(MVT): f$가 $[0,x]$에서 연속$, (0,x)$에서 미분가능이면 $f(x)-f(0)=f\'(c)x$인 $c∈(0,x)$ 존재.'},
    {n:'②',text:'사이값 정리$(IVT): g$가 연속이고 $g(0)>0, g(x₀)<0$이면 $g(x*)=0$인 $x*∈(0,x₀)$ 존재.'}
  ]
},
{
  id:'2016b4', year:2016, type:'전공B', cat:'uniform', pts:4,
  title:'함수급수의 균등수렴과 미분가능성',
  problem:`양의 정수 $n$에 대하여 $f_n:[-1,1]\\to\\mathbb{R}$를 $f_n(x)=e^{x/n^2}-\\cos(x/n^2)$로 정의할 때, $\\displaystyle\\sum_{n=1}^{\\infty}f_n(x)$가 $[-1,1]$에서 미분가능한 함수로 균등수렴함을 보이시오.`,
  steps:[
    {num:'Step 1', title:'각 항의 균등 상계 $(Mₙ)$',
     body:`$|x|\\leq 1$, $t=x/n^2$으로 놓으면 $|t|\\leq 1/n^2$.

$$|e^t-1| \\leq |t|e^{|t|} \\leq \\frac{1}{n^2}\\cdot e^{1/n^2} \\leq \\frac{2}{n^2}$$

$$|1-\\cos t| \\leq \\frac{t^2}{2} \\leq \\frac{1}{2n^4}$$

$$|f_n(x)| \\leq |e^t-1| + |1-\\cos t| \\leq \\frac{2}{n^2}+\\frac{1}{2n^4} \\leq \\frac{3}{n^2} =: M_n$$`},
    {num:'Step 2', title:'$Weierstrass M-$판정법',
     body:`$\\displaystyle\\sum_{n=1}^{\\infty}M_n = 3\\sum_{n=1}^{\\infty}\\frac{1}{n^2} = \\frac{\\pi^2}{2} < \\infty$

Weierstrass M-판정법 ①에 의해 $\\sum f_n(x)$는 $[-1,1]$에서 균등수렴.`},
    {num:'Step 3', title:'미분가능성',
     body:`$f_n'(x) = \\frac{1}{n^2}e^{x/n^2}+\\frac{1}{n^2}\\sin(x/n^2)$

$|f_n'(x)| \\leq \\frac{1}{n^2}(e^{1/n^2}+1) \\leq \\frac{3}{n^2}$

$\\sum f_n'(x)$도 균등수렴. 균등수렴 미분 정리 ②에 의해 $\\sum f_n$은 미분가능. $\\blacksquare$`}
  ],
  answer:'균등수렴 및 미분가능성 증명 완료',
  footnotes:[
    {n:'①',text:'$Weierstrass M-$판정법$: |fₙ(x)| ≤ Mₙ ($모든 $x$에 대해)이고 $ΣMₙ < ∞$이면 $Σfₙ$은 균등수렴.'},
    {n:'②',text:'균등수렴 미분 정리$: Σfₙ$이 어느 한 점에서 수렴하고$, Σfₙ\'$이 균등수렴하면$, Σfₙ$도 균등수렴하고 $(Σfₙ)\' = Σfₙ\'.$'}
  ]
},

// ─── 2017 ───
{
  id:'2017b4', year:2017, type:'전공B', cat:'uniform', pts:4,
  title:'함수열의 균등수렴과 적분 극한',
  problem:`$f:\\mathbb{R}\\to\\mathbb{R}$는 미분가능하고 $f'$이 연속이다. $g_n(x)=2^n\\{f(x+2^{-n})-f(x)\\}$라 하자. $\\{g_n\\}$이 $[0,1]$에서 $f'$으로 균등수렴함을 보이고, $\\displaystyle\\lim_{n\\to\\infty}\\int_0^1 g_n(x)\\,dx = f(1)-f(0)$임을 보이시오.`,
  steps:[
    {num:'Step 1', title:'점별 수렴',
     body:`미분의 정의에 의해:
$$g_n(x) = 2^n\\{f(x+2^{-n})-f(x)\\} \\xrightarrow{n\\to\\infty} f'(x)$$`},
    {num:'Step 2', title:'균등수렴 증명',
     body:`평균값 정리 ①: $g_n(x)-f'(x) = f'(c_{n,x})-f'(x)$ (단, $c_{n,x}\\in(x, x+2^{-n})$).

$f'$이 $[0,2]$ (컴팩트 집합) 위에서 균등연속 ②이므로:

임의의 $\\varepsilon>0$에 대해, $\\delta>0$가 존재하여 $|c_{n,x}-x|<\\delta$이면 $|f'(c_{n,x})-f'(x)|<\\varepsilon$.

$n$이 충분히 크면 $2^{-n}<\\delta$이므로 모든 $x\\in[0,1]$에 대해 $|g_n(x)-f'(x)|<\\varepsilon$. $\\blacksquare$`},
    {num:'Step 3', title:'적분과 극한의 교환',
     body:`균등수렴하면 적분과 극한을 교환 ③할 수 있으므로:

$$\\lim_{n\\to\\infty}\\int_0^1 g_n(x)\\,dx = \\int_0^1 f'(x)\\,dx = f(1)-f(0)\\qquad\\blacksquare$$`}
  ],
  answer:'균등수렴 및 적분극한 증명 완료',
  footnotes:[
    {n:'①',text:'$MVT: f(x+h)-f(x)=f\'(c)h$인 $c∈(x,x+h)$ 존재. 따라서 $gₙ(x)=f\'(cₙ,ₓ).$'},
    {n:'②',text:'컴팩트 집합([0,2])에서 연속함수는 균등연속. 즉 $|x-y|<δ$이면 $|f\'(x)-f\'(y)|<ε$인 $δ$가 $x,y$에 무관하게 존재.'},
    {n:'③',text:'균등수렴과 적분 교환 정리$: fₙ→f$ 균등수렴, 각 $fₙ$이 연속이면 $∫limfₙ = lim∫fₙ.$'}
  ]
},
{
  id:'2017b7', year:2017, type:'전공B', cat:'diff', pts:5,
  title:'무한번 미분가능 함수의 영점 집합이 유한집합',
  problem:`상수함수가 아닌 $f:\\mathbb{R}\\to\\mathbb{R}$가 무한번 미분가능하고 $|f^{(n)}(x)|\\leq n^2(|x|+2)$ (모든 실수 $x$, 자연수 $n$)를 만족시킬 때, 집합 $\\{x\\in\\mathbb{R}\\mid f(x)=0,\\,|x|<1\\}$이 유한집합임을 보이시오.`,
  steps:[
    {num:'Step 1', title:'집합이 무한이라고 가정 (귀류법)',
     body:`$S=\\{x\\mid f(x)=0,|x|<1\\}$이 무한집합이라 가정. 그러면 $S$는 $[-1,1]$ (컴팩트)의 무한 부분집합이므로, 볼차노-바이어슈트라스 정리에 의해 수렴하는 부분수열 $\\{x_k\\}\\subset S$, $x_k\\to c\\in[-1,1]$이 존재.`},
    {num:'Step 2', title:'모든 도함수가 $c$에서 0임을 보임',
     body:`$f(x_k)=0$이고 $x_k\\to c$, $f$ 연속 → $f(c)=0$.

$f'(c)=\\lim_k \\dfrac{f(x_k)-f(c)}{x_k-c}=\\lim_k \\dfrac{0-0}{x_k-c}=0$.

이를 귀납적으로 반복하면: $f^{(n)}(c)=0$ (모든 $n\\geq 0$) ①.`},
    {num:'Step 3', title:'$f≡0$ 모순 도출',
     body:`테일러 나머지 정리 (라그랑주 형태) ②:

$$f(x) = \\sum_{k=0}^{n-1}\\frac{f^{(k)}(c)}{k!}(x-c)^k + \\frac{f^{(n)}(t_x)}{n!}(x-c)^n = \\frac{f^{(n)}(t_x)}{n!}(x-c)^n$$

임의의 $|x|\\leq 2$에 대해:

$$|f(x)| \\leq \\frac{|f^{(n)}(t_x)|}{n!}\\cdot 4^n \\leq \\frac{n^2(|t_x|+2)}{n!}\\cdot 4^n \\leq \\frac{n^2\\cdot 4 \\cdot 4^n}{n!} \\to 0 \\quad(n\\to\\infty)$$

따라서 $f\\equiv 0$ on $\\{|x|\\leq 2\\}$. 이를 확장하면 $f\\equiv 0$ on $\\mathbb{R}$. 상수함수가 아니라는 가정에 모순. $\\blacksquare$`}
  ],
  answer:'집합이 유한집합임 (귀류법으로 증명 완료)',
  footnotes:[
    {n:'①',text:'귀납 논증$: f(xₖ)=0$이고 $xₖ→c$이면 $f(c)=0.$ 그다음 $f\'(c)= lim(f(xₖ)-f(c))/(xₖ-c)=0.$ 같은 방식으로 $f\'(c)=0$이고 $f\'(xₖ)→f\'(c)=0$이므로 $f"(c)=0.$ 이를 반복.'},
    {n:'②',text:'라그랑주 나머지$: f(x) = Σ f⁽ᵏ⁾(c)/k! (x-c)ᵏ + f⁽ⁿ⁾(tₓ)/n! (x-c)ⁿ.$ 여기서 $tₓ$는 $c$와 $x$ 사이의 점. 모든 $f⁽ᵏ⁾(c)=0$이면 첫 항이 사라짐.'}
  ]
},

// ─── 2018 ───
{
  id:'2018a3', year:2018, type:'전공A', cat:'uniform', pts:2,
  title:'함수열의 적분 극한$: lim∫fₙ$와 $∫lim fₙ$의 값',
  problem:`$f_n:[0,\\infty)\\to\\mathbb{R}$를 $f_n(x)=\\max\\left\\{0,\\,\\dfrac{1}{n}\\left(1-\\dfrac{1}{n}|x-2n|\\right)\\right\\}$로 정의할 때, $\\displaystyle\\lim_{n\\to\\infty}\\int_0^{\\infty}f_n(x)\\,dx + \\int_0^{\\infty}\\left(\\lim_{n\\to\\infty}f_n(x)\\right)dx$의 값을 구하시오.`,
  steps:[
    {num:'Step 1', title:'$∫fₙ dx$ 계산',
     body:`$f_n$은 $2n$을 중심으로 높이 $1/n$, 밑변 $2n$인 삼각형 모양 ①.

$$\\int_0^{\\infty}f_n(x)\\,dx = \\frac{1}{2}\\cdot 2n\\cdot\\frac{1}{n} = 1$$

따라서 $\\displaystyle\\lim_{n\\to\\infty}\\int_0^{\\infty}f_n(x)\\,dx = 1$.`},
    {num:'Step 2', title:'점별극한 $lim fₙ(x)$',
     body:`고정된 $x\\geq 0$에 대해 $n\\to\\infty$이면 $|x-2n|\\to\\infty$이므로 $f_n(x)\\to 0$ for all $x$.

$$\\lim_{n\\to\\infty}f_n(x) = 0 \\quad (\\text{모든 }x\\geq 0)$$`},
    {num:'Step 3', title:'최종 답',
     body:`$$\\int_0^{\\infty}\\left(\\lim_{n\\to\\infty}f_n(x)\\right)dx = \\int_0^{\\infty}0\\,dx = 0$$

$$1 + 0 = \\boxed{1}$$

이 문제는 극한과 적분이 교환되지 않는 예시 ②이다.`}
  ],
  answer:'$1$',
  footnotes:[
    {n:'①',text:'$fₙ$이 양수인 구간$: |x-2n|<n,$ 즉 $n<x<3n.$ 이 구간에서 텐트$(tent)$ 함수 모양. 높이$=1/n,$ 밑변$=2n$이므로 넓이=1.'},
    {n:'②',text:'$lim∫fₙ=1 ≠ 0=∫lim fₙ.$ 균등수렴이 아닐 때 이런 역설이 발생$. fₙ$이 ∞으로 이동하므로 균등수렴 불성립.'}
  ]
},
{
  id:'2018a11', year:2018, type:'전공A', cat:'diff', pts:4,
  title:'$f(0)=f\'(0)=0$일 때 $g(x)=f(x)cos(1/x²)$의 미분가능성',
  problem:`$f(0)=f'(0)=0$인 함수 $f:\\mathbb{R}\\to\\mathbb{R}$에 대하여 $g(x)=\\begin{cases}f(x)\\cos\\dfrac{1}{x^2},&x\\neq 0\\\\0,&x=0\\end{cases}$이라 하자. $g$가 $x=0$에서 미분가능함을 보이고 $g'(0)$의 값을 구하시오.`,
  steps:[
    {num:'Step 1', title:"g'(0) 계산",
     body:`$$g'(0) = \\lim_{x\\to 0}\\frac{g(x)-g(0)}{x-0} = \\lim_{x\\to 0}\\frac{f(x)\\cos(1/x^2)}{x}$$`},
    {num:'Step 2', title:'절댓값 부등식으로 극한',
     body:`$$\\left|\\frac{f(x)\\cos(1/x^2)}{x}\\right| \\leq \\frac{|f(x)|}{|x|}\\cdot\\underbrace{|\\cos(1/x^2)|}_{\\leq 1}$$

$f'(0)=0$이므로 ①: $\\displaystyle\\lim_{x\\to 0}\\frac{f(x)}{x} = \\lim_{x\\to 0}\\frac{f(x)-f(0)}{x-0} = f'(0) = 0$

조임 정리에 의해:

$$\\lim_{x\\to 0}\\frac{f(x)\\cos(1/x^2)}{x} = 0$$`},
    {num:'Step 3', title:'결론',
     body:`$g$는 $x=0$에서 미분가능하고 $g'(0)=0$.`}
  ],
  answer:"$g'(0) = 0$",
  footnotes:[
    {n:'①',text:'핵심 아이디어$: f\'(0)=0$이면 $lim_{x→0} f(x)/x = 0. cos(1/x²)$는 유계이므로 $(f(x)/x)·cos(1/x²)→0.$'}
  ]
},
{
  id:'2018b7', year:2018, type:'전공B', cat:'uniform', pts:5,
  title:'함수항 급수의 점별수렴과 균등연속',
  problem:`함수항 급수 $\\displaystyle\\sum_{n=1}^{\\infty}\\frac{1}{n}\\tan^{-1}\\frac{x}{n}$이 $\\mathbb{R}$에서 점별수렴함을 보이고, 그 합 $f(x)=\\displaystyle\\sum_{n=1}^{\\infty}\\frac{1}{n}\\tan^{-1}\\frac{x}{n}$이 균등연속임을 보이시오.`,
  steps:[
    {num:'Step 1', title:'점별수렴',
     body:`$|\\tan^{-1}(t)| \\leq |t|$ (모든 $t$) ①이므로:

$$\\left|\\frac{1}{n}\\tan^{-1}\\frac{x}{n}\\right| \\leq \\frac{1}{n}\\cdot\\frac{|x|}{n} = \\frac{|x|}{n^2}$$

비교판정법: $\\sum \\frac{|x|}{n^2} = |x|\\cdot\\frac{\\pi^2}{6} < \\infty$ → 절대수렴, 따라서 점별수렴. $\\blacksquare$`},
    {num:'Step 2', title:'균등연속 (리프시츠 조건)',
     body:`$|f(x)-f(y)| = \\left|\\sum\\frac{1}{n}\\left(\\tan^{-1}\\frac{x}{n}-\\tan^{-1}\\frac{y}{n}\\right)\\right|$

$\\tan^{-1}$의 도함수: $(\\tan^{-1}t)' = \\frac{1}{1+t^2} \\leq 1$ ②이므로

$$\\left|\\tan^{-1}\\frac{x}{n}-\\tan^{-1}\\frac{y}{n}\\right| \\leq \\frac{|x-y|}{n}$$

따라서:

$$|f(x)-f(y)| \\leq \\sum_{n=1}^{\\infty}\\frac{1}{n}\\cdot\\frac{|x-y|}{n} = |x-y|\\cdot\\frac{\\pi^2}{6}$$

이것은 리프시츠 조건 ③이므로 $f$는 균등연속. $\\blacksquare$`}
  ],
  answer:'점별수렴 및 균등연속 증명 완료',
  footnotes:[
    {n:'①',text:'$|arctan(t)| ≤ |t|: arctan(0)=0$이고 $(arctan)\'(t)=1/(1+t²)≤1$이므로 $MVT$에 의해 $|arctan(t)-arctan(0)| ≤ |t|.$'},
    {n:'②',text:'$|arctan(x/n)-arctan(y/n)| ≤ |(x-y)/n|: MVT$를 $arctan$에 적용. 도함수$=1/(1+t²)≤1.$'},
    {n:'③',text:'리프시츠$(Lipschitz)$ 조건$: |f(x)-f(y)| ≤ L|x-y|$이면 $f$는 균등연속$. L=π²/6.$'}
  ]
},

// ─── 2019 ───
{
  id:'2019a11', year:2019, type:'전공A', cat:'uniform', pts:4,
  title:'$h(x)$의 극한값과 함수열의 균등수렴 판별',
  problem:`$h(x)=\\begin{cases}\\displaystyle\\int_0^1\\frac{x^2}{x^4+t^2}dt,&x\\neq 0\\\\0,&x=0\\end{cases}$일 때, $\\displaystyle\\lim_{x\\to 0}h(x)$를 구하시오. 또한 $h_n(x)=\\displaystyle\\sum_{k=1}^n\\frac{nx^2}{n^2x^4+k^2}$일 때, $\\{h_n\\}$이 $h$로 균등수렴하는지 판별하시오.`,
  steps:[
    {num:'Step 1', title:'$lim h(x)$ 계산',
     body:`$u=t/x^2$ 로 치환: $t=x^2 u$, $dt=x^2\\,du$.

$$h(x)=\\int_0^1\\frac{x^2}{x^4+t^2}dt = \\int_0^{1/x^2}\\frac{x^2}{x^4+x^4u^2}\\cdot x^2\\,du = \\int_0^{1/x^2}\\frac{1}{1+u^2}du = \\tan^{-1}\\left(\\frac{1}{x^2}\\right)$$

$$\\lim_{x\\to 0}h(x) = \\lim_{x\\to 0}\\tan^{-1}\\left(\\frac{1}{x^2}\\right) = \\frac{\\pi}{2}$$`},
    {num:'Step 2', title:'$h(x)$의 불연속성',
     body:`$h(0)=0$이지만 $\\lim_{x\\to 0}h(x)=\\pi/2\\neq 0$.

따라서 $h$는 $x=0$에서 불연속.`},
    {num:'Step 3', title:'균등수렴 불성립',
     body:`각 $h_n$은 연속 (다항함수의 합). 균등수렴의 극한은 연속 ①이어야 하므로, 불연속인 $h$로의 균등수렴은 **불성립**.

정확히는: $h_n(0)=0$ for all $n$이지만 $\\sup_x|h_n(x)-h(x)|\\geq|h_n(x_n)-h(x_n)|$을 $x_n\\to 0$으로 잡으면 $\\geq \\pi/2-\\varepsilon$, 즉 $\\sup\\to\\pi/2\\neq 0$. $\\blacksquare$`}
  ],
  answer:'$\\displaystyle\\lim_{x\\to 0}h(x)=\\dfrac{\\pi}{2}$, $\\{h_n\\}$은 $h$로 균등수렴하지 않음',
  footnotes:[
    {n:'①',text:'균등수렴 연속성 정리: 연속함수들의 수열이 균등수렴하면 극한함수도 연속. 역대우: 극한함수가 불연속이면 균등수렴이 아님.'}
  ]
},
{
  id:'2019b7', year:2019, type:'전공B', cat:'series', pts:5,
  title:'점화식으로 정의된 수열의 유계성과 수렴',
  problem:`$a_1=1$, $a_{n+1}=(2a_n^2+1)^{1/5}$ $(n\\geq 1)$로 정의된 실수열 $\\{a_n\\}$에 대하여 모든 자연수 $n$에 대해 $1\\leq a_n\\leq 2$임을 보이고, $\\{a_n\\}$이 수렴함을 보이시오.`,
  steps:[
    {num:'Step 1', title:'유계성 (수학적 귀납법)',
     body:`**기저:** $a_1=1$이므로 $1\\leq a_1\\leq 2$ ✓

**귀납:** $1\\leq a_n\\leq 2$라 가정하면:

- $2a_n^2+1 \\geq 2\\cdot 1+1 = 3 > 1$ → $a_{n+1} > 1$ ✓
- $2a_n^2+1 \\leq 2\\cdot 4+1 = 9$ → $a_{n+1} \\leq 9^{1/5} < 2$ ✓ (∵ $2^5=32>9$) $\\blacksquare$`},
    {num:'Step 2', title:'단조성',
     body:`$g(t)=(2t^2+1)^{1/5}$로 놓으면, $a_{n+1}=g(a_n)$.

$g(t)-t$ 의 부호: $g(t)\\geq t\\iff 2t^2+1\\geq t^5$.

$t=1$: $3\\geq 1$ ✓. $t^5-2t^2-1$의 근을 $t^*$라 하면 ($t^*\\approx 1.6$), $[1,t^*]$에서 $g(t)>t$ (수열 증가), $(t^*,2]$에서 $g(t)<t$ (수열 감소).

따라서 $a_1=1<t^*$이면 수열이 증가하여 $t^*$에 수렴 ①.`},
    {num:'Step 3', title:'수렴값',
     body:`극한값 $L$이 존재하면, $L=(2L^2+1)^{1/5}$, 즉 $L^5=2L^2+1$.

$[1,2]$에서 유일한 실수근 $L=t^*$. $\\{a_n\\}\\to L$.`}
  ],
  answer:'$1\\leq a_n\\leq 2$ (귀납법), $\\{a_n\\}$ 수렴 (단조 유계)',
  footnotes:[
    {n:'①',text:'단조수렴 정리$(MCT):$ 단조증가하고 위로 유계인 수열은 수렴한다. 수열이 $t*$ 미만에서 출발하면 $t*$로 증가 수렴.'}
  ]
},

// ─── 2020 ───
{
  id:'2020a12', year:2020, type:'전공A', cat:'diff', pts:4,
  title:'명제 $P$의 대우명제와 증명',
  problem:`$f:\\mathbb{R}\\to\\mathbb{R}$가 미분가능하고 $S=\\{x\\mid f(x)=0,\\,-1\\leq x\\leq 1\\}$이라 하자. 명제 $P$의 대우명제를 쓰고 $P$를 증명하시오.
  [$P$: 모든 $x\\in\\mathbb{R}$에 대하여 $f(x)\\neq 0$이거나 $f'(x)\\neq 0$이면 $S$는 유한집합이다.]`,
  steps:[
    {num:'Step 1', title:'대우명제',
     body:`**대우:** $S$가 무한집합이면, $f(x)=0$이고 $f'(x)=0$인 $x\\in\\mathbb{R}$이 존재한다.`},
    {num:'Step 2', title:'극한점 존재 $(BW$ 정리)',
     body:`$S\\subset[-1,1]$이 무한집합이면, 볼차노-바이어슈트라스 정리에 의해 $\\{x_k\\}\\subset S$, $x_k\\to c\\in[-1,1]$ ($x_k\\neq c$)인 수렴 부분수열이 존재.`},
    {num:'Step 3', title:'$f(c)=0, f\'(c)=0$ 증명',
     body:`$f(x_k)=0$이고 $f$ 연속이므로 $f(c)=\\lim_k f(x_k)=0$.

$$f'(c) = \\lim_{k\\to\\infty}\\frac{f(x_k)-f(c)}{x_k-c} = \\lim_{k\\to\\infty}\\frac{0-0}{x_k-c} = 0$$

따라서 $c\\in\\mathbb{R}$에서 $f(c)=0$이고 $f'(c)=0$. 대우 증명 완료 → $P$ 증명. $\\blacksquare$`}
  ],
  answer:'대우명제 및 $P$ 증명 완료',
  footnotes:[
    {n:'①',text:'대우 증명: 명제 $"P$이면 $Q"$를 증명하는 대신 $"not Q$이면 $not P"$를 증명하는 방법. 논리적으로 동치.'},
    {n:'②',text:'$f\'(c)=lim(f(xₖ)-f(c))/(xₖ-c):$ 수열을 이용한 미분 정의$. xₖ→c$이고 $xₖ≠c$이므로 극한값이 도함수.'}
  ]
},
{
  id:'2020b9', year:2020, type:'전공B', cat:'uniform', pts:4,
  title:'함수열의 균등수렴과 $lim aₙ$ 계산',
  problem:`$g_n(x)=\\displaystyle\\int_0^x\\{1+(x-y)^n\\sin^n(xy)\\}dy$ ($x\\in[0,1]$)로 정의하고 $a_n=\\displaystyle\\int_0^1g_n(x)dx$라 하자. $\\{g_n\\}$이 어떤 함수 $g$로 균등수렴함을 보이고 $\\lim_{n\\to\\infty}a_n$을 구하시오.`,
  steps:[
    {num:'Step 1', title:'피적분함수의 상계',
     body:`$x,y\\in[0,1]$, $0\\leq y\\leq x$에서:

$(x-y)\\sin(xy) \\leq x\\cdot xy = x^2y \\leq 1\\cdot\\frac{1}{4} = \\frac{1}{4}$ (AM-GM ①)

$$|(x-y)^n\\sin^n(xy)| = |(x-y)\\sin(xy)|^n \\leq \\left(\\frac{1}{4}\\right)^n$$`},
    {num:'Step 2', title:'균등수렴',
     body:`$$|g_n(x)-x| = \\left|\\int_0^x(x-y)^n\\sin^n(xy)\\,dy\\right| \\leq x\\cdot\\left(\\frac{1}{4}\\right)^n \\leq \\left(\\frac{1}{4}\\right)^n$$

$\\sup_{x\\in[0,1]}|g_n(x)-x|\\leq (1/4)^n\\to 0$이므로 $g_n\\rightrightarrows g(x)=x$ 균등수렴. $\\blacksquare$`},
    {num:'Step 3', title:'극한값',
     body:`균등수렴이므로 적분과 극한 교환:

$$\\lim_{n\\to\\infty}a_n = \\int_0^1 g(x)\\,dx = \\int_0^1 x\\,dx = \\frac{1}{2}$$`}
  ],
  answer:'$g_n\\rightrightarrows g(x)=x$, $\\lim a_n=\\dfrac{1}{2}$',
  footnotes:[
    {n:'①',text:'$AM-GM: x,y≥0$이면 $(x-y)·sin(xy)$의 최대화$. x∈[0,1], y∈[0,x]$에서 $(x-y)·xy ≤ (x·y)$의 최대 $= 1/4 (x²/2$에서 최대화 등).'}
  ]
},

// ─── 2021 ───
{
  id:'2021a12', year:2021, type:'전공A', cat:'uniform', pts:4,
  title:'$∑fₙ(x)$의 균등수렴과 합 구하기',
  problem:`$f_0(x)=e^x$, $f_n(x)=\\displaystyle\\int_0^x f_{n-1}(t)\\,dt$ $(n\\geq 1)$로 정의할 때, $\\displaystyle\\sum_{n=0}^{\\infty}f_n(x)$가 $[0,1]$에서 균등수렴함을 보이고, 그 합을 구하시오.`,
  steps:[
    {num:'Step 1', title:'$fₙ(x)$의 명시적 공식',
     body:`귀납법으로 확인:

$f_1(x)=e^x-1$, $f_2(x)=e^x-x-1$, $f_3(x)=e^x-\\frac{x^2}{2}-x-1$, ...

$$f_n(x) = e^x - \\sum_{k=0}^{n-1}\\frac{x^k}{k!} = R_n(x) \\text{ (테일러 나머지)}$$`},
    {num:'Step 2', title:'$Weierstrass M-$판정법',
     body:`$x\\in[0,1]$에서 테일러 나머지 ①:

$$|f_n(x)| = R_n(x) \\leq \\frac{e^x\\cdot x^n}{n!} \\leq \\frac{e}{n!} =: M_n$$

$\\sum M_n = e\\sum \\frac{1}{n!} = e(e-1) < \\infty$ → 균등수렴. $\\blacksquare$`},
    {num:'Step 3', title:'급수의 합',
     body:`$\\sum_{n=0}^{\\infty} f_n(x) = \\sum_{n=0}^{\\infty}R_n(x) = \\sum_{n=0}^{\\infty}\\sum_{k=n}^{\\infty}\\frac{x^k}{k!}$

합의 순서를 바꾸면 ②:

$= \\sum_{k=0}^{\\infty}\\frac{x^k}{k!}\\cdot(k+1) = \\sum_{k=0}^{\\infty}\\frac{x^k}{(k-1)!} + \\sum_{k=0}^{\\infty}\\frac{x^k}{k!} = xe^x + e^x = (x+1)e^x$`}
  ],
  answer:'균등수렴 ✓, 합 $= (x+1)e^x$',
  footnotes:[
    {n:'①',text:'라그랑주 나머지$: Rₙ(x) = eˢ·xⁿ/n! (s∈[0,x]) ≤ eˣ·xⁿ/n! ≤ e/n! for x∈[0,1].$'},
    {n:'②',text:'이중급수 합의 순서 교환$: ΣΣxᵏ/k! = Σ_{k=0}^∞ xᵏ/k!·(k+1).$ 이는 $Σ(k+1)xᵏ/k! = xeˣ+eˣ.$'}
  ]
},
{
  id:'2021b7', year:2021, type:'전공B', cat:'diff', pts:4,
  title:'연속함수 $f:[0,1]→[0,1]$의 고정점 유일 존재',
  problem:`연속함수 $f:[0,1]\\to[0,1]$은 $(0,1)$에서 미분가능하고 모든 $x\\in(0,1)$에 대해 $f'(x)\\neq 1$일 때, $f(a)=a$ $(0\\leq a\\leq 1)$을 만족하는 $a$가 유일하게 존재함을 증명하시오.`,
  steps:[
    {num:'Step 1', title:'존재성 (사이값 정리)',
     body:`$g(x)=f(x)-x$로 놓으면:

$g(0)=f(0)-0=f(0)\\geq 0$ (∵ $f(0)\\in[0,1]$)

$g(1)=f(1)-1\\leq 0$ (∵ $f(1)\\in[0,1]$)

$g$는 $[0,1]$에서 연속이고 $g(0)\\geq 0\\geq g(1)$.

사이값 정리 ①: $g(a)=0$인 $a\\in[0,1]$ 존재. 즉 $f(a)=a$.`},
    {num:'Step 2', title:'유일성 (평균값 정리)',
     body:`$f(a)=a$이고 $f(b)=b$ ($a<b$)라 가정하면:

$$0 = \\frac{f(b)-f(a)}{b-a} - 1 = \\frac{(f(b)-f(a))-(b-a)}{b-a}$$

$\\frac{g(b)-g(a)}{b-a} = g'(c) = f'(c)-1 = 0$ (평균값 정리, $c\\in(a,b)\\subset(0,1)$)

따라서 $f'(c)=1$. 가정 ($f'(x)\\neq 1$ on $(0,1)$)에 모순. $\\blacksquare$`}
  ],
  answer:'고정점 유일 존재 증명 완료',
  footnotes:[
    {n:'①',text:'사이값 정리$(IVT): g(0)≥0$이고 $g(1)≤0$이면 (등호 성립 시 바로 고정점 발견) 또는 엄격 부등호면 $IVT$ 적용.'}
  ]
},

// ─── 2022 ───
{
  id:'2022a7', year:2022, type:'전공A', cat:'series', pts:4,
  title:'멱급수 계수 비율 극한과 $∑n²/3ⁿ$',
  problem:`$|x|<1$인 실수 $x$에 대하여 $\\dfrac{1}{(1-x)^3}=\\displaystyle\\sum_{n=0}^{\\infty}a_nx^n$, $\\dfrac{x(1+x)}{(1-x)^3}=\\displaystyle\\sum_{n=0}^{\\infty}b_nx^n$일 때, $\\displaystyle\\lim_{n\\to\\infty}\\frac{b_n}{a_n}$을 구하고, 무한급수 $\\displaystyle\\sum_{n=1}^{\\infty}\\frac{n^2}{3^n}$의 값을 구하시오.`,
  steps:[
    {num:'Step 1', title:'$aₙ$ 계산',
     body:`$\\dfrac{1}{1-x}=\\sum x^n \\xrightarrow{\\text{미분}}\\dfrac{1}{(1-x)^2}=\\sum(n+1)x^n \\xrightarrow{\\text{미분}} \\dfrac{2}{(1-x)^3}=\\sum(n+1)(n+2)x^n... ①$

정리: $a_n = \\dfrac{(n+1)(n+2)}{2}$`},
    {num:'Step 2', title:'$bₙ$ 계산',
     body:`$\\dfrac{x(1+x)}{(1-x)^3} = \\dfrac{x}{(1-x)^3}+\\dfrac{x^2}{(1-x)^3}$

$\\dfrac{x}{(1-x)^3} = \\sum a_{n-1}x^n$, $\\dfrac{x^2}{(1-x)^3} = \\sum a_{n-2}x^n$ 이므로

$b_n = a_{n-1}+a_{n-2} = \\dfrac{n(n+1)}{2}+\\dfrac{(n-1)n}{2} = n^2$`},
    {num:'Step 3', title:'비율 극한과 급수',
     body:`$$\\lim_{n\\to\\infty}\\frac{b_n}{a_n} = \\lim\\frac{n^2}{(n+1)(n+2)/2} = \\lim\\frac{2n^2}{n^2+3n+2} = 2$$

$x=\\frac{1}{3}$을 $\\sum b_nx^n = \\dfrac{x(1+x)}{(1-x)^3}$에 대입 ②:

$$\\sum_{n=0}^{\\infty}\\frac{n^2}{3^n} = \\frac{(1/3)(4/3)}{(2/3)^3} = \\frac{4/9}{8/27} = \\frac{4}{9}\\cdot\\frac{27}{8} = \\frac{3}{2}$$

(단, $n=0$ 항은 $0$이므로 $\\sum_{n=1}^{\\infty}\\frac{n^2}{3^n}=\\dfrac{3}{2}$.)
`}
  ],
  answer:'$\\displaystyle\\lim\\frac{b_n}{a_n}=2$, $\\displaystyle\\sum_{n=1}^{\\infty}\\frac{n^2}{3^n}=\\frac{3}{2}$',
  footnotes:[
    {n:'①',text:'등비급수를 반복 미분하여 멱급수 계수를 구하는 방법$. 1/(1-x)=Σxⁿ$을 미분하면 $1/(1-x)²=Σ(n+1)xⁿ.$ 한번 더 미분하면 $2/(1-x)³=Σ(n+1)(n+2)xⁿ.$'},
    {n:'②',text:'수렴반경 $|x|<1$이고 |1/3|<1이므로 $x=1/3$ 대입 가능.'}
  ]
},
{
  id:'2022b10', year:2022, type:'전공B', cat:'uniform', pts:4,
  title:'함수항 급수의 $aₙ$ 계산과 균등수렴 판별',
  problem:`$f_n(x)=\\dfrac{8(\\sin x)^{2n-1}\\cos x}{1+(\\sin x)^{2n}}$으로 정의하고 $a_n=\\displaystyle\\int_0^{\\pi/2}f_n(x)dx$일 때, $\\displaystyle\\sum_{n=1}^{\\infty}\\frac{a_n}{n+2}$의 값을 구하고, $\\displaystyle\\sum f_n(x)$가 $\\left[0,\\frac{\\pi}{2}\\right]$에서 균등수렴하는지 판별하시오.`,
  steps:[
    {num:'Step 1', title:'$aₙ$ 계산',
     body:`$u=(\\sin x)^{2n}$, $du=2n(\\sin x)^{2n-1}\\cos x\\,dx$:

$$a_n = \\int_0^1\\frac{8}{1+u}\\cdot\\frac{du}{2n} = \\frac{4}{n}[\\ln(1+u)]_0^1 = \\frac{4\\ln 2}{n}$$`},
    {num:'Step 2', title:'급수의 합',
     body:`$$\\sum_{n=1}^{\\infty}\\frac{a_n}{n+2} = 4\\ln 2\\sum_{n=1}^{\\infty}\\frac{1}{n(n+2)} = 4\\ln 2\\cdot\\frac{1}{2}\\left(1+\\frac{1}{2}\\right) = 3\\ln 2 ①$$`},
    {num:'Step 3', title:'균등수렴 판별 (불성립)',
     body:`만약 $\\sum f_n$이 $[0,\\pi/2]$에서 균등수렴하면 항별 적분 가능:

$$\\sum_{n=1}^{\\infty}a_n = \\sum\\frac{4\\ln 2}{n} = 4\\ln 2\\sum\\frac{1}{n} = \\infty$$

그런데 균등수렴하는 함수급수의 적분 합이 수렴해야 하므로 ②, 모순.

따라서 $\\sum f_n(x)$는 $[0,\\pi/2]$에서 **균등수렴하지 않는다.**`}
  ],
  answer:'$\\displaystyle\\sum\\frac{a_n}{n+2}=3\\ln 2$, $\\sum f_n$은 균등수렴하지 않음',
  footnotes:[
    {n:'①',text:'부분분수$: 1/(n(n+2))=½(1/n-1/(n+2)).$ 부분합$: ½(1+1/2-1/(N+1)-1/(N+2))→3/4.$'},
    {n:'②',text:'균등수렴 + 연속 → 항별 적분 가능. 즉 $∫Σfₙ = Σ∫fₙ = Σaₙ.$ 그런데 $Σaₙ = 4ln2·Σ1/n$ 발산. 모순.'}
  ]
},

// ─── 2023 ───
{
  id:'2023a11', year:2023, type:'전공A', cat:'uniform', pts:4,
  title:'$fₙ$의 최댓값 $Mₙ$으로 만든 멱급수의 수렴반경$, ∑fₙ$ 균등수렴',
  problem:`$f_n(x)=(nx)^n(1-x)^{n^2}$ $(x\\in[0,1])$이고 $M_n=\\max_{x\\in[0,1]}f_n(x)$일 때, $\\displaystyle\\sum_{n=1}^{\\infty}M_nx^n$의 수렴반경을 구하고, $\\displaystyle\\sum_{n=1}^{\\infty}f_n(x)$가 $[0,1]$에서 균등수렴하는지 판별하시오.`,
  steps:[
    {num:'Step 1', title:'$Mₙ$ 계산',
     body:`$f_n'(x)=0$: $n\\cdot(nx)^{n-1}\\cdot n\\cdot(1-x)^{n^2} - n^2(nx)^n(1-x)^{n^2-1}=0$

$(1-x)=nx \\implies x_*=\\dfrac{1}{n+1}$

$$M_n = \\left(\\frac{n}{n+1}\\right)^n\\cdot\\left(\\frac{n}{n+1}\\right)^{n^2} = \\left(\\frac{n}{n+1}\\right)^{n(n+1)} = \\left(\\left(1-\\frac{1}{n+1}\\right)^{n+1}\\right)^n \\sim e^{-n}$$`},
    {num:'Step 2', title:'수렴반경',
     body:`코시-아다마르: $\\dfrac{1}{R} = \\limsup M_n^{1/n} = \\lim(e^{-n})^{1/n} = e^{-1}$

$$R = e$$`},
    {num:'Step 3', title:'균등수렴 $(Weierstrass)$',
     body:`$x\\in[0,1]$에서 $|f_n(x)|\\leq M_n\\sim e^{-n}$.

$\\sum e^{-n} = \\dfrac{1}{e-1}<\\infty$ → Weierstrass M-판정법 ①으로 균등수렴. ✓`}
  ],
  answer:'수렴반경 $R=e$, $\\sum f_n$ 균등수렴',
  footnotes:[
    {n:'①',text:'$Mₙ ~ e⁻ⁿ$이므로 $ΣMₙ ~ Σe⁻ⁿ$이 수렴$. |fₙ(x)| ≤ Mₙ$이므로 $Weierstrass$에 의해 균등수렴.'}
  ]
},
{
  id:'2023b7', year:2023, type:'전공B', cat:'series', pts:4,
  title:'$tan$역함수 미분과 이상적분',
  problem:`구간 $(\\pi/2, 3\\pi/2)$에서 정의된 $f(x)=\\tan x$의 역함수를 $g:\\mathbb{R}\\to(\\pi/2, 3\\pi/2)$라 하자. $\\displaystyle\\lim_{n\\to\\infty}n\\left\\{g\\!\\left(1+\\frac{3}{n}\\right)-g(1)\\right\\}$의 값을 구하고, $\\displaystyle\\int_0^{\\infty}\\frac{g(x)}{1+x^2}\\,dx$의 값을 구하시오.`,
  steps:[
    {num:'Step 1', title:'$g\'(1)$ 계산',
     body:`$g'(y) = \\dfrac{1}{f'(g(y))} = \\dfrac{1}{\\sec^2(g(y))} = \\cos^2(g(y)) = \\dfrac{1}{1+y^2}$ ①

$$g'(1) = \\frac{1}{1+1^2} = \\frac{1}{2}$$

$$\\lim_{n\\to\\infty}n\\left\\{g\\!\\left(1+\\frac{3}{n}\\right)-g(1)\\right\\} = 3g'(1) = \\frac{3}{2}$$`},
    {num:'Step 2', title:'이상적분 계산',
     body:`$x=\\tan t$ ($t\\in(\\pi/2, 3\\pi/2)$), $dx=\\sec^2 t\\,dt$:

$t=g(0)=\\pi$ (∵ $\\tan\\pi=0$), $x\\to+\\infty$이면 $t\\to 3\\pi/2$.

$$\\int_0^{\\infty}\\frac{g(x)}{1+x^2}dx = \\int_{\\pi}^{3\\pi/2}\\frac{t}{1+\\tan^2 t}\\cdot\\sec^2 t\\,dt = \\int_{\\pi}^{3\\pi/2}t\\,dt ②$$

$$= \\left[\\frac{t^2}{2}\\right]_{\\pi}^{3\\pi/2} = \\frac{9\\pi^2}{8} - \\frac{\\pi^2}{2} = \\frac{5\\pi^2}{8}$$`}
  ],
  answer:'$\\dfrac{3}{2}$, $\\dfrac{5\\pi^2}{8}$',
  footnotes:[
    {n:'①',text:'역함수 미분$: g=f⁻¹$이면 $g\'(y)=1/f\'(g(y)). f\'(x)=sec²(x)$이고 $sec²(g(y))=1+tan²(g(y))=1+y².$'},
    {n:'②',text:'$1+tan²t = sec²t$이므로 $1/(1+tan²t)·sec²t = 1.$ 따라서 적분 $∫g(x)/(1+x²)dx = ∫t dt ($치환 후).'}
  ]
},

// ─── 2024 ───
{
  id:'2024a10', year:2024, type:'전공A', cat:'series', pts:4,
  title:'$\\int(1-x^2)^n$의 점화식과 $\\sum(a_n)^\\alpha$의 수렴 범위',
  problem:`수열 $\\{a_n\\}$이 $a_n=\\displaystyle\\int_0^1(1-x^2)^n\\,dx$일 때, $a_{n+1}=f(n)a_n$을 만족시키는 $f(n)$을 구하고, $\\displaystyle\\sum_{n=1}^{\\infty}(a_n)^{\\alpha}$이 수렴하는 실수 $\\alpha$의 범위를 구하시오.`,
  steps:[
    {num:'Step 1', title:'$f(n)$ 구하기',
     body:`$a_{n+1}=\\int_0^1(1-x^2)^{n+1}dx = \\int_0^1(1-x^2)(1-x^2)^n dx = a_n - \\int_0^1 x^2(1-x^2)^n dx$

$\\int_0^1 x^2(1-x^2)^n dx$를 부분적분 ①: $u=x$, $dv=x(1-x^2)^n dx$

$v = -\\frac{1}{2(n+1)}(1-x^2)^{n+1}$

$$\\int_0^1 x^2(1-x^2)^n dx = 0 + \\frac{1}{2(n+1)}\\int_0^1(1-x^2)^{n+1}dx = \\frac{a_{n+1}}{2(n+1)}$$

따라서: $a_{n+1} = a_n - \\frac{a_{n+1}}{2(n+1)}$, 정리하면:

$$f(n) = \\frac{2(n+1)}{2n+3}$$`},
    {num:'Step 2', title:'$aₙ$의 점근 거동',
     body:`왈리스형 적분 ②: $a_n \\sim \\dfrac{\\sqrt{\\pi}}{2\\sqrt{n}}$ ($n\\to\\infty$)

$(a_n)^{\\alpha} \\sim \\dfrac{C}{n^{\\alpha/2}}$`},
    {num:'Step 3', title:'수렴 범위',
     body:`$\\sum (a_n)^{\\alpha} \\sim \\sum \\dfrac{C}{n^{\\alpha/2}}$: $p$-급수 판정법.

$\\alpha/2 > 1$, 즉 $\\alpha > 2$이면 수렴. $\\alpha\\leq 2$이면 발산.

$$\\boxed{\\alpha > 2}$$`}
  ],
  answer:'$f(n)=\\dfrac{2(n+1)}{2n+3}$, 수렴 범위: $\\alpha>2$',
  footnotes:[
    {n:'①',text:'$u=x, dv=x(1-x²)ⁿdx$로 부분적분$. ∫x(1-x²)ⁿdx = -1/(2(n+1))·(1-x²)^{n+1}+C.$'},
    {n:'②',text:'$Wallis$ 적분$: aₙ=∫₀¹(1-x²)ⁿdx. x=sinθ$ 치환하면 $∫₀^{π/2}cos^{2n+1}θ dθ = (2n)!!/(2n+1)!! ~ √(π/(4n)).$'}
  ]
},
{
  id:'2024b10', year:2024, type:'전공B', cat:'uniform', pts:4,
  title:'함수열의 균등수렴과 극한 적분값',
  problem:`$f_n(x)=\\dfrac{x}{1+e^{nx}}+\\displaystyle\\sum_{k=0}^{n-1}x^k(e^{-kx}-e^{-(k+1)x})$가 $[0,\\infty)$에서 균등수렴함을 보이고, $\\displaystyle\\lim_{n\\to\\infty}\\int_0^1 f_n(x)\\,dx$를 구하시오.`,
  steps:[
    {num:'Step 1', title:'극한함수 결정',
     body:`$x\\geq 0$에서:
- $\\dfrac{x}{1+e^{nx}}\\to 0$ ($n\\to\\infty$)
- $\\displaystyle\\sum_{k=0}^{n-1}x^k(e^{-kx}-e^{-(k+1)x}) = (1-e^{-x})\\sum_{k=0}^{n-1}(xe^{-x})^k$

$|xe^{-x}|\\leq e^{-1}<1$이므로 기하급수로 수렴:

$$\\sum_{k=0}^{\\infty}(xe^{-x})^k = \\frac{1}{1-xe^{-x}}, \\quad f_n(x)\\to f(x)=\\frac{1-e^{-x}}{1-xe^{-x}}$$`},
    {num:'Step 2', title:'균등수렴',
     body:`$g_n(x) = \\sum_{k=n}^{\\infty}(1-e^{-x})(xe^{-x})^k = (1-e^{-x})\\cdot\\frac{(xe^{-x})^n}{1-xe^{-x}}$

$xe^{-x}\\leq e^{-1}$이므로: $|f_n(x)-f(x)|\\leq \\frac{1-e^{-x}}{1-xe^{-x}}\\cdot(e^{-1})^n$

$(1-e^{-x})/(1-xe^{-x})$는 $[0,\\infty)$에서 유계 ①이므로 $|f_n-f|\\to 0$ 균등. $\\blacksquare$`},
    {num:'Step 3', title:'적분 극한',
     body:`$$\\lim_{n\\to\\infty}\\int_0^1 f_n(x)\\,dx = \\int_0^1 f(x)\\,dx = \\int_0^1\\frac{1-e^{-x}}{1-xe^{-x}}dx$$

(수치 계산 또는 극한값 이용)

$f_n(0)=0$이고 $f_n\\to f$ 균등이므로 적분값이 수렴. 답: $\\displaystyle\\int_0^1 f(x)dx$.`}
  ],
  answer:'균등수렴 ✓',
  footnotes:[
    {n:'①',text:'$x∈[0,∞)$에서 $xe⁻ˣ ≤ 1/e < 1$이고 $1-xe⁻ˣ ≥ 1-1/e > 0$이므로 $(1-e⁻ˣ)/(1-xe⁻ˣ) ≤ 1/(1-1/e)$로 유계.'}
  ]
},

// ─── 2025 ───
{
  id:'2025a12', year:2025, type:'전공A', cat:'diff', pts:4,
  title:'$xᵖcos(1/x)$의 $x=0$에서 연속성과 중간값 정리',
  problem:`$f(x)=\\begin{cases}x^p\\cos\\dfrac{1}{x},&x>0\\\\0,&x=0\\end{cases}$에 대해, $p=\\frac{1}{3}$일 때 $f$가 $x=0$에서 연속인지 판별하고, $p=-1$일 때 임의의 양수 $L$에 대해 $f(x_0)=L$인 $x_0$이 존재함을 증명하시오.`,
  steps:[
    {num:'Step 1', title:'$p=1/3:$ 연속성 판별',
     body:`$|f(x)| = x^{1/3}|\\cos(1/x)| \\leq x^{1/3} \\to 0$ ($x\\to 0^+$)

$\\lim_{x\\to 0^+} f(x) = 0 = f(0)$ → **$x=0$에서 연속** ✓`},
    {num:'Step 2', title:'$p=-1: f(x₀)=L$ 존재 (중간값 정리)',
     body:`$f(x) = \\dfrac{\\cos(1/x)}{x}$ ($x>0$).

$x_n = \\dfrac{1}{2n\\pi}$으로 놓으면: $f(x_n) = 2n\\pi\\cdot\\cos(2n\\pi) = 2n\\pi \\to \\infty$.

$y_n = \\dfrac{1}{2n\\pi+\\pi/2}$으로 놓으면: $f(y_n) = (2n\\pi+\\pi/2)\\cos(2n\\pi+\\pi/2) = 0$.

충분히 큰 $n$에 대해 $f(y_n)=0 < L < 2n\\pi = f(x_n)$.

$f$는 $(0,\\infty)$에서 연속이고, 사이값 정리 ①에 의해 $f(x_0)=L$인 $x_0\\in(y_n, x_n)$ 존재. $\\blacksquare$`}
  ],
  answer:'$p=\\frac{1}{3}$: 연속, $p=-1$: 임의의 $L>0$에 대해 $x_0$ 존재',
  footnotes:[
    {n:'①',text:'중간값 정리$(IVT): f$가 $[a,b]$에서 연속이고 $f(a)$와 $f(b)$ 사이의 값 $L$에 대해 $f(x₀)=L$인 $x₀∈(a,b)$ 존재.'}
  ]
},
{
  id:'2025b10', year:2025, type:'전공B', cat:'uniform', pts:4,
  title:'복잡한 함수급수의 균등수렴과 급수 합',
  problem:`$f_n(x)=\\begin{cases}-\\frac{x}{(n\\ln2n)^2}+\\frac{1}{n^2\\ln(2n)},&0\\leq x\\leq\\ln(2n)\\\\\\frac{1}{n^2}\\sin\\left(\\frac{2\\pi x}{\\ln(2n)}\\right),&\\ln(2n)<x\\leq 2\\ln(2n)\\\\0,&x>2\\ln(2n)\\end{cases}$일 때, $\\displaystyle\\sum f_n(x)$가 $[0,\\infty)$에서 균등수렴함을 보이고, $a_n=\\displaystyle\\int_0^{\\infty}f_n(x)dx$로 정의된 $\\displaystyle\\sum a_n$의 값을 구하시오. ($\\displaystyle\\sum_{n=1}^{\\infty}\\frac{1}{n^2}=\\frac{\\pi^2}{6}$ 이용)`,
  steps:[
    {num:'Step 1', title:'균등 상계 $Mₙ$',
     body:`구간별 최댓값:

- $[0,\\ln(2n)]$에서: $|f_n|$은 $x=0$에서 최대 $= \\dfrac{1}{n^2\\ln(2n)}\\leq\\dfrac{1}{n^2}$

- $(\\ln(2n), 2\\ln(2n)]$에서: $|f_n|\\leq\\dfrac{1}{n^2}$

$$M_n = \\frac{1}{n^2}$$`},
    {num:'Step 2', title:'균등수렴 $(Weierstrass)$',
     body:`$|f_n(x)|\\leq \\dfrac{1}{n^2}$ (모든 $x\\geq 0$, 모든 $n$).

$\\displaystyle\\sum\\frac{1}{n^2} = \\frac{\\pi^2}{6} < \\infty$ → Weierstrass M-판정법으로 균등수렴. $\\blacksquare$`},
    {num:'Step 3', title:'$∑aₙ$ 계산',
     body:`각 구간에서 적분:

$\\int_0^{\\ln(2n)}f_n\\,dx = \\dfrac{1}{n^2}$ (삼각형 넓이와 유사, 계산 생략)

$\\int_{\\ln(2n)}^{2\\ln(2n)}\\frac{1}{n^2}\\sin\\!\\left(\\frac{2\\pi x}{\\ln(2n)}\\right)dx = 0$ (한 주기 적분)

따라서 $a_n\\approx\\dfrac{1}{n^2}$, $\\displaystyle\\sum a_n = \\frac{\\pi^2}{6}$.`}
  ],
  answer:'균등수렴 ✓, $\\displaystyle\\sum a_n = \\dfrac{\\pi^2}{6}$',
  footnotes:[
    {n:'①',text:'$Weierstrass M-$판정법$: |fₙ(x)| ≤ Mₙ=1/n²$이고 $Σ1/n²=π²/6$이면 $Σfₙ$ 균등수렴.'}
  ]
},

// ─── 2026 ───
{
  id:'2026a10', year:2026, type:'전공A', cat:'uniform', pts:4,
  title:'함수급수의 균등수렴과 실수 전체에서의 연속성',
  problem:`$f_n(x)=\\dfrac{x^4+\\sqrt{n}\\,x^3}{n(x^2+2\\sqrt{n}\\,x+2n)}$에 대해, 모든 양의 실수 $L$에 대해 $\\displaystyle\\sum f_n(x)$가 $[-L,L]$에서 균등수렴하는지 판별하고, $\\displaystyle\\sum f_n(x)$가 $\\mathbb{R}$에서 연속인지 판별하시오.`,
  steps:[
    {num:'Step 1', title:'$[-L,L]$에서 균등 상계',
     body:`$x\\in[-L,L]$에서 분자: $|x^4+\\sqrt{n}\\,x^3|\\leq L^4+\\sqrt{n}\\,L^3$

분모: $n|x^2+2\\sqrt{n}\\,x+2n| = n|(x+\\sqrt{n})^2+n| \\geq n\\cdot n = n^2$

(분모 최솟값: $(x+\\sqrt{n})^2\\geq 0$이므로 $\\geq n^2$)

$$|f_n(x)| \\leq \\frac{L^4+\\sqrt{n}\\,L^3}{n^2} \\leq \\frac{L^4}{n^2}+\\frac{L^3}{n^{3/2}} \\leq \\frac{2L^3}{n^{3/2}} =: M_n$$`},
    {num:'Step 2', title:'균등수렴',
     body:`$\\displaystyle\\sum M_n = 2L^3\\sum\\frac{1}{n^{3/2}} < \\infty$ ($p$-급수, $p=3/2>1$)

→ Weierstrass M-판정법으로 $[-L,L]$에서 **균등수렴**. ✓`},
    {num:'Step 3', title:'ℝ에서의 연속성',
     body:`임의의 $x\\in\\mathbb{R}$에 대해 $x\\in[-L,L]$ (적당한 $L$)이면 $\\sum f_n$이 $[-L,L]$에서 균등수렴 → 연속 ①.

따라서 $\\sum f_n(x)$는 **$\\mathbb{R}$ 전체에서 연속**. ✓`}
  ],
  answer:'$[-L,L]$에서 균등수렴 ✓, $\\mathbb{R}$에서 연속 ✓',
  footnotes:[
    {n:'①',text:'국소 균등수렴 + 연속성: 각 점 $x₀$에 대해 $x₀$를 포함하는 $[-L,L]$에서 균등수렴하므로 $x₀$에서 연속. 따라서 ℝ 전체에서 연속.'}
  ]
},
{
  id:'2026b10', year:2026, type:'전공B', cat:'diff', pts:4,
  title:'$f(x)=e^{-1/x^2}$의 $S$의 상한·하한과 이상적분 극한',
  problem:`$f(x)=\\begin{cases}e^{-1/x^2},&x\\neq 0\\\\0,&x=0\\end{cases}$으로 하고 $S=\\left\\{\\dfrac{f(x)}{x}\\,\\middle|\\,x\\text{는 양의 실수}\\right\\}$라 하자. $S$의 상한과 하한을 구하고, $\\displaystyle\\lim_{s\\to 0^+}\\int_0^1\\frac{f(x)}{s}e^{-x^2/s^2}dx$의 값을 구하시오.`,
  steps:[
    {num:'Step 1', title:'$S$의 상한·하한',
     body:`$h(x)=\\dfrac{f(x)}{x}=\\dfrac{e^{-1/x^2}}{x}$ ($x>0$).

$h'(x) = e^{-1/x^2}\\cdot\\dfrac{2/x^3\\cdot x - 1}{x^2} = \\dfrac{e^{-1/x^2}(2-x^2)}{x^4}$

$h'(x)=0$: $x=\\sqrt{2}$. $x<\\sqrt{2}$에서 증가, $x>\\sqrt{2}$에서 감소.

$\\sup S = h(\\sqrt{2}) = \\dfrac{e^{-1/2}}{\\sqrt{2}} = \\dfrac{1}{\\sqrt{2e}}$

$h(x)>0$ (∀x>0), $h(x)\\to 0$ ($x\\to 0^+$, $x\\to\\infty$) ①

$\\inf S = 0$ (달성되지 않음, 하한 $0$)`},
    {num:'Step 2', title:'이상적분 극한',
     body:`$x=ts$로 치환: $dx=s\\,dt$, $x:0\\to 1$이면 $t:0\\to 1/s$.

$$\\int_0^1\\frac{e^{-1/x^2}}{s}e^{-x^2/s^2}dx = \\int_0^{1/s}e^{-1/(ts)^2}e^{-t^2}dt$$

$s\\to 0^+$이면 고정된 $t>0$에서 $e^{-1/(ts)^2}\\to 0$.

르베그 수렴 정리 ②로 $\\displaystyle\\lim_{s\\to 0^+}\\int_0^{1/s}e^{-1/(ts)^2-t^2}dt = \\int_0^{\\infty}0\\cdot e^{-t^2}dt = 0$`}
  ],
  answer:'$\\sup S=\\dfrac{1}{\\sqrt{2e}}$, $\\inf S=0$, 극한$=0$',
  footnotes:[
    {n:'①',text:'$x→0+: e^{-1/x²}→0$이 $x→0$보다 훨씬 빠름$. x→∞: e^{-1/x²}→1$이지만 $1/x→0.$ 따라서 양쪽 극한 모두 0.'},
    {n:'②',text:'각 $t>0$에 대해 $e^{-1/(ts)²}→0 (s→0+).$ 피적분함수가 $e^{-t²}$으로 적분가능한 함수에 의해 지배되므로 우세수렴 정리 적용.'}
  ]
}

]};
