window.SUBJECTS = window.SUBJECTS || {};

window.SUBJECTS['확률과 통계'] = {
  label: '확률과 통계',
  categories: [
    { id:'trans',  name:'변수변환·분포함수',   color:'#5a6b1a', light:'#f4f7e6' },
    { id:'normal', name:'정규분포·표본분포',   color:'#4a4a8a', light:'#eeeef9' },
    { id:'joint',  name:'결합분포·조건부',     color:'#8a2d4a', light:'#f9e9ee' }
  ],
  freqGroups: [
    {
      id:'trans', name:'변수변환·누적분포함수·순서통계량', stars:'★★★★★★', count:11, color:'#3d4a12',
      desc:'cdf법으로 새 확률변수의 분포 구하기, 합성곱(convolution), 최솟값·중앙값 같은 순서통계량',
      problems:['2015a6','2016a8','2017a7','2017a14','2019a7','2020a8','2020b7','2021b9','2023b8','2024a11','2026b6']
    },
    {
      id:'normal', name:'정규분포의 선형결합·표본분포·신뢰구간', stars:'★★★★★', count:10, color:'#33336b',
      desc:'정규분포의 합·차, 이항분포의 정규근사, 중심극한정리, 모평균·모비율의 신뢰구간',
      problems:['2014a15','2015a5','2018b2','2019b2','2021a3','2022b7','2023a4','2024b2','2025a4','2026a2']
    },
    {
      id:'joint', name:'결합분포·조건부기댓값·독립성', stars:'★★★', count:5, color:'#611f34',
      desc:'결합확률(밀도/질량)함수에서 주변분포·조건부분포 구하기, 독립성 판정',
      problems:['2014a5','2016a7','2018a7','2022a4','2025b6']
    }
  ],
  problems: [

// ───────────────────────────────────────
// 2014
// ───────────────────────────────────────
{
  id:'2014a5', year:2014, type:'전공A', cat:'joint', pts:3,
  title:'결합밀도함수에서 주변분포·조건부분포·조건부기댓값 구하기',
  problem:`두 연속확률변수 $X$와 $Y$의 결합확률밀도함수(joint probability density function) $f(x,y)$를

$$f(x,y)=\\begin{cases} \\dfrac{1}{5}xy(1-x+y), & 0<x<1,\\ 1<y<3 \\\\ 0, & \\text{그 외의 경우}\\end{cases}$$

라 하자. $Y$의 주변확률밀도함수 $f_Y(y)$를 구하고, 이를 이용하여 $Y=2$가 주어졌다는 가정 하에 $X$의 조건부확률밀도함수 $f_{X|Y}(x|2)$와 $X$의 조건부기댓값 $E[X|Y=2]$를 구하시오.`,
  steps:[
    {num:'Step 1', title:'$x$에 대해 적분하여 주변확률밀도함수 $f_Y(y)$ 구하기',
     body:`주변분포 ①는 다른 변수를 적분해서 없애면 됩니다. $y$를 고정하고 $x$에 대해 $0$부터 $1$까지 적분합니다.

$$f_Y(y)=\\int_0^1 \\frac{1}{5}xy(1-x+y)\\,dx=\\frac{y}{5}\\int_0^1\\big((1+y)x-x^2\\big)dx$$

$$=\\frac{y}{5}\\left[\\frac{(1+y)x^2}{2}-\\frac{x^3}{3}\\right]_0^1=\\frac{y}{5}\\left(\\frac{1+y}{2}-\\frac{1}{3}\\right)=\\frac{y}{5}\\cdot\\frac{3y+1}{6}$$

$$f_Y(y)=\\frac{y(3y+1)}{30},\\qquad 1<y<3$$

검산: $\\int_1^3 \\frac{3y^2+y}{30}dy=\\frac{1}{30}\\left[y^3+\\frac{y^2}{2}\\right]_1^3=\\frac{1}{30}(31.5-1.5)=1$ 이므로 확률밀도함수가 맞습니다.`},
    {num:'Step 2', title:'$y=2$를 대입해 조건부확률밀도함수 구하기',
     body:`조건부밀도 ②의 정의는 $f_{X|Y}(x|y)=\\dfrac{f(x,y)}{f_Y(y)}$입니다.

분자: $f(x,2)=\\frac{1}{5}\\cdot x\\cdot 2\\cdot(1-x+2)=\\frac{2x(3-x)}{5}$

분모: $f_Y(2)=\\frac{2(3\\cdot2+1)}{30}=\\frac{14}{30}=\\frac{7}{15}$

$$f_{X|Y}(x|2)=\\frac{2x(3-x)}{5}\\cdot\\frac{15}{7}=\\frac{6x(3-x)}{7}=\\frac{18x-6x^2}{7},\\qquad 0<x<1$$

검산: $\\int_0^1\\frac{18x-6x^2}{7}dx=\\frac{1}{7}(9-2)=1$ 로 정상입니다.`},
    {num:'Step 3', title:'조건부기댓값 계산',
     body:`조건부분포도 하나의 확률분포이므로 기댓값은 평소처럼 $x$를 곱해 적분합니다.

$$E[X|Y=2]=\\int_0^1 x\\cdot\\frac{18x-6x^2}{7}dx=\\frac{1}{7}\\int_0^1(18x^2-6x^3)dx$$

$$=\\frac{1}{7}\\left[6x^3-\\frac{3}{2}x^4\\right]_0^1=\\frac{6-1.5}{7}=\\frac{9}{14}$$`}
  ],
  answer:'$f_Y(y)=\\dfrac{y(3y+1)}{30}\\ (1<y<3)$, $f_{X|Y}(x|2)=\\dfrac{18x-6x^2}{7}\\ (0<x<1)$, $E[X|Y=2]=\\dfrac{9}{14}$',
  footnotes:[
    {n:'①',text:'주변확률밀도함수(marginal pdf)란 결합분포에서 관심 없는 변수를 적분으로 지워 얻은, 한 변수만의 분포이다. 즉 $f_Y(y)=\\int f(x,y)\\,dx$ 이고, 적분 범위는 그 $y$값에서 $x$가 움직일 수 있는 구간이다.'},
    {n:'②',text:'조건부확률밀도함수는 이산형의 $P(A|B)=P(A\\cap B)/P(B)$를 연속형으로 옮긴 것으로, 결합밀도를 조건이 되는 변수의 주변밀도로 나눈 값이다. 분모가 상수 역할을 하므로, 나눈 결과는 다시 $x$에 대한 확률밀도함수(적분값 1)가 된다.'}
  ]
},

{
  id:'2014a15', year:2014, type:'전공A', cat:'normal', pts:2,
  title:'이항분포의 정규근사로 $k$ 구하기',
  problem:`어느 도시의 성인 중 $20\\%$가 A 통신사를 이용한다고 한다. 이 도시의 성인 $400$명을 임의로 조사할 때, A 통신사를 이용하는 성인이 $80$명 이상 $92$명 이하가 될 확률을 이항분포의 정규근사를 이용하여 구하면 $P(0\\le Z\\le k)$이다. $k$의 값을 구하시오. (단, $Z$는 표준정규분포를 따르는 확률변수이고 연속성 보정은 하지 않는다.)`,
  steps:[
    {num:'Step 1', title:'이항분포의 평균과 표준편차',
     body:`A 통신사를 이용하는 사람 수를 $X$라 하면 $X\\sim B(400,\\,0.2)$입니다.

$$E[X]=np=400\\times0.2=80$$

$$\\operatorname{Var}(X)=npq=400\\times0.2\\times0.8=64,\\qquad \\sigma=8$$`},
    {num:'Step 2', title:'정규근사',
     body:`$np=80$, $nq=320$으로 둘 다 충분히 크므로 정규근사 ①를 쓸 수 있습니다.

$$X\\ \\approx\\ N(80,\\,8^2)$$

문제에서 연속성 보정 ②은 하지 말라고 했으므로 $79.5$, $92.5$ 같은 보정 없이 그대로 씁니다.`},
    {num:'Step 3', title:'표준화',
     body:`$$P(80\\le X\\le 92)=P\\left(\\frac{80-80}{8}\\le Z\\le \\frac{92-80}{8}\\right)=P(0\\le Z\\le 1.5)$$

따라서 $k=1.5$입니다.`}
  ],
  answer:'$k=1.5$',
  footnotes:[
    {n:'①',text:'드무아브르–라플라스 정리: $X\\sim B(n,p)$일 때 $n$이 충분히 크면 $X$는 근사적으로 $N(np,\\,npq)$를 따른다. 이는 중심극한정리의 특수한 경우로, 베르누이 시행 $n$개의 합이 이항분포이기 때문이다. 실무적으로는 $np\\ge5$, $nq\\ge5$를 기준으로 삼는다.'},
    {n:'②',text:'연속성 보정(continuity correction)은 이산형인 이항분포를 연속형인 정규분포로 바꿀 때 생기는 오차를 줄이려고 경계값을 $\\pm0.5$만큼 넓히는 기법이다. 예를 들어 $P(80\\le X\\le92)$를 $P(79.5\\le X\\le92.5)$로 계산한다. 이 문제는 보정을 하지 않는다고 명시했다.'}
  ]
},

// ───────────────────────────────────────
// 2015
// ───────────────────────────────────────
{
  id:'2015a5', year:2015, type:'전공A', cat:'normal', pts:2,
  title:'독립인 정규분포의 선형결합으로 $k$ 구하기',
  problem:`모집단 $A$는 어떤 지역의 20세 남자들로 이루어져 있다. 모집단 $A$에 속하는 남자의 키는 평균 $175\\,\\text{cm}$, 표준편차 $5\\,\\text{cm}$인 정규분포를 따른다고 한다. 모집단 $A$에서 임의로 뽑은 남자의 키(cm)와 몸무게(kg)를 각각 확률변수 $X$, $Y$라 할 때, $Y=\\frac{2}{5}X+\\alpha$가 성립한다고 하자. 여기서 $\\alpha$는 평균 $0$, 표준편차 $2\\sqrt{3}$인 정규분포를 따르는 확률변수이고, $X$와 $\\alpha$는 독립이다. 확률 $P(Y>72)=P(Z>k)$일 때, $k$의 값을 구하시오. (단, $Z$는 표준정규분포를 따르는 확률변수이다.)`,
  steps:[
    {num:'Step 1', title:'$Y$의 평균',
     body:`기댓값은 항상 선형이므로 독립성과 무관하게 그대로 계산됩니다.

$$E[Y]=\\frac{2}{5}E[X]+E[\\alpha]=\\frac{2}{5}\\times175+0=70$$`},
    {num:'Step 2', title:'$Y$의 분산',
     body:`분산은 상수배가 제곱으로 나오고 ①, $X$와 $\\alpha$가 독립이므로 공분산 항이 사라집니다 ②.

$$\\operatorname{Var}(Y)=\\left(\\frac{2}{5}\\right)^2\\operatorname{Var}(X)+\\operatorname{Var}(\\alpha)=\\frac{4}{25}\\times25+(2\\sqrt3)^2$$

$$=4+12=16,\\qquad \\sigma_Y=4$$`},
    {num:'Step 3', title:'정규분포임을 확인하고 표준화',
     body:`독립인 정규확률변수의 선형결합은 다시 정규분포 ③이므로 $Y\\sim N(70,\\,4^2)$입니다.

$$P(Y>72)=P\\left(Z>\\frac{72-70}{4}\\right)=P(Z>0.5)$$

따라서 $k=0.5$입니다.`}
  ],
  answer:'$k=0.5$',
  footnotes:[
    {n:'①',text:'$\\operatorname{Var}(aX+b)=a^2\\operatorname{Var}(X)$. 상수 $b$를 더하는 것은 분포 전체를 평행이동시킬 뿐이라 흩어진 정도는 바뀌지 않고, $a$배 늘리면 편차가 $a$배가 되어 분산은 $a^2$배가 된다.'},
    {n:'②',text:'일반적으로 $\\operatorname{Var}(U+V)=\\operatorname{Var}(U)+\\operatorname{Var}(V)+2\\operatorname{Cov}(U,V)$이며, $U$와 $V$가 독립이면 $\\operatorname{Cov}(U,V)=0$이므로 단순한 합이 된다.'},
    {n:'③',text:'정규분포의 재생성(reproductive property): 독립인 $X\\sim N(\\mu_1,\\sigma_1^2)$, $Y\\sim N(\\mu_2,\\sigma_2^2)$에 대해 $aX+bY$도 정규분포를 따른다. 그래서 평균과 분산만 구하면 분포가 완전히 결정된다.'}
  ]
},

{
  id:'2015a6', year:2015, type:'전공A', cat:'trans', pts:2,
  title:'$M=\\left[\\frac{X}{Y}\\right]$일 때 $P(M=2)$ 구하기',
  problem:`두 연속확률변수 $X$와 $Y$는 독립이고, $X$와 $Y$의 확률밀도함수(probability density function)를 각각 $f_X(x)=2x\\ (0<x<1)$, $f_Y(y)=1\\ (0<y<1)$이라고 하자. $M=\\left[\\dfrac{X}{Y}\\right]$라 할 때 확률 $P(M=2)$를 구하시오. (단, $[a]$는 $a$보다 크지 않은 최대정수이다.)`,
  diagram:`<svg viewBox="0 0 300 250" xmlns="http://www.w3.org/2000/svg" style="font-family:'Noto Sans KR',sans-serif">
    <text x="150" y="16" font-size="11" fill="var(--t2)" text-anchor="middle">단위정사각형 안에서 x/3 &lt; y ≤ x/2 인 영역</text>
    <rect x="50" y="30" width="180" height="180" fill="none" stroke="var(--b2)" stroke-width="1" stroke-dasharray="3 3"/>
    <polygon points="50,210 230,150 230,120" fill="var(--acc)" fill-opacity="0.22" stroke="var(--acc)" stroke-width="1.6"/>
    <line x1="50" y1="210" x2="230" y2="120" stroke="var(--t1)" stroke-width="1.8"/>
    <line x1="50" y1="210" x2="230" y2="150" stroke="var(--t1)" stroke-width="1.8" stroke-dasharray="5 3"/>
    <line x1="50" y1="210" x2="245" y2="210" stroke="var(--t2)" stroke-width="1.2"/>
    <line x1="50" y1="210" x2="50" y2="22" stroke="var(--t2)" stroke-width="1.2"/>
    <text x="243" y="114" font-size="11" fill="var(--t1)">y = x/2</text>
    <text x="243" y="154" font-size="11" fill="var(--t1)">y = x/3</text>
    <text x="238" y="224" font-size="11" fill="var(--t2)">x</text>
    <text x="58" y="27" font-size="11" fill="var(--t2)">y</text>
    <text x="230" y="224" font-size="10" fill="var(--t3)" text-anchor="middle">1</text>
    <text x="44" y="34" font-size="10" fill="var(--t3)" text-anchor="end">1</text>
    <text x="44" y="222" font-size="10" fill="var(--t3)" text-anchor="end">O</text>
    <text x="150" y="243" font-size="10" fill="var(--t3)" text-anchor="middle">주황 영역의 넓이가 아니라, 밀도 2x를 적분해야 확률이 된다</text>
  </svg>`,
  steps:[
    {num:'Step 1', title:'사건 $M=2$를 부등식으로 바꾸기',
     body:`최대정수 함수의 정의상 $\\left[\\frac{X}{Y}\\right]=2$는 $2\\le \\frac{X}{Y}<3$과 같습니다.

$X>0$, $Y>0$이므로 양변에 $Y$를 곱해도 부등호 방향이 그대로입니다.

$$2Y\\le X<3Y \\iff \\frac{X}{3}<Y\\le \\frac{X}{2}$$`},
    {num:'Step 2', title:'$X=x$로 조건을 걸고 $Y$의 확률 구하기',
     body:`$X$와 $Y$가 독립이므로 $X=x$를 고정해도 $Y$는 여전히 $(0,1)$ 위의 균등분포입니다.

$0<x<1$이면 $\\frac{x}{2}<1$이므로 구간 $\\left(\\frac{x}{3},\\frac{x}{2}\\right]$은 통째로 $(0,1)$ 안에 들어갑니다. 균등분포에서 확률은 구간의 길이와 같으므로

$$P\\left(\\frac{x}{3}<Y\\le\\frac{x}{2}\\right)=\\frac{x}{2}-\\frac{x}{3}=\\frac{x}{6}$$`},
    {num:'Step 3', title:'$x$에 대해 적분',
     body:`전확률의 법칙 ①을 연속형으로 쓰면

$$P(M=2)=\\int_0^1 f_X(x)\\cdot\\frac{x}{6}\\,dx=\\int_0^1 2x\\cdot\\frac{x}{6}dx=\\int_0^1\\frac{x^2}{3}dx$$

$$=\\left[\\frac{x^3}{9}\\right]_0^1=\\frac{1}{9}$$`}
  ],
  answer:'$P(M=2)=\\dfrac{1}{9}$',
  footnotes:[
    {n:'①',text:'연속형 전확률의 법칙: $P(A)=\\int P(A\\,|\\,X=x)f_X(x)\\,dx$. 이산형에서 각 경우의 확률을 모두 더하던 것을, 연속형에서는 밀도를 가중치로 삼아 적분하는 것으로 바꾼 것이다.'},
    {n:'②',text:'그림의 영역은 두 직선 $y=x/3$과 $y=x/2$ 사이의 삼각형이다. 이 문제에서 $Y$는 균등분포라 밀도가 1이지만 $X$의 밀도가 $2x$로 일정하지 않으므로, 확률은 영역의 넓이가 아니라 $\\iint 2x\\,dA$로 계산해야 한다.'}
  ]
},

// ───────────────────────────────────────
// 2016
// ───────────────────────────────────────
{
  id:'2016a7', year:2016, type:'전공A', cat:'joint', pts:2,
  title:'앞면의 총합이 2일 때 조건부확률로 $n$ 구하기',
  problem:`앞면이 나올 확률이 $p\\ (0<p<1)$인 동전을 학생 A가 $n$번 던지고, 학생 B가 $2n$번 던진다. 학생 A가 던져서 앞면이 나온 횟수와 학생 B가 던져서 앞면이 나온 횟수의 합이 $2$일 때, 학생 A가 던져서 앞면이 나온 횟수가 $1$일 확률이 $\\frac{6}{13}$이다. $n$의 값을 구하시오.`,
  steps:[
    {num:'Step 1', title:'확률변수 설정',
     body:`A가 얻은 앞면 수를 $U\\sim B(n,p)$, B가 얻은 앞면 수를 $V\\sim B(2n,p)$라 하면 $U$와 $V$는 독립입니다.

두 이항분포의 합은 시행 횟수를 더한 이항분포 ①가 되므로 $U+V\\sim B(3n,p)$입니다.

구하는 것은 조건부확률 $P(U=1\\,|\\,U+V=2)$입니다.`},
    {num:'Step 2', title:'분자와 분모를 각각 쓰기',
     body:`분자는 $U=1$이고 $V=1$인 경우이며, 독립이므로 곱으로 쓸 수 있습니다. $q=1-p$라 하면

$$P(U=1,V=1)=\\binom{n}{1}pq^{n-1}\\cdot\\binom{2n}{1}pq^{2n-1}=2n^2p^2q^{3n-2}$$

$$P(U+V=2)=\\binom{3n}{2}p^2q^{3n-2}$$`},
    {num:'Step 3', title:'$p$가 소거됨을 확인하고 $n$ 구하기',
     body:`$p^2q^{3n-2}$가 통째로 약분되어 $p$에 무관한 식이 됩니다 ②.

$$P(U=1\\,|\\,U+V=2)=\\frac{2n^2}{\\binom{3n}{2}}=\\frac{2n^2}{\\frac{3n(3n-1)}{2}}=\\frac{4n}{3(3n-1)}$$

$$\\frac{4n}{9n-3}=\\frac{6}{13}\\ \\Rightarrow\\ 52n=54n-18\\ \\Rightarrow\\ n=9$$`}
  ],
  answer:'$n=9$',
  footnotes:[
    {n:'①',text:'같은 성공확률 $p$를 갖는 독립인 $B(m,p)$와 $B(k,p)$의 합은 $B(m+k,p)$이다. 각각이 베르누이 시행의 합이므로, 두 묶음을 합치면 그냥 $m+k$번의 시행이 되기 때문이다.'},
    {n:'②',text:'합이 2로 고정되면 $p$가 사라지는 이유는, 앞면 2개가 총 $3n$번의 시행 중 어디에 놓이는지가 모두 같은 확률 $p^2q^{3n-2}$를 갖기 때문이다. 즉 조건부분포는 초기하분포처럼 위치를 고르는 문제로 바뀐다. 실제로 $U\\,|\\,U+V=2$는 초기하분포를 따른다.'}
  ]
},

{
  id:'2016a8', year:2016, type:'전공A', cat:'trans', pts:2,
  title:'독립인 지수분포의 합 $Z=X+2Y$의 확률밀도함수',
  problem:`두 연속확률변수 $X$, $Y$가 서로 독립이고, 확률밀도함수(probability density function)가 각각

$$f_X(x)=\\frac{1}{2}e^{-x/2}\\ (x>0),\\qquad f_Y(y)=e^{-y}\\ (y>0)$$

이다. 확률변수 $Z=X+2Y$의 확률밀도함수 $g(z)$를 구하시오.`,
  steps:[
    {num:'Step 1', title:'$W=2Y$의 분포를 먼저 구하기',
     body:`$W=2Y$의 누적분포함수를 정의대로 씁니다.

$$F_W(w)=P(2Y\\le w)=P\\left(Y\\le\\frac{w}{2}\\right)=1-e^{-w/2}\\quad(w>0)$$

미분하면 $f_W(w)=\\frac{1}{2}e^{-w/2}\\ (w>0)$입니다.

즉 $W$는 $X$와 완전히 같은 분포, 평균 $2$인 지수분포 ①를 따릅니다.`},
    {num:'Step 2', title:'합성곱으로 $Z=X+W$의 밀도 구하기',
     body:`독립인 두 확률변수의 합의 밀도는 합성곱 ②으로 구합니다. $x>0$이고 $z-x>0$이어야 하므로 적분 범위는 $0<x<z$입니다.

$$g(z)=\\int_0^z f_X(x)f_W(z-x)\\,dx=\\int_0^z\\frac{1}{2}e^{-x/2}\\cdot\\frac{1}{2}e^{-(z-x)/2}dx$$

지수부가 $-\\frac{x}{2}-\\frac{z-x}{2}=-\\frac{z}{2}$로 $x$와 무관해집니다.

$$=\\frac{1}{4}e^{-z/2}\\int_0^z dx=\\frac{1}{4}ze^{-z/2}$$`},
    {num:'Step 3', title:'결론과 검산',
     body:`$$g(z)=\\frac{1}{4}ze^{-z/2},\\qquad z>0$$

이는 형상모수 $2$, 척도모수 $2$인 감마분포 ③(자유도 4인 카이제곱분포)입니다.

검산: $\\int_0^\\infty \\frac{1}{4}ze^{-z/2}dz=\\frac{1}{4}\\cdot 2^2\\Gamma(2)=1$ 로 정상입니다.`}
  ],
  answer:'$g(z)=\\dfrac{1}{4}ze^{-z/2}\\ (z>0)$, 그 외에는 $0$',
  footnotes:[
    {n:'①',text:'지수분포의 척도 성질: $Y$가 평균 $1$인 지수분포를 따르면 $cY$는 평균 $c$인 지수분포를 따른다. 지수분포는 평균 하나로 결정되므로 상수배는 평균만 바꾼다.'},
    {n:'②',text:'합성곱(convolution): 독립인 $X$, $W$에 대해 $Z=X+W$의 밀도는 $f_Z(z)=\\int f_X(x)f_W(z-x)dx$. $Z=z$가 되는 모든 조합 $(x,z-x)$의 밀도를 더한다는 뜻이며, 적분 범위는 두 밀도가 모두 0이 아닌 구간의 교집합으로 정해진다.'},
    {n:'③',text:'평균이 같은 독립 지수분포 $k$개의 합은 감마분포 $\\Gamma(k,\\theta)$를 따르고, 밀도는 $\\frac{1}{\\Gamma(k)\\theta^k}z^{k-1}e^{-z/\\theta}$이다. 여기서는 $k=2$, $\\theta=2$이므로 $\\frac{1}{1\\cdot4}ze^{-z/2}$가 된다.'}
  ]
},

// ───────────────────────────────────────
// 2017
// ───────────────────────────────────────
{
  id:'2017a7', year:2017, type:'전공A', cat:'trans', pts:2,
  title:'두 확률변수의 최솟값 $Y=\\min\\{X_1,X_2\\}$의 확률',
  problem:`연속확률변수 $X$의 확률밀도함수(probability density function) $f_X(x)$는

$$f_X(x)=\\frac{2}{9}x-\\frac{2}{9}\\quad(1<x<4)$$

이다. $X$와 같은 분포를 따르고 서로 독립인 $2$개의 연속확률변수 $X_1$, $X_2$에 대하여 $Y=\\min\\{X_1,X_2\\}$일 때, 확률 $P\\left(Y<\\frac{5}{2}\\right)$를 구하시오. (단, $\\min\\{a,b\\}$는 $a$와 $b$ 중 크지 않은 수이다.)`,
  steps:[
    {num:'Step 1', title:'누적분포함수 $F_X$ 구하기',
     body:`$f_X(x)=\\frac{2}{9}(x-1)$이므로

$$F_X(x)=\\int_1^x\\frac{2}{9}(t-1)dt=\\frac{1}{9}(x-1)^2,\\qquad 1\\le x\\le 4$$

검산: $F_X(4)=\\frac{9}{9}=1$ 로 정상입니다.`},
    {num:'Step 2', title:'최솟값은 여사건으로 다루기',
     body:`최솟값이 어떤 값보다 크다는 것은 "모두가 그 값보다 크다"는 뜻이므로, 여사건을 쓰면 독립성을 곧바로 이용할 수 있습니다 ①.

$$P(Y<c)=1-P(Y\\ge c)=1-P(X_1\\ge c)P(X_2\\ge c)=1-\\big(1-F_X(c)\\big)^2$$`},
    {num:'Step 3', title:'$c=\\frac{5}{2}$ 대입',
     body:`$$F_X\\!\\left(\\frac{5}{2}\\right)=\\frac{1}{9}\\left(\\frac{3}{2}\\right)^2=\\frac{1}{9}\\cdot\\frac{9}{4}=\\frac{1}{4}$$

$$P\\left(Y<\\frac{5}{2}\\right)=1-\\left(1-\\frac{1}{4}\\right)^2=1-\\frac{9}{16}=\\frac{7}{16}$$`}
  ],
  answer:'$P\\left(Y<\\frac{5}{2}\\right)=\\dfrac{7}{16}$',
  footnotes:[
    {n:'①',text:'순서통계량의 기본 기법: 최솟값은 "모두 크다"의 여사건, 최댓값은 "모두 작다"로 바로 계산한다. 즉 독립인 $n$개에 대해 $P(\\min>c)=\\prod P(X_i>c)$, $P(\\max\\le c)=\\prod P(X_i\\le c)$이다.'},
    {n:'②',text:'연속확률변수에서는 한 점의 확률이 0이므로 $P(Y<c)$와 $P(Y\\le c)$가 같다. 부등호에 등호가 있는지 없는지를 신경 쓰지 않아도 되는 것은 연속형에서만 그렇다.'}
  ]
},

{
  id:'2017a14', year:2017, type:'전공A', cat:'trans', pts:4,
  title:'독립인 균등분포의 합 $Z=X+Y$의 밀도와 평균',
  problem:`두 연속확률변수 $X$, $Y$는 서로 독립이고 각각 구간 $(0,2)$에서 균등분포(uniform distribution)를 따른다. 확률변수 $Z=X+Y$의 확률밀도함수(probability density function) $f_Z(z)$와 평균 $E[Z]$를 풀이 과정과 함께 쓰시오.`,
  diagram:`<svg viewBox="0 0 320 220" xmlns="http://www.w3.org/2000/svg" style="font-family:'Noto Sans KR',sans-serif">
    <text x="160" y="16" font-size="11" fill="var(--t2)" text-anchor="middle">Z = X+Y 의 확률밀도함수 (삼각분포)</text>
    <polygon points="40,180 160,60 280,180" fill="var(--acc-bg)" stroke="var(--acc)" stroke-width="1.8"/>
    <line x1="30" y1="180" x2="300" y2="180" stroke="var(--t2)" stroke-width="1.2"/>
    <line x1="40" y1="195" x2="40" y2="45" stroke="var(--t2)" stroke-width="1.2"/>
    <line x1="40" y1="60" x2="160" y2="60" stroke="var(--t3)" stroke-width="1" stroke-dasharray="3 3"/>
    <line x1="160" y1="60" x2="160" y2="180" stroke="var(--t3)" stroke-width="1" stroke-dasharray="3 3"/>
    <text x="36" y="64" font-size="10" fill="var(--t3)" text-anchor="end">1/2</text>
    <text x="40" y="194" font-size="10" fill="var(--t3)" text-anchor="middle">0</text>
    <text x="160" y="194" font-size="10" fill="var(--t3)" text-anchor="middle">2</text>
    <text x="280" y="194" font-size="10" fill="var(--t3)" text-anchor="middle">4</text>
    <text x="298" y="196" font-size="11" fill="var(--t2)">z</text>
    <text x="95" y="130" font-size="11" fill="var(--acc)" text-anchor="middle">z/4</text>
    <text x="228" y="130" font-size="11" fill="var(--acc)" text-anchor="middle">(4−z)/4</text>
    <text x="160" y="212" font-size="10" fill="var(--t3)" text-anchor="middle">z=2 에 대해 대칭이므로 E[Z]=2</text>
  </svg>`,
  steps:[
    {num:'Step 1', title:'각 밀도함수를 쓰고 합성곱 세우기',
     body:`$f_X(x)=\\frac{1}{2}\\ (0<x<2)$, $f_Y(y)=\\frac{1}{2}\\ (0<y<2)$이고 독립이므로

$$f_Z(z)=\\int_{-\\infty}^{\\infty}f_X(x)f_Y(z-x)\\,dx$$

피적분함수가 $0$이 아니려면 $0<x<2$ 이면서 $0<z-x<2$, 즉 $z-2<x<z$여야 합니다. 두 조건을 합치면

$$\\max(0,\\,z-2)<x<\\min(2,\\,z)$$

$Z$의 값의 범위는 $0<z<4$입니다.`},
    {num:'Step 2', title:'구간을 두 경우로 나누어 적분',
     body:`피적분함수는 상수 $\\frac{1}{4}$이므로 적분값은 (구간 길이)$\\times\\frac{1}{4}$입니다 ①.

(i) $0<z\\le2$일 때: $x$의 범위는 $(0,\\,z)$, 길이 $z$

$$f_Z(z)=\\frac{1}{4}z$$

(ii) $2<z<4$일 때: $x$의 범위는 $(z-2,\\,2)$, 길이 $4-z$

$$f_Z(z)=\\frac{1}{4}(4-z)$$

검산: 전체 적분은 밑변 $4$, 높이 $\\frac{1}{2}$인 삼각형의 넓이 $\\frac{1}{2}\\times4\\times\\frac{1}{2}=1$ 로 정상입니다.`},
    {num:'Step 3', title:'평균 구하기',
     body:`가장 간단한 방법은 기댓값의 선형성 ②입니다. 균등분포 $U(0,2)$의 평균은 $1$이므로

$$E[Z]=E[X]+E[Y]=1+1=2$$

직접 적분해도 같습니다.

$$E[Z]=\\int_0^2 z\\cdot\\frac{z}{4}dz+\\int_2^4 z\\cdot\\frac{4-z}{4}dz=\\frac{2}{3}+\\frac{4}{3}=2$$

밀도가 $z=2$에 대해 대칭이므로 평균이 $2$인 것은 그림으로도 바로 보입니다.`}
  ],
  answer:'$f_Z(z)=\\dfrac{z}{4}\\ (0<z\\le2)$, $\\dfrac{4-z}{4}\\ (2<z<4)$, 그 외 $0$; $E[Z]=2$',
  footnotes:[
    {n:'①',text:'두 균등분포의 합이 삼각분포가 되는 이유는, $Z=z$를 만드는 $(x,y)$ 조합의 "길이"가 $z$가 가운데로 갈수록 길어졌다가 다시 짧아지기 때문이다. 정사각형 영역을 기울어진 직선 $x+y=z$로 자를 때 생기는 선분의 길이를 생각하면 된다.'},
    {n:'②',text:'기댓값의 선형성 $E[X+Y]=E[X]+E[Y]$는 독립이 아니어도 항상 성립한다. 반면 분산의 덧셈 $\\operatorname{Var}(X+Y)=\\operatorname{Var}(X)+\\operatorname{Var}(Y)$는 독립(또는 무상관)일 때만 성립한다.'}
  ]
},

// ───────────────────────────────────────
// 2018
// ───────────────────────────────────────
{
  id:'2018a7', year:2018, type:'전공A', cat:'joint', pts:2,
  title:'이산 결합확률분포에서 조건부기댓값 $E[X|Y=1]$',
  problem:`두 이산확률변수 $X$, $Y$의 결합확률분포가 아래 표와 같다. 조건 $Y=1$이 주어졌을 때, 확률변수 $X$의 조건부기댓값(conditional expectation) $E[X|Y=1]$을 구하시오.`,
  diagram:`<table style="border-collapse:collapse;font-size:13px;color:var(--t1)">
    <tr>
      <th style="border:1px solid var(--b2);padding:6px 12px;background:var(--s2);font-weight:600;color:var(--t2)">X \\ Y</th>
      <th style="border:1px solid var(--b2);padding:6px 14px;background:var(--s2);font-weight:600">0</th>
      <th style="border:1px solid var(--b2);padding:6px 14px;background:var(--s2);font-weight:600">1</th>
      <th style="border:1px solid var(--b2);padding:6px 14px;background:var(--s2);font-weight:600">2</th>
      <th style="border:1px solid var(--b2);padding:6px 14px;background:var(--s2);font-weight:600">3</th>
    </tr>
    <tr>
      <td style="border:1px solid var(--b2);padding:6px 12px;background:var(--s2);font-weight:600">0</td>
      <td style="border:1px solid var(--b2);padding:6px 14px;text-align:center">1/15</td>
      <td style="border:1px solid var(--b2);padding:6px 14px;text-align:center;background:rgba(181,115,12,0.15)">2/15</td>
      <td style="border:1px solid var(--b2);padding:6px 14px;text-align:center">0</td>
      <td style="border:1px solid var(--b2);padding:6px 14px;text-align:center">1/5</td>
    </tr>
    <tr>
      <td style="border:1px solid var(--b2);padding:6px 12px;background:var(--s2);font-weight:600">1</td>
      <td style="border:1px solid var(--b2);padding:6px 14px;text-align:center">0</td>
      <td style="border:1px solid var(--b2);padding:6px 14px;text-align:center;background:rgba(181,115,12,0.15)">1/5</td>
      <td style="border:1px solid var(--b2);padding:6px 14px;text-align:center">2/15</td>
      <td style="border:1px solid var(--b2);padding:6px 14px;text-align:center">1/15</td>
    </tr>
    <tr>
      <td style="border:1px solid var(--b2);padding:6px 12px;background:var(--s2);font-weight:600">2</td>
      <td style="border:1px solid var(--b2);padding:6px 14px;text-align:center">1/15</td>
      <td style="border:1px solid var(--b2);padding:6px 14px;text-align:center;background:rgba(181,115,12,0.15)">1/15</td>
      <td style="border:1px solid var(--b2);padding:6px 14px;text-align:center">1/15</td>
      <td style="border:1px solid var(--b2);padding:6px 14px;text-align:center">0</td>
    </tr>
  </table>`,
  steps:[
    {num:'Step 1', title:'$Y=1$인 열만 뽑아 주변확률 구하기',
     body:`$Y=1$인 칸은 세 개입니다.

$$P(X=0,Y=1)=\\frac{2}{15},\\quad P(X=1,Y=1)=\\frac{1}{5}=\\frac{3}{15},\\quad P(X=2,Y=1)=\\frac{1}{15}$$

$$P(Y=1)=\\frac{2}{15}+\\frac{3}{15}+\\frac{1}{15}=\\frac{6}{15}=\\frac{2}{5}$$`},
    {num:'Step 2', title:'조건부확률분포 만들기',
     body:`각 칸을 $P(Y=1)$로 나눕니다 ①.

$$P(X=0|Y=1)=\\frac{2/15}{6/15}=\\frac{2}{6},\\quad P(X=1|Y=1)=\\frac{3}{6},\\quad P(X=2|Y=1)=\\frac{1}{6}$$

합이 $1$임을 확인할 수 있습니다.`},
    {num:'Step 3', title:'조건부기댓값 계산',
     body:`$$E[X|Y=1]=0\\cdot\\frac{2}{6}+1\\cdot\\frac{3}{6}+2\\cdot\\frac{1}{6}=\\frac{0+3+2}{6}=\\frac{5}{6}$$`}
  ],
  answer:'$E[X|Y=1]=\\dfrac{5}{6}$',
  footnotes:[
    {n:'①',text:'조건부확률질량함수 $P(X=x|Y=y)=\\dfrac{P(X=x,\\,Y=y)}{P(Y=y)}$. 표에서 $Y=y$인 열 하나만 남기고, 그 열의 합이 1이 되도록 전부 나눠주는 작업이라고 이해하면 된다.'},
    {n:'②',text:'분모 $P(Y=y)$는 그 열의 합, 즉 $Y$의 주변확률질량함수 값이다. 표의 가장자리(margin)에 적어두는 합이라서 "주변(marginal)"이라 부른다.'}
  ]
},

{
  id:'2018b2', year:2018, type:'전공B', cat:'normal', pts:4,
  title:'두 정규분포의 평균 $T=\\frac{X+Y}{2}$로 $k$ 구하기',
  problem:`어느 회사의 입사 시험 지원자들의 필기시험 점수와 면접시험 점수는 각각 정규분포 $N(82,6^2)$, $N(80,8^2)$을 따르고 서로 독립이라고 한다. 이 회사의 입사 시험 지원자 중에서 임의로 뽑은 한 지원자의 필기시험 점수를 확률변수 $X$, 면접시험 점수를 확률변수 $Y$라 하자. 이 지원자의 평균 점수를 $T=\\dfrac{X+Y}{2}$라 할 때, 평균 점수가 $90$점 이상일 확률은 $P(T\\ge90)=P(Z\\ge k)$이다. 이때 $k$의 값을 풀이 과정과 함께 쓰시오. (단, $Z$는 표준정규분포를 따르는 확률변수이다.)`,
  steps:[
    {num:'Step 1', title:'$T$의 평균',
     body:`$$E[T]=\\frac{E[X]+E[Y]}{2}=\\frac{82+80}{2}=81$$`},
    {num:'Step 2', title:'$T$의 분산',
     body:`$T=\\frac{1}{2}X+\\frac{1}{2}Y$이고 $X$, $Y$가 독립이므로

$$\\operatorname{Var}(T)=\\left(\\frac{1}{2}\\right)^2\\operatorname{Var}(X)+\\left(\\frac{1}{2}\\right)^2\\operatorname{Var}(Y)=\\frac{36+64}{4}=25$$

$$\\sigma_T=5$$

$\\frac{1}{2}$을 곱했으므로 분산에는 $\\frac{1}{4}$이 곱해집니다. 표준편차를 그냥 $\\frac{6+8}{2}=7$처럼 평균 내면 안 됩니다 ①.`},
    {num:'Step 3', title:'정규성 확인 후 표준화',
     body:`독립인 정규확률변수의 선형결합이므로 $T\\sim N(81,\\,5^2)$입니다 ②.

$$P(T\\ge90)=P\\left(Z\\ge\\frac{90-81}{5}\\right)=P(Z\\ge1.8)$$

따라서 $k=1.8$입니다.`}
  ],
  answer:'$k=1.8$',
  footnotes:[
    {n:'①',text:'표준편차는 선형이 아니다. 분산 단계까지 계산한 뒤 마지막에 제곱근을 취해야 한다. 두 시험의 점수를 평균 내면 흩어짐이 줄어드는데, 그 효과가 분산 계산에 자동으로 반영된다.'},
    {n:'②',text:'정규분포의 재생성: 독립인 정규확률변수들의 선형결합 $aX+bY+c$는 다시 정규분포를 따르며, 평균은 $aE[X]+bE[Y]+c$, 분산은 $a^2\\operatorname{Var}(X)+b^2\\operatorname{Var}(Y)$이다.'}
  ]
},

// ───────────────────────────────────────
// 2019
// ───────────────────────────────────────
{
  id:'2019a7', year:2019, type:'전공A', cat:'trans', pts:2,
  title:'두 지수분포의 최솟값으로 시스템 수명 확률 구하기',
  problem:`두 개의 부품 ㉮와 ㉯로 구성된 시스템이 있다. 이 시스템의 수명은 작동을 시작한 후 두 부품 중 하나가 고장 날 때까지 걸리는 시간이다. 부품 ㉮가 고장 날 때까지 걸린 시간 $X$와 부품 ㉯가 고장 날 때까지 걸린 시간 $Y$는 서로 독립이고, 두 확률변수 $X$, $Y$의 확률밀도함수는 각각

$$f_X(x)=\\frac{1}{5}e^{-x/5}\\ (x>0),\\qquad f_Y(y)=\\frac{1}{10}e^{-y/10}\\ (y>0)$$

이다. 이 시스템의 수명 $Z$에 대하여 확률 $P(Z>10)$을 구하시오.`,
  steps:[
    {num:'Step 1', title:'문제 상황을 최솟값으로 번역',
     body:`"두 부품 중 하나라도 고장 나면 끝"이므로 시스템 수명은 두 고장 시각 중 먼저 오는 쪽입니다 ①.

$$Z=\\min\\{X,\\,Y\\}$$

(참고로 "둘 다 고장 나야 끝"인 병렬 구조라면 $Z=\\max\\{X,Y\\}$가 됩니다.)`},
    {num:'Step 2', title:'생존함수를 곱하기',
     body:`$Z>10$은 $X>10$이고 $Y>10$인 것과 같고, 두 변수가 독립이므로 곱으로 분해됩니다.

지수분포의 생존함수 ②는 $P(X>t)=e^{-t/5}$, $P(Y>t)=e^{-t/10}$입니다.

$$P(Z>10)=P(X>10)P(Y>10)=e^{-10/5}\\cdot e^{-10/10}=e^{-2}\\cdot e^{-1}$$`},
    {num:'Step 3', title:'결론',
     body:`$$P(Z>10)=e^{-3}\\approx0.0498$$

참고로 $P(Z>t)=e^{-t/5-t/10}=e^{-3t/10}$이므로 $Z$ 자체가 평균 $\\frac{10}{3}$인 지수분포를 따릅니다 ③.`}
  ],
  answer:'$P(Z>10)=e^{-3}$',
  footnotes:[
    {n:'①',text:'신뢰도 공학에서 이런 구조를 직렬 시스템이라 한다. 하나만 고장 나도 전체가 멈추므로 수명은 최솟값이고, 반대로 병렬 시스템(모두 고장 나야 멈춤)의 수명은 최댓값이다.'},
    {n:'②',text:'생존함수 $S(t)=P(X>t)=1-F(t)$. 지수분포에서 $F(t)=1-e^{-t/\\theta}$이므로 $S(t)=e^{-t/\\theta}$로 매우 간단하다. 최솟값 문제에서는 누적분포함수보다 생존함수가 훨씬 다루기 쉽다.'},
    {n:'③',text:'평균이 $\\theta_1$, $\\theta_2$인 독립 지수분포의 최솟값은 다시 지수분포를 따르고, 그 비율(rate)은 각 비율의 합이다. 즉 $\\frac{1}{\\theta}=\\frac{1}{5}+\\frac{1}{10}=\\frac{3}{10}$이므로 평균은 $\\frac{10}{3}$이다.'}
  ]
},

{
  id:'2019b2', year:2019, type:'전공B', cat:'normal', pts:4,
  title:'표본평균의 분포로 상수 $c$와 모평균의 $90\\%$ 신뢰구간 구하기',
  problem:`어느 지역 고등학생들의 몸무게(kg)는 정규분포 $N(\\mu,9^2)$을 따른다고 한다. 이 지역의 고등학생 중에서 임의로 추출한 $36$명의 몸무게에 대한 표본평균을 $\\overline{X}$라 하자.

$$P(|\\overline{X}-\\mu|>c)=0.1$$

을 만족시키는 상수 $c$의 값을 풀이 과정과 함께 쓰시오. 또한 $36$명의 표본으로부터 관측된 표본평균의 값이 $60$일 때, 모평균 $\\mu$에 대한 $90\\%$ 신뢰구간(confidence interval)을 풀이 과정과 함께 쓰시오. (단, 표준정규분포를 따르는 확률변수 $Z$에 대하여 $P(Z<1.64)=0.95$이고, 모평균에 대한 신뢰구간은 양측신뢰구간을 의미한다.)`,
  steps:[
    {num:'Step 1', title:'표본평균의 분포',
     body:`모집단이 정규분포이고 $\\sigma=9$, $n=36$이므로 ①

$$\\overline{X}\\sim N\\left(\\mu,\\ \\frac{9^2}{36}\\right)=N(\\mu,\\,1.5^2)$$

표준오차는 $\\dfrac{\\sigma}{\\sqrt{n}}=\\dfrac{9}{6}=1.5$입니다.`},
    {num:'Step 2', title:'$c$ 구하기',
     body:`$$P(|\\overline{X}-\\mu|>c)=P\\left(|Z|>\\frac{c}{1.5}\\right)=0.1$$

양쪽 꼬리 확률의 합이 $0.1$이므로 한쪽 꼬리는 $0.05$, 즉 $P\\left(Z>\\frac{c}{1.5}\\right)=0.05$입니다.

$P(Z<1.64)=0.95$에서 $P(Z>1.64)=0.05$이므로

$$\\frac{c}{1.5}=1.64\\ \\Rightarrow\\ c=2.46$$`},
    {num:'Step 3', title:'$90\\%$ 신뢰구간',
     body:`신뢰수준 $90\\%$의 신뢰구간 ②은

$$\\left(\\bar{x}-1.64\\cdot\\frac{\\sigma}{\\sqrt n},\\ \\bar{x}+1.64\\cdot\\frac{\\sigma}{\\sqrt n}\\right)$$

$\\bar{x}=60$, $\\frac{\\sigma}{\\sqrt n}=1.5$이므로 오차한계는 Step 2에서 구한 $c=2.46$과 같습니다.

$$(60-2.46,\\ 60+2.46)=(57.54,\\ 62.46)$$`}
  ],
  answer:'$c=2.46$, $90\\%$ 신뢰구간은 $(57.54,\\ 62.46)$',
  footnotes:[
    {n:'①',text:'모집단이 정규분포 $N(\\mu,\\sigma^2)$이면 표본크기와 무관하게 표본평균은 정확히 $N(\\mu,\\sigma^2/n)$을 따른다. 모집단이 정규분포가 아닐 때는 $n$이 커야 중심극한정리로 근사할 수 있다.'},
    {n:'②',text:'신뢰구간의 폭은 Step 2에서 구한 오차한계와 정확히 같은 값이다. $P(|\\overline{X}-\\mu|\\le c)=0.9$라는 식을 $\\mu$에 대해 풀어 쓴 것이 곧 신뢰구간이기 때문이다.'},
    {n:'③',text:'"$90\\%$ 신뢰"의 의미는, 같은 방식으로 표본을 반복해서 뽑아 구간을 만들면 그중 약 $90\\%$가 참값 $\\mu$를 포함한다는 것이다. 이미 계산된 특정 구간 $(57.54,62.46)$에 $\\mu$가 들어갈 확률이 $0.9$라는 뜻은 아니다.'}
  ]
},

// ───────────────────────────────────────
// 2020
// ───────────────────────────────────────
{
  id:'2020a8', year:2020, type:'전공A', cat:'trans', pts:4,
  title:'점화식의 생성함수를 확률밀도함수로 보고 기댓값 구하기',
  problem:`점화식

$$a_0=1,\\qquad a_n+a_{n-1}=(-1)^n\\ (n\\ge1)$$

을 만족하는 수열 $\\{a_n\\}$의 생성함수(generating function) $g(x)$를 풀이 과정과 함께 쓰시오. 또한 함수

$$f(x)=\\begin{cases} g(x), & -\\dfrac{1}{3}<x<1 \\\\ 0, & \\text{그 외의 경우}\\end{cases}$$

가 연속확률변수 $X$의 확률밀도함수일 때, 확률변수 $X$의 기댓값을 풀이 과정과 함께 쓰시오.`,
  steps:[
    {num:'Step 1', title:'점화식에 $x^n$을 곱해 합하기',
     body:`$g(x)=\\sum_{n\\ge0}a_nx^n$이라 두고, 점화식 양변에 $x^n$을 곱해 $n\\ge1$에서 더합니다 ①.

좌변: $\\sum_{n\\ge1}a_nx^n+\\sum_{n\\ge1}a_{n-1}x^n=\\big(g(x)-a_0\\big)+x\\,g(x)$

우변: $\\sum_{n\\ge1}(-1)^nx^n=\\dfrac{-x}{1+x}$ (첫항 $-x$, 공비 $-x$인 등비급수)`},
    {num:'Step 2', title:'$g(x)$에 대해 풀기',
     body:`$$g(x)-1+xg(x)=\\frac{-x}{1+x}$$

$$g(x)(1+x)=1-\\frac{x}{1+x}=\\frac{1+x-x}{1+x}=\\frac{1}{1+x}$$

$$g(x)=\\frac{1}{(1+x)^2}$$

검산: $\\frac{1}{(1+x)^2}=\\sum_{n\\ge0}(-1)^n(n+1)x^n$이므로 $a_n=(-1)^n(n+1)$이고, $a_0=1$이며 $a_n+a_{n-1}=(-1)^n\\big((n+1)-n\\big)=(-1)^n$으로 점화식을 만족합니다.`},
    {num:'Step 3', title:'확률밀도함수임을 확인',
     body:`$-\\frac{1}{3}<x<1$에서 $f(x)=\\frac{1}{(1+x)^2}>0$이고

$$\\int_{-1/3}^{1}\\frac{dx}{(1+x)^2}=\\left[-\\frac{1}{1+x}\\right]_{-1/3}^{1}=-\\frac{1}{2}+\\frac{1}{2/3}=-\\frac{1}{2}+\\frac{3}{2}=1$$

이므로 확률밀도함수의 조건을 만족합니다.`},
    {num:'Step 4', title:'기댓값 계산',
     body:`$$E[X]=\\int_{-1/3}^{1}\\frac{x}{(1+x)^2}dx$$

$u=1+x$로 치환하면 $x=u-1$, $u$는 $\\frac{2}{3}$부터 $2$까지 움직입니다.

$$=\\int_{2/3}^{2}\\frac{u-1}{u^2}du=\\int_{2/3}^{2}\\left(\\frac{1}{u}-\\frac{1}{u^2}\\right)du=\\left[\\ln u+\\frac{1}{u}\\right]_{2/3}^{2}$$

$$=\\left(\\ln2+\\frac{1}{2}\\right)-\\left(\\ln\\frac{2}{3}+\\frac{3}{2}\\right)=\\ln3-1$$`}
  ],
  answer:'$g(x)=\\dfrac{1}{(1+x)^2}$, $E[X]=\\ln3-1$',
  footnotes:[
    {n:'①',text:'생성함수(보통생성함수)는 수열 $\\{a_n\\}$을 계수로 갖는 형식적 멱급수 $g(x)=\\sum a_nx^n$이다. 점화식 양변에 $x^n$을 곱해 더하면 점화식이 $g$에 대한 대수방정식으로 바뀌어, 수열 문제를 함수 문제로 옮길 수 있다.'},
    {n:'②',text:'$\\sum_{n\\ge1}a_{n-1}x^n=x\\sum_{n\\ge1}a_{n-1}x^{n-1}=x\\,g(x)$. 첨자를 하나 밀면 $x$가 하나 곱해진다는 것이 생성함수 계산의 핵심 요령이다.'},
    {n:'③',text:'$\\frac{1}{(1+x)^2}$의 전개는 $\\frac{1}{1-t}=\\sum t^n$을 미분해 얻는다. $\\frac{1}{(1-t)^2}=\\sum(n+1)t^n$에 $t=-x$를 대입하면 $\\sum(n+1)(-1)^nx^n$이 된다.'}
  ]
},

{
  id:'2020b7', year:2020, type:'전공B', cat:'trans', pts:4,
  title:'$Y=2\\ln\\frac{3}{3-X}$의 누적분포함수와 확률밀도함수',
  problem:`확률변수 $X$가 구간 $(0,3)$에서 균등분포(uniform distribution)를 따른다. 확률변수 $Y$를 $Y=2\\ln\\left(\\dfrac{3}{3-X}\\right)$이라 할 때, $Y$의 누적분포함수(cumulative distribution function) $F_Y(y)=P(Y\\le y)$를 풀이 과정과 함께 쓰시오. 또한 $Y$의 확률밀도함수와 $P(|Y-2|>2)$의 값을 각각 구하시오.`,
  steps:[
    {num:'Step 1', title:'$Y$의 치역 확인',
     body:`$X$가 $0$에 가까우면 $\\frac{3}{3-X}\\to1$이므로 $Y\\to0$이고, $X$가 $3$에 가까우면 $\\frac{3}{3-X}\\to\\infty$이므로 $Y\\to\\infty$입니다.

또 $g(x)=2\\ln\\frac{3}{3-x}$는 $(0,3)$에서 순증가함수이므로 $Y$의 치역은 $(0,\\infty)$입니다.`},
    {num:'Step 2', title:'cdf법으로 부등식 풀기',
     body:`$y>0$에 대하여 ①

$$F_Y(y)=P\\left(2\\ln\\frac{3}{3-X}\\le y\\right)=P\\left(\\ln\\frac{3}{3-X}\\le\\frac{y}{2}\\right)$$

$\\ln$은 증가함수이므로 지수를 취해도 부등호가 유지됩니다.

$$=P\\left(\\frac{3}{3-X}\\le e^{y/2}\\right)=P\\left(3\\le e^{y/2}(3-X)\\right)$$

$e^{y/2}>0$이므로 나누면

$$=P\\left(X\\le 3-3e^{-y/2}\\right)$$`},
    {num:'Step 3', title:'균등분포의 cdf 대입',
     body:`$X\\sim U(0,3)$이므로 $0\\le t\\le3$에서 $P(X\\le t)=\\frac{t}{3}$입니다. $t=3-3e^{-y/2}$는 $y>0$일 때 $[0,3)$에 들어갑니다.

$$F_Y(y)=\\frac{3-3e^{-y/2}}{3}=1-e^{-y/2}\\quad(y\\ge0),\\qquad F_Y(y)=0\\ (y<0)$$

미분하면

$$f_Y(y)=\\frac{1}{2}e^{-y/2}\\quad(y>0)$$

즉 $Y$는 평균 $2$인 지수분포를 따릅니다 ②.`},
    {num:'Step 4', title:'$P(|Y-2|>2)$ 계산',
     body:`$|Y-2|>2$는 $Y<0$ 또는 $Y>4$입니다. $Y>0$이므로 앞쪽 사건의 확률은 $0$입니다.

$$P(|Y-2|>2)=P(Y>4)=1-F_Y(4)=e^{-2}$$`}
  ],
  answer:'$F_Y(y)=1-e^{-y/2}\\ (y\\ge0)$, $f_Y(y)=\\frac12e^{-y/2}\\ (y>0)$, $P(|Y-2|>2)=e^{-2}$',
  footnotes:[
    {n:'①',text:'cdf법(분포함수법): 새 확률변수 $Y=g(X)$의 분포를 구할 때, $P(Y\\le y)$를 $X$에 대한 부등식으로 바꿔 원래 분포로 계산한 뒤 미분해 밀도를 얻는다. 변환 공식을 외우지 않아도 되고, $g$가 단조가 아닐 때도 쓸 수 있어 가장 안전한 방법이다.'},
    {n:'②',text:'이 문제는 역변환 표집(inverse transform sampling)의 예다. $U\\sim U(0,1)$일 때 $-\\theta\\ln(1-U)$가 평균 $\\theta$인 지수분포를 따른다는 사실을 $X/3=U$로 바꿔 쓴 것이다. 컴퓨터로 지수분포 난수를 만들 때 실제로 쓰는 방법이다.'}
  ]
},

// ───────────────────────────────────────
// 2021
// ───────────────────────────────────────
{
  id:'2021a3', year:2021, type:'전공A', cat:'normal', pts:2,
  title:'두 표본평균의 차의 분산과 표준화 상수 구하기',
  problem:`A 회사와 B 회사에서 생산하는 전기자동차용 배터리의 수명은 각각 정규분포 $N(2500,80^2)$, $N(2200,66^2)$을 따른다고 한다. A 회사의 제품에서 $100$개를 임의로 추출한 표본의 평균수명을 $\\overline{X}$, B 회사의 제품에서 $121$개를 임의로 추출한 표본의 평균수명을 $\\overline{Y}$라 할 때, $\\overline{X}-\\overline{Y}$의 분산 $\\operatorname{Var}(\\overline{X}-\\overline{Y})$는 $a$이고,

$$P(\\overline{X}-\\overline{Y}\\le320)=P(Z\\le b)$$

이다. 상수 $a$와 $b$의 값을 각각 구하시오. (단, 배터리 수명의 단위는 $100\\,\\text{km}$이고, $Z$는 표준정규분포를 따르는 확률변수이다.)`,
  steps:[
    {num:'Step 1', title:'각 표본평균의 분포',
     body:`$$\\operatorname{Var}(\\overline{X})=\\frac{80^2}{100}=\\frac{6400}{100}=64$$

$$\\operatorname{Var}(\\overline{Y})=\\frac{66^2}{121}=\\frac{4356}{121}=36$$

평균은 각각 $E[\\overline{X}]=2500$, $E[\\overline{Y}]=2200$입니다.`},
    {num:'Step 2', title:'차의 평균과 분산',
     body:`두 회사의 표본은 서로 독립이므로 ①

$$E[\\overline{X}-\\overline{Y}]=2500-2200=300$$

$$a=\\operatorname{Var}(\\overline{X}-\\overline{Y})=\\operatorname{Var}(\\overline{X})+\\operatorname{Var}(\\overline{Y})=64+36=100$$

빼는데도 분산은 더해진다는 점에 주의합니다. 계수 $-1$이 제곱되어 $+1$이 되기 때문입니다.

$$\\sigma=\\sqrt{100}=10$$`},
    {num:'Step 3', title:'표준화',
     body:`$\\overline{X}-\\overline{Y}\\sim N(300,\\,10^2)$이므로

$$P(\\overline{X}-\\overline{Y}\\le320)=P\\left(Z\\le\\frac{320-300}{10}\\right)=P(Z\\le2)$$

따라서 $b=2$입니다.`}
  ],
  answer:'$a=100$, $b=2$',
  footnotes:[
    {n:'①',text:'$\\operatorname{Var}(U-V)=\\operatorname{Var}(U)+(-1)^2\\operatorname{Var}(V)=\\operatorname{Var}(U)+\\operatorname{Var}(V)$ (독립일 때). 두 변수의 불확실성이 서로 상쇄되지 않고 누적되기 때문에, 차를 봐도 흩어짐은 커진다.'},
    {n:'②',text:'표본평균의 분산은 $\\sigma^2/n$이다. 표본을 많이 뽑을수록 표본평균이 모평균 주위로 촘촘히 모인다는 뜻이며, 표준편차 기준으로는 $\\sqrt{n}$에 반비례해 줄어든다.'}
  ]
},

{
  id:'2021b9', year:2021, type:'전공B', cat:'trans', pts:4,
  title:'균등분포 표본 3개의 중앙값의 분포',
  problem:`$X_1$, $X_2$, $X_3$을 균등분포(uniform distribution) $\\text{Unif}(0,1)$로부터의 확률표본(random sample)이라 하고, $Y$를 $X_1$, $X_2$, $X_3$의 중앙값(median)이라 하자. 이때 $Y$의 누적분포함수(cumulative distribution function)와 $Y$의 확률밀도함수(probability density function)를 풀이 과정과 함께 쓰시오.`,
  steps:[
    {num:'Step 1', title:'중앙값 사건을 개수 세기로 바꾸기',
     body:`$3$개의 값 중 중앙값이 $y$ 이하라는 것은, $y$ 이하인 값이 최소 $2$개라는 뜻입니다 ①.

$$Y\\le y\\iff \\#\\{i:X_i\\le y\\}\\ge2$$

$N=\\#\\{i:X_i\\le y\\}$라 하면, 각 $X_i$가 독립적으로 확률 $p=P(X_i\\le y)=y$로 "$y$ 이하"가 되므로

$$N\\sim B(3,\\,y),\\qquad 0\\le y\\le1$$`},
    {num:'Step 2', title:'이항확률로 누적분포함수 계산',
     body:`$$F_Y(y)=P(N\\ge2)=P(N=2)+P(N=3)$$

$$=\\binom{3}{2}y^2(1-y)+\\binom{3}{3}y^3=3y^2-3y^3+y^3$$

$$F_Y(y)=3y^2-2y^3,\\qquad 0\\le y\\le1$$

($y<0$이면 $0$, $y>1$이면 $1$)

검산: $F_Y(0)=0$, $F_Y(1)=3-2=1$, $F_Y\\left(\\frac12\\right)=\\frac34-\\frac14=\\frac12$ 로 대칭성까지 맞습니다.`},
    {num:'Step 3', title:'미분해서 확률밀도함수 구하기',
     body:`$$f_Y(y)=\\frac{d}{dy}(3y^2-2y^3)=6y-6y^2=6y(1-y),\\qquad 0<y<1$$

이는 베타분포 $\\text{Beta}(2,2)$입니다 ②.

검산: $\\int_0^1 6y(1-y)dy=6\\left(\\frac12-\\frac13\\right)=1$ 로 정상이고, $E[Y]=\\frac12$로 대칭입니다.`}
  ],
  answer:'$F_Y(y)=3y^2-2y^3\\ (0\\le y\\le1)$, $f_Y(y)=6y(1-y)\\ (0<y<1)$',
  footnotes:[
    {n:'①',text:'순서통계량의 표준 기법: $k$번째로 작은 값 $X_{(k)}$에 대해 $\\{X_{(k)}\\le y\\}$는 $\\{y$ 이하인 관측값이 $k$개 이상$\\}$과 같은 사건이다. 이렇게 하면 이항분포 계산으로 바뀐다. 여기서는 $n=3$이므로 중앙값이 $X_{(2)}$이다.'},
    {n:'②',text:'$\\text{Unif}(0,1)$에서 크기 $n$인 표본의 $k$번째 순서통계량은 베타분포 $\\text{Beta}(k,\\,n-k+1)$을 따른다. 여기서는 $k=2$, $n=3$이므로 $\\text{Beta}(2,2)$이고 밀도는 $\\frac{1}{B(2,2)}y(1-y)=6y(1-y)$이다.'},
    {n:'③',text:'중앙값의 밀도가 가운데에서 높고 양 끝에서 0인 것은 직관과 맞는다. 3개 중 가운데 값이 0이나 1 근처에 오려면 나머지 두 값이 모두 한쪽으로 몰려야 하므로 그럴 확률이 작다.'}
  ]
},

// ───────────────────────────────────────
// 2022
// ───────────────────────────────────────
{
  id:'2022a4', year:2022, type:'전공A', cat:'joint', pts:2,
  title:'결합확률질량함수에서 미지수 $p$, $q$와 조건부확률 구하기',
  problem:`두 확률변수 $X$와 $Y$의 결합확률질량함수(joint probability mass function)가 아래 표와 같다. $X$의 기댓값이 $E(X)=\\dfrac{11}{12}$일 때, $p\\times\\dfrac{1}{q}$의 값과 조건부확률 $P(X+Y\\le4\\,|\\,Y-X=2)$의 값을 순서대로 쓰시오.`,
  diagram:`<table style="border-collapse:collapse;font-size:13px;color:var(--t1)">
    <tr>
      <th style="border:1px solid var(--b2);padding:6px 12px;background:var(--s2);font-weight:600;color:var(--t2)">X \\ Y</th>
      <th style="border:1px solid var(--b2);padding:6px 14px;background:var(--s2);font-weight:600">1</th>
      <th style="border:1px solid var(--b2);padding:6px 14px;background:var(--s2);font-weight:600">2</th>
      <th style="border:1px solid var(--b2);padding:6px 14px;background:var(--s2);font-weight:600">3</th>
      <th style="border:1px solid var(--b2);padding:6px 14px;background:var(--s2);font-weight:600">4</th>
    </tr>
    <tr>
      <td style="border:1px solid var(--b2);padding:6px 12px;background:var(--s2);font-weight:600">0</td>
      <td style="border:1px solid var(--b2);padding:6px 14px;text-align:center">p</td>
      <td style="border:1px solid var(--b2);padding:6px 14px;text-align:center;background:rgba(181,115,12,0.15)">1/24</td>
      <td style="border:1px solid var(--b2);padding:6px 14px;text-align:center">1/12</td>
      <td style="border:1px solid var(--b2);padding:6px 14px;text-align:center">1/8</td>
    </tr>
    <tr>
      <td style="border:1px solid var(--b2);padding:6px 12px;background:var(--s2);font-weight:600">1</td>
      <td style="border:1px solid var(--b2);padding:6px 14px;text-align:center">0</td>
      <td style="border:1px solid var(--b2);padding:6px 14px;text-align:center">1/12</td>
      <td style="border:1px solid var(--b2);padding:6px 14px;text-align:center;background:rgba(181,115,12,0.15)">1/8</td>
      <td style="border:1px solid var(--b2);padding:6px 14px;text-align:center">1/24</td>
    </tr>
    <tr>
      <td style="border:1px solid var(--b2);padding:6px 12px;background:var(--s2);font-weight:600">2</td>
      <td style="border:1px solid var(--b2);padding:6px 14px;text-align:center">1/12</td>
      <td style="border:1px solid var(--b2);padding:6px 14px;text-align:center">1/8</td>
      <td style="border:1px solid var(--b2);padding:6px 14px;text-align:center">1/12</td>
      <td style="border:1px solid var(--b2);padding:6px 14px;text-align:center;background:rgba(181,115,12,0.15)">q</td>
    </tr>
  </table>`,
  steps:[
    {num:'Step 1', title:'전체 합이 1이라는 조건',
     body:`분모를 $24$로 통일하면 $\\frac{1}{24}=\\frac{1}{24}$, $\\frac{1}{12}=\\frac{2}{24}$, $\\frac{1}{8}=\\frac{3}{24}$입니다.

행별 합을 $24$분의 몇인지로 계산하면

$X=0$: $p+\\frac{1+2+3}{24}=p+\\frac{6}{24}$

$X=1$: $\\frac{0+2+3+1}{24}=\\frac{6}{24}$

$X=2$: $\\frac{2+3+2}{24}+q=\\frac{7}{24}+q$

$$p+q+\\frac{19}{24}=1\\ \\Rightarrow\\ p+q=\\frac{5}{24}$$`},
    {num:'Step 2', title:'기댓값 조건으로 $p$, $q$ 확정',
     body:`$$E(X)=0\\cdot P(X=0)+1\\cdot\\frac{6}{24}+2\\cdot\\left(\\frac{7}{24}+q\\right)=\\frac{20}{24}+2q$$

$E(X)=\\frac{11}{12}=\\frac{22}{24}$이므로

$$2q=\\frac{2}{24}\\ \\Rightarrow\\ q=\\frac{1}{24},\\qquad p=\\frac{5}{24}-\\frac{1}{24}=\\frac{4}{24}=\\frac{1}{6}$$

$$p\\times\\frac{1}{q}=\\frac{1}{6}\\times24=4$$`},
    {num:'Step 3', title:'조건부확률의 분모: $Y-X=2$인 칸 찾기',
     body:`$Y-X=2$인 칸은 $(X,Y)=(0,2),\\ (1,3),\\ (2,4)$ 세 개입니다 ①.

$$P(Y-X=2)=\\frac{1}{24}+\\frac{1}{8}+q=\\frac{1}{24}+\\frac{3}{24}+\\frac{1}{24}=\\frac{5}{24}$$`},
    {num:'Step 4', title:'분자를 세고 계산',
     body:`위 세 칸 중 $X+Y\\le4$인 것을 고릅니다.

$(0,2)$: 합 $2$ (만족), $(1,3)$: 합 $4$ (만족), $(2,4)$: 합 $6$ (불만족)

$$P(X+Y\\le4,\\ Y-X=2)=\\frac{1}{24}+\\frac{3}{24}=\\frac{4}{24}$$

$$P(X+Y\\le4\\,|\\,Y-X=2)=\\frac{4/24}{5/24}=\\frac{4}{5}$$`}
  ],
  answer:'$p\\times\\dfrac{1}{q}=4$, $P(X+Y\\le4\\,|\\,Y-X=2)=\\dfrac{4}{5}$',
  footnotes:[
    {n:'①',text:'표에서 $Y-X=k$인 칸들은 대각선을 이룬다. $X$가 1 늘 때 $Y$도 1 늘어야 하므로 오른쪽 아래 방향의 대각선을 따라가면 된다. 조건부확률 문제에서는 이렇게 조건에 해당하는 칸을 먼저 표시하고, 그 안에서 다시 세는 순서로 접근하면 실수가 줄어든다.'},
    {n:'②',text:'미지수가 2개($p$, $q$)이므로 조건도 2개가 필요하다. 하나는 "확률의 총합은 1", 다른 하나는 문제에서 준 기댓값 조건이다.'}
  ]
},

{
  id:'2022b7', year:2022, type:'전공B', cat:'normal', pts:4,
  title:'적률생성함수로 분산 구하고 중심극한정리 적용하기',
  problem:`확률변수 $X$의 적률생성함수(moment generating function) $M_X(t)$가

$$M_X(t)=\\frac{1}{(1-2t)^4}\\quad\\left(t<\\frac{1}{2}\\right)$$

이다. 확률변수 $X$의 분산을 풀이 과정과 함께 쓰시오. 또한, $X_1,X_2,\\cdots,X_{100}$이 적률생성함수가 $M_X(t)$인 분포로부터 뽑힌 확률표본일 때, 이들의 평균 $\\overline{X}=\\frac{1}{100}\\sum_{i=1}^{100}X_i$에 대하여 $\\overline{X}$가 $9$ 이상이 될 확률은 중심극한정리(central limit theorem)를 적용하면 근사적으로 $P(Z\\ge c)$이다. 상수 $c$의 값을 풀이 과정과 함께 쓰시오. (단, $Z$는 표준정규분포를 따르는 확률변수이다.)`,
  steps:[
    {num:'Step 1', title:'적률생성함수를 두 번 미분',
     body:`적률생성함수의 $k$계 도함수를 $t=0$에서 평가하면 $k$차 적률이 나옵니다 ①.

$$M_X(t)=(1-2t)^{-4}$$

$$M_X'(t)=-4(1-2t)^{-5}\\cdot(-2)=8(1-2t)^{-5}$$

$$M_X''(t)=8\\cdot(-5)(1-2t)^{-6}\\cdot(-2)=80(1-2t)^{-6}$$`},
    {num:'Step 2', title:'평균과 분산',
     body:`$$E[X]=M_X'(0)=8,\\qquad E[X^2]=M_X''(0)=80$$

$$\\operatorname{Var}(X)=E[X^2]-\\big(E[X]\\big)^2=80-64=16$$

참고로 $(1-2t)^{-4}$는 형상 $4$, 척도 $2$인 감마분포(=자유도 $8$인 카이제곱분포)의 적률생성함수이고, 이때 평균 $4\\times2=8$, 분산 $4\\times2^2=16$으로 일치합니다 ②.`},
    {num:'Step 3', title:'중심극한정리 적용',
     body:`$n=100$이 충분히 크므로 ③

$$\\overline{X}\\ \\approx\\ N\\left(8,\\ \\frac{16}{100}\\right),\\qquad \\sigma_{\\overline{X}}=\\frac{4}{10}=0.4$$

$$P(\\overline{X}\\ge9)\\approx P\\left(Z\\ge\\frac{9-8}{0.4}\\right)=P(Z\\ge2.5)$$

따라서 $c=2.5$입니다.`}
  ],
  answer:'$\\operatorname{Var}(X)=16$, $c=2.5$',
  footnotes:[
    {n:'①',text:'적률생성함수 $M_X(t)=E[e^{tX}]$를 $t$에 대해 $k$번 미분하고 $t=0$을 대입하면 $E[X^k]$가 나온다. $e^{tX}$를 급수로 펼치면 $1+tX+\\frac{t^2X^2}{2!}+\\cdots$이므로, $t^k$의 계수에 $E[X^k]/k!$이 들어 있기 때문이다.'},
    {n:'②',text:'적률생성함수는 분포를 유일하게 결정한다(존재하는 구간이 있을 때). 그래서 $M_X(t)=(1-\\beta t)^{-\\alpha}$ 꼴을 보면 감마분포 $\\Gamma(\\alpha,\\beta)$임을 바로 알 수 있고, 평균 $\\alpha\\beta$, 분산 $\\alpha\\beta^2$을 미분 없이 쓸 수 있다.'},
    {n:'③',text:'중심극한정리: 평균 $\\mu$, 분산 $\\sigma^2$인 임의의 분포에서 크기 $n$인 확률표본을 뽑으면, $n$이 커질수록 $\\overline{X}$의 분포가 $N(\\mu,\\sigma^2/n)$에 가까워진다. 원래 분포가 감마분포처럼 비대칭이어도 표본평균은 정규분포에 가까워진다.'}
  ]
},

// ───────────────────────────────────────
// 2023
// ───────────────────────────────────────
{
  id:'2023a4', year:2023, type:'전공A', cat:'normal', pts:2,
  title:'두 모비율의 평균에 대한 신뢰구간에서 $a$, $b$ 구하기',
  problem:`어떤 정책에 대한 A, B 두 도시 시민의 의견을 알아보기 위하여 각 도시에서 확률표본을 선택하여 이 정책에 대한 찬성 여부를 알아본 결과는 아래 표와 같다. A, B 두 도시의 이 정책에 대한 찬성 비율을 각각 $p_1$, $p_2$라 할 때, 찬성 비율의 평균 $\\dfrac{p_1+p_2}{2}$에 대한 $90\\%$ 신뢰구간은 $(a-1.645\\times b,\\ a+1.645\\times b)$이다. $a$, $b$의 값을 각각 구하시오. (단, 확률변수 $Z$가 $N(0,1)$을 따를 때, $P(0\\le Z\\le1.645)=0.45$로 계산한다.)`,
  diagram:`<table style="border-collapse:collapse;font-size:13px;color:var(--t1)">
    <tr>
      <th style="border:1px solid var(--b2);padding:6px 14px;background:var(--s2)"></th>
      <th style="border:1px solid var(--b2);padding:6px 20px;background:var(--s2);font-weight:600">A 도시</th>
      <th style="border:1px solid var(--b2);padding:6px 20px;background:var(--s2);font-weight:600">B 도시</th>
    </tr>
    <tr>
      <td style="border:1px solid var(--b2);padding:6px 14px;background:var(--s2);font-weight:600">표본의 수</td>
      <td style="border:1px solid var(--b2);padding:6px 20px;text-align:center">350명</td>
      <td style="border:1px solid var(--b2);padding:6px 20px;text-align:center">160명</td>
    </tr>
    <tr>
      <td style="border:1px solid var(--b2);padding:6px 14px;background:var(--s2);font-weight:600">정책에 찬성한 비율</td>
      <td style="border:1px solid var(--b2);padding:6px 20px;text-align:center">0.7</td>
      <td style="border:1px solid var(--b2);padding:6px 20px;text-align:center">0.8</td>
    </tr>
  </table>`,
  steps:[
    {num:'Step 1', title:'점추정값 $a$ 구하기',
     body:`표본비율 $\\hat{p}_1=0.7$, $\\hat{p}_2=0.8$이 각각 $p_1$, $p_2$의 추정값이므로, $\\frac{p_1+p_2}{2}$의 점추정값은

$$a=\\frac{\\hat{p}_1+\\hat{p}_2}{2}=\\frac{0.7+0.8}{2}=0.75$$

신뢰구간의 중심이 곧 점추정값입니다.`},
    {num:'Step 2', title:'표본비율의 분산',
     body:`표본비율의 분산은 $\\dfrac{\\hat{p}(1-\\hat{p})}{n}$입니다 ①.

$$\\operatorname{Var}(\\hat{p}_1)=\\frac{0.7\\times0.3}{350}=\\frac{0.21}{350}=0.0006$$

$$\\operatorname{Var}(\\hat{p}_2)=\\frac{0.8\\times0.2}{160}=\\frac{0.16}{160}=0.001$$`},
    {num:'Step 3', title:'평균의 표준오차 $b$ 구하기',
     body:`두 도시의 표본은 독립이므로

$$\\operatorname{Var}\\left(\\frac{\\hat{p}_1+\\hat{p}_2}{2}\\right)=\\frac{1}{4}\\big(0.0006+0.001\\big)=\\frac{0.0016}{4}=0.0004$$

$$b=\\sqrt{0.0004}=0.02$$

따라서 $90\\%$ 신뢰구간은 $(0.75-1.645\\times0.02,\\ 0.75+1.645\\times0.02)$, 즉 $(0.7171,\\ 0.7829)$입니다 ②.`}
  ],
  answer:'$a=0.75$, $b=0.02$',
  footnotes:[
    {n:'①',text:'$n$번의 독립 시행에서 성공 횟수는 $B(n,p)$를 따르고 분산이 $np(1-p)$이므로, 이를 $n$으로 나눈 표본비율 $\\hat{p}$의 분산은 $p(1-p)/n$이다. 실제 계산에서는 모르는 $p$ 대신 관측된 $\\hat{p}$을 대입한다.'},
    {n:'②',text:'$P(0\\le Z\\le1.645)=0.45$이므로 $P(-1.645\\le Z\\le1.645)=0.9$이다. 즉 $1.645$가 신뢰수준 $90\\%$에 대응하는 임계값이고, 신뢰수준을 $95\\%$로 올리면 $1.96$이 된다.'}
  ]
},

{
  id:'2023b8', year:2023, type:'전공B', cat:'trans', pts:4,
  title:'$Z=Y-X$의 누적분포함수와 $P\\left(g(Z)>\\frac12\\right)$',
  problem:`두 확률변수 $X$와 $Y$의 결합확률밀도함수(joint probability density function) $f(x,y)$를

$$f(x,y)=\\begin{cases}2, & 0<x<2-y<1 \\\\ 0, & \\text{그 외의 경우}\\end{cases}$$

라 하고 확률변수 $Z$를 $Z=Y-X$라 하자. $Z$의 누적분포함수(cumulative distribution function) $G(z)$를 풀이 과정과 함께 쓰시오. 또한 $g(z)$를 $Z$의 확률밀도함수(probability density function)라 할 때, $P\\left(g(Z)>\\dfrac{1}{2}\\right)$의 값을 풀이 과정과 함께 쓰시오.`,
  diagram:`<svg viewBox="0 0 300 250" xmlns="http://www.w3.org/2000/svg" style="font-family:'Noto Sans KR',sans-serif">
    <text x="150" y="16" font-size="11" fill="var(--t2)" text-anchor="middle">정의역: 0 &lt; x &lt; 2−y &lt; 1  ⟺  1 &lt; y &lt; 2, 0 &lt; x &lt; 2−y</text>
    <polygon points="50,130 130,130 50,50" fill="var(--acc-bg)" stroke="var(--acc)" stroke-width="1.8"/>
    <line x1="40" y1="210" x2="260" y2="210" stroke="var(--t2)" stroke-width="1.2"/>
    <line x1="50" y1="225" x2="50" y2="35" stroke="var(--t2)" stroke-width="1.2"/>
    <line x1="50" y1="130" x2="255" y2="130" stroke="var(--t3)" stroke-width="1" stroke-dasharray="3 3"/>
    <line x1="50" y1="50" x2="255" y2="50" stroke="var(--t3)" stroke-width="1" stroke-dasharray="3 3"/>
    <line x1="130" y1="210" x2="130" y2="130" stroke="var(--t3)" stroke-width="1" stroke-dasharray="3 3"/>
    <text x="45" y="134" font-size="10" fill="var(--t3)" text-anchor="end">1</text>
    <text x="45" y="54" font-size="10" fill="var(--t3)" text-anchor="end">2</text>
    <text x="45" y="222" font-size="10" fill="var(--t3)" text-anchor="end">O</text>
    <text x="130" y="224" font-size="10" fill="var(--t3)" text-anchor="middle">1</text>
    <text x="210" y="224" font-size="10" fill="var(--t3)" text-anchor="middle">2</text>
    <text x="258" y="226" font-size="11" fill="var(--t2)">x</text>
    <text x="42" y="40" font-size="11" fill="var(--t2)">y</text>
    <text x="72" y="115" font-size="11" fill="var(--acc)">밀도 2</text>
    <text x="140" y="72" font-size="10" fill="var(--t3)">x + y = 2</text>
    <text x="150" y="243" font-size="10" fill="var(--t3)" text-anchor="middle">넓이 1/2, 밀도 2 이므로 전체 확률 1</text>
  </svg>`,
  steps:[
    {num:'Step 1', title:'정의역 정리',
     body:`$0<x<2-y<1$을 풀어 쓰면

$0<2-y<1$에서 $1<y<2$, 그리고 $0<x<2-y$입니다.

따라서 영역은 세 점 $(0,1)$, $(1,1)$, $(0,2)$를 꼭짓점으로 하는 삼각형입니다. 넓이가 $\\frac12$이고 밀도가 $2$이므로 전체 확률은 $1$로 정상입니다.`},
    {num:'Step 2', title:'$Z$의 범위 확인',
     body:`$Z=Y-X$이고 영역 안에서 $y$는 최대 $2$, $x$는 최소 $0$이므로 $Z<2$입니다.

또 $x<2-y$에서 $y-x>y-(2-y)=2y-2>0$ ($y>1$이므로)이니 $Z>0$입니다.

$$0<Z<2$$`},
    {num:'Step 3', title:'$0<z\\le1$일 때 $G(z)$',
     body:`$G(z)=P(Y-X\\le z)$는 직선 $y-x=z$의 아래쪽에 놓인 부분의 확률입니다.

조건 $y-x\\le z$는 $x\\ge y-z$와 같으므로, $y$를 고정하면 $x$의 범위는

$$y-z\\le x<2-y$$

입니다. $0<z\\le1$이고 $y>1$이므로 $y-z>0$이라 왼쪽 끝은 항상 $y-z$입니다. 이 구간이 비지 않으려면 $y-z<2-y$, 즉 $y<\\frac{2+z}{2}$여야 합니다.

$$G(z)=\\int_1^{(2+z)/2}2\\big((2-y)-(y-z)\\big)dy=\\int_1^{(2+z)/2}2(2+z-2y)\\,dy$$

$$=2\\Big[(2+z)y-y^2\\Big]_1^{(2+z)/2}=\\frac{(2+z)^2}{2}-2(1+z)$$

$$=\\frac{4+4z+z^2-4-4z}{2}=\\frac{z^2}{2}$$`},
    {num:'Step 4', title:'$1<z<2$일 때 $G(z)$',
     body:`이 구간에서는 여사건 $P(Z>z)$를 계산하는 편이 간단합니다. 조건은 $x<y-z$이고, 원래 정의역이 $0<x<2-y$이므로

$$0<x<\\min\\{2-y,\\ y-z\\}$$

$y-z>0$이려면 $y>z$이고, 두 값의 대소는 $y=\\frac{2+z}{2}$에서 바뀝니다.

$$P(Z>z)=2\\int_z^{(2+z)/2}(y-z)\\,dy+2\\int_{(2+z)/2}^{2}(2-y)\\,dy$$

$$=2\\cdot\\frac{1}{2}\\left(\\frac{2-z}{2}\\right)^2+2\\cdot\\frac{1}{2}\\left(\\frac{2-z}{2}\\right)^2=\\frac{(2-z)^2}{2}$$

$$G(z)=1-\\frac{(2-z)^2}{2}$$

연속성 확인: $z=1$에서 Step 3의 $\\frac{z^2}{2}=\\frac12$와 여기서의 $1-\\frac12=\\frac12$가 일치하고, $z=2$에서 $G(2)=1$입니다.`},
    {num:'Step 5', title:'$g(z)$ 구하기',
     body:`$$G(z)=\\begin{cases}0,& z\\le0\\\\ \\dfrac{z^2}{2},& 0<z\\le1\\\\ 1-\\dfrac{(2-z)^2}{2},& 1<z<2\\\\ 1,& z\\ge2\\end{cases}$$

미분하면

$$g(z)=\\begin{cases}z,& 0<z\\le1\\\\ 2-z,& 1<z<2\\\\ 0,& \\text{그 외}\\end{cases}$$

밑변 $2$, 높이 $1$인 삼각분포이고 넓이가 $1$로 정상입니다.`},
    {num:'Step 6', title:'$P\\left(g(Z)>\\frac12\\right)$ 계산',
     body:`$g(z)>\\frac12$가 되는 $z$의 범위를 먼저 찾습니다 ①.

$0<z\\le1$ 구간: $z>\\frac12$

$1<z<2$ 구간: $2-z>\\frac12\\iff z<\\frac32$

합치면 $\\frac12<z<\\frac32$입니다.

$$P\\left(\\frac12<Z<\\frac32\\right)=G\\left(\\frac32\\right)-G\\left(\\frac12\\right)=\\left(1-\\frac{(1/2)^2}{2}\\right)-\\frac{(1/2)^2}{2}$$

$$=\\left(1-\\frac18\\right)-\\frac18=\\frac78-\\frac18=\\frac34$$`}
  ],
  answer:'$G(z)=\\dfrac{z^2}{2}\\ (0<z\\le1)$, $1-\\dfrac{(2-z)^2}{2}\\ (1<z<2)$; $P\\left(g(Z)>\\frac12\\right)=\\dfrac{3}{4}$',
  footnotes:[
    {n:'①',text:'$g(Z)$는 확률변수 $Z$에 함수 $g$를 다시 적용한 것이라, 밀도함수를 확률변수처럼 다루는 다소 낯선 표현이다. 하지만 계산은 단순하다. 먼저 부등식 $g(z)>\\frac12$를 만족하는 $z$의 집합 $A$를 구하고, 그 다음 $P(Z\\in A)$를 계산하면 된다.'},
    {n:'②',text:'삼각형 영역 위의 균등분포에서 $Y-X$를 만들면 다시 삼각분포가 나온다. 결합밀도가 상수이므로 확률 계산이 곧 넓이 계산이 되고, 직선 $y-x=z$로 자를 때 잘린 조각의 넓이가 $z$의 이차식이 되기 때문이다.'},
    {n:'③',text:'검산 요령: 구간을 나누어 구한 누적분포함수는 경계점에서 값이 이어져야 하고($z=1$에서 양쪽이 $\\frac12$), 오른쪽 끝에서 $1$이 되어야 한다. 이 두 가지만 확인해도 계수 실수를 대부분 잡을 수 있다.'}
  ]
},

// ───────────────────────────────────────
// 2024
// ───────────────────────────────────────
{
  id:'2024a11', year:2024, type:'전공A', cat:'trans', pts:4,
  title:'확률적분변환 $F(X)$의 분포와 $P(-2<\\ln F(X)<1)$',
  problem:`연속확률변수 $X$의 누적분포함수(cumulative distribution function) $F(x)$가 연속인 순증가함수(strictly increasing function)라 하자. 확률변수 $F(X)$의 확률밀도함수(probability density function)를 풀이 과정과 함께 쓰시오. 또한, $P(-2<\\ln F(X)<1)$의 값을 풀이 과정과 함께 쓰시오.`,
  steps:[
    {num:'Step 1', title:'$U=F(X)$의 누적분포함수 구하기',
     body:`$F$가 연속인 순증가함수이므로 역함수 $F^{-1}$가 존재하고, 역함수도 순증가입니다.

$U=F(X)$라 하면 $F$의 치역이 $(0,1)$이므로 $0<U<1$입니다. $0<u<1$에 대하여

$$P(U\\le u)=P\\big(F(X)\\le u\\big)=P\\big(X\\le F^{-1}(u)\\big)=F\\big(F^{-1}(u)\\big)=u$$

부등호 방향이 그대로인 것은 $F^{-1}$가 증가함수이기 때문입니다.`},
    {num:'Step 2', title:'균등분포임을 확인',
     body:`$$F_U(u)=u\\quad(0\\le u\\le1)$$

이는 $\\text{Unif}(0,1)$의 누적분포함수입니다. 미분하면

$$f_U(u)=1\\quad(0<u<1),\\qquad \\text{그 외 } 0$$

이 결과를 확률적분변환 ①이라 부릅니다. 원래 $X$가 어떤 연속분포였든 상관없이 $F(X)$는 항상 $(0,1)$ 위의 균등분포가 됩니다.`},
    {num:'Step 3', title:'부등식을 $U$에 대한 조건으로 바꾸기',
     body:`$$-2<\\ln U<1\\iff e^{-2}<U<e$$

그런데 $U<1<e$가 항상 성립하므로 오른쪽 조건은 자동으로 만족됩니다 ②. 즉 실질적인 조건은 $U>e^{-2}$뿐입니다.

$$P(-2<\\ln U<1)=P(e^{-2}<U<1)$$`},
    {num:'Step 4', title:'균등분포에서 확률 계산',
     body:`$U\\sim\\text{Unif}(0,1)$에서 확률은 구간의 길이와 같으므로

$$P(e^{-2}<U<1)=1-e^{-2}\\approx0.8647$$`}
  ],
  answer:'$f_{F(X)}(u)=1\\ (0<u<1)$ (즉 $F(X)\\sim\\text{Unif}(0,1)$), $P(-2<\\ln F(X)<1)=1-e^{-2}$',
  footnotes:[
    {n:'①',text:'확률적분변환(probability integral transform): $X$가 연속확률변수이고 $F$가 그 누적분포함수이면 $F(X)\\sim\\text{Unif}(0,1)$이다. 거꾸로 $U\\sim\\text{Unif}(0,1)$일 때 $F^{-1}(U)$는 분포 $F$를 따르는데, 이것이 컴퓨터로 원하는 분포의 난수를 만드는 역변환 표집의 원리다.'},
    {n:'②',text:'$e\\approx2.718>1$이고 $U<1$이므로 $\\ln U<0<1$이 늘 성립한다. 이런 "자동으로 만족되는 조건"을 놓치면 $P(e^{-2}<U<e)$를 그대로 $e-e^{-2}$로 계산해 1보다 큰 값이 나오는 실수를 하게 된다. 확률이 1을 넘으면 범위 확인을 빠뜨린 것이다.'}
  ]
},

{
  id:'2024b2', year:2024, type:'전공B', cat:'normal', pts:2,
  title:'포아송 표본에서 $E\\left[\\sum(X_i-\\overline{X})^2\\right]$로 $n$ 구하기',
  problem:`포아송분포(Poisson distribution) $\\text{Poisson}(5)$로부터의 확률표본(random sample) $X_1,X_2,\\cdots,X_n$에 대하여 $\\overline{X}$를 $\\overline{X}=\\frac{1}{n}\\sum_{i=1}^{n}X_i$라 하자. $E\\left(\\sum_{i=1}^{n}(X_i-\\overline{X})^2\\right)=140$일 때, $n$의 값을 구하시오.

(참고: 확률변수 $X$가 $\\text{Poisson}(\\lambda)$를 따르면 $P(X=x)=\\dfrac{\\lambda^xe^{-\\lambda}}{x!}\\ (x=0,1,2,\\cdots)$이다.)`,
  steps:[
    {num:'Step 1', title:'포아송분포의 모분산',
     body:`포아송분포는 평균과 분산이 모두 $\\lambda$입니다 ①.

$$\\mu=E[X_i]=5,\\qquad \\sigma^2=\\operatorname{Var}(X_i)=5$$`},
    {num:'Step 2', title:'표본분산의 불편성 이용',
     body:`표본분산 $S^2=\\dfrac{1}{n-1}\\sum(X_i-\\overline{X})^2$은 모분산의 불편추정량 ②이므로 $E[S^2]=\\sigma^2$입니다. 따라서

$$E\\left[\\sum_{i=1}^{n}(X_i-\\overline{X})^2\\right]=(n-1)\\sigma^2$$

직접 확인해도 됩니다. $\\sum(X_i-\\overline{X})^2=\\sum X_i^2-n\\overline{X}^2$이고

$$E\\left[\\sum X_i^2\\right]=n(\\sigma^2+\\mu^2),\\qquad E\\left[n\\overline{X}^2\\right]=n\\left(\\frac{\\sigma^2}{n}+\\mu^2\\right)=\\sigma^2+n\\mu^2$$

빼면 $n\\sigma^2-\\sigma^2=(n-1)\\sigma^2$입니다.`},
    {num:'Step 3', title:'$n$ 구하기',
     body:`$$(n-1)\\times5=140\\ \\Rightarrow\\ n-1=28\\ \\Rightarrow\\ n=29$$`}
  ],
  answer:'$n=29$',
  footnotes:[
    {n:'①',text:'포아송분포 $\\text{Poisson}(\\lambda)$는 평균도 $\\lambda$, 분산도 $\\lambda$이다. 이는 적률생성함수 $M(t)=e^{\\lambda(e^t-1)}$를 두 번 미분해 확인할 수 있으며, 단위 시간당 드물게 일어나는 사건의 횟수를 세는 분포의 특징이다.'},
    {n:'②',text:'제곱합을 $n$이 아니라 $n-1$로 나누는 이유가 여기 있다. 편차를 모평균 $\\mu$가 아닌 표본평균 $\\overline{X}$에서 재기 때문에 제곱합이 체계적으로 조금 작아지고, 그 손실이 정확히 $\\sigma^2$만큼이라서 $(n-1)\\sigma^2$이 된다. $n-1$을 자유도라 부른다.'}
  ]
},

// ───────────────────────────────────────
// 2025
// ───────────────────────────────────────
{
  id:'2025a4', year:2025, type:'전공A', cat:'normal', pts:2,
  title:'부호가 교대하는 정규확률변수 합의 분산과 $a$ 구하기',
  problem:`서로 독립인 확률변수 $X_1,X_2,\\cdots,X_9$가 모두 표준정규분포 $N(0,1)$을 따른다. 확률변수 $Y$를 $Y=\\sum_{i=1}^{9}(-1)^{i+1}X_i$라고 하면 $P(Y\\ge-7)=P(X_1\\le a)$를 만족시키는 실수 $a$가 존재한다. 이때, $Y$의 분산 $V(Y)$와 $a$의 값을 순서대로 구하시오.`,
  steps:[
    {num:'Step 1', title:'$Y$의 평균과 분산',
     body:`$Y=X_1-X_2+X_3-\\cdots+X_9$입니다. 각 항의 계수는 $\\pm1$입니다.

$$E[Y]=\\sum_{i=1}^{9}(-1)^{i+1}\\cdot0=0$$

분산에서는 계수가 제곱되어 $(\\pm1)^2=1$이 되므로 부호가 사라집니다 ①.

$$V(Y)=\\sum_{i=1}^{9}\\big((-1)^{i+1}\\big)^2\\operatorname{Var}(X_i)=9\\times1=9$$`},
    {num:'Step 2', title:'표준화',
     body:`독립인 정규확률변수의 선형결합이므로 $Y\\sim N(0,\\,3^2)$입니다.

$$P(Y\\ge-7)=P\\left(Z\\ge\\frac{-7-0}{3}\\right)=P\\left(Z\\ge-\\frac{7}{3}\\right)$$`},
    {num:'Step 3', title:'표준정규분포의 대칭성 이용',
     body:`$X_1\\sim N(0,1)$이므로 $P(X_1\\le a)=P(Z\\le a)$입니다.

표준정규분포는 $0$에 대해 대칭이므로 ②

$$P\\left(Z\\ge-\\frac73\\right)=P\\left(Z\\le\\frac73\\right)$$

따라서 $a=\\dfrac{7}{3}$입니다.`}
  ],
  answer:'$V(Y)=9$, $a=\\dfrac{7}{3}$',
  footnotes:[
    {n:'①',text:'독립인 확률변수들에 대해 $\\operatorname{Var}\\left(\\sum c_iX_i\\right)=\\sum c_i^2\\operatorname{Var}(X_i)$이다. 계수가 제곱되므로 부호는 영향을 주지 않는다. 빼든 더하든 불확실성은 쌓이기만 한다고 기억하면 된다.'},
    {n:'②',text:'표준정규분포의 대칭성 $P(Z\\ge-c)=P(Z\\le c)$. 밀도함수 $\\varphi(z)=\\frac{1}{\\sqrt{2\\pi}}e^{-z^2/2}$가 우함수라서 그래프가 $y$축에 대해 좌우대칭이기 때문이다.'}
  ]
},

{
  id:'2025b6', year:2025, type:'전공B', cat:'joint', pts:4,
  title:'결합밀도의 인수분해로 독립성 판정하고 조건부확률 구하기',
  problem:`두 확률변수 $X$와 $Y$의 결합확률밀도함수(joint probability density function)가

$$f(x,y)=\\begin{cases}\\dfrac{1}{\\sqrt{2\\pi}}e^{-\\frac12(x+y^2)}, & x>0,\\ y>0 \\\\ 0, & \\text{그 외의 경우}\\end{cases}$$

일 때, 확률변수 $X$와 $Y$가 서로 독립인지를 판별하고 그 이유를 쓰시오. 또한 조건부확률 $P(X\\le2\\,|\\,Y\\le2)$의 값을 풀이 과정과 함께 쓰시오.

(참고: $\\dfrac{1}{\\sqrt{2\\pi}}\\displaystyle\\int_{-\\infty}^{\\infty}e^{-t^2/2}dt=1$)`,
  steps:[
    {num:'Step 1', title:'지수부를 분리하기',
     body:`지수법칙으로 $x$만의 함수와 $y$만의 함수의 곱으로 쪼갭니다.

$$f(x,y)=\\frac{1}{\\sqrt{2\\pi}}e^{-x/2}\\cdot e^{-y^2/2}\\qquad(x>0,\\ y>0)$$

정의역도 $\\{x>0\\}\\times\\{y>0\\}$라는 직사각형(사분면) 모양이라 $x$와 $y$의 범위가 서로 얽혀 있지 않습니다 ①.`},
    {num:'Step 2', title:'주변확률밀도함수 구하기',
     body:`먼저 필요한 적분값을 구합니다. 주어진 참고식과 피적분함수가 우함수임을 이용하면

$$\\int_0^{\\infty}e^{-y^2/2}dy=\\frac12\\int_{-\\infty}^{\\infty}e^{-y^2/2}dy=\\frac{\\sqrt{2\\pi}}{2}$$

$$f_X(x)=\\int_0^{\\infty}\\frac{1}{\\sqrt{2\\pi}}e^{-x/2}e^{-y^2/2}dy=\\frac{1}{\\sqrt{2\\pi}}e^{-x/2}\\cdot\\frac{\\sqrt{2\\pi}}{2}=\\frac12e^{-x/2}\\ (x>0)$$

$$f_Y(y)=\\int_0^{\\infty}\\frac{1}{\\sqrt{2\\pi}}e^{-x/2}e^{-y^2/2}dx=\\frac{1}{\\sqrt{2\\pi}}e^{-y^2/2}\\cdot2=\\frac{2}{\\sqrt{2\\pi}}e^{-y^2/2}\\ (y>0)$$

$X$는 평균 $2$인 지수분포, $Y$는 반정규분포(half-normal)를 따릅니다.`},
    {num:'Step 3', title:'독립성 판정',
     body:`$$f_X(x)f_Y(y)=\\frac12e^{-x/2}\\cdot\\frac{2}{\\sqrt{2\\pi}}e^{-y^2/2}=\\frac{1}{\\sqrt{2\\pi}}e^{-\\frac12(x+y^2)}=f(x,y)$$

모든 $(x,y)$에서 결합밀도가 두 주변밀도의 곱과 같으므로 $X$와 $Y$는 서로 독립입니다 ②.`},
    {num:'Step 4', title:'조건부확률 계산',
     body:`독립이므로 조건은 아무 정보도 주지 않습니다.

$$P(X\\le2\\,|\\,Y\\le2)=P(X\\le2)$$

$$P(X\\le2)=\\int_0^2\\frac12e^{-x/2}dx=\\left[-e^{-x/2}\\right]_0^2=1-e^{-1}$$`}
  ],
  answer:'$X$와 $Y$는 독립($f(x,y)=f_X(x)f_Y(y)$), $P(X\\le2\\,|\\,Y\\le2)=1-e^{-1}$',
  footnotes:[
    {n:'①',text:'독립성 판정의 실전 요령: (i) 결합밀도가 $g(x)h(y)$ 꼴로 인수분해되고, (ii) 정의역이 $\\{a<x<b\\}\\times\\{c<y<d\\}$ 형태의 직사각형이면 독립이다. 두 조건 중 하나라도 깨지면 독립이 아니다. 예를 들어 정의역이 $0<x<y<1$처럼 두 변수를 얽어 놓으면, 밀도가 상수여도 독립이 아니다.'},
    {n:'②',text:'독립의 정의는 모든 $(x,y)$에서 $f(x,y)=f_X(x)f_Y(y)$가 성립하는 것이다. 이때 조건부밀도는 $f_{X|Y}(x|y)=f(x,y)/f_Y(y)=f_X(x)$가 되어 조건이 사라지고, 사건 단위로도 $P(A\\cap B)=P(A)P(B)$가 성립한다.'},
    {n:'③',text:'$\\int_0^{\\infty}e^{-y^2/2}dy$에서 $\\frac12$이 나오는 이유는 $e^{-y^2/2}$가 우함수라 $(-\\infty,0)$과 $(0,\\infty)$의 적분값이 같기 때문이다. $Y$의 밀도가 표준정규분포의 두 배인 것도 오른쪽 절반만 남기고 전체 확률을 1로 맞췄기 때문이다.'}
  ]
},

// ───────────────────────────────────────
// 2026
// ───────────────────────────────────────
{
  id:'2026a2', year:2026, type:'전공A', cat:'normal', pts:2,
  title:'정규분포 합의 표준편차와 $\\mu_1+\\mu_2$의 신뢰구간',
  problem:`A 과수원에서 판매하는 수박의 무게 $X$와 B 과수원에서 판매하는 수박의 무게 $Y$는 각각 정규분포 $N(\\mu_1,400^2)$, $N(\\mu_2,300^2)$을 따르며 서로 독립이다. $X+Y$의 표준편차를 구하시오.

A 과수원에서 임의로 추출한 수박 $100$개의 무게의 표본평균이 $3000$이었고, B 과수원에서 임의로 추출한 수박 $100$개의 무게의 표본평균이 $2000$이었을 때, $\\mu_1+\\mu_2$에 대한 $95\\%$ 신뢰구간은 $(5000-1.96\\times c,\\ 5000+1.96\\times c)$이다. $c$의 값을 구하시오. (단, 표준정규분포를 따르는 확률변수 $Z$에 대하여 $P(Z\\le1.96)=0.975$이다.)`,
  steps:[
    {num:'Step 1', title:'$X+Y$의 표준편차',
     body:`$X$와 $Y$가 독립이므로 분산이 더해집니다.

$$\\operatorname{Var}(X+Y)=400^2+300^2=160000+90000=250000$$

$$\\sigma_{X+Y}=\\sqrt{250000}=500$$

$400+300=700$이 아니라는 점에 주의합니다 ①.`},
    {num:'Step 2', title:'두 표본평균의 합의 분포',
     body:`$n_1=n_2=100$이므로

$$\\operatorname{Var}(\\overline{X})=\\frac{400^2}{100}=1600,\\qquad \\operatorname{Var}(\\overline{Y})=\\frac{300^2}{100}=900$$

$$\\operatorname{Var}(\\overline{X}+\\overline{Y})=1600+900=2500,\\qquad \\sigma=50$$

$\\overline{X}+\\overline{Y}$는 $\\mu_1+\\mu_2$의 불편추정량이고, 관측값은 $3000+2000=5000$으로 신뢰구간의 중심과 일치합니다.`},
    {num:'Step 3', title:'$c$ 구하기',
     body:`$95\\%$ 신뢰구간은 (점추정값) $\\pm\\ 1.96\\times$(표준오차)이므로 ②

$$(5000-1.96\\times50,\\ 5000+1.96\\times50)$$

$$c=50$$

Step 1의 $500$은 수박 한 통씩의 무게 합에 대한 표준편차이고, $c=50$은 각각 $100$개씩 평균 낸 값에 대한 표준오차입니다. $\\dfrac{500}{\\sqrt{100}}=50$의 관계가 성립합니다.`}
  ],
  answer:'$X+Y$의 표준편차 $=500$, $c=50$',
  footnotes:[
    {n:'①',text:'독립일 때 더해지는 것은 분산이지 표준편차가 아니다. 표준편차는 $\\sqrt{\\sigma_1^2+\\sigma_2^2}$로 계산되며, 이는 항상 $\\sigma_1+\\sigma_2$보다 작다. 직각삼각형의 빗변이 두 변의 합보다 짧은 것과 같은 구조다.'},
    {n:'②',text:'$P(Z\\le1.96)=0.975$이므로 양쪽 꼬리를 각각 $0.025$씩 남기면 가운데 확률이 $0.95$가 된다. 그래서 $1.96$이 신뢰수준 $95\\%$에 대응하는 임계값이다.'},
    {n:'③',text:'표준오차(standard error)는 추정량의 표준편차를 가리키는 말이다. 여기서는 $\\overline{X}+\\overline{Y}$라는 추정량의 표준편차 $50$이 표준오차이고, 신뢰구간의 반폭은 이 값에 임계값을 곱해 얻는다.'}
  ]
},

{
  id:'2026b6', year:2026, type:'전공B', cat:'trans', pts:4,
  title:'조각별 확률밀도함수에서 상수 $c$와 이항확률 구하기',
  problem:`어떤 공장에서 생산하는 제품의 수명 $X$의 확률밀도함수(probability density function)가 다음과 같다.

$$f(x)=\\begin{cases}\\dfrac{c}{x^3}, & x>2 \\\\ \\dfrac{c}{16}x, & 0\\le x\\le2 \\\\ 0, & x<0\\end{cases}$$

이 공장에서 생산하는 제품은 수명이 $4$ 이상인 경우 우수 제품으로 분류되고, $4$ 미만인 경우 일반 제품으로 분류된다. 상수 $c$의 값과 임의로 선택한 제품이 우수 제품일 확률 $P(X\\ge4)$의 값을 순서대로 구하시오.

또한 임의로 $4$개의 제품을 선택했을 때, 우수 제품이 일반 제품보다 더 많이 포함되어 있을 확률을 풀이 과정과 함께 쓰시오.`,
  diagram:`<svg viewBox="0 0 320 220" xmlns="http://www.w3.org/2000/svg" style="font-family:'Noto Sans KR',sans-serif">
    <text x="160" y="16" font-size="11" fill="var(--t2)" text-anchor="middle">f(x): 0≤x≤2 에서 직선, x&gt;2 에서 4/x³</text>
    <path d="M50,190 L130,90 L150,138.8 L170,160.4 L190,171.3 L210,177.5 L230,181.2 L250,183.6 L270,185.2 L290,186.3 L290,190 Z" fill="var(--acc-bg)" stroke="none"/>
    <polyline points="50,190 130,90" fill="none" stroke="var(--acc)" stroke-width="2"/>
    <polyline points="130,90 150,138.8 170,160.4 190,171.3 210,177.5 230,181.2 250,183.6 270,185.2 290,186.3" fill="none" stroke="var(--acc)" stroke-width="2"/>
    <line x1="40" y1="190" x2="305" y2="190" stroke="var(--t2)" stroke-width="1.2"/>
    <line x1="50" y1="205" x2="50" y2="60" stroke="var(--t2)" stroke-width="1.2"/>
    <line x1="130" y1="190" x2="130" y2="90" stroke="var(--t3)" stroke-width="1" stroke-dasharray="3 3"/>
    <line x1="210" y1="190" x2="210" y2="150" stroke="var(--t1)" stroke-width="1.4" stroke-dasharray="4 3"/>
    <text x="50" y="204" font-size="10" fill="var(--t3)" text-anchor="middle">0</text>
    <text x="130" y="204" font-size="10" fill="var(--t3)" text-anchor="middle">2</text>
    <text x="210" y="204" font-size="10" fill="var(--t1)" text-anchor="middle">4</text>
    <text x="303" y="206" font-size="11" fill="var(--t2)">x</text>
    <text x="46" y="70" font-size="11" fill="var(--t2)" text-anchor="end">f</text>
    <text x="245" y="146" font-size="10" fill="var(--t1)">우수 제품 (x≥4)</text>
    <text x="88" y="150" font-size="10" fill="var(--t3)" text-anchor="middle">넓이 c/8</text>
    <text x="165" y="122" font-size="10" fill="var(--t3)">넓이 c/8</text>
  </svg>`,
  steps:[
    {num:'Step 1', title:'전체 적분이 1이라는 조건으로 $c$ 구하기',
     body:`두 조각을 각각 적분합니다.

$$\\int_0^2\\frac{c}{16}x\\,dx=\\frac{c}{16}\\left[\\frac{x^2}{2}\\right]_0^2=\\frac{c}{16}\\cdot2=\\frac{c}{8}$$

$$\\int_2^{\\infty}\\frac{c}{x^3}dx=c\\left[-\\frac{1}{2x^2}\\right]_2^{\\infty}=c\\left(0+\\frac{1}{8}\\right)=\\frac{c}{8}$$

두 조각의 넓이가 정확히 같습니다. 합이 $1$이어야 하므로

$$\\frac{c}{8}+\\frac{c}{8}=\\frac{c}{4}=1\\ \\Rightarrow\\ c=4$$

($x=2$에서 왼쪽 값 $\\frac{4}{16}\\cdot2=\\frac12$, 오른쪽 값 $\\frac{4}{8}=\\frac12$로 연속이기도 합니다.)`},
    {num:'Step 2', title:'우수 제품일 확률',
     body:`$$P(X\\ge4)=\\int_4^{\\infty}\\frac{4}{x^3}dx=4\\left[-\\frac{1}{2x^2}\\right]_4^{\\infty}=4\\cdot\\frac{1}{32}=\\frac18$$

즉 제품 하나가 우수할 확률은 $p=\\dfrac18$입니다.`},
    {num:'Step 3', title:'이항분포로 모델링',
     body:`$4$개를 독립적으로 뽑을 때 우수 제품의 개수를 $N$이라 하면 ①

$$N\\sim B\\left(4,\\ \\frac18\\right)$$

"우수 제품이 일반 제품보다 더 많다"는 것은 $N>4-N$, 즉 $N>2$이므로 $N=3$ 또는 $N=4$입니다 ②.`},
    {num:'Step 4', title:'확률 계산',
     body:`$$P(N=3)=\\binom{4}{3}\\left(\\frac18\\right)^3\\left(\\frac78\\right)=4\\cdot\\frac{7}{4096}=\\frac{28}{4096}$$

$$P(N=4)=\\left(\\frac18\\right)^4=\\frac{1}{4096}$$

$$P(N\\ge3)=\\frac{28+1}{4096}=\\frac{29}{4096}\\approx0.00708$$`}
  ],
  answer:'$c=4$, $P(X\\ge4)=\\dfrac18$, 우수 제품이 더 많을 확률 $=\\dfrac{29}{4096}$',
  footnotes:[
    {n:'①',text:'같은 공정에서 독립적으로 생산된 제품 4개 각각이 확률 $p$로 우수 제품이 되므로, 우수 제품의 개수는 이항분포 $B(4,p)$를 따른다. 연속확률변수 $X$의 문제가 "기준을 넘느냐"라는 성공/실패 문제로 바뀌는 전형적인 구조다.'},
    {n:'②',text:'$4$개 중 우수가 $N$개면 일반은 $4-N$개다. $N>4-N\\iff 2N>4\\iff N>2$이므로 $N=3,4$이다. $N=2$는 개수가 같은 경우라 "더 많이"에 해당하지 않으니 제외한다.'},
    {n:'③',text:'$x>2$에서 $f(x)=4/x^3$처럼 거듭제곱으로 감소하는 꼬리를 갖는 분포를 멱법칙(power-law) 분포라 한다. 지수분포보다 꼬리가 두꺼워서 아주 오래 가는 제품이 나올 확률이 상대적으로 크다. 참고로 이 분포에서 $E[X]$는 유한하지만 $E[X^2]$는 발산한다.'}
  ]
}

  ]
};
