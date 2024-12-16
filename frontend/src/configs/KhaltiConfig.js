// src/khaltiConfig.js
const khaltiConfig = {
    // Use your actual public key here for production
    publicKey: "e50b27770d104861800b4b69aa7a2f37",
    
    productIdentity: "12312313121",
    productName: "Test Product",
    productUrl: "http://localhost:3000",
  
    eventHandler: {
      onSuccess(payload) {
        console.log("Payment successful!", payload);
        alert("Payment was successful!");
      },
      onError(error) {
        console.error("Payment failed:", error);
        alert("Payment failed. Please try again.");
      },
      onClose() {
        console.log("Payment widget closed.");
      },
    },
  };
  
  export default khaltiConfig;
  