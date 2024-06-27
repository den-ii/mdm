import RegSuccess from "@/components/account/RegSuccess";

function VerificationPage() {
  return (
    <RegSuccess
      image="/assets/thumbs_up.svg"
      imageAlt="Signed Up"
      title="Thanks for signing up with us"
      message="Please check the provided email to verify your account. Please note that the email maybe in your spam folder."
    />
  );
}

export default VerificationPage;
