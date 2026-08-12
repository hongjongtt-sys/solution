window.SUBJECTS = window.SUBJECTS || {};

window.SUBJECTS['위상수학'] = {
  label: '위상수학',
  categories: [
    { id:'basic', name:'폐포·내부·도집합',      color:'#0f7b6c', light:'#e6f4f1' },
    { id:'func',  name:'연속·거리공간·분리공리', color:'#5a4fb0', light:'#eceaf9' },
    { id:'cpt',   name:'연결성·컴팩트성',        color:'#b83b5e', light:'#fceaee' }
  ],
  freqGroups: [
    {
      id:'basic', name:'폐포·내부·경계·도집합, 기저와 부분/적공간', stars:'★★★★★★', count:7, color:'#0a5a4e',
      desc:'기저에서 최소근방을 찾아 폐포·내부·경계·도집합을 계산하는 유형. 적공간·부분공간·상위상이 함께 나온다',
      problems:['2014a2','2015a9','2016a12','2018a12','2020a11','2025b7','2026b2']
    },
    {
      id:'func', name:'연속함수·거리공간·상위상·분리공리', stars:'★★★★★★', count:7, color:'#413a86',
      desc:'낯선 거리함수가 만드는 위상 파악하기, 연속·불연속 판정, 상위상, $T_1$·정규성 같은 분리공리',
      problems:['2014a14','2017a12','2020b2','2021a6','2022b6','2023b2','2026a12']
    },
    {
      id:'cpt', name:'연결성·컴팩트성·연결성분', stars:'★★★★★', count:6, color:'#8c2846',
      desc:'유한여집합위상 등에서의 컴팩트성 판정, 연결성분 세기, 연속함수의 상을 이용한 비연결 증명',
      problems:['2014b3','2015a10','2019a12','2021b2','2023a10','2024a9']
    }
  ],
  problems: [

// ───────────────────────────────────────
// 2014
// ───────────────────────────────────────
{
  id:'2014a2', year:2014, type:'전공A', cat:'basic', pts:3,
  title:'적공간에서 $A\\times B$의 폐포·내부·경계 구하기',
  problem:`$\\mathbb{R}$ 위의 보통위상(usual topology)을 $\\mathfrak{J}$, 함수 $f:\\mathbb{Z}\\to\\mathbb{R}$를 $f(n)=n^2$이라 하고, $\\mathbb{Z}$ 위의 위상 $\\mathfrak{J}_1$을 $\\mathfrak{J}_1=\\{f^{-1}(G)\\mid G\\in\\mathfrak{J}\\}$라 하자. $A=\\{0\\}\\cup\\mathbb{N}$, $B=\\{-1,1\\}$이라 할 때, 적공간(product space) $(\\mathbb{Z},\\mathfrak{J}_1)\\times(\\mathbb{Z},\\mathfrak{J}_1)$에서 $A\\times B$의 폐포(closure) $\\overline{A\\times B}$와 $A\\times B$의 내부(interior) $(A\\times B)^{\\circ}$를 구하시오. 이를 이용하여 $(\\mathbb{Z},\\mathfrak{J}_1)\\times(\\mathbb{Z},\\mathfrak{J}_1)$에서 $A\\times B$의 경계(boundary) $b(A\\times B)$를 구하는 과정을 쓰시오.`,
  steps:[
    {num:'Step 1', title:'$\\mathfrak{J}_1$의 정체 밝히기',
     body:`$f(n)=n^2=f(-n)$이므로 $f^{-1}(G)$는 항상 원점대칭입니다. 즉 $\\mathfrak{J}_1$의 모든 원소 $S$는 $S=-S$를 만족합니다.

역으로 $S\\subseteq\\mathbb{Z}$가 $S=-S$이면, 제곱수 집합 $\\{n^2\\}$은 $\\mathbb{R}$에서 고립점만으로 이루어져 있으므로 각 $n^2\\ (n\\in S)$ 주위에 작은 열린구간을 잡아 그 합집합을 $G$라 하면 $f^{-1}(G)=S$가 됩니다 ①.

$$\\mathfrak{J}_1=\\{S\\subseteq\\mathbb{Z}\\mid S=-S\\}$$

즉 대칭인 부분집합 전체가 열린집합입니다.`},
    {num:'Step 2', title:'최소근방과 폐포·내부 공식',
     body:`$n$을 포함하는 가장 작은 대칭집합은 $\\{n,-n\\}$이므로, 이것이 $n$의 최소 열린근방입니다 ②.

폐포: $x\\in\\overline{S}\\iff\\{x,-x\\}\\cap S\\ne\\varnothing$이므로

$$\\overline{S}=S\\cup(-S)$$

내부: $S$에 포함되는 가장 큰 대칭집합이므로

$$S^{\\circ}=S\\cap(-S)$$`},
    {num:'Step 3', title:'$A$와 $B$에 적용',
     body:`$A=\\{0,1,2,3,\\dots\\}$이므로 $-A=\\{0,-1,-2,\\dots\\}$

$$\\overline{A}=A\\cup(-A)=\\mathbb{Z},\\qquad A^{\\circ}=A\\cap(-A)=\\{0\\}$$

$B=\\{-1,1\\}$은 이미 대칭이므로

$$\\overline{B}=B,\\qquad B^{\\circ}=B$$`},
    {num:'Step 4', title:'적공간에서 폐포와 내부',
     body:`적공간에서는 $\\overline{A\\times B}=\\overline{A}\\times\\overline{B}$, $(A\\times B)^{\\circ}=A^{\\circ}\\times B^{\\circ}$가 성립합니다 ③.

$$\\overline{A\\times B}=\\mathbb{Z}\\times\\{-1,1\\}$$

$$(A\\times B)^{\\circ}=\\{0\\}\\times\\{-1,1\\}$$`},
    {num:'Step 5', title:'경계 계산',
     body:`$$b(A\\times B)=\\overline{A\\times B}\\setminus(A\\times B)^{\\circ}$$

$$=\\big(\\mathbb{Z}\\times\\{-1,1\\}\\big)\\setminus\\big(\\{0\\}\\times\\{-1,1\\}\\big)=\\big(\\mathbb{Z}\\setminus\\{0\\}\\big)\\times\\{-1,1\\}$$`}
  ],
  answer:'$\\overline{A\\times B}=\\mathbb{Z}\\times\\{-1,1\\}$, $(A\\times B)^{\\circ}=\\{0\\}\\times\\{-1,1\\}$, $b(A\\times B)=(\\mathbb{Z}\\setminus\\{0\\})\\times\\{-1,1\\}$',
  footnotes:[
    {n:'①',text:'$\\{0,1,4,9,\\dots\\}$의 각 점은 $\\mathbb{R}$에서 고립점이라, 서로 겹치지 않는 작은 구간으로 원하는 제곱수만 골라낼 수 있다. 그래서 "$f$로 당겨올 수 있는 집합"이 대칭집합 전부가 된다.'},
    {n:'②',text:'각 점이 최소 열린근방을 갖는 위상에서는 폐포·내부 계산이 아주 쉬워진다. $x\\in\\overline{S}$는 "$x$의 최소근방이 $S$와 만난다"와 같고, $x\\in S^{\\circ}$는 "$x$의 최소근방이 $S$에 포함된다"와 같기 때문이다.'},
    {n:'③',text:'적공간에서 $\\overline{A\\times B}=\\overline A\\times\\overline B$는 항상 성립하지만, 내부에 대한 $(A\\times B)^{\\circ}=A^{\\circ}\\times B^{\\circ}$는 "곱 모양의 집합"에 대해서만 성립한다. 일반적인 부분집합에는 쓸 수 없다.'}
  ]
},

{
  id:'2014a14', year:2014, type:'전공A', cat:'func', pts:2,
  title:'유한여집합위상에서 불연속인 점의 개수',
  problem:`자연수 전체의 집합 $\\mathbb{N}$에서 위상 $\\mathfrak{J}$를

$$\\mathfrak{J}=\\{G\\subseteq\\mathbb{N}\\mid \\mathbb{N}-G\\text{는 유한집합}\\}\\cup\\{\\varnothing\\}$$

으로, 함수 $f:\\mathbb{N}\\to\\mathbb{N}$을

$$f(n)=\\begin{cases}1, & 1\\le n<5\\\\ 2, & 5\\le n<10\\\\ 3, & 10\\le n\\end{cases}$$

으로 정의하자. $\\mathfrak{J}_d$를 $\\mathbb{N}$에서 이산위상(discrete topology)이라 하고, 집합 $A$를

$$A=\\{n\\in\\mathbb{N}\\mid f:(\\mathbb{N},\\mathfrak{J})\\to(\\mathbb{N},\\mathfrak{J}_d)\\text{는 }n\\text{에서 불연속}\\}$$

이라 할 때, 집합 $A$의 원소의 개수를 구하시오.`,
  steps:[
    {num:'Step 1', title:'점에서의 연속 조건을 정리',
     body:`공역이 이산위상이므로 $\\{f(n)\\}$이 열린집합입니다. 따라서 $f$가 $n$에서 연속이려면 ①

$$\\exists\\,U\\in\\mathfrak{J},\\ n\\in U,\\ f(U)\\subseteq\\{f(n)\\}$$

즉 $n\\in U\\subseteq f^{-1}(f(n))$인 열린집합 $U$가 있어야 합니다.

정의역의 열린집합은 $\\varnothing$ 아니면 여집합이 유한한 집합, 즉 **무한집합**입니다.`},
    {num:'Step 2', title:'각 준위집합의 크기 확인',
     body:`$$f^{-1}(1)=\\{1,2,3,4\\},\\quad f^{-1}(2)=\\{5,6,7,8,9\\},\\quad f^{-1}(3)=\\{10,11,12,\\dots\\}$$

앞의 두 개는 유한집합이므로 그 안에 들어가는 공집합이 아닌 열린집합이 존재할 수 없습니다.

$f^{-1}(3)=\\mathbb{N}\\setminus\\{1,2,\\dots,9\\}$는 여집합이 유한하므로 **열린집합**입니다.`},
    {num:'Step 3', title:'점별로 판정',
     body:`$1\\le n\\le9$: $f^{-1}(f(n))$이 유한집합이라 그 안에 열린근방을 잡을 수 없으므로 **불연속**

$n\\ge10$: $U=f^{-1}(3)$이 $n$을 포함하는 열린집합이고 $f(U)=\\{3\\}$이므로 **연속**

$$A=\\{1,2,\\dots,9\\},\\qquad |A|=9$$`}
  ],
  answer:'$|A|=9$',
  footnotes:[
    {n:'①',text:'점 $p$에서의 연속: $f(p)$를 포함하는 임의의 열린집합 $V$에 대해 $p\\in U$이고 $f(U)\\subseteq V$인 열린집합 $U$가 존재한다는 뜻이다. 공역이 이산위상이면 가장 작은 $V$가 $\\{f(p)\\}$이므로 조건이 가장 빡빡해진다.'},
    {n:'②',text:'유한여집합위상(cofinite topology)에서 공집합이 아닌 열린집합은 반드시 무한집합이다. 그래서 이 위상에서 정의된 함수가 이산위상으로 연속이려면 준위집합 $f^{-1}(y)$ 자체가 열린집합, 즉 여집합이 유한해야 한다. 이런 준위집합은 많아야 하나뿐이므로, 사실상 "거의 상수함수"만 연속이 된다.'}
  ]
},

{
  id:'2014b3', year:2014, type:'전공B', cat:'cpt', pts:3,
  title:'기저로 주어진 공간에서 컴팩트인 부분공간 모두 찾기',
  problem:`자연수 전체의 집합 $\\mathbb{N}$에 대하여, 집합 $X=\\mathbb{N}\\cup\\{-1,-2,-3\\}$ 위에

$$\\wp(\\mathbb{N})\\ \\cup\\ \\{\\mathbb{N}\\cup\\{-1\\}-F\\mid F\\text{는 }\\mathbb{N}\\text{의 유한부분집합}\\}\\ \\cup\\ \\{\\{-2,-3\\}\\}$$

을 기저(base)로 하는 위상을 $\\mathfrak{J}$라 하자.

① $\\mathbb{N}\\subsetneq A\\subseteq X$, $A\\ne\\mathbb{N}\\cup\\{-1\\}$이고 $(A,\\mathfrak{J}_A)$가 컴팩트(compact)이다.

② $\\mathbb{N}\\subsetneq B\\subsetneq X$이고 $(B,\\mathfrak{J}_B)$가 컴팩트가 아니다.

①을 만족하는 $A$를 모두 구하고, ②를 만족하는 $B$의 예를 하나 제시하고 예가 되는 이유를 설명하시오. (단, $\\wp(\\mathbb{N})=\\{G\\mid G\\subseteq\\mathbb{N}\\}$이고, $Y\\subset X$일 때 $\\mathfrak{J}_Y=\\{G\\cap Y\\mid G\\in\\mathfrak{J}\\}$이다.)`,
  steps:[
    {num:'Step 1', title:'각 점의 최소 열린근방 파악',
     body:`기저를 점별로 읽습니다.

$n\\in\\mathbb{N}$: $\\{n\\}\\in\\wp(\\mathbb{N})$이 기저원소이므로 $\\mathbb{N}$의 모든 점은 **고립점**입니다.

$-1$: $-1$을 포함하는 기저원소는 $(\\mathbb{N}\\cup\\{-1\\})-F$ 꼴뿐입니다. 즉 $-1$의 근방은 자연수를 **유한개만 빼고 모두** 포함합니다 ①.

$-2$, $-3$: 이들을 포함하는 기저원소는 $\\{-2,-3\\}$ 하나뿐입니다.`},
    {num:'Step 2', title:'$-1\\notin A$이면 컴팩트가 아님',
     body:`$\\mathbb{N}\\subsetneq A\\subseteq X$이고 $-1\\notin A$라 하면 $A=\\mathbb{N}\\cup S$, $S\\subseteq\\{-2,-3\\}$입니다.

$A$의 열린덮개로

$$\\mathcal{U}=\\{\\,\\{n\\}\\mid n\\in\\mathbb{N}\\,\\}\\cup\\{\\,\\{-2,-3\\}\\cap A\\,\\}$$

를 잡습니다. 각 원소가 $A$에서 열린집합이고 $A$를 덮습니다. 그런데 $\\{n\\}$은 자연수를 하나씩만 덮으므로 유한부분덮개로는 $\\mathbb{N}$을 덮을 수 없습니다. 따라서 **컴팩트가 아닙니다** ②.`},
    {num:'Step 3', title:'$-1\\in A$이면 컴팩트임',
     body:`$-1\\in A$라 하고 $\\mathcal{U}$를 $A$의 임의의 열린덮개라 합시다.

$-1$을 덮는 $U_0\\in\\mathcal{U}$를 하나 잡으면, $U_0$는 어떤 기저원소 $(\\mathbb{N}\\cup\\{-1\\})-F$ ($F$ 유한)를 포함합니다. 즉 $U_0$는 $-1$과 $F$를 제외한 **모든 자연수**를 덮습니다.

남은 점은 $F$의 원소들(유한개)과 $A\\cap\\{-2,-3\\}$의 원소들(많아야 2개)뿐이고, 각각을 덮는 $\\mathcal{U}$의 원소를 하나씩 고르면 유한개입니다.

따라서 $A$는 컴팩트입니다.`},
    {num:'Step 4', title:'답 정리',
     body:`$\\mathbb{N}\\subsetneq A\\subseteq X$이면 $A=\\mathbb{N}\\cup S$ ($\\varnothing\\ne S\\subseteq\\{-1,-2,-3\\}$)이고, 컴팩트 조건에서 $-1\\in S$, 추가 조건에서 $S\\ne\\{-1\\}$이므로

**①의 답:** $A=\\mathbb{N}\\cup\\{-1,-2\\},\\ \\mathbb{N}\\cup\\{-1,-3\\},\\ \\mathbb{N}\\cup\\{-1,-2,-3\\}$ (총 3개)

**②의 예:** $B=\\mathbb{N}\\cup\\{-2\\}$

이유: $\\mathbb{N}\\subsetneq B\\subsetneq X$이고, $B$에서 $\\{n\\}\\ (n\\in\\mathbb{N})$과 $\\{-2,-3\\}\\cap B=\\{-2\\}$는 모두 열린집합입니다. 이들로 이루어진 덮개는 각 원소가 점 하나씩만 덮으므로, $\\mathbb{N}$이 무한집합인 이상 유한부분덮개가 존재하지 않습니다.`}
  ],
  answer:'① $A=\\mathbb{N}\\cup\\{-1,-2\\},\\ \\mathbb{N}\\cup\\{-1,-3\\},\\ \\mathbb{N}\\cup\\{-1,-2,-3\\}$ / ② 예: $B=\\mathbb{N}\\cup\\{-2\\}$',
  footnotes:[
    {n:'①',text:'$-1$은 자연수 전체의 "무한대 쪽 집적점" 역할을 한다. 한 점을 붙여 무한 이산공간을 컴팩트하게 만드는 일점컴팩트화(one-point compactification)와 같은 구조다.'},
    {n:'②',text:'무한 이산공간은 결코 컴팩트가 아니다. 싱글턴 덮개가 유한부분덮개를 갖지 못하기 때문이다. 그래서 무한히 많은 고립점을 한꺼번에 삼켜줄 점이 있어야 컴팩트가 된다.'},
    {n:'③',text:'$-2$와 $-3$은 위상적으로 구별되지 않는다($\\{-2,-3\\}$이 둘 다의 최소근방). 하지만 유한개이므로 컴팩트성 판정에는 아무 영향을 주지 않는다.'}
  ]
},

// ───────────────────────────────────────
// 2015
// ───────────────────────────────────────
{
  id:'2015a9', year:2015, type:'전공A', cat:'basic', pts:2,
  title:'기저가 주어진 위상에서 한 점 집합의 도집합',
  problem:`실수 전체의 집합 $\\mathbb{R}$에 다음 조건 ①, ②에 의해 정의되는 부분집합족(family of subsets) $\\mathcal{B}$를 기저로 하는 위상 $\\mathfrak{J}$가 주어졌다고 하자.

① 모든 정수 $m$에 대하여 $\\{m\\}\\in\\mathcal{B}$이다.

② 모든 정수 $n$과 음이 아닌 모든 정수 $k$에 대하여 $(n,\\ n+2^{-k})\\in\\mathcal{B}$이다.

위상공간 $(\\mathbb{R},\\mathfrak{J})$에서 집합 $A=\\left\\{\\dfrac12\\right\\}$의 도집합(derived set) $A'$을 구하시오.`,
  steps:[
    {num:'Step 1', title:'기저원소의 모양 확인',
     body:`기저원소는 정수 하나짜리 집합 $\\{m\\}$과, 정수 $n$에서 **오른쪽으로만** 뻗는 구간 $(n,\\,n+2^{-k})$입니다.

$2^{-k}\\le1$이므로 $(n,n+2^{-k})\\subseteq(n,n+1)$이고, 이 구간에는 정수가 들어 있지 않습니다. 그래서 두 종류의 기저원소는 서로 만나지 않고, 서로 다른 $n$에 대한 구간들도 서로소입니다 ①.`},
    {num:'Step 2', title:'$\\frac12$를 포함하는 기저원소는 단 하나',
     body:`$\\frac12\\in(n,n+2^{-k})$이려면 $n<\\frac12<n+2^{-k}$입니다. $n$은 정수이므로 $n=0$이고, $\\frac12<2^{-k}$에서 $k=0$뿐입니다.

$$\\frac12\\text{를 포함하는 기저원소}=(0,1)\\ \\text{하나뿐}$$`},
    {num:'Step 3', title:'어떤 점이 집적점인지 판정',
     body:`$x\\in A'$이려면 $x$를 포함하는 모든 열린집합이 $\\frac12$를 포함해야 하고 $x\\ne\\frac12$이어야 합니다 ②.

$x=\\frac12$: $A\\setminus\\{\\frac12\\}=\\varnothing$이므로 집적점이 아님

$x$가 정수: $\\{x\\}$가 열린집합이고 $\\frac12$를 포함하지 않으므로 제외

$x\\in(0,1)$, $x>\\frac12$: $x$를 포함하는 기저원소 $(0,2^{-k})$는 $2^{-k}>x>\\frac12$에서 $k=0$뿐, 즉 $(0,1)$ 하나입니다. 따라서 $x$를 포함하는 **모든** 열린집합이 $(0,1)\\ni\\frac12$를 포함합니다 → **집적점**

$x\\in(0,1)$, $x<\\frac12$: $2^{-k}$를 $x<2^{-k}\\le\\frac12$가 되게 잡으면 $(0,2^{-k})$는 $x$를 포함하고 $\\frac12$은 포함하지 않습니다 → 제외

그 밖의 $x$: $x$가 속한 구간 $(n,n+1)$이 $(0,1)$과 서로소이므로 제외`},
    {num:'Step 4', title:'결론',
     body:`$$A'=\\left(\\frac12,\\ 1\\right)=\\left\\{x\\in\\mathbb{R}\\ \\middle|\\ \\frac12<x<1\\right\\}$$

$x=1$은 $\\{1\\}$이 열린집합이라 제외되고, $x=\\frac12$도 제외됩니다.`}
  ],
  answer:'$A\'=\\left(\\dfrac12,\\ 1\\right)$',
  footnotes:[
    {n:'①',text:'기저가 되려면 (i) 전체를 덮고 (ii) 두 기저원소의 교집합의 각 점에 대해 그 안에 들어가는 기저원소가 있어야 한다. 여기서는 서로 다른 $n$의 구간이 서로소이고 같은 $n$의 구간끼리는 포함관계라 조건이 자동으로 만족된다.'},
    {n:'②',text:'도집합 $A\'$은 집적점(accumulation point)들의 집합이다. $x\\in A\'$은 "$x$의 임의의 근방이 $A$의 원소를 $x$ 자신 말고도 포함한다"는 뜻이다. $A$가 한 점 집합이면 "모든 근방이 그 점을 포함한다"로 단순해진다.'},
    {n:'③',text:'이 위상은 오른쪽으로만 열린 구간을 쓰기 때문에 대칭성이 깨져 있다. $\\frac12$보다 큰 점들은 $\\frac12$을 떼어낼 수 없지만, 작은 점들은 $(0,2^{-k})$로 떼어낼 수 있다. 그래서 도집합이 한쪽으로만 생긴다.'}
  ]
},

{
  id:'2015a10', year:2015, type:'전공A', cat:'cpt', pts:2,
  title:'상위상에서 연결성분의 개수',
  problem:`자연수 전체의 집합 $\\mathbb{N}=\\{1,2,3,\\dots\\}$에 대하여, 집합 $X=\\{(m,n)\\in\\mathbb{N}\\times\\mathbb{N}\\mid m\\ge12\\ \\text{또는}\\ n\\ge6\\}$에 다음과 같이 위상 $\\mathfrak{J}$가 주어졌다고 하자.

$$\\mathfrak{J}=\\{G\\subseteq X\\mid X-G\\text{는 유한집합}\\}\\cup\\{\\varnothing\\}$$

함수 $f:X\\to\\mathbb{N}$을 $f(m,n)=m+n$으로 정의하고, $\\mathbb{N}$의 위상을 $\\mathfrak{J}_{\\mathbb{N}}=\\{U\\subseteq\\mathbb{N}\\mid f^{-1}(U)\\in\\mathfrak{J}\\}$라 하자. 위상공간 $(\\mathbb{N},\\mathfrak{J}_{\\mathbb{N}})$의 연결성분(connected component)의 개수를 구하시오.`,
  steps:[
    {num:'Step 1', title:'어떤 $k$에서 $f^{-1}(k)$가 비는지 확인',
     body:`$(m,n)\\notin X$는 $m\\le11$ **이고** $n\\le5$인 경우입니다.

$m+n=k$인 점이 모두 $X$ 밖에 있으려면, $m=1,\\dots,k-1$ 전부에 대해 $m\\le11$이고 $k-m\\le5$여야 합니다. 뒤 조건은 $m\\ge k-5$이므로 $1\\ge k-5$, 즉 $k\\le6$입니다.

$$f^{-1}(k)=\\varnothing\\iff k\\le6$$

실제로 $k=7$이면 $(1,6)\\in X$이므로 비지 않습니다. 또 각 $f^{-1}(k)$는 많아야 $k-1$개 점이라 항상 유한집합입니다.`},
    {num:'Step 2', title:'$\\mathfrak{J}_{\\mathbb{N}}$의 열린집합 결정',
     body:`$U$가 열린집합이려면 $f^{-1}(U)=\\varnothing$이거나 $X-f^{-1}(U)=f^{-1}(\\mathbb{N}-U)$가 유한이어야 합니다.

$f^{-1}(U)=\\varnothing\\iff U\\subseteq\\{1,\\dots,6\\}$

$f^{-1}(\\mathbb{N}-U)$ 유한 $\\iff$ $\\mathbb{N}-U$에 $7$ 이상인 원소가 유한개 (각 섬유가 유한이고 $k\\ge7$이면 비지 않으므로)

$N_0=\\{1,\\dots,6\\}$, $N_1=\\{7,8,\\dots\\}$라 하면 ①

$$U\\in\\mathfrak{J}_{\\mathbb{N}}\\iff U\\subseteq N_0\\ \\text{또는}\\ N_1\\setminus U\\text{가 유한}$$`},
    {num:'Step 3', title:'$N_0$의 각 점은 열린동시에 닫힌집합',
     body:`$k\\le6$이면 $\\{k\\}\\subseteq N_0$이므로 열린집합입니다. 또 여집합 $\\mathbb{N}-\\{k\\}$는 $N_1$을 통째로 포함하므로 $N_1\\setminus(\\mathbb{N}-\\{k\\})=\\varnothing$이 유한, 즉 열린집합입니다.

따라서 $\\{k\\}$는 **열린닫힌집합(clopen)**이고, $1,\\dots,6$은 각각 혼자서 연결성분이 됩니다 → **6개**`},
    {num:'Step 4', title:'$N_1$은 하나의 연결성분',
     body:`$N_1$의 부분공간위상은 유한여집합위상입니다(Step 2에서 $U\\cap N_1$이 $N_1$에서 여집합이 유한). 무한집합 위의 유한여집합위상은 공집합이 아닌 두 열린집합이 항상 만나므로 **연결**입니다 ②.

또 $N_1$은 열린집합이고 여집합 $N_0$도 열린집합이라 $N_1$은 clopen입니다. 따라서 $N_1$은 그 자체로 하나의 연결성분입니다.

$$\\text{연결성분의 개수}=6+1=7$$`}
  ],
  answer:'$7$개',
  footnotes:[
    {n:'①',text:'상위상(quotient topology) $\\mathfrak{J}_{\\mathbb{N}}=\\{U\\mid f^{-1}(U)\\in\\mathfrak{J}\\}$는 $f$를 연속으로 만드는 가장 큰(가장 촘촘한) 위상이다. 상(image)에 들어가지 않는 점들($1,\\dots,6$)은 당겨오면 공집합이라 아무 제약을 받지 않아 자유롭게 열린집합이 된다.'},
    {n:'②',text:'무한집합 위의 유한여집합위상은 항상 연결이다. 공집합이 아닌 두 열린집합 $U,V$에 대해 $U\\cap V$의 여집합은 유한집합 두 개의 합집합이라 유한이므로 $U\\cap V\\ne\\varnothing$이고, 따라서 서로소인 두 열린집합으로 분할할 수 없다.'},
    {n:'③',text:'연결성분은 그 점을 포함하는 가장 큰 연결부분집합이다. clopen 집합은 다른 성분과 절대 섞이지 않으므로, 공간이 clopen 조각들로 쪼개지면 성분을 조각별로 따로 세면 된다.'}
  ]
},

// ───────────────────────────────────────
// 2016
// ───────────────────────────────────────
{
  id:'2016a12', year:2016, type:'전공A', cat:'basic', pts:4,
  title:'아래끝위상 $\\times$ 위끝위상에서 원판의 내부·폐포·경계',
  problem:`실수 전체의 집합 $\\mathbb{R}$에서 $\\{[a,b)\\mid a,b\\in\\mathbb{R}\\}$를 기저로 하는 위상을 $\\mathfrak{J}_l$이라 하고, $\\{(a,b]\\mid a,b\\in\\mathbb{R}\\}$를 기저로 하는 위상을 $\\mathfrak{J}_u$라 하자. 적공간(곱공간, product space) $(\\mathbb{R},\\mathfrak{J}_l)\\times(\\mathbb{R},\\mathfrak{J}_u)$에서 집합

$$A=\\{(x,y)\\in\\mathbb{R}\\times\\mathbb{R}\\mid x^2+y^2\\le1\\}$$

의 내부(interior) $A^{\\circ}$를 풀이 과정과 함께 쓰시오. 또한 $A$의 폐포(closure) $\\overline{A}$와 $A$의 경계(boundary) $b(A)$를 구하시오.`,
  diagram:`<svg viewBox="0 0 300 260" xmlns="http://www.w3.org/2000/svg" style="font-family:'Noto Sans KR',sans-serif">
    <text x="150" y="16" font-size="11" fill="var(--t2)" text-anchor="middle">기본근방은 [x, x+ε) × (y−δ, y] — 오른쪽·아래로 뻗는 상자</text>
    <circle cx="150" cy="130" r="80" fill="var(--acc)" fill-opacity="0.13" stroke="var(--t3)" stroke-width="1.4"/>
    <path d="M 150,50 A 80,80 0 0,0 70,130" fill="none" stroke="var(--acc)" stroke-width="4"/>
    <circle cx="150" cy="50" r="4" fill="var(--bg)" stroke="var(--acc)" stroke-width="2"/>
    <circle cx="70" cy="130" r="4" fill="var(--bg)" stroke="var(--acc)" stroke-width="2"/>
    <rect x="93.4" y="73.4" width="26" height="20" fill="none" stroke="var(--t1)" stroke-width="1.3" stroke-dasharray="3 2"/>
    <circle cx="93.4" cy="93.4" r="2.8" fill="var(--t1)"/>
    <line x1="55" y1="130" x2="250" y2="130" stroke="var(--t2)" stroke-width="1.1"/>
    <line x1="150" y1="222" x2="150" y2="40" stroke="var(--t2)" stroke-width="1.1"/>
    <text x="145" y="126" font-size="10" fill="var(--t3)" text-anchor="end">O</text>
    <text x="232" y="126" font-size="10" fill="var(--t3)" text-anchor="middle">1</text>
    <text x="140" y="62" font-size="10" fill="var(--t3)" text-anchor="end">1</text>
    <text x="248" y="146" font-size="11" fill="var(--t2)">x</text>
    <text x="162" y="60" font-size="11" fill="var(--t2)">y</text>
    <text x="150" y="34" font-size="10" fill="var(--acc)" text-anchor="middle">굵은 호(양 끝 제외)는 내부에 포함</text>
    <text x="128" y="86" font-size="9" fill="var(--t1)">기본근방</text>
    <text x="150" y="238" font-size="10" fill="var(--t3)" text-anchor="middle">x&lt;0, y&gt;0 인 호에서는 상자가 원 안쪽으로 들어간다</text>
    <text x="150" y="252" font-size="10" fill="var(--t3)" text-anchor="middle">양 끝점 (0,1), (−1,0) 은 제외</text>
  </svg>`,
  steps:[
    {num:'Step 1', title:'기본근방의 모양',
     body:`적공간의 기저는 $[a,b)\\times(c,d]$입니다. 점 $(x,y)$를 포함하는 것 중 가장 작은 모양은

$$[x,\\ x+\\varepsilon)\\times(y-\\delta,\\ y]$$

입니다. 즉 $x$는 **자기 자신과 오른쪽**, $y$는 **자기 자신과 아래쪽**만 데리고 갑니다 ①.

$(x,y)\\in A^{\\circ}$는 이런 상자 하나가 통째로 $A$에 들어간다는 뜻입니다.`},
    {num:'Step 2', title:'원판 내부의 점',
     body:`$x^2+y^2<1$이면 상자를 충분히 작게 잡아 $[x,x+\\varepsilon]\\times[y-\\delta,y]$ 전체를 열린원판 안에 넣을 수 있습니다(연속성). 따라서

$$\\{(x,y)\\mid x^2+y^2<1\\}\\subseteq A^{\\circ}$$`},
    {num:'Step 3', title:'원 위의 점 — 부호에 따라 갈림',
     body:`$x^2+y^2=1$인 점을 봅니다. 상자에는 $x'>x$인 점과 $y'=y$인 점이 반드시 들어 있습니다.

**(i) $x\\ge0$인 경우:** $x'>x\\ge0$이므로 $x'^2>x^2$입니다. 상자의 점 $(x',y)$는 $x'^2+y^2>1$이라 $A$ 밖입니다. → 내부 아님

**(ii) $x<0$, $y>0$인 경우:** $\\varepsilon$을 $x+\\varepsilon\\le0$이 되게, $\\delta$를 $y-\\delta>0$이 되게 잡으면 상자 안에서 $x'\\in[x,0]$이라 $|x'|\\le|x|$, $y'\\in(0,y]$라 $|y'|\\le|y|$입니다. 따라서

$$x'^2+y'^2\\le x^2+y^2=1$$

로 상자 전체가 $A$에 들어갑니다 ②. → **내부**

**(iii) $x<0$, $y<0$인 경우:** $y'<y<0$이면 $y'^2>y^2$이고 $x'=x$도 가능하므로 $x^2+y'^2>1$. → 내부 아님

**(iv) $(x,y)=(-1,0)$:** $x'=-1$, $y'<0$인 점이 상자에 있고 $1+y'^2>1$. → 내부 아님`},
    {num:'Step 4', title:'내부 결론',
     body:`$$A^{\\circ}=\\{(x,y)\\mid x^2+y^2<1\\}\\ \\cup\\ \\{(x,y)\\mid x^2+y^2=1,\\ x<0,\\ y>0\\}$$

열린원판에 제2사분면 쪽 **열린 호**(양 끝점 $(0,1)$, $(-1,0)$ 제외)가 붙은 모양입니다.`},
    {num:'Step 5', title:'폐포와 경계',
     body:`$\\mathfrak{J}_l$과 $\\mathfrak{J}_u$는 모두 보통위상보다 촘촘하므로, 적공간의 위상도 $\\mathbb{R}^2$의 보통위상보다 촘촘합니다. 촘촘한 위상에서는 닫힌집합이 더 많아지므로, 보통위상에서 닫힌집합인 $A$는 여기서도 닫힌집합입니다 ③.

$$\\overline{A}=A$$

$$b(A)=\\overline{A}\\setminus A^{\\circ}=A\\setminus A^{\\circ}=\\{(x,y)\\mid x^2+y^2=1\\}\\setminus\\{x<0,\\ y>0\\}$$

즉 단위원에서 제2사분면의 열린 호를 뺀 것, 다시 말해

$$b(A)=\\{(\\cos\\theta,\\sin\\theta)\\mid \\theta\\in[0,\\tfrac\\pi2]\\cup[\\pi,2\\pi)\\}$$`}
  ],
  answer:'$A^{\\circ}=\\{x^2+y^2<1\\}\\cup\\{x^2+y^2=1,\\ x<0,\\ y>0\\}$, $\\overline{A}=A$, $b(A)=\\{x^2+y^2=1\\}\\setminus\\{x<0,\\ y>0\\}$',
  footnotes:[
    {n:'①',text:'$\\mathfrak{J}_l$은 아래끝위상(lower limit topology, 조르겐프라이 직선), $\\mathfrak{J}_u$는 위끝위상이다. 각각 "오른쪽으로만 열림", "왼쪽으로만 열림"이라 방향에 따라 비대칭이고, 그 비대칭이 이 문제에서 특정 사분면의 호만 살아남게 만든다.'},
    {n:'②',text:'등호가 성립하는 점은 상자 안에서 $(x,y)$ 하나뿐이고 그 점은 $A$에 속하므로 문제되지 않는다. $A$가 닫힌원판(등호 포함)이라는 점이 여기서 결정적이다.'},
    {n:'③',text:'$\\mathfrak{J}_1\\subseteq\\mathfrak{J}_2$이면 $\\mathfrak{J}_1$-닫힌집합은 모두 $\\mathfrak{J}_2$-닫힌집합이다. 반대로 내부는 촘촘한 위상에서 더 커질 수 있는데, 이 문제에서 호가 내부에 새로 들어온 것이 바로 그 현상이다.'}
  ]
},

// ───────────────────────────────────────
// 2017
// ───────────────────────────────────────
{
  id:'2017a12', year:2017, type:'전공A', cat:'func', pts:4,
  title:'$d(p,q)=\\max\\{\\|p\\|,\\|q\\|\\}$가 만드는 거리위상',
  problem:`좌표평면 $\\mathbb{R}^2$에서 거리함수(metric, distance function) $d:\\mathbb{R}^2\\times\\mathbb{R}^2\\to\\mathbb{R}$는

$$d(p,q)=\\begin{cases}0, & p=q\\\\ \\max\\{\\|p\\|,\\|q\\|\\}, & p\\ne q\\end{cases}$$

이다. $d$에 의해 유도된 $\\mathbb{R}^2$ 상의 거리위상(metric topology)을 $\\mathfrak{J}_d$라 하자. 위상공간 $(\\mathbb{R}^2,\\mathfrak{J}_d)$의 부분집합

$$A=\\{(x,0)\\in\\mathbb{R}^2\\mid 0<x<1\\}$$

의 폐포(closure) $\\overline{A}$를 풀이 과정과 함께 쓰시오.

또한 $(\\mathbb{R}^2,\\mathfrak{J}_d)$에서 컴팩트(compact)인 무한 부분집합 $B$의 예를 하나 제시하시오. (단, $p=(x,y)$에 대하여 $\\|p\\|=\\sqrt{x^2+y^2}$이고 $\\max\\{a,b\\}$는 $a$와 $b$ 중 작지 않은 수이다.)`,
  diagram:`<svg viewBox="0 0 300 230" xmlns="http://www.w3.org/2000/svg" style="font-family:'Noto Sans KR',sans-serif">
    <text x="150" y="16" font-size="11" fill="var(--t2)" text-anchor="middle">원점만 특별하고, 나머지 점은 모두 고립점</text>
    <circle cx="150" cy="120" r="62" fill="var(--acc)" fill-opacity="0.12" stroke="var(--acc)" stroke-width="1.5" stroke-dasharray="5 3"/>
    <circle cx="150" cy="120" r="38" fill="none" stroke="var(--acc)" stroke-width="1.2" stroke-dasharray="4 3"/>
    <circle cx="150" cy="120" r="4.5" fill="var(--t1)"/>
    <circle cx="205" cy="70" r="2.8" fill="var(--t2)"/>
    <circle cx="96" cy="72" r="2.8" fill="var(--t2)"/>
    <circle cx="220" cy="165" r="2.8" fill="var(--t2)"/>
    <circle cx="88" cy="168" r="2.8" fill="var(--t2)"/>
    <circle cx="240" cy="112" r="2.8" fill="var(--t2)"/>
    <line x1="152" y1="120" x2="238" y2="120" stroke="var(--acc)" stroke-width="3.5"/>
    <line x1="60" y1="120" x2="270" y2="120" stroke="var(--t2)" stroke-width="1"/>
    <line x1="150" y1="205" x2="150" y2="35" stroke="var(--t2)" stroke-width="1"/>
    <text x="145" y="134" font-size="10" fill="var(--t3)" text-anchor="end">O</text>
    <text x="238" y="134" font-size="10" fill="var(--t3)" text-anchor="middle">1</text>
    <text x="196" y="114" font-size="10" fill="var(--acc)" text-anchor="middle">A</text>
    <text x="182" y="176" font-size="9" fill="var(--acc)">B(O, r)</text>
    <text x="150" y="220" font-size="10" fill="var(--t3)" text-anchor="middle">원점의 근방만 보통 원판, 다른 점 p 는 B(p,‖p‖)={p}</text>
  </svg>`,
  steps:[
    {num:'Step 1', title:'열린공의 모양 파악',
     body:`$B(p,r)=\\{q\\mid d(p,q)<r\\}$을 계산합니다. $q\\ne p$이면 $d(p,q)=\\max\\{\\|p\\|,\\|q\\|\\}<r$은 $\\|p\\|<r$ **이고** $\\|q\\|<r$과 같습니다.

$$B(p,r)=\\begin{cases}\\{p\\}, & r\\le\\|p\\|\\\\ \\{q\\mid\\|q\\|<r\\}, & r>\\|p\\|\\end{cases}$$

즉 $p\\ne O$이면 $r=\\|p\\|$로 잡아 $B(p,\\|p\\|)=\\{p\\}$이므로 **$p$는 고립점**입니다 ①.

$p=O$이면 $\\|O\\|=0$이라 모든 $r>0$에서 $B(O,r)$은 원점 중심의 보통 열린원판입니다.`},
    {num:'Step 2', title:'열린집합의 정체',
     body:`$$\\mathfrak{J}_d=\\{U\\mid O\\notin U\\}\\cup\\{U\\mid O\\in U\\text{이고 }U\\text{가 원점 중심 보통 원판을 포함}\\}$$

원점을 뺀 모든 점은 이산적으로 흩어져 있고, 원점 근처에서만 보통위상처럼 보이는 구조입니다.`},
    {num:'Step 3', title:'$\\overline{A}$ 계산',
     body:`$p\\notin A$일 때 $p\\in\\overline{A}$인지 봅니다.

$p\\ne O$: $\\{p\\}$가 열린집합이고 $\\{p\\}\\cap A=\\varnothing$이므로 $p\\notin\\overline A$

$p=O$: 임의의 $r>0$에 대해 $B(O,r)$은 보통 원판이고, $A$는 원점에 얼마든지 가까운 점 $(x,0)$을 가지므로 $B(O,r)\\cap A\\ne\\varnothing$ → $O\\in\\overline A$

$$\\overline{A}=A\\cup\\{(0,0)\\}=\\{(x,0)\\mid 0<x<1\\}\\cup\\{(0,0)\\}$$`},
    {num:'Step 4', title:'컴팩트인 무한집합의 예',
     body:`$$B=\\left\\{\\left(\\frac1n,0\\right)\\ \\middle|\\ n\\in\\mathbb{N}\\right\\}\\cup\\{(0,0)\\}$$

**이유:** $\\mathcal{U}$를 $B$의 임의의 열린덮개라 하면, 원점을 덮는 $U_0\\in\\mathcal{U}$는 어떤 $r>0$에 대해 $B(O,r)$을 포함합니다. $\\frac1n<r$인 $n$은 유한개를 제외한 전부이므로, $U_0$가 $B$의 점을 유한개만 빼고 모두 덮습니다. 남은 유한개를 각각 덮는 원소를 하나씩 고르면 유한부분덮개가 완성됩니다 ②.

$B$는 무한집합이므로 조건을 만족합니다.`}
  ],
  answer:'$\\overline{A}=A\\cup\\{(0,0)\\}$; 컴팩트 무한집합의 예: $B=\\left\\{\\left(\\frac1n,0\\right)\\right\\}\\cup\\{(0,0)\\}$',
  footnotes:[
    {n:'①',text:'이 거리는 "모든 이동이 원점을 거쳐야 하는" 구조다(우체국 거리, post office metric의 변형). 두 점이 아무리 가까워도 거리가 $\\max\\{\\|p\\|,\\|q\\|\\}$로 뚝 떨어지지 않기 때문에 원점 아닌 점들이 전부 고립된다.'},
    {n:'②',text:'원점 아닌 점이 모두 고립점이므로, 컴팩트한 무한집합은 반드시 원점을 포함해야 하고 원점의 임의의 보통 원판이 그 집합의 거의 모든 점을 삼켜야 한다. 즉 보통위상에서 원점으로 수렴하는 수열에 극한을 붙인 꼴이어야 한다.'},
    {n:'③',text:'$d$가 실제로 거리함수인지 확인하려면 삼각부등식 $d(p,r)\\le d(p,q)+d(q,r)$을 봐야 한다. $p\\ne r$이면 좌변은 $\\max\\{\\|p\\|,\\|r\\|\\}$인데, 우변에는 $\\|p\\|$와 $\\|r\\|$이 각각 한 번씩 등장하므로 성립한다.'}
  ]
},

// ───────────────────────────────────────
// 2018
// ───────────────────────────────────────
{
  id:'2018a12', year:2018, type:'전공A', cat:'basic', pts:4,
  title:'상위상에서 열린집합의 개수와 도집합',
  problem:`위상공간 $(\\mathbb{R}^2,\\mathfrak{J}_u)$의 부분공간(subspace)

$$A=\\{(x,y)\\in\\mathbb{R}^2\\mid x^2+y^2<4\\}$$

와 집합 $X=\\{-3,-2,-1,0,1,2,3\\}$에 대하여 함수 $f:A\\to X$를 $f(x,y)=\\lfloor x^2+y^2\\rfloor$로 정의하자. 집합 $X$ 위의 위상 $\\mathfrak{J}$를

$$\\mathfrak{J}=\\{U\\subseteq X\\mid f^{-1}(U)\\in\\mathfrak{J}_u\\}$$

로 정의할 때, $3$을 원소로 갖는 $X$의 모든 열린집합(open set)의 개수를 풀이 과정과 함께 쓰시오. 또 위상공간 $(X,\\mathfrak{J})$에서 집합 $B=\\{1,2\\}$의 도집합(derived set) $B'$을 구하시오. (단, $\\mathfrak{J}_u$는 $\\mathbb{R}^2$ 위의 보통위상이고, $\\lfloor x\\rfloor$는 $x$를 넘지 않는 최대 정수이다.)`,
  steps:[
    {num:'Step 1', title:'각 준위집합의 모양',
     body:`$A$에서 $x^2+y^2\\in[0,4)$이므로 $f$의 상은 $\\{0,1,2,3\\}$입니다. $-3,-2,-1$은 상에 들어가지 않아 $f^{-1}$이 공집합입니다.

$$f^{-1}(k)=\\{(x,y)\\mid k\\le x^2+y^2<k+1\\}\\quad(k=0,1,2,3)$$

$k=0$은 열린원판, $k=1,2,3$은 안쪽 원을 포함하는 **반열린 고리**라 열린집합이 아닙니다.`},
    {num:'Step 2', title:'어떤 $U$가 열린집합인가',
     body:`$f^{-1}(U)=f^{-1}(U\\cap\\{0,1,2,3\\})$이고, 여러 준위집합의 합집합이 열린집합이 되려면 안쪽 경계원이 모두 메워져야 합니다. 즉 $0$부터 연속으로 채워진 경우뿐입니다 ①.

$$f^{-1}(\\{0\\})=\\{r^2<1\\},\\quad f^{-1}(\\{0,1\\})=\\{r^2<2\\},\\quad f^{-1}(\\{0,1,2\\})=\\{r^2<3\\},\\quad f^{-1}(\\{0,1,2,3\\})=A$$

모두 열린집합입니다. 반면 $1$을 포함하면서 $0$을 빼면 원 $r^2=1$ 위의 점이 내점이 되지 못해 열린집합이 아닙니다.

$$U\\in\\mathfrak{J}\\iff U\\cap\\{0,1,2,3\\}\\in\\big\\{\\varnothing,\\{0\\},\\{0,1\\},\\{0,1,2\\},\\{0,1,2,3\\}\\big\\}$$

한편 $-3,-2,-1$은 어떻게 넣어도 $f^{-1}$에 영향이 없으므로 **자유**입니다.`},
    {num:'Step 3', title:'$3$을 포함하는 열린집합의 개수',
     body:`$3\\in U$이려면 $U\\cap\\{0,1,2,3\\}=\\{0,1,2,3\\}$이어야 합니다(선택지 중 $3$을 포함하는 것은 이것뿐).

$\\{-3,-2,-1\\}$의 부분집합은 자유롭게 붙일 수 있으므로 $2^3=8$가지입니다.

$$\\text{개수}=8$$`},
    {num:'Step 4', title:'각 점의 최소 열린근방',
     body:`$-3,-2,-1$: $\\{-3\\},\\{-2\\},\\{-1\\}$ 자체가 열린집합 (최소근방은 자기 자신)

$0$: $\\{0\\}$

$1$: $\\{0,1\\}$

$2$: $\\{0,1,2\\}$

$3$: $\\{0,1,2,3\\}$`},
    {num:'Step 5', title:'도집합 $B\'$ 계산',
     body:`$x\\in B'$은 "$x$의 최소 열린근방이 $B\\setminus\\{x\\}$와 만난다"와 같습니다 ②. $B=\\{1,2\\}$입니다.

$x=-3,-2,-1$: 최소근방 $\\{x\\}$, $B$와 만나지 않음 → 제외

$x=0$: 최소근방 $\\{0\\}$, $B$와 만나지 않음 → 제외

$x=1$: 최소근방 $\\{0,1\\}$, $B\\setminus\\{1\\}=\\{2\\}$와 만나지 않음 → 제외

$x=2$: 최소근방 $\\{0,1,2\\}$, $B\\setminus\\{2\\}=\\{1\\}$을 포함 → **포함**

$x=3$: 최소근방 $\\{0,1,2,3\\}$, $B\\setminus\\{3\\}=\\{1,2\\}$와 만남 → **포함**

$$B'=\\{2,3\\}$$`}
  ],
  answer:'$3$을 포함하는 열린집합은 $8$개, $B\'=\\{2,3\\}$',
  footnotes:[
    {n:'①',text:'상위상에서 $U$가 열린집합인지 보려면 반드시 $f^{-1}(U)$를 원래 공간에서 확인해야 한다. 여기서는 준위집합이 동심원 고리라, 합집합이 열린집합이 되려면 가장 안쪽 원판부터 빠짐없이 채워져야 한다.'},
    {n:'②',text:'각 점이 최소 열린근방을 갖는 유한위상공간에서는 $x\\in B\'$가 "$x$의 최소근방이 $B\\setminus\\{x\\}$와 만난다"로 간단해진다. 최소근방이 다른 모든 근방에 포함되므로 그것 하나만 확인하면 되기 때문이다.'},
    {n:'③',text:'$0<1<2<3$ 쪽으로만 근방이 커지는 이 구조는 "특수화 순서(specialization order)"가 들어간 유한위상의 전형이다. 그래서 도집합도 위쪽 방향으로만 생긴다.'}
  ]
},

// ───────────────────────────────────────
// 2019
// ───────────────────────────────────────
{
  id:'2019a12', year:2019, type:'전공A', cat:'cpt', pts:4,
  title:'유한여집합위상의 부분공간을 붙인 공간의 경계와 컴팩트성',
  problem:`실수 전체의 집합 $\\mathbb{R}$ 위의 위상

$$\\mathfrak{J}=\\{U\\subseteq\\mathbb{R}\\mid\\mathbb{R}-U\\text{는 유한집합}\\}\\cup\\{\\varnothing\\}$$

에 대하여, $(\\mathbb{R},\\mathfrak{J})$의 두 부분공간(subspace) $A=[0,1]\\cup[2,3)$과 $B=\\{3,4,5\\}$의 위상을 각각 $\\mathfrak{J}_A$, $\\mathfrak{J}_B$라 하자. 집합 $X=A\\cup B$에서 $\\mathfrak{J}_A\\cup\\mathfrak{J}_B$를 기저(base, basis)로 하는 위상을 $\\mathfrak{J}'$이라 할 때, 위상공간 $(X,\\mathfrak{J}')$에서 집합

$$C=\\left\\{3-\\frac1n\\ \\middle|\\ n\\in\\mathbb{N}\\right\\}\\cup\\{3\\}$$

의 경계(boundary) $b(C)$를 구하시오. 또한 $(X,\\mathfrak{J}')$이 컴팩트 공간(compact space)임을 보이시오.`,
  steps:[
    {num:'Step 1', title:'$A$와 $B$가 서로소임을 확인',
     body:`$A=[0,1]\\cup[2,3)$은 $3$을 포함하지 않으므로 $A\\cap B=\\varnothing$입니다. 따라서 $X=A\\sqcup B$이고, 기저가 $\\mathfrak{J}_A\\cup\\mathfrak{J}_B$이므로 $A$와 $B$는 각각 $X$에서 **열린동시에 닫힌집합**입니다 ①.

$$\\mathfrak{J}'=\\{G\\cup H\\mid G\\in\\mathfrak{J}_A,\\ H\\in\\mathfrak{J}_B\\}$$

즉 $X$는 두 공간의 위상적 직합입니다.`},
    {num:'Step 2', title:'각 조각의 위상',
     body:`$\\mathfrak{J}_A$: $A$가 무한집합이고 $U\\cap A$의 $A$에서의 여집합이 유한이므로, $\\mathfrak{J}_A$는 $A$ 위의 **유한여집합위상**입니다.

$\\mathfrak{J}_B$: $B=\\{3,4,5\\}$가 유한집합이므로 임의의 부분집합이 어떤 여유한집합과의 교집합으로 얻어집니다. 즉 **이산위상**입니다.`},
    {num:'Step 3', title:'$C$를 두 조각으로 나눠 폐포·내부 계산',
     body:`$C_A=\\left\\{3-\\frac1n\\right\\}\\subseteq[2,3)\\subseteq A$는 무한집합, $C\\cap B=\\{3\\}$입니다.

**폐포:** $A$의 유한여집합위상에서 닫힌집합은 유한집합과 $A$뿐입니다. $C_A$가 무한이므로 $\\overline{C_A}=A$. $B$는 이산이므로 $\\overline{\\{3\\}}=\\{3\\}$.

$$\\overline{C}=A\\cup\\{3\\}=[0,1]\\cup[2,3]$$

**내부:** $A$에서 열린집합은 여집합이 유한한 집합인데, $C_A$의 $A$에서의 여집합은 $[0,1]$을 포함해 무한입니다. 따라서 $C_A$의 내부는 $\\varnothing$. $B$는 이산이므로 $\\{3\\}$의 내부는 $\\{3\\}$.

$$C^{\\circ}=\\{3\\}$$`},
    {num:'Step 4', title:'경계',
     body:`$$b(C)=\\overline{C}\\setminus C^{\\circ}=\\big([0,1]\\cup[2,3]\\big)\\setminus\\{3\\}=[0,1]\\cup[2,3)=A$$`},
    {num:'Step 5', title:'컴팩트성 증명',
     body:`$\\mathcal{U}$를 $X$의 임의의 열린덮개라 하자.

$A\\ne\\varnothing$이므로 $A$의 한 점을 덮는 $U_1\\in\\mathcal{U}$를 잡으면, $U_1\\cap A$는 $A$에서 공집합이 아닌 열린집합이므로 $A\\setminus U_1$은 **유한집합**입니다 ②. 그 유한개의 점 각각을 덮는 $\\mathcal{U}$의 원소를 하나씩 고릅니다.

$B=\\{3,4,5\\}$는 세 점뿐이므로 각각을 덮는 원소를 하나씩 고릅니다.

이렇게 고른 유한개의 원소가 $X$ 전체를 덮으므로 $(X,\\mathfrak{J}')$은 컴팩트입니다. $\\blacksquare$`}
  ],
  answer:'$b(C)=[0,1]\\cup[2,3)=A$이고, $(X,\\mathfrak{J}\')$은 컴팩트',
  footnotes:[
    {n:'①',text:'두 공간을 서로소로 붙이고 각각의 열린집합을 모아 기저로 삼으면 위상적 직합(topological sum)이 된다. 이때 폐포·내부·경계는 두 조각에서 따로 계산해 합치면 된다. 서로 영향을 주지 않기 때문이다.'},
    {n:'②',text:'유한여집합위상이 컴팩트인 핵심 이유가 이것이다. 공집합이 아닌 열린집합 하나만 잡아도 유한개를 제외한 전부가 덮인다. 그래서 집합의 크기와 무관하게 항상 컴팩트다.'},
    {n:'③',text:'$C$가 담긴 $[2,3)$ 안에서 $3-\\frac1n\\to3$이지만, 이 공간의 위상은 보통위상이 아니라 유한여집합위상이라 "$3$에 수렴한다"는 직관은 통하지 않는다. $C_A$의 폐포가 $[0,1]$까지 포함해 $A$ 전체가 되는 것이 그 증거다.'}
  ]
},

// ───────────────────────────────────────
// 2020
// ───────────────────────────────────────
{
  id:'2020a11', year:2020, type:'전공A', cat:'basic', pts:4,
  title:'최대정수함수로 만든 부분기저 위상에서 성분·내부·폐포',
  problem:`실수 전체의 집합 $\\mathbb{R}$의 보통 위상을 $\\mathfrak{J}_u$라 하고, 함수 $f_i:\\mathbb{R}\\to(\\mathbb{R},\\mathfrak{J}_u)\\ (i=1,2)$를

$$f_1(x)=\\lfloor x\\rfloor,\\qquad f_2(x)=\\lfloor -x\\rfloor$$

로 정의하자. 집합 $\\{f_1^{-1}(U)\\mid U\\in\\mathfrak{J}_u\\}\\cup\\{f_2^{-1}(U)\\mid U\\in\\mathfrak{J}_u\\}$을 부분기저(subbase, subbasis)로 하여 생성된 $\\mathbb{R}$의 위상을 $\\mathfrak{J}$라 정의하자. 위상공간 $(\\mathbb{R},\\mathfrak{J})$에서 $\\sqrt2$를 포함하는 성분(연결성분, component)을 풀이 과정과 함께 쓰시오. 또한 $(\\mathbb{R},\\mathfrak{J})$에서 집합 $\\left[\\dfrac12,2\\right]$의 내부(interior)와 폐포(closure)를 구하시오.`,
  diagram:`<svg viewBox="0 0 320 150" xmlns="http://www.w3.org/2000/svg" style="font-family:'Noto Sans KR',sans-serif">
    <text x="160" y="16" font-size="11" fill="var(--t2)" text-anchor="middle">ℝ 이 {정수 한 점}과 {열린 단위구간}으로 쪼개진다</text>
    <line x1="42" y1="70" x2="140" y2="70" stroke="var(--t3)" stroke-width="6" stroke-linecap="butt"/>
    <line x1="142" y1="70" x2="188" y2="70" stroke="var(--acc)" stroke-width="7" stroke-linecap="butt"/>
    <line x1="192" y1="70" x2="298" y2="70" stroke="var(--t3)" stroke-width="6" stroke-linecap="butt"/>
    <line x1="30" y1="70" x2="310" y2="70" stroke="var(--t2)" stroke-width="1"/>
    <circle cx="40" cy="70" r="4" fill="var(--t1)"/>
    <circle cx="90" cy="70" r="4" fill="var(--t1)"/>
    <circle cx="140" cy="70" r="4" fill="var(--t1)"/>
    <circle cx="190" cy="70" r="4" fill="var(--t1)"/>
    <circle cx="240" cy="70" r="4" fill="var(--t1)"/>
    <circle cx="290" cy="70" r="4" fill="var(--t1)"/>
    <text x="40" y="88" font-size="10" fill="var(--t3)" text-anchor="middle">−1</text>
    <text x="90" y="88" font-size="10" fill="var(--t3)" text-anchor="middle">0</text>
    <text x="140" y="88" font-size="10" fill="var(--t3)" text-anchor="middle">1</text>
    <text x="190" y="88" font-size="10" fill="var(--t3)" text-anchor="middle">2</text>
    <text x="240" y="88" font-size="10" fill="var(--t3)" text-anchor="middle">3</text>
    <text x="290" y="88" font-size="10" fill="var(--t3)" text-anchor="middle">4</text>
    <circle cx="160.7" cy="70" r="3.2" fill="var(--bg)" stroke="var(--acc)" stroke-width="2"/>
    <text x="160.7" y="52" font-size="10" fill="var(--acc)" text-anchor="middle">√2</text>
    <text x="165" y="112" font-size="10" fill="var(--acc)" text-anchor="middle">√2 를 품은 블록 (1,2) 가 그대로 성분</text>
    <text x="160" y="132" font-size="10" fill="var(--t3)" text-anchor="middle">각 블록은 열린동시에 닫힌집합이고 더 잘게 쪼갤 수 없다</text>
  </svg>`,
  steps:[
    {num:'Step 1', title:'부분기저 원소의 모양',
     body:`$f_1^{-1}(U)=\\{x\\mid\\lfloor x\\rfloor\\in U\\}$는 $[n,n+1)$ 꼴들의 합집합입니다.

$f_2^{-1}(U)=\\{x\\mid\\lfloor -x\\rfloor\\in U\\}$는 $\\lfloor -x\\rfloor=m\\iff m\\le-x<m+1\\iff -m-1<x\\le-m$이므로 $(k,k+1]$ 꼴들의 합집합입니다.`},
    {num:'Step 2', title:'유한교집합으로 기저 만들기',
     body:`부분기저에서 기저를 얻으려면 유한교집합을 취합니다 ①.

$$[n,n+1)\\cap(n,n+1]=(n,n+1),\\qquad [n,n+1)\\cap(n-1,n]=\\{n\\}$$

$n$이 다르면 서로소입니다. 따라서 기저는

$$\\{\\,\\{n\\}\\mid n\\in\\mathbb{Z}\\,\\}\\cup\\{\\,(n,n+1)\\mid n\\in\\mathbb{Z}\\,\\}$$

이고, 이들은 $\\mathbb{R}$을 서로소로 완전히 덮습니다. 즉 $\\mathfrak{J}$는 이 **분할에 의한 위상(partition topology)**이고, 열린집합은 이 블록들의 합집합 전체입니다 ②.`},
    {num:'Step 3', title:'$\\sqrt2$를 포함하는 성분',
     body:`분할위상에서는 각 블록이 열린동시에 닫힌집합입니다. 또 블록 $(n,n+1)$의 부분공간위상은 $\\varnothing$과 자기 자신뿐인 비이산위상이라 **연결**입니다.

성분은 그 점을 포함하는 가장 큰 연결집합인데, 블록이 clopen이므로 블록을 벗어날 수 없고 블록 자체가 연결이므로 성분은 정확히 그 블록입니다.

$1<\\sqrt2<2$이므로

$$\\text{성분}=(1,2)$$`},
    {num:'Step 4', title:'$\\left[\\frac12,2\\right]$의 내부와 폐포',
     body:`분할위상에서 내부는 **완전히 포함되는 블록들의 합집합**, 폐포는 **만나는 블록들의 합집합**입니다 ③.

$S=\\left[\\frac12,2\\right]$와 만나는 블록: $(0,1)$, $\\{1\\}$, $(1,2)$, $\\{2\\}$

이 중 $S$에 완전히 포함되는 것: $\\{1\\}$, $(1,2)$, $\\{2\\}$ ($(0,1)$은 $\\left(0,\\frac12\\right)$가 $S$ 밖이라 제외)

$$S^{\\circ}=\\{1\\}\\cup(1,2)\\cup\\{2\\}=[1,2]$$

$$\\overline{S}=(0,1)\\cup\\{1\\}\\cup(1,2)\\cup\\{2\\}=(0,2]$$`}
  ],
  answer:'성분 $=(1,2)$, $\\left[\\frac12,2\\right]^{\\circ}=[1,2]$, $\\overline{\\left[\\frac12,2\\right]}=(0,2]$',
  footnotes:[
    {n:'①',text:'부분기저에서 위상을 만들 때는 (1) 유한교집합을 모아 기저를 만들고 (2) 그 기저원소들의 임의 합집합을 취한다. 이 문제에서는 오른쪽으로 열린 $[n,n+1)$과 왼쪽으로 열린 $(k,k+1]$이 만나 정수점과 열린구간으로 정확히 쪼개진다.'},
    {n:'②',text:'분할위상: 집합을 서로소인 블록으로 나누고 블록들의 합집합 전체를 열린집합으로 삼는 위상. 모든 열린집합이 동시에 닫힌집합이라 위상이 "완전히 분리된" 형태가 된다.'},
    {n:'③',text:'분할위상에서 $S^{\\circ}=\\bigcup\\{P\\mid P\\subseteq S\\}$, $\\overline S=\\bigcup\\{P\\mid P\\cap S\\ne\\varnothing\\}$이다. 블록보다 더 잘게 나눈 열린집합이 없으므로, 블록 단위로 "통째로 들어가는가 / 스치기라도 하는가"만 보면 된다.'}
  ]
},

{
  id:'2020b2', year:2020, type:'전공B', cat:'func', pts:2,
  title:'원점을 경유하는 거리에서의 거리 계산과 격자점 세기',
  problem:`좌표평면 $\\mathbb{R}^2$의 거리함수 $d((x,y),(a,b))=|x-a|+|y-b|$와 원점 $\\mathrm{O}$에 대하여, $\\mathbb{R}^2$에서 거리함수 $e$를 다음과 같이 정의하자.

$$e(\\mathrm{P},\\mathrm{Q})=\\begin{cases}d(\\mathrm{O},\\mathrm{P})+d(\\mathrm{O},\\mathrm{Q}), & \\mathrm{P}\\ne\\mathrm{Q}\\\\ 0, & \\mathrm{P}=\\mathrm{Q}\\end{cases}$$

거리공간 $(\\mathbb{R}^2,e)$에서 두 점 $(1,3)$과 $\\left(-1,\\dfrac12\\right)$ 사이의 거리를 구하시오. 또한 열린 집합

$$\\{(x,y)\\in\\mathbb{R}^2\\mid e((x,y),(1,3))<9\\}$$

에 속하고 각 좌표가 모두 정수인 원소의 개수를 구하시오.`,
  diagram:`<svg viewBox="0 0 300 252" xmlns="http://www.w3.org/2000/svg" style="font-family:'Noto Sans KR',sans-serif">
    <text x="150" y="16" font-size="11" fill="var(--t2)" text-anchor="middle">|x| + |y| &lt; 5 안의 정수 격자점</text>
    <g transform="translate(0,22)">
    <polygon points="150,0 260,110 150,220 40,110" fill="var(--acc)" fill-opacity="0.10" stroke="var(--acc)" stroke-width="1.6" stroke-dasharray="5 3"/>
    <line x1="30" y1="110" x2="272" y2="110" stroke="var(--t2)" stroke-width="1"/>
    <line x1="150" y1="226" x2="150" y2="6" stroke="var(--t2)" stroke-width="1"/>
    <circle cx="62" cy="110" r="2.6" fill="var(--acc)"/><circle cx="84" cy="132" r="2.6" fill="var(--acc)"/><circle cx="84" cy="110" r="2.6" fill="var(--acc)"/><circle cx="84" cy="88" r="2.6" fill="var(--acc)"/><circle cx="106" cy="154" r="2.6" fill="var(--acc)"/><circle cx="106" cy="132" r="2.6" fill="var(--acc)"/><circle cx="106" cy="110" r="2.6" fill="var(--acc)"/><circle cx="106" cy="88" r="2.6" fill="var(--acc)"/><circle cx="106" cy="66" r="2.6" fill="var(--acc)"/><circle cx="128" cy="176" r="2.6" fill="var(--acc)"/><circle cx="128" cy="154" r="2.6" fill="var(--acc)"/><circle cx="128" cy="132" r="2.6" fill="var(--acc)"/><circle cx="128" cy="110" r="2.6" fill="var(--acc)"/><circle cx="128" cy="88" r="2.6" fill="var(--acc)"/><circle cx="128" cy="66" r="2.6" fill="var(--acc)"/><circle cx="128" cy="44" r="2.6" fill="var(--acc)"/><circle cx="150" cy="198" r="2.6" fill="var(--acc)"/><circle cx="150" cy="176" r="2.6" fill="var(--acc)"/><circle cx="150" cy="154" r="2.6" fill="var(--acc)"/><circle cx="150" cy="132" r="2.6" fill="var(--acc)"/><circle cx="150" cy="110" r="2.6" fill="var(--acc)"/><circle cx="150" cy="88" r="2.6" fill="var(--acc)"/><circle cx="150" cy="66" r="2.6" fill="var(--acc)"/><circle cx="150" cy="44" r="2.6" fill="var(--acc)"/><circle cx="150" cy="22" r="2.6" fill="var(--acc)"/><circle cx="172" cy="176" r="2.6" fill="var(--acc)"/><circle cx="172" cy="154" r="2.6" fill="var(--acc)"/><circle cx="172" cy="132" r="2.6" fill="var(--acc)"/><circle cx="172" cy="110" r="2.6" fill="var(--acc)"/><circle cx="172" cy="88" r="2.6" fill="var(--acc)"/><circle cx="172" cy="66" r="2.6" fill="var(--acc)"/><circle cx="172" cy="44" r="2.6" fill="var(--acc)"/><circle cx="194" cy="154" r="2.6" fill="var(--acc)"/><circle cx="194" cy="132" r="2.6" fill="var(--acc)"/><circle cx="194" cy="110" r="2.6" fill="var(--acc)"/><circle cx="194" cy="88" r="2.6" fill="var(--acc)"/><circle cx="194" cy="66" r="2.6" fill="var(--acc)"/><circle cx="216" cy="132" r="2.6" fill="var(--acc)"/><circle cx="216" cy="110" r="2.6" fill="var(--acc)"/><circle cx="216" cy="88" r="2.6" fill="var(--acc)"/><circle cx="238" cy="110" r="2.6" fill="var(--acc)"/>
    <text x="264" y="124" font-size="11" fill="var(--t2)">x</text>
    <text x="158" y="20" font-size="11" fill="var(--t2)">y</text>
    <text x="150" y="238" font-size="10" fill="var(--t3)" text-anchor="middle">|x|+|y| = 0,1,2,3,4 에 각각 1, 4, 8, 12, 16 개 → 41</text>
    </g>
  </svg>`,
  steps:[
    {num:'Step 1', title:'두 점 사이의 거리',
     body:`$\\mathrm{P}=(1,3)$, $\\mathrm{Q}=\\left(-1,\\frac12\\right)$는 서로 다른 점이므로

$$d(\\mathrm{O},\\mathrm{P})=|1|+|3|=4,\\qquad d(\\mathrm{O},\\mathrm{Q})=|-1|+\\left|\\tfrac12\\right|=\\tfrac32$$

$$e(\\mathrm{P},\\mathrm{Q})=4+\\tfrac32=\\tfrac{11}{2}$$`},
    {num:'Step 2', title:'열린 집합을 부등식으로 정리',
     body:`$(x,y)=(1,3)$이면 $e=0<9$이므로 포함됩니다.

$(x,y)\\ne(1,3)$이면

$$e((x,y),(1,3))=\\big(|x|+|y|\\big)+4<9\\iff |x|+|y|<5$$

$(1,3)$ 자신도 $|1|+|3|=4<5$를 만족하므로, 결국 집합은 ①

$$\\{(x,y)\\mid |x|+|y|<5\\}$$

즉 꼭짓점이 $(\\pm5,0),(0,\\pm5)$인 열린 마름모입니다.`},
    {num:'Step 3', title:'정수 격자점 세기',
     body:`$x,y$가 정수이면 $|x|+|y|$도 정수이므로 $|x|+|y|<5\\iff|x|+|y|\\le4$입니다.

$|x|+|y|=k$인 정수점의 개수는 $k=0$일 때 $1$개, $k\\ge1$일 때 $4k$개입니다 ②.

$$1+4(1+2+3+4)=1+40=41$$`}
  ],
  answer:'거리 $=\\dfrac{11}{2}$, 정수 격자점 $41$개',
  footnotes:[
    {n:'①',text:'이 거리는 "모든 이동이 원점을 거쳐야 하는" 프랑스 철도 거리(SNCF metric)의 택시거리 버전이다. 그래서 어떤 점을 중심으로 잡든 반지름이 충분히 크면 공은 항상 원점 중심의 마름모가 된다.'},
    {n:'②',text:'$|x|+|y|=k\\ (k\\ge1)$인 정수점은 네 변에 각각 $k$개씩 있어 $4k$개다. 축 위의 점 $(\\pm k,0),(0,\\pm k)$가 중복되지 않도록 각 변에서 한쪽 끝만 세면 정확히 $4k$가 된다.'},
    {n:'③',text:'택시거리 $d$에서 원점 중심의 공은 마름모, 유클리드 거리에서는 원이다. 두 거리는 서로 다른 모양의 공을 주지만 같은 위상(보통위상)을 유도한다는 점도 함께 기억해 두면 좋다.'}
  ]
},

// ───────────────────────────────────────
// 2021
// ───────────────────────────────────────
{
  id:'2021a6', year:2021, type:'전공A', cat:'func', pts:4,
  title:'원점을 지나는 직선들의 상공간이 $T_1$이 아닌 이유',
  problem:`$\\mathbb{R}^2$ 위에 동치관계(equivalence relation) $\\sim$을 다음과 같이 정의하자.

$$(x,y)\\sim(x',y')\\iff (x,y)=(tx',ty')\\text{인 실수 }t\\ne0\\text{가 존재한다.}$$

원소 $(x,y)\\in\\mathbb{R}^2$에 대하여 $\\sim$에 관한 동치류(equivalence class)를 $[x,y]$라 하고, $\\sim$에 관한 상집합(quotient set)을 $Y=\\mathbb{R}^2/\\!\\sim$, 상사상(quotient map)을 $\\pi:\\mathbb{R}^2\\to Y$ $(\\pi(x,y)=[x,y])$라 하자. $\\mathbb{R}^2$ 위에 보통위상(usual topology)이 주어진 위상공간을 $X$라 하고, 상집합 $Y$ 위의 $\\pi:X\\to Y$에 대한 상위상(quotient topology)을 $\\mathfrak{J}$라 하자.

이때 $[0,0]$을 포함하는 $\\mathfrak{J}$의 원소가 유일함을 증명하고, $(Y,\\mathfrak{J})$가 $T_1$-공간이 아닌 이유를 서술하시오.`,
  steps:[
    {num:'Step 1', title:'동치류 확인',
     body:`$(x,y)\\sim(0,0)$이려면 $(x,y)=t(0,0)=(0,0)$이므로 원점의 동치류는 $[0,0]=\\{(0,0)\\}$ 한 점뿐입니다.

$(x,y)\\ne(0,0)$의 동치류는 $\\{t(x,y)\\mid t\\ne0\\}$, 즉 **원점을 지나는 직선에서 원점을 뺀 집합**입니다 ①.`},
    {num:'Step 2', title:'$[0,0]$을 포함하는 열린집합은 $Y$뿐임을 증명',
     body:`$U\\in\\mathfrak{J}$이고 $[0,0]\\in U$라 하자. 상위상의 정의에 의해 $\\pi^{-1}(U)$는 $\\mathbb{R}^2$에서 열린집합이고 $(0,0)\\in\\pi^{-1}(U)$이므로, 어떤 $\\varepsilon>0$에 대해

$$B\\big((0,0),\\varepsilon\\big)\\subseteq\\pi^{-1}(U)$$

이제 임의의 $p=(x,y)\\ne(0,0)$을 잡습니다. $t=\\dfrac{\\varepsilon}{2\\|p\\|}>0$으로 두면 $\\|tp\\|=\\frac\\varepsilon2<\\varepsilon$이므로 $tp\\in B((0,0),\\varepsilon)\\subseteq\\pi^{-1}(U)$입니다.

한편 $\\pi^{-1}(U)$는 포화집합(동치류의 합집합)이고 $tp\\sim p$이므로 $p\\in\\pi^{-1}(U)$입니다 ②.

따라서 $\\pi^{-1}(U)=\\mathbb{R}^2$이고 $U=Y$입니다.

$$\\therefore\\ [0,0]\\text{을 포함하는 }\\mathfrak{J}\\text{의 원소는 }Y\\text{ 하나뿐이다.}\\ \\blacksquare$$`},
    {num:'Step 3', title:'$T_1$이 아닌 이유',
     body:`$T_1$-공간이란 서로 다른 두 점 $a\\ne b$에 대하여 $a$는 포함하고 $b$는 포함하지 않는 열린집합이 존재하는 공간입니다 ③.

$a=[0,0]$, $b=[1,0]$을 잡으면 $a\\ne b$입니다. 그런데 Step 2에 의해 $a$를 포함하는 열린집합은 $Y$ 하나뿐이고, $Y$는 당연히 $b$를 포함합니다.

즉 $[0,0]$을 포함하면서 $[1,0]$을 포함하지 않는 열린집합이 존재하지 않으므로 $(Y,\\mathfrak{J})$는 $T_1$-공간이 아닙니다.

(동치인 설명: $T_1$은 모든 한 점 집합이 닫힌집합인 것과 같은데, $p\\ne(0,0)$에 대해 $\\pi^{-1}(\\{[p]\\})$는 직선에서 원점을 뺀 집합이라 $\\mathbb{R}^2$에서 닫힌집합이 아닙니다. 따라서 $\\{[p]\\}$도 닫힌집합이 아닙니다.)`}
  ],
  answer:'$[0,0]$을 포함하는 열린집합은 $Y$뿐이며, 그 때문에 $[0,0]$과 다른 점을 열린집합으로 분리할 수 없어 $T_1$이 아니다',
  footnotes:[
    {n:'①',text:'$Y$는 원점 하나와 실사영직선 $\\mathbb{RP}^1$을 합쳐 놓은 공간이다. 원점의 동치류만 다른 동치류들과 성질이 완전히 다른데, 스칼라배가 원점을 원점으로만 보내기 때문이다.'},
    {n:'②',text:'포화집합(saturated set): $\\pi^{-1}(U)$는 항상 동치류들의 합집합이므로, 어떤 점을 포함하면 그 동치류 전체를 포함한다. 상위상 문제에서 가장 자주 쓰이는 성질이다. 원점 근처의 아주 작은 공만 들어와도, 모든 직선이 그 공을 통과하므로 결국 평면 전체가 끌려 들어온다.'},
    {n:'③',text:'$T_1$ $\\iff$ 모든 한 점 집합이 닫힌집합 $\\iff$ 서로 다른 두 점을 각각 상대를 배제하는 열린집합으로 뽑아낼 수 있음. $T_2$(하우스도르프)보다 약한 조건인데, 이 공간은 그보다 약한 $T_1$조차 만족하지 못한다.'}
  ]
},

{
  id:'2021b2', year:2021, type:'전공B', cat:'cpt', pts:2,
  title:'원소가 4개인 위상 중 연결인 것과 비연결인 것',
  problem:`집합 $X=\\{a,b,c\\}$에서 정의된 두 위상 $\\mathfrak{J}_1$, $\\mathfrak{J}_2$는 다음 조건을 만족시킨다.

(가) $|\\mathfrak{J}_1|=|\\mathfrak{J}_2|=4$

(나) $(X,\\mathfrak{J}_1)$은 연결공간(connected space)이다.

(다) $(X,\\mathfrak{J}_2)$는 비연결공간(disconnected space)이다.

이때 $\\mathfrak{J}_1$, $\\mathfrak{J}_2$를 각각 1개씩 구하시오. (단, $|A|$는 집합 $A$의 원소의 개수이다.)`,
  steps:[
    {num:'Step 1', title:'비연결의 판정 기준',
     body:`$(X,\\mathfrak{J})$가 비연결이라는 것은 $\\varnothing$과 $X$가 아닌 **열린동시에 닫힌집합**이 존재한다는 뜻입니다. 유한공간에서는 "서로소인 공집합이 아닌 두 열린집합의 합집합이 $X$"인지를 보면 됩니다 ①.`},
    {num:'Step 2', title:'연결인 예 $\\mathfrak{J}_1$',
     body:`$$\\mathfrak{J}_1=\\big\\{\\varnothing,\\ \\{a\\},\\ \\{a,b\\},\\ X\\big\\}$$

**위상 확인:** $\\{a\\}\\cup\\{a,b\\}=\\{a,b\\}$, $\\{a\\}\\cap\\{a,b\\}=\\{a\\}$로 모두 $\\mathfrak{J}_1$에 있고 $\\varnothing,X$도 포함되어 있습니다. 원소는 4개입니다.

**연결성:** 각 열린집합의 여집합은 $X,\\{b,c\\},\\{c\\},\\varnothing$인데, $\\{b,c\\}$와 $\\{c\\}$는 $\\mathfrak{J}_1$에 없습니다. 즉 clopen 집합이 $\\varnothing$과 $X$뿐이므로 **연결**입니다.`},
    {num:'Step 3', title:'비연결인 예 $\\mathfrak{J}_2$',
     body:`$$\\mathfrak{J}_2=\\big\\{\\varnothing,\\ \\{a\\},\\ \\{b,c\\},\\ X\\big\\}$$

**위상 확인:** $\\{a\\}\\cup\\{b,c\\}=X$, $\\{a\\}\\cap\\{b,c\\}=\\varnothing$으로 모두 포함됩니다. 원소는 4개입니다.

**비연결성:** $\\{a\\}$와 $\\{b,c\\}$는 공집합이 아닌 서로소 열린집합이고 합집합이 $X$이므로 **비연결**입니다 ②.`}
  ],
  answer:'$\\mathfrak{J}_1=\\{\\varnothing,\\{a\\},\\{a,b\\},X\\}$ (연결), $\\mathfrak{J}_2=\\{\\varnothing,\\{a\\},\\{b,c\\},X\\}$ (비연결)',
  footnotes:[
    {n:'①',text:'연결 $\\iff$ clopen 집합이 $\\varnothing$과 전체뿐. 비연결이면 $X=U\\sqcup V$ ($U,V$는 공집합이 아닌 열린집합)로 쪼개지고, 이때 $U$는 $V$의 여집합이므로 자동으로 닫힌집합도 된다.'},
    {n:'②',text:'답은 유일하지 않다. 예컨대 $\\mathfrak{J}_1=\\{\\varnothing,\\{b\\},\\{b,c\\},X\\}$도 연결이고, $\\mathfrak{J}_2=\\{\\varnothing,\\{b\\},\\{a,c\\},X\\}$도 비연결이다. 문제가 "각각 1개씩"을 요구하므로 하나만 제시하면 된다.'},
    {n:'③',text:'원소가 4개인 위상에서 비연결이 되려면 반드시 "$\\{$한 점$\\}$과 $\\{$나머지 두 점$\\}$"으로 쪼개지는 형태여야 한다. $\\varnothing,X$를 빼면 두 개가 남는데, 그 둘이 서로소이면서 합이 $X$가 되는 경우가 그것뿐이기 때문이다.'}
  ]
},

// ───────────────────────────────────────
// 2022
// ───────────────────────────────────────
{
  id:'2022b6', year:2022, type:'전공B', cat:'func', pts:4,
  title:'유한위상공간에서 점렬의 극한과 정규성 증명',
  problem:`집합 $X=\\{a,b,c\\}$ 위에 $\\mathcal{B}=\\{\\{a\\},\\{a,b\\},\\{c\\}\\}$를 기저(base, basis)로 갖는 위상 $\\mathfrak{J}_{\\mathcal{B}}$가 있다. 위상공간 $(X,\\mathfrak{J}_{\\mathcal{B}})$ 위에서 정의된 점렬(점열, sequence of points)

$$x_n=\\begin{cases}a & (n\\text{은 홀수})\\\\ b & (n\\text{은 짝수})\\end{cases}$$

의 극한(limit)을 쓰시오.

또한, 위상공간 $(X,\\mathfrak{J}_{\\mathcal{B}})$에서 공집합이 아닌 임의의 서로소인 두 닫힌집합(closed set) $F_1$, $F_2$에 대하여

$$F_1\\subset G_1,\\quad F_2\\subset G_2,\\quad G_1\\cap G_2=\\varnothing$$

을 만족하는 열린집합(open set) $G_1$, $G_2$가 존재함을 보이시오.`,
  steps:[
    {num:'Step 1', title:'위상 $\\mathfrak{J}_{\\mathcal{B}}$ 나열',
     body:`기저원소들의 합집합을 모두 취합니다.

$$\\mathfrak{J}_{\\mathcal{B}}=\\big\\{\\varnothing,\\ \\{a\\},\\ \\{c\\},\\ \\{a,b\\},\\ \\{a,c\\},\\ X\\big\\}$$

($\\{a\\}\\cup\\{c\\}=\\{a,c\\}$, $\\{a,b\\}\\cup\\{c\\}=X$)

여집합을 취하면 닫힌집합은

$$\\big\\{X,\\ \\{b,c\\},\\ \\{a,b\\},\\ \\{c\\},\\ \\{b\\},\\ \\varnothing\\big\\}$$`},
    {num:'Step 2', title:'점렬의 극한',
     body:`$x_n\\to L$은 "$L$을 포함하는 임의의 열린집합 $U$에 대해 어떤 $N$ 이후의 모든 $x_n$이 $U$에 속한다"는 뜻입니다 ①. 점렬이 $a$와 $b$를 무한히 번갈아 취하므로, $U$는 $a$와 $b$를 **둘 다** 포함해야 합니다.

$L=a$: $\\{a\\}$가 $a$를 포함하는 열린집합인데 $b\\notin\\{a\\}$ → 실패

$L=b$: $b$를 포함하는 열린집합은 $\\{a,b\\}$와 $X$뿐이고 둘 다 $a,b$를 포함 → **성공**

$L=c$: $\\{c\\}$가 $a$를 포함하지 않음 → 실패

$$\\lim x_n=b$$`},
    {num:'Step 3', title:'서로소인 닫힌집합 쌍 파악',
     body:`공집합이 아닌 닫힌집합은 $\\{b\\}$, $\\{c\\}$, $\\{a,b\\}$, $\\{b,c\\}$, $X$입니다.

이 중 $\\{c\\}$를 제외한 모두가 $b$를 포함합니다. 따라서 서로소인 두 닫힌집합 $F_1,F_2$가 있다면 **둘 다 $b$를 포함할 수는 없으므로 하나는 반드시 $\\{c\\}$**입니다 ②.

$\\{c\\}$와 서로소인 닫힌집합은 $c$를 포함하지 않는 것, 즉 $\\{b\\}$ 또는 $\\{a,b\\}$입니다. 둘 다 $\\{a,b\\}$에 포함됩니다.`},
    {num:'Step 4', title:'분리하는 열린집합 제시',
     body:`일반성을 잃지 않고 $F_2=\\{c\\}$, $F_1\\in\\{\\{b\\},\\{a,b\\}\\}$라 하고

$$G_1=\\{a,b\\},\\qquad G_2=\\{c\\}$$

로 두면

$F_1\\subseteq\\{a,b\\}=G_1$ ✓ / $F_2=\\{c\\}=G_2$ ✓

$G_1,G_2$는 모두 $\\mathfrak{J}_{\\mathcal{B}}$의 원소이므로 열린집합 ✓

$G_1\\cap G_2=\\{a,b\\}\\cap\\{c\\}=\\varnothing$ ✓

따라서 조건을 만족하는 열린집합이 항상 존재합니다. 즉 $(X,\\mathfrak{J}_{\\mathcal{B}})$는 **정규(normal)**입니다 ③. $\\blacksquare$`}
  ],
  answer:'$\\lim x_n=b$; $G_1=\\{a,b\\}$, $G_2=\\{c\\}$가 항상 조건을 만족한다',
  footnotes:[
    {n:'①',text:'일반 위상공간에서 점렬의 극한은 유일하지 않을 수 있다. 하우스도르프($T_2$) 공간에서만 극한의 유일성이 보장된다. 이 문제는 마침 극한이 $b$ 하나뿐이지만, 그것은 우연이지 일반적인 성질이 아니다.'},
    {n:'②',text:'"$\\{c\\}$만 $b$를 안 갖는다"는 관찰이 증명 전체를 끝내준다. 유한위상공간의 분리공리 문제는 이렇게 닫힌집합을 전부 나열한 뒤 서로소인 쌍을 직접 세는 것이 가장 확실하다.'},
    {n:'③',text:'정규공간(normal, $T_4$의 일부)은 서로소인 두 닫힌집합을 서로소인 열린집합으로 분리할 수 있는 공간이다. 이 공간은 정규이지만 $T_1$은 아니다($\\{a\\}$가 닫힌집합이 아님). 분리공리들이 서로 독립적으로 성립할 수 있음을 보여주는 좋은 예다.'}
  ]
},

// ───────────────────────────────────────
// 2023
// ───────────────────────────────────────
{
  id:'2023a10', year:2023, type:'전공A', cat:'cpt', pts:4,
  title:'$K$-위상에서 $K$의 도집합과 $[0,1]$의 컴팩트성',
  problem:`집합 $K=\\left\\{\\dfrac1n\\ \\middle|\\ n\\text{은 자연수}\\right\\}$에 대하여 집합 $\\Omega$를

$$\\Omega=\\{(a,b)\\mid a,b\\in\\mathbb{R},\\ a<b\\}\\cup\\{(a,b)-K\\mid a,b\\in\\mathbb{R},\\ a<b\\}$$

라 하고, $\\Omega$를 기저로 하는 $\\mathbb{R}$ 위의 위상을 $\\mathfrak{J}$라 하자. 위상 공간 $(\\mathbb{R},\\mathfrak{J})$에서 $K$의 도집합(derived set, set of accumulation points) $K'$을 풀이 과정과 함께 쓰시오.

또한 $[0,1]$이 $(\\mathbb{R},\\mathfrak{J})$의 컴팩트(compact, 옹골) 부분집합인지 판별하고 그 이유를 쓰시오.`,
  steps:[
    {num:'Step 1', title:'$K$-위상은 보통위상보다 촘촘함',
     body:`$\\Omega$는 보통위상의 기저 $\\{(a,b)\\}$를 통째로 포함하므로 $\\mathfrak{J}\\supseteq\\mathfrak{J}_u$입니다 ①. 촘촘한 위상에서는 근방이 더 많아지므로 집적점은 오히려 줄어듭니다.

보통위상에서 $K'=\\{0\\}$이므로

$$K'_{\\mathfrak{J}}\\subseteq\\{0\\}$$

이제 $0$이 집적점인지만 확인하면 됩니다.`},
    {num:'Step 2', title:'$0$은 집적점이 아님',
     body:`$(-1,1)-K$는 기저원소이므로 열린집합이고, $0\\notin K$이므로 $0\\in(-1,1)-K$입니다.

그런데 이 근방은 $K$의 원소를 **하나도** 포함하지 않습니다.

$$\\big((-1,1)-K\\big)\\cap K=\\varnothing$$

따라서 $0\\notin K'$이고

$$K'=\\varnothing$$

즉 $K$는 $(\\mathbb{R},\\mathfrak{J})$에서 닫힌집합이며 이산적입니다 ②.`},
    {num:'Step 3', title:'$[0,1]$을 덮는 특별한 덮개 구성',
     body:`다음 열린집합들을 생각합니다.

$$U_0=(-1,2)-K,\\qquad V_1=\\left(\\tfrac12,\\ 2\\right),\\qquad V_n=\\left(\\frac{1}{n+1},\\ \\frac{1}{n-1}\\right)\\ (n\\ge2)$$

$U_0$는 $[0,1]$에서 $K$의 점을 뺀 전부를 덮고, $V_n$은 $\\frac1n$을 덮습니다. 따라서 $\\mathcal{U}=\\{U_0\\}\\cup\\{V_n\\mid n\\in\\mathbb{N}\\}$은 $[0,1]$의 열린덮개입니다.`},
    {num:'Step 4', title:'유한부분덮개가 없음 — 컴팩트가 아님',
     body:`$0$을 포함하는 원소는 $\\mathcal{U}$에서 $U_0$뿐이므로 유한부분덮개는 반드시 $U_0$를 포함해야 합니다. 그런데 $U_0$는 $K$의 점을 하나도 덮지 못합니다.

한편 $n\\ge2$에서 $\\frac{1}{n+1}<\\frac1m<\\frac{1}{n-1}$인 자연수 $m$은 $m=n$뿐이므로, $V_n$은 $K$의 점을 **정확히 하나**만 덮습니다.

$K\\cap[0,1]=K$는 무한집합이므로 유한개의 $V_n$으로는 덮을 수 없습니다.

$$\\therefore\\ [0,1]\\text{은 }(\\mathbb{R},\\mathfrak{J})\\text{에서 컴팩트가 아니다.}$$`}
  ],
  answer:'$K\'=\\varnothing$이고, $[0,1]$은 컴팩트가 아니다',
  footnotes:[
    {n:'①',text:'이 위상을 $K$-위상($\\mathbb{R}_K$)이라 부른다. 보통위상보다 진짜로 촘촘하며(예: $(-1,1)-K$는 보통위상에서 열린집합이 아니다), 하우스도르프이지만 정규가 아닌 대표적 반례 공간이다.'},
    {n:'②',text:'보통위상에서 $0$은 $K$의 유일한 집적점이었는데, $K$를 통째로 도려내는 근방이 새로 생기면서 그 집적점이 사라졌다. 위상을 촘촘하게 만들면 근방이 많아져 집적점이 줄어든다는 원리를 보여주는 예다.'},
    {n:'③',text:'하이네–보렐 정리($\\mathbb{R}$의 유계 닫힌집합은 컴팩트)는 보통위상에서만 성립한다. 이 문제는 위상을 바꾸면 그 정리가 무너진다는 것을 보여준다. $[0,1]$은 여전히 유계이고 닫힌집합이지만 컴팩트가 아니다.'}
  ]
},

{
  id:'2023b2', year:2023, type:'전공B', cat:'func', pts:2,
  title:'노름이 같을 때만 보통거리인 거리공간의 열린공 그리기',
  problem:`좌표평면 $\\mathbb{R}^2$에서 거리함수 $d:\\mathbb{R}^2\\times\\mathbb{R}^2\\to\\mathbb{R}$를 다음과 같이 정의하자.

$$d(P,Q)=\\begin{cases}\\|P\\|+\\|Q\\|, & \\|P\\|\\ne\\|Q\\|\\\\ \\|P-Q\\|, & \\|P\\|=\\|Q\\|\\end{cases}$$

거리공간 $(\\mathbb{R}^2,d)$에서 열린집합(open set)

$$A=\\{P\\in\\mathbb{R}^2\\mid d(P,(2,0))<4\\},\\qquad B=\\{P\\in\\mathbb{R}^2\\mid d(P,(2,0))<1\\}$$

을 좌표평면에 그림으로 순서대로 나타내시오. (단, $\\|(x,y)\\|=\\sqrt{x^2+y^2}$이다.)`,
  diagram:`<svg viewBox="0 0 470 232" xmlns="http://www.w3.org/2000/svg" style="font-family:'Noto Sans KR',sans-serif">
    <text x="115" y="16" font-size="11" fill="var(--t2)" text-anchor="middle">집합 A : 반지름 2 인 닫힌 원판 − {(−2,0)}</text>
    <circle cx="115" cy="120" r="62" fill="var(--acc)" fill-opacity="0.16" stroke="var(--acc)" stroke-width="2"/>
    <circle cx="53" cy="120" r="4.5" fill="var(--bg)" stroke="var(--t1)" stroke-width="2"/>
    <line x1="30" y1="120" x2="200" y2="120" stroke="var(--t2)" stroke-width="1"/>
    <line x1="115" y1="205" x2="115" y2="40" stroke="var(--t2)" stroke-width="1"/>
    <text x="110" y="134" font-size="10" fill="var(--t3)" text-anchor="end">O</text>
    <text x="177" y="134" font-size="10" fill="var(--t3)" text-anchor="middle">2</text>
    <text x="53" y="166" font-size="9" fill="var(--t1)" text-anchor="middle">(−2,0) 제외</text>
    <text x="196" y="136" font-size="11" fill="var(--t2)">x</text>
    <text x="123" y="46" font-size="11" fill="var(--t2)">y</text>
    <text x="350" y="16" font-size="11" fill="var(--t2)" text-anchor="middle">집합 B : 반지름 2 인 원 위의 짧은 열린 호</text>
    <circle cx="350" cy="120" r="62" fill="none" stroke="var(--t3)" stroke-width="1.2" stroke-dasharray="4 3"/>
    <path d="M 411.0,109.6 A 62,62 0 0,1 411.0,130.4" fill="none" stroke="var(--acc)" stroke-width="4.5"/>
    <circle cx="411" cy="109.6" r="3.6" fill="var(--bg)" stroke="var(--acc)" stroke-width="1.8"/>
    <circle cx="411" cy="130.4" r="3.6" fill="var(--bg)" stroke="var(--acc)" stroke-width="1.8"/>
    <line x1="265" y1="120" x2="440" y2="120" stroke="var(--t2)" stroke-width="1"/>
    <line x1="350" y1="205" x2="350" y2="40" stroke="var(--t2)" stroke-width="1"/>
    <text x="345" y="134" font-size="10" fill="var(--t3)" text-anchor="end">O</text>
    <text x="424" y="136" font-size="10" fill="var(--t3)" text-anchor="middle">2</text>
    <text x="436" y="136" font-size="11" fill="var(--t2)">x</text>
    <text x="358" y="46" font-size="11" fill="var(--t2)">y</text>
    <text x="350" y="208" font-size="9" fill="var(--t3)" text-anchor="middle">현의 길이가 1 미만인 부분</text>
    <text x="350" y="222" font-size="9" fill="var(--t3)" text-anchor="middle">(중심각 2·arcsin(1/4) ≈ 29°)</text>
  </svg>`,
  steps:[
    {num:'Step 1', title:'기준점의 노름 확인',
     body:`$Q_0=(2,0)$이므로 $\\|Q_0\\|=2$입니다. 점 $P$를 $\\|P\\|=2$인지 아닌지로 나눕니다 ①.`},
    {num:'Step 2', title:'집합 $A$ 구하기',
     body:`**(i) $\\|P\\|\\ne2$:** $d(P,Q_0)=\\|P\\|+2<4\\iff\\|P\\|<2$

이 조건을 만족하면 자동으로 $\\|P\\|\\ne2$이므로, 열린원판 $\\{\\|P\\|<2\\}$ 전체가 들어갑니다.

**(ii) $\\|P\\|=2$:** $d(P,Q_0)=\\|P-Q_0\\|<4$

반지름 $2$인 원 위에서 $(2,0)$까지의 보통거리는 최대 $4$(지름)이고, 그 값이 되는 점은 대척점 $(-2,0)$ 하나뿐입니다. 따라서 원에서 $(-2,0)$만 빠집니다.

$$A=\\{P\\mid\\|P\\|\\le2\\}\\setminus\\{(-2,0)\\}$$

닫힌 원판에서 한 점을 뺀 집합입니다.`},
    {num:'Step 3', title:'집합 $B$ 구하기',
     body:`**(i) $\\|P\\|\\ne2$:** $d=\\|P\\|+2\\ge2>1$이므로 조건을 만족하는 점이 **없습니다**.

**(ii) $\\|P\\|=2$:** $\\|P-Q_0\\|<1$, 즉 원 위에서 $(2,0)$과의 보통거리(현의 길이)가 $1$ 미만인 부분입니다.

중심각 $\\theta$의 현의 길이는 $2\\cdot2\\sin\\frac\\theta2=4\\sin\\frac\\theta2$이므로

$$4\\sin\\frac\\theta2<1\\iff|\\theta|<2\\arcsin\\frac14\\approx28.96^\\circ$$

$$B=\\left\\{(2\\cos\\theta,\\,2\\sin\\theta)\\ \\middle|\\ |\\theta|<2\\arcsin\\tfrac14\\right\\}$$

즉 $(2,0)$을 중심으로 하는 원 위의 **짧은 열린 호**입니다 ②.`}
  ],
  answer:'$A$ = 반지름 $2$인 닫힌 원판에서 $(-2,0)$을 뺀 집합, $B$ = 반지름 $2$인 원 위에서 $(2,0)$과의 현의 길이가 $1$ 미만인 열린 호',
  footnotes:[
    {n:'①',text:'이 거리는 원점 중심의 동심원마다 "층"을 만든다. 같은 층 안에서는 보통거리를 쓰지만, 층이 다르면 원점을 거쳐 가야 해서 $\\|P\\|+\\|Q\\|$가 된다. 반지름이 작으면 층을 넘어갈 수 없어 공이 호 모양이 되고, 반지름이 크면 여러 층이 한꺼번에 들어와 원판 모양이 된다.'},
    {n:'②',text:'열린공이 "곡선의 일부"가 되는 것이 낯설지만, 거리공간의 정의에는 어긋나지 않는다. $B$는 실제로 열린집합이며, 이 위상에서 각 동심원은 열린동시에 닫힌집합이다.'},
    {n:'③',text:'$A$에서 $(-2,0)$만 빠지는 이유는 $\\|P-Q_0\\|<4$에서 등호가 배제되기 때문이다. 원 위에서 $(2,0)$과의 거리가 정확히 $4$인 점은 대척점 하나뿐이다.'}
  ]
},

// ───────────────────────────────────────
// 2024
// ───────────────────────────────────────
{
  id:'2024a9', year:2024, type:'전공A', cat:'cpt', pts:4,
  title:'$\\mathbb{R}^4$의 직교행렬 집합의 컴팩트성과 비연결성',
  problem:`보통 위상(usual topology)이 주어진 4차원 좌표공간 $\\mathbb{R}^4$에서

$$A=\\{(a,b,c,d)\\in\\mathbb{R}^4\\mid a^2+b^2=1,\\ c^2+d^2=1,\\ ac+bd=0\\}$$

이 컴팩트(긴밀, 옹골, compact) 집합임을 보이시오. 또한, 집합 $A$에서 정의된 함수 $f(a,b,c,d)=ad-bc$의 치역을 구하고, 이를 이용하여 집합 $A$가 연결집합(connected set)인지 판별하고 그 이유를 쓰시오.`,
  steps:[
    {num:'Step 1', title:'닫힌집합임을 보이기',
     body:`$g_1(a,b,c,d)=a^2+b^2$, $g_2=c^2+d^2$, $g_3=ac+bd$는 모두 다항식이므로 연속입니다.

$$A=g_1^{-1}(\\{1\\})\\cap g_2^{-1}(\\{1\\})\\cap g_3^{-1}(\\{0\\})$$

한 점 집합 $\\{1\\},\\{0\\}$은 $\\mathbb{R}$에서 닫힌집합이고, 연속함수에 의한 닫힌집합의 역상은 닫힌집합입니다. 유한교집합도 닫힌집합이므로 $A$는 **닫힌집합**입니다 ①.`},
    {num:'Step 2', title:'유계임을 보이기',
     body:`$A$의 임의의 점에 대하여

$$a^2+b^2+c^2+d^2=1+1=2$$

이므로 $\\|(a,b,c,d)\\|=\\sqrt2$입니다. 즉 $A$는 반지름 $\\sqrt2$인 구면 위에 있어 **유계**입니다.

하이네–보렐 정리에 의해 $\\mathbb{R}^4$의 유계인 닫힌집합은 컴팩트이므로 $A$는 컴팩트입니다. $\\blacksquare$`},
    {num:'Step 3', title:'$f$의 치역 구하기',
     body:`라그랑주 항등식 ②을 씁니다.

$$(ad-bc)^2+(ac+bd)^2=(a^2+b^2)(c^2+d^2)$$

주어진 조건 $ac+bd=0$, $a^2+b^2=c^2+d^2=1$을 대입하면

$$(ad-bc)^2=1\\cdot1-0=1\\ \\Rightarrow\\ f(a,b,c,d)=\\pm1$$

두 값 모두 실제로 나옵니다.

$(1,0,0,1)\\in A$: $f=1\\cdot1-0\\cdot0=1$

$(1,0,0,-1)\\in A$: $f=1\\cdot(-1)-0\\cdot0=-1$

$$f(A)=\\{-1,\\ 1\\}$$`},
    {num:'Step 4', title:'연결성 판별',
     body:`$f$는 다항식이므로 $A$에서 연속입니다. 연결집합의 연속상은 연결집합인데 ③, $f(A)=\\{-1,1\\}$은 $\\mathbb{R}$에서 **비연결**입니다.

따라서 $A$는 연결집합이 **아닙니다**.

구체적으로 $A_{+}=f^{-1}(\\{1\\})$, $A_{-}=f^{-1}(\\{-1\\})$이라 하면, $\\{1\\}$과 $\\{-1\\}$은 부분공간 $\\{-1,1\\}$에서 열린집합이므로 $A_+,A_-$는 $A$에서 열린집합이고, 서로소이며 공집합이 아니고 합집합이 $A$입니다. 즉 $A=A_+\\sqcup A_-$가 $A$의 분리입니다.`}
  ],
  answer:'$A$는 컴팩트, $f(A)=\\{-1,1\\}$, $A$는 연결집합이 아니다',
  footnotes:[
    {n:'①',text:'"연속함수 = 닫힌집합의 역상이 닫힌집합"을 이용하면 방정식으로 정의된 집합이 닫힌집합임을 즉시 알 수 있다. 등식으로 주어진 집합은 대부분 이 논법으로 닫힌집합임이 확인된다.'},
    {n:'②',text:'라그랑주 항등식 $(ad-bc)^2+(ac+bd)^2=(a^2+b^2)(c^2+d^2)$. 좌우변을 전개하면 바로 확인된다. 복소수 $(a+bi)(d+ci)$의 절댓값을 생각하면 기억하기 쉽다.'},
    {n:'③',text:'"연결집합의 연속상은 연결"이라는 정리는 비연결성을 증명하는 가장 강력한 도구다. 상이 두 조각으로 갈라지면 원래 집합도 갈라져 있어야 하기 때문이다. 중간값 정리도 이 정리의 특수한 경우다.'},
    {n:'④',text:'$A$의 정체는 $2\\times2$ 직교행렬 전체, 즉 $O(2)$다. 두 행이 각각 단위벡터이고 서로 직교하기 때문이다. $f$는 행렬식이고, 직교행렬의 행렬식이 $\\pm1$이라는 사실이 Step 3의 내용이다. $O(2)$가 회전군 $SO(2)$와 반사 성분 두 조각으로 나뉜다는 것이 결론이다.'}
  ]
},

// ───────────────────────────────────────
// 2025
// ───────────────────────────────────────
{
  id:'2025b7', year:2025, type:'전공B', cat:'basic', pts:4,
  title:'여가산위상과 보통위상의 적공간에서 내부와 폐포',
  problem:`실수 전체의 집합 $\\mathbb{R}$ 위의 여가산위상(cocountable topology, countable complement topology) $\\mathfrak{J}_1$을

$$\\mathfrak{J}_1=\\{U\\subseteq\\mathbb{R}\\mid\\mathbb{R}-U\\text{는 가산집합(countable set)}\\}\\cup\\{\\varnothing\\}$$

이라 하고, 좌표평면 $\\mathbb{R}^2$ 위의 보통위상(usual topology)을 $\\mathfrak{J}_2$라고 하자. 적공간(곱공간, product space) $(\\mathbb{R},\\mathfrak{J}_1)\\times(\\mathbb{R}^2,\\mathfrak{J}_2)$에서 집합

$$S=\\{x\\in\\mathbb{R}\\mid 0<x<1\\}\\times\\left\\{(x,y)\\in\\mathbb{R}^2\\ \\middle|\\ x>0,\\ y=\\sin\\frac1x\\right\\}$$

의 내부(interior) $S^{\\circ}$와 폐포(closure) $\\overline{S}$를 각각 풀이 과정과 함께 쓰시오.`,
  diagram:`<svg viewBox="0 0 320 190" xmlns="http://www.w3.org/2000/svg" style="font-family:'Noto Sans KR',sans-serif">
    <text x="160" y="16" font-size="11" fill="var(--t2)" text-anchor="middle">G : y = sin(1/x), x &gt; 0 (위상수학자의 사인곡선)</text>
    <rect x="60" y="65" width="16" height="90" fill="var(--acc)" fill-opacity="0.16"/>
    <polyline points="279.8,65.5 268.1,65.1 257.7,65.0 248.2,65.2 239.6,65.7 231.7,66.5 224.5,67.5 217.9,68.9 211.8,70.5 206.1,72.3 200.9,74.4 196.0,76.7 191.5,79.2 187.2,81.9 183.2,84.9 179.5,87.9 175.9,91.1 172.6,94.4 169.5,97.9 166.5,101.4 163.7,104.9 161.0,108.5 158.5,112.1 156.1,115.7 153.8,119.2 151.6,122.7 149.5,126.1 147.5,129.5 145.6,132.6 143.8,135.7 142.0,138.5 140.3,141.2 138.7,143.7 137.2,146.0 135.7,148.0 134.3,149.8 132.9,151.4 131.5,152.7 130.3,153.7 129.0,154.4 127.8,154.8 126.7,155.0 125.6,154.9 124.5,154.5 123.5,153.8 122.4,152.8 121.5,151.5 120.5,150.0 119.6,148.2 118.7,146.2 117.8,143.9 117.0,141.5 116.2,138.8 115.4,135.9 114.6,132.9 113.9,129.8 113.1,126.5 112.4,123.1 111.7,119.6 111.1,116.0 110.4,112.5 109.8,108.9 109.2,105.3 108.5,101.7 107.9,98.2 107.4,94.8 106.8,91.4 106.3,88.2 105.7,85.1 105.2,82.2 104.7,79.5 104.2,76.9 103.7,74.6 103.2,72.5 102.7,70.6 102.3,69.0 101.8,67.7 101.4,66.6 100.9,65.8 100.5,65.2 100.1,65.0 99.7,65.1 99.3,65.4 98.9,66.0 98.5,66.9 98.2,68.1 97.8,69.6 97.4,71.3 97.1,73.2 96.7,75.4 96.4,77.8 96.1,80.5 95.7,83.3 95.4,86.2 95.1,89.4 94.8,92.6 94.5,96.0 94.2,99.5 93.9,103.0 93.6,106.6 93.3,110.2 93.0,113.8 92.7,117.3 92.5,120.9 92.2,124.3 91.9,127.7 91.7,130.9 91.4,134.0 91.2,137.0 90.9,139.8 90.7,142.4 90.5,144.8 90.2,147.0 90.0,148.9 89.8,150.6 89.5,152.0 89.3,153.2 89.1,154.0 88.9,154.6 88.7,155.0 88.5,155.0 88.3,154.7 88.1,154.2 87.9,153.3 87.7,152.2 87.5,150.8 87.3,149.2 87.1,147.3 86.9,145.2 86.7,142.8 86.5,140.3 86.4,137.5 86.2,134.6 86.0,131.5 85.8,128.3 85.7,124.9 85.5,121.5 85.3,118.0 85.2,114.4 85.0,110.8 84.9,107.2 84.7,103.6 84.6,100.1 84.4,96.6 84.2,93.2 84.1,89.9 84.0,86.8 83.8,83.8 83.7,80.9 83.5,78.3 83.4,75.8 83.2,73.6 83.1,71.6 83.0,69.9 82.8,68.4 82.7,67.1 82.6,66.2 82.4,65.5 82.3,65.1 82.2,65.0 82.1,65.2 81.9,65.7 81.8,66.4 81.7,67.4 81.6,68.8 81.5,70.3 81.3,72.1 81.2,74.2 81.1,76.5 81.0,79.0 80.9,81.7 80.8,84.6 80.7,87.7 80.6,90.9 80.5,94.2 80.4,97.6 80.2,101.1 80.1,104.6 80.0,108.2 79.9,111.8 79.8,115.4 79.7,119.0 79.6,122.5 79.5,125.9 79.4,129.2 79.3,132.4 79.3,135.4 79.2,138.3 79.1,141.0 79.0,143.5 78.9,145.8 78.8,147.9 78.7,149.7 78.6,151.3 78.5,152.6 78.4,153.6 78.4,154.3 78.3,154.8 78.2,155.0 78.1,154.9 78.0,154.5 77.9,153.8 77.9,152.9 77.8,151.6 77.7,150.1 77.6,148.4 77.5,146.4 77.5,144.1 77.4,141.7 77.3,139.0 77.2,136.2 77.2,133.2 77.1,130.0 77.0,126.7 76.9,123.3 76.9,119.9 76.8,116.3 76.7,112.7 76.6,109.1 76.6,105.6 76.5,102.0 76.4,98.5 76.4,95.0 76.3,91.7 76.2,88.5 76.2,85.4 76.1,82.4 76.0,79.7 76.0,77.1 75.9,74.8 75.8,72.7 75.8,70.8 75.7,69.1" fill="none" stroke="var(--acc)" stroke-width="1.6"/>
    <line x1="60" y1="65" x2="60" y2="155" stroke="var(--t1)" stroke-width="3.5"/>
    <line x1="50" y1="110" x2="300" y2="110" stroke="var(--t2)" stroke-width="1"/>
    <line x1="60" y1="170" x2="60" y2="52" stroke="var(--t2)" stroke-width="1"/>
    <text x="50" y="69" font-size="10" fill="var(--t3)" text-anchor="end">1</text>
    <text x="50" y="159" font-size="10" fill="var(--t3)" text-anchor="end">−1</text>
    <text x="298" y="124" font-size="11" fill="var(--t2)">x</text>
    <text x="52" y="60" font-size="11" fill="var(--t2)" text-anchor="end">y</text>
    <text x="120" y="176" font-size="10" fill="var(--t3)">폐포에 선분 {0}×[−1,1] 이 추가된다</text>
  </svg>`,
  steps:[
    {num:'Step 1', title:'곱 모양 집합의 내부·폐포 공식',
     body:`$S=E\\times G$ ($E=(0,1)\\subseteq\\mathbb{R}$, $G=\\{(x,\\sin\\frac1x)\\mid x>0\\}\\subseteq\\mathbb{R}^2$)는 곱 모양이므로 ①

$$S^{\\circ}=E^{\\circ}\\times G^{\\circ},\\qquad \\overline{S}=\\overline{E}\\times\\overline{G}$$

각 인자에서 따로 계산하면 됩니다.`},
    {num:'Step 2', title:'여가산위상에서 $(0,1)$의 내부와 폐포',
     body:`$\\mathfrak{J}_1$에서 공집합이 아닌 열린집합은 여집합이 가산인 집합입니다.

**내부:** $(0,1)$에 포함되는 공집합이 아닌 열린집합이 있다면 그 여집합이 가산이어야 하는데, $(0,1)$의 여집합은 $\\mathbb{R}\\setminus(0,1)$로 비가산입니다. 어떤 부분집합을 잡아도 여집합이 이보다 커지므로 불가능합니다.

$$E^{\\circ}=\\varnothing$$

**폐포:** $\\mathfrak{J}_1$의 닫힌집합은 가산집합과 $\\mathbb{R}$뿐입니다 ②. $(0,1)$은 비가산이므로 이를 포함하는 최소 닫힌집합은 $\\mathbb{R}$입니다.

$$\\overline{E}=\\mathbb{R}$$`},
    {num:'Step 3', title:'보통위상에서 사인곡선의 내부와 폐포',
     body:`**내부:** $G$는 곡선(그래프)이라 $\\mathbb{R}^2$에서 내점을 갖지 않습니다. 어떤 열린원판도 곡선에 포함될 수 없기 때문입니다.

$$G^{\\circ}=\\varnothing$$

**폐포:** $x>0$에서 $\\sin\\frac1x$는 $x\\to0^+$일 때 $-1$과 $1$ 사이를 무한히 진동합니다. 임의의 $c\\in[-1,1]$에 대해 $\\sin\\frac{1}{x_n}=c$인 $x_n\\to0^+$을 잡을 수 있으므로 $(0,c)$가 극한점이 됩니다 ③.

$$\\overline{G}=G\\cup\\big(\\{0\\}\\times[-1,1]\\big)$$

이것이 위상수학자의 사인곡선(topologist's sine curve)입니다.`},
    {num:'Step 4', title:'결론',
     body:`$$S^{\\circ}=\\varnothing\\times\\varnothing=\\varnothing$$

$$\\overline{S}=\\mathbb{R}\\times\\Big(G\\cup\\big(\\{0\\}\\times[-1,1]\\big)\\Big)$$

즉 첫 좌표는 실수 전체로 부풀고, 둘째 좌표에는 세로 선분 $\\{0\\}\\times[-1,1]$이 추가됩니다.`}
  ],
  answer:'$S^{\\circ}=\\varnothing$, $\\overline{S}=\\mathbb{R}\\times\\left(\\left\\{\\left(x,\\sin\\frac1x\\right)\\mid x>0\\right\\}\\cup\\left(\\{0\\}\\times[-1,1]\\right)\\right)$',
  footnotes:[
    {n:'①',text:'적공간에서 $\\overline{A\\times B}=\\overline A\\times\\overline B$는 항상, $(A\\times B)^{\\circ}=A^{\\circ}\\times B^{\\circ}$는 곱 모양 집합에 대해 성립한다. 이 문제의 $S$는 정확히 곱 모양이라 두 공식을 모두 쓸 수 있다.'},
    {n:'②',text:'여가산위상에서 닫힌집합 = (열린집합의 여집합) = 가산집합 또는 $\\mathbb{R}$. 그래서 비가산집합의 폐포는 항상 $\\mathbb{R}$이 되고, 어떤 진부분집합도 내부가 공집합이 된다. 유한여집합위상의 "가산판"이라고 보면 된다.'},
    {n:'③',text:'$x\\to0^+$일 때 $\\frac1x\\to\\infty$라 $\\sin\\frac1x$가 무한히 진동한다. 그래서 $y$축의 $[-1,1]$ 구간 전체가 극한점이 된다. 이 집합은 연결이지만 경로연결이 아닌 대표적 반례로 유명하다.'}
  ]
},

// ───────────────────────────────────────
// 2026
// ───────────────────────────────────────
{
  id:'2026a12', year:2026, type:'전공A', cat:'func', pts:4,
  title:'원기둥 거리에서의 최소 좌표와 코시수열이 아님을 보이기',
  problem:`집합 $A=\\{(x,y)\\in\\mathbb{R}^2\\mid -1\\le x<1\\}$ 위에서 거리함수 $d$를

$$d\\big((x,y),(x',y')\\big)=\\min\\left\\{\\sqrt{(x-(x'+k))^2+(y-y')^2}\\ \\middle|\\ k=-2,0,2\\right\\}$$

라 하자. 집합 $\\left\\{(x,0)\\in A\\ \\middle|\\ d((-1,0),(x,0))\\le\\dfrac12\\right\\}$에 속하는 점의 $x$좌표 중 가장 작은 양의 실수를 풀이 과정과 함께 쓰시오.

또한 $\\mathbb{R}^2_{*}=\\mathbb{R}^2-\\{(0,0)\\}$에 대하여 함수 $f:A\\to\\mathbb{R}^2_{*}$을 $f(x,y)=e^{y}(\\cos\\pi x,\\ \\sin\\pi x)$라 하고, $\\mathbb{R}^2_{*}$ 위에서 거리함수 $d_{*}$을 $d_{*}\\big((u,v),(u',v')\\big)=d\\big(f^{-1}(u,v),\\ f^{-1}(u',v')\\big)$이라 하자. 거리공간 $(\\mathbb{R}^2_{*},d_{*})$의 수열(sequence) $\\left\\{\\left(0,\\dfrac1n\\right)\\right\\}$이 코시수열(Cauchy sequence)이 아님을 보이시오.`,
  diagram:`<svg viewBox="0 0 360 208" xmlns="http://www.w3.org/2000/svg" style="font-family:'Noto Sans KR',sans-serif">
    <text x="160" y="16" font-size="11" fill="var(--t2)" text-anchor="middle">−1 과 1 을 붙인 원기둥 — 양쪽 끝으로 돌아갈 수 있다</text>
    <rect x="70" y="45" width="180" height="105" fill="var(--acc)" fill-opacity="0.10" stroke="none"/>
    <line x1="70" y1="45" x2="70" y2="150" stroke="var(--acc)" stroke-width="2.4"/>
    <line x1="250" y1="45" x2="250" y2="150" stroke="var(--acc)" stroke-width="2.4" stroke-dasharray="5 4"/>
    <line x1="55" y1="110" x2="290" y2="110" stroke="var(--t2)" stroke-width="1"/>
    <line x1="160" y1="165" x2="160" y2="38" stroke="var(--t2)" stroke-width="1"/>
    <circle cx="70" cy="110" r="4" fill="var(--t1)"/>
    <circle cx="205" cy="110" r="4" fill="var(--acc)"/>
    <path d="M 70,110 C 90,86 175,86 205,110" fill="none" stroke="var(--t1)" stroke-width="1.4" stroke-dasharray="4 3"/>
    <path d="M 70,110 C 52,162 268,162 250,110" fill="none" stroke="var(--acc)" stroke-width="1.6"/>
    <text x="70" y="182" font-size="10" fill="var(--t3)" text-anchor="middle">−1</text>
    <text x="250" y="182" font-size="10" fill="var(--t3)" text-anchor="middle">1</text>
    <text x="205" y="182" font-size="10" fill="var(--acc)" text-anchor="middle">1/2</text>
    <text x="160" y="182" font-size="10" fill="var(--t3)" text-anchor="middle">0</text>
    <text x="288" y="124" font-size="11" fill="var(--t2)">x</text>
    <text x="168" y="46" font-size="11" fill="var(--t2)">y</text>
    <text x="132" y="82" font-size="9" fill="var(--t1)">직접 가면 3/2</text>
    <text x="272" y="140" font-size="9" fill="var(--acc)" text-anchor="start">돌아가면 1/2</text>
    <text x="272" y="152" font-size="9" fill="var(--acc)" text-anchor="start">(이쪽이 짧다)</text>
    <text x="160" y="198" font-size="10" fill="var(--t3)" text-anchor="middle">k = ±2 가 "반대쪽으로 돌아가기"를 뜻한다</text>
  </svg>`,
  steps:[
    {num:'Step 1', title:'거리 $d((-1,0),(x,0))$ 계산',
     body:`$y$좌표가 모두 $0$이므로

$$d\\big((-1,0),(x,0)\\big)=\\min_{k\\in\\{-2,0,2\\}}|-1-x-k|=\\min\\{|1-x|,\\ |1+x|,\\ |3+x|\\}$$

$-1\\le x<1$에서 $|1-x|=1-x$, $|1+x|=1+x$, $|3+x|=3+x\\ge2$이므로 셋째는 항상 가장 큽니다 ①.

$$d=\\min\\{1-x,\\ 1+x\\}$$`},
    {num:'Step 2', title:'조건을 만족하는 가장 작은 양수 찾기',
     body:`$x>0$이면 $1+x>1>\\frac12$이므로 $1+x$ 쪽으로는 조건을 만족할 수 없습니다. 따라서

$$1-x\\le\\frac12\\iff x\\ge\\frac12$$

$x=\\frac12$일 때 $d=\\min\\{\\frac12,\\frac32,\\frac72\\}=\\frac12\\le\\frac12$로 조건을 만족합니다.

$$\\text{가장 작은 양의 실수}=\\frac12$$

$x=\\frac12$은 $-1$에서 **오른쪽 경계를 넘어 돌아가는** 경로($k=2$)로 거리 $\\frac12$이 됩니다.`},
    {num:'Step 3', title:'$f$의 역함수 구하기',
     body:`$f(x,y)=e^y(\\cos\\pi x,\\sin\\pi x)$는 극형식으로 반지름 $e^y$, 편각 $\\pi x$입니다. $-1\\le x<1$에서 $\\pi x\\in[-\\pi,\\pi)$로 모든 편각을 한 번씩 지나고 $e^y$는 모든 양수를 지나므로 $f$는 **전단사**입니다 ②.

$$\\left(0,\\frac1n\\right)\\text{: 반지름 }\\frac1n,\\ \\text{편각 }\\frac\\pi2$$

$$e^y=\\frac1n\\Rightarrow y=-\\ln n,\\qquad \\pi x=\\frac\\pi2\\Rightarrow x=\\frac12$$

$$f^{-1}\\left(0,\\frac1n\\right)=\\left(\\frac12,\\ -\\ln n\\right)$$`},
    {num:'Step 4', title:'수열의 항 사이 거리 계산',
     body:`$p_n=\\left(0,\\frac1n\\right)$이라 하면

$$d_{*}(p_n,p_m)=d\\left(\\left(\\tfrac12,-\\ln n\\right),\\left(\\tfrac12,-\\ln m\\right)\\right)=\\min_{k}\\sqrt{k^2+(\\ln m-\\ln n)^2}$$

$k=0$일 때 최소이므로

$$d_{*}(p_n,p_m)=|\\ln m-\\ln n|=\\left|\\ln\\frac{m}{n}\\right|$$`},
    {num:'Step 5', title:'코시수열이 아님을 증명',
     body:`$\\varepsilon_0=\\dfrac{\\ln2}{2}>0$이라 하자. 임의의 자연수 $N$에 대하여 $n=N$, $m=2N$을 잡으면 $m,n\\ge N$이고

$$d_{*}(p_n,p_m)=\\left|\\ln\\frac{2N}{N}\\right|=\\ln2>\\frac{\\ln2}{2}=\\varepsilon_0$$

즉 "어떤 $N$ 이후의 모든 $m,n$에 대해 $d_{*}(p_n,p_m)<\\varepsilon_0$"이 성립하는 $N$이 존재하지 않습니다.

$$\\therefore\\ \\left\\{\\left(0,\\tfrac1n\\right)\\right\\}\\text{은 }(\\mathbb{R}^2_{*},d_{*})\\text{에서 코시수열이 아니다.}\\ \\blacksquare$$

(직관: $f$가 등거리사상이므로 $\\mathbb{R}^2_*$에서 원점으로 다가가는 이 수열은 $A$에서는 $y$가 $-\\infty$로 발산하는 수열에 대응합니다 ③.)`}
  ],
  answer:'가장 작은 양의 $x$좌표는 $\\dfrac12$; $d_{*}(p_n,p_m)=\\left|\\ln\\frac mn\\right|$이고 $m=2n$이면 항상 $\\ln2$이므로 코시수열이 아니다',
  footnotes:[
    {n:'①',text:'$k=\\pm2$는 띠의 왼쪽 끝 $-1$과 오른쪽 끝 $1$을 붙여 원기둥으로 만든다는 뜻이다. 폭이 $2$이므로 한 바퀴 돌면 $x$가 $2$만큼 이동한다. 그래서 두 점 사이의 거리는 "직접 가기"와 "경계를 넘어 돌아가기" 중 짧은 쪽이 된다.'},
    {n:'②',text:'$f$는 원기둥 $A$를 구멍 뚫린 평면 $\\mathbb{R}^2_*$로 옮기는 전단사이고, $d_*$를 $d$의 당김(pullback)으로 정의했으므로 $f$는 등거리사상이다. 따라서 두 공간의 거리 구조는 완전히 같다.'},
    {n:'③',text:'$(\\mathbb{R}^2_*,d_*)$에서 이 수열은 유클리드 의미로는 원점에 수렴하지만, 원점이 공간에서 빠져 있고 거리가 $d_*$로 바뀌어 있다. $A$쪽에서 보면 $y=-\\ln n\\to-\\infty$로 무한히 멀어지는 수열이라 코시수열일 수 없다. 완비성이 거리함수에 따라 달라진다는 것을 보여주는 예다.'}
  ]
},

{
  id:'2026b2', year:2026, type:'전공B', cat:'basic', pts:2,
  title:'상대위상 구하고 내부 계산하기',
  problem:`$\\mathbb{R}$의 위상 $\\mathfrak{J}=\\{\\varnothing,\\ (-1,1),\\ (-1,3),\\ (-1,5),\\ \\mathbb{R}\\}$에 대하여 위상공간 $(\\mathbb{R},\\mathfrak{J})$의 부분집합 $\\mathbb{Z}$의 상대위상(부분위상, relative topology) $\\mathfrak{J}_{\\mathbb{Z}}$를 구하시오. 또한 위상공간 $(\\mathbb{Z},\\mathfrak{J}_{\\mathbb{Z}})$에서 집합 $A=\\{0,1,2,3\\}$의 내부(interior) $A^{\\circ}$를 구하시오. (단, $(a,b)=\\{x\\in\\mathbb{R}\\mid a<x<b\\}$이다.)`,
  steps:[
    {num:'Step 1', title:'각 열린집합과 $\\mathbb{Z}$의 교집합',
     body:`상대위상은 $\\mathfrak{J}_{\\mathbb{Z}}=\\{G\\cap\\mathbb{Z}\\mid G\\in\\mathfrak{J}\\}$입니다 ①.

$$\\varnothing\\cap\\mathbb{Z}=\\varnothing$$

$$(-1,1)\\cap\\mathbb{Z}=\\{0\\}$$

$$(-1,3)\\cap\\mathbb{Z}=\\{0,1,2\\}$$

$$(-1,5)\\cap\\mathbb{Z}=\\{0,1,2,3,4\\}$$

$$\\mathbb{R}\\cap\\mathbb{Z}=\\mathbb{Z}$$`},
    {num:'Step 2', title:'상대위상 정리',
     body:`$$\\mathfrak{J}_{\\mathbb{Z}}=\\big\\{\\varnothing,\\ \\{0\\},\\ \\{0,1,2\\},\\ \\{0,1,2,3,4\\},\\ \\mathbb{Z}\\big\\}$$

포함관계가 사슬($\\varnothing\\subset\\{0\\}\\subset\\{0,1,2\\}\\subset\\{0,1,2,3,4\\}\\subset\\mathbb{Z}$)을 이루므로 합집합·교집합에 대해 닫혀 있어 실제로 위상입니다 ②.`},
    {num:'Step 3', title:'$A=\\{0,1,2,3\\}$의 내부',
     body:`내부는 $A$에 포함되는 열린집합 중 가장 큰 것입니다.

$\\varnothing\\subseteq A$ ✓ / $\\{0\\}\\subseteq A$ ✓ / $\\{0,1,2\\}\\subseteq A$ ✓

$\\{0,1,2,3,4\\}\\not\\subseteq A$ ($4\\notin A$) ✗ / $\\mathbb{Z}\\not\\subseteq A$ ✗

$$A^{\\circ}=\\{0,1,2\\}$$

$3\\in A$이지만 $3$을 포함하는 열린집합은 $\\{0,1,2,3,4\\}$와 $\\mathbb{Z}$뿐이고 둘 다 $A$를 벗어나므로, $3$은 내점이 아닙니다.`}
  ],
  answer:'$\\mathfrak{J}_{\\mathbb{Z}}=\\{\\varnothing,\\{0\\},\\{0,1,2\\},\\{0,1,2,3,4\\},\\mathbb{Z}\\}$, $A^{\\circ}=\\{0,1,2\\}$',
  footnotes:[
    {n:'①',text:'상대위상(부분공간위상)은 전체공간의 열린집합을 부분집합으로 잘라낸 것들의 모임이다. 이렇게 정의하면 포함사상 $\\iota:Y\\to X$가 연속이 되는 가장 성긴 위상이 된다.'},
    {n:'②',text:'포함관계가 사슬을 이루는 집합족은 항상 위상이 된다. 두 집합의 합집합은 큰 쪽, 교집합은 작은 쪽이라 모두 원래 족에 들어 있기 때문이다.'},
    {n:'③',text:'$x\\in A^{\\circ}$는 "$x$를 포함하면서 $A$ 안에 들어가는 열린집합이 있다"는 뜻이다. 열린집합이 몇 개뿐인 이런 문제에서는 전부 나열해 포함 여부를 직접 확인하는 것이 가장 빠르고 안전하다.'}
  ]
}

  ]
};
