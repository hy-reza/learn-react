function Conditional() {
    let [kenyang, setKenyang] = React.useState(false);
  
    const makanan = ["Pecel", "Soto", "Rawon", "Nasi Goreng"];
    return (
      <>
        {kenyang ? <h1> anda sudah kenyang</h1> : <h1> Anda Belum makan </h1>}
        {!kenyang && (
          <div>
            <ol>
              {makanan.map(function (menu) {
                return <li key={menu}>{menu}</li>;
              })}
            </ol>
            <button
              onClick={function () {
                setKenyang(true);
              }}
            >
              Makan
            </button>
          </div>
        )}
      </>
    );
  }