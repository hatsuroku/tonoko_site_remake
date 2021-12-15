import React from 'react';
import ReactDOM from 'react-dom';
import Card from './components/card'
import './global.css';
import './index.scss';
import welcomePic from './resources/welcome.jpg'

const Background = () => (<div className='background'>
  <div className='fonts'>hello  你好</div>
  <div className='fonts'>안녕하세요  こんにちは</div>
  <div className='fonts'>ON LI DAY FaOHE MASHI</div>
  <div className='fonts'>hallo  bonjour  halló</div>
  <div className='fonts'>tungjatjeta  alo  illāc</div>
  <div className='fonts'>ciao  hola  olá</div>
  <div className='fonts'>הלו  привет  алло</div>
  <div className='fonts'>Dzień dobry  Xin chào!</div>
  <div className='fonts'>สวัสดีครับ/คะ  नमस्ते</div>
</div>);


// ========================================

ReactDOM.render(
  <div>
    <Background />
    <Card 
      picSrc={welcomePic}
      title='欢迎'
    >
      如果人类真能达到字面意义上的<br/>
      「无聊死了」，这个世界应该会更加有趣。
    </Card>
  </div>
  ,
  document.getElementById('root')
);