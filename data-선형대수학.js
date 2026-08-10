window.SUBJECTS = window.SUBJECTS || {};

window.SUBJECTS['선형대수학'] = {
  label: '선형대수학',
  categories: [
    { id:'eigen', name:'고유값과 대각화',    color:'#7a3d5a', light:'#f9eef4' },
    { id:'space', name:'벡터공간·선형변환',  color:'#3d6b4a', light:'#eef6f0' },
    { id:'quad',  name:'이차형식·좌표변환',  color:'#6b5a1a', light:'#f7f2e6' }
  ],
  freqGroups: [
    {
      id:'eigen', name:'고유값과 대각화 — 특성다항식·고유벡터·직교대각화', stars:'★★★★★★', count:9, color:'#5a2d44',
      desc:'고유값·고유벡터, 대각화, 특성다항식, 대칭행렬의 직교대각화',
      problems:['2015a4','2018b3','2020b6','2021b6','2022a11','2023a9','2024a8','2025a8','2026a9']
    },
    {
      id:'space', name:'벡터공간과 선형변환 — 기저·행렬표현·정사영', stars:'★★★', count:3, color:'#2d5438',
      desc:'선형변환의 행렬표현, 정규직교기저, 정사영과 랭크',
      problems:['2016b3','2017b3','2019a13']
    },
    {
      id:'quad', name:'이차형식과 좌표변환', stars:'★', count:1, color:'#544a14',
      desc:'이차곡선의 회전이동과 표준형 판별',
      problems:['2014a13']
    }
  ],
  problems: [

// ───────────────────────────────────────
// 2014
// ───────────────────────────────────────
{
  id:'2014a13', year:2014, type:'전공A', cat:'quad', pts:2,
  title:'이차곡선을 45° 회전시켜 쌍곡선이 되는 가장 작은 자연수 $a$',
  problem:`좌표평면 $\\mathbb{R}^2$ 위에 곡선 $C=\\{(x,y)\\in\\mathbb{R}^2\\mid14ax^2+2a^2xy+14ay^2+x+y-1=0\\}$이 주어져 있다. 곡선 $C$를 원점을 중심으로 시계방향으로 $45^\\circ$만큼 회전이동 했을 때, 초점이 $x$축에 있는 쌍곡선이 되는 자연수 $a$ 중에서 가장 작은 수를 구하시오.`,
  steps:[
    {num:'Step 1', title:'회전 후 좌표 대입식 설정',
     body:`곡선 $C$를 시계방향으로 $45^\\circ$ 회전시킨 곡선 $C'$ 위의 점 $(X,Y)$는 원래 점 $(x,y)$를 시계방향 $45^\\circ$ 회전한 것이므로, 역으로 $(x,y)$는 $(X,Y)$를 반시계방향 $45^\\circ$ 회전한 것 ①:

$$x=\\frac{X-Y}{\\sqrt2},\\qquad y=\\frac{X+Y}{\\sqrt2}$$

이를 원래 방정식에 대입하면 $C'$의 방정식을 얻습니다.`},
    {num:'Step 2', title:'이차항 대입 및 정리',
     body:`$x^2=\\dfrac{X^2-2XY+Y^2}2,\\ y^2=\\dfrac{X^2+2XY+Y^2}2,\\ xy=\\dfrac{X^2-Y^2}2$이므로:

$$14ax^2=7a(X^2-2XY+Y^2),\\quad14ay^2=7a(X^2+2XY+Y^2),\\quad2a^2xy=a^2(X^2-Y^2)$$

$XY$항: $-14aXY+14aXY=0$ (예상대로 교차항이 소거됨 ②).

$X^2$ 계수: $7a+7a+a^2=14a+a^2=a(a+14)$

$Y^2$ 계수: $7a+7a-a^2=14a-a^2=a(14-a)$`},
    {num:'Step 3', title:'일차항 대입 및 회전 후 방정식',
     body:`$x+y=\\dfrac{X-Y}{\\sqrt2}+\\dfrac{X+Y}{\\sqrt2}=\\sqrt2X$이므로:

$$a(a+14)X^2+a(14-a)Y^2+\\sqrt2X-1=0$$`},
    {num:'Step 4', title:'쌍곡선(초점 $x$축) 조건',
     body:`$X^2,Y^2$의 계수가 서로 반대 부호여야 쌍곡선 ③이고, 초점이 $X$축(=회전 후 $x$축)에 있으려면 $X^2$계수가 양수, $Y^2$계수가 음수여야 합니다.

$a(a+14)>0$은 자연수 $a$에서 항상 성립. $a(14-a)<0\\iff14-a<0\\iff a>14$ (자연수이므로).

가장 작은 자연수: $a=15$`}
  ],
  answer:'$15$',
  footnotes:[
    {n:'①',text:'도형을 각 φ만큼 시계방향 회전시키는 것은, 새 좌표축 관점에서 옛 좌표를 반시계방향 φ 회전으로 표현하는 것과 같다 (좌표축 회전 공식).'},
    {n:'②',text:'이차형식의 xy 교차항이 소거되는 각도로 회전시키는 것이 이차곡선을 표준형으로 만드는 표준적 기법.'},
    {n:'③',text:'AX²+BY²+(1차항)+C=0에서 AB<0이면 쌍곡선, AB>0이면 타원(또는 원), AB=0이면 포물선(또는 퇴화).'}
  ]
},

// ───────────────────────────────────────
// 2015
// ───────────────────────────────────────
{
  id:'2015a4', year:2015, type:'전공A', cat:'eigen', pts:2,
  title:'180° 회전변환 행렬의 특성다항식',
  problem:`좌표공간 $\\mathbb{R}^3$에서 원점과 점 $(1,2,3)$을 지나는 직선을 회전축으로 하여 $180^\\circ$ 회전이동하는 변환을 $T$라 하자. 벡터 $(x,y,z)$에 대하여 $T(x,y,z)=A\\begin{bmatrix}x\\\\y\\\\z\\end{bmatrix}$가 되는 행렬 $A$의 특성다항식(고유다항식, characteristic polynomial)을 구하시오.`,
  steps:[
    {num:'Step 1', title:'180° 회전의 고유값 구조',
     body:`회전축 방향 단위벡터 $\\mathbf{u}=\\dfrac{(1,2,3)}{\\sqrt{14}}$.

$180^\\circ$ 회전에서 축 방향 벡터는 그대로 보존되므로 $\\mathbf{u}$는 고유값 $1$의 고유벡터 ①.

축에 수직인 평면(2차원)에서 $180^\\circ$ 회전은 각 벡터를 $-1$배 하는 것과 같으므로, 이 평면은 고유값 $-1$의 (2차원) 고유공간 ②.`},
    {num:'Step 2', title:'고유값과 특성다항식',
     body:`$A$의 고유값: $1,\\,-1,\\,-1$.

$$p(\\lambda)=(\\lambda-1)(\\lambda+1)^2=(\\lambda-1)(\\lambda^2+2\\lambda+1)$$

$$=\\lambda^3+\\lambda^2-\\lambda-1$$`},
    {num:'Step 3', title:'검산 (행렬 직접 구성)',
     body:`$A=-I+2\\mathbf{u}\\mathbf{u}^T$ (180° 회전의 표준식 ③)로 직접 계산하면 $\\text{tr}(A)=-1$, $\\det(A)=1$이 나오는데, 이는 고유값 $1,-1,-1$의 합 $=-1$, 곱 $=1$과 정확히 일치 (검산 완료).`}
  ],
  answer:'$\\lambda^3+\\lambda^2-\\lambda-1$',
  footnotes:[
    {n:'①',text:'회전축 위의 벡터는 회전에 의해 변하지 않으므로 고유값 1의 고유벡터.'},
    {n:'②',text:'축에 수직인 평면에서 180° 회전은 평면 내 모든 벡터를 정확히 반대 방향으로 보내는 것과 같다 (2차원에서 180° 회전 = -I).'},
    {n:'③',text:'축 방향 단위벡터 u에 대한 180° 회전 행렬: R=2uu^T-I. uu^T는 u방향으로의 정사영 행렬.'}
  ]
},

// ───────────────────────────────────────
// 2016
// ───────────────────────────────────────
{
  id:'2016b3', year:2016, type:'전공B', cat:'space', pts:4,
  title:'하우스홀더 반사 $T$의 노름 보존 증명과 기저에 대한 행렬',
  problem:`$2$차원 유클리드 공간 $\\mathbb{R}^2$의 단위벡터(unit vector) $\\mathbf{u}$에 대하여 선형사상 $T:\\mathbb{R}^2\\to\\mathbb{R}^2$을 $T(\\mathbf{x})=\\mathbf{x}-2(\\mathbf{x}\\cdot\\mathbf{u})\\mathbf{u}$로 정의하자. 모든 벡터 $\\mathbf{x}$에 대하여 $\\|T(\\mathbf{x})\\|=\\|\\mathbf{x}\\|$임을 보이시오. 또한 $\\mathbf{u}=\\left(\\dfrac1{\\sqrt2},\\dfrac1{\\sqrt2}\\right)$일 때, $\\mathbb{R}^2$의 기저(basis) $B=\\{(1,0),(1,1)\\}$에 대한 $T$의 행렬 $[T]_B$를 풀이 과정과 함께 쓰시오.`,
  steps:[
    {num:'Step 1', title:'노름 보존 증명',
     body:`$$\\|T(\\mathbf{x})\\|^2=T(\\mathbf{x})\\cdot T(\\mathbf{x})=\\|\\mathbf{x}\\|^2-4(\\mathbf{x}\\cdot\\mathbf{u})^2+4(\\mathbf{x}\\cdot\\mathbf{u})^2\\|\\mathbf{u}\\|^2$$

$\\|\\mathbf{u}\\|=1$이므로 뒤의 두 항이 상쇄되어 $\\|T(\\mathbf{x})\\|^2=\\|\\mathbf{x}\\|^2$. $\\blacksquare$ (이는 $\\mathbf{u}$에 수직한 초평면에 대한 반사(하우스홀더 반사) ①)`},
    {num:'Step 2', title:'$T(x,y)$의 명시적 공식',
     body:`$\\mathbf{u}=(1/\\sqrt2,1/\\sqrt2)$일 때 $(x,y)\\cdot\\mathbf{u}=(x+y)/\\sqrt2$이므로:

$$T(x,y)=(x,y)-\\frac{2(x+y)}{\\sqrt2}\\cdot\\frac1{\\sqrt2}(1,1)=(x,y)-(x+y)(1,1)=(-y,-x)$$`},
    {num:'Step 3', title:'기저 $B$에서의 상 계산',
     body:`$T(1,0)=(0,-1)$을 $B=\\{(1,0),(1,1)\\}$로 표현: $(0,-1)=1\\cdot(1,0)+(-1)\\cdot(1,1)$

$T(1,1)=(-1,-1)$을 $B$로 표현: $(-1,-1)=0\\cdot(1,0)+(-1)\\cdot(1,1)$`},
    {num:'Step 4', title:'$[T]_B$ 구성',
     body:`각 상의 $B$-좌표를 열로 배치 ②:

$$[T]_B=\\begin{pmatrix}1&0\\\\-1&-1\\end{pmatrix}$$`}
  ],
  answer:'$\\|T(\\mathbf{x})\\|=\\|\\mathbf{x}\\|$ 증명 완료, $[T]_B=\\begin{pmatrix}1&0\\\\-1&-1\\end{pmatrix}$',
  footnotes:[
    {n:'①',text:'T(x)=x-2(x·u)u는 u방향 성분만 부호를 바꾸는 변환으로, u에 수직한 초평면에 대한 거울반사(하우스홀더 반사)이다.'},
    {n:'②',text:'선형변환 T의 기저 B={b1,b2}에 대한 행렬표현 [T]_B는 T(b1),T(b2)를 B로 나타낸 좌표벡터를 각각 첫째·둘째 열로 하는 행렬.'}
  ]
},

// ───────────────────────────────────────
// 2017
// ───────────────────────────────────────
{
  id:'2017b3', year:2017, type:'전공B', cat:'space', pts:4,
  title:'정규직교기저 좌표로 나타낸 $|a11a22-a12a21|$',
  problem:`$3$차원 유클리드 내적 공간 $\\mathbb{R}^3$에서 두 벡터 $\\mathbf{v_1}=(1,2,2),\\ \\mathbf{v_2}=(1,-1,2)$로 생성된 부분공간을 $V$라 하자. $V$의 임의의 정규직교기저(orthonormal basis) $B=\\{\\mathbf{u_1},\\mathbf{u_2}\\}$에 대하여 $B$에 의해 결정되는 네 실수 $a_{11},a_{12},a_{21},a_{22}$가 존재하여 $\\mathbf{v_1}=a_{11}\\mathbf{u_1}+a_{12}\\mathbf{u_2},\\ \\mathbf{v_2}=a_{21}\\mathbf{u_1}+a_{22}\\mathbf{u_2}$일 때, $|a_{11}a_{22}-a_{12}a_{21}|$의 값을 풀이 과정과 함께 쓰시오.`,
  steps:[
    {num:'Step 1', title:'$|a11a22-a12a21|$의 기하학적 의미',
     body:`$\\{\\mathbf{u_1},\\mathbf{u_2}\\}$가 $V$의 정규직교기저이므로, $V$에서 이 기저로의 좌표화는 등거리사상(isometry) ①입니다.

따라서 $\\mathbf{v_1},\\mathbf{v_2}$가 이루는 평행사변형의 넓이는 좌표 $(a_{11},a_{12}),(a_{21},a_{22})$가 $\\mathbb{R}^2$에서 이루는 평행사변형의 넓이 $|a_{11}a_{22}-a_{12}a_{21}|$와 같습니다.`},
    {num:'Step 2', title:'$v1×v2$의 크기로 넓이 계산',
     body:`한편 $\\mathbb{R}^3$에서 $\\mathbf{v_1},\\mathbf{v_2}$가 이루는 평행사변형의 넓이는 $|\\mathbf{v_1}\\times\\mathbf{v_2}|$ ②이므로:

$$|a_{11}a_{22}-a_{12}a_{21}|=|\\mathbf{v_1}\\times\\mathbf{v_2}|$$

$$\\mathbf{v_1}\\times\\mathbf{v_2}=(1,2,2)\\times(1,-1,2)=(6,0,-3)$$`},
    {num:'Step 3', title:'최종 계산',
     body:`$$|\\mathbf{v_1}\\times\\mathbf{v_2}|=\\sqrt{36+0+9}=\\sqrt{45}=3\\sqrt5$$`}
  ],
  answer:'$3\\sqrt5$',
  footnotes:[
    {n:'①',text:'정규직교기저로의 좌표화는 내적(따라서 길이·각도·넓이)을 보존하는 선형등거리사상.'},
    {n:'②',text:'두 벡터가 이루는 평행사변형의 넓이는 외적의 크기 |v1×v2|와 같다 (외적의 기하학적 정의).'}
  ]
},
{
  id:'2018b3', year:2018, type:'전공B', cat:'eigen', pts:4,
  title:'세 벡터합의 일차독립성과 고유벡터로부터 $det(A)$',
  problem:`실수체 $\\mathbb{R}$ 위의 벡터공간 $\\mathbb{R}^3$의 기저(basis) $\\{\\mathbf{v_1},\\mathbf{v_2},\\mathbf{v_3}\\}$에 대하여 세 벡터 $\\mathbf{v_1}+\\mathbf{v_2},\\ \\mathbf{v_1}+\\mathbf{v_3},\\ \\mathbf{v_2}+\\mathbf{v_3}$이 일차독립임을 보이시오. 또 모든 성분이 실수인 $3\\times3$ 행렬 $A$가 $(A-I)(\\mathbf{v_1}+\\mathbf{v_2})=\\mathbf{0},\\ (A-2I)(\\mathbf{v_1}+\\mathbf{v_3})=\\mathbf{0},\\ (A-3I)(\\mathbf{v_2}+\\mathbf{v_3})=\\mathbf{0}$을 만족시킬 때, $A$의 행렬식(determinant) $\\det(A)$의 값을 풀이 과정과 함께 쓰시오. (단, $I$는 $3\\times3$ 단위행렬이다.)`,
  steps:[
    {num:'Step 1', title:'일차독립성 증명',
     body:`$c_1(\\mathbf{v_1}+\\mathbf{v_2})+c_2(\\mathbf{v_1}+\\mathbf{v_3})+c_3(\\mathbf{v_2}+\\mathbf{v_3})=\\mathbf{0}$이라 하면:

$$(c_1+c_2)\\mathbf{v_1}+(c_1+c_3)\\mathbf{v_2}+(c_2+c_3)\\mathbf{v_3}=\\mathbf{0}$$

$\\{\\mathbf{v_1},\\mathbf{v_2},\\mathbf{v_3}\\}$가 일차독립(기저)이므로 $c_1+c_2=0,\\ c_1+c_3=0,\\ c_2+c_3=0$. 이 연립방정식을 풀면 $c_1=c_2=c_3=0$뿐 ①. 따라서 세 벡터는 일차독립. $\\blacksquare$`},
    {num:'Step 2', title:'주어진 조건을 고유벡터 관계로 해석',
     body:`$(A-I)(\\mathbf{v_1}+\\mathbf{v_2})=\\mathbf{0}$은 $\\mathbf{v_1}+\\mathbf{v_2}$가 고유값 $1$의 고유벡터임을 뜻합니다. 마찬가지로 $\\mathbf{v_1}+\\mathbf{v_3}$는 고유값 $2$, $\\mathbf{v_2}+\\mathbf{v_3}$는 고유값 $3$의 고유벡터.`},
    {num:'Step 3', title:'대각화 가능성과 $det(A)$',
     body:`Step 1에서 이 세 고유벡터가 일차독립(즉 $\\mathbb{R}^3$의 기저)임을 보였으므로, $A$는 대각화 가능하며 고유값은 $1,2,3$ ②.

$$\\det(A)=1\\times2\\times3=6$$`}
  ],
  answer:'일차독립 증명 완료, $\\det(A)=6$',
  footnotes:[
    {n:'①',text:'c1+c2=0, c1+c3=0을 빼면 c2-c3=0. c2+c3=0과 연립하면 c2=c3=0, 이어서 c1=0.'},
    {n:'②',text:'행렬식은 고유값들의 곱과 같다 (대각화 가능 여부와 무관하게 항상 성립하는 사실).'}
  ]
},

// ───────────────────────────────────────
// 2019
// ───────────────────────────────────────
{
  id:'2019a13', year:2019, type:'전공A', cat:'space', pts:4,
  title:'두 정사영의 합 $T_k$가 비가역/랭크2가 되는 $k$',
  problem:`$3$차원 유클리드 내적 공간 $\\mathbb{R}^3$의 세 벡터 $\\mathbf{v_1}=(1,0,0),\\mathbf{v_2}=(1,1,1),\\mathbf{v_3}=(0,-1,1)$에 대하여, 두 벡터 $\\mathbf{v_1},\\mathbf{v_2}$로 생성된 부분공간을 $W_{12}$라 하고 두 벡터 $\\mathbf{v_1},\\mathbf{v_3}$으로 생성된 부분공간을 $W_{13}$이라 하자. $\\mathbb{R}^3$의 벡터 $\\mathbf{u}$에 대하여 부분공간 $W$ 위로의 $\\mathbf{u}$의 정사영(orthogonal projection)을 $\\text{proj}_W\\mathbf{u}$라 하고, 실수 $k$에 대하여 선형변환 $T_k:\\mathbb{R}^3\\to\\mathbb{R}^3$을 $T_k(\\mathbf{u})=\\text{proj}_{W_{12}}\\mathbf{u}+\\text{proj}_{W_{13}}\\mathbf{u}+k\\mathbf{u}$로 정의하자. $T_k$의 역변환(inverse transformation)이 존재하지 않도록 하는 모든 $k$의 값을 풀이 과정과 함께 쓰시오. 또한 $T_k$의 랭크(계수, 계급수, 유효차수, rank)가 $2$인 $k$의 값을 구하시오.`,
  steps:[
    {num:'Step 1', title:'$W₁₃$의 정사영 $(v1⊥v3$이므로 간단)',
     body:`$\\mathbf{v_1}\\cdot\\mathbf{v_3}=0$이므로 $W_{13}$은 이미 직교기저 $\\{\\mathbf{v_1},\\mathbf{v_3}\\}$를 가짐. 정사영 공식 ①:

$$P_{13}=\\frac{\\mathbf{v_1}\\mathbf{v_1}^T}{\\mathbf{v_1}\\cdot\\mathbf{v_1}}+\\frac{\\mathbf{v_3}\\mathbf{v_3}^T}{\\mathbf{v_3}\\cdot\\mathbf{v_3}}=\\begin{pmatrix}1&0&0\\\\0&0.5&-0.5\\\\0&-0.5&0.5\\end{pmatrix}$$`},
    {num:'Step 2', title:'$W₁₂$의 정사영 $(Gram$ 공식)',
     body:`$\\mathbf{v_1},\\mathbf{v_2}$는 직교하지 않으므로 $P_{12}=V(V^TV)^{-1}V^T$ ($V=[\\mathbf{v_1}\\ \\mathbf{v_2}]$)를 계산 ②:

$$P_{12}=\\begin{pmatrix}1&0&0\\\\0&0.5&0.5\\\\0&0.5&0.5\\end{pmatrix}$$`},
    {num:'Step 3', title:'$T_k$의 행렬 = 대각행렬',
     body:`$$P_{12}+P_{13}=\\begin{pmatrix}2&0&0\\\\0&1&0\\\\0&0&1\\end{pmatrix}$$

놀랍게도 대각행렬! 따라서 $T_k$의 행렬은:

$$(P_{12}+P_{13})+kI=\\text{diag}(2+k,\\,1+k,\\,1+k)$$`},
    {num:'Step 4', title:'비가역 조건과 $rank=2$ 조건',
     body:`대각행렬이므로 고유값은 대각성분 그 자체. $T_k$가 비가역 $\\iff(2+k)(1+k)^2=0\\iff k=-2$ 또는 $k=-1$.

$k=-2$: $\\text{diag}(0,-1,-1)$ → 0이 아닌 대각성분 2개 → $\\text{rank}=2$ ✓

$k=-1$: $\\text{diag}(1,0,0)$ → 0이 아닌 대각성분 1개 → $\\text{rank}=1$`}
  ],
  answer:'비가역: $k=-2$ 또는 $k=-1$; $\\text{rank}(T_k)=2$인 $k=-2$',
  footnotes:[
    {n:'①',text:'서로 직교하는 벡터들이 생성하는 부분공간 위로의 정사영은 각 방향으로의 정사영의 합.'},
    {n:'②',text:'일반적인(직교하지 않는) 기저에 대한 정사영 행렬: P=V(VᵀV)⁻¹Vᵀ (V는 기저벡터를 열로 하는 행렬).'}
  ]
},

// ───────────────────────────────────────
// 2020
// ───────────────────────────────────────
{
  id:'2020b6', year:2020, type:'전공B', cat:'eigen', pts:4,
  title:'삼각행렬의 고유값과 대각화 기저 $B$',
  problem:`행렬 $A=\\begin{bmatrix}5&3&-3\\\\0&1&-2\\\\0&0&-1\\end{bmatrix}$의 고윳값을 모두 구하시오. 또한 선형변환 $T:\\mathbb{R}^3\\to\\mathbb{R}^3$을 $T(\\mathbf{x})=A\\mathbf{x}$라 할 때, $\\mathbb{R}^3$의 기저 $B$에 대한 $T$의 행렬표현 $[T]_B$이 대각행렬이 되도록 하는 기저 $B$를 풀이 과정과 함께 쓰시오.`,
  steps:[
    {num:'Step 1', title:'삼각행렬의 고유값',
     body:`$A$는 상삼각행렬이므로 고유값은 대각성분 그대로 ①: $5,\\,1,\\,-1$`},
    {num:'Step 2', title:'각 고유값의 고유벡터',
     body:`$\\lambda=5$: $(A-5I)\\mathbf{v}=0$에서 $\\begin{pmatrix}0&3&-3\\\\0&-4&-2\\\\0&0&-6\\end{pmatrix}$ → $z=0,y=0$, $x$자유. 고유벡터 $(1,0,0)$.

$\\lambda=1$: $\\begin{pmatrix}4&3&-3\\\\0&0&-2\\\\0&0&-2\\end{pmatrix}$ → $z=0$, $4x+3y=0$. 고유벡터 $(-3,4,0)$.

$\\lambda=-1$: $\\begin{pmatrix}6&3&-3\\\\0&2&-2\\\\0&0&0\\end{pmatrix}$ → $y=z$, $6x+3y-3z=0\\Rightarrow x=0$. 고유벡터 $(0,1,1)$.`},
    {num:'Step 3', title:'기저 $B$ 구성',
     body:`세 고유벡터가 서로 다른 고유값에 대응하므로 자동으로 일차독립 ②이고 $\\mathbb{R}^3$의 기저를 이룹니다:

$$B=\\{(1,0,0),\\,(-3,4,0),\\,(0,1,1)\\}$$

이때 $[T]_B=\\text{diag}(5,1,-1)$.`}
  ],
  answer:'고윳값: $5,1,-1$; $B=\\{(1,0,0),(-3,4,0),(0,1,1)\\}$',
  footnotes:[
    {n:'①',text:'삼각행렬(상삼각 또는 하삼각)의 고유값은 대각성분들과 정확히 일치한다.'},
    {n:'②',text:'서로 다른 고유값에 대응하는 고유벡터들은 항상 일차독립이다 (선형대수학의 기본 정리).'}
  ]
},

// ───────────────────────────────────────
// 2021
// ───────────────────────────────────────
{
  id:'2021b6', year:2021, type:'전공B', cat:'eigen', pts:4,
  title:'$A=PDP⁻¹$ 대각화와 $A^n$의 특정 성분 구하기',
  problem:`행렬 $A=\\begin{bmatrix}3&2&2\\\\0&3&1\\\\0&-2&0\\end{bmatrix}$에 대하여 $A=PDP^{-1}$을 만족하는 행렬 $D=\\begin{bmatrix}d_1&0&0\\\\0&d_2&0\\\\0&0&d_3\\end{bmatrix}$와 가역행렬 $P$를 풀이 과정과 함께 쓰시오. 또한 행렬 $A^n$의 $2$행 $3$열의 성분을 구하시오. (단, $d_1\\le d_2\\le d_3$이고 $n$은 자연수이다.)`,
  steps:[
    {num:'Step 1', title:'특성다항식과 고유값',
     body:`첫 열을 따라 전개 ①: $\\det(A-\\lambda I)=(3-\\lambda)\\det\\begin{pmatrix}3-\\lambda&1\\\\-2&-\\lambda\\end{pmatrix}=(3-\\lambda)(\\lambda^2-3\\lambda+2)=(3-\\lambda)(\\lambda-1)(\\lambda-2)$

고유값: $1,2,3$. $d_1\\le d_2\\le d_3$이므로 $D=\\text{diag}(1,2,3)$.`},
    {num:'Step 2', title:'각 고유값의 고유벡터',
     body:`$\\lambda=1$: $(A-I)\\mathbf{v}=0\\Rightarrow$ 고유벡터 $(1,1,-2)$

$\\lambda=2$: $(A-2I)\\mathbf{v}=0\\Rightarrow$ 고유벡터 $(0,-1,1)$

$\\lambda=3$: $(A-3I)\\mathbf{v}=0\\Rightarrow$ 고유벡터 $(1,0,0)$

$$P=\\begin{pmatrix}1&0&1\\\\1&-1&0\\\\-2&1&0\\end{pmatrix}$$`},
    {num:'Step 3', title:'$P⁻¹$ 계산',
     body:`여인수법으로 계산하면 $\\det(P)=-1$이고:

$$P^{-1}=\\begin{pmatrix}0&-1&-1\\\\0&-2&-1\\\\1&1&1\\end{pmatrix}$$`},
    {num:'Step 4', title:'$A^n$의 (2,3) 성분 계산',
     body:`$A^n=PD^nP^{-1}$에서 $(2,3)$ 성분은 $P$의 2행 $(1,-1,0)$과 $D^nP^{-1}$의 3열을 내적 ②:

$$(A^n)_{23}=P_{21}d_1^nP^{-1}_{13}+P_{22}d_2^nP^{-1}_{23}+P_{23}d_3^nP^{-1}_{33}$$
$$=1\\cdot1^n\\cdot(-1)+(-1)\\cdot2^n\\cdot(-1)+0\\cdot3^n\\cdot1=2^n-1$$

($n=1$일 때 $2^1-1=1$로 실제 $A$의 (2,3)성분과 일치, 검산 완료.)`}
  ],
  answer:'$D=\\text{diag}(1,2,3)$, $P=\\begin{pmatrix}1&0&1\\\\1&-1&0\\\\-2&1&0\\end{pmatrix}$, $(A^n)_{23}=2^n-1$',
  footnotes:[
    {n:'①',text:'첫 열에 0이 두 개 있으므로 첫 열을 따라 여인수 전개하면 계산이 간단해진다.'},
    {n:'②',text:'A^n=PD^nP⁻¹의 (i,j) 성분은 P의 i행과 D^nP⁻¹의 j열의 내적. D가 대각행렬이므로 D^n도 대각행렬 diag(d1^n,d2^n,d3^n).'}
  ]
},

// ───────────────────────────────────────
// 2022
// ───────────────────────────────────────
{
  id:'2022a11', year:2022, type:'전공A', cat:'eigen', pts:4,
  title:'세 벡터의 상으로 고유값과 $a11+a12+a13$ 구하기',
  problem:`$3$차 정사각행렬 $A=(a_{ij})$가 $A\\begin{bmatrix}1\\\\1\\\\2\\end{bmatrix}=\\begin{bmatrix}4\\\\4\\\\8\\end{bmatrix},\\ A\\begin{bmatrix}-1\\\\0\\\\1\\end{bmatrix}=\\begin{bmatrix}2\\\\0\\\\-2\\end{bmatrix},\\ A\\begin{bmatrix}1\\\\1\\\\0\\end{bmatrix}=\\begin{bmatrix}-2\\\\-2\\\\0\\end{bmatrix}$을 만족할 때, $A$의 고윳값(eigenvalue)을 모두 쓰시오. 또한, $a_{11}+a_{12}+a_{13}$의 값을 풀이 과정과 함께 쓰시오.`,
  steps:[
    {num:'Step 1', title:'세 상이 모두 고유벡터 관계',
     body:`$A(1,1,2)=4(1,1,2)$ → 고유값 $4$

$A(-1,0,1)=-2(-1,0,1)$ → 고유값 $-2$

$A(1,1,0)=-2(1,1,0)$ → 고유값 $-2$

세 벡터의 일차독립 ①을 확인하면 (행렬식 $=-2\\ne0$) $A$는 대각화 가능하고, 고유값은:

$$4,\\ -2,\\ -2$$`},
    {num:'Step 2', title:'(1,1,1)을 세 고유벡터로 분해',
     body:`$a_{11}+a_{12}+a_{13}$은 $A(1,1,1)$의 첫 성분과 같습니다 ②. $(1,1,1)=c_1(1,1,2)+c_2(-1,0,1)+c_3(1,1,0)$을 풀면:

$$c_1=\\frac12,\\quad c_2=0,\\quad c_3=\\frac12$$`},
    {num:'Step 3', title:'선형성으로 $A(1,1,1)$ 계산',
     body:`$$A(1,1,1)=\\frac12(4,4,8)+\\frac12(-2,-2,0)=(2,2,4)+(-1,-1,0)=(1,1,4)$$

첫 성분이 $a_{11}+a_{12}+a_{13}$이므로:

$$a_{11}+a_{12}+a_{13}=1$$`}
  ],
  answer:'고윳값: $4,-2,-2$; $a_{11}+a_{12}+a_{13}=1$',
  footnotes:[
    {n:'①',text:'세 벡터를 열로 하는 행렬의 행렬식이 0이 아니면 일차독립.'},
    {n:'②',text:'A(1,1,1)의 첫 성분은 A의 첫 행과 (1,1,1)의 내적, 즉 a11·1+a12·1+a13·1=a11+a12+a13.'}
  ]
},

// ───────────────────────────────────────
// 2023
// ───────────────────────────────────────
{
  id:'2023a9', year:2023, type:'전공A', cat:'eigen', pts:4,
  title:'순서기저에 대한 행렬표현과 대각화가능성 판별',
  problem:`실수체 $\\mathbb{R}$ 위의 벡터공간 $\\mathbb{R}^3$에 대하여 선형변환 $L:\\mathbb{R}^3\\to\\mathbb{R}^3$을 $L(x_1,x_2,x_3)=(x_1-2x_2+x_3,\\ x_2-x_3,\\ -x_2+x_3)$으로 정의하고, $\\mathbb{R}^3$의 순서 기저(ordered basis) $\\alpha$를 $\\alpha=\\{(1,1,1),(0,1,1),(1,0,1)\\}$이라 하자. 순서 기저 $\\alpha$에 대한 $L$의 행렬 $[L]_\\alpha$를 풀이 과정과 함께 쓰시오. 또한 $[L]_\\alpha$가 대각화가능인지 판별하고 그 이유를 쓰시오.`,
  steps:[
    {num:'Step 1', title:'기저벡터들의 상 계산',
     body:`$L(1,1,1)=(1-2+1,\\,1-1,\\,-1+1)=(0,0,0)$

$L(0,1,1)=(0-2+1,\\,1-1,\\,-1+1)=(-1,0,0)$

$L(1,0,1)=(1-0+1,\\,0-1,\\,-0+1)=(2,-1,1)$`},
    {num:'Step 2', title:'각 상을 기저 $α$로 표현',
     body:`$(0,0,0)$의 $\\alpha$-좌표: $(0,0,0)$

$(-1,0,0)=c_1(1,1,1)+c_2(0,1,1)+c_3(1,0,1)$을 풀면 $(c_1,c_2,c_3)=(-1,1,0)$

$(2,-1,1)=c_1(1,1,1)+c_2(0,1,1)+c_3(1,0,1)$을 풀면 $(c_1,c_2,c_3)=(0,-1,2)$`},
    {num:'Step 3', title:'$[L]_α$ 구성',
     body:`각 좌표벡터를 열로 배치 ①:

$$[L]_\\alpha=\\begin{pmatrix}0&-1&0\\\\0&1&-1\\\\0&0&2\\end{pmatrix}$$`},
    {num:'Step 4', title:'대각화가능성 판별',
     body:`$[L]_\\alpha$는 상삼각행렬이므로 고유값은 대각성분 $0,1,2$ — **서로 다른 세 개**의 고유값 ②.

$3\\times3$ 행렬이 서로 다른 고유값 $3$개를 가지면 각 고유벡터가 자동으로 일차독립이 되어 고유벡터로 이루어진 기저가 존재하므로:

**대각화가능**`}
  ],
  answer:'$[L]_\\alpha=\\begin{pmatrix}0&-1&0\\\\0&1&-1\\\\0&0&2\\end{pmatrix}$, 대각화가능 (서로 다른 고유값 0,1,2를 가지므로)',
  footnotes:[
    {n:'①',text:'[L]_α의 j번째 열은 L(α의 j번째 기저벡터)를 α로 나타낸 좌표벡터.'},
    {n:'②',text:'삼각행렬의 고유값은 대각성분과 일치. n×n 행렬이 서로 다른 n개의 고유값을 가지면 항상 대각화가능.'}
  ]
},

// ───────────────────────────────────────
// 2024
// ───────────────────────────────────────
{
  id:'2024a8', year:2024, type:'전공A', cat:'eigen', pts:4,
  title:'조건을 만족하는 $A$의 고유값·대각합·행렬식',
  problem:`모든 성분이 실수인 $3\\times3$ 행렬 $A$와 행렬 $B=A^2-A+5I$가 다음 조건을 만족시킨다. (가) 행렬 $A-3I$는 역행렬을 갖지 않는다. (나) 행렬 $A$의 특성방정식(고유방정식, characteristic equation)은 허근 $\\alpha$를 가지고 $|\\alpha|=\\sqrt2$이다. (다) 행렬 $B$의 최소다항식(minimal polynomial)의 차수는 $B$의 특성다항식(고유다항식, characteristic polynomial)의 차수보다 낮다. 행렬 $A$의 모든 고윳값(eigenvalue)과 대각합(trace) 및 행렬식(determinant)을 각각 풀이 과정과 함께 쓰시오. (단, $I$는 $3\\times3$ 단위행렬이다.)`,
  steps:[
    {num:'Step 1', title:'조건(가),(나)로 세 고유값의 형태 결정',
     body:`(가): $3$은 $A$의 고유값 ①.

(나): $A$는 실행렬이므로 복소 고유값은 켤레쌍으로 나타남 ②: $\\alpha,\\bar\\alpha$가 고유값이고 $|\\alpha|=\\sqrt2$. $3\\times3$이므로 나머지 한 고유값은 실수인데, (가)에서 그것이 $3$.

$$\\text{고유값: }\\alpha,\\ \\bar\\alpha,\\ 3\\qquad(|\\alpha|^2=\\alpha\\bar\\alpha=2)$$`},
    {num:'Step 2', title:'$B$의 고유값과 조건(다) 해석',
     body:`$f(t)=t^2-t+5$라 하면 $B$의 고유값은 $f(\\alpha),f(\\bar\\alpha),f(3)$. $f(3)=9-3+5=11$.

조건(다)는 $B$의 최소다항식 차수 $<3$을 의미하며, 이는 $B$가 중복된 고유값을 가짐을 뜻합니다 ③. $f(\\alpha)$는 비실수, $f(3)=11$은 실수이므로 $f(\\alpha)=f(3)$은 불가능. 따라서:

$$f(\\alpha)=f(\\bar\\alpha)$$`},
    {num:'Step 3', title:'$f(α)=f(ᾱ)$로부터 $Re(α)$ 결정',
     body:`$\\alpha^2-\\alpha=\\bar\\alpha^2-\\bar\\alpha\\ \\Rightarrow\\ (\\alpha-\\bar\\alpha)(\\alpha+\\bar\\alpha)=\\alpha-\\bar\\alpha$

$\\alpha\\ne\\bar\\alpha$(허근)이므로 양변을 $(\\alpha-\\bar\\alpha)$로 나누면 $\\alpha+\\bar\\alpha=1$, 즉 $2\\text{Re}(\\alpha)=1\\Rightarrow\\text{Re}(\\alpha)=\\dfrac12$.

$|\\alpha|^2=2$이므로 $\\text{Im}(\\alpha)^2=2-\\dfrac14=\\dfrac74\\Rightarrow\\text{Im}(\\alpha)=\\pm\\dfrac{\\sqrt7}2$`},
    {num:'Step 4', title:'고유값·대각합·행렬식',
     body:`$$\\text{고유값: }\\ \\frac12+\\frac{\\sqrt7}2i,\\ \\ \\frac12-\\frac{\\sqrt7}2i,\\ \\ 3$$

$$\\text{tr}(A)=\\left(\\frac12+\\frac{\\sqrt7}2i\\right)+\\left(\\frac12-\\frac{\\sqrt7}2i\\right)+3=1+3=4$$

$$\\det(A)=|\\alpha|^2\\times3=2\\times3=6$$`}
  ],
  answer:'고유값: $\\dfrac12\\pm\\dfrac{\\sqrt7}2i,\\ 3$; $\\text{tr}(A)=4$; $\\det(A)=6$',
  footnotes:[
    {n:'①',text:'A-3I가 역행렬을 갖지 않는다는 것은 det(A-3I)=0, 즉 3이 A의 고유값이라는 뜻.'},
    {n:'②',text:'실계수 다항식(여기선 특성다항식)의 복소근은 항상 켤레쌍으로 나타난다.'},
    {n:'③',text:'최소다항식의 차수가 특성다항식의 차수보다 낮다는 것은, 어떤 고유값이 여러 개의 서로 다른(A의) 고유값으로부터 B에서 같은 값으로 합쳐졌거나, 대수적 중복도가 있으면서 최소다항식에서 1제곱만 나타나는 경우이다.'}
  ]
},

// ───────────────────────────────────────
// 2025
// ───────────────────────────────────────
{
  id:'2025a8', year:2025, type:'전공A', cat:'eigen', pts:4,
  title:'대칭행렬의 직교대각화 $D=PᵀAP$',
  problem:`모든 성분이 실수인 $3\\times3$ 대칭행렬(symmetric matrix) $A$가 다음 조건을 만족시킨다. (가) 행렬 $A$의 행렬식(determinant)은 $32$이다. (나) 행렬 $A^{-1}-\\dfrac12I$의 영공간(null space)은 두 벡터 $(1,-2,1),(1,2,-3)$으로 생성된다. 대각행렬(diagonal matrix) $D=(d_{ij})$와 직교행렬(orthogonal matrix) $P$가 $D=P^TAP$를 만족시킬 때, $D$와 $P$를 각각 풀이 과정과 함께 쓰시오. (단, $A^{-1}$은 $A$의 역행렬, $I$는 $3\\times3$ 단위행렬, $P^T$는 $P$의 전치행렬(transpose matrix)이고 $d_{11}\\le d_{22}\\le d_{33}$이다.)`,
  steps:[
    {num:'Step 1', title:'조건(나)를 $A$의 고유값 조건으로 변환',
     body:`$(A^{-1}-\\tfrac12I)\\mathbf{v}=0\\iff A^{-1}\\mathbf{v}=\\tfrac12\\mathbf{v}\\iff A\\mathbf{v}=2\\mathbf{v}$ ①.

즉 $A$는 고유값 $2$에 대해 (적어도) $2$차원 고유공간을 가지며, $(1,-2,1),(1,2,-3)$이 그 고유공간을 생성.`},
    {num:'Step 2', title:'세 번째 고유값 결정',
     body:`대칭행렬이므로 $3$개의 고유값이 존재하고(중복 포함), 나머지 고유값을 $\\mu$라 하면:

$$\\det(A)=2\\times2\\times\\mu=32\\ \\Rightarrow\\ \\mu=8$$

$d_{11}\\le d_{22}\\le d_{33}$이므로 $D=\\text{diag}(2,2,8)$.`},
    {num:'Step 3', title:'고유값 2의 고유공간에서 정규직교화',
     body:`그람-슈미트로 $(1,-2,1),(1,2,-3)$을 정규직교화 ②:

$\\mathbf{u_1}=\\dfrac{(1,-2,1)}{\\sqrt6}$

$\\mathbf{w_2}=(1,2,-3)-\\dfrac{(1,2,-3)\\cdot(1,-2,1)}{6}(1,-2,1)=(2,0,-2)\\parallel(1,0,-1)$

$\\mathbf{u_2}=\\dfrac{(1,0,-1)}{\\sqrt2}$`},
    {num:'Step 4', title:'고유값 8의 고유벡터',
     body:`고유값 $2$의 고유공간과 직교하는 방향을 외적으로 구함 ③:

$$(1,-2,1)\\times(1,0,-1)=(2,2,2)\\parallel(1,1,1)$$

$$\\mathbf{u_3}=\\frac{(1,1,1)}{\\sqrt3}$$

$$P=\\begin{pmatrix}\\frac1{\\sqrt6}&\\frac1{\\sqrt2}&\\frac1{\\sqrt3}\\\\-\\frac2{\\sqrt6}&0&\\frac1{\\sqrt3}\\\\\\frac1{\\sqrt6}&-\\frac1{\\sqrt2}&\\frac1{\\sqrt3}\\end{pmatrix}$$`}
  ],
  answer:'$D=\\text{diag}(2,2,8)$, $P$는 위 정규직교기저를 열로 하는 행렬',
  footnotes:[
    {n:'①',text:'A⁻¹v=(1/2)v 양변에 A를 곱하면 v=(1/2)Av, 즉 Av=2v.'},
    {n:'②',text:'그람-슈미트 과정: 첫 벡터는 그대로 정규화, 둘째 벡터는 첫째 방향 성분을 제거한 뒤 정규화.'},
    {n:'③',text:'대칭행렬은 서로 다른 고유값의 고유벡터가 직교하므로, 이미 구한 2차원 고유공간과 수직인 방향이 나머지 고유벡터 방향.'}
  ]
},

// ───────────────────────────────────────
// 2026
// ───────────────────────────────────────
{
  id:'2026a9', year:2026, type:'전공A', cat:'eigen', pts:4,
  title:'$AB=2det(B)I$ 조건에서 대칭행렬 $B$의 고유값과 정규직교기저',
  problem:`모든 성분이 실수인 $3\\times3$ 행렬 $A$가 $A\\begin{pmatrix}1\\\\2\\\\2\\end{pmatrix}=\\begin{pmatrix}4\\\\8\\\\8\\end{pmatrix},\\ A\\begin{pmatrix}2\\\\-2\\\\1\\end{pmatrix}=\\begin{pmatrix}20\\\\-20\\\\10\\end{pmatrix},\\ \\det(A)=800$을 만족시킬 때, $A$의 모든 고윳값(eigenvalue)을 구하시오. 또한 가역 대칭행렬(symmetric matrix) $B$가 $AB=2\\det(B)I,\\ \\text{tr}(B)<0$을 만족시킬 때, $B$의 모든 고윳값과, $B$의 고유벡터(eigenvector)로 구성된 $\\mathbb{R}^3$의 정규 직교 기저(orthonormal basis)를 풀이 과정과 함께 쓰시오. (단, $\\det(M)$은 행렬 $M$의 행렬식(determinant), $\\text{tr}(M)$은 $M$의 대각합(trace)이고, $I$는 $3\\times3$ 단위행렬이다.)`,
  steps:[
    {num:'Step 1', title:'주어진 두 벡터로 $A$의 고유값 2개 확인',
     body:`$A(1,2,2)=4(1,2,2)$ → 고유값 $4$, 고유벡터 $(1,2,2)$

$A(2,-2,1)=10(2,-2,1)$ → 고유값 $10$, 고유벡터 $(2,-2,1)$

두 고유벡터는 서로 직교 ①: $(1,2,2)\\cdot(2,-2,1)=2-4+2=0$`},
    {num:'Step 2', title:'세 번째 고유값과 고유벡터',
     body:`$\\det(A)=4\\times10\\times\\lambda_3=800\\Rightarrow\\lambda_3=20$.

나머지 고유벡터 방향은 앞의 두 고유벡터와 모두 수직 ②이므로 외적으로 계산:

$$(1,2,2)\\times(2,-2,1)=(6,3,-6)\\parallel(2,1,-2)$$

$$A\\text{의 고유값: }4,\\ 10,\\ 20$$`},
    {num:'Step 3', title:'$AB=2det(B)I ⟹ B$는 $A⁻¹$의 스칼라배',
     body:`$AB=2\\det(B)I$의 양변에 $A^{-1}$을 곱하면 $B=2\\det(B)\\,A^{-1}=cA^{-1}$ ($c:=2\\det(B)$) ③.

$A$의 고유벡터는 그대로 $A^{-1}$(및 $B$)의 고유벡터이며, 고유값은 $c/4,\\,c/10,\\,c/20$.`},
    {num:'Step 4', title:'$c$에 대한 방정식과 조건 $tr(B)<0$',
     body:`$\\det(B)=\\dfrac{c}{4}\\cdot\\dfrac{c}{10}\\cdot\\dfrac{c}{20}=\\dfrac{c^3}{800}$이고 $\\det(B)=c/2$이므로:

$$\\frac{c}2=\\frac{c^3}{800}\\ \\Rightarrow\\ c^3=400c\\ \\Rightarrow\\ c(c^2-400)=0\\ \\Rightarrow\\ c=0,\\pm20$$

$B$가 가역이므로 $c\\ne0$. $c=20$: 고유값 $5,2,1$, $\\text{tr}(B)=8>0$ (조건 불만족). $c=-20$: 고유값 $-5,-2,-1$, $\\text{tr}(B)=-8<0$ ✓`},
    {num:'Step 5', title:'정규직교기저',
     body:`세 고유벡터의 크기가 모두 $3$으로 동일 ($|(1,2,2)|=|(2,-2,1)|=|(2,1,-2)|=3$):

$$B\\text{의 고유값: }-5,\\ -2,\\ -1$$

$$\\text{정규직교기저: }\\left\\{\\frac{(1,2,2)}3,\\ \\frac{(2,-2,1)}3,\\ \\frac{(2,1,-2)}3\\right\\}$$`}
  ],
  answer:'$A$의 고유값: $4,10,20$; $B$의 고유값: $-5,-2,-1$; 정규직교기저 $\\left\\{\\frac{(1,2,2)}3,\\frac{(2,-2,1)}3,\\frac{(2,1,-2)}3\\right\\}$',
  footnotes:[
    {n:'①',text:'B=cA⁻¹은 A와 같은 고유벡터를 가지는데, B가 대칭행렬이려면 서로 다른 고유값의 고유벡터가 직교해야 한다 — 따라서 A의 이 두 고유벡터도 애초에 직교해야 한다.'},
    {n:'②',text:'세 번째 고유벡터도 앞의 두 벡터와 직교해야 하므로(대칭행렬 B의 고유벡터 조건), 외적으로 유일하게 결정된다.'},
    {n:'③',text:'B=cA⁻¹이므로 A의 임의의 고유벡터 v (Av=λv)에 대해 A⁻¹v=(1/λ)v, 즉 Bv=(c/λ)v — B의 고유벡터가 곧 A의 고유벡터.'}
  ]
}

]};
