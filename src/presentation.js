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
  {
    id: 'intro_1',
    title: 'intro_1',
    personProps: {
      sun: {
        animation: 'HandRaising',
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
      },
    },
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
      },
    },
    text: 'その前に、チームメンバーの紹介をさせていただきます。',
    audio: '/audios/0_intro_4.ogg',
    lip: '/lips/0_intro_4.json',
  },
  // ----------------------------------
  {
    id: '1_self_sun',
    title: '自己紹介（孫）',
    personProps: {
      sun: {
        animation: 'HandRaising',
      },
    },
    camera: cameraSunFocus,
    text: 'こんにちは！私は孫です。',
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
      },
    },
    camera: cameraYasushiFocus,
    text: 'こんにちは！私は木村康志です。',
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
      },
    },
    camera: cameraYatoFocus,
    text: 'こんにちは！私は矢戸康志です。',
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
      },
    },
    camera: cameraMinhyokFocus,
    text: 'こんにちは！私はミンヒョクです。',
    audio: '/audios/1_self_minhyok.ogg',
    lip: '/lips/1_self_minhyok.json',
  },
  // ----------------------------------
  {
    id: 'end_self_introduction',
    title: '自己紹介終了',
  },
];
