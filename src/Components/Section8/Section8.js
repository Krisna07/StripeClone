import React from "react";
import { FaComment, FaICursor, FaStripe } from "react-icons/fa";
import { BsFillCursorFill } from "react-icons/bs";

import "./Section8.css";
export const Section8 = () => {
  const Products = [
    "Atlas",
    "Billing",
    "Capital",
    "Checkout",
    "Climate",
    "Climate",
    "Corporate Card",
    "Data pipeline",
    "Elements",
    "Financial Connection",
    "Identity",
    "Invoicing",
    "Issuing",
    "Payments",
    "Payment Links",
    "Payouts",
    "Pricing",
    "Radar",
    "Revenue Recognition",
    "Sigma",
    "Tax",
    "Terminal",
    "Treasury",
  ];
  const useCases = [
    "Ecommerce",
    "SaaS",
    "Marketplaces",
    "Embedded Finance",
    "Platforms",
    "Creator Economy",
    "Crypto",
    "Global Businesses",
  ];
  const integration = [
    "App Marketplace",
    "Partner Ecosystem",
    "Professional Services",
  ];
  const developer = [
    "Documentation",
    "API Reference",
    "API Status",
    "API Changelog",
    "Build a Stripe App",
  ];
  const Resources = [
    "Support Center",
    "Support Plans",
    "Guides",
    "Customer Stories",
    "Blog",
    "Annual Conference",
    "Privacy & Terms",
    "Licenses",
    "COVID-19",
    "Sitemap",
    "Cookie settings",
  ];
  const company = ["Jobs", "Newsroom", "Stripe Press", "Become a Partner"];
  return (
    <div className="section8">
      <div>
        <div className="section">
          <div className="section8Container">
            <div className="itemslists">
              <div className="itemsContainer">
                <div className="itemsheading">
                  <FaStripe style={{ fontSize: "60px" }} />
                </div>
                <div className="menuLists">
                  <div className="country">
                    <BsFillCursorFill /> Australia
                  </div>
                  <div className="langauge">
                    <FaComment /> English (United States)
                  </div>
                </div>
              </div>
            </div>
            <div className="itemslists">
              <div className="itemsContainer">
                <div className="itemsheading">
                  <h4>Products</h4>
                </div>
                <div className="menuLists">
                  {Products.map((items, i) => (
                    <span key={i}>{items}</span>
                  ))}
                </div>
              </div>
            </div>
            <div className="itemslists">
              <div className="itemsContainer">
                <div className="itemsheading">
                  <h4>Use Cases</h4>
                </div>
                <div className="menuLists">
                  {useCases.map((items, i) => (
                    <span key={i}>{items}</span>
                  ))}
                </div>
              </div>
              <div className="itemsContainer">
                <div className="itemsheading">
                  <h4>Integrations & Custom Solutions</h4>
                </div>
                <div className="menuLists">
                  {integration.map((items, i) => (
                    <span key={i}>{items}</span>
                  ))}
                </div>
              </div>
              <div className="itemsContainer">
                <div className="itemsheading">
                  <h4>Developers</h4>
                </div>
                <div className="menuLists">
                  {developer.map((items, i) => (
                    <span key={i}>{items}</span>
                  ))}
                </div>
              </div>
            </div>
            <div className="itemslists">
              <div className="itemsContainer">
                <div className="itemsheading">
                  <h4>Resources</h4>
                </div>
                <div className="menuLists">
                  {Resources.map((items, i) => (
                    <span key={i}>{items}</span>
                  ))}
                </div>
              </div>
              <div>
                <div className="itemsContainer">
                  <div className="itemsheading">
                    <h4>Company</h4>
                  </div>
                  <div className="menuLists">
                    {company.map((items, i) => (
                      <span key={i}>{items}</span>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
