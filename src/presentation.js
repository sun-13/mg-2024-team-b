/*
 * Memo:
 * https://elevenlabs.io/app/speech-synthesis
 * sun : Harry
 * Yasushi : George
 * Yato : Sarah
 * Minhyuk : Thomas
 */

const cameraSunFocus = {
  position: {
    x: -3,
    y: 0,
    z: 4,
  },
  lookAt: {
    x: -2,
    y: 0,
    z: 0,
  },
};

const cameraYasushiFocus = {
  position: {
    x: -1,
    y: 0,
    z: 4,
  },
  lookAt: {
    x: -0.5,
    y: 0,
    z: 0,
  },
};

const cameraYatoFocus = {
  position: {
    x: 1,
    y: 0,
    z: 4,
  },
  lookAt: {
    x: 0.5,
    y: 0,
    z: 0,
  },
};

const cameraMinhyukFocus = {
  position: {
    x: 3,
    y: 0,
    z: 4,
  },
  lookAt: {
    x: 2,
    y: 0,
    z: 0,
  },
};

export const presentation = [
  /** ----------------------------------
   * オープニング
  ---------------------------------- */
  {
    id: 'intro_1',
    title: '挨拶(1)',
    personProps: {
      sun: {
        animation: 'HandRaising',
        isSpeaking: true,
      },
    },
    text: 'こんにちは。TeamBです。',
    audio: '/audios/0_intro_1.ogg',
    lip: '/lips/0_intro_1.json',
  },
  // ----------------------------------
  {
    id: 'intro_2',
    title: '挨拶(2)',
    personProps: {
      yasushi: {
        animation: 'HandRaising',
        isSpeaking: true,
      },
    },
    camera: cameraYasushiFocus,
    text: '今回チームで取り組んだテーマは「Lip Sync」です。Lip Syncって何かって？ちょうどいま、私がやっていることです。トークスクリプトに合わせて、音声をAIで生成し、さらに3Dキャラクターの口の動きを自動生成しています。すごいでしょ？',
    audio: '/audios/0_intro_2.ogg',
    lip: '/lips/0_intro_2.json',
  },
  // ----------------------------------
  {
    id: 'intro_3',
    title: '挨拶(3)',
    personProps: {
      yato: {
        animation: 'HandRaising',
        isSpeaking: true,
      },
    },
    text: '詳しいことは、このあと皆で説明しますね。',
    audio: '/audios/0_intro_3.ogg',
    lip: '/lips/0_intro_3.json',
  },
  // ----------------------------------
  {
    id: 'intro_4',
    title: '挨拶(4)',
    personProps: {
      minhyuk: {
        animation: 'HandRaising',
        isSpeaking: true,
      },
    },
    text: 'その前に、チームメンバーの紹介をさせていただきます。',
    audio: '/audios/0_intro_4.ogg',
    lip: '/lips/0_intro_4.json',
  },
  /** ----------------------------------
   * 自己紹介
  ---------------------------------- */
  {
    id: '1_self_sun',
    title: '自己紹介（孫）',
    personProps: {
      sun: {
        animation: 'HandRaising',
        isSpeaking: true,
      },
    },
    camera: cameraSunFocus,
    text: 'こんにちは。孫です。最近はまっていることは料理を作ることです。新しい中華炒めフライパンを買いました。よろしくお願いします。',
    audio: '/audios/1_self_sun.ogg',
    lip: '/lips/1_self_sun.json',
  },
  // ----------------------------------
  {
    id: '1_self_yasushi',
    title: '自己紹介（康志）',
    personProps: {
      yasushi: {
        animation: 'HandRaising',
        isSpeaking: true,
      },
    },
    camera: cameraYasushiFocus,
    text: 'こんにちは。木村康志です。本アプリのフロントの実装をしました。好きな食べ物は秋刀魚の塩焼きです。よろしくお願いします。',
    audio: '/audios/1_self_yasushi.ogg',
    lip: '/lips/1_self_yasushi.json',
  },
  // ----------------------------------
  {
    id: '1_self_yato',
    title: '自己紹介（矢戸）',
    personProps: {
      yato: {
        animation: 'HandRaising',
        isSpeaking: true,
      },
    },
    camera: cameraYatoFocus,
    text: 'こんにちは。矢戸知子です。チームでは、読み上げるスクリプト案を担当しました。最近パン教室に通い始めました。よろしくお願いします。',
    audio: '/audios/1_self_yato.ogg',
    lip: '/lips/1_self_yato.json',
  },
  // ----------------------------------
  {
    id: '1_self_minhyuk',
    title: '自己紹介（ミンヒョク）',
    personProps: {
      minhyuk: {
        animation: 'HandRaising',
        isSpeaking: true,
      },
    },
    camera: cameraMinhyukFocus,
    text: 'こんにちは。ペミンヒョクです。今回ページデザインを担当しました。アップルが大好きで市内に行くと是非アップルストアに行きます。もしアップルが好きな方がいらっしゃれば、一緒に行きましょう。よろしくお願いします。',
    audio: '/audios/1_self_minhyuk.ogg',
    lip: '/lips/1_self_minhyuk.json',
  },
  /** ----------------------------------
   * ROOV紹介
  ---------------------------------- */
  {
    id: '2_ROOV_1',
    title: "ROOV紹介(1)",
    personProps: {
      sun: {
        animation: 'Talking',
        isSpeaking: true,
      },
    },
    camera: cameraSunFocus,
    text: 'いつでも・どこにいても・誰とでも。<br /><br />ROOVは、住宅事業DXを加速する3Dコミュニケーション・プラットフォームです。空間イメージの共有を可能にすることでマンションや戸建などの住宅事業が抱えていた課題を解決します。',
    audio: '/audios/2_roov_1.ogg',
    lip: '/lips/2_roov_1.json',
  },
  // ----------------------------------
  {
    id: '2_ROOV_2',
    title: 'ROOV紹介(2)',
    personProps: {
      yasushi: {
        animation: 'Talking',
        isSpeaking: true,
      },
    },
    camera: cameraYasushiFocus,
    text: '住まいの購入に必要なすべての情報が整理された「ROOV compass」と、まるでそこに住んでいるような体験ができる「ROOV walk」によって、販売、設計、納品に至るまでのあらゆる局面で「的を射た」やり取りを実現し、御社のDXを支援します。',
    audio: '/audios/2_roov_2.ogg',
    lip: '/lips/2_roov_2.json',
  },
  // ----------------------------------
  {
    id: '2_ROOV_3',
    title: 'ROOV紹介(3)',
    personProps: {
      yato: {
        animation: 'Talking',
        isSpeaking: true,
      },
    },
    camera: cameraYatoFocus,
    text: 'また、お部屋だけでなく建物、周辺環境までを体験できる「ROOV .space」。新たに今春、提供を開始しました。あらゆるカメラアングルで空間イメージができ、まるで本当にその場で見ているような感覚で、現実以上の自由さで、新たなデジタルツイン体験できます。',
    audio: '/audios/2_roov_3.ogg',
    lip: '/lips/2_roov_3.json',
  },
  // ----------------------------------
  {
    id: '2_ROOV_4',
    title: 'ROOV紹介(4)',
    personProps: {
      minhyuk: {
        animation: 'Talking',
        isSpeaking: true,
      },
    },
    camera: cameraMinhyukFocus,
    text: '空間のことは、空間でやりとりしたほうがいい。<br /><br />デジタルツインでの新たな体験を、お手元のブラウザで。さあ、ROOVを始めてみませんか。',
    audio: '/audios/2_roov_4.ogg',
    lip: '/lips/2_roov_4.json',
  },
  /** ----------------------------------
   * 架空の物件紹介
  ---------------------------------- */
  {
    id: '3_SPC_1',
    title: "架空の物件紹介(1)",
    personProps: {
      sun: {
        animation: 'Talking',
        isSpeaking: true,
      },
    },
    camera: cameraSunFocus,
    text: '日本のファッション、文化の中心地、表参道。<br /><br />トレンドを発信し続けるストリートに位置する、「スタイルポートコート」へようこそ。',
    audio: '/audios/3_spc_1.ogg',
    lip: '/lips/3_spc_1.json',
  },
  // ----------------------------------
  {
    id: '3_SPC_2',
    title: "架空の物件紹介(2)",
    personProps: {
      yasushi: {
        animation: 'Talking',
        isSpeaking: true,
      },
    },
    camera: cameraYasushiFocus,
    text: 'ここは、時代の最先端を飾る人々に愛されてきた土地。私たちは、そのような時代のうねりの中心地で、常に輝き、色あせないような場所、どんな時代でも受け入れられる邸宅に住む夢を実現したいと考えました。',
    audio: '/audios/3_spc_2.ogg',
    lip: '/lips/3_spc_2.json',
  },
  // ----------------------------------
  {
    id: '3_SPC_3',
    title: "架空の物件紹介(3)",
    personProps: {
      yato: {
        animation: 'Talking',
        isSpeaking: true,
      },
    },
    camera: cameraYatoFocus,
    text: '住まう方の矜持を映し出す、真っ白で格調高いたたずまい。煙突のようにそびえたつ特徴的なフォルムは、だれの記憶にも残ることでしょう。タイル張りのエントランスを抜けると、外の喧騒が嘘のように、静謐な空間が広がります。あなただけの真っ白な空間に、どんな日々を描きましょうか。',
    audio: '/audios/3_spc_3.ogg',
    lip: '/lips/3_spc_3.json',
  },
  // ----------------------------------
  {
    id: '3_SPC_4',
    title: "架空の物件紹介(4)",
    personProps: {
      minhyuk: {
        animation: 'Talking',
        isSpeaking: true,
      },
    },
    camera: cameraMinhyukFocus,
    text: '表参道駅より徒歩2分の好立地。<br /><br />日々変化し続けるこの表参道という土地に、あなたも住んでみませんか。',
    audio: '/audios/3_spc_4.ogg',
    lip: '/lips/3_spc_4.json',
  },
  /** ----------------------------------
   * 早口言葉
  ---------------------------------- */
  {
    id: '3_LT_1',
    title: "早口言葉(1)",
    personProps: {
      yato: {
        animation: 'Talking',
        isSpeaking: true,
      },
    },
    camera: cameraYatoFocus,
    text: '皆さん、早口言葉はご存知ですか？今日は、Lip Sync の私でも早口言葉が言えるところをお見せしましょう。<br />せっかくメンバーが多国籍なので、早口言葉も各国のを紹介します。<br /><br />まずは韓国から。',
    audio: '/audios/4_lt_1.ogg',
    lip: '/lips/4_lt_1.json',
  },
  // ----------------------------------
  {
    id: '3_LT_2',
    title: "早口言葉(2) (韓国語)",
    personProps: {
      minhyuk: {
        animation: 'Talking',
        isSpeaking: true,
      },
    },
    camera: cameraMinhyukFocus,
    text: '단단한 단 당근과 단단한 안 단 당근, 안 단단한 단 당근과 안 단단한 안 단 당근.',
    audio: '/audios/4_lt_2.ogg',
    lip: '/lips/4_lt_2.json',
  },
  // ----------------------------------
  {
    id: '3_LT_3',
    title: "早口言葉(3) (韓国語の意味)",
    personProps: {
      minhyuk: {
        animation: 'Talking',
        isSpeaking: true,
      },
    },
    camera: cameraMinhyukFocus,
    text: '意味は、「硬くて甘いニンジンと硬くて甘くないニンジン、硬くなくて甘いニンジンと硬くなくて甘くないニンジン」です。ニンジンが好きなんですね。',
    audio: '/audios/4_lt_3.ogg',
    lip: '/lips/4_lt_3.json',
  },
  // ----------------------------------
  {
    id: '3_LT_4',
    title: "早口言葉(4) (次は)",
    personProps: {
      yato: {
        animation: 'Talking',
        isSpeaking: true,
      },
    },
    camera: cameraYatoFocus,
    text: '次は中国から。',
    audio: '/audios/4_lt_4.ogg',
    lip: '/lips/4_lt_4.json',
  },
  // ----------------------------------
  {
    id: '3_LT_5',
    title: "早口言葉(5) (中国語)",
    personProps: {
      sun: {
        animation: 'Talking',
        isSpeaking: true,
      },
    },
    camera: cameraSunFocus,
    text: '石老师吃柿子、一天吃四个柿子。十天吃四十个柿子 。',
    audio: '/audios/4_lt_5.ogg',
    lip: '/lips/4_lt_5.json',
  },
  // ----------------------------------
  {
    id: '3_LT_6',
    title: "早口言葉(6) (中国語の意味)",
    personProps: {
      sun: {
        animation: 'Talking',
        isSpeaking: true,
      },
    },
    camera: cameraSunFocus,
    text: '意味は、「石（せき）先生は柿を食べている。1日で柿を4個食べた。10日で柿を40個食べた。」です。柿が好きなんですね。',
    audio: '/audios/4_lt_6.ogg',
    lip: '/lips/4_lt_6.json',
  },
  // ----------------------------------
  {
    id: '3_LT_7',
    title: "早口言葉(7) (最後は)",
    personProps: {
      yato: {
        animation: 'Talking',
        isSpeaking: true,
      },
    },
    camera: cameraYatoFocus,
    text: '最後は日本から。',
    audio: '/audios/4_lt_7.ogg',
    lip: '/lips/4_lt_7.json',
  },
  // ----------------------------------
  {
    id: '3_LT_8',
    title: "早口言葉(8) (日本語)",
    personProps: {
      yasushi: {
        animation: 'Talking',
        isSpeaking: true,
      },
    },
    camera: cameraYasushiFocus,
    text: 'この竹垣に竹立てかけたのは竹立てかけたかったから竹立てかけた。',
    audio: '/audios/4_lt_8.ogg',
    lip: '/lips/4_lt_8.json',
  },
  // ----------------------------------
  {
    id: '3_LT_9',
    title: "早口言葉(9) (日本語の意味)",
    personProps: {
      yasushi: {
        animation: 'Talking',
        isSpeaking: true,
      },
    },
    camera: cameraYasushiFocus,
    text: '意味は、「そんなに怒らないでください。つい、出来心だったんです」です。',
    audio: '/audios/4_lt_9.ogg',
    lip: '/lips/4_lt_9.json',
  },
  // ----------------------------------
  {
    id: '3_LT_10',
    title: "早口言葉(10) (終了)",
    personProps: {
      yato: {
        animation: 'Talking',
        isSpeaking: true,
      },
    },
    camera: cameraYatoFocus,
    text: 'どうです、上手に言えてるでしょう？皆さんも私に負けないよう練習してみてくださいね。',
    audio: '/audios/4_lt_10.ogg',
    lip: '/lips/4_lt_10.json',
  },
];


export const slideShow = [
  {
    id: 'cover',
    title: 'cover',
    image: '/slides/cover.png',
  },
  {
    id: 'what-is-lip-sync',
    title: 'What is Lip Sync?',
    image: '/slides/what-is-lip-sync.png',
  }
];
