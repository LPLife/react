import React, { Component,Fragment } from 'react';
import './style.css';
export default class OrderItem extends Component {
  constructor(props){
    super(props);
    this.state = {
      eiditing:false,
      stars:props.data.stars||0,
      comment:true,
      btnvalue:'未评价',
      ifCommented: true
    }
  }
      rendStart() {
      const {stars} =this.state;
      return (
        <div>
        {
          [1,2,3,4,5].map((item,index)=> {
            const light = stars >= item ? '-light' : '';
            return(
        <span key={index} className={"orderItem-star"+light} onClick={this.handClickStars.bind(this,item)}>★</span>
            )
          })
        }

        </div>
      )
    }
    handleopenEditArea = () => {
      this.setState({
        eiditing:true
      })
    }
    handleCommentChange = (e) => {
      this.eiditing({
        comment: e.target.value
      })
    }
    handClickStars = (stars) => {
      console.log(stars);
      this.setState({
         stars
      })

    }
    handleCanleComment = () =>{
this.setState({
  eiditing:false,
  stars: this.props.data.stars || 0,
  comment: true,
  btnvalue: '未评价',
})
    }
    handleComment = () => {
        this.setState({
          eiditing:false,
          btnvalue:'已评价',
          comment: false
        })
      }
    rendEditArea() {
      return (
        < div className= "comment">
           <textarea className='orderItem-comment'></textarea>
           {this.rendStart()}
           <button className="orderItem-btn-red" onClick={this.handleComment}>提交</button>
           <button className = "orderItem-btn-blue" onClick={this.handleCanleComment}>取消</button>
        </div>
      )
    }
  render() {
    const {
      shop,
      product,
      price,
      picture,
    } = this.props.data;
    let {btnvalue,comment} = this.state;
    console.log({comment});
    return (
      <Fragment>
      <div className='orderItem'>
          <div className="orderItem-picContainer">
            <img className="orderItem-pic" src={picture}/>
          </div>
          <div className='orderItem-content'>
            <div className='orderItem-product'>{product}</div>
            <div className='orderItem-shop'>{shop}</div>
            <div className='orderItem-price'>{price}</div>
          </div>
          <div className='orderItem-detail'>
              <button className = {comment ? 'orderItem-btn orderItem-btn-red':'orderItem-btn orderItem-btn-gray'}  onClick={this.handleopenEditArea}> {btnvalue} </button>
        </div>
       
      </div>
       {
         this.state.eiditing ? this.rendEditArea() : null
       }
      </Fragment>
    )

  }
}
