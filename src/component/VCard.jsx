
import React, { useState, useRef, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import ele1 from '../images/ele1.jpg';

// import { useDispatchCart, useCart } from './ContextReducer's
// import { Dropdown, DropdownButton } from 'react-bootstrap';

export default function VCard(props) {
//   let data = useCart();

//   let navigate = useNavigate()
//   const [qty, setQty] = useState(1)
//   const [size, setSize] = useState("")
//   const priceRef = useRef();
  // const [btnEnable, setBtnEnable] = useState(false);
  // let totval = 0
  // let price = Object.values(options).map((value) => {
  //   return parseInt(value, 10);
  // });
//   let options = props.options;
//   let priceOptions = Object.keys(options);
//   let foodItem = props.item;
//   const dispatch = useDispatchCart();
//   const handleClick = () => {
//     if (!localStorage.getItem("token")) {
//       navigate("/login")
//     }
//   }
//   const handleQty = (e) => {
//     setQty(e.target.value);
//   }
//   const handleOptions = (e) => {
//     setSize(e.target.value);
//   }
//   const handleAddToCart = async () => {
//     let food = []
//     for (const item of data) {
//       if (item.id === foodItem._id) {
//         food = item;

//         break;
//       }
//     }
//     console.log(food)
//     console.log(new Date())
//     if (food !== []) {
//       if (food.size === size) {
//         await dispatch({ type: "UPDATE", id: foodItem._id, price: finalPrice, qty: qty })
//         return
//       }
//       else if (food.size !== size) {
//         await dispatch({ type: "ADD", id: foodItem._id, name: foodItem.name, price: finalPrice, qty: qty, size: size,img: props.ImgSrc })
//         console.log("Size different so simply ADD one more to the list")
//         return
//       }
//       return
//     }

//     await dispatch({ type: "ADD", id: foodItem._id, name: foodItem.name, price: finalPrice, qty: qty, size: size })


//     // setBtnEnable(true)

//   }

//   useEffect(() => {
//     setSize(priceRef.current.value)
//   }, [])

//   // useEffect(()=>{
//   // checkBtn();
//   //   },[data])

//   let finalPrice = qty * parseInt(options[size]);   //This is where Price is changing
//   // totval += finalPrice;
//   // console.log(totval)
  return (
    <div>

      <div className="Vcard m-3" style={{ width: "16rem", maxHeight: "360px" }}>
        <img src={ele1} className="Vcard-img-top" alt="..." style={{ height: "120px", objectFit: "fill" }} />
        <div className="Vcard-body">
          <h5 className="Vcard-title">Anil Singh</h5>
            <h6>electricain</h6>
          <h6>7yrs</h6>
         
           
          
            <div className=' d-inline ms-2 h-100 w-20 fs-5' >
              Rate: ₹300/- per hr
            </div>
          </div>
          <hr></hr>
          <button className={`btn btn-success justify-center ms-2 `} onClick={{}}>Book</button>
          <button className={`btn btn-success justify-center ms-2 `} onClick={{}}>Call</button>
        
        </div>
      </div>
   
  )
}
//