import SuccessPopUp from ".";

function NotificationPreferencesPopUp() {
  return (
    <SuccessPopUp
      tag="notificationPreferenceSuccess"
      heading="Notification Preferences"
      successHeading="Preferences saved"
      successLeading="Your preferences have been successfully saved."
      buttonText="View Notification Settings"
      buttonAction={() => {}}
    />
  );
}

export default NotificationPreferencesPopUp;
