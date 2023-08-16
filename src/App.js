import 'bootstrap/dist/css/bootstrap.min.css';

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
          <div className="col-md-4">
            <img className="icon" width={68.55} height={41.53} src="/img/icon.jpg" alt="" />
            <h1>PROJECT</h1>
            <h2>HOME</h2>
            <div>
              <img src="/img/left_arrow.png" alt="" />
              <img src="/img/right_arrow.png" style={{ marginLeft: '22.99px'}} alt="" />
            </div>
            <img src="/img/slide_numbers.png" alt="" />
          </div>

          <div className="col-md-8">
            <nav className="menu"><span>ГЛАВНАЯ</span> ГАЛЕРЕЯ ПРОЕКТЫ СЕРТИФИКАТЫ КОНТАКТЫ</nav>
            <div width={770} height={829} className="image-container">
              <img src="/img/house_photo.png" alt="" />
              <img className="bottom-left" src="/img/show.png" alt="" />
            </div>
          </div>
        </div>
      </header>

      <section>
        <div className="about d-flex">
          <div className="main container">
            <div className="row">
              <div className="col-4" style={col_about1}>
                <img height={265} src="/img/about1.png" alt="" />
                <img height={140} src="/img/about3.png" style={{ marginTop: '30px'}} alt="" />
              </div>
              <div className="col-4 d-flex align-items-center justify-content-center" style={{...col_about1, ...col_about2}}>
                <img height={345} src="/img/about2.png" alt="" />
              </div>
              <div className="col-4" style={col_about3}>
                <h1>О компании</h1>
                <p style={{ marginTop: '20px'}}>Lorem Ipsum is simply dummy text of the printing and typesetting industry. 
                  Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, 
                  when an unknown printer took a galley of type and scrambled it to make a type specimen book. 
                  It has survived not only five centuries, but also the leap into electronic typesetting, 
                  remaining essentially unchanged.</p>
                <img src="/img/read.png" style={{ marginTop: '20px'}} alt="" />
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
                <img className="project1_arrow" src="/img/project1_arrow.png" alt="" />
              </div>
            </div>
            <div className="col"><img className="project2" src="/img/project2.png" alt="" /></div>
          </div>

          <div className="part2 row">
            <div className="col"><img src="/img/project3.png" alt="" /></div>
            <div className="col"><img src="/img/project4.png" alt="" /></div>
            <div className="col"><img src="/img/project5.png" alt="" /></div>
          </div>

          <div className="project_link">
            <div className="black-box">
              <p>ВСЕ ПРОЕКТЫ</p>
            </div>
          </div>

        </div>
      </section>
    </div>
  );
}

export default App;
