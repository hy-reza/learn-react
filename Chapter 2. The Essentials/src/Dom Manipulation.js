function DOM() {

    let judulRef = React.useRef()
  
    console.log(judulRef)
  
    React.useEffect(function(){
      judulRef.current.innerHTML = 'Halo'
      judulRef.current.className = 'judul'
      
    })
  
  
    
    return (
      <>
        <h1 ref={judulRef}>Ini judul</h1>
      </>
    );
  }