import React from "react";
import Form from './Form';

const Home = (props) => {
  const { handleSubmit } = props;
      return (
        <div className="container">
            <Form handleSubmit={handleSubmit}></Form>
        </div>
      );
}
 
export default Home;