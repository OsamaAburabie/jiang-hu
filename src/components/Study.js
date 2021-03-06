export default function Study(pillType, prevQuality) {
  // let qualityList = ['epic', 'ultra', 'elite', 'unique', 'rare', 'normal'];
  let oldQuality = 0;
  if (prevQuality === 'epic') {
    oldQuality = 200;
  } else if (prevQuality === 'ultra') {
    oldQuality = 100;
  } else {
    oldQuality = 0;
  }

  let qualityList;
  if (pillType === 'normal') {
    qualityList = [
      ['epic', 15 + oldQuality],
      ['ultra', 15 + oldQuality],
      ['elite', 20],
      ['unique', 20],
      ['rare', 30],
      ['normal', 30],
    ];
  } else if (pillType === 'special') {
    qualityList = [
      ['epic', 20 + oldQuality],
      ['ultra', 20 + oldQuality],
      ['elite', 20],
      ['unique', 20],
      ['rare', 30],
      ['normal', 30],
    ];
  } else if (pillType === 'senior') {
    qualityList = [
      ['epic', 25 + oldQuality],
      ['ultra', 30 + oldQuality],
      ['elite', 20],
      ['unique', 20],
      ['rare', 30],
      ['normal', 30],
    ];
  }

  //function to get random quality
  function getQuality(data) {
    let total = 0;
    for (let i = 0; i < data.length; ++i) {
      total += data[i][1];
    }
    const threshold = Math.random() * total;
    total = 0;
    for (let i = 0; i < data.length - 1; ++i) {
      total += data[i][1];
      if (total >= threshold) {
        return data[i][0];
      }
    }
    return data[data.length - 1][0];
  }
  //pick a random quality
  let randomQuality = getQuality(qualityList);
  //==========================================================

  function generateAttribute(attribute, quality) {
    const epic_M_Attack = 320;
    const epicl_P_Attack = 240;
    const epic_HP = 600;
    const epic_breakthrogh = 2;
    const epic_P_Strike = 2;

    const attributeCalculation = (
      epicValue,
      attributeName,
      attributeQuality
    ) => {
      switch (attributeQuality) {
        case 'epic':
          return {
            attribute: attributeName,
            quality: attributeQuality,
            value: epicValue,
          };
        case 'ultra':
          return {
            attribute: attributeName,
            quality: attributeQuality,
            value: (epicValue * 80) / 100,
          };

        case 'elite':
          return {
            attribute: attributeName,
            quality: attributeQuality,
            value: (epicValue * 60) / 100,
          };
        case 'unique':
          return {
            attribute: attributeName,
            quality: attributeQuality,
            value: (epicValue * 50) / 100,
          };
        case 'rare':
          return {
            attribute: attributeName,
            quality: attributeQuality,
            value: (epicValue * 44) / 100,
          };
        case 'normal':
          return {
            attribute: attributeName,
            quality: attributeQuality,
            value: (epicValue * 20) / 100,
          };

        default:
          return {
            attribute: attributeName,
            quality: attributeQuality,
            value: epicValue,
          };
      }
    };

    // M_Attack ===============================================================
    if (attribute === 'M-attack')
      return attributeCalculation(epic_M_Attack, attribute, quality);
    // P_Attack ===============================================================
    if (attribute === 'P-attack')
      return attributeCalculation(epicl_P_Attack, attribute, quality);
    // HP ===============================================================
    if (attribute === 'HP')
      return attributeCalculation(epic_HP, attribute, quality);
    // breakthrough ===============================================================
    if (attribute === 'breakthrough')
      return attributeCalculation(epic_breakthrogh, attribute, quality);
    // P_Strike ===============================================================
    if (attribute === 'P-strike')
      return attributeCalculation(epic_P_Strike, attribute, quality);
    // default ===============================================================
    return 'Wrong Entries';
  }

  const attributeNames = [
    'M-attack',
    'P-attack',
    'HP',
    'breakthrough',
    'P-strike',
  ];

  let randomAttributeName =
    attributeNames[Math.floor(Math.random() * attributeNames.length)];

  let star = generateAttribute(randomAttributeName, randomQuality);

  // stage.push({ ...star });
  return { ...star };
}
