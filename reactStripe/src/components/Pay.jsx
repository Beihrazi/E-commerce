import React from 'react'
import StripeCheckout from 'react-stripe-checkout';
import { useState, useEffect } from 'react';
import axios from 'axios';

const KEY="pk_test_51OPPvjSANyBuauNli1UN1KCQFF8uNS3sDXPZ1g7PaYFEAe7bSxBKZhZknLflmjMOtDiC5nkRMx7TPE7TnmwKldKz00g7VXq0lZ"

const Pay = () => {
    // const [stripeToken, setStripeToken] = useState(null)

    const onToken = (token) => {
       console.log(token)
    }

    // useEffect(() => {
    //     const makeRequest = async () => {
    //         try{
    //             const res = await axios.post(
    //                 "http://localhost:5000/api/checkout/payment",{
    //                     tokenId: stripeToken.id,
    //                     amount:2000,
    //                 }
    //             )
    //             console.log(res.data)
    //         }catch(err){
    //             console.log(err)
    //         }
    //     }
    //     stripeToken && makeRequest
    // }, [stripeToken])

  return (
    <div>
        <StripeCheckout name="Bei SHop"
            image="https://avatars.githubusercontent.com/u/1486366?v=4"
            billingAddress
            shippingAddress
            description='Your total is $20'
            amount = {2000}
            token={onToken}
            stripeKey={KEY}
        >
        <button 
            style={{
                border:"none",
                width: 120,
                borderRadius: 5,
                padding: "20px",
                backgroundColor: "black",
                color: "white",
                fontWeight: "600",
                cursor: "pointer",
            }}
        > Pay Now</button>
        </StripeCheckout>
    </div>
  )
}

export default Pay