function Counter(){
    const state = React.useState(0)

    const num = state[0]
    const updateNum = state[1]

    function plus(){
        updateNum(num+1)
    }
    
    function min(){
        updateNum(num-1)
    }
    return(
        <>
            <button className='plus-btn' onClick={plus} >+</button>
            <h1 className='number'>{num}</h1>
            <button className='min-btn' onClick={min}>-</button>
        </>
    )
}