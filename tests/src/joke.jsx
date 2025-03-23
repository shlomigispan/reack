import React from 'react';
export default function Joke(props) {
  /**
   * Challenge:
   * - Create state `isShown` (boolean, default to `false`)
   * - Add a button that toggles the value back and forth
   */

  const [isShown, setIsShown] = React.useState(false);

  function onClk(){

    setIsShown(isShown =>{
      return (
        isShown? false : true

      )
    })
  }

  

  console.log(isShown)
  return (
      <div>
          {props.setup && <h3>{props.setup}</h3>}
          <p>{props.punchline}</p>
          <hr />
          <button onClick={onClk}>Toggle Punchline</button>
      </div>
  )
}