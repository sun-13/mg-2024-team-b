/*
 * Memo:
 * https://elevenlabs.io/app/speech-synthesis
 * sun : Harry
 * Yasushi : George
 * Yato : Sarah
 * Minhyok : Thomas
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

const cameraMinhyokFocus = {
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
    title: 'intro_1',
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
    title: 'intro_2',
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
    title: 'intro_3',
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
    title: 'intro_4',
    personProps: {
      minhyok: {
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
    id: '1_self_minhyok',
    title: '自己紹介（ミンヒョク）',
    personProps: {
      minhyok: {
        animation: 'HandRaising',
        isSpeaking: true,
      },
    },
    camera: cameraMinhyokFocus,
    text: 'こんにちは。ペミンヒョクです。今回ページデザインを担当しました。アップルが大好きで市内に行くと是非アップルストアに行きます。もしアップルが好きな方がいらっしゃれば、一緒に行きましょう。よろしくお願いします。',
    audio: '/audios/1_self_minhyok.ogg',
    lip: '/lips/1_self_minhyok.json',
  },
  // ----------------------------------
  {
    id: 'end_self_introduction',
    title: '自己紹介終了',
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
      minhyok: {
        animation: 'Talking',
        isSpeaking: true,
      },
    },
    camera: cameraMinhyokFocus,
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
      minhyok: {
        animation: 'Talking',
        isSpeaking: true,
      },
    },
    camera: cameraMinhyokFocus,
    text: '表参道駅より徒歩2分の好立地。<br /><br />日々変化し続けるこの表参道という土地に、あなたも住んでみませんか。',
    audio: '/audios/3_spc_4.ogg',
    lip: '/lips/3_spc_4.json',
  },
];
