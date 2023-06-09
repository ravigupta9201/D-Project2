import { Card } from "react-bootstrap";

import Image from "next/image";

const WhyDynamic_Card = ({heading}) => {
  return (
    <div>
      <Card style={{  background:"#f5f5f5", margin:"10px" }}>
      <Card.Header className="py-3 d-flex ">
        {" "}
        <Image src="/badge.svg" alt="my-logo" width={25} height={25} /> 
        <h4>{heading}</h4>
      </Card.Header>
      <Card.Body>
        <Card.Text>
          Lorem ipsum dolor sit amet consectetur. Nec augu egestas etiam tempor
          fringilla. Imperdiet faucibus volutpat nisi neque arcu odio enim non.
          Laoreet dis sed nisi diam urna. Quis adipiscing facilisis ut lorem
          sollicitudin interdum.etiam tempor fringilla. Imperdiet faucibus
        </Card.Text>
      </Card.Body>
    </Card>
    </div>
    

    // <Card style={{  background:"#f5f5f5", margin:"10px" }}>
    //   <div style={{display: "flex", justifyContent:"center", alignItems:"center", gap:"20px"}}>
    //     <Image src="/badge.svg" alt="my-logo" width={25} height={25} />
    //     <h4>experience instructor</h4>
    //   </div>
    // </Card>

  );
};

export default WhyDynamic_Card;
