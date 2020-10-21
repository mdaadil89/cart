import React, { Component } from 'react';
import { connect } from 'react-redux'
import { addToCart } from './actions/cartActions'

 class Home extends Component{
    
    handleClick = ()=>{
        this.props.addToCart(); 
    }
    
    render(){
        
        let itemList
        if( this.props.items)
        itemList= this.props.items.map(item=>{
            return(
                <div className="card" key={item.id} >
                        <div className="card-image">
                            <img src={item.img} style={{height:"400px"}} alt={item.title}/></div>
                            <span className="card-title">{item.title}</span>
                            <span to="/" className="btn-floating halfway-fab waves-effect waves-light red" >< i onClick={()=>{this.handleClick()}} className="material-icons">add</i></span>
                        

                        <div className="card-content">
                            <p>{item.desc}</p>
                            <p><b>Price: {item.price}$</b></p>
                        </div>
                 </div>

            )
        })

        return(
            <div className="container">
                <h3 className="center">Our items</h3>
                <div className="box">
                    {itemList}
                </div>
            </div>
        )
    }
}
const mapStateToProps = (state)=>{
    console.log(state.items)
    return {
      items: state.items
    }
  }
const mapDispatchToProps= (dispatch)=>{
    
    return{
        addToCart: ()=>{dispatch(addToCart())}
    }
}

export default connect(mapStateToProps,mapDispatchToProps)(Home)