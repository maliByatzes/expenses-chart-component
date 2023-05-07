
import './App.css'

function App() {

  return (
    <>
      <header className='header__div'>
        <div className='header__div-text'>
          <p className='header__div-text-balance'>My balance</p>
          <p className='header__div-text-amount'>$921.48</p>
        </div>
        <img src="../images/logo.svg" alt="logo" width={53} height={53} />
      </header>

      <main className='main__div'>
        <h2>Spending - Last 7 days</h2>

        <div className='main__div-graphs'>
          <div className="main__div-graphs-mon">
            <div className=""></div>
            <p>mon</p>
          </div>

          <div className="main__div-graphs-tue">
            <div className=""></div>
            <p>tue</p>
          </div>

          <div className="main__div-graphs-wed">
            <div className=""></div>
            <p>wed</p>
          </div>

          <div className="main__div-graphs-thu">
            <div className=""></div>
            <p>thu</p>
          </div>

          <div className="main__div-graphs-fri">
            <div className=""></div>
            <p>fri</p>
          </div>

          <div className="main__div-graphs-sat">
            <div className=""></div>
            <p>sat</p>
          </div>

          <div className="main__div-graphs-sun">
            <div className=""></div>
            <p>sun</p>
          </div>

        </div>

        <hr />

        <div className='main__div-info'>
          <p className='main__div-info_total'>Total this month</p>
          <div className='main__div-info-amount'>
            <p className='main__div-info-amount_money'>$478.33</p>
            <p className='main__div-info-amount_change'>
              <span>+2.4%</span> <br />
              from last month
            </p>
          </div>
        </div>
      </main>
    </>
  )
}

export default App
