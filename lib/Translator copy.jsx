import translator from "translate";
import cet4WordsList from "./lib/cet4_words.json";

import style from "./lib/style";

// import {
//   img_collectionFill,
//   img_collectionFill_active,
//   img_successFill,
//   img_successFill_active,
//   img_reeorFill,
//   img_reeorFill_active
// } from "./lib/assets/img/index";
// import imgs from "./lib/assets/img/index";

// translator config:
translator.engine = "deepl"; // Or "yandex", "libre", "deepl"
translator.key = "714ae6f3-4a88-f441-64cf-ed472790620e:fx";

export const command = "Translator";
export const refreshFrequency = 1000000;
export const className = style;

export const initialState = {
  inputValue: "",
  outputValue: "",
  debounceTimer: null,
  pickedWord: {},
  actionsList: [
    { id: 1, img: "success-fill", img_active: "success-fill_active", alt: "记住了", isActive: false },
    { id: 2, img: "reeor-fill", img_active: "reeor-fill_active", alt: "跳过", isActive: false },
    { id: 3, img: "collection-fill", img_active: "collection-fill_active", alt: "收藏", isActive: false },
  ]
}
export const render = ({ inputValue, outputValue, debounceTimer, pickedWord, actionsList }) => {
  // 获取随机单词:
  const randomWordBuilder = () => {
    const randomIndex = Math.floor(Math.random() * cet4WordsList.length);
    if(cet4WordsList[randomIndex].hasRemember) {
      return randomWordBuilder()
    } else {
      return cet4WordsList[randomIndex]
    }
  }
  pickedWord = () => randomWordBuilder();

  // CetWordCard组件:
  function CetWordCard(props) {
    console.log("CetWordCard props", props);
    const { wordInfo } = props;

    const actionsList = [
      { id: 1, img: "success-fill", img_active: "success-fill_active", alt: "记住了", isActive: false },
      { id: 2, img: "reeor-fill", img_active: "reeor-fill_active", alt: "跳过", isActive: false },
      { id: 3, img: "collection-fill", img_active: "collection-fill_active", alt: "收藏", isActive: false },
    ]

    const handleActive = (activeItem) => {
      console.log("activeItem", activeItem);
      if(activeItem.id === 1) {
        wordInfo = pickedWord();
      }
    }

    if( wordInfo.word ) {
      return (
        <div className="cet-word-card">
          <div className="word-name">
            { wordInfo.word }
            <span className="word-phonetic">{ wordInfo.phonetic }</span>
          </div>
          <div className="word-translate">
            { wordInfo.translate.replace(/(n|v|vi|vt|adj|adv|num|int|det|pron|conj)./g, $ => "\$v$/" + $ + " ")
                                .split("\$v$/")
                                .map(transItem => {
              return (
                <div key={transItem}>{ transItem }</div>
              )
            }) }
          </div>
          <div className="word-actions">
            {
              (actionsList || []).map(activeItem => {
                return (
                  <div
                    className="word-action-item"
                    key={ activeItem.id }
                    onMouseEnter={ () => activeItem.isActive = true }
                    onMouseLeave={ () => activeItem.isActive = false }
                    onClick={ () => handleActive(activeItem) }
                  >
                    <img src={ `https://gitee.com/FLuoxetine_hc/pic-lib/blob/uPic/uPic/${ activeItem.isActive ? activeItem.img_active : activeItem.img }.png`} alt={activeItem.alt} />
                  </div>
                )
              })
            }
          </div>
        </div>
      )
    }
  }


  // 防抖函数;
  const debounce = function(handle, delay) {
    debounceTimer = null;
    return function () {
      const _self = this,
          _args = arguments;
      clearTimeout(debounceTimer);
      debounceTimer = setTimeout(function () {
          handle.apply(_self, _args)
          clearTimeout(debounceTimer);
      }, delay)
    }
  }

  // handleInputChange
  const handleInputChange = debounce(async () => {
    console.log("translator", inputValue);
    await translator(inputValue, "ZH").then(res => outputValue = res);
  }, 500)

  // handleOutputChange
  const handleOutputChange = (e) => {
    console.log("handleOutputChange", e);
  }

  return (
    <div id="translator-main">
      <textarea className="input-area" value={ inputValue } onChange={ handleInputChange } />
      <textarea className="output-area" value={ outputValue } onChange={ handleOutputChange } />
      <CetWordCard wordInfo={ pickedWord() } actionsList={ actionsList } />
    </div>
  );
}

