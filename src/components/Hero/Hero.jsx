import { fadeIn, staggerContainer } from "../../utils/motion";
import css from "./Hero.module.scss";
import { motion } from "framer-motion";
import activity from '../../assets/activity.png';
import business from '../../assets/business.png';
import savemoney from '../../assets/savemoney.png';
import stockmarket from '../../assets/stockmarket.png';
import certificate from '../../assets/certificate.png';

const Hero = () => {
    const containerVariants = {
        hidden: {},
        show: {
            transition: {
                staggerChildren: 0.5 // Stagger the animations of children
            }
        }
    };

    const itemVariants = {
        hidden: { y: 30, opacity: 0 },
        show: { y: 0, opacity: 1, transition: { duration: 0.5 } }
    };
    return (
        <section className={`paddings ${css.wrapper}`}>
            <motion.div
                variants={staggerContainer}
                initial="hidden"
                whileInView="show"
                viewport={{ once: false, amount: 0.25 }}
                className={`innerWidth ${css.container}`}
            >
                <div className={css.upperElements}>
                    <motion.span className="primaryText" variants={fadeIn("right", "tween", 0.2, 1)}>
                        Hey There,
                        <br />
                        Welcome to this site.
                    </motion.span>
                    <motion.span className="secondaryText" variants={fadeIn("left", "tween", 0.4, 1)}>
                        We design beautiful simple
                        <br />
                        things, And We love what We do{" "}
                    </motion.span>
                </div>

               {/* Icons container */}
               <motion.div className={css.iconsContainer} variants={containerVariants}>
                    {/* First row */}
                    <div className={css.iconRow}>
                        <motion.div className={css.centerIcons} variants={itemVariants}>
                            <img src={activity} alt="Activity" />
                        </motion.div>
                        <motion.div className={css.centerIcons} variants={itemVariants}>
                            <img src={business} alt="Business" />
                        </motion.div>
                    </div>

                    {/* Second row */}
                    <div className={css.iconRow}>
                        <motion.div className={css.centerIcons} variants={itemVariants}>
                            <img src={savemoney} alt="Save Money" />
                        </motion.div>
                        <motion.div className={css.centerIcons} variants={itemVariants}>
                            <img src={stockmarket} alt="Stock Market" />
                        </motion.div>
                    </div>
                </motion.div>

                <a className={css.email} href="mailto:CodeBros@gmail.com">
                    CodeBros@gmail.com
                </a>

                <div className={css.lowerElements}>
                    <motion.div variants={fadeIn("right", "tween", 0.3, 1)} className={css.experience}>
            <div className="primaryText">3</div>
            <div className="secondaryText">
              <div>Years</div>
              <div>Experience</div>
            </div>
          </motion.div>

                    <motion.div variants={fadeIn("left", "tween", 0.5, 1)} className={css.certificate}>
                        <img src={certificate} alt="certificate" />
                        <span>CERTIFIED PROFATIONAL</span>
                        <span>Web Design Services</span>
                    </motion.div>
                </div>
            </motion.div>
        </section>
    );
};

export default Hero;