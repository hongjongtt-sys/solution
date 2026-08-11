window.SUBJECTS = window.SUBJECTS || {};

window.SUBJECTS['정수론'] = {
  label: '정수론',
  categories: [
    { id:'cong',     name:'합동방정식·CRT',      color:'#2d6b5a', light:'#e6f7f2' },
    { id:'primroot', name:'원시근·위수·이산로그', color:'#5a3d8a', light:'#f2eef9' },
    { id:'legendre', name:'르장드르기호·이차잉여', color:'#8a5a1a', light:'#f9f0e6' }
  ],
  freqGroups: [
    {
      id:'cong', name:'합동방정식과 중국인의 나머지 정리', stars:'★★★★★', count:5, color:'#1f4f42',
      desc:'연립합동식, 거듭제곱 잉여의 개수, 오일러 파이함수',
      problems:['2015a4','2019b3','2020a7','2022b8','2026b7']
    },
    {
      id:'primroot', name:'원시근·위수·순환군의 부분군 구조', stars:'★★★★★', count:5, color:'#402861',
      desc:'원시근, 위수, 순환군 관점의 부분군 포함관계로 해의 개수 세기',
      problems:['2014a5','2016a13','2018a13','2021a11','2024b9']
    },
    {
      id:'legendre', name:'르장드르 기호와 이차잉여', stars:'★★★', count:3, color:'#61410f',
      desc:'르장드르 기호의 성질, 이차합동식의 가해성 판정',
      problems:['2017a13','2023b10','2025a11']
    }
  ],
  problems: [

// ───────────────────────────────────────
// 2014
// ───────────────────────────────────────
{
  id:'2014a5', year:2014, type:'전공A', cat:'primroot', pts:2,
  title:'$m^{18}$의 끝 두 자리로부터 $m^{294}$의 끝 두 자리 구하기',
  problem:`$10$과 서로소인 양의 정수 $m$에 대하여 $m^{18}$의 마지막 두 자리 수가 $21$이다. $m^{294}$의 마지막 두 자리 수를 구하시오.`,
  steps:[
    {num:'Step 1', title:'$gcd(18,40)=2$를 이용해 $m²$ 구하기',
     body:`$\\gcd(m,10)=1$이므로 $\\gcd(m,100)=1$이고 오일러 정리 ①에 의해 $m^{\\varphi(100)}=m^{40}\\equiv1\\pmod{100}$.

$\\gcd(18,40)=2$이므로 확장 유클리드 호제법으로 $18\\times9-40\\times4=2$를 얻습니다 ②:

$$m^2\\equiv(m^{18})^9(m^{40})^{-4}\\equiv21^9\\pmod{100}$$`},
    {num:'Step 2', title:'$21⁹ mod 100$ 계산',
     body:`$21^2=441\\equiv41$, $21^4\\equiv41^2=1681\\equiv81$, $21^8\\equiv81^2=6561\\equiv61$

$$21^9\\equiv61\\times21=1281\\equiv81\\pmod{100}$$

즉 $m^2\\equiv81\\pmod{100}$.`},
    {num:'Step 3', title:'$m$의 위수가 10임을 확인',
     body:`$81^2=6561\\equiv61$, $81^3\\equiv81\\times61=4941\\equiv41$, $81^4\\equiv81\\times41=3321\\equiv21$, $81^5\\equiv81\\times21=1701\\equiv1\\pmod{100}$

즉 $(m^2)^5=m^{10}\\equiv1\\pmod{100}$이므로 $m$의 위수는 $10$의 약수 ③.`},
    {num:'Step 4', title:'$294 mod 10$으로 최종 계산',
     body:`$294=29\\times10+4$이므로 $m^{294}\\equiv m^4\\pmod{100}$.

$m^4=(m^2)^2\\equiv81^2\\equiv61\\pmod{100}$

$$m^{294}\\text{의 마지막 두 자리}=61$$`}
  ],
  answer:'$61$',
  footnotes:[
    {n:'①',text:'오일러 정리$: gcd(a,n)=1$이면 $a^φ(n)≡1 (mod n).$'},
    {n:'②',text:'$gcd(18,40)=2$를 정수 조합 $18x+40y=2$로 표현할 수 있으면$, m^18$과 $m^40(≡1)$의 거듭제곱 조합으로 $m²$을 얻을 수 있다.'},
    {n:'③',text:'$m^10≡1$이 성립하면 $m$의 위수$(order)$는 10의 약수. 실제로 $m^18≡21$과도 정합적$(m^18=m^10·m^8≡m^8$이므로 $m^8≡21).$'}
  ]
},

// ───────────────────────────────────────
// 2015
// ───────────────────────────────────────
{
  id:'2015a4', year:2015, type:'전공A', cat:'cong', pts:5,
  title:'CRT로 세제곱 합동방정식의 해의 개수 구하기',
  problem:`다음 삼차 합동방정식에 대하여 $\\mathbb{Z}_{2015}$에 속하는 해의 개수를 풀이 과정과 함께 쓰시오. $x^3-8\\equiv0\\pmod{2015}$ (참고: $2015=5\\times13\\times31$)`,
  steps:[
    {num:'Step 1', title:'CRT로 세 소인수 모듈로 분해',
     body:`중국인의 나머지 정리 ①에 의해, 해의 총 개수는 $\\mod5,\\ \\mod13,\\ \\mod31$ 각각의 해의 개수의 곱과 같습니다.`},
    {num:'Step 2', title:'$mod 5:$ 세제곱이 전단사',
     body:`$\\varphi(5)=4$, $\\gcd(3,4)=1$이므로 $x\\mapsto x^3$은 전단사 ② → 해가 **정확히 $1$개**.

(직접 확인: $2^3=8\\equiv3\\pmod5$이므로 $x\\equiv2$가 유일해.)`},
    {num:'Step 3', title:'$mod 13:$ 세제곱근의 개수',
     body:`$\\varphi(13)=12$, $\\gcd(3,12)=3$이므로 $8$이 세제곱 잉여라면 해는 정확히 $3$개 ③.

직접 확인: $2^3=8,\\,5^3=125\\equiv8,\\,6^3=216\\equiv8\\pmod{13}$ — 모두 성립하므로 **$3$개**.`},
    {num:'Step 4', title:'$mod 31: 1$의 세제곱근을 이용',
     body:`$\\varphi(31)=30$, $\\gcd(3,30)=3$. $2^3=8$이므로 $x=2$는 해. $1$의 세제곱근(비자명) $\\omega$를 $\\omega^2+\\omega+1\\equiv0\\pmod{31}$로 구하면 $\\omega=5,\\,25$ ④.

나머지 해: $2\\times5=10$, $2\\times25=50\\equiv19$. 검산: $10^3=1000\\equiv8$, $19^3=6859\\equiv8\\pmod{31}$ 모두 성립 → **$3$개**.`},
    {num:'Step 5', title:'전체 해의 개수',
     body:`$$1\\times3\\times3=9$$`}
  ],
  answer:'$9$',
  footnotes:[
    {n:'①',text:'중국인의 나머지 정리(CRT): $n=p_1p_2p_3$(서로소)일 때 $\\bmod n$의 해는 각 소인수 모듈로의 해의 조합과 일대일 대응.'},
    {n:'②',text:'$gcd(k,φ(p))=1$이면 $x↦xᵏ (mod p)$는 전단사이므로 임의의 값에 대해 정확히 1개의 $k$제곱근이 존재.'},
    {n:'③',text:'$gcd(k,φ(p))=d>1$이면$, kᵗʰ$ 거듭제곱이 되는 수$(k$제곱 잉여)는 존재할 때 정확히 $d$개의 $k$제곱근을 갖는다.'},
    {n:'④',text:'$y³-1=(y-1)(y²+y+1)$이므로 비자명 세제곱근은 $y²+y+1≡0$의 해. 세 근의 합이 0이 되는 성질도 활용 가능.'}
  ]
},

// ───────────────────────────────────────
// 2016
// ───────────────────────────────────────
{
  id:'2016a13', year:2016, type:'전공A', cat:'primroot', pts:4,
  title:'원시근의 거듭제곱에서 원래 값으로 돌아가는 최소 지수',
  problem:`정수 $23$은 법(modulo) $89$에 대한 원시근(primitive root)이고, $89$는 소수이다. 정수 $a=23^{41}$에 대하여 $a^n\\equiv23\\pmod{89}$를 만족하는 가장 작은 양의 정수 $n$의 값을 풀이 과정과 함께 쓰시오.`,
  steps:[
    {num:'Step 1', title:'지수 방정식으로 변환',
     body:`$a^n=23^{41n}\\equiv23^1\\pmod{89}$. $23$이 원시근(위수 $88$) ①이므로 지수는 $\\mod88$로 비교:

$$41n\\equiv1\\pmod{88}$$`},
    {num:'Step 2', title:'41의 역원을 확장 유클리드 호제법으로 구하기',
     body:`$88=2\\times41+6$

$41=6\\times6+5$

$6=1\\times5+1$

역대입 ②: $1=6-5=6-(41-6\\times6)=7\\times6-41=7(88-2\\times41)-41=7\\times88-15\\times41$

$$-15\\times41\\equiv1\\pmod{88}\\ \\Rightarrow\\ 41^{-1}\\equiv-15\\equiv73\\pmod{88}$$`},
    {num:'Step 3', title:'최솟값 확인',
     body:`$n\\equiv73\\pmod{88}$이므로 가장 작은 양의 정수:

$$n=73$$

(검산: $41\\times73=2993=88\\times34+1$ ✓)`}
  ],
  answer:'$73$',
  footnotes:[
    {n:'①',text:'$r$이 법 $p$에 대한 원시근이면 위수$(order)$는 $p-1.$ 두 거듭제곱 $rˣ≡rʸ(mod p)$이면 $x≡y(mod p-1).$'},
    {n:'②',text:'확장 유클리드 호제법으로 $gcd(41,88)=1$을 $41x+88y=1$ 형태로 표현하면 $x$가 41의 $mod88$ 역원.'}
  ]
},

// ───────────────────────────────────────
// 2017
// ───────────────────────────────────────
{
  id:'2017a13', year:2017, type:'전공A', cat:'legendre', pts:4,
  title:'윌슨 정리와 르장드르 기호 합 계산',
  problem:`$1\\le k\\le2016$인 자연수 $k$에 대하여 $a_k=k!\\times(2017-k)!$일 때, 르장드르 기호(Legendre symbol)의 합 $\\displaystyle\\sum_{k=3}^{2014}\\left(\\frac{a_k}{2017}\\right)$의 값을 풀이 과정과 함께 쓰시오. (참고: $2017$은 소수이다.)`,
  steps:[
    {num:'Step 1', title:'윌슨 정리와 이항계수 성질로 $a_k$ 단순화',
     body:`$p=2017$. $a_k=k!(p-k)!=k!\\times(p-k)\\times(p-1-k)!=(p-k)\\dfrac{(p-1)!}{\\binom{p-1}k}$

윌슨 정리 ①: $(p-1)!\\equiv-1$. 이항계수 성질 ②: $\\binom{p-1}k\\equiv(-1)^k\\pmod p$.

$$a_k\\equiv(p-k)\\times\\frac{-1}{(-1)^k}=(p-k)(-1)^{k+1}$$`},
    {num:'Step 2', title:'$a_k ≡ (-1)^k · k$ 로 정리',
     body:`$p-k\\equiv-k\\pmod p$이므로:

$$a_k\\equiv-k(-1)^{k+1}=k(-1)^k\\pmod p$$`},
    {num:'Step 3', title:'르장드르 기호로 분리',
     body:`$$\\left(\\frac{a_k}p\\right)=\\left(\\frac{-1}p\\right)^k\\left(\\frac kp\\right)$$

$2017\\equiv1\\pmod4$이므로 $\\left(\\dfrac{-1}p\\right)=1$ ③. 따라서:

$$\\left(\\frac{a_k}p\\right)=\\left(\\frac kp\\right)$$`},
    {num:'Step 4', title:'전체 합 0에서 빠진 항 제거',
     body:`$\\displaystyle\\sum_{k=1}^{p-1}\\left(\\frac kp\\right)=0$ ④이므로:

$$\\sum_{k=3}^{2014}\\left(\\frac kp\\right)=0-\\left(\\frac1p\\right)-\\left(\\frac2p\\right)-\\left(\\frac{2015}p\\right)-\\left(\\frac{2016}p\\right)$$

$2015\\equiv-2,\\ 2016\\equiv-1\\pmod{2017}$이므로 $\\left(\\dfrac{2015}p\\right)=\\left(\\dfrac{-2}p\\right)=\\left(\\dfrac2p\\right)$, $\\left(\\dfrac{2016}p\\right)=\\left(\\dfrac{-1}p\\right)=1$.`},
    {num:'Step 5', title:'2가 이차잉여인지 판정 후 최종 계산',
     body:`$2017\\equiv1\\pmod8$이므로 $\\left(\\dfrac2p\\right)=1$ ⑤.

$$\\sum_{k=3}^{2014}\\left(\\frac kp\\right)=-1-1-1-1=-4$$`}
  ],
  answer:'$-4$',
  footnotes:[
    {n:'①',text:'윌슨 정리$: p$가 소수이면 $(p-1)!≡-1 (mod p).$'},
    {n:'②',text:'$C(p-1,k)=(p-1)(p-2)⋯(p-k)/k! ≡ (-1)(-2)⋯(-k)/k! = (-1)ᵏ (mod p).$'},
    {n:'③',text:'$(-1/p)=1 ⟺ p≡1(mod4). 2017=4×504+1$이므로 $p≡1(mod4).$'},
    {n:'④',text:'법 $p$의 완전잉여계 $1,…,p-1$ 중 이차잉여와 비잉여의 개수가 각각 $(p-1)/2$로 같으므로 르장드르 기호의 합은 0.'},
    {n:'⑤',text:'$(2/p)=1 ⟺ p≡±1(mod8). 2017=8×252+1$이므로 $p≡1(mod8).$'}
  ]
},
{
  id:'2018a13', year:2018, type:'전공A', cat:'primroot', pts:4,
  title:'인수분해와 부분군 크기로 해가 5개가 되는 $n$의 개수',
  problem:`합동식 $x^{n+5}-x^n-x^5+1\\equiv0\\pmod{131}$의 법 $131$에 대한 해의 개수가 $5$가 되도록 하는 $130$ 이하의 자연수 $n$의 개수를 풀이 과정과 함께 쓰시오.`,
  steps:[
    {num:'Step 1', title:'인수분해',
     body:`$$x^{n+5}-x^n-x^5+1=x^n(x^5-1)-(x^5-1)=(x^5-1)(x^n-1)$$

$131$은 소수이므로 $131|(x^5-1)(x^n-1)\\iff x^5\\equiv1$ 또는 $x^n\\equiv1\\pmod{131}$ ①.`},
    {num:'Step 2', title:'각 부분집합의 크기',
     body:`$131-1=130$. $x^5\\equiv1$의 해집합 $A$: $\\gcd(5,130)=5$이므로 $|A|=5$ ②.

$x^n\\equiv1$의 해집합 $B$: $|B|=\\gcd(n,130)=:d$.`},
    {num:'Step 3', title:'순환군에서 부분군 포함관계',
     body:`법$131$의 곱셈군은 위수 $130$인 순환군이므로, 위수 $5$와 위수 $d$의 부분군은 그 중 하나가 다른 하나를 포함 ③합니다: $5|d$이면 $A\\subseteq B$, $d|5$($d\\in\\{1,5\\}$)이면 $B\\subseteq A$.

$5|d$인 경우: $|A\\cup B|=d$. $=5$가 되려면 $d=5$.

$d\\in\\{1,5\\}$인 경우: $|A\\cup B|=|A|=5$ (항상 성립).

$\\gcd(5,d)=1$이고 $d\\ne1$인 경우: $|A\\cup B|=5+d-1=d+4\\ne5$ (단, $d=1$ 뿐).`},
    {num:'Step 4', title:'조건 정리와 개수 세기',
     body:`결국 $|A\\cup B|=5\\iff\\gcd(n,130)\\in\\{1,5\\}$.

$\\gcd(n,130)=1$인 $n$의 개수: $\\varphi(130)=\\varphi(2)\\varphi(5)\\varphi(13)=1\\times4\\times12=48$

$\\gcd(n,130)=5$인 $n$의 개수: $n=5m,\\ \\gcd(m,26)=1$, $m\\in[1,26]$ → $\\varphi(26)=\\varphi(2)\\varphi(13)=1\\times12=12$`},
    {num:'Step 5', title:'최종 합',
     body:`$$48+12=60$$`}
  ],
  answer:'$60$',
  footnotes:[
    {n:'①',text:'소수를 법으로 하는 정수환은 정역$(integral domain)$이므로 곱이 0이면 인수 중 하나가 0.'},
    {n:'②',text:'법 $p$의 곱셈군은 위수 $p-1$인 순환군$. xᵏ≡1$의 해는 정확히 $gcd(k,p-1)$개.'},
    {n:'③',text:'순환군에서는 각 약수마다 유일한 부분군이 존재하며, 위수 $d₁$인 부분군이 위수 $d₂$인 부분군에 포함되는 것은 정확히 $d₁|d₂$일 때.'}
  ]
},

// ───────────────────────────────────────
// 2019
// ───────────────────────────────────────
{
  id:'2019b3', year:2019, type:'전공B', cat:'cong', pts:4,
  title:'$φ(8m) = 4φ(m)$이 되는 $m$의 개수',
  problem:`자연수 $m$에 대하여 집합 $T_m$을 $T_m=\\{a\\in\\mathbb{N}\\mid a^{\\varphi(8m)}\\equiv1\\pmod{8m},\\,1\\le a\\le8m\\}$으로 정의할 때, 집합 $T_m$의 원소의 개수가 $4\\varphi(m)$이 되도록 하는 $100$ 이하의 자연수 $m$의 개수를 풀이 과정과 함께 쓰시오. (단, $\\mathbb{N}$은 자연수 전체의 집합이고, $\\varphi(n)\\,(n\\in\\mathbb{N})$은 $n$ 이하의 자연수 중에서 $n$과 서로소인 수의 개수로 정의되는 오일러 $\\varphi$-함수이다.)`,
  steps:[
    {num:'Step 1', title:'$T_m = 8m$과 서로소인 수들의 집합',
     body:`오일러 정리에 의해 $\\gcd(a,8m)=1$이면 $a^{\\varphi(8m)}\\equiv1$이 항상 성립하고, $\\gcd(a,8m)>1$이면 결코 성립하지 않습니다 ①. 따라서:

$$|T_m|=\\varphi(8m)$$

조건: $\\varphi(8m)=4\\varphi(m)$을 만족하는 $m$을 찾으면 됩니다.`},
    {num:'Step 2', title:'$m=2ᵉ·m\'(m\'$은 홀수)로 분해',
     body:`$8m=2^{e+3}m'$이므로 $\\varphi(8m)=2^{e+2}\\varphi(m')$ ②.

$e=0$($m$이 홀수)이면 $\\varphi(m)=\\varphi(m')$, $\\varphi(8m)=4\\varphi(m')=4\\varphi(m)$ — **항상 성립!**

$e\\ge1$($m$이 짝수)이면 $\\varphi(m)=2^{e-1}\\varphi(m')$, $4\\varphi(m)=2^{e+1}\\varphi(m')$인데 $\\varphi(8m)=2^{e+2}\\varphi(m')\\ne2^{e+1}\\varphi(m')$ — **항상 성립하지 않음**.`},
    {num:'Step 3', title:'조건은 정확히 $"m$이 홀수"',
     body:`따라서 $\\varphi(8m)=4\\varphi(m)\\iff m$이 홀수.

$1$부터 $100$까지 홀수의 개수:

$$50$$`}
  ],
  answer:'$50$',
  footnotes:[
    {n:'①',text:'오일러 정리와 그 역$: gcd(a,n)=1$일 때만 $aᵏ≡1(mod n)$이 어떤 $k$에 대해 성립할 수 있다 $(gcd(a,n)>1$이면 $aᵏ$은 $n$과 공약수를 계속 가져 1이 될 수 없음).'},
    {n:'②',text:'$φ(2^k)=2^{k-1}(k≥1)$이고 $φ$는 서로소인 인수에 대해 곱셈적$(multiplicative).$'}
  ]
},

// ───────────────────────────────────────
// 2020
// ───────────────────────────────────────
{
  id:'2020a7', year:2020, type:'전공A', cat:'cong', pts:4,
  title:'페르마 소정리와 CRT로 연립합동식 풀기',
  problem:`합동방정식 $x\\equiv25^{99}\\pmod{19\\cdot13}$과 연립합동방정식 $\\begin{cases}x\\equiv a\\pmod{19}\\\\x\\equiv b\\pmod{13}\\end{cases}$이 동치가 되도록 하는 정수 $a,\\,b$의 값을 각각 구하시오. 또한 합동방정식의 정수해 $x$의 값을 풀이 과정과 함께 쓰시오. (단, $0\\le a<19,\\ 0\\le b<13,\\ 0\\le x<247$)`,
  steps:[
    {num:'Step 1', title:'$mod 19$에서 $a$ 계산',
     body:`$25\\equiv6\\pmod{19}$. 페르마 소정리 ①: $6^{18}\\equiv1$. $99=5\\times18+9$이므로 $25^{99}\\equiv6^9\\pmod{19}$.

$6^2=36\\equiv-2$, $6^4\\equiv4$, $6^8\\equiv16$, $6^9\\equiv16\\times6=96\\equiv1\\pmod{19}$

$$a=1$$`},
    {num:'Step 2', title:'$mod 13$에서 $b$ 계산',
     body:`$25\\equiv-1\\pmod{13}$. $99=8\\times12+3$이므로 $25^{99}\\equiv(-1)^{99}=-1\\equiv12\\pmod{13}$

$$b=12$$`},
    {num:'Step 3', title:'CRT로 $x$ 복원',
     body:`$x=19k+1$로 놓고 $19k+1\\equiv12\\pmod{13}$: $19\\equiv6\\pmod{13}$이므로 $6k\\equiv11\\pmod{13}$.

$6\\times11=66\\equiv1\\pmod{13}$이므로 $6^{-1}\\equiv11$. $k\\equiv11\\times11=121\\equiv4\\pmod{13}$.`},
    {num:'Step 4', title:'최종 $x$',
     body:`$k=4$: $x=19\\times4+1=77$

(검산: $77=19\\times4+1$✓, $77=13\\times5+12$✓)`}
  ],
  answer:'$a=1,\\ b=12$, $x=77$',
  footnotes:[
    {n:'①',text:'페르마 소정리$: p$가 소수이고 $gcd(a,p)=1$이면 $a^{p-1}≡1(mod p).$'}
  ]
},

// ───────────────────────────────────────
// 2021
// ───────────────────────────────────────
{
  id:'2021a11', year:2021, type:'전공A', cat:'primroot', pts:4,
  title:'세 인수의 합동식, 부분군 포함배제로 해의 개수 세기',
  problem:`합동방정식 $(x^{10}-1)(x^{10}+x^5+1)(x^{36}-1)\\equiv0\\pmod{61}$의 법 $61$에 대한 해의 개수를 풀이 과정과 함께 쓰시오.`,
  steps:[
    {num:'Step 1', title:'각 인수를 부분군으로 해석',
     body:`$61$은 소수, 곱셈군의 위수 $60$. $A=\\{x^{10}\\equiv1\\}$: $|A|=\\gcd(10,60)=10$. $C=\\{x^{36}\\equiv1\\}$: $|C|=\\gcd(36,60)=12$.

$x^{10}+x^5+1=0\\iff x^{15}\\equiv1$이고 $x^5\\not\\equiv1$ ① ($x^{15}-1=(x^5-1)(x^{10}+x^5+1)$이므로). $D=\\{x^{15}\\equiv1\\}$($|D|=15$), $E=\\{x^5\\equiv1\\}$($|E|=5$, $E\\subset D$). $B=D\\setminus E$, $|B|=10$.`},
    {num:'Step 2', title:'교집합들 계산 (순환군의 부분군 성질)',
     body:`$5|10$이므로 $E\\subset A$. $A\\cap D$: 위수 $\\gcd(10,15)=5$인 부분군 $=E$ ②이므로 $A\\cap B=A\\cap(D\\setminus E)=(A\\cap D)\\setminus(A\\cap E)=E\\setminus E=\\varnothing$.

$A\\cap C$: 위수 $\\gcd(10,12)=2$인 부분군, $|A\\cap C|=2$.

$D\\cap C$: 위수 $\\gcd(15,12)=3$, $E\\cap C$: 위수 $\\gcd(5,12)=1$(항등원만). $B\\cap C=(D\\cap C)\\setminus(E\\cap C)$: 크기 $3-1=2$.`},
    {num:'Step 3', title:'포함배제 원리 적용',
     body:`$A\\cap B=\\varnothing$이므로 $A\\cap B\\cap C=\\varnothing$도 자동.

$$|A\\cup B\\cup C|=|A|+|B|+|C|-|A\\cap B|-|A\\cap C|-|B\\cap C|+|A\\cap B\\cap C|$$

$$=10+10+12-0-2-2+0=28$$`}
  ],
  answer:'$28$',
  footnotes:[
    {n:'①',text:'$x¹⁵-1=(x⁵-1)(x¹⁰+x⁵+1)$이므로$, x¹⁰+x⁵+1=0$의 해는 $x¹⁵=1$의 해 중 $x⁵=1$이 아닌 것들.'},
    {n:'②',text:'순환군에서 위수 $m,n$인 두 부분군의 교집합은 위수 $gcd(m,n)$인 (유일한) 부분군이다.'}
  ]
},

// ───────────────────────────────────────
// 2022
// ───────────────────────────────────────
{
  id:'2022b8', year:2022, type:'전공B', cat:'cong', pts:4,
  title:'5제곱 합동식을 CRT와 페르마 소정리로 풀기',
  problem:`합동식 $x^5\\equiv23\\pmod{35}$의 정수해 $x$를 풀이 과정과 함께 쓰시오. (단, $x$는 $35$와 서로소이고 $0\\le x\\le34$이다.)`,
  steps:[
    {num:'Step 1', title:'$mod 5: x⁵≡x$ 항등식 이용',
     body:`$23\\equiv3\\pmod5$. 페르마 소정리에 의해 모든 $x$에 대해 $x^5\\equiv x\\pmod5$ ①이므로:

$$x\\equiv3\\pmod5$$`},
    {num:'Step 2', title:'$mod 7: 5$의 역원$(mod6)$으로 5제곱근 구하기',
     body:`$23\\equiv2\\pmod7$. $\\varphi(7)=6$, $\\gcd(5,6)=1$이므로 $5$의 $\\mod6$ 역원을 구하면 됩니다 ②: $5\\times5=25\\equiv1\\pmod6$이므로 $5^{-1}\\equiv5$.

$$x\\equiv2^5=32\\equiv4\\pmod7$$`},
    {num:'Step 3', title:'CRT로 결합',
     body:`$x=5k+3$으로 놓고 $5k+3\\equiv4\\pmod7\\Rightarrow5k\\equiv1\\pmod7$.

$5\\times3=15\\equiv1\\pmod7$이므로 $5^{-1}\\equiv3\\pmod7$. $k\\equiv3\\pmod7$, 가장 작은 $k=3$.

$$x=5\\times3+3=18$$

(검산: $18^2=324\\equiv9$, $18^4\\equiv81\\equiv11$, $18^5\\equiv11\\times18=198\\equiv23\\pmod{35}$ ✓)`}
  ],
  answer:'$18$',
  footnotes:[
    {n:'①',text:'페르마 소정리의 변형: 모든 정수 $x$에 대해 $x^p≡x(mod p) (p$소수$). x=0$일 때도 자명히 성립.'},
    {n:'②',text:'$gcd(k,φ(p))=1$일 때$, x^k≡c(mod p)$의 해는 $x≡c^{k⁻¹ mod φ(p)}(mod p) (k$제곱이 전단사이므로).'}
  ]
},

// ───────────────────────────────────────
// 2023
// ───────────────────────────────────────
{
  id:'2023b10', year:2023, type:'전공B', cat:'legendre', pts:4,
  title:'완전제곱식으로 변형해 이차합동식이 해 없는 $k$ 찾기',
  problem:`$11\\le k\\le20$인 정수 $k$에 대하여 합동식 $x^2+23x-k\\equiv0\\pmod{75}$의 정수해가 존재하지 않도록 하는 모든 $k$의 값을 풀이 과정과 함께 쓰시오.`,
  steps:[
    {num:'Step 1', title:'완전제곱식으로 변형',
     body:`$\\gcd(2,75)=1$이므로 $2$는 가역 ①. 양변에 $4$를 곱하면:

$$(2x+23)^2\\equiv529+4k\\pmod{75}$$

$529\\equiv4\\pmod{75}$이므로 우변 $\\equiv4k+4=4(k+1)$.`},
    {num:'Step 2', title:'$y²≡4m$ 형태를 $y=2z$로 단순화',
     body:`$4$가 완전제곱($=2^2$)이고 가역이므로, $y^2\\equiv4m\\pmod{75}$가 해를 가짐 $\\iff$ $m=k+1$이 그 자체로 $\\bmod75$ 이차잉여 ②.

즉 원래 방정식이 해가 없으려면 $m=k+1$이 $\\bmod3$ 그리고 $\\bmod25$ 둘 중 하나에서라도 이차잉여가 아니어야 합니다 ③.`},
    {num:'Step 3', title:'이차잉여 집합 계산',
     body:`$\\bmod3$ 이차잉여: $\\{0,1\\}$.

$\\bmod25$ 이차잉여(제곱수 mod25, $x=0..12$): $\\{0,1,4,6,9,11,14,16,19,21,24\\}$`},
    {num:'Step 4', title:'$k=11$부터 20까지 하나씩 판정',
     body:`| $k$ | $m=k+1$ | $m\\bmod3$ | $m\\bmod25$ 잉여? | 해 존재? |
|---|---|---|---|---|
| 11 | 12 | 0✓ | 12 ✗ | 없음 |
| 12 | 13 | 1✓ | 13 ✗ | 없음 |
| 13 | 14 | 2✗ | — | 없음 |
| 14 | 15 | 0✓ | 15 ✗ | 없음 |
| 15 | 16 | 1✓ | 16 ✓ | **있음** |
| 16 | 17 | 2✗ | — | 없음 |
| 17 | 18 | 0✓ | 18 ✗ | 없음 |
| 18 | 19 | 1✓ | 19 ✓ | **있음** |
| 19 | 20 | 2✗ | — | 없음 |
| 20 | 21 | 0✓ | 21 ✓ | **있음** |`},
    {num:'Step 5', title:'해가 없는 $k$ 값 정리',
     body:`$$k\\in\\{11,12,13,14,16,17,19\\}$$`}
  ],
  answer:'$k=11,12,13,14,16,17,19$',
  footnotes:[
    {n:'①',text:'$gcd(2,75)=1$이므로 2는 $mod75$에서 역원을 가지며, 완전제곱식으로의 변형(양변에 4를 곱하는 것)이 가역적 조작이 된다.'},
    {n:'②',text:'$y=2z$로 치환하면 $y²=4z²$이므로 $y²≡4m ⟺ z²≡m ($양변에서 4를 소거, 4가 가역이므로).'},
    {n:'③',text:'$75=3\\times5^2$이므로, CRT에 의해 $m$이 $\\bmod75$ 이차잉여 $\\iff m$이 $\\bmod3$과 $\\bmod25$ 양쪽에서 모두 이차잉여.'}
  ]
},

// ───────────────────────────────────────
// 2024
// ───────────────────────────────────────
{
  id:'2024b9', year:2024, type:'전공B', cat:'primroot', pts:4,
  title:'원시근의 곱 지수가 다시 원시근임을 증명, 순서쌍 개수로 소수 $p$ 찾기',
  problem:`$r$을 홀수인 소수 $p$의 원시근(primitive root)이라 하고 $X=\\{k\\in\\mathbb{N}\\mid1\\le k<p-1,\\,\\gcd(k,p-1)=1\\}$이라 하자. 임의의 $a,b\\in X$에 대하여 $r^{ab}$이 $p$의 원시근임을 보이시오. 또한, $a,b\\in X$에 대하여 $r^{ab}\\equiv r^a\\pmod p$ 또는 $r^{ab}\\equiv r^b\\pmod p$를 만족시키는 순서쌍 $(a,b)$의 개수를 $|X|$의 식으로 나타내고, 이러한 순서쌍의 개수가 $15$가 되도록 하는 모든 소수 $p$의 값을 풀이 과정과 함께 쓰시오. (단, $|X|$는 집합 $X$의 원소의 개수이다.)`,
  steps:[
    {num:'Step 1', title:'$r^{ab}$이 원시근임을 증명',
     body:`$r^m$이 원시근 $\\iff\\gcd(m,p-1)=1$ ①. $a,b\\in X$이므로 $\\gcd(a,p-1)=\\gcd(b,p-1)=1$이고, 두 수와 서로소인 수의 곱도 서로소 ②이므로 $\\gcd(ab,p-1)=1$.

따라서 $r^{ab}$은 원시근. $\\blacksquare$`},
    {num:'Step 2', title:'$r^{ab}≡r^a$ 조건 분석',
     body:`$r^{ab}\\equiv r^a\\iff ab\\equiv a\\pmod{p-1}\\iff a(b-1)\\equiv0\\pmod{p-1}$

$\\gcd(a,p-1)=1$이므로 $a$는 가역, 소거하면 $b\\equiv1\\pmod{p-1}$. $b\\in X$($1\\le b<p-1$)이므로 $b=1$.

같은 방식으로 $r^{ab}\\equiv r^b\\iff a=1$.`},
    {num:'Step 3', title:'순서쌍의 개수 (포함배제)',
     body:`조건은 "$a=1$ 또는 $b=1$"과 동치. $b=1$인 쌍: $|X|$개. $a=1$인 쌍: $|X|$개. 둘 다($a=b=1$): $1$개.

$$\\text{개수}=|X|+|X|-1=2|X|-1$$`},
    {num:'Step 4', title:'$|X|=φ(p-1)$이고 개수=15인 조건',
     body:`$X$의 정의역이 $k<p-1$이지만 $k=p-1$은 어차피 자기 자신과 서로소가 아니므로 ③ $|X|=\\varphi(p-1)$.

$2\\varphi(p-1)-1=15\\Rightarrow\\varphi(p-1)=8$`},
    {num:'Step 5', title:'$φ(n)=8$인 $n$을 모두 찾고 $p=n+1$이 소수인지 확인',
     body:`$\\varphi(n)=8$인 $n$: $\\{15,16,20,24,30\\}$ (알려진 목록 ④).

각각에 대해 $p=n+1$이 소수인지: $16$(✗), $17$(✓소수), $21$(✗), $25$(✗), $31$(✓소수)

$$p=17\\ \\text{또는}\\ p=31$$`}
  ],
  answer:'$r^{ab}$이 원시근임을 증명 완료, 순서쌍 개수 $=2|X|-1$, $p=17$ 또는 $p=31$',
  footnotes:[
    {n:'①',text:'원시근 $r$의 거듭제곱 $rᵐ$이 다시 원시근인 것은 $gcd(m,p-1)=1$일 때만 $(m$이 위수 $p-1$과 서로소일 때 $rᵐ$도 위수 $p-1$을 가짐).'},
    {n:'②',text:'$gcd(a,n)=1, gcd(b,n)=1$이면 $gcd(ab,n)=1 ($서로소 집합은 곱셈에 닫혀 있음).'},
    {n:'③',text:'$gcd(p-1,p-1)=p-1≠1(p-1>1$이므로)이므로 $k=p-1$은 애초에 $X$에 속할 수 없어 범위를 $k≤p-1$로 확장해도 개수는 변하지 않는다.'},
    {n:'④',text:'$φ(n)=8$을 만족하는 $n$은 15,16,20,24,30 (오일러 파이함수 표를 통해 확인 가능한 유한한 목록).'}
  ]
},

// ───────────────────────────────────────
// 2025
// ───────────────────────────────────────
{
  id:'2025a11', year:2025, type:'전공A', cat:'legendre', pts:4,
  title:'원시근 부분집합에서 6제곱=-1인 원소 개수와 르장드르 기호 합',
  problem:`소수 $157$의 원시근(primitive root) $5$에 대하여 집합 $A$를 $A=\\{5^i\\mid i$는 $100$ 이하의 양의 정수$\\}$라고 할 때, 합동식 $x^6+1\\equiv0\\pmod{157}$의 해가 되는 $A$의 원소의 개수를 풀이 과정과 함께 쓰시오. 또한 다음 식의 값을 풀이 과정과 함께 쓰시오. $\\displaystyle\\sum_{i=1}^{155}\\left\\{\\left(\\frac{5^i}{157}\\right)\\left(\\frac{i^3}{157}\\right)\\left(\\frac{157-i}{157}\\right)+\\left(\\frac{5^i-1}{157}\\right)\\right\\}$ (단, $\\left(\\dfrac{a}{157}\\right)$는 정수 $a$에 대한 르장드르 기호(Legendre symbol)이다.)`,
  steps:[
    {num:'Step 1', title:'$x⁶≡-1$의 지수 조건',
     body:`$p=157,\\ p-1=156$. $x=5^j$로 놓으면 $-1$은 위수 $2$인 유일한 원소이므로 $-1\\equiv5^{78}\\pmod{157}$ ①.

$x^6\\equiv-1\\iff6j\\equiv78\\pmod{156}$. $\\gcd(6,156)=6$이고 $78/6=13$이므로:

$$j\\equiv13\\pmod{26}$$`},
    {num:'Step 2', title:'$i≤100$ 범위 내 개수 세기',
     body:`$\\mod156$에서 해: $j\\in\\{13,39,65,91,117,143\\}$ ($6$개, $156/26=6$).

이 중 $1\\le i\\le100$인 것: $13,39,65,91$ — **$4$개** ($117,143$은 $100$ 초과).`},
    {num:'Step 3', title:'$S₂$ 계산$: {5^i-1}$ 부분',
     body:`$i=1,\\ldots,155$에서 $5^i$는 $\\{2,3,\\ldots,156\\}$을 정확히 한 번씩 지나갑니다 ② ($5^{156}\\equiv1$이 빠지므로).

$$S_2=\\sum_{i=1}^{155}\\left(\\frac{5^i-1}{157}\\right)=\\sum_{w=1}^{155}\\left(\\frac w{157}\\right)$$

$157\\equiv1\\pmod4$이므로 $\\left(\\dfrac{-1}{157}\\right)=1$, 즉 $\\left(\\dfrac{156}{157}\\right)=1$.

$$S_2=\\sum_{w=1}^{156}\\left(\\frac w{157}\\right)-\\left(\\frac{156}{157}\\right)=0-1=-1$$`},
    {num:'Step 4', title:'$S₁$ 계산: 세 르장드르 기호의 곱 부분',
     body:`$157-i\\equiv-i$, $\\left(\\dfrac{157-i}{157}\\right)=\\left(\\dfrac{-1}{157}\\right)\\left(\\dfrac i{157}\\right)=\\left(\\dfrac i{157}\\right)$.

$\\left(\\dfrac{i^3}{157}\\right)=\\left(\\dfrac i{157}\\right)^3=\\left(\\dfrac i{157}\\right)$ (르장드르 기호는 $\\pm1$이므로 세제곱 = 자기 자신 ③).

곱 전체 $=\\left(\\dfrac{5^i}{157}\\right)\\left(\\dfrac i{157}\\right)^2=\\left(\\dfrac{5^i}{157}\\right)$ (제곱=1이므로).`},
    {num:'Step 5', title:'$S₁$도 동일한 방식으로 계산, 최종 합',
     body:`$$S_1=\\sum_{i=1}^{155}\\left(\\frac{5^i}{157}\\right)=\\sum_{v=2}^{156}\\left(\\frac v{157}\\right)=0-\\left(\\frac1{157}\\right)=-1$$

$$S_1+S_2=-1+(-1)=-2$$`}
  ],
  answer:'$A$의 원소 중 해의 개수 $=4$, 전체 합 $=-2$',
  footnotes:[
    {n:'①',text:'위수 2인 원소는 항상 -1 하나뿐. 5가 원시근(위수156)이므로 -1=5^{156/2}=5^{78}.'},
    {n:'②',text:'5가 원시근이므로 $i=1,…,156$일 때 5ⁱ은 모든 0이 아닌 잉여류를 정확히 한 번씩$; i=156$이면 5^{156}≡1이므로 $i=1,…,155$는 {2,…,156}에 대응.'},
    {n:'③',text:'르장드르 기호는 항상 ±1(0이 아닌 경우) 값을 가지므로 세제곱해도 원래 값과 같다: (±1)³=±1.'}
  ]
},

// ───────────────────────────────────────
// 2026
// ───────────────────────────────────────
{
  id:'2026b7', year:2026, type:'전공B', cat:'cong', pts:4,
  title:'선형합동식과 거듭제곱 잉여 집합의 합집합으로 $n$의 개수 구하기',
  problem:`집합 $A,\\,B,\\,C$가 $A=\\{x\\in\\mathbb{Z}\\mid21x\\equiv45\\pmod{66},\\,0\\le x\\le65\\}$, $B=\\{x\\in\\mathbb{Z}\\mid x^3-1\\equiv0\\pmod{151},\\,0\\le x\\le150\\}$, $C=\\{x\\in\\mathbb{Z}\\mid x^n-1\\equiv0\\pmod{151},\\,0\\le x\\le150\\}$이다. $A$와 $B$의 원소의 개수를 순서대로 구하시오. 또한 $|A|=|B\\cup C|$를 만족시키는 정수 $n(0\\le n\\le150)$의 개수를 풀이 과정과 함께 쓰시오. (단, $151$은 소수이고 $|X|$는 집합 $X$의 원소의 개수이다.)`,
  steps:[
    {num:'Step 1', title:'$|A|$ 계산: 선형합동식의 해의 개수',
     body:`$\\gcd(21,66)=3$이고 $3|45$이므로 해가 존재하며, 해의 개수는 정확히 $\\gcd(21,66)=3$ ①:

$$|A|=3$$`},
    {num:'Step 2', title:'$|B|$ 계산: 세제곱근의 개수',
     body:`$151$은 소수이므로 곱셈군 위수 $150$. $\\gcd(3,150)=3$이므로:

$$|B|=3$$`},
    {num:'Step 3', title:'$|C|$와 $B$의 부분군 관계',
     body:`$|C|=\\gcd(n,150)=:d$. $B$는 위수 $3$인 부분군. 순환군 성질 ②에 의해:

$3|d$이면 $B\\subseteq C\\Rightarrow|B\\cup C|=d$

$d|3$($d\\in\\{1,3\\}$)이면 $C\\subseteq B\\Rightarrow|B\\cup C|=|B|=3$

$\\gcd(3,d)=1,d\\ne1$이면 $|B\\cup C|=3+d-1=d+2\\ (\\ne3)$`},
    {num:'Step 4', title:'$|B∪C|=3$이 되는 조건',
     body:`$|A|=3$과 같아지려면 $|B\\cup C|=3$이어야 하고, 위 분석에서 이는:

$$\\gcd(n,150)\\in\\{1,3\\}$$`},
    {num:'Step 5', title:'개수 세기',
     body:`$\\gcd(n,150)=1$: $\\varphi(150)=\\varphi(2)\\varphi(3)\\varphi(25)=1\\times2\\times20=40$

$\\gcd(n,150)=3$: $n=3m,\\ \\gcd(m,50)=1,\\ m\\in[1,50]$ → $\\varphi(50)=\\varphi(2)\\varphi(25)=1\\times20=20$

$$40+20=60$$`}
  ],
  answer:'$|A|=3,\\ |B|=3$; 조건을 만족하는 $n$의 개수 $=60$',
  footnotes:[
    {n:'①',text:'선형합동식 $ax≡b(mod n), d=gcd(a,n)$에 대해 $d|b$이면 해는 정확히 $d$개(법 $n$에서$), d∤b$이면 해가 없다.'},
    {n:'②',text:'순환군의 부분군은 위수(차수)의 약수 관계에 따라 포함관계가 결정된다 — 위수 $m$인 부분군이 위수 $d$인 부분군에 포함 $⟺ m|d.$'}
  ]
}

]};
