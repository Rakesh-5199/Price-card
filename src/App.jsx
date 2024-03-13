import "./App.css";
import Card from "./Card";
import "/node_modules/bootstrap/dist/css/bootstrap.css";

function App() {
  let data = [
    {
      planName: "Free",
      price: 0,
      features: [
        {
          name: "Single User",
          enabled : true
        },
        {
          name: "50GB Storage",
          enabled : true
        },
        {
          name: "Unlimited Public Projects",
          enabled : true
        },
        {
          name: "Community Access",
          enabled : true
        },
        {
          name: "Unlimited Private Projects ",
          enabled : false
        },
        {
          name: "Dedicated Phone Support ",
          enabled : false
        },

        {
          name: "Free Subdomain ",
          enabled : false
        },

        {
          name: "Monthlu Status Report ",
          enabled : false
        },
      ],

    },
    {
      planName: "Plus",
      price: 9,
      features: [

        {
          name: "5 User",
          enabled : true
        },
        {
          name: "50GB Storage",
          enabled : true
        },
        {
          name: "Unlimited Public Projects",
          enabled : true
        },
        {
          name: "Community Access",
          enabled : true
        },
        {
          name: "Unlimited Private Projects ",
          enabled : true
        },
        {
          name: "Dedicated Phone Support ",
          enabled : true
        },

        {
          name: "Free Subdomain ",
          enabled : true
        },

        {
          name: "Monthlu Status Report ",
          enabled : false
        },
        
      ],
      buttonFocus : true
    },
    {
      planName: "Pro",
      price: 49,
      features: [
        {
          name: "Unlimited User",
          enabled : true
        },
        {
          name: "50GB Storage",
          enabled : true
        },
        {
          name: "Unlimited Public Projects",
          enabled : true
        },
        {
          name: "Community Access",
          enabled : true
        },
        {
          name: "Unlimited Private Projects ",
          enabled : true
        },
        {
          name: "Dedicated Phone Support ",
          enabled : true
        },

        {
          name: "Free Subdomain ",
          enabled : true
        },

        {
          name: "Monthlu Status Report ",
          enabled : true
        },
      ],
      buttonFocus : true,
      boxFocus : true
    },
  ];
  return (
    <div className="container" style={ { paddingLeft : "250px"}}>
      <div className="row">
        
        {data.map((item, index) => {
          return <Card item={item} key={index} />;
        })}
      </div>
    </div>
  );
}

export default App;