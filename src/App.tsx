import React from 'react';
import './App.css';
import './AppMobile.css';
import './assets/fonts/fonts.css';
import stamp from './assets/images/realistic-golden-wax-seal-stamp.png';
import our_date from './assets/images/our_date.png';
import our_photo from './assets/images/our_photo.jpg';
import marriage_registry from './assets/images/building.webp';
import michurin from './assets/images/building2.jpg'
import { isMobile } from 'react-device-detect';
import { FlipDigit } from "./FlipDigit";
import { useCountdown } from "./useCountdown";

function format(value: number) {
  return String(value).padStart(2, "0");
}

function App() {
  const [isOpen, setIsOpen] = React.useState(false);

  const { days, hours, minutes, seconds } =
    useCountdown(
      new Date("2026-08-15T12:30:00")
    );

  const d = format(days);
  const h = format(hours);
  const m = format(minutes);
  const s = format(seconds);


  return (
    <div className={isMobile ? 'app_mobile' : 'app'}>
      {isOpen ? (
        <div className={isMobile ? 'openWindow_mobile' : 'openWindow'}>

          <div className={isMobile ? 'our_block_mobile' : 'our_block'}>
            <div className={'photo_mobile_card'}>
              <img
                className={'photo'}
                src={our_photo}
                alt={'наше фото'}
                width={isMobile ? 300 : 600}
                height={isMobile ? 400 : 800}
              />
              <text className={isMobile ? 'openWindow_text_mobile' : 'openWindow_text'}>
                Никита и Алина
              </text>
              <text className={isMobile ? 'openWindow_date_mobile_h2' : 'openWindow_date_h2'} style={{marginBottom: 16}}>
                15 августа 2026
              </text>
            </div>
          </div>

          <div className={isMobile ? 'friends_block_mobile' : 'friends_block'} style={{marginTop: 16}}>
            <text className={isMobile ? 'openWindow_text_mobile' : 'openWindow_text'} style={{marginTop: 24}}>
              Дорогие наши гости!
            </text>
            <text className={isMobile ? 'openWindow_text_mobile_h2' : 'openWindow_text_h2'}>
              Сердце подсказывает нам, что без вас этот день будет неполным. Ведь настоящая семья начинается не только с поцелуя у алтаря, но и с тепла тех, кто верил в нас, поддерживал и радовался нашим маленьким победам. Поэтому мы приглашаем вас стать не просто гостями, а частью нашей истории — свидетелями рождения нашего маленького семейного счастья. Мы не будем заставлять вас кричать «Горько!» до хрипоты — только если вы сами этого захотите. Главная цель вечера — чтобы каждый чувствовал себя не «гостем на свадьбе», а дорогим человеком за большим семейным столом. Возьмите с собой хорошее настроение, удобную обувь для танцев (каблуки можно сменить на сменку — будем рады, если вы будете в комфорте) и немного терпения, если вдруг мы надолго задержимся у фотозоны.
            </text>
            <img
              className={'stamp'}
              style={{marginTop: 16}}
              src={our_date}
              alt="Дата"
              onClick={() => setIsOpen(true)}
              height={isMobile ? 250 : 600}
              width={isMobile ? 250 : 600}
            />
          </div>

          <div className={isMobile ? 'places_block_mobile' : 'places_block'} style={{marginTop: 16}}>
            <text
              className={isMobile ? 'openWindow_text_mobile' : 'openWindow_text'}
              style={{margin: 16, marginTop: 32}}
            >
              Места проведения
            </text>
            <text
              className={isMobile ? 'openWindow_text_mobile_h2' : 'openWindow_text_h2'}
              style={{margin: 16}}
            >
              ЗАГС - 12:30
            </text>
            <div className={isMobile ? 'places_mobile' : 'places'}>
              <img
                className={'photo_places'}
                src={marriage_registry}
                alt={'фото загса'}
                width={isMobile ? 300 : 800}
                height={isMobile ? 200 : 600}
              />
              <div className={'places_text'}>
                <text className={isMobile ? 'openWindow_text_mobile_h2' : 'openWindow_text_h2'}>
                  адресс: набережная Брюгге, 5
                </text>
                <text className={isMobile ? 'openWindow_text_mobile_h2' : 'openWindow_text_h2'}>
                  Здесь будет проходить наш самый теплый момент этого дня
                </text>
              </div>
            </div>
            <text
              className={isMobile ? 'openWindow_text_mobile_h2' : 'openWindow_text_h2'}
              style={{margin: 16}}
            >
              Мичурин - 16:00 (17:00)
            </text>
            <div className={isMobile ? 'places_mobile' : 'places'}>
              <img
                className={'photo_places'}
                src={michurin}
                alt={'фото загса'}
                width={isMobile ? 300 : 800}
                height={isMobile ? 200 : 600}
              />
              <div className={'places_text'}>
                <text className={isMobile ? 'openWindow_text_mobile_h2' : 'openWindow_text_h2'}>
                  адресс: улица Героев Сталинградской Битвы, 95А
                </text>
                <text className={isMobile ? 'openWindow_text_mobile_h2' : 'openWindow_text_h2'}>
                  Здесь мы все сможем отдохнуть на славу и отпраздновать рождение новой семьи
                </text>
              </div>
            </div>
          </div>

          <text
            className={isMobile ? 'openWindow_text_mobile_h2' : 'openWindow_text_h2'}
            style={{margin: 16, marginTop: 32}}
          >
            Будем рады вас видеть через...
          </text>
          <div
            style={{
              display: "flex",
              gap: 12,
              alignItems: "center",
              alignSelf: "center",
            }}
          >
            {isMobile ? (
              <>
                <div style={{width: 120}}>
                  <div style={{display: 'flex', justifyContent: 'space-between', alignItems: 'center'}}>
                    <div style={{display: 'flex'}}>
                      <FlipDigit value={d[0]} />
                      <FlipDigit value={d[1]} />
                    </div>
                    <text className={isMobile ? 'openWindow_text_mobile_h2' : 'openWindow_text_h2'}>
                      дней
                    </text>
                  </div>
                  <div style={{display: 'flex', justifyContent: 'space-between', alignItems: 'center'}}>
                    <div style={{display: 'flex'}}>
                      <FlipDigit value={m[0]} />
                      <FlipDigit value={m[1]} />
                    </div>
                    <text className={isMobile ? 'openWindow_text_mobile_h2' : 'openWindow_text_h2'}>
                      минут
                    </text>
                  </div>
                </div>
                <div style={{width: 120}}>
                  <div style={{display: 'flex', justifyContent: 'space-between', alignItems: 'center'}}>
                    <div style={{display: 'flex'}}>
                      <FlipDigit value={h[0]} />
                      <FlipDigit value={h[1]} />
                    </div>
                    <text className={isMobile ? 'openWindow_text_mobile_h2' : 'openWindow_text_h2'}>
                      часов
                    </text>
                  </div>
                  <div style={{display: 'flex', justifyContent: 'space-between', alignItems: 'center'}}>
                    <div style={{display: 'flex'}}>
                      <FlipDigit value={s[0]} />
                      <FlipDigit value={s[1]} />
                    </div>
                    <text className={isMobile ? 'openWindow_text_mobile_h2' : 'openWindow_text_h2'}>
                      секунд
                    </text>
                  </div>
                </div>
              </>
            ) : (
              <>
                <FlipDigit value={d[0]} />
                <FlipDigit value={d[1]} />
                <text className={isMobile ? 'openWindow_text_mobile_h2' : 'openWindow_text_h2'}>
                  дней
                </text>
                <FlipDigit value={h[0]} />
                <FlipDigit value={h[1]} />
                <text className={isMobile ? 'openWindow_text_mobile_h2' : 'openWindow_text_h2'}>
                  часов
                </text>
                <FlipDigit value={m[0]} />
                <FlipDigit value={m[1]} />
                <text className={isMobile ? 'openWindow_text_mobile_h2' : 'openWindow_text_h2'}>
                  минут
                </text>
                <FlipDigit value={s[0]} />
                <FlipDigit value={s[1]} />
                <text className={isMobile ? 'openWindow_text_mobile_h2' : 'openWindow_text_h2'}>
                  секунд
                </text>
              </>
            )}
          </div>
        </div>
      ) : (
        <div className={isMobile ? 'postcard_mobile' : 'postcard'}>
          <div className={'postcardHeader'}>
            <text className={isMobile ? 'postcard_text_mobile' : 'postcard_text'}>
              Вы приглашены
            </text>
            <text className={isMobile ? 'postcard_text_mobile' : 'postcard_text'}>
              на свадьбу
            </text>
          </div>
          <img
            className={'stamp'}
            src={stamp}
            alt="stamp"
            onClick={() => setIsOpen(true)}
            height={isMobile ? 250 : 400}
            width={isMobile ? 250 : 400}
          />
          <div className={'postcardBottom'}>
            <text className={isMobile ? 'postcard_text_mobile' : 'postcard_text'}>
              Нажмите на штамп,
            </text>
            <text className={isMobile ? 'postcard_text_mobile' : 'postcard_text'}>
              чтобы открыть приглашение
            </text>
          </div>
        </div>
      )}
    </div>
  );
}

export default App;
