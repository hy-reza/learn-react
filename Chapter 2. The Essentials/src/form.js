function Form() {

    let [nama,setNama] = React.useState()
  
  
    return (
      <>
        <form onSubmit={function(event){
          event.preventDefault()
        }}>
          <label>Nama : </label>
          <input type='text' onChange={function(event){
            setNama(event.target.value)
          }}/>
          <button type='submit'>Submit</button>
  
          <h1>Halo namaku {nama}</h1>
        </form>
      </>
    );
  }