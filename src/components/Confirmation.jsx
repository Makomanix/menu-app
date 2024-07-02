export default function Confirmation({actions}){

  return (
    <>
      <div>
        <h3>Order Confirmed</h3>
        <p>Thank you for your order. We will send you an email shortly with more information shortly.</p>
      </div>
      {actions}
      </>
  )
}