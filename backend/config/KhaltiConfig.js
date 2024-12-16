import axios  from "axios";

// Function to verify Khalti Payment
async function verifyKhaltiPayment(pidx) {
  console.log(pidx)
  const headersList = {
    "Authorization": `Key 94faee1be89b4d629bdd015c8f569861`,
    "Content-Type": "application/json",
  };

  const bodyContent = JSON.stringify({ pidx });

  const reqOptions = {
    url: `${process.env.KHALTI_GATEWAY_URL}/api/v2/epayment/lookup/`,
    method: "POST",
    headers: headersList,
    data: bodyContent,
  };

  try {
    const response = await axios.request(reqOptions);
    return response.data;
  } catch (error) {
    console.error("Error verifying Khalti payment:", error);
    throw error;
  }
}

// Function to initialize Khalti Payment
// "Authorization": `Key ${process.env.KHALTI_SECRET_KEY} 94faee1be89b4d629bdd015c8f569861`,
// url: `${process.env.KHALTI_GATEWAY_URL}/api/v2/epayment/initiate/`,
async function initializeKhaltiPayment(details) {
  const headersList = {
    "Authorization": `Key 94faee1be89b4d629bdd015c8f569861`,
    "Content-Type": "application/json",
  };
  
  const bodyContent = JSON.stringify(details);
  console.log(bodyContent)
  
  const reqOptions = {
    url: `https://a.khalti.com/api/v2/epayment/initiate/`,
    method: "POST",
    headers: headersList,
    data: bodyContent,
  };

  try {
    const response = await fetch("https://a.khalti.com/api/v2/epayment/initiate/",
      {
        method:"POST",
        headers: {
          "Authorization": `Key 94faee1be89b4d629bdd015c8f569861`,
          "Content-Type": "application/json",
        },
        body:JSON.stringify(details)
      }
    );
    console.log("res=>",response)
    return response.data;
  } catch (error) {
    console.error("Error initializing Khalti payment:", error);
    throw error;
  }
}

export  { verifyKhaltiPayment, initializeKhaltiPayment };