import React, { Component } from 'react';
import logo from './logo.svg';
import 'css/App.css';




class App extends Component {
  // render() {
  //   return (
  //     <div className="App">
  //       <header className="App-header">
  //         <img src={logo} className="App-logo" alt="logo" />
  //         <p>
  //           Edit <code>src/App.js</code> and save to reload.
  //         </p>
  //         <a
  //           className="App-link"
  //           href="https://reactjs.org"
  //           target="_blank"
  //           rel="noopener noreferrer"
  //         >
  //           Learn React
  //         </a>
  //       </header>
  //     </div>
  //   );
  // }





  render() {
    return (
      <div className="App">
        <header className="App-header">

          <p className="Title"><b>Расписание</b></p>

          <p className="Date"><b>1 семестр, 2018 год</b></p>

<div className="div-Title-Shedule">

          <tr className="Tr-header">
            <td></td>
            <td>Пн</td>
            <td>Вт</td>
            <td>Ср</td>
            <td>Чт</td>
            <td>Пт</td>
            <td>Сб</td>
          </tr>

</div>

          <hr/>

<div className="div-Shedule">

{/* 10:00 */}
          <tr className="Tr-10">
            <td class="Time">10:00</td>
            <td className="Fin">финский (С)</td>
            <td></td>
            <td className="Fin">финский (С)</td>
            <td></td>
            <td></td>
            <td className="Fin">финский (С)</td>
          </tr>

{/* 11:00 */}
          <tr className="Tr-11">
            <td class="Time">11:00</td>
            <td className="Nor">норвежский (А)</td>
            <td className="Isl">исландский (А)</td>
            <td></td>
            <td className="Nor">норвежский (А)</td>
            <td className="Isl">исландский (А)</td>
            <td className="Fin">финский (С)</td>
          </tr>

{/* 17:00 */}
          <tr className="Tr-17">
            <td class="Time">17:00</td>
            <td></td>
            <td></td>
            <td className="Dat">датский (А)</td>
            <td></td>
            <td className="Dat">датский (А)</td>
            <td></td>
          </tr>

{/* 18:00 */}
          <tr className="Tr-18">
            <td class="Time">18:00</td>
            <td className="Shv">шведский (B)</td>
            <td className="Shv">шведский (A)</td>
            <td className="Shv">шведский (B)</td>
            <td className="Shv">шведский (A)</td>
            <td></td>
            <td className="Dat">датский (интенсив)</td>
          </tr>

{/* 19:00 */}
          <tr className="Tr-19">
            <td class="Time">19:00</td>
            <td className="Isl">исландский (А)</td>
            <td className="Nor">норвежский (А)</td>
            <td className="Isl">исландский (А)</td>
            <td className="Nor">норвежский (А)</td>
            <td></td>
            <td className="Dat">датский (интенсив)</td>
          </tr>

{/* 20:00 */}
          <tr className="Tr-20">
            <td class="Time">20:00</td>
            <td className="Fin">финский (A/B)</td>
            <td className="Shv">шведский (С)</td>
            <td className="Fin">финский (A/B)</td>
            <td className="Shv">шведский (С)</td>
            <td className="Shv">шведский (С)</td>
            <td className="Isl">исландский (А)</td>
          </tr>

{/* 21:00 */}
          <tr className="Tr-21">
            <td class="Time">21:00</td>
            <td className="Dat">датский (B)</td>
            <td className="Dat">датский (интенсив)</td>
            <td className="Nor">норвежский (А)</td>
            <td className="Nor">норвежский (А)</td>
            <td></td>
            <td></td>
          </tr>
</div>
<div className="div-Button">
<button className="Button">Добавить в календарь</button>
</div>
        </header>
      </div>
    );
  }
}

export default App;
