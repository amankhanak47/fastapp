import React from 'react'
import { Link } from 'react-router-dom'

function MyOrder() {
  return (
      <div className="game_main_users_table">
              <table className="game_main_users_table_table">
                <tr>
                  <th>Period</th>
                  <th>Select</th>
                  <th>Point</th>
                  <th>Result</th>
                  <th>Amount</th>
                </tr>
              
               
               
          </table>
          <Link to={"/order"} className="my_order_btn">more {">"}</Link>
            </div>
  )
}

export default MyOrder
