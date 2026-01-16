import Logo from "../assets/Logo.png"
const JobFlowLogo = ({ className }) => {
  return (
    <>
      <img
        src={Logo}
        alt="JobFlow, Job tracking web app"
        className={` ${className} object-cover mix-blend-multiply  `}
      />
    </>
  )
}

export default JobFlowLogo
