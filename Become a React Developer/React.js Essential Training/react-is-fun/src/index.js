import React from 'react';
import ReactDOM from 'react-dom';

function SkiDayCounter({total, powder, backcountry, goal}){
  return (
    <section>
      <div>
        <p>Total Days: {total}</p>
      </div>
      <div>
        <p>(Powder Days: {powder}, Backcountry Days: {backcountry})</p>
      </div>
      <div>
        <p>Goal Days: {goal}</p>
      </div>
      <div>
        <p>Goal Progress: {total/goal * 100 + '%'}</p>
      </div>
    </section>
  )
}

let skiData = {
  total: 50,
  powder: 20,
  backcountry: 10,
  goal: 100
}

ReactDOM.render(
  <SkiDayCounter
    total={skiData.total}
    powder={skiData.powder}
    backcountry={skiData.backcountry}
    goal={skiData.goal}
  />,
  document.getElementById('root')
);
