import { TiTick } from "react-icons/ti";
import { RxCross2 } from "react-icons/rx";


function Card({ item }) {
  return (
    <div className="col">
      <div
        className={`card mb-4 rounded-3 shadow-sm ${
          item.boxFocus ? "border-primary" : ""
        }`}
        style={{ width: '302px' }} 
        
      >
        <div
          className={`text-center card-header py-4 ${
            item.boxFocus ? "text-bg-primary border-primary" : ""
          } `}
        >
          <h4 className="my-0 fw-normal">{item.planName}</h4>
        </div>
        <div className="card-body">
          <h1 className="card-title pricing-card-title">
            ${item.price}
            <small className="text-body-secondary fw-light">/month</small>
          </h1>
          <ul className="list-unstyled mt-3 mb-4">
            {item.features.map((feature, index) => (
              <li key={index}>
                {feature.enabled ? (
                  <span style={{ marginRight: '4px' }}>
                    <TiTick size={15}/>
                    {feature.name}
                  </span>
                ) : (
                  <>
                    <RxCross2 size={15} style={{ marginRight: '4px' }} />
                    <del>{feature.name}</del>
                  </>
                )}
              </li>
            ))}
          </ul>
          <button
            type="button"
            className={`w-100 btn btn-lg ${
              item.buttonFocus ? "btn-primary" : "btn-outline-primary"
            }`}
          >
            Button
          </button>
        </div>
      </div>
    </div>
  );
}

export default Card;
