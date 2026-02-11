// Question 2a: Component to calculate and display a number & the root of that number
// in h1 html element. The number is passed as props.

interface NumberRootProps {
  number: number;
}

export default function NumberRoot({ number }: NumberRootProps) {
  const squareRoot = Math.sqrt(number);

  return (
    <div style={{ margin: '20px' }}>
      <h1>Number: {number}</h1>
      <h1>Square Root: {squareRoot.toFixed(4)}</h1>
    </div>
  );
}
