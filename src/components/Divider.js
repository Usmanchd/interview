import useWatchChanges from '../hooks/useWatchChanges';

const initialValue = 6;

function Divide() {
  const value = useWatchChanges(
    ['counter-state-decrement', 'counter-state-increment'],
    'value'
  );
  return (
    <div
      style={{
        border: '1px solid black',
        padding: 12,
        margin: '0 auto',
        width: '50%',
      }}
    >
      <h3>Divide</h3>
      <div>
        {initialValue} {value && `/ ${value}`}
      </div>
      <div
        style={{
          border: '1px solid black',
          padding: 12,
          margin: '0 auto',
          width: '50%',
        }}
      >
        Result: {value && (initialValue / value).toFixed(2)}
      </div>
    </div>
  );
}

export default Divide;
