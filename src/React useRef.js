function Ref() {
  const text = React.useRef(null);

  React.useEffect(function () {
    text.current.textContent = "Halooo";
  });

  return (
    <>
      <h1 ref={text}></h1>
    </>
  );
}
