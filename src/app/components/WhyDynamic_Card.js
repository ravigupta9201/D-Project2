import Card from "react-bootstrap/Card";

import Image from "next/image";

const WhyDynamic_Card = () => {
  return (
    <Card style={{  background:"#f5f5f5" }}>
      <Card.Header as="h4" className="py-3">
        {" "}
        <Image src="/badge.svg" alt="my-logo" width={25} height={25} /> Highly
        experience instructor
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
  );
};

export default WhyDynamic_Card;
