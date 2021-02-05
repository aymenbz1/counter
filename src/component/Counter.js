import React from 'react'
import {connect} from "react-redux"
import {increment} from "../JS/actions/ActionCounter"

const Counter =(props)=>{
<div>

<button className='decrement'>-</button>
<span>{0}</span>
<button className='increment'>+</button>
</div>
}
const mapStateToProps = (state) => {
    return {
      counter: state.reducerCounter.count,
    };
  };

  export default connect(mapStateToProps, { increment, decrement})(
    Counter
  );

// const increment=(state)=>{
//     return{
//         counter:state.count
//     }
// }
// const mapDispatchToProps=(dispatch)=>{
//     return {increment:()=> dispatch (increment())}
// }
// export default connect (mapStateToProps,mapDispatchToProps) (Counter);