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
    id: 'sun_self_introduction',
    title: '自己紹介（孫）',
    personProps: {
      sun: {
        animation: 'HandRaising',
      },
    },
    camera: cameraSunFocus,
    text: 'こんにちは！私は孫です。',
    audio: '/audios/sun_self_introduction.ogg',
    lip: '/lips/sun_self_introduction.json',
  },
  // ----------------------------------
  {
    id: 'yasushi_self_introduction',
    title: '自己紹介（康志）',
    personProps: {
      yasushi: {
        animation: 'HandRaising',
      },
    },
    camera: cameraYasushiFocus,
    text: 'こんにちは！私は木村康志です。',
    audio: '/audios/yasushi_self_introduction.ogg',
    lip: '/lips/yasushi_self_introduction.json',
  },
  // ----------------------------------
  {
    id: 'yato_self_introduction',
    title: '自己紹介（矢戸）',
    personProps: {
      yato: {
        animation: 'HandRaising',
      },
    },
    camera: cameraYatoFocus,
    text: 'こんにちは！私は矢戸康志です。',
    audio: '/audios/yato_self_introduction.ogg',
    lip: '/lips/yato_self_introduction.json',
  },
  // ----------------------------------
  {
    id: 'minhyok_self_introduction',
    title: '自己紹介（ミンヒョク）',
    personProps: {
      minhyok: {
        animation: 'HandRaising',
      },
    },
    // camera: cameraMinhyokFocus,
    text: 'こんにちは！私はミンヒョクです。',
    audio: '/audios/minhyok_self_introduction.ogg',
    lip: '/lips/minhyok_self_introduction.json',
  },
];
