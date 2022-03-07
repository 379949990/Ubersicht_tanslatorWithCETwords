export default `
  top: 12px;
  right: 12px;
  width: 320px;
  box-sizing: border-box;
  margin: auto;
  padding: 8px;
  background-color: rgba(255, 255, 255, 0.6);
  color: #141f33;
  font-family: Helvetica Neue;
  font-weight: 300;
  border: 1px solid #fff;
  border-radius: 12px;
  text-align: justify;
  line-height: 1.5;

  * {
    box-sizing: border-box;
    margin: 0;
    padding: 0;
  }
  img {
    display: block;
  }
  
  #translator-main {
    width: 100%;
    display: flex;
    flex-direction: column;
    justify-content: flex-start;
    align-items: center;
    // position: relative;
  }
  textarea {
    width: 100%;
    min-height: 100px;
    margin: 0;
    padding: 8px;
    border: 1px solid rgba(255, 255, 255, 0.9);
    border-radius: 6px;
    background-color: rgba(255, 255, 255, 0.8);
    outline: none;
    resize: none;
    font-size: 13px;
    color: rgba(0, 0, 0, 0.8);
    transition: all 0.3s;
  }
  textarea:hover {
    border: 1px solid rgba(0, 122, 204, 0.6);
  }
  /*滚动条整体样式*/
  textarea::-webkit-scrollbar {
    display: none;
    width: 6px; /*y轴滚动条的宽度*/
    height: 6px; /*x轴滚动条的高度*/
    scrollbar-arrow-color: rgba(88, 88, 88, 0.3); /*滚动箭头的箭头元素的颜色*/
  }
  /*滚动条里面小方块*/
  textarea::-webkit-scrollbar-thumb {
    border-radius: 3px;
    background: rgba(88, 88, 88, 0.3);
    scrollbar-arrow-color: rgba(88, 88, 88, 0.3);  /*滚动箭头的箭头元素的颜色*/
  }
  /*滚动条里面轨道*/
  textarea::-webkit-scrollbar-track { 
    border-radius: 3px;
    background: rgba(0, 0, 0, 0);
  }
  .input-area {
    margin-bottom: 8px;
  }



  @keyframes slide-in {
    0% {
      opacity: 0;
      transform: translateY(0);
    }
    100% {
      opacity: 1;
      transform: translateY(calc(100% + 8px));
    }
  }
  .cet-word-card {
    width: 100%;
    position: absolute;
    bottom: 0;
    left: 0;
    padding: 0 12px 8px;
    background-color: rgba(255, 255, 255, 0.6);
    border: 1px solid #fff;
    border-radius: 12px;
    font-size: 12px;
    font-family: Helvetica Neue;
    color: rgba(0, 0, 0, 0.8);
    animation: slide-in 0.5s 0.3s cubic-bezier(0.250, 0.460, 0.450, 0.940) both;
    z-index: 20;
  }
  .word-name {
    height: 32px;
    margin: 3px 0;
    font-size: 18px;
    font-weight: 500;
    line-height: 32px;
    word-break: break-all;
    overflow: hidden;
  }
  .word-phonetic {
    margin-left: 12px;
    font-size: 11px;
    color: rgba(66, 66, 66, 0.8);
    font-weight: 400;
  }
  .word-actions {
    height: 64px;
    padding-top: 32px;
    position: absolute;
    bottom: 0;
    right: 0;
    display: flex;
    justify-content: flex-end;
    align-items: center;
    color: #fff;
    line-height: 32px;
    transition: all 0.3s;
    z-index: 10;
    opacity: 0;
  }
  .cet-word-card:hover .word-actions {
    opacity: 1;
    transform: translateY(calc(100% - 28px));
  }
  .word-action-item {
    width: 32px;
    height: 100%;
    padding: 4px;
    margin: 3px;
    user-select: none;
    cursor: pointer;
  }
  .word-action-item>img {
    height: 100%;
    width: 100%;
  }
`