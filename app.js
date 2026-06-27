// ============================================================
// TEXTS — 10作品 + quizzes + imageQuizzes
// ============================================================
const TEXTS=[
  {title:'吾輩は猫である',
   text:'吾輩は猫である。名前はまだ無い。どこで生れたかとんと見当がつかぬ。何でも薄暗いじめじめした所でニャーニャー泣いていた事だけは記憶している。吾輩はここで始めて人間というものを見た。しかもあとで聞くとそれは書生という人間中で一番獰悪な種族であったそうだ。この書生というのは時々我々を捕えて煮て食うという話である。しかしその当時は何という考もなかったから別段恐しいとも思わなかった。ただ彼の掌に載せられてスーと持ち上げられた時何だかフワフワした感じがあったばかりである。掌の上で少し落ちついて書生の顔を見たのがいわゆる人間というものの見始であろう。この時妙なものだと思った感じが今でも残っている。第一毛をもって装飾されべき筈の顔がつるつるしてまるで薬缶だ。その後猫にもだいぶ逢ったがかような片輪には一度も出会わした事がない。のみならず顔の真中があまりに突起している。そうして其の穴の中から時々ぷうぷうと煙を吹く。どうも咽せぽくて実に弱った。これが人間の飲む煙草というものである事はようやくこの頃知った。',
   quizzes:[
     {q:'書生について述べられていることは？',opts:['人間中で最も親切な種族','人間中で一番獰悪な種族だと後に聞いた','吾輩を大切にしてくれる存在'],ans:1,expl:'「あとで聞くとそれは書生という人間中で一番獰悪な種族であった」と書かれています。'},
     {q:'書生の顔について吾輩が思ったことは？',opts:['とても美しく見とれた','毛で装飾されるべき顔がつるつるしてまるで薬缶だ','普通の顔だと思った'],ans:1,expl:'「毛をもって装飾されべき筈の顔がつるつるしてまるで薬缶だ」と書かれています。'}
   ],
   imageQuizzes:[
     {kw:'🐱 書生',q:'「書生」から文脈に合う場面は？',opts:['薄暗い部屋で子猫を鍋に近づける乱暴な学生','白衣の医師が猫を優しく世話する場面','老人が縁側で猫と日向ぼっこする場面'],ans:0,expl:'書生は「一番獰悪な種族」「煮て食う」と描写されており危険な印象が合います。'},
     {kw:'💨 煙草の煙',q:'「穴の中から煙をぷうぷうと吹く」場面として最もふさわしいイメージは？',opts:['書生がパイプを口にくわえ煙をゆっくり吐いている場面','工場の煙突から黒い煙が勢いよく出ている場面','焚き火の煙が風に流されている野外の場面'],ans:0,expl:'顔の中央（鼻）から煙を吐く様子を猫が不思議そうに観察している場面が文脈に合います。'}
   ]},
  {title:'銀河鉄道の夜',
   text:'「ではみなさんは、そういうふうに川だと云われたり、乳の流れたあとだと云われたりしていたこのぼんやりと白いものがほんとうは何かご承知ですか。」先生は、黒板に吊した大きな黒い星座の図の、上から下へ白くけぶった銀河帯のようなところを指しながら、みんなに問をかけました。カムパネルラが手をあげました。それから四五人手をあげました。ジョバンニも手をあげようとして、急いでそのままやめました。わからないのではなく、知っているのに、どうして手をあげなかったのか、自分でも不思議でした。先生はしばらく眼をそらして、黒板の図を指し示しながら、もう一度みんなに問をかけました。けれどもだれも手をあげませんでした。先生はやっとカムパネルラをあてました。するとあんなに元気よく手をあげたカムパネルラが、やはりもじもじ立って、答えないのでした。',
   quizzes:[
     {q:'先生が指していたのはどの部分？',opts:['星が密集している部分','上から下へ白くけぶった銀河帯のような部分','黒い星座の輪郭部分'],ans:1,expl:'「上から下へ白くけぶった銀河帯のようなところを指しながら」と書かれています。'},
     {q:'カムパネルラは先生に指名されてどうしましたか？',opts:['すぐに正解を答えた','もじもじ立って答えなかった','知らないと正直に言った'],ans:1,expl:'「あんなに元気よく手をあげたカムパネルラが、やはりもじもじ立って、答えないのでした」と書かれています。'}
   ],
   imageQuizzes:[
     {kw:'🌌 銀河帯',q:'「ぼんやりと白い銀河帯」の文脈で最もふさわしい場面は？',opts:['夜空に白く霞む天の川を黒板の図で指し示している教室','白い川が山間を流れ子どもたちが水遊びする夏の場面','真っ白なミルクが皿に注がれ猫が舐めている場面'],ans:0,expl:'授業で銀河（天の川）を黒板の図で説明している場面が最も合います。'},
     {kw:'🙋 カムパネルラ',q:'「元気よく手をあげたのに答えなかった」場面として最もふさわしいイメージは？',opts:['答えを知っているのに何らかの事情でわざと答えなかった少年','本当に答えが思い出せず焦っている少年','先生が嫌いでわざと無視している少年'],ans:0,expl:'元気よく手を挙げた後もじもじと答えないことから、知っていながら答えない複雑な事情がうかがえます。'}
   ]},
  {title:'蜘蛛の糸',
   text:'ある日の事でございます。御釈迦様は極楽の蓮池のふちを、独りでぶらぶら御歩きになっていらっしゃいました。池の中に咲いている蓮の花は、みんな玉のように真白で、そのまん中にある金色の蕊からは、何とも云えない好い匂が、絶間なくあたりへ溢れて居ります。極楽は丁度朝の中でございました。やがて御釈迦様はその池のふちに御佇みになって、水の面を覆っている蓮の葉の間から、ふと下の容子を御覧になりました。極楽の蓮池の下は、丁度地獄の底に当って居りますから、水晶のような水を透き徹して、三途の川や針の山が、丸で覗き眼鏡を見るように、はっきりと見えるのでございます。その地獄の底に、カンダタという男が一人、ほかの罪人と一緒にうごめいていました。この男はなかなかの悪人で、人を殺したり家に火をつけたり、いろいろな悪事を働いた揚句、とうとう地獄へ落ちてしまったのでございます。',
   quizzes:[
     {q:'御釈迦様が池の下に見たものは？',opts:['美しい別の極楽','三途の川や針の山','深い海底の宝物'],ans:1,expl:'「三途の川や針の山が…はっきりと見える」と書かれています。'},
     {q:'カンダタはどんな人物でしたか？',opts:['善人だったが間違いで地獄に落とされた','人を殺したり家に火をつけたりした悪人','お金持ちだったが怠け者だった人'],ans:1,expl:'「人を殺したり家に火をつけたり、いろいろな悪事を働いた」と書かれています。'}
   ],
   imageQuizzes:[
     {kw:'🪷 極楽の蓮池',q:'「極楽の蓮池」として最もふさわしい場面は？',opts:['朝の光の中、真白い蓮が水面に咲き乱れ甘い香りが漂う静かな池','荒れた泥沼に枯れた草が浮かぶどんよりとした池','子どもたちが石を投げて遊ぶにぎやかな公園の噴水池'],ans:0,expl:'「玉のように真白」な蓮、「金色の蕊」「好い匂」という描写から清浄な朝の場面が合います。'},
     {kw:'😈 カンダタ',q:'「なかなかの悪人」カンダタとして最もふさわしいイメージは？',opts:['地獄の底で他の罪人たちに混じってうごめいている恐ろしい男','お寺で静かにお経を読んでいる穏やかな老人','畑で黙々と働いている善良な農民'],ans:0,expl:'「地獄の底に、ほかの罪人と一緒にうごめいていました」という描写が文脈に合います。'}
   ]},
  {title:'坊っちゃん',
   text:'親譲りの無鉄砲で小供の時から損ばかりしている。小学校に居る時分学校の二階から飛び降りて一週間ほど腰を抜かした事がある。なぜそんな無闇をしたと聞く人があるかも知れぬ。別段深い理由でもない。新築の二階から首を出していたら、同級生の一人が冗談に、いくら威張っても、そこから飛び降りる事は出来まい、弱虫やーい、と囃したからである。小使に負ぶさって帰って来た時、おやじが大きな眼をして二階ぐらいから飛び降りて腰を抜かす奴があるかと云ったから、この次は抜かさずに飛んでみせますと答えた。親類のものが来て、おやじにこの子は乱暴で困るといったら、おやじは全くその通りと答えた。おやじは甚だ迷惑そうな顔をして、そうか、そうかとだけ云ったきり何とも云わなかった。',
   quizzes:[
     {q:'二階から飛び降りたきっかけは？',opts:['好奇心から試したかった','同級生に弱虫と囃されたから','先生に言われたから'],ans:1,expl:'「弱虫やーい、と囃したからである」と書かれています。'},
     {q:'父親の反応はどうでしたか？',opts:['大変怒って厳しく叱った','甚だ迷惑そうな顔をしてそうかそうかとだけ言った','心配してすぐに医者を呼んだ'],ans:1,expl:'「甚だ迷惑そうな顔をして、そうか、そうかとだけ云ったきり何とも云わなかった」と書かれています。'}
   ],
   imageQuizzes:[
     {kw:'🏫 二階から飛び降りる',q:'「学校の二階から飛び降りる」場面として最もふさわしいイメージは？',opts:['同級生に挑発された少年が意地になって新築校舎の窓から地面へ飛び降りる瞬間','体育の授業で先生の指示に従い跳び箱から着地する場面','火災から逃げるために毛布をつたって降りる場面'],ans:0,expl:'「弱虫やーい」と囃されたから飛び降りた無鉄砲な意地の場面が合います。'},
     {kw:'😐 父親の反応',q:'「甚だ迷惑そうな顔でそうかそうかとだけ言った」父親として最もふさわしいイメージは？',opts:['子どもの行動に困惑しながらも深く関わろうとしない無関心な父','子どもを深く心配して夜も眠れない父','子どもの勇気を密かに誇らしく思っている父'],ans:0,expl:'叱りもせず褒めもせず「そうかそうか」だけという反応から無関心・迷惑がっている様子が合います。'}
   ]},
  {title:'日本の気候',
   text:'日本の気候は、太平洋側気候、日本海側気候、内陸性気候、瀬戸内海式気候、南西諸島気候、北海道気候などに大きく分けられます。太平洋側では夏に南東の季節風の影響で雨が多く、冬は乾燥した晴天が続きます。一方、日本海側では冬に北西の季節風が吹きつけるため、世界有数の豪雪地帯となっています。中央に連なる険しい山脈を境界として、季節ごとの天候が全く異なるのが日本の自然環境の大きな特徴です。内陸部では夏と冬、昼と夜の気温差が激しく大陸性気候に似た特徴を示します。南西諸島は亜熱帯性気候で、年間を通じて温暖で台風の影響を強く受けます。北海道は冷帯湿潤気候に属し、梅雨がなく夏は涼しく冬の寒さが厳しいことで知られています。このような多様な気候は、日本の豊かな自然と農業の多様性を生み出す源となっています。',
   quizzes:[
     {q:'太平洋側の冬の特徴は？',opts:['豪雪が続く','乾燥した晴天が続く','雨が非常に多い'],ans:1,expl:'「冬は乾燥した晴天が続きます」と書かれています。'},
     {q:'北海道の気候の特徴として正しいのは？',opts:['梅雨がなく夏は涼しく冬の寒さが厳しい','年中温暖で台風の影響を受けやすい','夏と冬の寒暖差が極めて大きい'],ans:0,expl:'「梅雨がなく夏は涼しく冬の寒さが厳しいことで知られています」と書かれています。'}
   ],
   imageQuizzes:[
     {kw:'❄️ 豪雪地帯',q:'「世界有数の豪雪地帯」として最もふさわしいイメージは？',opts:['屋根まで雪が積もった家々と吹雪の中を歩く人々の重たい冬景色','雪のない穏やかな冬の海岸線に波が打ち寄せる場面','晴れ渡った青空の下カラカラに乾いた冬の平野'],ans:0,expl:'北西の季節風で豪雪地帯になると書かれており重い雪の場面が合います。'},
     {kw:'🌴 南西諸島',q:'「亜熱帯性気候・台風の影響」として最もふさわしいイメージは？',opts:['青い海とヤシの木が広がる温暖な島に台風が接近している場面','雪に覆われた山岳地帯で吹雪が吹き荒れる場面','桜が満開の春の公園でピクニックをしている場面'],ans:0,expl:'「亜熱帯性気候で年間を通じて温暖で台風の影響を強く受ける」という記述に合います。'}
   ]},
  {title:'羅生門',
   text:'ある日の暮れ方の事である。一人の下人が、羅生門の下で雨やみを待っていた。広い門の下には、この男のほかに誰もいない。ただ、所々丹塗の剥げた、大きな円柱に、蟋蟀が一匹とまっている。羅生門が、朱雀大路にある以上は、雨やみを待つ人間が、もう二三人はありそうなものである。それが、この男のほかには誰もいない。何故かというと、この二三年、京都には、地震とか辻風とか火事とか饑饉とかいう災いがつづいて起こった。そこで洛中のさびれ方は一通りではない。旧記によると、仏像や仏具を打砕いて、その丹がついたり、金銀の箔がついたりした木を、路ばたに積み重ねて、薪の料に売っていたということである。洛中がその始末であるから、羅生門の修理などは、元より誰も捨てて顧みなかった。するとその荒れ果てた門の下に、きつねや狸が住みつく。盗人が住みつく。とうとうしまいには、引き取り手のない死人を、この門へ持って来て、棄てて行く習慣さえできた。',
   quizzes:[
     {q:'なぜ羅生門に人がいないのですか？',opts:['祭りで人が集まっていたから','地震・辻風・火事・饑饉など災いが続き京都がさびれたから','門の修理工事をしていたから'],ans:1,expl:'「この二三年、京都には、地震とか辻風とか火事とか饑饉とかいう災いがつづいて起こった」と書かれています。'},
     {q:'荒れ果てた羅生門に住みついたのは？',opts:['貧しい農民たち','きつねや狸、盗人、そして死人が棄てられるようになった','旅人たちが避難してきた'],ans:1,expl:'「きつねや狸が住みつく。盗人が住みつく。死人を棄てて行く習慣さえできた」と書かれています。'}
   ],
   imageQuizzes:[
     {kw:'🏚️ 羅生門',q:'「荒れ果てた羅生門」として最もふさわしいイメージは？',opts:['丹塗りが剥げ蟋蟀が鳴き雨が降る中ひっそりとそびえる廃れた大門','きらびやかに修復され参拝者が列をなす壮麗な神社の門','新しく建てられ白木の香りがする真新しい城門'],ans:0,expl:'「丹塗の剥げた大きな円柱」「荒れ果てた門」という描写から廃れた寂しい門の場面が合います。'},
     {kw:'⚡ 京都の災い',q:'「地震・辻風・火事・饑饉が続いた京都」として最もふさわしいイメージは？',opts:['廃墟となった家々と、路傍に積まれた木材、人気のない荒れた都の景色','賑やかな市が立ち人々が笑い声をあげる活気ある町並み','豊作を喜ぶ農民たちが神社に参拝している穏やかな秋の場面'],ans:0,expl:'「洛中のさびれ方は一通りではない」という描写から荒廃した都の景色が合います。'}
   ]},
  {title:'走れメロス',
   text:'メロスは激怒した。必ず、かの邪智暴虐の王を除かなければならぬと決意した。メロスには政治がわからぬ。メロスは、村の牧人である。笛を吹き、羊と遊んで暮して来た。けれども邪悪に対しては、人一倍に敏感であった。きょう未明にメロスは村を出発し、野を越え山越え、十里はなれた此のシラクスの市にやって来た。メロスには父も、母も無い。女房も無い。十六の、内気な妹と二人暮しだ。この妹は、村の或る律気な一牧人を、近々、花婿として迎える事になっていた。結婚式は、あした行われる。メロスは、それゆえ、花嫁の衣裳やら祝宴の御馳走やらを買いに、はるばる市にやって来たのだ。',
   quizzes:[
     {q:'メロスが市に来た目的は？',opts:['王を暗殺するための武器を買いに来た','妹の結婚式のための衣裳や御馳走を買いに来た','友人のセリヌンティウスに会いに来た'],ans:1,expl:'「花嫁の衣裳やら祝宴の御馳走やらを買いに、はるばる市にやって来たのだ」と書かれています。'},
     {q:'メロスの家族構成は？',opts:['父母と兄弟が大勢いる大家族','父も母も女房もなく16歳の内気な妹と二人暮らし','妻と子ども三人の家族'],ans:1,expl:'「父も、母も無い。女房も無い。十六の、内気な妹と二人暮しだ」と書かれています。'}
   ],
   imageQuizzes:[
     {kw:'😡 メロスの激怒',q:'「邪智暴虐の王を除かなければならぬ」場面として最もふさわしいイメージは？',opts:['拳を握りしめ正義の怒りに燃えて立ち上がる若い羊飼いの男','市場で値切り交渉をして怒り出す商人の場面','試験に落ちて悔しがっている学生の場面'],ans:0,expl:'「激怒した」「除かなければならぬと決意した」から正義の怒りに燃える場面が合います。'},
     {kw:'👰 妹の結婚式',q:'「あした行われる結婚式」として最もふさわしいイメージは？',opts:['花嫁衣裳を身にまとう内気な妹と律気な花婿の質素だが温かな結婚式','豪華な城で行われる王族の絢爛な宴','村の広場で賑やかに踊る農民たちの収穫祭'],ans:0,expl:'「内気な妹」「律気な一牧人」という質素で真摯な印象の二人の結婚式の場面が合います。'}
   ]},
  {title:'人間失格',
   text:'恥の多い生涯を送って来ました。自分には、人間の生活というものが、見当つかないのです。自分は東北の田舎に生れましたが、汽車をはじめて見たのは、よほど大きくなってからでした。自分は停車場のブリッジを、上って、降りて、そうしてそれが、てっきり線路をまたぎ越えるための工夫であることは知っていたのですが、しかし、それ以上に、そのブリッジの上り下りが、自分にはちょっとした探検で、それが鉄道の施設と関係あるとは、どうもピンとこないのでした。そうして子供心にも、それを人に言えば笑われるだろうと思って、一人でこっそりと、まるで自分一人の不思議な遊びのようにしてやって来ました。',
   quizzes:[
     {q:'語り手がブリッジについて感じていたことは？',opts:['線路をまたぐ工夫だとすぐに理解し感心した','鉄道の施設との関係がピンとこず個人的な探検のように感じていた','危険だと思って大人に知らせようとした'],ans:1,expl:'「鉄道の施設と関係あるとは、どうもピンとこなかった」「自分一人の不思議な遊びのようにしてやって来ました」と書かれています。'},
     {q:'語り手が不思議な感覚を人に言えなかった理由は？',opts:['怒られると思ったから','笑われるだろうと思ったから','秘密にしておきたかったから'],ans:1,expl:'「それを人に言えば笑われるだろうと思って、一人でこっそりと」と書かれています。'}
   ],
   imageQuizzes:[
     {kw:'😶 人間の生活がわからない',q:'「人間の生活というものが見当つかない」として最もふさわしいイメージは？',opts:['周囲の人々が当然のように行動する中で一人だけ透明な壁に隔てられたように困惑する若者','友達と楽しく遊ぶ活発な子ども','授業中に分からない問題を考えている学生'],ans:0,expl:'「見当つかない」という疎外感と孤立感から、周囲から切り離されたような場面が文脈に合います。'},
     {kw:'🌉 停車場のブリッジ',q:'「ブリッジの上り下りが一人の不思議な遊び」として最もふさわしいイメージは？',opts:['駅の跨線橋をこっそり一人で探検するように上り下りする子ども','友達と競争しながら橋を走り回っている元気な子どもたち','橋を渡りながら景色を写真に撮っている観光客'],ans:0,expl:'「自分一人の不思議な遊びのようにしてやって来ました」という孤独で内向きな遊びの場面が合います。'}
   ]},
  {title:'注文の多い料理店',
   text:'二人の若い紳士が、すっかりイギリスの兵隊のかたちをして、ぴかぴかする鉄砲をかついで、白熊のような犬を二疋つれて、山へ鳥打ちに来ました。ところがどんどん山の中に入っていったために、とうとう二人はだいぶ山の奥に来てしまいました。そしてまた案内してきた専門の猟師も、どこかへいなくなってしまいました。でも二人の紳士は、すこしも困りませんでした。「この辺は鉄砲に困るな。」「全く、鳥の一羽も居やがらない。」と言いながら、どんどん進んでいきました。ところが間もなく二人は、一軒のおかしな西洋造りの家の前にきました。その家の看板には金文字でこう書いてありました。RESTAURANT「西洋料理店 WILDCAT HOUSE 注文の多い料理店」',
   quizzes:[
     {q:'二人の紳士が山に来た目的は？',opts:['山菜を採りに来た','鳥打ちに来た','山岳登山をするために来た'],ans:1,expl:'「山へ鳥打ちに来ました」と書かれています。'},
     {q:'不思議な料理店の名前は何でしたか？',opts:['WILDCAT HOUSE 注文の多い料理店','BEAR HOUSE 熊の出る料理店','MOUNTAIN HOUSE 山の洋食店'],ans:0,expl:'「WILDCAT HOUSE 注文の多い料理店」と金文字で書かれていました。'}
   ],
   imageQuizzes:[
     {kw:'🏕️ 山奥の洋館',q:'「山奥に突然現れた西洋料理店」として最もふさわしいイメージは？',opts:['深い山の木々の中にぽつんと立つ洋風の建物に金文字の看板が光っている場面','賑やかな繁華街の角に立つおしゃれなレストランの場面','海辺のリゾートに建つ明るいテラス席のあるレストラン'],ans:0,expl:'「山の奥」「おかしな西洋造りの家」という描写から深山の中に不思議と現れた建物の場面が合います。'},
     {kw:'🔫 鉄砲を持つ紳士',q:'「イギリス兵のかたちをした若い紳士が白熊のような犬を連れて山を歩く」場面は？',opts:['ハンター風の正装で猟銃を肩に掛け大型の白い犬を連れて山道を進む二人の若者','農作業をしている老夫婦と牧羊犬が草原を歩いている場面','子どもたちが犬と公園で遊んでいる休日の場面'],ans:0,expl:'「イギリスの兵隊のかたち」「ぴかぴかする鉄砲」「白熊のような犬二疋」という描写に合います。'}
   ]},
  {title:'舞姫',
   text:'石炭をば早や積み果てつ。中等室の卓のほとりはいと狭苦しきに、余は一人ゐて書を読みぬ。これは中等室に居る人々の目を遠ざけんがために、余が常に持ち歩く用意ある書物なり。日は既に西に傾きたれど、波は穏やかにして、汽船は水脈（みお）をたちて行く。余が父のかたみとなりにける此の日記を取りいでてこれを記す。アデン港を離れてより既に二週間経ちぬ。余は昨日まで日記をつくることを忘れたり。されど今日は思ふことあり、暫くこの記にたくさんに記さんとす。余は幾年か後に、今日の自分が思ひきって書きたる一段をよみ返す事あらんかとも思ふに、また今日の自分に笑はるゝかと思ふに、さらば此処（ここ）に記しておかう。',
   quizzes:[
     {q:'語り手（余）が書を持ち歩く理由は？',opts:['読書が好きで暇つぶしのため','中等室の人々の目を遠ざけるため','船旅の勉強のため'],ans:1,expl:'「中等室に居る人々の目を遠ざけんがために、余が常に持ち歩く用意ある書物なり」と書かれています。'},
     {q:'語り手が日記を書こうと思った理由は？',opts:['毎日の習慣だったから','昨日まで忘れていたが今日は思うことがあったから','船長に命令されたから'],ans:1,expl:'「昨日まで日記をつくることを忘れたり。されど今日は思ふことあり」と書かれています。'}
   ],
   imageQuizzes:[
     {kw:'🚢 汽船の甲板',q:'「波穏やかに水脈を立てて進む汽船」として最もふさわしいイメージは？',opts:['夕日に染まる穏やかな海を静かに進む蒸気船の甲板に一人たたずむ日本人の若者','嵐の中で激しく揺れながら進む船に乗客が必死にしがみついている場面','賑やかな港に停泊した豪華客船から大勢の観光客が降りてくる場面'],ans:0,expl:'「波は穏やかにして、汽船は水脈をたちて行く」「余は一人」という描写から静かな航海の場面が合います。'},
     {kw:'📔 父のかたみの日記',q:'「父の形見となった日記を取り出して記す」場面として最もふさわしいイメージは？',opts:['父から受け継いだ古い日記帳を船室で一人静かに開き、ペンを走らせる若い男性','友人と賑やかにカフェでノートに落書きしている場面','図書館で大勢の学生が一緒に勉強している場面'],ans:0,expl:'「父のかたみとなりにける此の日記」という重みのある描写から、一人で静かに向き合う場面が合います。'}
   ]}
];

// keywords per text for word-flash
const KEYWORDS={
  '吾輩は猫である':['書生','薬缶','猫','掌','煙草','獰悪','フワフワ','円柱'],
  '銀河鉄道の夜':['銀河帯','カムパネルラ','ジョバンニ','星座','黒板','天の川'],
  '蜘蛛の糸':['カンダタ','蓮池','地獄','極楽','御釈迦様','三途の川','針の山'],
  '坊っちゃん':['無鉄砲','書生','腰を抜かす','弱虫','新築','親譲り'],
  '日本の気候':['太平洋側','日本海側','豪雪','季節風','山脈','亜熱帯','冷帯'],
  '羅生門':['下人','羅生門','朱雀大路','饑饉','蟋蟀','盗人','荒廃'],
  '走れメロス':['メロス','邪智暴虐','牧人','シラクス','結婚式','妹','激怒'],
  '人間失格':['恥','生涯','停車場','ブリッジ','探検','東北','汽車'],
  '注文の多い料理店':['WILDCAT','注文','料理店','紳士','鉄砲','猟師','白熊'],
  '舞姫':['アデン','汽船','日記','中等室','父のかたみ','水脈','西に傾く']
};

// ============================================================

// ============================================================

const S={
  user:null,passwordHash:null,wpm:0,effectiveWpm:0,level:1,sessions:0,history:[],
  readMode:'yoko', // 'yoko' | 'tate'
  pendingPhases:null, pendingSingle:null,
  cur:null,quiz:null,iq:null,
  phases:[],phaseIdx:0,timer:null,
  td:{preWpm:0,postWpm:0,quizOk:undefined,iqOk:undefined,periScore:0,periTotal:0,schulteTime:0,schulteErr:0,spanScore:0}
};

// ============================================================
// UTILS
// ============================================================
const $=id=>document.getElementById(id);
function showView(n){
  document.querySelectorAll('.view').forEach(v=>v.classList.remove('active'));
  $(n+'-view').classList.add('active');
  $('topbar').style.display=(n==='auth')?'none':'flex';
}
function stopTimer(){if(S.timer){clearTimeout(S.timer);clearInterval(S.timer);S.timer=null;}}
function showNext(){$('next-btn').style.display='inline-block';}
function hideNext(){$('next-btn').style.display='none';}
function setTitle(t){$('phase-title').textContent=t;}
function setProg(p){$('prog').style.width=p+'%';}
function TC(){return $('tc');}
function clearTC(){
  stopTimer();TC().innerHTML='';
  TC().style.padding='24px';TC().style.alignItems='center';TC().style.justifyContent='center';
  hideNext();
}
// パスワードを簡易ハッシュ化（SHA-256相当をWeb Crypto APIで）
async function hashPassword(pass){
  const buf=await crypto.subtle.digest('SHA-256',new TextEncoder().encode(pass));
  return Array.from(new Uint8Array(buf)).map(b=>b.toString(16).padStart(2,'0')).join('');
}





function saveUser(){
  if(!S.user) return;
  localStorage.setItem('skt_'+S.user, JSON.stringify({
    passwordHash: S.passwordHash,
    wpm: S.wpm, effectiveWpm: S.effectiveWpm,
    level: S.level, sessions: S.sessions, history: S.history
  }));
}

function loadUser(name){
  const r = localStorage.getItem('skt_'+name);
  if(!r) return null;
  return JSON.parse(r);
}


// Firebase設定保存


// 起動時: 保存済みFirebase設定があれば自動接続

// サイドバーの設定ボタンからも開けるように

async function doLogin(){
  const name=$('auth-name').value.trim(),pass=$('auth-pass').value;
  const errEl=$('auth-err');
  errEl.textContent='';
  errEl.style.color='var(--danger)';
  if(name.length<3){errEl.textContent='ユーザー名は3文字以上入力してください';return;}
  if(pass.length<4){errEl.textContent='パスワードは4文字以上入力してください';return;}

  const hash=await hashPassword(pass);
  const saved=loadUser(name);

  if(saved===null){
    // 新規登録
    S.user=name;S.passwordHash=hash;
    S.wpm=0;S.effectiveWpm=0;S.level=1;S.sessions=0;S.history=[];
    saveUser();
    errEl.style.color='var(--accent2)';
    errEl.textContent='✅ 新規登録しました。ようこそ！';
    setTimeout(async()=>{await updateDash();showView('dashboard');},800);
  } else {
    // 既存ユーザー: パスワード照合
    if(saved.passwordHash && saved.passwordHash!==hash){
      errEl.style.color='var(--danger)';
      errEl.textContent='❌ パスワードが違います';
      $('auth-pass').value='';
      return;
    }
    S.user=name;S.passwordHash=hash;
    S.wpm=saved.wpm||0;S.effectiveWpm=saved.effectiveWpm||0;
    S.level=saved.level||1;S.sessions=saved.sessions||0;S.history=saved.history||[];
    saveUser();
    updateDash();showView('dashboard');
  }
}
function updateDash(){
  $('dash-greet').textContent=(S.user||'')+'さん、こんにちは！';
  $('tb-user').textContent=S.user+'さん';
  $('s-lv').textContent=S.level;
  $('s-wpm').innerHTML=(S.wpm?Math.round(S.wpm):'—')+'<span class="su">文字/分</span>';
  $('s-eff').innerHTML=(S.effectiveWpm?Math.round(S.effectiveWpm):'—')+'<span class="su">文字/分</span>';
  $('s-sess').textContent=S.sessions;
  renderHistory();
}
function renderHistory(){
  const b=$('hist-body');
  const empty=$('hist-empty');
  const statsRow=$('hist-stats');
  const chartWrap=$('hist-chart-wrap');
  const tableEl=$('hist-table-el');

  if(!S.history.length){
    empty.style.display='block';
    statsRow.style.display='none';
    chartWrap.style.display='none';
    tableEl.style.display='none';
    b.innerHTML='';
    return;
  }

  empty.style.display='none';
  statsRow.style.display='grid';
  chartWrap.style.display='block';
  tableEl.style.display='table';

  // --- サマリー統計 ---
  const wpmEntries=S.history.filter(h=>h.wpm);
  const maxWpm=wpmEntries.length?Math.max(...wpmEntries.map(h=>h.wpm)):0;
  const lastWpm=wpmEntries.length?wpmEntries[wpmEntries.length-1].wpm:0;
  const quizEntries=S.history.filter(h=>h.quiz!==undefined);
  const quizRate=quizEntries.length?Math.round(quizEntries.filter(h=>h.quiz).length/quizEntries.length*100):null;

  $('hs-max').innerHTML=maxWpm?`${Math.round(maxWpm)}<span class="hu">文字/分</span>`:'—';
  $('hs-last').innerHTML=lastWpm?`${Math.round(lastWpm)}<span class="hu">文字/分</span>`:'—';
  $('hs-quiz').innerHTML=quizRate!==null?`${quizRate}<span class="hu">%</span>`:'—';

  // --- グラフ描画 ---
  const canvas=$('wpm-chart');
  const pts=wpmEntries.slice(-20); // 直近20件
  drawWpmChart(canvas,pts);

  // --- テーブル ---
  b.innerHTML=S.history.slice().reverse().slice(0,30).map(h=>`<tr>
    <td>${h.date}</td><td>${h.mode==='tate'?'縦読み':'横読み'}</td><td>${h.title}</td><td>${h.kind}</td>
    <td>${h.wpm?Math.round(h.wpm)+'文字/分':'—'}</td>
    <td>${h.quiz===undefined?'—':h.quiz?'✅':'❌'}</td>
    <td><span class="tag ${h.ok?'tg':'ty'}">${h.ok?'達成':'練習'}</span></td>
  </tr>`).join('');
}

function drawWpmChart(canvas,pts){
  // canvasの実サイズをDPRに合わせて設定
  const dpr=window.devicePixelRatio||1;
  const rect=canvas.parentElement.getBoundingClientRect();
  const W=rect.width-48; // padding分引く
  const H=200;
  canvas.width=W*dpr;
  canvas.height=H*dpr;
  canvas.style.width=W+'px';
  canvas.style.height=H+'px';
  const ctx=canvas.getContext('2d');
  ctx.scale(dpr,dpr);

  const isDark=document.documentElement.classList.contains('dark');
  ctx.fillStyle=isDark?'#1e293b':'#ffffff';
  ctx.fillRect(0,0,W,H);

  if(!pts.length){
    ctx.fillStyle=isDark?'#64748b':'#94a3b8';
    ctx.font='14px sans-serif';
    ctx.textAlign='center';
    ctx.fillText('速度計測のあるセッションがありません',W/2,H/2);
    return;
  }

  const PAD={top:16,right:16,bottom:40,left:56};
  const cW=W-PAD.left-PAD.right;
  const cH=H-PAD.top-PAD.bottom;

  // スケール
  const wpmVals=pts.map(p=>p.wpm);
  const effVals=pts.map(p=>p.effectiveWpm||0).filter(v=>v>0);
  const allVals=[...wpmVals,...effVals];
  const minV=Math.max(0,Math.min(...allVals)*0.85);
  const maxV=Math.max(...allVals)*1.1;
  const scaleY=v=>PAD.top+cH-(((v-minV)/(maxV-minV))*cH);
  const scaleX=i=>PAD.left+(i/(Math.max(pts.length-1,1)))*cW;

  // グリッド線と目盛り
  ctx.strokeStyle=isDark?'#334155':'#e2e8f0';
  ctx.lineWidth=1;
  const gridCount=4;
  for(let g=0;g<=gridCount;g++){
    const v=minV+(maxV-minV)*(g/gridCount);
    const y=scaleY(v);
    ctx.beginPath();ctx.moveTo(PAD.left,y);ctx.lineTo(PAD.left+cW,y);ctx.stroke();
    ctx.fillStyle=isDark?'#64748b':'#94a3b8';ctx.font=`10px 'Zen Kaku Gothic New',sans-serif`;ctx.textAlign='right';
    ctx.fillText(Math.round(v),PAD.left-6,y+4);
  }

  // X軸ラベル（日時）
  ctx.fillStyle=isDark?'#64748b':'#94a3b8';ctx.font=`10px 'Zen Kaku Gothic New',sans-serif`;ctx.textAlign='center';
  pts.forEach((p,i)=>{
    if(pts.length<=8||i%(Math.ceil(pts.length/6))===0){
      ctx.fillText(p.date,scaleX(i),H-PAD.bottom+14);
    }
  });

  // エフェクト: 面グラフ（WPM）
  const grad=ctx.createLinearGradient(0,PAD.top,0,PAD.top+cH);
  grad.addColorStop(0,'rgba(26,86,219,0.18)');
  grad.addColorStop(1,'rgba(26,86,219,0)');
  ctx.beginPath();
  pts.forEach((p,i)=>{const x=scaleX(i),y=scaleY(p.wpm);i===0?ctx.moveTo(x,y):ctx.lineTo(x,y);});
  ctx.lineTo(scaleX(pts.length-1),PAD.top+cH);
  ctx.lineTo(scaleX(0),PAD.top+cH);
  ctx.closePath();
  ctx.fillStyle=grad;ctx.fill();

  // WPM折れ線
  ctx.beginPath();ctx.strokeStyle='#1a56db';ctx.lineWidth=2.5;ctx.lineJoin='round';
  pts.forEach((p,i)=>{const x=scaleX(i),y=scaleY(p.wpm);i===0?ctx.moveTo(x,y):ctx.lineTo(x,y);});
  ctx.stroke();

  // WPMドット
  pts.forEach((p,i)=>{
    const x=scaleX(i),y=scaleY(p.wpm);
    ctx.beginPath();ctx.arc(x,y,4,0,Math.PI*2);
    ctx.fillStyle='#fff';ctx.fill();
    ctx.strokeStyle='#1a56db';ctx.lineWidth=2;ctx.stroke();
  });

  // 実効速度折れ線（計測値があるもののみ）
  const effPts=pts.filter(p=>p.effectiveWpm>0);
  if(effPts.length>=2){
    ctx.beginPath();ctx.strokeStyle='#10b981';ctx.lineWidth=2;ctx.setLineDash([5,3]);ctx.lineJoin='round';
    effPts.forEach((p,i)=>{
      const x=scaleX(pts.indexOf(p)),y=scaleY(p.effectiveWpm);
      i===0?ctx.moveTo(x,y):ctx.lineTo(x,y);
    });
    ctx.stroke();ctx.setLineDash([]);
  }

  // 最高値ラベル
  const maxIdx=wpmVals.indexOf(Math.max(...wpmVals));
  const mx=scaleX(maxIdx),my=scaleY(pts[maxIdx].wpm);
  ctx.fillStyle='#1a56db';ctx.font=`bold 11px 'Zen Kaku Gothic New',sans-serif`;ctx.textAlign='center';
  ctx.fillText(`${Math.round(pts[maxIdx].wpm)}`,mx,my-10);
}
function pickText(){
  S.cur=TEXTS[Math.floor(Math.random()*TEXTS.length)];
  S.quiz=S.cur.quizzes[Math.floor(Math.random()*S.cur.quizzes.length)];
  S.iq=S.cur.imageQuizzes[Math.floor(Math.random()*S.cur.imageQuizzes.length)];
}
function flashWpm(){return Math.max(S.wpm||0,S.td.preWpm||0,400)*2;}
function isTate(){return S.readMode==='tate';}

// ============================================================
// CHUNKER
// ============================================================
function chunkText(text,maxLen=9){
  const BREAK=new Set(['、','。','！','？','…']);
  const PARTICLE=/^(は|が|を|に|で|と|へ|の|も|や|から|まで|より|けど|ので|ながら|ても|なら|ば|て|し|たり|です|ます|ました|ません|だ)$/;
  let segs;
  try{const seg=new TinySegmenter();segs=seg.segment(text);}catch(e){segs=text.split('');}
  let chunks=[],cur='';
  for(let i=0;i<segs.length;i++){
    const s=segs[i],next=segs[i+1]||'';
    cur+=s;
    if(BREAK.has(s)){if(cur.trim())chunks.push(cur);cur='';}
    else if(!PARTICLE.test(next)&&(cur.length>=maxLen||i===segs.length-1)){if(cur.trim())chunks.push(cur);cur='';}
  }
  return chunks.reduce((a,p)=>{if(p.length<=1&&a.length>0)a[a.length-1]+=p;else a.push(p);return a;},[]);
}
function blockText(text,maxLen=28){
  const c=chunkText(text);let blocks=[],cur='';
  c.forEach((ch,i)=>{cur+=ch;if(cur.length>=maxLen||i===c.length-1){blocks.push(cur);cur='';}});
  return blocks;
}
function pageText(text,maxLen=80){
  const blocks=blockText(text,28);let pages=[],cur='';
  blocks.forEach((b,i)=>{cur+=b;if(cur.length>=maxLen||i===blocks.length-1){pages.push(cur);cur='';}});
  return pages;
}

// ============================================================
// AUTH
// ============================================================
function toggleDark(){
  const dark=document.documentElement.classList.toggle('dark');
  $('dark-btn').textContent=dark?'☀️':'🌙';
  localStorage.setItem('skt_dark',dark?'1':'0');
}
// 起動時に保存済みモードを復元
(function(){
  if(localStorage.getItem('skt_dark')==='1'){
    document.documentElement.classList.add('dark');
    // ボタンはDOM構築後に更新
    document.addEventListener('DOMContentLoaded',()=>{
      const btn=$('dark-btn');if(btn)btn.textContent='☀️';
    });
  }
})();

function doLogout(){S.user=null;S.passwordHash=null;showView('auth');}
function goHome(){
  if($('dashboard-view').classList.contains('active')){
    showTab('home',$('sb-home'));
  } else {
    showView('dashboard');
    showTab('home',$('sb-home'));
  }
}
document.querySelectorAll('#auth-view input').forEach(el=>el.addEventListener('keydown',e=>{if(e.key==='Enter')doLogin();}));
window.addEventListener('resize',()=>{
  if($('tab-history')&&$('tab-history').style.display!=='none')renderHistory();
});

// ============================================================
// MODE SELECT
// ============================================================
let _pendingCb=null;
function goFull(){
  _pendingCb=()=>startFull();
  showModeSelect();
}
function goSingle(id){
  _pendingCb=()=>startSingle(id);
  showModeSelect();
}
function showModeSelect(){
  // reset selection
  ['yoko','tate'].forEach(m=>{const c=$('mc-'+m);if(c)c.classList.remove('selected');});
  $('mode-start-btn').classList.remove('ready');
  showView('mode');
}
function selectMode(m){
  S.readMode=m;
  ['yoko','tate'].forEach(k=>{const c=$('mc-'+k);if(c)c.classList.toggle('selected',k===m);});
  $('mode-start-btn').classList.add('ready');
}
function confirmMode(){
  showView('dashboard');
  if(_pendingCb){_pendingCb();_pendingCb=null;}
}

// ============================================================
// TABS
// ============================================================
function toggleSidebar(){
  const sb=$('sidebar'),btn=$('sidebar-toggle');
  const collapsed=sb.classList.toggle('collapsed');
  btn.textContent=collapsed?'›':'‹';
}
function showTab(name,btn){
  ['home','training','history'].forEach(t=>{$('tab-'+t).style.display=t===name?'':'none';});
  document.querySelectorAll('.sidebar-btn').forEach(b=>b.classList.remove('active'));
  if(btn)btn.classList.add('active');else $('sb-'+name)&&$('sb-'+name).classList.add('active');
  if(name==='history')renderHistory();
}

// ============================================================
// PHASE RUNNER
// ============================================================
const TITLES={
  'pre-measure':'【事前計測】普段通りの速度で読んでください',
  'post-measure':'【事後計測】もう一度読んでください',
  'measure':'【読書速度計測】普段通りの速度で読んでください',
  'eye-track':'【眼筋運動】点を目で追ってください',
  'schulte':'【シュルテテーブル】1から順番にタップ',
  'peripheral':'【周辺視野】中央を見つめたまま数字を記憶→合計を回答',
  'guided':'【ガイド読み】光るチャンクを視野全体で捉えてください',
  'flash':'【フラッシュ読書】瞬時に認識してください',
  'word-flash':'【単語フラッシュ】キーワードを瞬時に認識してください',
  'span':'【スパン測定】一瞬で何文字認識できるか測定します',
  'quiz':'【理解度クイズ】内容を正しく理解できましたか？',
  'image-quiz':'【右脳イメージ変換】キーワードから場面を連想してください',
  'expand-circle':'【視野拡張サークル】中央を見つめたまま円の広がりを感じてください'
};

const INTROS={
  'pre-measure':['📏','読書速度の事前計測','今のあなたの読書速度を計測します。特別なことは意識せず、いつも通りのペースで読んでください。',['文章を最後まで読んだら「読み終わった」を押す','内容をしっかり理解しながら読む','速く読もうとしなくてOK']],
  'post-measure':['📏','読書速度の事後計測','トレーニング後の読書速度を計測します。トレーニング前と比べてどのくらい変化したか確認しましょう。',['同じ文章をもう一度、自然なペースで読む','速さよりも理解を意識する']],
  'measure':['📏','読書速度計測','現在の読書速度を計測します。いつも通りのペースで、内容を理解しながら読んでください。',['「読み始める」を押してからスタート','読み終わったらすぐ「読み終わった」を押す']],
  'eye-track':['👁','眼筋運動（7パターン）','7種類のパターンで眼球を多角的に鍛えます。パターンごとに動きが変わります。頭を動かさず目だけで追ってください。',['頭を動かさず目だけで点を追う','各パターン自動で切り替わる','途中で疲れたら目を閉じて休憩してOK']],
  'schulte':['🔢','シュルテテーブル','5×5のマス目に並んだ1〜25の数字を、1から順番にタップします。視野を広く使い周辺視野と眼球運動を同時に鍛えます。',['中央付近を見ながら周辺視野で数字を探す','頭ではなく目だけを動かす','なるべく速くタップ！']],
  'peripheral':['🔵','周辺視野フラッシュ','中央の赤い点を見つめたまま、周辺に一瞬だけ現れる数字を認識します。全8問。正解率がスコアに反映されます。',['絶対に目を動かさず赤い点を見続ける','数字が消えたら頭の中で素早く合計する','全8問。正解率がスコアに反映される']],
  'guided':['💡','ガイド読み','文章がチャンク（意味のまとまり）ごとに自動でハイライトされます。光っている部分を視野全体で捉える練習です。',['一語一語ではなく「塊」で認識する意識で','目をハイライトに合わせて動かす','スピードは自動制御']],
  'flash':['⚡','フラッシュ読書（3段階）','文節→ブロック→ページの3段階で文章が高速フラッシュ表示されます。段階が進むほど認識する範囲が広がります。',['目を動かさず中央を見つめ続ける','段階が上がるほど広い範囲を一度に捉える','焦らず視野を広げることを意識する']],
  'word-flash':['🔤','単語フラッシュ','文章中の重要キーワードが高速でフラッシュ表示されます。意味の塊として瞬時に認識する訓練です。',['瞬時に意味を理解する','読もうとせず「見る」感覚で','後でクイズに出るかもしれません']],
  'span':['🧩','スパン測定','一瞬表示される文字列を見て、何文字正確に認識できるか測定します。視野スパン（一度に認識できる文字数）がわかります。',['表示された文字列を素早く読む','見えた文字をそのまま入力（正確さ優先）','スパンが広いほど速読に有利']],
  'quiz':['❓','理解度クイズ','読んだ文章の内容を正しく理解できたか確認します。3択から正しいものを選んでください。',['選択肢をよく読んで答える','正解率が「実効読書速度」に反映される','解説も確認しよう']],
  'image-quiz':['🧠','右脳イメージ変換','読んだ文章のキーワードから頭に浮かんだ「場面」を3択から選んでください。右脳の活性化を促します。',['キーワードを見た瞬間に浮かんだ場面を選ぶ','深く考えず直感で','正解すると実効速度にボーナスが付く']],
  'expand-circle':['⭕','視野拡張サークル','中央の固視点を見つめたまま、周囲に広がっていく円とドットを「視野の端」で感じ取るトレーニングです。目を動かさず、意識だけを広げてください。',['絶対に目を動かさない。中央の点だけを見る','円が広がるにつれ視野を意識的に広げる','リラックスして、視野全体でぼんやり感じ取る']]
};

function advancePhase(){
  stopTimer();S.phaseIdx++;
  if(S.phaseIdx>=S.phases.length){finishTraining();return;}
  runPhase();
}
function quitTraining(){stopTimer();showView('dashboard');}

function startFull(){
  pickText();resetTd();
  S.phases=['pre-measure','eye-track','expand-circle','schulte','peripheral','word-flash','guided','flash','span','post-measure','quiz','image-quiz'];
  S.phaseIdx=0;showView('training');
  $('phase-mode-badge').textContent=isTate()?'縦読みモード':'横読みモード';
  runPhase();
}
function startSingle(id){
  pickText();resetTd();
  S.phases=[id];S.phaseIdx=0;showView('training');
  $('phase-mode-badge').textContent=isTate()?'縦読みモード':'横読みモード';
  runPhase();
}
function resetTd(){
  S.td={preWpm:0,postWpm:0,quizOk:undefined,iqOk:undefined,periScore:0,periTotal:0,schulteTime:0,schulteErr:0,spanScore:0};
}
function runPhase(){
  clearTC();
  const id=S.phases[S.phaseIdx];
  setProg(Math.round((S.phaseIdx/S.phases.length)*100));
  setTitle(TITLES[id]||id);
  showIntro(id,()=>execPhase(id));
}
function showIntro(id,cb){
  const info=INTROS[id];if(!info){cb();return;}
  const [icon,title,body,pts]=info;
  const card=document.createElement('div');card.className='intro-card';
  const modeTag=isTate()?'<span style="background:#fef9c3;color:#92400e;font-size:.72rem;font-weight:700;padding:2px 8px;border-radius:20px;margin-left:8px">縦読み</span>':'';
  card.innerHTML=`<div class="intro-head"><span class="intro-icon">${icon}</span><div><div class="intro-title">${title}${modeTag}</div></div></div>
    <p class="intro-desc">${body}</p>
    <ul class="intro-pts">${pts.map(p=>`<li>${p}</li>`).join('')}</ul>
    <button class="intro-btn" id="intro-go">はじめる →</button>`;
  TC().appendChild(card);
  $('intro-go').onclick=()=>{clearTC();cb();};
}
function execPhase(id){
  switch(id){
    case 'pre-measure':case 'post-measure':case 'measure':runMeasure(id);break;
    case 'eye-track':  runEyeTrack();break;
    case 'schulte':    runSchulte();break;
    case 'peripheral': runPeripheral();break;
    case 'guided':     runGuided();break;
    case 'flash':      runFlash();break;
    case 'word-flash': runWordFlash();break;
    case 'span':       runSpan();break;
    case 'quiz':       runQuiz();break;
    case 'image-quiz': runImageQuiz();break;
    case 'expand-circle': runExpandCircle();break;
  }
}
function countdown(el,from,cb){
  let n=from;
  (function tick(){el.innerHTML=`<div class="countdown">${n}</div>`;if(--n>=0){S.timer=setTimeout(tick,800);}else{cb();}})();
}

// ============================================================
// MEASURE — blur until start
// ============================================================
function runMeasure(id){
  const isPost=id==='post-measure';
  const inst=document.createElement('div');inst.className='inst';
  inst.textContent='「読み始める」を押した瞬間から計測が始まります。';
  const box=document.createElement('div');
  box.className='reading-box'+(isTate()?' tate':'');
  box.textContent=S.cur.text;
  box.style.cssText+='filter:blur(6px);user-select:none;pointer-events:none;transition:filter .3s ease;';
  const startBtn=document.createElement('button');startBtn.className='start-btn';startBtn.textContent='読み始める ▶';
  const doneBtn=document.createElement('button');doneBtn.className='done-btn';doneBtn.textContent='読み終わった ✓';
  let t0=0;
  startBtn.onclick=()=>{
    box.style.filter='none';box.style.pointerEvents='auto';box.style.userSelect='auto';
    startBtn.style.display='none';doneBtn.style.display='inline-block';t0=Date.now();
  };
  doneBtn.onclick=()=>{
    const wpm=(S.cur.text.length/((Date.now()-t0)/1000))*60;
    if(isPost)S.td.postWpm=wpm;else S.td.preWpm=wpm;
    clearTC();
    const b=document.createElement('div');b.className='badge';
    b.innerHTML=`${Math.round(wpm)}<span style="font-size:1rem"> 文字/分</span><small>${isPost?'事後':'事前'}計測完了</small>`;
    TC().appendChild(b);showNext();
  };
  TC().appendChild(inst);TC().appendChild(box);TC().appendChild(startBtn);TC().appendChild(doneBtn);
}

// ============================================================
// ============================================================
// EYE TRACK — 理論値に基づく7パターン
//
// 追従眼球運動（Smooth Pursuit）推奨速度: 30〜60 deg/s
// サッカード最小潜時: 150〜200ms、連続間隔200ms以上確保
// 眼筋ストレッチ効果: 同方向6〜8往復必要（Ciuffreda 2002）
// 円運動・8の字: 輻輳・開散訓練に有効（CITT研究）
// ============================================================
function runEyeTrack(){
  TC().style.padding='0';TC().style.alignItems='unset';TC().style.justifyContent='unset';

  const lbl=document.createElement('div');
  lbl.style.cssText='position:absolute;top:14px;left:50%;transform:translateX(-50%);background:var(--primary-light);color:var(--primary);padding:5px 18px;border-radius:20px;font-size:.8rem;font-weight:700;z-index:20;white-space:nowrap';
  TC().appendChild(lbl);

  const dot=document.createElement('div');dot.className='tdot';TC().appendChild(dot);

  // [名前, 理論根拠, 色クラス]
  const PAT_META=[
    ['横追従（読書サッカード）','追従800ms/行＋改行ワープ50ms — Rayner(1998)読書視線研究値',''],
    ['Z字スキャン（返り読み抑制）','700ms追従後200ms潜時で次行サッカード',''],
    ['縦往復（縦書き眼筋強化）','上下追従700ms＋右→左へ列移動 — 縦書き読書の視線パターンを再現','red'],
    ['円運動（輻輳・開散訓練）','45°/s追従(1周3.6s)×3 — CITT研究推奨値','green'],
    ['対角線（斜筋ストレッチ）','900ms追従×4 — 上斜筋・下斜筋の柔軟性向上',''],
    ['サッカードジャンプ（反応訓練）','固視250ms+瞬時ジャンプ×20 — 潜時200ms意識','red'],
    ['8の字（複合眼球運動）','リサージュ1:2曲線60ms/step×3 — 全6筋統合訓練','green']
  ];

  let patIdx=0;

  function runPattern(){
    if(patIdx>=PAT_META.length){
      clearTC();
      const b=document.createElement('div');b.className='badge';
      b.innerHTML='眼筋運動<small>全7パターン完了！</small>';TC().appendChild(b);showNext();return;
    }
    const [name,theory,color]=PAT_META[patIdx];
    lbl.textContent=`${patIdx+1}/7：${name}`;
    dot.className='tdot'+(color?' '+color:'');

    requestAnimationFrame(()=>requestAnimationFrame(()=>{
      const r=TC().getBoundingClientRect();
      if(r.width<10){S.timer=setTimeout(runPattern,100);return;}
      const MG=64,CX=r.width/2,CY=r.height/2;
      const W=r.width-2*MG,H=r.height-2*MG;
      let steps=[];

      if(patIdx===0){
        // 横追従＋改行サッカード: 追従800ms、改行50ms
        const LINES=8,SMOOTH=800,RETURN=50;
        for(let rep=0;rep<3;rep++){
          for(let li=0;li<LINES;li++){
            const y=MG+H*(li/(LINES-1));
            steps.push({top:y,left:MG,ms:0,ease:'none'});
            steps.push({top:y,left:MG+W,ms:SMOOTH,ease:`top ${SMOOTH}ms linear,left ${SMOOTH}ms linear`});
            if(!(rep===2&&li===LINES-1)){
              const ny=li+1<LINES?MG+H*((li+1)/(LINES-1)):MG;
              steps.push({top:ny,left:MG,ms:RETURN,ease:'none'});
            }
          }
        }
      } else if(patIdx===1){
        // Z字スキャン: 1行内追従700ms + 行間サッカード200ms
        const ROWS=6,ACROSS=700,JUMP=200;
        for(let rep=0;rep<4;rep++){
          for(let ri=0;ri<ROWS;ri++){
            const y=MG+H*(ri/(ROWS-1));
            const fromX=ri%2===0?MG:MG+W,toX=ri%2===0?MG+W:MG;
            steps.push({top:y,left:fromX,ms:ri===0&&rep===0?0:JUMP,ease:'none'});
            steps.push({top:y,left:toX,ms:ACROSS,ease:`top ${ACROSS}ms linear,left ${ACROSS}ms linear`});
          }
        }
      } else if(patIdx===2){
        // 縦往復（縦書き眼筋強化）:
        // 縦書き読書を再現: 1列内を上→下へ追従、列末で左隣の列頭へワープ
        // 右端列から始めて左へ列を移動しながら上下に往復する
        const COLS=6, VERT=700, WARP=60;
        for(let rep=0;rep<2;rep++){
          for(let ci=0;ci<COLS;ci++){
            const x=(MG+W)-(W*(ci/(COLS-1))); // 右→左へ列を移動
            const fromY=ci%2===0?MG:MG+H;
            const toY=ci%2===0?MG+H:MG;
            // 列頭へ配置（ワープ）
            steps.push({top:fromY,left:x,ms:ci===0&&rep===0?0:WARP,ease:'none'});
            // 列内を上下に追従移動
            steps.push({top:toY,left:x,ms:VERT,ease:`top ${VERT}ms linear,left ${VERT}ms linear`});
          }
        }
      } else if(patIdx===3){
        // 円運動: 45°/s相当 = 8°/step×80ms = 1周3.6秒、3周
        const R=Math.min(CX,CY)*0.72-MG*0.5;
        const STEP_MS=80,DEG_STEP=8;
        for(let rep=0;rep<3;rep++){
          for(let a=0;a<=360;a+=DEG_STEP){
            const rad=a*Math.PI/180;
            steps.push({top:CY+Math.sin(rad)*R,left:CX+Math.cos(rad)*R,
              ms:a===0&&rep===0?0:STEP_MS,ease:`top ${STEP_MS}ms linear,left ${STEP_MS}ms linear`});
          }
        }
      } else if(patIdx===4){
        // 対角線: 900ms追従×4反復、折り返し200ms
        const DIAG=900,PAUSE=200;
        const corners=[[MG,MG],[MG+H,MG+W],[MG,MG+W],[MG+H,MG]];
        for(let rep=0;rep<4;rep++){
          corners.forEach((c,ci)=>{
            steps.push({top:c[0],left:c[1],ms:ci===0&&rep===0?0:PAUSE,ease:'none'});
            const nc=corners[(ci+1)%corners.length];
            steps.push({top:nc[0],left:nc[1],ms:DIAG,ease:`top ${DIAG}ms linear,left ${DIAG}ms linear`});
          });
        }
      } else if(patIdx===5){
        // サッカードジャンプ: 固視250ms + 瞬時ジャンプ、20点
        const PAUSE=250;
        const fixPoints=[
          [CY,CX],[MG,MG],[MG,MG+W],[MG+H,MG],[MG+H,MG+W],
          [CY,MG],[CY,MG+W],[MG,CX],[MG+H,CX]
        ];
        const seq=Array.from({length:20},()=>fixPoints[Math.floor(Math.random()*fixPoints.length)]);
        seq.forEach((pt,i)=>{
          steps.push({top:pt[0],left:pt[1],ms:i===0?0:PAUSE,ease:'none'});
          steps.push({top:pt[0],left:pt[1],ms:250,ease:'none'});
        });
      } else if(patIdx===6){
        // 8の字(リサージュ1:2): 全6眼筋統合、60ms/step×3周
        const RX=W*0.42,RY=H*0.40,STEP_MS=60,DEG_STEP=6;
        for(let rep=0;rep<3;rep++){
          for(let a=0;a<=360;a+=DEG_STEP){
            const t=a*Math.PI/180;
            steps.push({top:CY+RY*Math.sin(2*t)/2,left:CX+RX*Math.sin(t),
              ms:a===0&&rep===0?0:STEP_MS,ease:`top ${STEP_MS}ms linear,left ${STEP_MS}ms linear`});
          }
        }
      }

      let si=0;
      function nextStep(){
        if(si>=steps.length){patIdx++;S.timer=setTimeout(runPattern,500);return;}
        const st=steps[si++];
        dot.style.transition=st.ease==='none'?'none':st.ease;
        dot.style.top=st.top+'px';dot.style.left=st.left+'px';
        S.timer=setTimeout(nextStep,Math.max(st.ms,16));
      }
      dot.style.top=MG+'px';dot.style.left=MG+'px';
      S.timer=setTimeout(nextStep,400);
    }));
  }
  runPattern();
}

// ============================================================
// SCHULTE — 理論値に基づく設計
//
// Schulte(1920): 中央固視で周辺視野を使うことが重要。
// 最適セルサイズ: 視距離50cmで約2〜3度視角 = 65〜80px相当。
// ベンチマーク: 熟練者25秒以下、平均40〜60秒（Taub et al.）
// ============================================================
function runSchulte(){
  const SIZE=5,TOTAL=SIZE*SIZE;
  const nums=Array.from({length:TOTAL},(_,i)=>i+1).sort(()=>Math.random()-.5);
  let next=1,errors=0,t0=Date.now();

  const info=document.createElement('div');info.className='sch-info';
  info.innerHTML=`次に押す：<span style="color:var(--primary);font-size:1.8rem;font-weight:900">1</span>`
    +`　<span style="font-size:.85rem;color:var(--text-muted);font-weight:400">中央付近を見たまま周辺で探す</span>`;

  const timerEl=document.createElement('div');timerEl.className='sch-time';timerEl.textContent='経過時間：0秒';

  const grid=document.createElement('div');grid.className='sch-grid';
  grid.style.gridTemplateColumns=`repeat(${SIZE},72px)`;

  const tInt=setInterval(()=>{timerEl.textContent=`経過時間：${Math.round((Date.now()-t0)/1000)}秒`;},500);

  nums.forEach(n=>{
    const cell=document.createElement('div');cell.className='sch-cell';
    cell.style.fontSize='1.35rem'; // 意図的に小さめ→中央固視を促す
    cell.textContent=n;
    cell.onclick=()=>{
      if(n===next){
        cell.classList.add('hit');cell.onclick=null;next++;
        if(next>TOTAL){
          clearInterval(tInt);
          S.td.schulteTime=Math.round((Date.now()-t0)/1000);S.td.schulteErr=errors;
          const rank=S.td.schulteTime<=25?'優秀':S.td.schulteTime<=40?'良好':S.td.schulteTime<=60?'平均':'要練習';
          setTimeout(()=>{
            clearTC();
            const b=document.createElement('div');b.className='badge';
            b.innerHTML=`${S.td.schulteTime}秒<small>判定：${rank}（ミス${errors}回）</small>`;
            TC().appendChild(b);showNext();
          },400);
        }else{
          info.innerHTML=`次に押す：<span style="color:var(--primary);font-size:1.8rem;font-weight:900">${next}</span>`;
        }
      }else{
        errors++;cell.classList.add('miss');
        setTimeout(()=>cell.classList.remove('miss'),280);
      }
    };
    grid.appendChild(cell);
  });
  TC().appendChild(info);TC().appendChild(timerEl);TC().appendChild(grid);
}

// ============================================================
// PERIPHERAL — 理論値に基づく設計
//
// SOA（固視準備）: 600ms が安定固視の最適値（Rayner 1998）
// フラッシュ時間: 200ms — 周辺視野での数字認識に十分（Parkes et al. 2001）
// 難易度漸増: 前半2個・近め、後半3個・遠め
// ============================================================
function runPeripheral(){
  const MAX=8;let done=0,correct=0;
  S.td.periTotal=MAX;

  function playSet(){
    if(done>=MAX){
      S.td.periScore=correct;clearTC();
      const pct=Math.round(correct/MAX*100);
      const col=pct>=75?'var(--accent2)':pct>=50?'var(--accent)':'var(--danger)';
      const b=document.createElement('div');b.className='badge';
      b.style.borderColor=col;b.style.color=col;
      b.innerHTML=`${correct}/${MAX}<small>正解率${pct}%（周辺視野スコア）</small>`;
      TC().appendChild(b);showNext();return;
    }
    clearTC();TC().style.padding='0';TC().style.alignItems='unset';TC().style.justifyContent='unset';
    const wrap=document.createElement('div');wrap.className='peri-wrap';TC().appendChild(wrap);
    const fd=document.createElement('div');fd.className='focus-dot';wrap.appendChild(fd);
    const lbl=document.createElement('div');
    lbl.style.cssText='position:absolute;top:14px;left:50%;transform:translateX(-50%);font-size:.8rem;color:var(--text-muted);font-weight:700;white-space:nowrap';
    lbl.textContent=`問${done+1}/${MAX} — 赤い点を見つめたまま数字を記憶`;wrap.appendChild(lbl);

    requestAnimationFrame(()=>{
      const r=wrap.getBoundingClientRect();
      const cx=r.width/2,cy=r.height/2;
      const safe=28+16;
      // 難易度漸増: 前半2個近め、後半3個遠め
      const count=done<4?2:3;
      const maxD=Math.min(cx,cy)-safe;
      const minD=done<4?maxD*0.35:maxD*0.55;
      const actualMaxD=done<4?maxD*0.65:maxD;

      const nums=[],els=[];
      const baseA=Array.from({length:count},(_,i)=>(i/count)*Math.PI*2+(Math.PI/count));
      const angles=baseA.map(a=>a+(Math.random()-.5)*0.5);

      for(let i=0;i<count;i++){
        const n=Math.floor(Math.random()*9)+1;nums.push(n);
        const d=minD+Math.random()*(actualMaxD-minD);
        const el=document.createElement('div');el.className='peri-num';
        el.style.top=`${cy+Math.sin(angles[i])*d}px`;
        el.style.left=`${cx+Math.cos(angles[i])*d}px`;
        el.textContent=n;wrap.appendChild(el);els.push(el);
      }
      const sum=nums.reduce((a,b)=>a+b,0);

      S.timer=setTimeout(()=>{                    // SOA 600ms
        els.forEach(e=>e.style.opacity='1');
        S.timer=setTimeout(()=>{                  // フラッシュ 200ms
          els.forEach(e=>e.style.opacity='0');
          S.timer=setTimeout(()=>{                // 作業記憶転送 300ms
            clearTC();
            const card=document.createElement('div');card.className='qcard';card.style.textAlign='center';
            card.innerHTML=`<h3 style="margin-bottom:18px">見えた数字（${count}個）の合計は？</h3>`;
            const pad=document.createElement('div');
            pad.style.cssText='display:grid;grid-template-columns:repeat(3,1fr);gap:10px;max-width:260px;margin:0 auto;';
            const optSet=new Set([sum]);
            const mn=count,mx=count*9;
            while(optSet.size<9){
              const c=optSet.size<4?sum+Math.floor(Math.random()*5)-2
                :mn+Math.floor(Math.random()*(mx-mn+1));
              if(c>=mn&&c<=mx&&c!==sum)optSet.add(c);
            }
            [...optSet].sort((a,b)=>a-b).forEach(o=>{
              const btn=document.createElement('button');
              btn.style.cssText='padding:13px;font-size:1.25rem;font-weight:900;border:2px solid var(--border);border-radius:8px;cursor:pointer;background:var(--surface);font-family:inherit;transition:all .15s;';
              btn.textContent=o;
              btn.onmouseover=()=>{btn.style.background='var(--primary-light)';btn.style.borderColor='var(--primary)';btn.style.color='var(--primary)';};
              btn.onmouseout=()=>{btn.style.background='';btn.style.borderColor='var(--border)';btn.style.color='';};
              btn.onclick=()=>{
                const ok=o===sum;if(ok)correct++;done++;clearTC();
                const fb=document.createElement('div');fb.className='badge';
                fb.style.borderColor=ok?'var(--accent2)':'var(--danger)';
                fb.style.color=ok?'var(--accent2)':'var(--danger)';
                fb.innerHTML=`${ok?'✓ 正解！':'✗ 不正解'}<small>正解は ${sum}</small>`;TC().appendChild(fb);
                S.timer=setTimeout(playSet,800);
              };
              pad.appendChild(btn);
            });
            card.appendChild(pad);TC().appendChild(card);
          },300);
        },200);
      },600);
    });
  }
  playSet();
}

// ============================================================
// GUIDED — 理論値に基づく設計
//
// 最適速度: 現在の読書速度の1.2〜1.5倍（Just & Carpenter 1980）
// 最低表示時間: 100ms（サッカード+処理の下限）
// 前後チャンクの50msオーバーラップで視線連続性を保持
// ============================================================
function runGuided(){
  const chunks=chunkText(S.cur.text);
  const wrap=document.createElement('div');wrap.className='guided-wrap'+(isTate()?' tate':'');
  const spans=chunks.map(c=>{
    const s=document.createElement('span');s.className='gc';s.textContent=c;wrap.appendChild(s);
    return{el:s,len:c.length};
  });
  // 事前計測WPMの1.3倍（理論的最適負荷）、未計測時は260文字/分
  const baseWpm=Math.max(S.td.preWpm||S.wpm||200,150);
  const wpm=baseWpm*1.3;
  let idx=0;

  function next(){
    if(idx>0){
      const prev=spans[idx-1].el;
      setTimeout(()=>prev.classList.remove('lit'),50); // 50msオーバーラップ
    }
    if(idx<spans.length){
      const s=spans[idx];s.el.classList.add('lit');
      if(!isTate()){
        const top=s.el.offsetTop;
        if(top>wrap.scrollTop+wrap.clientHeight*0.6)
          wrap.scrollTo({top:top-wrap.clientHeight*0.3,behavior:'smooth'});
      }else{
        const left=s.el.offsetLeft;
        if(left<wrap.scrollLeft-wrap.clientWidth*0.6)
          wrap.scrollTo({left:left+wrap.clientWidth*0.3,behavior:'smooth'});
      }
      idx++;
      S.timer=setTimeout(next,Math.max(100,(s.len/wpm)*60000));
    }else{
      clearTC();
      const b=document.createElement('div');b.className='badge';
      b.innerHTML='ガイド読み<small>完了！</small>';TC().appendChild(b);showNext();
    }
  }
  countdown(TC(),3,()=>{TC().innerHTML='';TC().appendChild(wrap);next();});
}

// ============================================================
// FLASH — 理論値に基づく設計
//
// RSVP語彙アクセス下限: 150ms（Forster 1970）
// 意味処理（N400成分）: 250〜300ms必要
// 最低表示時間 = 150ms + (文字数-1)×30ms（実験的有効値）
// 段階間500ms空白: 節目の認識に必要
// ============================================================
function runFlash(){
  const chunks=chunkText(S.cur.text);
  const blocks=blockText(S.cur.text);
  const pages=pageText(S.cur.text);
  const tate=isTate();
  // 事前計測の1.5倍、最低600文字/分
  const baseWpm=Math.max(S.td.preWpm||S.wpm||200,300);
  const wpm=baseWpm*1.5;

  const display=document.createElement('div');
  display.className='rsvp phrase'+(tate?' tate-mode':'');
  const sub=document.createElement('div');sub.className='rsvp-sub';

  const SUBS=[
    {label:'文節読み',items:chunks,cls:'phrase',
     minMsFn:len=>Math.max(150,150+(len-1)*30)},    // 150ms+(n-1)×30ms
    {label:'ブロック読み',items:blocks,cls:'block',
     minMsFn:len=>Math.max(250,250+(len-4)*20)},    // 250ms+(n-4)×20ms
    {label:'ページ読み',items:pages,cls:'block',
     minMsFn:len=>Math.max(400,400+(len-10)*15)}    // 400ms+(n-10)×15ms
  ];

  let pi=0;
  function runSub(){
    if(pi>=SUBS.length){
      clearTC();const b=document.createElement('div');b.className='badge';
      b.innerHTML='フラッシュ読書<small>3段階完了！</small>';TC().appendChild(b);showNext();return;
    }
    const p=SUBS[pi];
    display.className='rsvp '+p.cls+(tate?' tate-mode':'');
    sub.textContent=`${p.label}（${pi+1}/3）`;
    let idx=0;
    function show(){
      if(idx<p.items.length){
        const item=p.items[idx++];display.textContent=item;
        const wpmMs=(item.length/wpm)*60000;
        const minMs=p.minMsFn(item.length);
        S.timer=setTimeout(show,Math.max(wpmMs,minMs));
      }else{
        pi++;display.textContent='';sub.textContent='';
        S.timer=setTimeout(runSub,500); // 節目の認識用500ms
      }
    }
    display.textContent=p.label+'…';sub.textContent='';S.timer=setTimeout(show,700);
  }
  countdown(TC(),3,()=>{TC().innerHTML='';TC().appendChild(display);TC().appendChild(sub);runSub();});
}

// ============================================================
// WORD FLASH — 理論値に基づく設計
//
// 語彙アクセス時間: 高頻度語150ms、低頻度語200〜300ms（Forster & Chambers 1973）
// 適正SOA: 200〜250ms（マスキングなし条件）
// 3周反復: Ebbinghaus間隔効果。1周目250ms→2周目200ms→3周目150msと漸減
// ============================================================
function runWordFlash(){
  const kws=(KEYWORDS[S.cur.title]||[]).slice(0,8);
  if(kws.length===0){
    clearTC();const b=document.createElement('div');b.className='badge';
    b.innerHTML='単語フラッシュ<small>スキップ</small>';TC().appendChild(b);showNext();return;
  }
  // 漸減間隔（間隔効果による記憶固定化）
  const INTERVALS=[250,200,150];
  const rounds=INTERVALS.map(ms=>[...kws].sort(()=>Math.random()-.5).map(w=>({word:w,ms})));
  const allItems=rounds.flat();

  const display=document.createElement('div');display.className='wflash';
  const ctx=document.createElement('div');ctx.className='wflash-ctx';
  const counter=document.createElement('div');
  counter.style.cssText='font-size:.8rem;color:var(--text-light);text-align:center;margin-top:4px;';
  let idx=0;

  function show(){
    if(idx<allItems.length){
      const {word,ms}=allItems[idx];
      display.textContent=word;
      ctx.textContent=`第${Math.floor(idx/kws.length)+1}周（${ms}ms/語）`;
      counter.textContent=`${idx+1}/${allItems.length}`;
      idx++;S.timer=setTimeout(show,ms);
    }else{
      clearTC();const b=document.createElement('div');b.className='badge';
      b.innerHTML=`${kws.length}語×3周<small>単語フラッシュ完了！</small>`;TC().appendChild(b);showNext();
    }
  }
  countdown(TC(),3,()=>{TC().innerHTML='';TC().appendChild(display);TC().appendChild(ctx);TC().appendChild(counter);show();});
}

// ============================================================
// SPAN TEST — 理論値に基づく設計
//
// 視覚スパン: 通常成人2〜5文字（O'Regan & Jacobs 1992）
// 表示時間: 2文字=100ms、+1文字ごとに+50ms（タキストスコープ標準: Woodworth 1938）
// 採点: 先頭からの連続一致数で視野の偏りも診断
// ============================================================
function runSpan(){
  const CHARS='あいうえおかきくけこさしすせそたちつてとなにぬねのはひふへほまみむめもやゆよらりるれろわをん';
  const ROUNDS=6;
  const spanLens=[2,3,4,5,6,7];
  // 表示時間: 100ms + (len-2)×50ms（タキストスコープ標準）
  const displayMs=len=>100+(len-2)*50;
  let round=0,totalScore=0,maxSpan=0;

  function playRound(){
    if(round>=ROUNDS){
      S.td.spanScore=Math.round(totalScore/ROUNDS*10)/10;
      clearTC();
      const b=document.createElement('div');b.className='badge';
      b.innerHTML=`平均${S.td.spanScore}文字<small>最大${maxSpan}文字（視野スパン完了）</small>`;
      TC().appendChild(b);showNext();return;
    }
    const len=spanLens[round];
    let str='';
    for(let i=0;i<len;i++)str+=CHARS[Math.floor(Math.random()*CHARS.length)];

    clearTC();
    const cntEl=document.createElement('div');TC().appendChild(cntEl);
    let c=2;
    const tick=()=>{
      cntEl.innerHTML=`<div class="countdown" style="font-size:3rem">${c}</div>
        <div style="color:var(--text-muted);font-size:.85rem;margin-top:8px">
          問${round+1}/${ROUNDS}（${len}文字　表示${displayMs(len)}ms）
        </div>`;
      if(--c>=0){S.timer=setTimeout(tick,700);}else{showString();}
    };tick();

    function showString(){
      TC().innerHTML='';
      const sw=document.createElement('div');sw.className='span-word';
      sw.style.letterSpacing='0.15em';
      sw.textContent=str;TC().appendChild(sw);

      S.timer=setTimeout(()=>{
        TC().innerHTML='';
        const prompt=document.createElement('div');
        prompt.style.cssText='text-align:center;width:100%;max-width:400px;';
        prompt.innerHTML=`<p style="font-size:.9rem;color:var(--text-muted);margin-bottom:12px">
          見えた文字を順番に入力<br>
          <span style="font-size:.78rem">（先頭から正確に入力するほど高得点）</span></p>`;
        const inp=document.createElement('input');inp.className='span-input';inp.type='text';
        inp.placeholder='入力…';inp.maxLength=len+2;
        inp.setAttribute('autocomplete','off');inp.setAttribute('autocorrect','off');
        const submitBtn=document.createElement('button');
        submitBtn.style.cssText='display:block;margin:12px auto 0;background:var(--primary);color:#fff;border:none;border-radius:20px;padding:9px 28px;font-size:.9rem;font-weight:700;font-family:inherit;cursor:pointer;';
        submitBtn.textContent='決定';
        const submit=()=>{
          const ans=inp.value.trim();
          let matched=0;
          // 先頭から連続一致（視野偏り診断）
          for(let i=0;i<Math.min(ans.length,str.length);i++){
            if(ans[i]===str[i])matched++;else break;
          }
          if(matched>maxSpan)maxSpan=matched;
          totalScore+=matched;round++;
          TC().innerHTML='';
          const fb=document.createElement('div');fb.className='badge';
          const perfect=matched===str.length;
          const col=perfect?'var(--accent2)':matched>0?'var(--accent)':'var(--danger)';
          fb.style.borderColor=col;fb.style.color=col;
          fb.innerHTML=`${matched}/${str.length}文字<small>正解：「${str}」</small>`;
          TC().appendChild(fb);
          S.timer=setTimeout(playRound,1100);
        };
        submitBtn.onclick=submit;
        inp.addEventListener('keydown',e=>{if(e.key==='Enter')submit();});
        prompt.appendChild(inp);prompt.appendChild(submitBtn);TC().appendChild(prompt);
        setTimeout(()=>inp.focus(),50);
      },displayMs(len)); // ★ 理論的表示時間
    }
  }
  playRound();
}

// ============================================================
// QUIZ
// ============================================================
function runQuiz(){
  const q=S.quiz;
  const card=document.createElement('div');card.className='qcard';
  const h=document.createElement('h3');h.textContent=q.q;
  const opts=document.createElement('div');opts.className='qopts';
  let answered=false;
  q.opts.forEach((o,i)=>{
    const btn=document.createElement('button');btn.className='qopt';btn.textContent=o;
    btn.onclick=()=>{
      if(answered)return;answered=true;
      const ok=i===q.ans;S.td.quizOk=ok;
      opts.querySelectorAll('button').forEach((b,bi)=>{
        b.onclick=null;if(bi===q.ans)b.classList.add('ok');else if(bi===i&&!ok)b.classList.add('ng');
      });
      const expl=document.createElement('div');expl.className='qexpl';expl.textContent=q.expl;
      card.appendChild(expl);showNext();
    };
    opts.appendChild(btn);
  });
  card.appendChild(h);card.appendChild(opts);TC().appendChild(card);
}

// ============================================================
// EXPAND CIRCLE — 視野拡張サークル（みんなの速読式）
// 中央固視点→徐々に拡大するリング+ドット→視野を広げる感覚を養う
// ============================================================
function runExpandCircle(){
  TC().style.padding='0';TC().style.alignItems='unset';TC().style.justifyContent='unset';

  // Canvas で描画
  const canvas=document.createElement('canvas');
  canvas.style.cssText='position:absolute;inset:0;width:100%;height:100%;';
  TC().appendChild(canvas);

  // ラベル
  const lbl=document.createElement('div');
  lbl.style.cssText='position:absolute;top:14px;left:50%;transform:translateX(-50%);background:var(--primary-light);color:var(--primary);padding:5px 18px;border-radius:20px;font-size:.8rem;font-weight:700;z-index:20;white-space:nowrap;pointer-events:none';
  lbl.textContent='中央の点だけを見つめ、視野を広げてください';
  TC().appendChild(lbl);

  const SETS=5;         // 拡張セット数（小→大）
  const DOTS_PER_RING=8;// 各リングのドット数
  const RING_PAUSE=1200; // 各リングで止まる時間(ms)
  const EXPAND_MS=800;   // リング拡大にかかる時間(ms)
  const HOLD_MS=600;     // 最大まで広がった後の保持時間

  let animId=null;

  function resize(){
    canvas.width=canvas.offsetWidth;
    canvas.height=canvas.offsetHeight;
  }
  resize();
  window.addEventListener('resize',resize);

  const ctx2=canvas.getContext('2d');

  // 各セット: maxRadius が段階的に大きくなる
  function getMaxRadius(setIdx){
    const r=TC().getBoundingClientRect();
    const base=Math.min(r.width,r.height)*0.08;
    const max=Math.min(r.width,r.height)*0.44;
    return base+(max-base)*(setIdx/(SETS-1));
  }

  function drawFrame(cx,cy,rings){
    ctx2.clearRect(0,0,canvas.width,canvas.height);

    // 背景を白に
    ctx2.fillStyle='#fff';
    ctx2.fillRect(0,0,canvas.width,canvas.height);

    // 各リング描画
    rings.forEach(ring=>{
      if(ring.r<=0)return;
      const alpha=ring.alpha;

      // リングの円弧
      ctx2.beginPath();
      ctx2.arc(cx,cy,ring.r,0,Math.PI*2);
      ctx2.strokeStyle=`rgba(26,86,219,${alpha*0.35})`;
      ctx2.lineWidth=1.5;
      ctx2.stroke();

      // リング上のドット
      for(let d=0;d<DOTS_PER_RING;d++){
        const angle=(d/DOTS_PER_RING)*Math.PI*2 + ring.rotation;
        const dx=cx+Math.cos(angle)*ring.r;
        const dy=cy+Math.sin(angle)*ring.r;
        const dotR=Math.max(3,6*(1-ring.r/Math.min(canvas.width,canvas.height)*0.5));
        ctx2.beginPath();
        ctx2.arc(dx,dy,dotR,0,Math.PI*2);
        ctx2.fillStyle=`rgba(26,86,219,${alpha*0.8})`;
        ctx2.fill();
      }
    });

    // 固視点（中央の赤い点）— 常に最前面
    ctx2.beginPath();
    ctx2.arc(cx,cy,7,0,Math.PI*2);
    ctx2.fillStyle='#ef4444';
    ctx2.fill();
    ctx2.beginPath();
    ctx2.arc(cx,cy,12,0,Math.PI*2);
    ctx2.strokeStyle='rgba(239,68,68,0.3)';
    ctx2.lineWidth=3;
    ctx2.stroke();
  }

  let setIdx=0;
  let rotation=0;

  function runSet(){
    if(setIdx>=SETS){
      // 完了アニメーション: 全リングをフェードアウト
      let alpha=1;
      const fadeOut=()=>{
        alpha-=0.04;
        if(alpha<=0){
          cancelAnimationFrame(animId);
          window.removeEventListener('resize',resize);
          clearTC();
          const b=document.createElement('div');b.className='badge';
          b.innerHTML='⭕ 視野拡張サークル<small>完了！視野が広がりました</small>';
          TC().appendChild(b);showNext();return;
        }
        const r=TC().getBoundingClientRect();
        const cx=r.width/2,cy=r.height/2;
        const rings=Array.from({length:SETS},(_,i)=>({r:getMaxRadius(i),alpha,rotation:rotation+i*0.3}));
        drawFrame(cx,cy,rings);
        animId=requestAnimationFrame(fadeOut);
      };
      fadeOut();return;
    }

    const r=TC().getBoundingClientRect();
    const cx=r.width/2,cy=r.height/2;
    const targetR=getMaxRadius(setIdx);

    // 過去のリング（既に展開済み）
    const prevRings=Array.from({length:setIdx},(_,i)=>({r:getMaxRadius(i),alpha:0.5,rotation:rotation+i*0.3}));

    // 現在のリングを 0 → targetR に拡張
    const startMs=performance.now();
    let currentR=0;

    lbl.textContent=`視野拡張 ${setIdx+1}/${SETS} — 中央の点を見つめ、視野を広げて`;

    function animate(now){
      const elapsed=now-startMs;
      const progress=Math.min(elapsed/EXPAND_MS,1);
      // ease-out
      currentR=targetR*(1-Math.pow(1-progress,3));
      rotation+=0.002;

      const allRings=[
        ...prevRings.map(pr=>({...pr,rotation:pr.rotation+rotation*0.5})),
        {r:currentR,alpha:progress*0.9+0.1,rotation}
      ];
      drawFrame(cx,cy,allRings);

      if(progress<1){
        animId=requestAnimationFrame(animate);
      }else{
        // 最大到達後 HOLD_MS 保持→次セット
        const holdRings=[
          ...prevRings.map(pr=>({...pr,rotation:pr.rotation+rotation*0.5})),
          {r:targetR,alpha:1,rotation}
        ];
        // 保持中もゆっくり回転
        const holdStart=performance.now();
        function holdAnim(now2){
          rotation+=0.003;
          const hr=[
            ...prevRings.map(pr=>({...pr,rotation:pr.rotation+rotation*0.3})),
            {r:targetR,alpha:1,rotation}
          ];
          drawFrame(cx,cy,hr);
          if(now2-holdStart<HOLD_MS+RING_PAUSE){animId=requestAnimationFrame(holdAnim);}
          else{setIdx++;S.timer=setTimeout(runSet,100);}
        }
        animId=requestAnimationFrame(holdAnim);
      }
    }
    animId=requestAnimationFrame(animate);
  }

  // TC サイズ確定を待ってから開始
  requestAnimationFrame(()=>requestAnimationFrame(()=>{resize();runSet();}));
}

// ============================================================
// IMAGE QUIZ
// ============================================================
function runImageQuiz(){
  const iq=S.iq;
  const card=document.createElement('div');card.className='qcard';
  card.innerHTML=`<p style="color:var(--text-muted);font-size:.82rem;margin-bottom:10px">📖 読んだ文章のキーワード</p><div class="imgkw">${iq.kw}</div><p style="color:var(--text-muted);font-size:.86rem;margin-top:12px">このキーワードが頭に浮かんだとき、あなたの脳内に現れた場面は？</p>`;
  TC().appendChild(card);
  S.timer=setTimeout(()=>{
    card.innerHTML=`<p style="color:var(--text-muted);font-size:.8rem;margin-bottom:6px">キーワード：<strong>${iq.kw}</strong></p><h3 style="margin-bottom:16px">${iq.q}</h3>`;
    const opts=document.createElement('div');opts.className='qopts';
    let answered=false;
    iq.opts.forEach((o,i)=>{
      const btn=document.createElement('button');btn.className='qopt';btn.style.textAlign='left';btn.style.fontSize='.88rem';btn.textContent=o;
      btn.onclick=()=>{
        if(answered)return;answered=true;
        const ok=i===iq.ans;S.td.iqOk=ok;
        opts.querySelectorAll('button').forEach((b,bi)=>{b.onclick=null;if(bi===iq.ans)b.classList.add('ok');else if(bi===i&&!ok)b.classList.add('ng');});
        const expl=document.createElement('div');expl.className='qexpl';expl.textContent=iq.expl;card.appendChild(expl);showNext();
      };
      opts.appendChild(btn);
    });
    card.appendChild(opts);
  },1200);
}

// ============================================================
// FINISH
// ============================================================
function finishTraining(){
  setProg(100);stopTimer();
  const td=S.td;
  if(td.postWpm>0)S.wpm=S.wpm?(S.wpm+td.postWpm)/2:td.postWpm;
  else if(td.preWpm>0)S.wpm=S.wpm?(S.wpm+td.preWpm)/2:td.preWpm;
  const periRate=td.periTotal>0?td.periScore/td.periTotal:.5;
  const periBonus=1+periRate*.10;
  const quizBonus=td.quizOk===true?1.0:td.quizOk===false?.7:1.0;
  const iqBonus=td.iqOk===true?1.05:1.0;
  const spanBonus=td.spanScore>0?1+Math.min(td.spanScore/10,.08):1.0;
  S.effectiveWpm=S.wpm*quizBonus*periBonus*iqBonus*spanBonus;
  S.level=Math.max(1,Math.floor(S.wpm/100)+1);S.sessions++;
  const now=new Date();
  S.history.push({
    date:`${now.getMonth()+1}/${now.getDate()} ${now.getHours()}:${String(now.getMinutes()).padStart(2,'0')}`,
    mode:S.readMode,title:S.cur.title,
    kind:S.phases.length>1?'フル':TITLES[S.phases[0]]?.replace(/【.*?】/,'').trim()||S.phases[0],
    wpm:td.postWpm||td.preWpm||null,
    effectiveWpm:S.effectiveWpm||null,
    quiz:td.quizOk,ok:td.quizOk!==false
  });
  if(S.history.length>60)S.history.shift();
  saveUser();updateDash();

  clearTC();hideNext();setTitle('トレーニング結果');
  const card=document.createElement('div');card.className='result-card';
  const rows=[];
  rows.push(['読み方モード',S.readMode==='tate'?'縦読み':'横読み','']);
  if(td.preWpm)rows.push(['事前速度',Math.round(td.preWpm)+'文字/分','']);
  if(td.postWpm)rows.push(['事後速度',Math.round(td.postWpm)+'文字/分','up']);
  if(S.wpm)rows.push(['現在の速度',Math.round(S.wpm)+'文字/分','hi']);
  if(S.effectiveWpm)rows.push(['実効速度',Math.round(S.effectiveWpm)+'文字/分','hi']);
  if(td.schulteTime)rows.push(['シュルテ',td.schulteTime+'秒（ミス'+td.schulteErr+'回）','']);
  if(td.periTotal)rows.push(['周辺視野',`${td.periScore}/${td.periTotal}`,'']);
  if(td.spanScore)rows.push(['視野スパン',`平均${td.spanScore}文字`,'']);
  if(td.quizOk!==undefined)rows.push(['理解度クイズ',td.quizOk?'正解 ✅':'不正解 ❌','']);
  if(td.iqOk!==undefined)rows.push(['右脳イメージ',td.iqOk?'正解 ✅（+5%）':'不正解','']);
  rows.push(['レベル',S.level,'hi']);
  card.innerHTML=`<h2>🎉 完了！</h2>`+
    rows.map(([k,v,c])=>`<div class="rrow"><span class="rkey">${k}</span><span class="rval ${c}">${v}</span></div>`).join('')+
    `<button class="back-btn" onclick="quitTraining()">ダッシュボードへ戻る</button>`;
  TC().appendChild(card);
}