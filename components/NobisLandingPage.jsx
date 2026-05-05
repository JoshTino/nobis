import { motion } from "framer-motion"
import {Menu, X} from "lucide-react"
import { useState } from "react"

const fadeUp = {
  hidden: { opacity: 0, y: 50 },
  show: { opacity: 1, y: 0, transition: { duration: 0.6 } }
};

export default function NobisLandingPage() {
  const [menuOpen, setMenuOpen] = useState(false);

  const services = [
    {
      "service": "Eye Examination",
      "img": "https://scontent.flos5-3.fna.fbcdn.net/v/t39.30808-6/477052496_600494686172621_554728624743607894_n.jpg?_nc_cat=110&ccb=1-7&_nc_sid=13d280&_nc_eui2=AeF4WW4tytuwExT3IszJsp6aHYcX3esqhZ8dhxfd6yqFn7qWmTjTc9wN4nsXsXDw5_1HoIHHnRSD15JZjQUQgXtQ&_nc_ohc=dTs3VD2URN0Q7kNvwF-Okkt&_nc_oc=Ado9UXlacYIZWT5L9VsIvthLx6-9SicjNrr-wIZ_Q-BSoIyKnJQZJzyKzviYJhcOVSE&_nc_zt=23&_nc_ht=scontent.flos5-3.fna&_nc_gid=huWiplmpHIvLoPh4nBUD0g&_nc_ss=7b2a8&oh=00_Af6KB9zicLF4WtnjLHGrHyivdksWi5rX9jqDyA5vFBVeyw&oe=69FEF58F"
    },
    {
      "service": "Cataract Treatment",
      "img": "https://www.shutterstock.com/image-photo/tanga-tanzania-12102023-african-mans-600nw-2398663135.jpg"
    },
    {
      "service": "Glasses & Lenses",
      "img": "https://images.unsplash.com/photo-1517948430535-1e2469d314fe?fm=jpg&q=60&w=3000&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Nnx8ZXllJTIwZG9jdG9yfGVufDB8fDB8fHww"
    },
    {
      "service": "Glaucoma Screening",
      "img": "https://scontent.flos5-2.fna.fbcdn.net/v/t39.30808-6/480760613_610147938540629_8002029493379170018_n.jpg?_nc_cat=102&ccb=1-7&_nc_sid=13d280&_nc_eui2=AeFEGd5FgMxmDJgpqW2j4iSwma7mnlGhWaGZruaeUaFZod_eysjwZHG60hqBBs1EKZHlcSNhtRsA2gS8NBv8OQ0F&_nc_ohc=dLuzkLTV5v4Q7kNvwHR2DWu&_nc_oc=AdpoSwOW4pYgPfau-l1CIi4Y-k5ASJIzXFLyrcmUsX-n8wEw_3Zhw2O2rBOJ1laEKSs&_nc_zt=23&_nc_ht=scontent.flos5-2.fna&_nc_gid=2KrqnTqnwHmEOOF0Izou2g&_nc_ss=7b2a8&oh=00_Af6iOdZynAWHuxFma4pvLteIm5fP4gnTD6GRQzd-cxcBAw&oe=69FEF51A"
    },
    {
      "service": "Eye Surgery",
      "img": "https://scontent.flos5-2.fna.fbcdn.net/v/t39.30808-6/470171865_561302413425182_3986673748604036148_n.jpg?_nc_cat=104&ccb=1-7&_nc_sid=7b2446&_nc_eui2=AeFP_TLEFepnn1Kp9W78tfATV30G1zFgWBpXfQbXMWBYGmaxd3WLGROutThrlKGfAc4Wui3tq91jAqe_D0RZXYv_&_nc_ohc=dy727TrxaTwQ7kNvwEc8jc_&_nc_oc=Adrxn6f1CpJZdn91yuzQ1EsfIfxzqauGLXRbMbfi7qYTG8wVMSQK9utn1bbQOWMeyf0&_nc_zt=23&_nc_ht=scontent.flos5-2.fna&_nc_gid=FeHA22sYRemXM5prD0I6fA&_nc_ss=7b2a8&oh=00_Af4hb20l8O5BV-Zy8Vy_7_HLv1nTxsBv57PYrR9Ftmnvtg&oe=69FF082F"
    },
    {
      "service": "Consultation",
      "img": "https://scontent.flos5-3.fna.fbcdn.net/v/t51.82787-15/671771695_18002889866863233_733160933003938205_n.webp?stp=dst-jpg_tt6&_nc_cat=109&ccb=1-7&_nc_sid=13d280&_nc_eui2=AeEobnCop0m7a_J8O36MeeHAr_Cd2My1A0av8J3YzLUDRm-6wCk9u8o38RyrzUTYqP2cxf3gfUaKBfmjWFZxK5Tb&_nc_ohc=y7Cn6CoQShgQ7kNvwE6m7sm&_nc_oc=AdqGQEFK3mFa9hUEmnO7V7m37RLKTkNCIHs4a7WgLRa40ZCG1aDjsc0stLYg6xaVM3c&_nc_zt=23&_nc_ht=scontent.flos5-3.fna&_nc_gid=Bj23bzP65eEu5l4hqk67ew&_nc_ss=7b2a8&oh=00_Af5tE9vcs6OyLDcKieraocN59YpCvyAkajhoXDhJnWkSqQ&oe=69FF0E2E"
    }
  ];

  const goals = ["Preventing Vision Loss", "Accessible Services", "Community Education"];

  const testimonials = [
    {
      "name": "Mr Yakubu Inusa",
      "comment": "Great service and professional care. Highly recommend!"
    },
    {
      "name": "Esther Magaji",
      "comment": "Best eye exam experience I've had. The facility is clean and modern, and the optometrist was incredibly detailed."
    },
    {
      "name": "Usman Aminu",
      "comment": "Amazing service and a great selection of frames. I'm so happy with my new glasses!"
    }
  ];

  return (
    <div className="font-sans text-gray-800">

      {/* NAVBAR */}
      <nav className="fixed w-full bg-white shadow z-50">
        <div className="max-w-6xl mx-auto px-6 py-4 flex justify-between items-center">
          <img src="/images/logo.png" className="h-13" />

          <div className="hidden md:flex gap-6 items-center">
            <a className="font-nunito" href="#services">Services</a>
            <a className="font-nunito" href="#about">About</a>
            <a className="font-nunito" href="#contact">Contact</a>
            <a className="font-nunito font-semibold bg-blue-600 text-white px-4 py-2 rounded-lg">Book</a>
          </div>

          <button
            className="md:hidden"
            onClick={() => setMenuOpen(!menuOpen)}
          >
            
            {menuOpen ? <X size={30} /> : <Menu size={30}/>}
          </button>
        </div>

        {menuOpen && (
          <div className="md:hidden px-6 pb-4 flex flex-col gap-4 bg-white">
            <a className="font-nunito font-semibold text-lg" href="#services">Services</a>
            <a className="font-nunito font-semibold text-lg" href="#about">About</a>
            <a className="font-nunito font-semibold text-lg" href="#contact">Contact</a>
          </div>
        )}
      </nav>

      {/* HERO */}
      <section className="pt-24 bg-gradient-to-r from-blue-50 to-white min-h-screen flex items-center">
        <div className="max-w-6xl mx-auto px-6 grid md:grid-cols-2 gap-10 items-center">
          <motion.div variants={fadeUp} initial="hidden" whileInView="show" viewport={{ once: true }}>
            <h1 className="font-nunito text-4xl md:text-5xl font-bold mb-4">Clear Vision Starts Here</h1>
            <p className="font-nunito text-lg text-gray-600 mb-6">Trusted eye care services in Jalingo. Book your consultation today.</p>
            <div className="flex gap-4 flex-wrap">
              <a href="https://wa.me/0000" className="font-nunito font-semibold bg-blue-600 text-white px-6 py-3 rounded-xl shadow">Book Appointment</a>
              <a href="tel:08160727080" className="font-nunito border border-blue-600 text-blue-600 px-6 py-3 rounded-xl">Call Now</a>
            </div>
          </motion.div>

          <motion.img
            src="https://scontent.flos5-2.fna.fbcdn.net/v/t39.30808-6/477789660_600494682839288_6900571546279223779_n.jpg?_nc_cat=105&ccb=1-7&_nc_sid=13d280&_nc_eui2=AeFTa-v_JE5oKglkDC6eRJnR_r4ZG429AIn-vhkbjb0Aic9YYQQf3ebPJU5iBi2Z7gHa9Yeo6fdeR4-8k-2ny3p2&_nc_ohc=cVLFFEkDmkYQ7kNvwHzflR_&_nc_oc=AdphwfixMTEnhgXfPq7wADHGFi4jXIfssRUXzQJU-xy5JeQAvdDVwKnmKZqd9NLyM5Y&_nc_zt=23&_nc_ht=scontent.flos5-2.fna&_nc_gid=GH7XNz8mOLcvuvHwwWFHZg&_nc_ss=7b2a8&oh=00_Af5EXtBx5DbhElR9GyuoNql6C-i37npe7rNOH8VVD7ikgw&oe=69FE9A1C"
            className="rounded-2xl shadow-lg w-full"
            variants={fadeUp}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true }}
          />
        </div>
      </section>

      {/* SERVICES */}
      <section id="services" className="py-16 bg-white">
        <div className="max-w-6xl mx-auto px-6 text-center">
          <motion.h2 variants={fadeUp} initial="hidden" whileInView="show" className="font-nunito text-3xl font-bold mb-10">Our Services</motion.h2>

          <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-8">
            {services.map((service, i) => (
              <motion.div
                key={i}
                variants={fadeUp}
                initial="hidden"
                whileInView="show"
                whileHover={{ scale: 1.05 }}
                className="p-6 rounded-2xl shadow bg-blue-50"
              >
                <img src={service.img} className="mx-auto h-70 w-80 mb-2 object-cover" />
                <h3 className="font-nunito font-bold text-lg">{service.service}</h3>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* ABOUT */}
      <section id="about" className="py-16 bg-blue-50">
        <div className="max-w-6xl mx-auto px-6 grid md:grid-cols-2 gap-10 items-center">
          <motion.img
            src="https://scontent.flos5-3.fna.fbcdn.net/v/t39.30808-6/480723818_609489135273176_3530249144461717374_n.jpg?_nc_cat=108&ccb=1-7&_nc_sid=7b2446&_nc_eui2=AeEp9lxA4HlOboHlJicn65KksVbKeBUmhXuxVsp4FSaFe3lExa4FgKL3Y2_eE1vXUax8AHAMknxzcQXdzsdLn_BY&_nc_ohc=G8zM4iw1RA8Q7kNvwG8a35W&_nc_oc=AdrPWee-3vAzS4kQ5J2oj6MKRRBiFzUcV3PFlKQQbwKOG_N_X_IgaZMRIOkptQxp0lc&_nc_zt=23&_nc_ht=scontent.flos5-3.fna&_nc_gid=OxrKpTLcOnH4ujOBBJc_zg&_nc_ss=7b2a8&oh=00_Af6PjH3O40W6tDa4HYiqO3pAqQbYmw1pEO9vNqWfwtb3CA&oe=69FE9BDD"
            className="rounded-2xl shadow w-full"
            variants={fadeUp}
            initial="hidden"
            whileInView="show"
          />

          <motion.div variants={fadeUp} initial="hidden" whileInView="show">
            <h2 className="font-nunito text-3xl font-bold mb-4">About Us</h2>
            <p className="font-nunito text-gray-600">
              At Nobis Eye Center, we are committed to delivering quality eye care services using modern equipment and experienced professionals. Your vision is our priority.
            </p>
            <h2 className="font-nunito text-2xl font-bold my-4">Our Mission</h2>
            <ul className="list-disc list-inside font-nunito text-gray-600">
              {goals.map((goal, i) => (
                <li className="my-2">{goal}</li>
              ))}
            </ul>
          </motion.div>
        </div>
      </section>

      {/* TESTIMONIALS */}
      <section className="py-16 bg-white">
        <div className="max-w-6xl mx-auto px-6 text-center">
          <motion.h2 variants={fadeUp} initial="hidden" whileInView="show" className="font-nunito text-3xl font-bold mb-10">What Patients Say</motion.h2>

          <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-8">
            {testimonials.map((testimonial, i) => (
              <motion.div
                key={i}
                variants={fadeUp}
                initial="hidden"
                whileInView="show"
                whileHover={{ y: -5 }}
                className="p-6 rounded-2xl shadow bg-gray-50"
              >
                {/*<img src="https://via.placeholder.com/80" className="rounded-full mx-auto mb-4" />*/}
                <p className="font-nunito text-gray-600 italic">“{testimonial.comment}”</p>
                <h4 className="font-nunito mt-4 font-semibold">- {testimonial.name} -</h4>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CONTACT */}
      <section id="contact" className="py-16 bg-blue-50">
        <div className="max-w-6xl mx-auto px-6 grid md:grid-cols-2 gap-10">
          <motion.div variants={fadeUp} initial="hidden" whileInView="show">
            <h2 className="text-3xl font-nunito font-bold mb-4">Contact Us</h2>
            <p className="font-nunito mb-4 text-gray-600">Visit us in Jalingo or book an appointment today.</p>
            <p className="font-nunito"><strong>Address:</strong> Mile-Six, Yola Road, P.O Box 1313, Jalingo, Taraba State</p>
            <p className="font-nunito"><strong>Phone:</strong> +234 816 072 7080</p>
            <p className="font-nunito"><strong>Hours:</strong> Mon - Sat: 9am - 5pm</p>
          </motion.div>

          <motion.iframe
            variants={fadeUp}
            initial="hidden"
            whileInView="show"
            className="w-full h-64 rounded-2xl"
            src="https://maps.google.com/maps?q=NOBIS+Eye+Centre+Jalingo&t=&z=13&ie=UTF8&iwloc=&output=embed"
          />
        </div>
      </section>

      {/* CTA */}
      <section className="py-16 bg-blue-600 text-white text-center">
        <motion.div variants={fadeUp} initial="hidden" whileInView="show">
          <h2 className="font-nunito text-2xl px-2 font-bold mb-6">Book Your Eye Check Today</h2>
          <a href="https://wa.me/0000" className="font-nunito bg-white text-blue-600 px-6 py-3 rounded-xl font-semibold">Book Appointment</a>
        </motion.div>
      </section>

      {/* FOOTER */}
      <footer className="bg-gray-900 text-gray-400 py-6 text-center">
        <p className="font-nunito">© {new Date().getFullYear()} Nobis Eye Center. All rights reserved.</p>
      </footer>

    </div>
  );
}