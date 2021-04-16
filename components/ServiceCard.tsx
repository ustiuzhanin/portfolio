import { FunctionComponent } from "react";
import { Service } from "../type";

const ServiceCard: FunctionComponent<{ service: Service }> = ({
  service: { desc, title },
}) => {
  return (
    <div className='flex items-center p-2 space-x-4'>
      <div>
        <h4 className='font-bold '>{title}</h4>
        <p>{desc}</p>
      </div>
    </div>
  );
};

export default ServiceCard;
