import 'bootstrap/dist/css/bootstrap.min.css';
// import './scroll_animation.js'

function App() {
  const col_about1 = {
    width: '270px',
  };

  const col_about2 = {
    marginLeft: '45px'
  };

  const col_about3 = {
    width: '400px',
    marginLeft: '30px'
  };

  return (
    <div className="App">
      <header>
        <div className="row">
          <div className="col1 col">
            <a href="/"><img className="icon" src="/img/icon.jpg" alt="" /></a>
            <h1 className="project">PROJECT</h1>
            <h2>HOME</h2>
            <div className="button-container">
              <button>
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path fill-rule="evenodd" clip-rule="evenodd" d="M21 11.5C21 11.2239 20.7761 11 20.5 11L4.5 11C4.22386 11 4 11.2239 4 11.5C4 11.7761 4.22386 12 4.5 12L20.5 12C20.7761 12 21 11.7761 21 11.5Z" fill="#333333"/>
                  <path fill-rule="evenodd" clip-rule="evenodd" d="M8.35355 7.64645C8.15829 7.45118 7.84171 7.45118 7.64645 7.64645L3.79289 11.5L7.64645 15.3536C7.84171 15.5488 8.15829 15.5488 8.35355 15.3536C8.54882 15.1583 8.54882 14.8417 8.35355 14.6464L5.20711 11.5L8.35355 8.35355C8.54882 8.15829 8.54882 7.84171 8.35355 7.64645Z" fill="#333333"/>
                </svg>
              </button>
              <button style={{ marginLeft: '22.99px', background: '#F9F9F9'}}>
                <svg width="25" height="24" viewBox="0 0 25 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path fill-rule="evenodd" clip-rule="evenodd" d="M3.93521 11.5C3.93521 11.2239 4.15907 11 4.43521 11L20.4352 11C20.7114 11 20.9352 11.2239 20.9352 11.5C20.9352 11.7761 20.7114 12 20.4352 12L4.43521 12C4.15907 12 3.93521 11.7761 3.93521 11.5Z" fill="#333333"/>
                  <path fill-rule="evenodd" clip-rule="evenodd" d="M16.5817 7.64645C16.7769 7.45118 17.0935 7.45118 17.2888 7.64645L21.1423 11.5L17.2888 15.3536C17.0935 15.5488 16.7769 15.5488 16.5817 15.3536C16.3864 15.1583 16.3864 14.8417 16.5817 14.6464L19.7281 11.5L16.5817 8.35355C16.3864 8.15829 16.3864 7.84171 16.5817 7.64645Z" fill="#333333"/>
                </svg>
              </button>
              <span>
                <svg className="hr_line" width="321" height="1" viewBox="0 0 271 1" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <line x1="321" y1="0.5" x2="4.37114e-08" y2="0.500024" stroke="#F2F2F2"/>
                </svg>
              </span>
            </div>

            <div class="slide_numbers">
              <span className="text">01</span>
              <span className="line"></span>
              <span className="text" style={{marginLeft: '20px'}}>02</span>
            </div>
          </div>

          <div className="col2 col">
            <nav><span>ГЛАВНАЯ</span> ГАЛЕРЕЯ ПРОЕКТЫ СЕРТИФИКАТЫ КОНТАКТЫ</nav>
            <div className="image-container">
              <img width={770} height={829} src="/img/house_photo.png" alt="" />
              <button className="button" onClick={() => window.location.href = "/show"}>
                ВЗГЛЯНУТЬ
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path fill-rule="evenodd" clip-rule="evenodd" d="M3 11.5C3 11.2239 3.22386 11 3.5 11L19.5 11C19.7761 11 20 11.2239 20 11.5C20 11.7761 19.7761 12 19.5 12L3.5 12C3.22386 12 3 11.7761 3 11.5Z" fill="#333333"/>
                  <path fill-rule="evenodd" clip-rule="evenodd" d="M15.6464 7.64645C15.8417 7.45118 16.1583 7.45118 16.3536 7.64645L20.2071 11.5L16.3536 15.3536C16.1583 15.5488 15.8417 15.5488 15.6464 15.3536C15.4512 15.1583 15.4512 14.8417 15.6464 14.6464L18.7929 11.5L15.6464 8.35355C15.4512 8.15829 15.4512 7.84171 15.6464 7.64645Z" fill="#333333"/>
                </svg>
              </button>
            </div>
          </div>
        </div>
      </header>

      <section>
        <div className="about d-flex">
          <div className="main container">
            <div className="row">
              <div className="col1 col-4" style={col_about1}>
                <img height={265} src="/img/about1.png" alt="" />
                <img height={140} src="/img/about3.png" style={{ marginTop: '30px'}} alt="" />
              </div>
              <div className="col2 col-4 d-flex align-items-center justify-content-center" style={{...col_about1, ...col_about2}}>
                <img height={345} src="/img/about2.png" alt="" />
              </div>
              <div className="col3 col-4" style={col_about3}>
                <h1>О компании</h1>
                <p style={{ marginTop: '20px'}}>Lorem Ipsum is simply dummy text of the printing and typesetting industry. 
                  Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, 
                  when an unknown printer took a galley of type and scrambled it to make a type specimen book. 
                  It has survived not only five centuries, but also the leap into electronic typesetting, 
                  remaining essentially unchanged.</p>
                <button className="button" onClick={() => window.location.href = "/about"}>
                  ЧИТАТЬ
                  <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path fill-rule="evenodd" clip-rule="evenodd" d="M3 11.5C3 11.2239 3.22386 11 3.5 11L19.5 11C19.7761 11 20 11.2239 20 11.5C20 11.7761 19.7761 12 19.5 12L3.5 12C3.22386 12 3 11.7761 3 11.5Z" fill="#333333"/>
                    <path fill-rule="evenodd" clip-rule="evenodd" d="M15.6464 7.64645C15.8417 7.45118 16.1583 7.45118 16.3536 7.64645L20.2071 11.5L16.3536 15.3536C16.1583 15.5488 15.8417 15.5488 15.6464 15.3536C15.4512 15.1583 15.4512 14.8417 15.6464 14.6464L18.7929 11.5L15.6464 8.35355C15.4512 8.15829 15.4512 7.84171 15.6464 7.64645Z" fill="#333333"/>
                  </svg>
                </button>
              </div>
            </div>
          </div>
          
        </div>
      </section>

      <section>
        <h1>Основные задачи</h1>
        <div className="tasks">
          <div className="row">
            <div className="col">
              <div className="row">
                <div className="col-3"><h3>1</h3></div>
                <div className="col-6">
                  <p width={'279px'}>Создание комфортных условий и повышение качества обслуживания клиентов</p>
                </div>
              </div>
            </div>
            <div className="col">
              <div className="row">
                <div className="col-3"><h3>2</h3></div>
                <div className="col-9">
                  <p>Постоянно совершенствовать качество предоставляемых услуг путем обучения персонала, 
                    закупки нового оборудования и усиленной рекламы на рынке</p>
                </div>
              </div>
            </div>
          </div>
        </div>
        
      </section>

      <section>
      <h1>Наши проекты</h1>
        <div className="projects">
          <div className="part1 row">
            <div className="col">
              <div className="project1">
                <img className="project1_image" src="/img/project1.png" alt="" />
                <p className="project1_header">ДОСУГОВЫЙ ЦЕНТР</p>
                <p className="project1_link">ПОДРОБНЕЕ</p>
                <svg className="project1_arrow" width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path fill-rule="evenodd" clip-rule="evenodd" d="M3 11.4998C3 11.2236 3.22386 10.9998 3.5 10.9998L19.5 10.9998C19.7761 10.9998 20 11.2236 20 11.4998C20 11.7759 19.7761 11.9998 19.5 11.9998L3.5 11.9998C3.22386 11.9998 3 11.7759 3 11.4998Z" fill="white"/>
                  <path fill-rule="evenodd" clip-rule="evenodd" d="M15.6464 7.6462C15.8417 7.45094 16.1583 7.45094 16.3536 7.6462L20.2071 11.4998L16.3536 15.3533C16.1583 15.5486 15.8417 15.5486 15.6464 15.3533C15.4512 15.158 15.4512 14.8415 15.6464 14.6462L18.7929 11.4998L15.6464 8.35331C15.4512 8.15805 15.4512 7.84146 15.6464 7.6462Z" fill="white"/>
                </svg>
              </div>
            </div>
            <div className="col"><img className="project2" src="/img/project2.png" alt="" /></div>
          </div>

          <div className="part2 row">
            <div className="col"><img src="/img/project3.png" alt="" /></div>
            <div className="col"><img src="/img/project4.png" alt="" /></div>
            <div className="col"><img src="/img/project5.png" alt="" /></div>
          </div>

          <button className="button" onClick={() => window.location.href = "/projects"}>
            ВСЕ ПРОЕКТЫ
            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path fill-rule="evenodd" clip-rule="evenodd" d="M3 11.4998C3 11.2236 3.22386 10.9998 3.5 10.9998L19.5 10.9998C19.7761 10.9998 20 11.2236 20 11.4998C20 11.7759 19.7761 11.9998 19.5 11.9998L3.5 11.9998C3.22386 11.9998 3 11.7759 3 11.4998Z" fill="white"/>
              <path fill-rule="evenodd" clip-rule="evenodd" d="M15.6464 7.6462C15.8417 7.45094 16.1583 7.45094 16.3536 7.6462L20.2071 11.4998L16.3536 15.3533C16.1583 15.5486 15.8417 15.5486 15.6464 15.3533C15.4512 15.158 15.4512 14.8415 15.6464 14.6462L18.7929 11.4998L15.6464 8.35331C15.4512 8.15805 15.4512 7.84146 15.6464 7.6462Z" fill="white"/>
            </svg>
          </button>
        </div>
      </section>

      <section>
        <h1>Связаться с нами</h1>
        <div className="connect">
          <div className="row">
            <div className="col1 col">
              <form>
                <div>
                  <label htmlFor="name"></label>
                  <input type="text" id="name" name="name" placeholder="Имя" />
                </div>
                <div>
                  <label htmlFor="phone"></label>
                  <input type="tel" id="phone" name="phone" placeholder="Номер телефона*" required />
                </div>
                <div>
                  <label htmlFor="email"></label>
                  <input type="email" id="email" name="email" placeholder="E-mail*" required />
                </div>
                <div>
                  <label htmlFor="item"></label>
                  <input type="item" id="item" name="item" placeholder="Интересующий товар/услуга" />
                </div>
                <div>
                  <label htmlFor="message"></label>
                  <textarea id="message" name="message" placeholder="Сообщение*" required />
                </div>
                <p style={{marginLeft: '40px', width: '333px'}}>Отправляя заявку Вы соглашаетесь с политикой конфиденциальности</p>
                <button className="button" type="submit">
                  ОТПРАВИТЬ
                  <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path fill-rule="evenodd" clip-rule="evenodd" d="M3 11.4998C3 11.2236 3.22386 10.9998 3.5 10.9998L19.5 10.9998C19.7761 10.9998 20 11.2236 20 11.4998C20 11.7759 19.7761 11.9998 19.5 11.9998L3.5 11.9998C3.22386 11.9998 3 11.7759 3 11.4998Z" fill="white"/>
                    <path fill-rule="evenodd" clip-rule="evenodd" d="M15.6464 7.6462C15.8417 7.45094 16.1583 7.45094 16.3536 7.6462L20.2071 11.4998L16.3536 15.3533C16.1583 15.5486 15.8417 15.5486 15.6464 15.3533C15.4512 15.158 15.4512 14.8415 15.6464 14.6462L18.7929 11.4998L15.6464 8.35331C15.4512 8.15805 15.4512 7.84146 15.6464 7.6462Z" fill="white"/>
                  </svg>
                </button>
                
              </form>
            </div>
            
            <div className="col2 col">
              <img width={749} height={369} src="img/connect.png" style={{marginTop: '11px'}} alt="" />
            </div>
          </div>
        </div>
      </section>

      <footer>
        <div className='main'>
          <div className="row">
            <div className="col1 col">
              <img src="img/big_icon.png" alt=""></img>
            </div>

            <div className="col2 col">
              <h2>Информация</h2>
              <p>Главная</p>
              <p>Галерея</p>
              <p>Проекты</p>
              <p>Сертификаты</p>
              <p>Контакты</p>
            </div>

            <div className="col3 col">
              <h2>Контакты</h2>
              <div className="location">
                <img src="/img/location.png" alt="" />
                <span>100000, Республика  Казахстан,</span>
              </div>
              <p className="location_text">г. Караганда, ул. Телевизионная 10</p>

              <div className="phone">
                <img src="/img/phone.png" alt="" />
                <span className="phone_text">+38 (000) 000 00 00</span>
              </div>

              <div className="mail">
                <img src="/img/mail.png" alt="" />
                <span className="mail_text">mail@gmail.com</span>
              </div>
            </div>

            <div className="col4 col">
              <h2>Социальные сети</h2>
              <div>
                <img className="first" src="/img/facebook.png" alt="" />
                <img src="/img/twitter.png" alt="" />
                <img src="/img/linkedin.png" alt="" />
                <img src="/img/pininterest.png" alt="" />
              </div>
            </div>
          </div>
        </div>
        <div className="license">
          <hr style={{color: '#FFFFFF', marginTop: '40px'}}></hr>
          <p>© 2019 Digital Project. Все права защищены.</p>
        </div>
      </footer>

      
    </div>
  );
}

export default App;
