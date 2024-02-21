export default function Policies() {
    return (
      <>
        <section className="bg-gray-100 py-16">
          <div className="container mx-auto px-4">
            <div className="max-w-3xl mx-auto text-center">
              <h2 className="text-3xl font-bold mb-8">Hydrasupps Policies</h2>
              <div className="grid grid-cols-1 gap-6 text-left">
                <div className="bg-white rounded-lg shadow-md p-6">
                  <h3 className="text-lg font-bold mb-4">Product Quality and Safety</h3>
                  <p className="text-gray-700 mb-4">
                    Hydrasupps is committed to providing high-quality and safe supplements. All products undergo rigorous testing to ensure they meet industry standards and regulatory requirements.
                  </p>
                </div>
                <div className="bg-white rounded-lg shadow-md p-6">
                  <h3 className="text-lg font-bold mb-4">Ingredient Transparency</h3>
                  <p className="text-gray-700 mb-4">
                    We believe in transparency regarding the ingredients used in our products. A detailed list of ingredients is provided on the product labels, and customers can find additional information on our website.
                  </p>
                </div>
                <div className="bg-white rounded-lg shadow-md p-6">
                  <h3 className="text-lg font-bold mb-4">Usage Guidelines</h3>
                  <p className="text-gray-700 mb-4">
                    Users should follow the recommended dosage and usage guidelines provided on the product packaging. Consultation with a healthcare professional is advised before starting any new supplement regimen.
                  </p>
                </div>
                {/* Add more sections as needed */}
              </div>
            </div>
          </div>
        </section>
        <section className="bg-white py-16">
          <div className="container mx-auto px-4">
            <div className="max-w-3xl mx-auto text-center">
              <div className="grid grid-cols-1 gap-6 text-left">
                <div className="bg-white rounded-lg shadow-md p-6">
                  <h3 className="text-lg font-bold mb-4">Health Disclaimer</h3>
                  <p className="text-gray-700 mb-4">
                    Hydrasupps products are not intended to diagnose, treat, cure, or prevent any disease. Individuals with pre-existing medical conditions or those taking prescription medications should consult with a healthcare professional before using our products.
                  </p>
                </div>
                <div className="bg-white rounded-lg shadow-md p-6">
                  <h3 className="text-lg font-bold mb-4">Returns and Refunds</h3>
                  <p className="text-gray-700 mb-4">
                    Our returns and refunds policy outlines the conditions under which customers can return products and request a refund. This policy is designed to ensure customer satisfaction while maintaining fairness and consistency.
                  </p>
                </div>
                <div className="bg-white rounded-lg shadow-md p-6">
                  <h3 className="text-lg font-bold mb-4">Privacy and Data Security</h3>
                  <p className="text-gray-700 mb-4">
                    Hydrasupps is committed to protecting customer privacy. Personal information provided during the purchase process is handled securely and in accordance with applicable data protection laws.
                  </p>
                </div>
                {/* Add more sections as needed */}
              </div>
            </div>
          </div>
        </section>
        {/* Add more sections as needed */}
      </>
    );
  }
  