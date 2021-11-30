function DOM() {
  let judulRef = React.useRef();
  console.log(judulRef);
  React.useEffect(function () {
    judulRef.current.innerHTML = 'Halo';
    judulRef.current.className = 'judul';
  });
  return /*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement("h1", {
    ref: judulRef
  }, "Ini judul"));
}