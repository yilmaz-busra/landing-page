import React from "react";

function Main() {
  return (
    <div className="container">
      <div className="banner">
        <img
          className="banner-img"
          src="https://static.wixstatic.com/media/071329_efd2a87542fb40d6a6676c4dc030fec4~mv2.jpeg/v1/fill/w_884,h_928,al_c,q_85,usm_0.66_1.00_0.01,enc_auto/Image_20221216_142834_271%20(1).jpeg"
          alt=""
        />

        <div className="banner-footer">
          <p className="banner-title">Dijital Pazarlama Ortağınız</p>
          <button className="btn">Başlayalım</button>
        </div>
      </div>
      <div className="stylebanner"></div>

      <div className="card-list">
        <div className="card">
          <div>
            <img
              src="https://demarke.com.tr/images/services/DrawingTablet.png"
              alt=""
              width={40}
            />
          </div>
          <div>
            <h6 className="title-style">Sosyal Medya Yönetimi</h6>
            <p className="desc-style">
              Markanızın kalbi sosyal medyanız doğru yönetilmediğinde
              müşterilerinizin markanızı tanıması çok zorlaşıyor.Bu nedenle
              doğru stratejik plan ve doğru reklam bütçeleriyle hareket etmek
              çok önemli. Tüm grafik tasarım, reklam yönetimi ve stratejik
              planlama desteğiyle yanınızdayız.
            </p>
          </div>
        </div>
        <div className="card">
          <div>
            <img
              src="https://demarke.com.tr/images/services/DrawingTablet.png"
              alt=""
              width={40}
            />
          </div>
          <div>
            <h6 className="title-style">Web Tasarım ve Yazılım</h6>
            <p className="desc-style">
              Yeni çağa uygun, tasarım ve teknik açıdan kusursuz, ihtiyacınıza
              göre ve her bütçeye uygun web siteleri yapıyoruz. Siz de
              sıralamada ön sıralara geçmek için bizimle iletişime geçin.
            </p>
          </div>
        </div>
        <div className="card">
          <div>
            <img
              src="https://demarke.com.tr/images/services/Briefcase.png"
              alt=""
              width={40}
            />
          </div>
          <div>
            <h6 className="title-style">Dijital Pazarlama & Google Ads</h6>
            <p className="desc-style">
              Doğru ve profesyonel bir dijital pazarlama stratejisi oluşturarak
              sizlerin satış hedeflerini gerçekleştirmesine yardımcı oluyor,
              gerekli gördüğümüz durumlarda web sitesi ve e-ticaret altyapısı
              desteği veriyoruz.
            </p>
          </div>
        </div>
        <div className="card">
          <div>
            <img
              src="https://demarke.com.tr/images/services/Rulers.png"
              alt=""
              width={40}
            />
          </div>
          <div>
            <h6 className="title-style">SEO/ SEM Yönetimi</h6>
            <p className="desc-style">
              Teknik açıdan sitenizin ne durumda olduğunu, gerçekten sitenizin
              sıralamasının neden geride olduğunu hiç merak ettiniz mi? Sizler
              için arama motoru optimizasyonlarını teknik açıdan kusursuz hale
              getiriyor, Google'da hızlı bir şekilde üst sıralara çıkmanıza
              yardımcı oluyoruz.
            </p>
          </div>
        </div>
        <div className="card">
          <div>
            <img
              src="https://www.onlygfx.com/wp-content/uploads/2021/11/camera-film-roll-tattoo-1798.png
              "
              alt=""
              width={40}
            />
          </div>
          <div>
            <h6 className="title-style">Fotoğraf & Video Prodüksiyon</h6>
            <p className="desc-style">
              Reklam, kurumsal tanıtım videoları, sosyal medya animasyonları ve
              infografikler hazırlıyoruz.Her sektöre uygun kreatif
              video-fotoğraf fikirleri için, bizimle iletişime geçin.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Main;
