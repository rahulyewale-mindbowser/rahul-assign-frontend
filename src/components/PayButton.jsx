
import axios from 'axios'
import {Button} from '@mui/material'

const PayButton = (props) => {
    const cartItems={
        name:props.name,
        price:props.price,
        quantity:props.quantity,
        images:"https://i.gadgets360cdn.com/products/large/airpods-3rd-generation-519x800-1634578419.jpg?downsize=*:180",
        description:'product description'
    }
    const handlecheckout =()=>{
        axios.post(`http://localhost:8080/stripe/create-checkout-session`,
        cartItems)
        .then((res)=>{
            if(res.data.url){
                console.log(res.data.url);
                window.location.href = res.data.url
            }
        }).catch((err)=>console.log(err.message));
    }
  return (
    <>
    <Button variant='contained' sx={{ backgroundColor:'#0156FF', borderRadius:'20px',height:30 ,fontSize:10,width:'5rem',textTransform:'capitalize'}} onClick={()=>handlecheckout()}>Buy Now</Button>
    
    </>
  )
}

export default PayButton