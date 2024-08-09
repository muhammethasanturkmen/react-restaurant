import { useState } from 'react'

import './App.css'

function App() {
  const [count, setCount] = useState(0)

  return (
<div className="container">

<div className="history">
  <img src="/img/dinelogo.svg" alt="Dine logosu"/>
  <div className="history-writes">
 <h1>Enfes yemek 1989'dan beri</h1>
 <p>Güzel kırsal ortamda mevsimlik menümüzü deneyimleyin. Çiftlik evimizin konforunda en taze ürünleri yiyin.</p>
 <a href="#">REZERVASYON YAP</a>
</div>
</div>

<div className="footer">
 <img className="dere"  src="/img/dere.png" alt="dere fotoğrafi"/>
 <img className="deretablet"  src="/img/deretablet.png" alt="dere tablet"/>
 <img className="deremobil"   src="/img/mobildere.png" alt="dere mobil"/>
 <div className="footer-inform">
   <img  className="design" src="/img/yuvarlakcizgi.svg" alt="yuvarlak ve bir çizgiden oluşan şema"/>
   <h2>Tüm aile için keyifli bir yer </h2>
   <p>Rahat ortamımız bizimle yemek yemeyi herkes için harika bir deneyim haline getiriyor. Yemekten önce çiftlikte bir tur bile ayarlayabiliriz.</p>
 </div>
</div>


<div className="food-promotion">
 <div className="footer-inform">
   <img  className="design" src="/img/yuvarlakcizgi.svg" alt="yuvarlak ve bir çizgiden oluşan şema"/>
   <h2>En yerel kaynaklı yiyecekler</h2>
   <p>Tüm malzemelerimiz doğrudan çiftliğimizden veya yerel balıkçılığımızdan gelir. Böylece en taze, en sürdürülebilir yiyecekleri yediğinizden emin olabilirsiniz.</p>
 </div>
 <img className="asci"  src="/img/ascieli.png" alt="Aşçının elinin gözüktüğü yemek fotoğrafı"/>
 <img className="ascitablet" src="/img/tabletasci.png" alt="Aşçı tablet"/>
 <img className="ascimobil" src="/img/mobilasci.png" alt="Aşçı mobil"/>

</div>


<div className="menu">
  <div className="menu-inform">
   <img  className="design" src="/img/yuvarlakcizgi.svg" alt="yuvarlak ve bir çizgiden oluşan şema"/>
   <h2>Menümüzden birkaç önemli nokta</h2>
   <p>Tüm diyet gereksinimlerini karşılıyoruz, ancak işte lokantamızın favorilerinden bazılarına bir bakış. Menümüz her sezon yenileniyor.</p>
  </div>

  <div className="menu-item">
   <div className="item"> 
    <img src="/img/somon.png" alt="Somon porsiyon fotoğrafı"/>
    <div className="item-writes">
     <h5>Kavrulmuş Somon Fileto</h5>
     <p>Yerel kaynaklı somonumuz serinletici karabuğday yaz salatası ile servis edilir.</p>
    </div>
   </div>

   <hr/>

   <div className="item">
   <img src="/img/yurvarlaket.png" alt="Yuvarlak şekilde pişirilmiş et fotoğrafı"/>
   <div className="item-writes">
     <h5>Biberiyeli Fileto Mignon</h5>
     <p>Birinci sınıf sığır etimiz, lezzetli mevsimlik taraf seçenekleriyle damak zevkinize <br/> göre servis edilir.</p>
    </div>
   </div>

    <hr/>

    <div className="item">
    <img src="/img/tatlı.png" alt="Mug fotoğrafı"/>
    <div className="item-writes">
     <h5>Yaz Meyveli Çikolatalı Mus</h5>
     <p>Yaz meyveleri ve bitter çikolata talaşı ile birleştirilmiş kremalı köpük.</p>
    </div>
   </div>

  </div>
</div>

<div className="reservation">
 <h1>Rezervasyon yaptırmaya hazır mısınız?</h1>
 <a href="#">RESERVASYON YAP</a>
</div>

<div className="nav">
 <img src="/img/dinelogo.svg" alt="Dine logo"/>
 <div className="nav-item">
   <ol>
     <ul>Marthwaite, Sedbergh</ul>
     <ul>Cumbria</ul>
     <ul>+00 44 123 4567</ul>
   </ol>
 </div>

 <div className="nav-item">
   <ol>
     <ul>OPEN TIMES</ul>
     <ul>MON - FRI: 09:00 AM - 10:00 PM</ul>
     <ul>SAT - SUN: 09:00 AM - 11:30 PM</ul>
   </ol>
 </div>
</div>
</div>
  )
  }

export default App
