interface SectionProp { 
    title: string, 
    blob: string, 
    description: { __html: string | TrustedHTML } | undefined, 
    imgSrc: string, 
    imgAlt: string ,
    btnText: string, 
    btnUrl: string
}

export const ServiceOffered: SectionProp[] = [
  {
    title: "Premier In-Home Nursing Care",
    blob: "We offer skilled nursing care at home, providing medication, wound, and post-surgical support.",
    description: { __html: `
            <span>
                Our Skilled Nursing services at AmeriCare are designed to provide the highest level of medical care within the comfort of your home. Our team of registered nurses and licensed practical nurses are highly trained to meet the specific needs of our clients, whether they are children with complex medical conditions or elderly adults requiring post-operative care.
            </span>
            <span>
                From medication management and wound care to disease management and post-surgical support, our skilled nurses ensure that you or your loved one receives the best possible care to promote healing, recovery, and overall well-being.
            </span>
    `},
    imgSrc: "https://americare.sirv.com/rusty-watson-yIGinlYA6t8-unsplash.jpg",
    imgAlt: "Nurse photo 001",
    btnText: "Learn more",
    btnUrl: "#"
  },
  {
    title: "Specialty Care Services",
    blob: "Our Specialty Care offers expert support for Alzheimer's, dementia, Parkinson's, ALS, and similar conditions.",
    description: {
        __html: `
        <span>
            AmeriCare's Specialty Care services are designed for clients with unique healthcare needs. Our caregivers are trained to support specific conditions like Alzheimer's, dementia, Parkinson's, and ALS.
        </span>
        <span>
            We work with you and your healthcare team to create a personalized care plan that ensures safety, comfort, and quality of life.
        </span>
        <span>
            Our goal is to help you manage these conditions comfortably within the familiar environment of your home.
        </span>
        `
    },
    imgSrc: "https://americare.sirv.com/icons/cdc-T9SwaYf6g40-unsplash.jpg",
    imgAlt: "Nurse photo 001",
    btnText: "Learn more",
    btnUrl: "#"
  },
  {
    title: "Personal Care Services",
    blob: "Our Personal Care services help you stay safe at home with daily activity assistance.",
    description: {
        __html: `
        
            <span>
                At AmeriCare, we understand the importance of maintaining independence while staying safe and comfortable at home. Our Personal Care services offer assistance with daily activities such as bathing, dressing, grooming, meal preparation, and mobility support.
            </span>
            <span>
                Our compassionate caregivers are dedicated to preserving your dignity and quality of life while providing the essential support you need to thrive in your own environment.
            </span>
            <span>
                We tailor our care to your unique requirements, promoting independence and enhancing your overall well-being.
            </span>
      `
    },
    imgSrc: "https://americare.sirv.com/cdc-GnLuuG9crEY-unsplash.jpg",
    imgAlt: "Nurse photo 001",
    btnText: "Learn more",
    btnUrl: "#"
  },
  {
    title: "Companionship Services",
    blob: "Companionship at AmeriCare means meaningful human connection and practical assistance to combat loneliness.",
    description: {
        __html: `
        <span>
            Companionship is key to emotional well-being. Our Companionship services offer not just practical assistance but also meaningful human connection.
        </span>
        <span>
            Our caregivers are more than helpers; they're friendly faces, listeners, and companions. Through conversation, games, or shared meals, they bring warmth and social interaction.
        </span>
        <span>
            Loneliness won't be a concern with AmeriCare's home healthcare services.
        </span>
      `
    },
    imgSrc: "https://americare.sirv.com/cdc-GnLuuG9crEY-unsplash.jpg",
    imgAlt: "Nurse photo 001",
    btnText: "Learn more",
    btnUrl: "#"
  }
];