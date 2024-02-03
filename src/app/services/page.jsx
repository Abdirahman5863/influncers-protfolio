import React from "react";

const services = () => {
  return (
    <div>
      <section id="services" className="section my-8">
        <h2 className="text-2xl font-bold">Services</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
          <div className="card">
            <h3 className="text-xl font-semibold">Content Creation</h3>
            <p>Engaging and creative content tailored to your brand.</p>
          </div>
          <div className="card">
            <h3 className="text-xl font-semibold">Brand Collaborations</h3>
            <p>Partnering with brands to promote products and services.</p>
          </div>
          <div className="card">
            <h3 className="text-xl font-semibold">Social Media Strategy</h3>
            <p>Strategic planning for effective social media presence.</p>
          </div>
        </div>
      </section>{" "}
    </div>
  );
};

export default services;
