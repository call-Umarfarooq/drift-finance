import logoImg from "../../imports/Drift_Secondary_FullColor_Email_signature.png";

interface LogoProps {
  className?: string;
}

export function Logo({ className = "h-8" }: LogoProps) {
  return (
    <img
      src={logoImg}
      alt="Drift Financial"
      className={className}
    />
  );
}
