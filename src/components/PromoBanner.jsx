import { useEffect, useState } from 'react';

function PromoBanner() {
  const [timeLeft, setTimeLeft] = useState(10);

  useEffect(() => {
    const timer = setInterval(() => {
      setTimeLeft(prev => {
        if (prev === 0) {
          clearInterval(timer);
          return 0;
        }
        return prev - 1;
      });
    }, 1000);

    return () => clearInterval(timer);
  }, []);

  return (
    <div className="banner">
      {timeLeft > 0 ? (
        <>
          <h3>Акція!</h3>
          <p>Безкоштовна консультація з вибраним лікарем</p>
          <p>До завершення акції: {timeLeft} сек</p>
        </>
      ) : (
        <>
          <h3>Акція завершилась</h3>
          <p>Безкоштовна консультація більше недоступна.</p>
        </>
      )}
    </div>
  );
}

export default PromoBanner;