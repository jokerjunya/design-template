"use client"

const Footer = () => {
  const currentYear = new Date().getFullYear()

  const footerSections = [
    {
      title: "Shop and Learn",
      links: ["Store", "Mac", "iPad", "iPhone", "Watch", "Vision", "AirPods", "TV & Home", "AirTag", "Accessories", "Gift Cards"]
    },
    {
      title: "Apple Wallet",
      links: ["Wallet", "Apple Card", "Apple Pay", "Apple Cash"]
    },
    {
      title: "Account",
      links: ["Manage Your Apple ID", "Apple Store Account", "iCloud.com"]
    },
    {
      title: "Entertainment",
      links: ["Apple One", "Apple TV+", "Apple Music", "Apple Arcade", "Apple Fitness+", "Apple News+", "Apple Podcasts", "Apple Books", "App Store"]
    },
    {
      title: "Apple Store",
      links: ["Find a Store", "Genius Bar", "Today at Apple", "Apple Camp", "Apple Store App", "Certified Refurbished", "Apple Trade In", "Financing", "Carrier Deals at Apple", "Order Status", "Shopping Help"]
    },
    {
      title: "For Business",
      links: ["Apple and Business", "Shop for Business"]
    },
    {
      title: "For Education",
      links: ["Apple and Education", "Shop for K-12", "Shop for College"]
    },
    {
      title: "For Healthcare",
      links: ["Apple in Healthcare", "Health on Apple Watch", "Health Records on iPhone"]
    },
    {
      title: "For Government",
      links: ["Shop for Government", "Shop for Veterans and Military"]
    },
    {
      title: "Apple Values",
      links: ["Accessibility", "Education", "Environment", "Inclusion and Diversity", "Privacy", "Racial Equity and Justice", "Supplier Responsibility"]
    },
    {
      title: "About Apple",
      links: ["Newsroom", "Apple Leadership", "Career Opportunities", "Investors", "Ethics & Compliance", "Events", "Contact Apple"]
    }
  ]

  return (
    <footer className="bg-card">
      <div className="max-w-[1024px] mx-auto px-6 sm:px-8 lg:px-12">
        <div className="py-4 text-[12px] text-muted-foreground leading-[16px]">
          1. Trade-in values will vary based on the condition, year, and configuration of your eligible trade-in device. Not all devices are eligible for credit. You must be at least 18 years old to be eligible to trade in for credit or for an Apple Gift Card. Trade-in value may be applied toward qualifying new device purchase, or added to an Apple Gift Card. Actual value awarded is based on receipt of a qualifying device matching the description provided when estimate was made. Sales tax may be assessed on full value of a new device purchase. In-store trade-in requires presentation of a valid photo ID (local law may require saving this information). Offer may not be available in all stores, and may vary between in-store and online trade-in. Some stores may have additional requirements. Apple or its trade-in partners reserve the right to refuse or limit quantity of any trade-in transaction for any reason. For more details, see Apple&apos;s Trade In Terms and Conditions.
        </div>

        <div className="border-t border-border py-8">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-8">
            {footerSections.map((section, index) => (
              <div key={section.title} className={index === 0 ? "lg:col-span-1" : ""}>
                <h3 className="font-semibold text-[12px] text-foreground mb-3">
                  {section.title}
                </h3>
                <ul className="space-y-2">
                  {section.links.map((link) => (
                    <li key={link}>
                      <a
                        href="#"
                        className="text-[12px] text-muted-foreground hover:underline transition-all"
                      >
                        {link}
                      </a>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>

        <div className="border-t border-border py-4">
          <div className="flex flex-col md:flex-row justify-between items-start md:items-center text-[12px] text-muted-foreground">
            <div className="mb-4 md:mb-0">
              <p>More ways to shop: <a href="#" className="text-primary hover:underline">Find an Apple Store</a> or <a href="#" className="text-primary hover:underline">other retailer</a> near you. Or call 1-800-MY-APPLE.</p>
            </div>
          </div>
        </div>

        <div className="border-t border-border py-4">
          <div className="flex flex-col md:flex-row justify-between items-start md:items-center text-[12px] text-muted-foreground">
            <div className="mb-4 md:mb-0">
              Copyright © {currentYear} Apple Inc. All rights reserved.
            </div>
            <div className="flex flex-wrap gap-4">
              <a href="#" className="hover:underline">Privacy Policy</a>
              <span>|</span>
              <a href="#" className="hover:underline">Terms of Use</a>
              <span>|</span>
              <a href="#" className="hover:underline">Sales and Refunds</a>
              <span>|</span>
              <a href="#" className="hover:underline">Legal</a>
              <span>|</span>
              <a href="#" className="hover:underline">Site Map</a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  )
}

export default Footer
