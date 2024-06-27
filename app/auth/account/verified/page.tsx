import RegSuccess from "@/components/account/RegSuccess";

function AccountVerifiedPage() {
  return (
    <RegSuccess
      image="/assets/account_verified.svg"
      imageAlt="Signed Up"
      title="Hi Scarlett"
      message="We are pleased to inform you that your accoun verification was successful, 
      kindly click on the button below to go to your dashboard"
      link="/"
      linkMsg="Go to Dashboard"
    />
  );
}

export default AccountVerifiedPage;
