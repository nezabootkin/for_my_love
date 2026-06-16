import React, {useEffect, useRef, useState} from 'react';
import './App.css';
import './AppMobile.css';
import './assets/fonts/fonts.css';
import stamp from './assets/images/realistic-golden-wax-seal-stamp.png';
import our_date from './assets/images/our_date.png';
import our_photo from './assets/images/our_photo.jpg';
import marriage_registry from './assets/images/building.webp';
import michurin from './assets/images/building2.jpg'
import dresscode_image from './assets/images/dresscode_image.png'
import heart_timer from './assets/images/heart_timer.png'
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

  const blockRef = useRef<HTMLDivElement>(null);
  const [width, setWidth] = useState<number>(0);

  useEffect(() => {
    if (blockRef.current) {
      const rect = blockRef.current.getBoundingClientRect();
      setWidth(rect.width);
    }
  }, []);

  const setWidthToPhoto = () => {
    return width - 130;
  }
  const setHeightToPhotoV = () => {
    return width - 40;
  }
  const setHeightToPhotoH = () => {
    return width - 140;
  }

  const d = format(days);
  const h = format(hours);
  const m = format(minutes);
  const s = format(seconds);


  return (
    <div ref={blockRef} className={isMobile ? 'app_mobile' : 'app'}>
      {isOpen ? (
        <div className={isMobile ? 'openWindow_mobile' : 'openWindow'}>

          <div className={isMobile ? 'our_block_mobile' : 'our_block'}>
            <div className={isMobile ? 'photo_mobile_card' : 'photo_card'}>
              <img
                className={isMobile ? 'photo' : 'picture'}
                src={our_photo}
                alt={'наше фото'}
                width={isMobile ? setWidthToPhoto() : 600}
                height={isMobile ? setHeightToPhotoV() : 800}
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
            {/*<text className={isMobile ? 'openWindow_text_mobile_h2' : 'openWindow_text_h2'}>*/}
            {/*  Сердце подсказывает нам, что без вас этот день будет неполным. Ведь настоящая семья начинается не только с поцелуя у алтаря, но и с тепла тех, кто верил в нас, поддерживал и радовался нашим маленьким победам. Поэтому мы приглашаем вас стать не просто гостями, а частью нашей истории — свидетелями рождения нашего маленького семейного счастья. Мы не будем заставлять вас кричать «Горько!» до хрипоты — только если вы сами этого захотите. Главная цель вечера — чтобы каждый чувствовал себя не «гостем на свадьбе», а дорогим человеком за большим семейным столом. Возьмите с собой хорошее настроение, удобную обувь для танцев (каблуки можно сменить на сменку — будем рады, если вы будете в комфорте) и немного терпения, если вдруг мы надолго задержимся у фотозоны.*/}
            {/*</text>*/}
            <text className={isMobile ? 'openWindow_text_mobile_h2' : 'openWindow_text_h2'}>
              Приглашаем Вас присоединиться к нашему первому семейному празднику - нашей свадьбе!
            </text>
            <text className={isMobile ? 'openWindow_text_mobile_h2' : 'openWindow_text_h2'}>
              Будем очень рады, если вы украсите его своим присутствием!
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
                className={isMobile ? 'photo_places' : 'picture'}
                src={marriage_registry}
                alt={'фото загса'}
                width={isMobile ? setWidthToPhoto() : 800}
                height={isMobile ? setHeightToPhotoH() : 600}
              />
              <div className={'places_text'}>
                <text className={isMobile ? 'openWindow_text_mobile_h2' : 'openWindow_text_h2'}>
                  адрес: набережная Брюгге, 5
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
                className={isMobile ? 'photo_places' : 'picture'}
                src={michurin}
                alt={'фото загса'}
                width={isMobile ? setWidthToPhoto() : 800}
                height={isMobile ? setHeightToPhotoH() : 600}
              />
              <div className={'places_text'}>
                <text className={isMobile ? 'openWindow_text_mobile_h2' : 'openWindow_text_h2'}>
                  адрес: улица Героев Сталинградской Битвы, 95А
                </text>
                <text className={isMobile ? 'openWindow_text_mobile_h2' : 'openWindow_text_h2'}>
                  Здесь мы все сможем отдохнуть на славу и отпраздновать рождение новой семьи
                </text>
              </div>
            </div>
          </div>

          <div className={isMobile ? 'dresscode_mobile' : 'dresscode'} style={{marginTop: 16}}>
            <text
              className={isMobile ? 'openWindow_text_mobile' : 'openWindow_text'}
              style={{margin: 16, marginTop: 32}}
            >
              Дресскод
            </text>
            <img
              className={'dresscode_image'}
              src={dresscode_image}
              alt={'dresscode_image'}
              height={isMobile ? 250 : 600}
              width={isMobile ? 250 : 600}
            />
            <text className={isMobile ? 'openWindow_text_mobile_h2' : 'openWindow_text_h2'} style={{marginTop: 16 }}>
              Мы были бы очень благодарны, если бы вы поддержали наш дресс код:
            </text>
            <li className={isMobile ? 'openWindow_text_mobile_h2' : 'openWindow_text_h2'} style={{alignSelf: 'flex-start', marginLeft: isMobile ? 32 : 48}}>
              Ваш лучший наряд
            </li>
            <li className={isMobile ? 'openWindow_text_mobile_h2' : 'openWindow_text_h2'} style={{alignSelf: 'flex-start', marginLeft: isMobile ? 32 : 48}}>
              Ваша улыбка
            </li>
            <li className={isMobile ? 'openWindow_text_mobile_h2' : 'openWindow_text_h2'} style={{alignSelf: 'flex-start', marginLeft: isMobile ? 32 : 48}}>
              Ваш Комфорт
            </li>
            <text
              className={isMobile ? 'openWindow_text_mobile_h2' : 'openWindow_text_h2'}
              style={{margin: 16, marginBottom: 32}}
            >
              Главное - Ваше присутствие!
            </text>
          </div>

          <text
            className={isMobile ? 'openWindow_text_mobile' : 'openWindow_text'}
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
